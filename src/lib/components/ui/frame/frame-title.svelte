<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn, type WithElementRef } from "$lib/utils";

	let {
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div data-slot="frame-panel-title" class={cn("text-sm font-semibold", className)} {...restProps}>
	{@render children?.()}
</div>
