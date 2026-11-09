<script lang="ts">
	import { cn } from "#lib/utils.ts";
	import {
		readNormalizedTextContent,
		segmentText,
		splitGraphemes,
	} from "#lib/utils/text-utils.ts";
	import { motion, useInView, type AnimationOptions, type Variants } from "motion-sv";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	type SplitMode = "words" | "characters" | "lines";
	type StaggerFrom = "first" | "last" | "center";

	type CharacterUnit = {
		id: string;
		value: string;
		index: number;
	};

	type RenderItem =
		| {
				kind: "group";
				id: string;
				characters: CharacterUnit[];
		  }
		| {
				kind: "whitespace";
				id: string;
				value: string;
				index: number;
		  };

	interface SlideUpTextProps extends HTMLAttributes<HTMLSpanElement> {
		children: Snippet;
		split?: SplitMode;
		delay?: number;
		stagger?: number;
		from?: StaggerFrom;
		transition?: AnimationOptions;
		class?: string;
		wordClass?: string;
		charClass?: string;
		autoStart?: boolean;
		onStart?: () => void;
		onComplete?: () => void;
		triggerOnView?: boolean;
		once?: boolean;
	}

	const defaultTransition: AnimationOptions = {
		type: "tween",
		ease: [0.625, 0.05, 0, 1],
		duration: 0.5,
	};

	let {
		children,
		split = "words",
		delay = 0,
		stagger = 0.1,
		from = "first",
		transition = defaultTransition,
		class: className,
		wordClass,
		charClass,
		autoStart = true,
		onStart,
		onComplete,
		triggerOnView = false,
		once = true,
		...props
	}: SlideUpTextProps = $props();

	let element = $state<HTMLSpanElement | null>(null);
	let sourceElement = $state<HTMLSpanElement | null>(null);
	let sourceText = $state("");
	let isAnimating = $state(false);
	let animationCycle = $state(0);
	let completedCycle = $state(0);
	let hasPlayedInView = false;

	let previousSourceText = "";
	let previousShouldAnimate = false;
	let view = useInView(
		() => (triggerOnView ? element : null)!,
		() => ({ once, amount: 0.2 }) as any
	);

	function syncSourceText() {
		sourceText = readNormalizedTextContent(sourceElement);
	}

	const items = $derived.by<RenderItem[]>(() => {
		if (!sourceText) {
			return [];
		}

		if (split === "lines") {
			return sourceText.split("\n").map((line, index) => ({
				kind: "group" as const,
				id: `line-${index}`,
				characters: [
					{
						id: `line-${index}-0`,
						value: line || "\u00A0",
						index,
					},
				],
			}));
		}

		let renderItems: RenderItem[] = [];
		let cursor = 0;

		for (let [tokenIndex, token] of segmentText(sourceText).entries()) {
			if (token.kind === "whitespace") {
				renderItems.push({
					kind: "whitespace",
					id: `whitespace-${tokenIndex}`,
					value: token.value,
					index: cursor,
				});

				cursor += 1;
				continue;
			}

			let characters =
				split === "characters"
					? splitGraphemes(token.value).map((value, characterIndex) => ({
							id: `token-${tokenIndex}-${characterIndex}`,
							value,
							index: cursor + characterIndex,
						}))
					: [
							{
								id: `token-${tokenIndex}-0`,
								value: token.value,
								index: cursor,
							},
						];

			cursor += characters.length;

			renderItems.push({
				kind: "group",
				id: `group-${tokenIndex}`,
				characters,
			});
		}

		return renderItems;
	});

	const totalUnits = $derived(
		items.reduce((sum, item) => sum + (item.kind === "group" ? item.characters.length : 1), 0)
	);

	const lastUnitIndex = $derived(totalUnits - 1);
	const isInView = $derived(triggerOnView ? view.current : true);
	const shouldAnimate = $derived(totalUnits > 0 && isAnimating && isInView);

	function getStaggerDelay(index: number) {
		if (from === "last") {
			return Math.max(0, totalUnits - 1 - index) * stagger;
		}

		if (from === "center") {
			let center = Math.floor(totalUnits / 2);
			return Math.abs(center - index) * stagger;
		}

		return index * stagger;
	}

	const variants = $derived.by<Variants>(() => ({
		hidden: { y: "100%" },
		visible: (index: number) => ({
			y: 0,
			transition: {
				...transition,
				delay:
					delay +
					(typeof transition.delay === "number" ? transition.delay : 0) +
					getStaggerDelay(index),
			},
		}),
	}));

	function startInternalAnimation() {
		if (!sourceText) {
			return;
		}

		isAnimating = true;
	}

	function handleUnitComplete(definition: unknown, unitIndex: number) {
		if (definition !== "visible" || !shouldAnimate || unitIndex !== lastUnitIndex) {
			return;
		}

		if (completedCycle === animationCycle) {
			return;
		}

		completedCycle = animationCycle;
		onComplete?.();
	}

	export function startAnimation() {
		startInternalAnimation();
	}

	export function reset() {
		isAnimating = false;
	}

	$effect(() => {
		if (!sourceElement) {
			sourceText = "";
			return;
		}

		syncSourceText();

		let observer = new MutationObserver(() => syncSourceText());
		observer.observe(sourceElement, {
			childList: true,
			subtree: true,
			characterData: true,
		});

		return () => observer.disconnect();
	});

	$effect(() => {
		if (sourceText === previousSourceText) {
			return;
		}

		previousSourceText = sourceText;
		hasPlayedInView = false;
		reset();
	});

	$effect(() => {
		if (!sourceText || !autoStart || triggerOnView) {
			return;
		}

		startInternalAnimation();
	});

	$effect(() => {
		if (!triggerOnView) {
			return;
		}

		if (!isInView) {
			if (!once) {
				hasPlayedInView = false;
				reset();
			}

			return;
		}

		if (!sourceText || (once && hasPlayedInView)) {
			return;
		}

		hasPlayedInView = true;
		startInternalAnimation();
	});

	$effect(() => {
		if (shouldAnimate && !previousShouldAnimate) {
			animationCycle += 1;
			completedCycle = 0;
			onStart?.();
		}

		previousShouldAnimate = shouldAnimate;
	});
</script>

<span
	bind:this={element}
	class={cn(
		split === "lines" ? "inline-flex flex-col items-start" : "whitespace-nowrap",
		className
	)}
	{...props}
>
	<span bind:this={sourceElement} class="sr-only">
		{@render children()}
	</span>

	{#each items as item (item.id)}
		{#if item.kind === "group"}
			<span
				aria-hidden="true"
				class={cn("inline-flex overflow-hidden whitespace-pre-wrap", wordClass)}
			>
				{#each item.characters as character (character.id)}
					<span class={cn("relative overflow-hidden whitespace-pre-wrap", charClass)}>
						<motion.span
							class="inline-block whitespace-pre-wrap"
							initial="hidden"
							animate={shouldAnimate ? "visible" : "hidden"}
							custom={character.index}
							{variants}
							onAnimationComplete={(definition) =>
								handleUnitComplete(definition, character.index)}
						>
							{character.value}
						</motion.span>
					</span>
				{/each}
			</span>
		{:else}
			<span aria-hidden="true" class="relative overflow-hidden whitespace-pre-wrap">
				<motion.span
					class="inline-block whitespace-pre-wrap"
					initial="hidden"
					animate={shouldAnimate ? "visible" : "hidden"}
					custom={item.index}
					{variants}
					onAnimationComplete={(definition) => handleUnitComplete(definition, item.index)}
				>
					{item.value}
				</motion.span>
			</span>
		{/if}
	{/each}
</span>
