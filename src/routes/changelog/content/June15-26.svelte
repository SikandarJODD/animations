<script lang="ts">
	import ChangelogHighlight from "../changelog-highlight.svelte";
</script>

<article aria-labelledby="changelog-2026-06-15">
	<div class="mb-5 flex items-center gap-3">
		<h2 id="changelog-2026-06-15" class="text-base font-semibold whitespace-nowrap sm:text-lg">
			June 15, 2026
		</h2>
		<div class="bg-border h-px flex-1"></div>
	</div>

	<p class="text-foreground mb-6 text-sm leading-7 sm:text-[15px]">
		<a
			href="/magic/docs/components/glare-hover"
			class="rounded-sm outline-none focus-visible:ring-3"
		>
			<ChangelogHighlight>New Magic Components</ChangelogHighlight>
		</a>
		are now available with hover, background texture, and animated text effects.
	</p>

	<div class="space-y-7">
		<section aria-labelledby="changelog-2026-06-15-added">
			<h3
				id="changelog-2026-06-15-added"
				class="text-muted-foreground mb-3 text-[11px] font-medium tracking-[0.16em] uppercase"
			>
				Added
			</h3>

			<ul class="space-y-2.5 text-sm leading-7 sm:text-[15px]">
				<li class="grid grid-cols-[0.65rem_1fr] gap-2">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						<a
							href="/magic/docs/components/glare-hover"
							class="font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						>
							Glare Hover
						</a>
						for subtle shine effects that sweep across cards, buttons, and call-to-action
						blocks on hover.
					</span>
				</li>

				<li class="grid grid-cols-[0.65rem_1fr] gap-2">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						<a
							href="/magic/docs/components/hexagon-pattern"
							class="font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						>
							Hexagon Pattern
						</a>
						for SVG-based patterned backgrounds with configurable spacing, direction, and
						highlighted cells.
					</span>
				</li>

				<li class="grid grid-cols-[0.65rem_1fr] gap-2">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						<a
							href="/magic/docs/components/noise-texture"
							class="font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						>
							Noise Texture
						</a>
						for adding layered grain and texture to surfaces, sections, and visual backgrounds.
					</span>
				</li>

				<li class="grid grid-cols-[0.65rem_1fr] gap-2">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						<a
							href="/magic/docs/components/sparkles-text"
							class="font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						>
							Sparkles Text
						</a>
						for animated text treatments with sparkling highlights and attention-grabbing
						motion.
					</span>
				</li>
			</ul>
		</section>
	</div>
</article>
