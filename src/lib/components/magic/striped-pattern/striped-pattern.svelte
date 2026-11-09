<script lang="ts">
	import { cn } from "#lib/utils.js";
	import type { SVGAttributes } from "svelte/elements";

	interface Props extends SVGAttributes<SVGSVGElement> {
		direction?: "left" | "right";
		class?: string;
	}

	let {
		direction = "left",
		class: className,
		width = 10,
		height = 10,
		...restProps
	}: Props = $props();

	let id = $props.id();
	let w = $derived(Number(width));
	let h = $derived(Number(height));
</script>

<svg
	aria-hidden="true"
	class={cn("pointer-events-none absolute inset-0 z-10 h-full w-full stroke-[0.5]", className)}
	xmlns="http://www.w3.org/2000/svg"
	{...restProps}
>
	<defs>
		<pattern {id} width={w} height={h} patternUnits="userSpaceOnUse">
			{#if direction === "left"}
				<line x1="0" y1={h} x2={w} y2="0" stroke="currentColor" />
				<line x1={-w} y1={h} x2="0" y2="0" stroke="currentColor" />
				<line x1={w} y1={h} x2={w * 2} y2="0" stroke="currentColor" />
			{:else}
				<line x1="0" y1="0" x2={w} y2={h} stroke="currentColor" />
				<line x1={-w} y1="0" x2="0" y2={h} stroke="currentColor" />
				<line x1={w} y1="0" x2={w * 2} y2={h} stroke="currentColor" />
			{/if}
		</pattern>
	</defs>
	<rect width="100%" height="100%" fill={`url(#${id})`} />
</svg>
