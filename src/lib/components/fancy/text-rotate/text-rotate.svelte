<script lang="ts">
	import { tick } from "svelte";
	import { cn } from "$lib/utils";
	import {
		AnimatePresence,
		createLayoutMotion,
		motion,
		type AnimatePresenceProps,
		type MotionProps,
		type Transition,
	} from "motion-sv";
	import type { HTMLAttributes, SvelteHTMLElements } from "svelte/elements";

	type ElementType = keyof SvelteHTMLElements;
	type SplitBy = "words" | "characters" | "lines" | string;
	type StaggerFrom = "first" | "last" | "center" | "random" | number;
	type MotionState<T extends keyof MotionProps> = MotionProps[T] | MotionProps[T][];
	type RootAttributes = {
		[K in keyof HTMLAttributes<HTMLElement>]?: Exclude<HTMLAttributes<HTMLElement>[K], null>;
	} & {
		style?: MotionProps["style"];
	};

	interface RenderGroup {
		characters: string[];
		needsSpace: boolean;
		offset: number;
		key: string;
	}

	interface TextRotateProps extends RootAttributes {
		texts: string[];
		as?: ElementType;
		rotationInterval?: number;
		initial?: MotionState<"initial">;
		animate?: MotionState<"animate">;
		exit?: MotionState<"exit">;
		animatePresenceMode?: AnimatePresenceProps["mode"];
		animatePresenceInitial?: boolean;
		staggerDuration?: number;
		staggerFrom?: StaggerFrom;
		transition?: Transition;
		loop?: boolean;
		auto?: boolean;
		splitBy?: SplitBy;
		onNext?: (index: number) => void;
		mainClassName?: string;
		splitLevelClassName?: string;
		elementLevelClassName?: string;
		class?: string;
	}

	const defaultTransition: Transition = {
		type: "spring",
		damping: 25,
		stiffness: 300,
	};

	function splitIntoCharacters(text: string) {
		if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
			const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
			return Array.from(segmenter.segment(text), ({ segment }) => segment);
		}

		return Array.from(text);
	}

	function buildRenderGroups(text: string, indexSeed: number, splitMode: SplitBy): RenderGroup[] {
		if (!text) {
			return [];
		}

		if (splitMode === "characters") {
			const words = text.split(" ");
			let offset = 0;

			return words.map((word, index) => {
				const characters = splitIntoCharacters(word);
				const group = {
					characters,
					needsSpace: index !== words.length - 1,
					offset,
					key: `${indexSeed}-${index}-${word}`,
				};

				offset += characters.length;
				return group;
			});
		}

		const segments =
			splitMode === "words"
				? text.split(" ")
				: splitMode === "lines"
					? text.replace(/\r\n?/g, "\n").split("\n")
					: text.split(splitMode);

		let offset = 0;

		return segments.map((segment, index) => {
			const group = {
				characters: [segment],
				needsSpace: splitMode === "words" && index !== segments.length - 1,
				offset,
				key: `${indexSeed}-${index}-${segment}`,
			};

			offset += 1;
			return group;
		});
	}

	function pickMotionState<T>(value: T | T[], index: number): T {
		if (Array.isArray(value)) {
			return value[index % value.length] as T;
		}

		return value;
	}

	let {
		texts,
		as = "p",
		rotationInterval = 2000,
		initial = { y: "100%", opacity: 0 },
		animate = { y: 0, opacity: 1 },
		exit = { y: "-120%", opacity: 0 },
		animatePresenceMode = "wait",
		animatePresenceInitial = false,
		staggerDuration = 0,
		staggerFrom = "first",
		transition = defaultTransition,
		loop = true,
		auto = true,
		splitBy = "characters",
		onNext,
		mainClassName,
		splitLevelClassName,
		elementLevelClassName,
		class: className,
		...props
	}: TextRotateProps = $props();

	const layout = createLayoutMotion(motion);

	let currentTextIndex = $state(0);
	let measuredTextIndex = $state(0);
	let pendingMeasuredTextIndex = $state<number | null>(null);
	let widthProbeIndex = $state(0);
	let widthProbeRef = $state<HTMLSpanElement | null>(null);
	let textWidths = $state<number[]>([]);
	let LayoutComponent = $derived(layout[as as keyof typeof layout]);

	function getTextWidth(index: number) {
		return textWidths[index] ?? splitIntoCharacters(texts[index] ?? "").length;
	}

	const applyIndexChange = layout.update.with((newIndex: number) => {
		if (getTextWidth(newIndex) >= getTextWidth(measuredTextIndex)) {
			measuredTextIndex = newIndex;
			pendingMeasuredTextIndex = null;
		} else {
			pendingMeasuredTextIndex = newIndex;
		}

		currentTextIndex = newIndex;
		onNext?.(newIndex);
	});

	let currentText = $derived(texts[currentTextIndex] ?? "");
	let measuredText = $derived(texts[measuredTextIndex] ?? "");
	let widthProbeText = $derived(texts[widthProbeIndex] ?? "");

	let renderGroups = $derived.by<RenderGroup[]>(() =>
		buildRenderGroups(currentText, currentTextIndex, splitBy)
	);
	let measuredRenderGroups = $derived.by<RenderGroup[]>(() =>
		buildRenderGroups(measuredText, measuredTextIndex, splitBy)
	);
	let widthProbeRenderGroups = $derived.by<RenderGroup[]>(() =>
		buildRenderGroups(widthProbeText, widthProbeIndex, splitBy)
	);

	let totalCharacters = $derived.by(() =>
		renderGroups.reduce((sum, group) => sum + group.characters.length, 0)
	);

	function getStaggerDelay(index: number, totalCharacters: number) {
		const total = Math.max(totalCharacters, 1);

		if (staggerFrom === "first") return index * staggerDuration;
		if (staggerFrom === "last") return (total - 1 - index) * staggerDuration;

		if (staggerFrom === "center") {
			const center = Math.floor(total / 2);
			return Math.abs(center - index) * staggerDuration;
		}

		if (staggerFrom === "random") {
			const randomIndex = Math.floor(Math.random() * total);
			return Math.abs(randomIndex - index) * staggerDuration;
		}

		return Math.abs(staggerFrom - index) * staggerDuration;
	}

	function getAnimationProps(index: number) {
		return {
			initial: pickMotionState(initial, index) as MotionProps["initial"],
			animate: pickMotionState(animate, index) as MotionProps["animate"],
			exit: pickMotionState(exit, index) as MotionProps["exit"],
		};
	}

	export function next() {
		if (texts.length === 0) {
			return;
		}

		const nextIndex =
			currentTextIndex === texts.length - 1
				? loop
					? 0
					: currentTextIndex
				: currentTextIndex + 1;

		if (nextIndex !== currentTextIndex) {
			applyIndexChange(nextIndex);
		}
	}

	export function previous() {
		if (texts.length === 0) {
			return;
		}

		const previousIndex =
			currentTextIndex === 0
				? loop
					? texts.length - 1
					: currentTextIndex
				: currentTextIndex - 1;

		if (previousIndex !== currentTextIndex) {
			applyIndexChange(previousIndex);
		}
	}

	export function jumpTo(index: number) {
		if (texts.length === 0) {
			return;
		}

		const validIndex = Math.max(0, Math.min(index, texts.length - 1));

		if (validIndex !== currentTextIndex) {
			applyIndexChange(validIndex);
		}
	}

	export function reset() {
		if (currentTextIndex !== 0) {
			applyIndexChange(0);
		}
	}

	$effect(() => {
		const maxIndex = Math.max(texts.length - 1, 0);

		if (currentTextIndex > maxIndex) {
			currentTextIndex = maxIndex;
		}

		if (measuredTextIndex > maxIndex) {
			measuredTextIndex = maxIndex;
		}
	});

	$effect(() => {
		if (!auto || texts.length < 2) {
			return;
		}

		const intervalId = setInterval(() => next(), Math.max(0, rotationInterval));
		return () => clearInterval(intervalId);
	});

	$effect(() => {
		texts;
		splitBy;

		if (!widthProbeRef) {
			return;
		}

		let cancelled = false;

		queueMicrotask(async () => {
			const widths: number[] = [];

			for (let index = 0; index < texts.length; index += 1) {
				widthProbeIndex = index;
				await tick();

				if (cancelled || !widthProbeRef) {
					return;
				}

				widths[index] = widthProbeRef.offsetWidth;
			}

			textWidths = widths;
			widthProbeIndex = currentTextIndex;
		});

		return () => {
			cancelled = true;
		};
	});
