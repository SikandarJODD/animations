<script lang="ts">
	import type { Snippet } from "svelte";

	let {
		children,
	}: {
		children: Snippet;
	} = $props();
</script>

<div
	class="bg-secondary dark:bg-secondary/70 inline-block w-fit rounded px-1.5 py-0.5 font-mono text-sm"
>
	{@render children()}
</div>
