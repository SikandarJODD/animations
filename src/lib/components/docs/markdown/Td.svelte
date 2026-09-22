<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn } from "$lib/utils";

	type ComponentProps = {
		class?: string;
		children?: Snippet;
		[prop: string]: unknown;
	};

	const { children, class: className = "", ...restProps }: ComponentProps = $props();
</script>

<td {...restProps} class={cn("text-foreground/70 px-4 py-2.5 align-middle", className)}>
	{@render children?.()}
</td>
