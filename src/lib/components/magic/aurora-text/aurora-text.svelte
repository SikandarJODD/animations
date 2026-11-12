<script lang="ts">
	import type { ClassValue } from "svelte/elements";
	import { cn } from "#lib/utils.js";
	import type { Snippet } from "svelte";

	type AuroraTextProps = {
		children: Snippet;
		class?: ClassValue;
		colors?: string[];
		speed?: number;
	};

	let {
		children,
		class: className = "",
		colors = ["#FF0080", "#7928CA", "#0070F3", "#38bdf8"],
		speed = 1,
	}: AuroraTextProps = $props();
</script>

<span class={cn("relative inline-block", className)}>
	<span class="sr-only">{@render children()}</span>
	<span
		class="animate-aurora relative bg-size-[200%_auto] bg-clip-text text-transparent"
		aria-hidden="true"
		style="
    background-image: linear-gradient(135deg, {colors.join(', ')}, {colors[0]});
    webkit-background-clip: text;
    webkit-text-fill-color: transparent;
    animation-duration: {10 / speed}s;"
	>
		{@render children()}
	</span>
</span>
