<script lang="ts">
	import { cn } from "#lib/utils.js";
	import {
		readNormalizedTextContent,
		segmentText,
		splitGraphemes,
	} from "#lib/utils/text-utils.ts";
	import { motion, useInView, type Variants } from "motion-sv";
	import type { Snippet } from "svelte";

	type RandomizedTextElement = "span" | "div" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	type SplitType = "words" | "chars";

	type RandomizedToken =
		| {
				kind: "segment";
				id: string;
				content: string;
				index: number;
				delay: number;
		  }
		| {
				kind: "whitespace";
				id: string;
				value: string;
		  };

	type RandomizedTextProps = {
		children: Snippet;
		class?: string;
		style?: string;
		as?: RandomizedTextElement;
		split?: SplitType;
		delay?: number;
		duration?: number;
		trigger?: boolean;
		triggerOnView?: boolean;
		once?: boolean;
	};

	let {
		children,
		class: className,
		style: styleAttribute,
		as = "span",
		split = "words",
		delay = 0.2,
		duration = 1.2,
		trigger = true,
		triggerOnView = false,
		once = true,
	}: RandomizedTextProps = $props();

	let MotionComponent = $derived(motion[as]);
	let element = $state<HTMLElement | null>(null);
	let sourceElement = $state<HTMLSpanElement | null>(null);
	let sourceText = $state("");
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

	function hashString(value: string, seed: number) {
		let hash = seed >>> 0;

		for (let index = 0; index < value.length; index += 1) {
			hash ^= value.charCodeAt(index);
			hash = Math.imul(hash, 16777619);
		}

		return hash >>> 0;
	}

	function normalizedHash(value: string, seed: number) {
		return hashString(value, seed) / 4294967295;
	}

	function createStableDelay(signature: string, baseDelay: number) {
		const primaryJitter = normalizedHash(signature, 2166136261) * 0.2;
		const secondaryJitter = normalizedHash(signature, 2654435761) * 0.03;

		return baseDelay + primaryJitter + secondaryJitter;
	}

	function syncSourceText() {
		sourceText = readNormalizedTextContent(sourceElement);
	}

	const expoOut = (time: number) => (time === 1 ? 1 : 1 - Math.pow(2, -10 * time));
	const safeDelay = $derived(Math.max(delay, 0));
	const safeDuration = $derived(Math.max(duration, 0.01));
	const isInView = $derived(triggerOnView ? view.current : true);

	const parsedStyle = $derived(parseStyleAttribute(styleAttribute));
	const rootStyle = $derived.by(() => ({
		display: "inline-block",
		wordBreak: "break-word",
		...(parsedStyle ?? {}),
	}));

	const tokens = $derived.by<RandomizedToken[]>(() => {
		if (!sourceText) {
			return [];
		}

		if (split === "chars") {
			let segmentIndex = 0;

			return splitGraphemes(sourceText).map((segment, index) => {
				if (/^\s+$/.test(segment)) {
					return {
						kind: "whitespace",
						id: `space-${index}`,
						value: segment,
					};
				}

				const token = {
					kind: "segment" as const,
					id: `char-${index}`,
					content: segment,
					index: segmentIndex,
					delay: createStableDelay(
						`chars:${segmentIndex}:${segment}:${sourceText}`,
						safeDelay
					),
				};

				segmentIndex += 1;
				return token;
			});
		}

		let segmentIndex = 0;

		return segmentText(sourceText).map((token, index) => {
			if (token.kind === "whitespace") {
				return {
					kind: "whitespace",
					id: `space-${index}`,
					value: token.value,
				};
			}

			const segmentToken = {
				kind: "segment" as const,
				id: `word-${index}`,
				content: token.value,
				index: segmentIndex,
				delay: createStableDelay(
					`words:${segmentIndex}:${token.value}:${sourceText}`,
					safeDelay
				),
			};

			segmentIndex += 1;
			return segmentToken;
		});
	});

	const segmentCount = $derived(
		tokens.reduce((count, token) => count + (token.kind === "segment" ? 1 : 0), 0)
	);

	const containerVariants = $derived.by<Variants>(() => ({
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	}));

	const itemVariants = $derived.by<Variants>(() => ({
		hidden: { opacity: 0 },
		visible: (segmentDelay: number) => ({
			opacity: 1,
			transition: {
				duration: safeDuration,
				delay: segmentDelay,
				ease: expoOut,
			},
		}),
	}));

	const shouldAnimate = $derived(segmentCount > 0 && trigger && isInView);

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
</script>

<MotionComponent
	bind:ref={element}
	class={cn("break-words whitespace-pre-line", className)}
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
		{#if token.kind === "segment"}
			<motion.span
				aria-hidden="true"
				class={split === "words" ? "inline-block whitespace-nowrap" : "inline-block"}
				custom={token.delay}
				variants={itemVariants}
			>
				{token.content}
			</motion.span>
		{:else}
			<span aria-hidden="true" class="whitespace-nowrap">{token.value}</span>
		{/if}
	{/each}
</MotionComponent>
