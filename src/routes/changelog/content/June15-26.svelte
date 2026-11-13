<script lang="ts">
	import ChangelogDate from "../changelog-date.svelte";
	import ChangelogHighlight from "../changelog-highlight.svelte";
</script>

<article aria-labelledby="changelog-2026-06-15">
	<ChangelogDate id="changelog-2026-06-15" datetime="2026-06-15">June 15, 2026</ChangelogDate>

	<p class="text-foreground mb-5 text-sm leading-6 sm:text-[15px]">
		<a
			href="/magic/docs/components/glare-hover"
			class="rounded-sm outline-none focus-visible:ring-3"
		>
			<ChangelogHighlight>Four new Magic UI effects</ChangelogHighlight>
		</a>
		for hover states, background texture, and animated text.
	</p>

	<div class="space-y-5">
		<section aria-label="Added">
			<ul class="space-y-2 text-sm leading-6 sm:text-[15px]">
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
