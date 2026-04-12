<script lang="ts">
	import { TiltCard } from "$lib/components/spell/tilt-card";

	const cards = [
		{
			label: "Subtle lift",
			value: "scale 1.02",
			scale: 1.02,
			gradient:
				"from-stone-100 via-stone-200 to-stone-300 dark:from-stone-800 dark:via-stone-900 dark:to-black",
			accent: "bg-stone-950/10 dark:bg-white/10",
		},
		{
			label: "Stronger lift",
			value: "scale 1.12",
			scale: 1.12,
			gradient:
				"from-sky-100 via-cyan-100 to-teal-100 dark:from-slate-900 dark:via-cyan-950 dark:to-teal-950",
			accent: "bg-cyan-500/15 dark:bg-cyan-400/15",
		},
	];
</script>

<div class="grid gap-4 py-6 sm:grid-cols-2">
	{#each cards as card}
		<div class="space-y-2">
			<div class="px-1">
				<p class="text-sm font-medium">{card.label}</p>
				<p class="text-muted-foreground text-xs">{card.value}</p>
			</div>

			<TiltCard
				scale={card.scale}
				tiltLimit={10}
				perspective={1200}
				spotlight={false}
				class={`relative h-52 rounded-[1.4rem] border border-black/5 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.08)] dark:border-white/8 dark:shadow-[0_18px_48px_rgba(0,0,0,0.28)] ${card.gradient}`}
			>
				<div class="flex h-full flex-col justify-between">
					<div class="flex items-start justify-between">
						<div class={`h-10 w-10 rounded-2xl ${card.accent}`}></div>
						<span
							class="text-[0.65rem] font-semibold tracking-[0.26em] text-neutral-600 uppercase dark:text-neutral-300"
						>
							Hover
						</span>
					</div>

					<div class="space-y-2">
						<p
							class="text-lg font-semibold tracking-tight text-neutral-950 dark:text-white"
						>
							Calibrated scale
						</p>
						<p class="text-sm text-neutral-600 dark:text-neutral-300">
							Use lower values for restrained UI and higher values for stronger card
							emphasis.
						</p>
					</div>
				</div>
			</TiltCard>
		</div>
	{/each}
</div>