</script>

<span
	class="pointer-events-none invisible fixed top-0 left-[-10000px] whitespace-pre-wrap"
	aria-hidden="true"
>
	<span
		bind:this={widthProbeRef}
		class={cn("flex flex-wrap", splitBy === "lines" && "w-full flex-col")}
	>
		{#each widthProbeRenderGroups as group (`probe-${group.key}`)}
			<span class={cn("inline-flex", splitBy === "lines" && "w-full", splitLevelClassName)}>
				{#each group.characters as character, charIndex (`probe-${group.key}-${charIndex}`)}
					<span class={cn(elementLevelClassName)}>{character}</span>
				{/each}

				{#if group.needsSpace}
					<span aria-hidden="true" class="whitespace-pre"> </span>
				{/if}
			</span>
		{/each}
	</span>
</span>

<LayoutComponent
	class={cn("relative inline-grid whitespace-pre-wrap", mainClassName, className)}
	layout
	layoutDependency={currentTextIndex}
	{transition}
	{...props as Record<string, unknown>}
>
	<span class="sr-only">{currentText}</span>

	<span
		aria-hidden="true"
		class={cn(
			"pointer-events-none invisible col-start-1 row-start-1 flex flex-wrap",
			splitBy === "lines" && "w-full flex-col"
		)}
	>
		{#each measuredRenderGroups as group (`measure-${group.key}`)}
			<span class={cn("inline-flex", splitBy === "lines" && "w-full", splitLevelClassName)}>
				{#each group.characters as character, charIndex (`measure-${group.key}-${charIndex}`)}
					<span class={cn(elementLevelClassName)}>{character}</span>
				{/each}

				{#if group.needsSpace}
					<span aria-hidden="true" class="whitespace-pre"> </span>
				{/if}
			</span>
		{/each}
	</span>

	<AnimatePresence
		mode={animatePresenceMode}
		initial={animatePresenceInitial}
		onExitComplete={() => {
			const nextMeasuredTextIndex = pendingMeasuredTextIndex;

			if (nextMeasuredTextIndex === null) {
				return;
			}

			layout.update.with(() => {
				measuredTextIndex = nextMeasuredTextIndex;
				pendingMeasuredTextIndex = null;
			})();
		}}
	>
		{#key currentTextIndex}
			<motion.span
				class={cn(
					"col-start-1 row-start-1 flex flex-wrap",
					splitBy === "lines" && "w-full flex-col"
				)}
				aria-hidden="true"
				layout
			>
				{#each renderGroups as group (group.key)}
					<span
						class={cn(
							"inline-flex",
							splitBy === "lines" && "w-full",
							splitLevelClassName
						)}
					>
						{#each group.characters as character, charIndex (`${group.key}-${charIndex}`)}
							{@const totalIndex = group.offset + charIndex}
							{@const animationProps = getAnimationProps(totalIndex)}

							<span class={cn(elementLevelClassName)}>
								<motion.span
									initial={animationProps.initial}
									animate={animationProps.animate}
									exit={animationProps.exit}
									transition={{
										...transition,
										delay: getStaggerDelay(totalIndex, totalCharacters),
									}}
									class="inline-block"
								>
									{character}
								</motion.span>
							</span>
						{/each}

						{#if group.needsSpace}
							<span aria-hidden="true" class="whitespace-pre"> </span>
						{/if}
					</span>
				{/each}
			</motion.span>
		{/key}
	</AnimatePresence>
</LayoutComponent>
