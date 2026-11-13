<script lang="ts">
	import type { ClassValue } from "svelte/elements";
	import { cn } from "#lib/utils.js";
	interface Props {
		children?: import("svelte").Snippet;
		class?: ClassValue;
		shimmerWidth?: number;
		duration?: number;
		[key: string]: any;
	}

	let {
		children,
		class: className,
		shimmerWidth = 100,
		duration = 8,
		...restProps
	}: Props = $props();
</script>

<span
	style="--shiny-width: {shimmerWidth}px; --duration: {duration}s"
	class={cn(
		"shiny-text inline-block text-neutral-600 dark:text-neutral-400",
		"animate-shiny-text bg-clip-text bg-no-repeat [-webkit-text-fill-color:transparent] motion-reduce:animate-none",
		"[--shiny-highlight:var(--color-neutral-950)] dark:[--shiny-highlight:var(--color-white)]",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</span>

<style>
	.shiny-text {
		background-image:
			linear-gradient(110deg, transparent 20%, var(--shiny-highlight) 50%, transparent 80%),
			linear-gradient(currentColor, currentColor);
		background-size:
			var(--shiny-width) 100%,
			100% 100%;
		background-position:
			calc(-100% - var(--shiny-width)) 0,
			0 0;
	}
</style>
