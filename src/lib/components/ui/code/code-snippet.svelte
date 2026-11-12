<script lang="ts">
	import Root from "../code-block/code-block.svelte";
	import Actions from "../code-block/code-block-actions.svelte";
	import CopyButton from "../code-block/code-block-copy-button.svelte";
	import HighlightedCode from "./highlighted-code.svelte";
	import CodeBlockOverflow from "./code-block-overflow.svelte";
	import type { CodeBlock as CodeBlockData } from "./types.js";

	let { code }: { code: CodeBlockData } = $props();
</script>

<div class="w-full">
	<div class="border-border overflow-hidden rounded-lg border">
		{#if code.isExpand}
			<CodeBlockOverflow collapsed={true}>
				<Root class="bg-background rounded-none border-0">
					<Actions>
						<CopyButton value={code.filecode} />
					</Actions>
					<HighlightedCode
						code={code.filecode}
						lang={code.lang}
						highlight={code.highlight}
						hideLines
					/>
				</Root>
			</CodeBlockOverflow>
		{:else}
			<Root class="bg-background rounded-none border-0">
				<Actions>
					<CopyButton value={code.filecode} size="icon-sm" />
				</Actions>
				<HighlightedCode
					code={code.filecode}
					lang={code.lang}
					highlight={code.highlight}
					hideLines
				/>
			</Root>
		{/if}
	</div>
</div>
