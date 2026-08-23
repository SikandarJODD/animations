<script lang="ts">
	import { cn } from "$lib/utils";
	import type { Snippet } from "svelte";
	type Props = {
		class?: string;
		gradient?: boolean;
		children?: Snippet;
		textClass?: string;
	};
	let { class: className, gradient = false, children, textClass = "" }: Props = $props();
</script>

{#if children}
	<div class="flex w-full items-center">
		<div
			class={cn(
				"h-px w-full rounded-full",
				gradient
					? "bg-linear-to-r from-transparent to-zinc-500 dark:from-zinc-800 dark:to-zinc-400"
					: "bg-zinc-300 dark:bg-zinc-800",
				className
			)}
		></div>
		<div class={cn("w-fit px-2 text-nowrap", textClass)}>
			{@render children?.()}
		</div>
		<div
			class={cn(
				"h-px w-full rounded-full",
				gradient
					? "bg-linear-to-r from-zinc-500 to-transparent dark:from-zinc-200 dark:to-zinc-700"
					: "bg-zinc-300 dark:bg-zinc-800",
				className
			)}
		></div>
	</div>
{:else}
	<div
		class={cn(
			"h-px w-full rounded-full",
			gradient
				? "bg-linear-to-r from-transparent via-zinc-500 to-transparent dark:from-zinc-800 dark:via-zinc-200 dark:to-zinc-700"
				: "bg-zinc-300 dark:bg-zinc-800",
			className
		)}
	></div>
{/if}
