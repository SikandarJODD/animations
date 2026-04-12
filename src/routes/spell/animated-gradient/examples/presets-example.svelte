<script lang="ts">
	import { AnimatedGradient } from "$lib/components/spell/animated-gradient";

	const presets = ["Prism", "Lava", "Plasma", "Pulse", "Vortex", "Mist"] as const;
</script>

<div class="grid grid-cols-2 gap-4 p-4 md:grid-cols-3">
	{#each presets as preset}
		<div class="flex flex-col gap-2">
			<div class="relative h-40 w-full rounded-xl overflow-hidden">
				<AnimatedGradient config={{ preset }} radius="0.75rem" />
			</div>
			<p class="text-center text-sm text-muted-foreground">{preset}</p>
		</div>
	{/each}
</div>
