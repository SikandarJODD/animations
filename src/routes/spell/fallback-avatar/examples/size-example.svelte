<script lang="ts">
	import { FallbackAvatar } from "$lib/components/spell/fallback-avatar";

	const sizes = [20, 28, 36, 44] as const;
</script>

<div class="flex items-end gap-6">
	{#each sizes as size}
		<div class="flex flex-col items-center gap-3">
			<FallbackAvatar class="border" name="sun" {size} />
			<span class="font-mono text-xs text-neutral-600 dark:text-neutral-400">{size}px</span>
		</div>
	{/each}
</div>
