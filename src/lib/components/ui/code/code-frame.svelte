<script lang="ts">
	import Root from "../code-block/code-block.svelte";
	import CopyButton from "../code-block/code-block-copy-button.svelte";
	import HighlightedCode from "./highlighted-code.svelte";
	import CodeBlockOverflow from "./code-block-overflow.svelte";
	import * as Frame from "#lib/components/ui/frame/index.js";
	import Button from "../button/button.svelte";
	import ScrollFadeEffect from "../scroll-area/scroll-fade-effect.svelte";
	import { TypeScript, Svelte, Terminal, CSS, Markdown } from "#lib/components/icons/index.js";
	import { untrack } from "svelte";
	import type { CodeBlock as CodeBlockData } from "./types.js";
	import { transformImportAliases } from "../import-alias/import-alias";
	import { importAliasStyle } from "../import-alias";

	let { code, faded = false }: { code: CodeBlockData; faded?: boolean } = $props();
	let displayedCode = $derived(transformImportAliases(code.filecode, importAliasStyle.current));
	let isCollapsed = $state(untrack(() => code.isExpand ?? false));
</script>

<Frame.Root class="w-full rounded-xl p-0.5">
	<Frame.Header class="flex-row items-center justify-between gap-2 py-0 pr-1 pl-4">
		<div class="flex min-w-0 items-center gap-1.5">
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
			<Frame.Title class="text-primary truncate font-mono text-xs font-medium">
				{code.filename}
			</Frame.Title>
		</div>
		<div class="flex items-center gap-1">
			{#if code.isExpand}
				<Button variant="ghost" size="sm" onclick={() => (isCollapsed = !isCollapsed)}>
					{isCollapsed ? "Expand" : "Collapse"}
				</Button>
			{/if}
			<CopyButton value={displayedCode} size="icon-sm" class="text-muted-foreground" />
		</div>
	</Frame.Header>

	<Frame.Panel class="overflow-hidden p-0">
		{#if isCollapsed}
			<CodeBlockOverflow
				bind:collapsed={isCollapsed}
				class="max-h-[500px] overflow-auto data-[collapsed=true]:overflow-y-hidden"
			>
				<Root class="min-h-50 rounded-none border-0 dark:bg-transparent">
					<HighlightedCode
						code={displayedCode}
						lang={code.lang}
						highlight={code.highlight}
						hideLines={code.hideLines}
					/>
				</Root>
			</CodeBlockOverflow>
		{:else if faded}
			<ScrollFadeEffect class="max-h-[600px]">
				<Root class="bg-background h-auto rounded-none border-0">
					<HighlightedCode
						code={displayedCode}
						lang={code.lang}
						highlight={code.highlight}
						hideLines={code.hideLines}
						class="overflow-visible"
					/>
				</Root>
			</ScrollFadeEffect>
		{:else}
			<div class="no-scrollbar max-h-[600px] overflow-auto">
				<Root class="bg-background h-auto rounded-none border-0">
					<HighlightedCode
						code={displayedCode}
						lang={code.lang}
						highlight={code.highlight}
						hideLines={code.hideLines}
						class="no-scrollbar bg-background overflow-visible"
					/>
				</Root>
			</div>
		{/if}
	</Frame.Panel>
</Frame.Root>
