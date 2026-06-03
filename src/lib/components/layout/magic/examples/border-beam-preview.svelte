<script lang="ts">
	import { BorderBeam } from "$lib/components/magic/border-beam";
</script>

<div class="flex min-h-80 items-center justify-center px-6">
	<div
		class="bg-background/90 relative w-full max-w-sm overflow-hidden rounded-xl border p-2 shadow-sm"
	>
		<div class="space-y-5">
			<a href="https://bhide.dev?utm_source=sv-animations" target="_blank" class="flex items-center gap-4">
				<img
					src="https://github.com/SikandarJODD.png"
					alt="Bhide Svelte"
					class="size-14 rounded-lg border object-cover"
				/>
				<div>
					<h3 class="font-figtree text-2xl font-semibold tracking-[-0.04em]">
						Bhide Svelte
					</h3>
					<p class="text-muted-foreground font-figtree text-sm leading-6">
						I Love Svelte, Animations and Art.
					</p>
				</div>
			</a>

			<div class="flex flex-wrap gap-2">
				<span
					class="font-figtree rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-500"
				>
					Animations
				</span>
				<span
					class="font-figtree rounded-full bg-orange-500/20 px-3 py-1 text-xs font-medium text-orange-500"
				>
					Marketing
				</span>
				<span
					class="font-figtree rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-500"
				>
					Dot Matrix
				</span>
				<span
					class="font-figtree rounded-full bg-pink-500/20 px-3 py-1 text-xs font-medium text-pink-500"
				>
					Design Systems
				</span>
			</div>
		</div>

		<BorderBeam duration={8} size={120} colorFrom="#38bdf8" colorTo="#f472b6" />
	</div>
</div>
