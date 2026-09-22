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

<div class="border-border bg-muted/30 relative mt-4 mb-10 w-full overflow-x-auto rounded-xl border">
	<table {...restProps} class={cn("w-full text-base [&_code]:text-sm", className)}>
		{@render children?.()}
	</table>
</div>
