<script lang="ts">
	import Button from "#lib/components/ui/button/button.svelte";
	import { cn } from "#lib/utils.js";
	import type { Snippet } from "svelte";

	let {
		collapsed = $bindable(true),
		class: className,
		children,
	}: {
		collapsed?: boolean;
		class?: string;
		children?: Snippet;
	} = $props();
</script>

<div
	data-code-block-overflow
	data-collapsed={collapsed}
	class={cn("relative overflow-y-hidden data-[collapsed=true]:max-h-[300px]", className)}
>
	{@render children?.()}
	{#if collapsed}
		<div
			class="from-background pointer-events-none absolute inset-0 z-10 bg-linear-to-t to-transparent"
		></div>
	{/if}
	<Button
		variant="secondary"
		size="sm"
		class="absolute bottom-2 left-1/2 z-20 w-fit -translate-x-1/2"
		onclick={() => (collapsed = !collapsed)}
	>
		{collapsed ? "Expand" : "Collapse"}
	</Button>
</div>
