<script lang="ts">
	import ArrowUpRightIcon from "@lucide/svelte/icons/arrow-up-right";
	import type { Snippet } from "svelte";
	import { cn } from "#lib/utils.js";

	type Props = {
		title: string;
		href: string;
		class?: string;
		children: Snippet;
	};

	let { title, href, class: className, children }: Props = $props();
</script>

<div class={cn("group relative flex items-center justify-center border", className)}>
	<a
		{href}
		class="bg-background/95 text-foreground hover:text-primary group-hover:text-primary absolute top-2 left-2 z-10 inline-flex items-center gap-1.5 rounded-md border py-1.5 pr-2.5 pl-3 text-[10px] font-semibold transition-colors"
	>
		{title}
		<ArrowUpRightIcon aria-hidden="true" class="size-3.5" strokeWidth={1.75} />
	</a>
	{@render children()}
</div>
