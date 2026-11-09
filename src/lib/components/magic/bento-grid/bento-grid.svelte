<script lang="ts">
	import { cn } from "#lib/utils.js";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	interface BentoGridProps extends HTMLAttributes<HTMLDivElement> {
		children: Snippet;
		class?: string;
	}

	let { children, class: className, ...props }: BentoGridProps = $props();
</script>

<div class={cn("grid w-full auto-rows-[22rem] grid-cols-3 gap-4", className)} {...props}>
	{@render children()}
</div>
