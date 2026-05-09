<script lang="ts">
	import { TiltCard } from "$lib/components/spell/tilt-card";

	const cards = [
		{
			label: "Closer camera",
			value: "perspective 700",
			perspective: 700,
			gradient:
				"from-emerald-100 via-teal-100 to-cyan-100 dark:from-emerald-950 dark:via-teal-950 dark:to-cyan-950",
		},
		{
			label: "Deeper camera",
			value: "perspective 1800",
			perspective: 1800,
			gradient:
				"from-indigo-100 via-slate-100 to-blue-100 dark:from-slate-950 dark:via-indigo-950 dark:to-blue-950",
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
				perspective={card.perspective}
				scale={1.05}
				tiltLimit={12}
				spotlight={false}
				class={`relative h-52 rounded-[1.4rem] border border-black/5 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.08)] dark:border-white/8 dark:shadow-[0_18px_48px_rgba(0,0,0,0.28)] ${card.gradient}`}
			>
				<div
					class="pointer-events-none absolute inset-4 rounded-[1.1rem] border border-white/35 dark:border-white/10"
				></div>
				<div class="relative flex h-full flex-col justify-between">
					<div class="flex items-start justify-between">
						<div>
							<p
								class="text-[0.7rem] font-semibold tracking-[0.24em] text-neutral-600 uppercase dark:text-neutral-300"
							>
								Depth
							</p>
							<p
								class="mt-2 text-xl font-semibold tracking-tight text-neutral-950 dark:text-white"
							>
								Perspective tuning
							</p>
						</div>
						<div
							class="rounded-2xl border border-black/8 bg-white/40 px-3 py-2 text-xs font-medium dark:border-white/10 dark:bg-white/6"
						>
							3D
						</div>
					</div>

					<p class="max-w-[22ch] text-sm text-neutral-600 dark:text-neutral-300">
						Lower perspective exaggerates motion. Higher perspective feels flatter and
						calmer.
					</p>
				</div>
			</TiltCard>
		</div>
	{/each}
</div>
