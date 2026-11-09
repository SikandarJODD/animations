<script lang="ts">
	import { cn } from "#lib/utils.ts";
	import { confetti as neoconfetti } from "@neoconfetti/svelte";
	import type { ConfettiOptions } from "@neoconfetti/svelte";
	import type { Snippet } from "svelte";

	interface ConfettiProps {
		active?: boolean;
		options?: Partial<ConfettiOptions>;
		class?: string;
		confettiClass?: string;
		children?: Snippet;
	}

	let {
		active = false,
		options = {},
		class: className = "",
		confettiClass = "",
		children,
	}: ConfettiProps = $props();

	// Default options
	const defaultOptions: Partial<ConfettiOptions> = {
		particleCount: 40,
		force: 0.5,
		// stageHeight: 800,
		// stageWidth: 1600,
		// colors: ["#ff0000", "#00ff00", "#0000ff"],
	};

	const mergedOptions = $derived({ ...defaultOptions, ...options });
</script>

<div class={cn("relative", className)}>
	{#if active}
		<div
			class={cn("absolute inset-0 top-0 left-1/2", confettiClass)}
			use:neoconfetti={mergedOptions}
		></div>
	{/if}
	{#if children}
		{@render children()}
	{/if}
</div>
