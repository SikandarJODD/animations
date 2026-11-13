<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn } from "#lib/utils.js";

	type ComponentProps = {
		class?: string;
		children?: Snippet;
		[prop: string]: unknown;
	};

	const { children, class: className = "", ...restProps }: ComponentProps = $props();
</script>

<th
	{...restProps}
	class={cn(
		"text-muted-foreground h-10 px-4 text-left align-middle text-sm font-normal",
		className
	)}
>
	{@render children?.()}
</th>
