<script lang="ts">
	import { cn, type WithElementRef } from "#lib/utils.js";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
	bind:this={ref}
	data-slot="code-block-footer"
	class={cn("gap-2 px-4 pb-4 text-muted-foreground group-data-[size=sm]/code-block:px-3 group-data-[size=sm]/code-block:pb-3 flex min-w-0 shrink-0 items-center", className)}
	{...restProps}
>
	{@render children?.()}
</div>
