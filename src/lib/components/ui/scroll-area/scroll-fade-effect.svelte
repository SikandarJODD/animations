<script lang="ts">
	import { cn } from "#lib/utils.js";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	type Props = HTMLAttributes<HTMLDivElement> & {
		children: Snippet;
		class?: string;
		orientation?: "vertical" | "horizontal" | "both";
		ref?: HTMLDivElement | null;
	};

	let {
		children,
		class: className,
		orientation = "vertical",
		ref = $bindable(null),
		...restProps
	}: Props = $props();
</script>

<div
	bind:this={ref}
	data-orientation={orientation}
	data-slot="scroll-fade-effect"
	class={cn(
		"no-scrollbar data-[orientation=horizontal]:overflow-x-auto data-[orientation=vertical]:overflow-y-auto",
		"data-[orientation=horizontal]:scroll-fade-effect-x data-[orientation=vertical]:scroll-fade-effect-y no-scrollbar",
		className
	)}
	{...restProps}
>
	{@render children()}
</div>
