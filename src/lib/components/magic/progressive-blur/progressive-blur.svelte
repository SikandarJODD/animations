<script lang="ts">
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";

	interface ProgressiveBlurProps extends HTMLAttributes<HTMLDivElement> {
		/**
		 * Additional CSS classes
		 */
		class?: string;
		/**
		 * Height of the blur area
		 */
		height?: string;
		/**
		 * Position of the blur effect
		 */
		position?: "top" | "bottom" | "both";
		/**
		 * Array of blur levels in pixels
		 */
		blurLevels?: number[];
	}

	let {
		class: className,
		height = "30%",
		position = "bottom",
		blurLevels = [0.5, 1, 2, 4, 8, 16, 32, 64],
		...props
	}: ProgressiveBlurProps = $props();

	// Create array with length equal to blurLevels.length - 2 (for before/after pseudo elements)
	const divElements = $derived(Array(blurLevels.length - 2).fill(null));

	const getMaskGradient = (index: number) => {
		const blurIndex = index + 1;
		const startPercent = blurIndex * 12.5;
		const midPercent = (blurIndex + 1) * 12.5;
		const endPercent = (blurIndex + 2) * 12.5;

		if (position === "bottom") {
			return `linear-gradient(to bottom, rgba(0,0,0,0) ${startPercent}%, rgba(0,0,0,1) ${midPercent}%, rgba(0,0,0,1) ${endPercent}%, rgba(0,0,0,0) ${endPercent + 12.5}%)`;
		} else if (position === "top") {
			return `linear-gradient(to top, rgba(0,0,0,0) ${startPercent}%, rgba(0,0,0,1) ${midPercent}%, rgba(0,0,0,1) ${endPercent}%, rgba(0,0,0,0) ${endPercent + 12.5}%)`;
		} else {
			return `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)`;
		}
	};

	const getFirstLayerMask = () => {
		if (position === "bottom") {
			return `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)`;
		} else if (position === "top") {
			return `linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)`;
		} else {
			return `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)`;
		}
	};

	const getLastLayerMask = () => {
		if (position === "bottom") {
			return `linear-gradient(to bottom, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)`;
		} else if (position === "top") {
			return `linear-gradient(to top, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)`;
		} else {
			return `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)`;
		}
	};
</script>

<div
	class={cn(
		"gradient-blur pointer-events-none absolute inset-x-0 z-10",
		className,
		position === "top" ? "top-0" : position === "bottom" ? "bottom-0" : "inset-y-0"
	)}
	style:height={position === "both" ? "100%" : height}
	{...props}
>
	<!-- First blur layer -->
	<div
		class="absolute inset-0"
		style:z-index={1}
		style:backdrop-filter="blur({blurLevels[0]}px)"
		style:-webkit-backdrop-filter="blur({blurLevels[0]}px)"
		style:mask-image={getFirstLayerMask()}
		style:-webkit-mask-image={getFirstLayerMask()}
	></div>

	<!-- Middle blur layers -->
	{#each divElements as _, index (index)}
		{@const blurIndex = index + 1}
		{@const maskGradient = getMaskGradient(index)}
		<div
			class="absolute inset-0"
			style:z-index={index + 2}
			style:backdrop-filter="blur({blurLevels[blurIndex]}px)"
			style:-webkit-backdrop-filter="blur({blurLevels[blurIndex]}px)"
			style:mask-image={maskGradient}
			style:-webkit-mask-image={maskGradient}
		></div>
	{/each}

	<!-- Last blur layer -->
	<div
		class="absolute inset-0"
		style:z-index={blurLevels.length}
		style:backdrop-filter="blur({blurLevels[blurLevels.length - 1]}px)"
		style:-webkit-backdrop-filter="blur({blurLevels[blurLevels.length - 1]}px)"
		style:mask-image={getLastLayerMask()}
		style:-webkit-mask-image={getLastLayerMask()}
	></div>
</div>
