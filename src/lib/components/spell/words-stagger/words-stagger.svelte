<script lang="ts">
	import { cn } from "#lib/utils.js";
	import { readNormalizedTextContent, segmentText } from "#lib/utils/text-utils.js";
	import { motion, useInView, type Variants } from "motion-sv";
	import type { Snippet } from "svelte";

	type WordsStaggerElement = "span" | "div" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

	type WordToken =
		| {
				kind: "word";
				id: string;
				content: string;
				index: number;
		  }
		| {
				kind: "whitespace";
				id: string;
				value: string;
		  };

	type WordsStaggerProps = {
		children: Snippet;
		class?: string;
		style?: string;
		as?: WordsStaggerElement;
		delay?: number;
		stagger?: number;
		speed?: number;
		trigger?: boolean;
		triggerOnView?: boolean;
		once?: boolean;
		onStart?: () => void;
		onComplete?: () => void;
	};

	let {
		children,
		class: className,
		style: styleAttribute,
		as = "div",
		delay = 0,
		stagger = 0.1,
		speed = 0.5,
		trigger = true,
		triggerOnView = false,
		once = true,
		onStart,
		onComplete,
	}: WordsStaggerProps = $props();

	let MotionComponent = $derived(motion[as]);
	let element = $state<HTMLElement | null>(null);
	let sourceElement = $state<HTMLSpanElement | null>(null);
	let sourceText = $state("");
	let animationCycle = $state(0);
	let completedCycle = $state(0);

	let previousShouldAnimate = false;
	let view = useInView(
		() => (triggerOnView ? element : null)!,
		() => ({ once, amount: 0.2 }) as any
	);

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

		const entries = styleValue
			.split(";")
			.map((declaration) => declaration.trim())
			.filter(Boolean)
			.flatMap((declaration) => {
				const separatorIndex = declaration.indexOf(":");

				if (separatorIndex === -1) {
					return [];
				}

				const property = declaration.slice(0, separatorIndex).trim();
				const value = declaration.slice(separatorIndex + 1).trim();

				if (!property || !value) {
					return [];
				}

				return [[normalizeStyleName(property), value] as const];
			});

		return entries.length > 0 ? Object.fromEntries(entries) : undefined;
	}

	function syncSourceText() {
		sourceText = readNormalizedTextContent(sourceElement);
	}

	const safeDelay = $derived(Math.max(delay, 0));
	const safeStagger = $derived(Math.max(stagger, 0));
	const safeSpeed = $derived(Math.max(speed, 0.01));
	const rootStyle = $derived(parseStyleAttribute(styleAttribute));

	const tokens = $derived.by<WordToken[]>(() => {
		let wordIndex = 0;

		return segmentText(sourceText).map((token, tokenIndex) => {
			if (token.kind === "whitespace") {
				return {
					kind: "whitespace",
					id: `whitespace-${tokenIndex}`,
					value: token.value,
				};
			}

			const word = {
				kind: "word" as const,
				id: `word-${tokenIndex}`,
				content: token.value,
				index: wordIndex,
			};

			wordIndex += 1;
			return word;
		});
	});

	const wordCount = $derived(
		tokens.reduce((count, token) => count + (token.kind === "word" ? 1 : 0), 0)
	);
	const lastWordIndex = $derived(wordCount - 1);
	const isInView = $derived(triggerOnView ? view.current : true);

	const transition = $derived.by(() => ({
		type: "tween" as const,
		ease: "easeOut" as const,
		duration: safeSpeed,
	}));

	const containerVariants = $derived.by<Variants>(() => ({
		hidden: {},
		visible: {
			transition: {
				delayChildren: safeDelay,
				staggerChildren: safeStagger,
			},
		},
	}));

	const wordVariants = $derived.by<Variants>(() => ({
		hidden: {
			opacity: 0,
			y: 10,
			filter: "blur(10px)",
			transition,
		},
		visible: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)",
			transition,
		},
	}));

	const shouldAnimate = $derived(wordCount > 0 && trigger && isInView);

	$effect(() => {
		if (!sourceElement) {
			sourceText = "";
			return;
		}

		syncSourceText();

		const observer = new MutationObserver(() => syncSourceText());
		observer.observe(sourceElement, {
			childList: true,
			subtree: true,
			characterData: true,
		});

		return () => observer.disconnect();
	});

	$effect(() => {
		if (shouldAnimate && !previousShouldAnimate) {
			animationCycle += 1;
			completedCycle = 0;
			onStart?.();
		}

		previousShouldAnimate = shouldAnimate;
	});

	function handleWordComplete(definition: unknown, wordIndex: number) {
		if (definition !== "visible" || !shouldAnimate || wordIndex !== lastWordIndex) {
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
	class={cn("whitespace-nowrap", className)}
	style={rootStyle}
	initial="hidden"
	animate={shouldAnimate ? "visible" : "hidden"}
	exit="hidden"
	variants={containerVariants}
>
	<span bind:this={sourceElement} class="sr-only">
		{@render children()}
	</span>

	{#each tokens as token (token.id)}
		{#if token.kind === "word"}
			<motion.span
				class="inline-block"
				aria-hidden="true"
				variants={wordVariants}
				onAnimationComplete={(definition) => handleWordComplete(definition, token.index)}
			>
				{token.content}
			</motion.span>
		{:else}
			<span aria-hidden="true" class="whitespace-pre-wrap">{token.value}</span>
		{/if}
	{/each}
</MotionComponent>
