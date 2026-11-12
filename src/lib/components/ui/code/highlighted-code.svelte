<script lang="ts">
	import { useHighlightedCode } from "#lib/hooks/use-highlighted-code.svelte.js";
	import Content from "../code-block/code-block-content.svelte";
	import Line from "../code-block/code-block-line.svelte";
	import type { SupportedLanguage } from "#lib/highlighter.js";

	type HighlightRange = number | [number, number];

	let {
		code,
		lang = "svelte",
		highlight = [],
		hideLines = false,
		class: className,
	}: {
		code: string;
		lang?: SupportedLanguage;
		highlight?: HighlightRange[];
		hideLines?: boolean;
		class?: string;
	} = $props();

	const lines = useHighlightedCode(
		() => code,
		() => lang
	);

	function isHighlighted(line: number) {
		return highlight.some((range) =>
			typeof range === "number" ? line === range : range[0] <= line && line <= range[1]
		);
	}
</script>

<Content lineNumbers={!hideLines} class={className}>
	{#each lines.current as line, index (index)}
		<Line code={line} variant={isHighlighted(index + 1) ? "highlighted" : "default"} />
	{/each}
</Content>
