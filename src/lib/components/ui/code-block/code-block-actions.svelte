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

<!-- [[data-slot=code-block]>&]:*:[button]:bg-background -->
<div
	bind:this={ref}
	data-slot="code-block-actions"
	class={cn(
		"-my-1 ms-auto -me-1.5 flex shrink-0 items-center gap-1 [[data-slot=code-block]>&]:absolute  [[data-slot=code-block]>&]:inset-e-3 [[data-slot=code-block]>&]:top-3 [[data-slot=code-block]>&]:z-10 [[data-slot=code-block]>&]:m-0 [[data-slot=code-block]>&]:opacity-0 [[data-slot=code-block]>&]:transition-opacity [[data-slot=code-block]>&]:group-focus-within/code-block:opacity-100 [[data-slot=code-block]>&]:group-hover/code-block:opacity-100 group-data-[size=sm]/code-block:[[data-slot=code-block]>&]:inset-e-2 group-data-[size=sm]/code-block:[[data-slot=code-block]>&]:top-2 [[data-slot=code-block]>&]:pointer-coarse:opacity-100 [[data-slot=code-block]>&]:*:[button]:ring-1",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>
