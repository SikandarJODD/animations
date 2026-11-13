<script lang="ts">
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
</script>

<div class="mb-4 flex items-center gap-3">
	<h2 {id} class="text-muted-foreground text-sm font-medium whitespace-nowrap sm:text-[15px]">
		<time {datetime}>{@render children()}</time>
	</h2>
	<div class="bg-border h-px flex-1"></div>
</div>
