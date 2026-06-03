<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn, type WithElementRef } from "$lib/utils";

	let {
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLElement>> = $props();
</script>

<header
	data-slot="frame-panel-header"
	class={cn("flex flex-col px-5 py-4", className)}
	{...restProps}
>
	{@render children?.()}
</header>
