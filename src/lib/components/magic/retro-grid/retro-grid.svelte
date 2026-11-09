<script lang="ts">
	import { cn } from "#lib/utils.ts";
	import type { HTMLAttributes } from "svelte/elements";

	interface RetroGridProps extends HTMLAttributes<HTMLDivElement> {
		class?: string;
		angle?: number;
		cellSize?: number;
		opacity?: number;
		lightLineColor?: string;
		darkLineColor?: string;
	}

	let {
		class: className,
		angle = 65,
		cellSize = 60,
		opacity = 0.5,
		lightLineColor = "gray",
		darkLineColor = "gray",
		...props
	}: RetroGridProps = $props();
</script>

<div
	class={cn(
		"pointer-events-none absolute size-full overflow-hidden perspective-[200px]",
		`opacity-(--opacity)`,
		className
	)}
	style="
		--grid-angle: {angle}deg;
		--cell-size: {cellSize}px;
		--opacity: {opacity};
		--light-line: {lightLineColor};
		--dark-line: {darkLineColor};"
	{...props}
>
	<div class="absolute inset-0 transform-[rotateX(var(--grid-angle))]">
		<div
			class="animate-grid inset-[0%_0px] ml-[-200%] h-[300vh] w-[600vw] origin-[100%_0_0] bg-[linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)] bg-size-[var(--cell-size)_var(--cell-size)] bg-repeat dark:bg-[linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]"
		></div>
	</div>

	<div
		class="absolute inset-0 bg-linear-to-t from-white to-transparent to-90% dark:from-black"
	></div>
</div>
