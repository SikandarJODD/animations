<script lang="ts">
	import MagicOverviewCard from "./magic-overview-card.svelte";
	import { magicOverviewShowcaseItems } from "./showcase-data";
</script>

<section id="showcase" class="mt-8 space-y-5">
	<div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
		{#each magicOverviewShowcaseItems as item (item.id)}
			<MagicOverviewCard {item} />
		{/each}
	</div>
</section>
