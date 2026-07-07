<script lang="ts">
	import { TypeScript } from "$lib/components/icons";
	import { Svelte, Terminal, CSS, Markdown } from "$lib/components/icons";
	import * as Code from "$lib/components/ui/code";
	import type { CodeBlock as MagicCode } from "$lib/components/ui/code/index";
	import CopyButton from "../copy-button/copy-button.svelte";

	type Props = {
		code: MagicCode;
	};
	let { code }: Props = $props();
</script>

<div class="w-full">
	<div class="border-border overflow-hidden rounded-lg border">
		{#if code.isExpand}
			<Code.Overflow collapsed={true}>
				<Code.Root
					lang={code.lang || "svelte"}
					class="bg-background w-full rounded-none border-none"
					code={code.filecode}
					highlight={code.highlight}
					hideLines={true}
				>
					<Code.CopyButton />
				</Code.Root>
			</Code.Overflow>
		{:else}
			<Code.Root
				lang={code.lang || "svelte"}
				class="bg-background w-full rounded-none border-none"
				code={code.filecode}
				highlight={code.highlight}
				hideLines={true}
			>
				<Code.CopyButton size='icon-sm' />
			</Code.Root>
		{/if}
	</div>
</div>
