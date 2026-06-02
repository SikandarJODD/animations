<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn, type WithElementRef } from "$lib/utils";

	let {
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div data-slot="frame-panel-footer" class={cn("px-5 py-4", className)} {...restProps}>
	{@render children?.()}
</div>
