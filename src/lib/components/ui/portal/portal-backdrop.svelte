<script lang="ts">
	import { cn } from "$lib/utils";
	import type { Snippet } from "svelte";

	type Props = {
		class?: string;
		state?: "open" | "closed";
		children?: Snippet;
	};

	let { class: className, state = "open", children }: Props = $props();
</script>

<div
	data-state={state}
	class={cn(
		"fixed inset-0 -z-1 bg-background/95 backdrop-blur-sm duration-500 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 supports-backdrop-filter:bg-background/60",
		className
	)}
>
	{@render children?.()}
</div>
