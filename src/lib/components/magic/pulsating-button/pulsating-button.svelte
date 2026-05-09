<script lang="ts">
	import { cn } from "$lib/utils";
	import type { Snippet } from "svelte";

	interface PulsatingButtonProps {
		children: Snippet;
		class?: string;
		pulseColor?: string;
		duration?: string;
		distance?: string;
		variant?: "slow" | "ring" | "ripple";
	}

	let {
		class: className,
		children,
		pulseColor = "#808080",
		duration = "1.5s",
		distance = "8px",
		variant = "slow",
		...props
	}: PulsatingButtonProps = $props();
</script>

<button
	class={cn(
		"bg-primary text-primary-foreground relative flex cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-center",
		className
	)}
	style="--pulse-color: {pulseColor}; --duration: {duration}; --distance: {distance};"
	{...props}
>
	<div class="relative z-10">
		{@render children()}
	</div>
	<span
		aria-hidden="true"
		class={cn(
			"pointer-events-none absolute inset-0 rounded-[inherit] bg-inherit",
			variant === "ripple" && "animate-pulse-ripple",
			variant === "ring" && "animate-pulse-ring",
			variant === "slow" && "animate-pulse-slow"
		)}
	></span>
</button>
