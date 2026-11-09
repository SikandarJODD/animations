<script lang="ts">
	import { cn } from "#lib/utils.ts";
	import type { Snippet } from "svelte";

	interface CircleProps {
		class?: string;
		children?: Snippet;
		ref?: HTMLDivElement | null;
	}

	let { class: className, children, ref = $bindable(null) }: CircleProps = $props();
</script>

<div
	bind:this={ref}
	class={cn(
		"border-muted-foreground z-10 flex size-12 items-center justify-center rounded-full border bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
		className
	)}
>
	{#if children}
		{@render children()}
	{/if}
</div>
