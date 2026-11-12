<script lang="ts">
	import Root from "./code-block.svelte";
	import Header from "./code-block-header.svelte";
	import Title from "./code-block-title.svelte";
	import Actions from "./code-block-actions.svelte";
	import CopyButton from "./code-block-copy-button.svelte";
	import HighlightedCode from "./highlighted-code.svelte";
	import CodeBlockOverflow from "./code-block-overflow.svelte";
	import type { CodeBlock as CodeBlockData } from "./types.js";
	import { TypeScript, Svelte, Terminal, CSS, Markdown } from "#lib/components/icons/index.js";

	let { code }: { code: CodeBlockData } = $props();
</script>

<div class="w-full">
	<Root>
		<Header>
			<Title>
				{#if code.lang === "svelte"}
					<Svelte />
				{:else if code.lang === "typescript"}
					<TypeScript />
				{:else if code.lang === "css"}
					<CSS />
				{:else if code.lang === "markdown"}
					<Markdown />
				{:else if code.lang === "bash"}
					<Terminal />
				{:else}
					<Svelte />
				{/if}
				<span class="text-sm font-normal">{code.filename}</span>
			</Title>
			<Actions>
				<CopyButton value={code.filecode} />
			</Actions>
		</Header>

		{#if code.isExpand}
			<CodeBlockOverflow collapsed={true}>
				<HighlightedCode
					code={code.filecode}
					lang={code.lang}
					highlight={code.highlight}
					hideLines={false}
				/>
			</CodeBlockOverflow>
		{:else}
			<HighlightedCode
				code={code.filecode}
				lang={code.lang}
				highlight={code.highlight}
				hideLines={false}
			/>
		{/if}
	</Root>
</div>
