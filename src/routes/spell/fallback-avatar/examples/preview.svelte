<script lang="ts">
	import { FallbackAvatar } from "$lib/components/spell/fallback-avatar";

	const names = ["xxtomm", "svelte", "neo", "Aidan", "dheeraj"];
</script>

<div class="flex flex-wrap items-center gap-3">
	{#each names as name}
		<div class="flex flex-col items-center gap-1">
			<FallbackAvatar class="border" {name} size={32} />
			<span class="text-muted-foreground text-[11px]">{name}</span>
		</div>
	{/each}
</div>
