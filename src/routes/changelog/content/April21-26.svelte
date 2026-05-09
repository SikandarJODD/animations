<script lang="ts">
	import ChangelogHighlight from "../changelog-highlight.svelte";
</script>

<article aria-labelledby="changelog-2026-04-21">
	<div class="mb-5 flex items-center gap-3">
		<h2 id="changelog-2026-04-21" class="text-base font-semibold whitespace-nowrap sm:text-lg">
			April 21, 2026
		</h2>
		<div class="bg-border h-px flex-1"></div>
	</div>

	<p class="text-foreground mb-6 text-sm leading-7 sm:text-[15px]">
		<a
			href="/magic/docs/components/dia-text-reveal"
			class="rounded-sm outline-none focus-visible:ring-3"
		>
			<ChangelogHighlight>Dia Text Reveal component</ChangelogHighlight>
		</a>
		is now available in Svelte Magic UI.
	</p>

	<div class="space-y-7">
		<section aria-labelledby="changelog-2026-04-21-added">
			<h3
				id="changelog-2026-04-21-added"
				class="text-muted-foreground mb-3 text-[11px] font-medium tracking-[0.16em] uppercase"
			>
				Added
			</h3>

			<ul class="space-y-2.5 text-sm leading-7 sm:text-[15px]">
				<li class="flex gap-2.5">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						<a
							href="/magic/docs/components/dia-text-reveal"
							class="font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						>
							Dia Text Reveal
						</a>
						is Inspired from Magic UI.
					</span>
				</li>
				<li class="flex gap-2.5">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0"
						>A horizontal color band sweeps across text with a gradient shine, then
						settles on your theme foreground color.</span
					>
				</li>
			</ul>
		</section>
	</div>
</article>
