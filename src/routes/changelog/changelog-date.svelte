<script lang="ts">
	import { browser } from "$app/environment";
	import { CopyButton } from "#lib/components/ui/copy-button/index.js";
	import type { Snippet } from "svelte";

	let {
		id,
		datetime,
		children,
	}: {
		id: string;
		datetime: string;
		children: Snippet;
	} = $props();

	let copyUrl = $derived(
		browser ? `${window.location.origin}${window.location.pathname}#${id}` : `/changelog#${id}`,
	);
</script>

<div class="mb-4 flex items-center gap-2">
	<h2 {id} class="text-muted-foreground text-sm font-medium whitespace-nowrap sm:text-[15px]">
		<time {datetime}>{@render children()}</time>
	</h2>
	<div class="bg-border h-px flex-1"></div>
	<CopyButton
		text={copyUrl}
		variant="ghost"
		size="icon-md"
		tabindex={0}
		aria-label="Copy link to this release"
		class="text-muted-foreground -mr-1"
	/>
</div>
