<script lang="ts">
	import { motion, useScroll, useSpring, useTransform, type UseScrollOptions } from "motion-sv";
	import type { MotionValue, SpringOptions } from "motion-sv";
	import { untrack, type Snippet } from "svelte";
	import type { HTMLAttributes, SvelteHTMLElements } from "svelte/elements";
	import { cn } from "$lib/utils";

	type ElementType = keyof SvelteHTMLElements;

	interface ScrollAndSwapProps extends HTMLAttributes<HTMLElement> {
		children?: Snippet;
		text?: string;
		as?: ElementType;
		scrollContainer?: HTMLElement | null;
		offset?: UseScrollOptions["offset"];
		springConfig?: SpringOptions;
		class?: string;
	}

	const defaultOffset: UseScrollOptions["offset"] = ["0 0", "0 1"];
	const defaultSpringConfig: SpringOptions = {
		stiffness: 200,
		damping: 30,
	};

	let {
		children,
		text,
		as = "span",
		scrollContainer = null,
		offset = defaultOffset,
		springConfig = defaultSpringConfig,
		class: className,
		...props
	}: ScrollAndSwapProps = $props();

	let root = $state<HTMLElement | null>(null);
	let contentProbe = $state<HTMLSpanElement | null>(null);
	let slottedText = $state("");

	function toGraphemeSafeText(value: string) {
		if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
			const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
			return Array.from(segmenter.segment(value), ({ segment }) => segment).join("");
		}

		return Array.from(value).join("");
	}

	let resolvedText = $derived(text !== undefined ? text : slottedText);

	let scroll = useScroll({
		container: untrack(() => scrollContainer),
		target: untrack(() => root),
		offset: untrack(() => offset),
	});

	let springScrollYProgress = useSpring(scroll.scrollYProgress, () => springConfig);
	let top = useTransform(springScrollYProgress as MotionValue<number>, [0, 1], ["0%", "-100%"]);
	let bottom = useTransform(springScrollYProgress as MotionValue<number>, [0, 1], ["100%", "0%"]);

	$effect(() => {
		if (text !== undefined || !contentProbe) {
			slottedText = "";
			return;
		}

		const probe = contentProbe;

		const syncText = () => {
			slottedText = toGraphemeSafeText(probe.textContent ?? "");
		};

		syncText();

		const observer = new MutationObserver(() => syncText());
		observer.observe(probe, { childList: true, characterData: true, subtree: true });

		return () => observer.disconnect();
	});
</script>

<svelte:element
	this={as}
	bind:this={root}
	class={cn("relative inline-flex items-center justify-center overflow-hidden p-0", className)}
	{...props}
>
	<span class="relative whitespace-pre-wrap text-transparent">{resolvedText}</span>

	<motion.span class="absolute whitespace-pre-wrap" style={{ top }} aria-hidden="true">
		{resolvedText}
	</motion.span>

	<motion.span class="absolute whitespace-pre-wrap" style={{ top: bottom }} aria-hidden="true">
		{resolvedText}
	</motion.span>

	{#if text === undefined}
		<span
			bind:this={contentProbe}
			aria-hidden="true"
			class="pointer-events-none absolute whitespace-pre-wrap opacity-0"
		>
			{@render children?.()}
		</span>
	{/if}
</svelte:element>
