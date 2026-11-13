<script lang="ts">
	import { confetti } from "@neoconfetti/svelte";
	import type { ConfettiOptions } from "@neoconfetti/svelte";
	import type { Snippet } from "svelte";
	import type { ClassValue, HTMLButtonAttributes } from "svelte/elements";
	import { cn } from "#lib/utils.js";

	interface ConfettiButtonProps extends HTMLButtonAttributes {
		/** Confetti configuration options */
		options?: Partial<ConfettiOptions>;
		/** Children content */
		children?: Snippet;
		/** Additional CSS classes */
		class?: ClassValue;
	}

	let {
		options = {},
		children,
		class: className = "",
		onclick,
		...props
	}: ConfettiButtonProps = $props();

	let isActive = $state(false);

	// Default options
	const defaultOptions: Partial<ConfettiOptions> = {
		particleCount: 50,
		force: 0.5,
		stageHeight: 800,
		stageWidth: 1600,
		colors: ["#ff0000", "#00ff00", "#0000ff"],
	};

	const mergedOptions = $derived({ ...defaultOptions, ...options });

	function handleClick(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
		isActive = false;
		setTimeout(() => {
			isActive = true;
		}, 10);

		onclick?.(event);
	}
</script>

<button
	class={cn(
		"rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700",
		className
	)}
	onclick={handleClick}
	{...props}
>
	{#if isActive}
		<div use:confetti={mergedOptions}></div>
	{/if}
	{#if children}
		{@render children()}
	{:else}
		Click Me!
	{/if}
</button>
