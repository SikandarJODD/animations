<script lang="ts">
	import { PulsatingButton } from "$lib/components/magic/pulsating-button";
</script>

<div class="flex flex-col flex-wrap items-start justify-center gap-12 md:flex-row">
	<div class="space-y-6">
		<p class="text-muted-foreground text-sm">Distance: 4px</p>
		<PulsatingButton variant="ring" distance="4px">Small Distance</PulsatingButton>
	</div>

	<div class="space-y-6">
		<p class="text-muted-foreground text-sm">Distance: 8px</p>
		<!-- default distance is 8px -->
		<PulsatingButton variant="ring" distance="8px">Default</PulsatingButton>
	</div>

	<div class="space-y-6">
		<p class="text-muted-foreground text-sm">Distance: 12px</p>
		<PulsatingButton variant="ring" distance="12px">Large Distance</PulsatingButton>
	</div>
</div>
