<script lang="ts">
	import { AnimatedGradient } from "$lib/components/spell/animated-gradient";

	const configs = [
		{
			label: "Ocean",
			config: {
				preset: "custom" as const,
				color1: "#0a0a2e",
				color2: "#0077b6",
				color3: "#90e0ef",
				rotation: 20,
				speed: 20,
				swirl: 60,
				swirlIterations: 8,
				softness: 80,
				distortion: 6,
				shape: "Checks" as const,
				shapeSize: 30,
			},
		},
		{
			label: "Ember",
			config: {
				preset: "custom" as const,
				color1: "#1a0000",
				color2: "#e85d04",
				color3: "#f48c06",
				rotation: -30,
				speed: 35,
				swirl: 40,
				swirlIterations: 12,
				softness: 100,
				distortion: 10,
				shape: "Edge" as const,
				shapeSize: 20,
			},
		},
		{
			label: "Aurora",
			config: {
				preset: "custom" as const,
				color1: "#03071e",
				color2: "#06d6a0",
				color3: "#7400b8",
				rotation: 10,
				speed: 15,
				swirl: 90,
				swirlIterations: 6,
				softness: 100,
				distortion: 3,
				shape: "Stripes" as const,
				shapeSize: 50,
			},
		},
	] as const;

	let active = $state(0);
</script>

<div class="relative min-h-[500px] w-full md:min-h-[350px] flex flex-col">
	<AnimatedGradient style="z-index: 0;" config={configs[active].config} />
	<div class="relative z-10 flex gap-2 p-4 flex-wrap">
		{#each configs as cfg, i}
			<button
				onclick={() => (active = i)}
				class="px-3 py-1 text-sm font-medium tracking-tight cursor-pointer rounded-full transition-colors {active === i
					? 'bg-white text-black'
					: 'bg-transparent text-white'}"
			>
				{cfg.label}
			</button>
		{/each}
	</div>
	<div class="relative z-10 flex-1 flex items-center justify-center">
		<p class="text-4xl font-semibold tracking-tighter text-white mix-blend-exclusion">
			{configs[active].label}
		</p>
	</div>
</div>
