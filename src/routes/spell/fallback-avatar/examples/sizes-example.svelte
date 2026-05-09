<script lang="ts">
	import { FallbackAvatar } from "$lib/components/spell/fallback-avatar";

	const sizes = [20, 28, 36, 44] as const;
</script>

<div class="flex items-end justify-center gap-3 py-12">
	{#each sizes as size}
		<div class="flex flex-col items-center gap-1">
			<FallbackAvatar class="border" name="spell" {size} />
			<span class="text-[11px] text-muted-foreground">{size}px</span>
		</div>
	{/each}
</div>
