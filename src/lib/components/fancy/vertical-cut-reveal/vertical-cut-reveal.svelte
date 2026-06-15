<script lang="ts">
	import { motion, type AnimationOptions, type Variants } from "motion-sv";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils";

	type SplitBy = "words" | "characters" | "lines" | string;
	type StaggerFrom = "first" | "last" | "center" | "random" | number;

	interface WordObject {
		characters: string[];
		needsSpace: boolean;
		index: number;
	}

	interface VerticalCutRevealProps extends HTMLAttributes<HTMLSpanElement> {
		children?: Snippet;
		reverse?: boolean;
		transition?: AnimationOptions;
		splitBy?: SplitBy;
		staggerDuration?: number;
		staggerFrom?: StaggerFrom;
		containerClass?: string;
		wordLevelClass?: string;
		elementLevelClass?: string;
		onStart?: () => void;
		onComplete?: () => void;
		autoStart?: boolean;
		class?: string;
	}

	const defaultTransition: AnimationOptions = {
		type: "spring",
		stiffness: 190,
		damping: 22,
	};

	let {
		children,
		reverse = false,
		transition = defaultTransition,
		splitBy = "words",
		staggerDuration = 0.2,
		staggerFrom = "first",
		containerClass,
		wordLevelClass,
		elementLevelClass,
		onclick,
		onStart,
		onComplete,
		autoStart = true,
		class: className,
		...props
	}: VerticalCutRevealProps = $props();

	let contentProbe = $state<HTMLSpanElement | null>(null);
	let text = $state("");
	let isAnimating = $state(false);

	function splitIntoCharacters(value: string) {
		if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
			const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
			return Array.from(segmenter.segment(value), ({ segment }) => segment);
		}

		return Array.from(value);
	}

	function normalizeText(raw: string) {
		if (splitBy === "lines") {
			return raw.replace(/\r\n?/g, "\n").trim();
		}

		return raw.replace(/\s+/g, " ").trim();
	}

	let elements = $derived.by<(WordObject | string)[]>(() => {
		if (!text) {
			return [];
		}

		if (splitBy === "characters") {
			const words = text.split(" ");

			return words.map((word, index) => ({
				characters: splitIntoCharacters(word),
				needsSpace: index !== words.length - 1,
				index,
			}));
		}

		if (splitBy === "words") {
			return text.split(" ");
		}

		if (splitBy === "lines") {
			return text.split("\n");
		}

		return text.split(splitBy);
	});

	let renderGroups = $derived.by<WordObject[]>(() => {
		if (splitBy === "characters") {
			return elements as WordObject[];
		}

		return (elements as string[]).map((element, index) => ({
			characters: [element],
			needsSpace: index !== elements.length - 1,
			index,
		}));
	});

	let totalUnits = $derived.by(() => {
		if (splitBy !== "characters") {
			return elements.length;
		}

		return renderGroups.reduce(
			(sum, group) => sum + group.characters.length + (group.needsSpace ? 1 : 0),
			0
		);
	});

	function getStaggerDelay(index: number) {
		if (staggerFrom === "first") return index * staggerDuration;
		if (staggerFrom === "last") return (totalUnits - 1 - index) * staggerDuration;

		if (staggerFrom === "center") {
			const center = Math.floor(totalUnits / 2);
			return Math.abs(center - index) * staggerDuration;
		}

		if (staggerFrom === "random") {
			const randomIndex = Math.floor(Math.random() * totalUnits);
			return Math.abs(randomIndex - index) * staggerDuration;
		}

		return Math.abs(staggerFrom - index) * staggerDuration;
	}

	let variants = $derived.by<Variants>(() => ({
		hidden: { y: reverse ? "-100%" : "100%" },
		visible: (index: number) => ({
			y: 0,
			transition: {
				...transition,
				delay:
					(typeof transition.delay === "number" ? transition.delay : 0) +
					getStaggerDelay(index),
			},
		}),
	}));

	function startInternalAnimation() {
		isAnimating = true;
		onStart?.();
	}

	export function startAnimation() {
		startInternalAnimation();
	}

	export function reset() {
		isAnimating = false;
	}

	$effect(() => {
		if (!autoStart) {
			return;
		}

		startInternalAnimation();
	});

	$effect(() => {
		if (!contentProbe) {
			text = "";
			return;
		}

		const probe = contentProbe;

		const syncText = () => {
			text = normalizeText(probe.textContent ?? "");
		};

		syncText();

		const observer = new MutationObserver(() => syncText());
		observer.observe(probe, { childList: true, characterData: true, subtree: true });

		return () => observer.disconnect();
	});
</script>

<span
	class={cn(
		"flex flex-wrap whitespace-pre-wrap",
		splitBy === "lines" && "flex-col",
		containerClass,
		className
	)}
	{onclick}
	{...props}
>
	<span class="sr-only">{text}</span>

	<span
		bind:this={contentProbe}
		aria-hidden="true"
		class="pointer-events-none absolute whitespace-pre-wrap opacity-0"
	>
		{@render children?.()}
	</span>

	{#each renderGroups as group, groupIndex (`group-${groupIndex}`)}
		<span aria-hidden="true" class={cn("inline-flex overflow-hidden", wordLevelClass)}>
			{#each group.characters as character, characterIndex (`${groupIndex}-${characterIndex}`)}
				{@const previousCharsCount = renderGroups
					.slice(0, groupIndex)
					.reduce((sum, item) => sum + item.characters.length, 0)}

				<span class={cn("relative whitespace-pre-wrap", elementLevelClass)}>
					<motion.span
						class="inline-block"
						initial="hidden"
						animate={isAnimating ? "visible" : "hidden"}
						custom={previousCharsCount + characterIndex}
						{variants}
						onAnimationComplete={(definition) => {
							if (
								definition === "visible" &&
								groupIndex === renderGroups.length - 1 &&
								characterIndex === group.characters.length - 1
							) {
								onComplete?.();
							}
						}}
					>
						{character}
					</motion.span>
				</span>
			{/each}

			{#if group.needsSpace}
				<span aria-hidden="true" class="whitespace-pre">{" "}</span>
			{/if}
		</span>
	{/each}
</span>
