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
</script>

<div {...rest} bind:this={ref} class={cn(codeVariants({ variant }), className)}>
	{@html codeState.highlighted}
	{@render children?.()}
</div>
