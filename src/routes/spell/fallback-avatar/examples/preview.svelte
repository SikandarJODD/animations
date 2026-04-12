<script lang="ts">
	import { FallbackAvatar } from "$lib/components/spell/fallback-avatar";

	const names = ["xxtomm", "max", "hugh", "diana", "solo"];
</script>

<div class="flex items-center justify-center gap-3 py-12">
	{#each names as name}
		<div class="flex flex-col items-center gap-1">
			<FallbackAvatar class="border" {name} size={32} />
			<span class="text-[11px] text-muted-foreground">{name}</span>
		</div>
	{/each}
</div>
