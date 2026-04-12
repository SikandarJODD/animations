<script lang="ts">
	import { TiltCard } from "$lib/components/spell/tilt-card";

	const cards = [
		{
			label: "Gentle",
			value: "tiltLimit 6",
			tiltLimit: 6,
			gradient:
				"from-zinc-100 via-neutral-100 to-zinc-200 dark:from-zinc-900 dark:via-neutral-900 dark:to-zinc-950",
			tag: "Product",
		},
		{
			label: "Dramatic",
			value: "tiltLimit 18",
			tiltLimit: 18,
			gradient:
				"from-orange-100 via-amber-100 to-yellow-100 dark:from-stone-950 dark:via-orange-950 dark:to-amber-950",
			tag: "Hero",
		},
	];
</script>

<div class="grid gap-4 py-6 sm:grid-cols-2">
	{#each cards as card}
		<div class="space-y-2">
			<div class="px-1">
				<p class="text-sm font-medium">{card.label} tilt</p>
				<p class="text-muted-foreground text-xs">{card.value}</p>
			</div>

			<TiltCard
				tiltLimit={card.tiltLimit}
				scale={1.05}
				perspective={1200}
				spotlight={false}
				class={`h-52 rounded-[1.4rem] border border-black/5 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.08)] dark:border-white/8 dark:shadow-[0_18px_48px_rgba(0,0,0,0.28)] ${card.gradient}`}
			>
				<div class="flex h-full flex-col justify-between">
					<div class="flex items-center justify-between">
						<span
							class="rounded-full border border-black/8 bg-white/40 px-3 py-1 text-[0.68rem] font-medium tracking-[0.18em] uppercase dark:border-white/10 dark:bg-white/6"
						>
							{card.tag}
						</span>
						<div class="flex gap-1.5">
							<div
								class="h-2.5 w-2.5 rounded-full bg-black/15 dark:bg-white/20"
							></div>
							<div
								class="h-2.5 w-2.5 rounded-full bg-black/10 dark:bg-white/10"
							></div>
						</div>
					</div>

					<div class="space-y-2">
						<p
							class="text-lg font-semibold tracking-tight text-neutral-950 dark:text-white"
						>
							Tilt depth controls attitude
						</p>
						<p class="text-sm text-neutral-600 dark:text-neutral-300">
							Low values feel stable. Higher values feel more playful and cinematic.
						</p>
					</div>
				</div>
			</TiltCard>
		</div>
	{/each}
</div>
