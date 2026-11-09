<script lang="ts">
	import { cn } from "#lib/utils.js";
	import type { SVGAttributes } from "svelte/elements";

	interface GridPatternProps extends SVGAttributes<SVGSVGElement> {
		width?: number;
		height?: number;
		/**
		 * The x-offset of the pattern
		 */
		x?: number;
		/**
		 * The y-offset of the pattern
		 */
		y?: number;
		/**
		 * Array of [x, y] coordinates for highlighted squares
		 */
		squares?: Array<[x: number, y: number]>;
		/**
		 * Stroke dash array for dashed lines
		 */
		strokeDashArray?: string;
		class?: string;
	}

	let {
		width = 40,
		height = 40,
		x = -1,
		y = -1,
		strokeDashArray = "0",
		squares,
		class: className,
		...props
	}: GridPatternProps = $props();

	const id = $props.id();
</script>

<svg
	aria-hidden="true"
	class={cn(
		"pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
		className
	)}
	{...props}
>
	<defs>
		<pattern {id} {width} {height} patternUnits="userSpaceOnUse" {x} {y}>
			<path d={`M.5 ${height}V.5H${width}`} fill="none" stroke-dasharray={strokeDashArray} />
		</pattern>
	</defs>
	<rect width="100%" height="100%" stroke-width={0} fill={`url(#${id})`} />
	{#if squares}
		<svg {x} {y} class="overflow-visible">
			{#each squares as [squareX, squareY], i (`${squareX}-${squareY}-${i}`)}
				<rect
					stroke-width="0"
					width={width - 1}
					height={height - 1}
					x={squareX * width + 1}
					y={squareY * height + 1}
				/>
			{/each}
		</svg>
	{/if}
</svg>
