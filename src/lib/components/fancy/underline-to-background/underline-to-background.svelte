<script lang="ts">
	import { onMount, untrack } from "svelte";
	import type { Snippet } from "svelte";
	import type { SvelteHTMLElements } from "svelte/elements";
	import { motion, type Transition, type Variants } from "motion-sv";

	import { cn } from "$lib/utils";

	type ElementType = keyof SvelteHTMLElements;

	interface UnderlineToBackgroundProps {
		/**
		 * The content to be displayed and animated
		 */
		children?: Snippet;
		as?: ElementType;
		class?: string;
		transition?: Transition;
		targetTextColor?: string;
		underlineHeightRatio?: number;
		underlinePaddingRatio?: number;
	}

	let defaultTransition: Transition = {
		type: "spring",
		damping: 30,
		stiffness: 300,
	};

	let {
		children,
		as = "span",
		class: className,
		transition = defaultTransition,
		targetTextColor = "#fef",
		underlineHeightRatio = 0.1,
		underlinePaddingRatio = 0.01,
		...props
	}: UnderlineToBackgroundProps = $props();

	let element = $state<HTMLElement | null>(null);
	let baseTextColor = $state("currentColor");

	let MotionComponent = $derived(motion[as]);

	function updateUnderlineStyles() {
		if (!element) {
			return;
		}

		const fontSize = parseFloat(getComputedStyle(element).fontSize);
		const computedColor = getComputedStyle(element).color;

		if (Number.isNaN(fontSize)) {
			return;
		}

		baseTextColor = computedColor;
		element.style.setProperty("--underline-height", `${fontSize * underlineHeightRatio}px`);
		element.style.setProperty("--underline-padding", `${fontSize * underlinePaddingRatio}px`);
	}

	$effect(() => {
		if (!element) {
			return;
		}

		underlineHeightRatio;
		underlinePaddingRatio;

		untrack(() => {
			updateUnderlineStyles();
		});
	});

	onMount(() => {
		if (!element) {
			return;
		}

		const resizeObserver = new ResizeObserver(() => {
			updateUnderlineStyles();
		});

		resizeObserver.observe(element);
		updateUnderlineStyles();

		return () => {
			resizeObserver.disconnect();
		};
	});

	let underlineVariants = $derived.by(
		() =>
			({
				initial: {
					height: "var(--underline-height, 0px)",
				},
				target: {
					height: "100%",
					transition,
				},
			}) satisfies Variants
	);

	let textVariants = $derived.by(
		() =>
			({
				initial: {
					color: baseTextColor,
				},
				target: {
					color: targetTextColor,
					transition,
				},
			}) satisfies Variants
	);
</script>

<MotionComponent
	bind:ref={element}
	class={cn("relative inline-block cursor-pointer text-current", className)}
	initial="initial"
	whileHover="target"
	{...props}
>
	<motion.div
		class="pointer-events-none absolute inset-x-0 bottom-0 z-0"
		style={{
			height: "var(--underline-height, 0px)",
			bottom: "calc(-1 * var(--underline-padding, 0px))",
			backgroundColor: baseTextColor,
			willChange: "height",

		}}
		variants={underlineVariants}
		aria-hidden="true"
	/>

	<motion.span variants={textVariants} class="relative z-10 inline-block [will-change:color]">
		{@render children?.()}
	</motion.span>
</MotionComponent>
