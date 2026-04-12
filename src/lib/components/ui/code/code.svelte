<script lang="ts">
	import { cn } from "$lib/utils.js";
	import { codeVariants } from ".";
	import type { CodeRootProps } from "./types";
	import { useCode } from "./code.svelte.js";
	import { box } from "svelte-toolbelt";

	let {
		ref = $bindable(null),
		variant = "default",
		lang = "typescript",
		code,
		class: className,
		hideLines = false,
		highlight = [],
		children,
		...rest
	}: CodeRootProps = $props();

	const codeState = useCode({
		code: box.with(() => code),
		hideLines: box.with(() => hideLines),
		highlight: box.with(() => highlight),
		lang: box.with(() => lang),
	});

	const lineCount = $derived(code.replace(/\n$/, "").split("\n").length);
</script>

<div {...rest} bind:this={ref} class={cn(codeVariants({ variant }), className)}>
	<div class="flex min-h-full">
		{#if !hideLines && lineCount > 0}
			<div
				class="font-mono select-none flex-shrink-0 text-right text-[oklch(0.556_0_0/50%)]"
				aria-hidden="true"
			>
				{#each Array(lineCount) as _, i}
					<span class="block px-4">{i + 1}</span>
				{/each}
			</div>
		{/if}
		<div class="min-w-0 flex-1 overflow-x-auto">
			{@html codeState.highlighted}
		</div>
	</div>
	{@render children?.()}
</div>
