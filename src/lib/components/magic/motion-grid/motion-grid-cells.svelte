<script lang="ts">
	import { motion } from "motion-sv";
	import { cn } from "#lib/utils.js";
	import { useMotionGridContext } from "./use-motion-grid-context.svelte";
	import type { MotionGridCellMotionProps, MotionGridCellsProps } from "./types";

	type StyleValue = MotionGridCellMotionProps["style"];

	function mergeStyles(baseStyle: StyleValue, variantStyle: StyleValue): StyleValue {
		return {
			...(baseStyle ?? {}),
			...(variantStyle ?? {}),
		};
	}

	let { activeProps, inactiveProps, ...props }: MotionGridCellsProps = $props();

	let context = useMotionGridContext();
	let cellRef = $state<HTMLDivElement | null>(null);

	let animate = $derived(context.animate());
	let index = $derived(context.index());
	let cols = $derived(context.cols());
	let rows = $derived(context.rows());
	let frames = $derived(context.frames());
	let duration = $derived(context.duration());
	let transitionDuration = $derived(duration / 1000);

	let active = $derived.by(() => {
		return new Set<number>(frames[index]?.map(([x, y]) => y * cols + x) ?? []);
	});

	let totalCells = $derived(cols * rows);

	let baseClass = $derived(props.class);
	let baseStyle = $derived(props.style as StyleValue);
	let baseProps = $derived.by(() => {
		const { class: _class, style: _style, ref: _ref, ...rest } = props;
		return rest;
	});
</script>

{#each Array.from({ length: totalCells }) as _, i (i)}
	{@const isActive = active.has(i)}
	{@const variantProps = (isActive ? activeProps : inactiveProps) ?? {}}
	{@const variantClass = variantProps.class}
	{@const variantStyle = variantProps.style}
	{@const mergedClass = cn(baseClass, variantClass)}
	{@const mergedStyle = mergeStyles(baseStyle, variantStyle as StyleValue)}
	{@const { ref: _variantRef, ...variantRestProps } = variantProps}
	{@const restVariantProps = { ...variantRestProps, class: mergedClass, style: mergedStyle }}

	<motion.div
		bind:ref={cellRef}
		data-active={isActive}
		data-animate={animate}
		transition={{ duration: transitionDuration, ease: "easeInOut" }}
		{...baseProps}
		{...restVariantProps}
	/>
{/each}
