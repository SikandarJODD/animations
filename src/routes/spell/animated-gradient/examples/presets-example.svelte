<script lang="ts">
	import { AnimatedGradient } from "$lib/components/spell/animated-gradient";

	const presets = ["Lava", "Prism", "Plasma", "Pulse", "Vortex", "Mist"] as const;
	type Preset = (typeof presets)[number];

	let activePreset: Preset = $state("Lava");
</script>

<div class="relative min-h-[500px] w-full md:min-h-[350px] flex flex-col">
	<AnimatedGradient style="z-index: 0;" config={{ preset: activePreset }} />
	<div class="relative z-10 flex gap-2 p-4 flex-wrap">
		{#each presets as preset}
			<button
				onclick={() => (activePreset = preset)}
				class="px-3 py-1 text-sm font-medium tracking-tight cursor-pointer rounded-full transition-colors {activePreset === preset
					? 'bg-white text-black'
					: 'bg-transparent text-white'}"
			>
				{preset}
			</button>
		{/each}
	</div>
	<div class="relative z-10 flex-1 flex items-center justify-center">
		<p class="text-4xl font-semibold tracking-tighter text-white mix-blend-exclusion">
			{activePreset}
		</p>
	</div>
</div>
