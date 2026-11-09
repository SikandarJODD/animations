<script lang="ts">
	import { cn } from "#lib/utils.js";
	import { motion, type Variants } from "motion-sv";

	type BlurRevealElement = "span" | "div" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

	type CharacterUnit = {
		value: string;
		index: number;
	};

	type RenderToken =
		| {
				kind: "word";
				id: string;
				characters: CharacterUnit[];
		  }
		| {
				kind: "space";
				id: string;
				value: string;
				index: number;
		  };

	type BlurRevealProps = {
		content: string;
		class?: string;
		style?: string;
		as?: BlurRevealElement;
		delay?: number;
		stagger?: number;
		duration?: number;
		trigger?: boolean;
		triggerOnView?: boolean;
		once?: boolean;
		letterSpacing?: string | number;
		onStart?: () => void;
		onComplete?: () => void;
	};

	let {
		content,
		class: className,
		style: styleAttribute,
		as = "p",
		delay = 0,
		stagger = 0.025,
		duration = 0.3,
		trigger = true,
		triggerOnView = false,
		once = true,
		letterSpacing,
		onStart,
		onComplete,
	}: BlurRevealProps = $props();

	let MotionComponent = $derived(motion[as]);
	let element = $state<HTMLElement | null>(null);
	let isInView = $state(false);
	let hasEnteredView = $state(false);
	let animationCycle = $state(0);
	let completedCycle = $state(0);

	let previousShouldAnimate = false;

	function splitIntoCharacters(value: string) {
		if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
			let segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
			return Array.from(segmenter.segment(value), ({ segment }) => segment);
		}

		return Array.from(value);
	}

	function normalizeStyleName(property: string) {
		if (property.startsWith("--")) {
			return property;
		}

		return property.replace(/-([a-z])/g, (_, character: string) => character.toUpperCase());
	}

	function parseStyleAttribute(styleValue?: string) {
		if (!styleValue) {
			return undefined;
		}

		let entries = styleValue
			.split(";")
			.map((declaration) => declaration.trim())
			.filter(Boolean)
			.flatMap((declaration) => {
				let separatorIndex = declaration.indexOf(":");

				if (separatorIndex === -1) {
					return [];
				}

				let property = declaration.slice(0, separatorIndex).trim();
				let value = declaration.slice(separatorIndex + 1).trim();

				if (!property || !value) {
					return [];
				}

				return [[normalizeStyleName(property), value] as const];
			});

		return entries.length > 0 ? Object.fromEntries(entries) : undefined;
	}

	let rootStyle = $derived(parseStyleAttribute(styleAttribute));
	let safeDelay = $derived(Math.max(delay, 0));
	let safeStagger = $derived(Math.max(stagger, 0));
	let safeDuration = $derived(Math.max(duration, 0.01));
	let letterSpacingValue = $derived.by(() => {
		if (letterSpacing === undefined) {
			return undefined;
		}

		return typeof letterSpacing === "number" ? `${letterSpacing}px` : letterSpacing;
	});

	let tokens = $derived.by<RenderToken[]>(() => {
		let entries = content.match(/\S+|\s+/g) ?? [];
		let renderTokens: RenderToken[] = [];
		let cursor = 0;

		for (let [tokenIndex, token] of entries.entries()) {
			if (/^\s+$/.test(token)) {
				renderTokens.push({
					kind: "space",
					id: `space-${tokenIndex}`,
					value: token,
					index: cursor,
				});

				cursor += 1;
				continue;
			}

			let characters = splitIntoCharacters(token).map((value, characterIndex) => ({
				value,
				index: cursor + characterIndex,
			}));

			cursor += characters.length;

			renderTokens.push({
				kind: "word",
				id: `word-${tokenIndex}`,
				characters,
			});
		}

		return renderTokens;
	});

	let totalUnits = $derived(
		tokens.reduce(
			(count, token) => count + (token.kind === "word" ? token.characters.length : 1),
			0
		)
	);

	let lastUnitIndex = $derived(totalUnits - 1);

	let containerVariants = $derived.by<Variants>(() => ({
		hidden: {
			opacity: 0,
			transition: {
				staggerChildren: safeStagger,
				staggerDirection: -1,
			},
		},
		visible: {
			opacity: 1,
			transition: {
				delayChildren: safeDelay,
				staggerChildren: safeStagger,
			},
		},
	}));

	let itemVariants = $derived.by<Variants>(() => ({
		hidden: {
			opacity: 0,
			filter: "blur(12px)",
			y: 10,
			transition: {
				duration: safeDuration,
			},
		},
		visible: {
			opacity: 1,
			filter: "blur(0px)",
			y: 0,
			transition: {
				duration: safeDuration,
			},
		},
	}));

	$effect(() => {
		if (!triggerOnView || !element) {
			isInView = false;
			return;
		}

		let observer = new IntersectionObserver(
			([entry]) => {
				if (!entry) {
					return;
				}

				if (entry.isIntersecting) {
					isInView = true;
					hasEnteredView = true;
				} else if (!once) {
					isInView = false;
				}
			},
			{ threshold: 0.2 }
		);

		observer.observe(element);

		return () => observer.disconnect();
	});

	let shouldAnimate = $derived(
		totalUnits > 0 && trigger && (!triggerOnView || (once ? hasEnteredView : isInView))
	);

	$effect(() => {
		if (shouldAnimate && !previousShouldAnimate) {
			animationCycle += 1;
			completedCycle = 0;
			onStart?.();
		}

		previousShouldAnimate = shouldAnimate;
	});

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
</script>

<MotionComponent
	bind:ref={element}
	class={cn("whitespace-pre-wrap", className)}
	style={rootStyle}
	initial="hidden"
	animate={shouldAnimate ? "visible" : "hidden"}
	exit="hidden"
	variants={containerVariants}
>
	<span class="sr-only">{content}</span>

	{#each tokens as token (token.id)}
		{#if token.kind === "word"}
			<span class="inline-block whitespace-nowrap" aria-hidden="true">
				{#each token.characters as character (character.index)}
					<motion.span
						class="inline-block"
						variants={itemVariants}
						style={letterSpacingValue ? { marginRight: letterSpacingValue } : undefined}
						onAnimationComplete={(definition) =>
							handleUnitComplete(definition, character.index)}
					>
						{character.value}
					</motion.span>
				{/each}
			</span>
		{:else}
			<motion.span
				class="inline-block whitespace-pre"
				aria-hidden="true"
				variants={itemVariants}
				onAnimationComplete={(definition) => handleUnitComplete(definition, token.index)}
			>
				{token.value}
			</motion.span>
		{/if}
	{/each}
</MotionComponent>
