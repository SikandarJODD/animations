<script lang="ts">
	import * as CodeBlock from "#lib/components/ui/code-block/index.js";

	let { prompt }: { prompt: string } = $props();
</script>

<CodeBlock.Root class="bg-background">
	<CodeBlock.Actions class="opacity-100 [[data-slot=code-block]>&]:opacity-100">
		<CodeBlock.CopyButton value={prompt} variant="secondary" size="icon-md" />
	</CodeBlock.Actions>
	<CodeBlock.Content code={prompt} wrap class="pr-16 text-sm leading-6" />
</CodeBlock.Root>
