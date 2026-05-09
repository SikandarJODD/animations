<script lang="ts">
	import ChangelogHighlight from "../changelog-highlight.svelte";
</script>

<article aria-labelledby="changelog-2026-05-09">
	<div class="mb-5 flex items-center gap-3">
		<h2 id="changelog-2026-05-09" class="text-base font-semibold whitespace-nowrap sm:text-lg">
			May 9, 2026
		</h2>
		<div class="bg-border h-px flex-1"></div>
	</div>

	<p class="text-foreground mb-6 text-sm leading-7 sm:text-[15px]">
		Ten new components land in
		<a href="/spell" class="rounded-sm outline-none focus-visible:ring-3">
			<ChangelogHighlight>Spell UI</ChangelogHighlight>
		</a>
		— buttons, backgrounds, text effects, a chart, and a live tweet embed.
	</p>

	<div class="space-y-7">
		<section aria-labelledby="changelog-2026-05-09-added">
			<h3
				id="changelog-2026-05-09-added"
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
							href="/spell/animated-gradient"
							class="font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						>
							Animated Gradient
						</a>
						— a WebGL2-powered animated gradient background with multiple presets and full
						customization support.
					</span>
				</li>

				<li class="flex gap-2.5">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						<a
							href="/spell/light-rays"
							class="font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						>
							Light Rays
						</a>
						— a WebGL-powered crepuscular light effect with customizable colors, intensity, and
						animation speed.
					</span>
				</li>

				<li class="flex gap-2.5">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						<a
							href="/spell/chart"
							class="font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						>
							Chart
						</a>
						— an interactive line chart with a cursor-tracked tooltip and snap-to-point hover.
					</span>
				</li>

				<li class="flex gap-2.5">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						<a
							href="/spell/rich-button"
							class="font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						>
							Rich Button
						</a>
						— gradient backgrounds, text shadows, and 23 color variants.
					</span>
				</li>

				<li class="flex gap-2.5">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						<a
							href="/spell/flow-button"
							class="font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						>
							Flow Button
						</a>
						— an animated dashed SVG border that flows around the edges on hover.
					</span>
				</li>

				<li class="flex gap-2.5">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						<a
							href="/spell/pop-button"
							class="font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						>
							Pop Button
						</a>
						— a 3D pop effect with press animation, multiple color variants, and sizes.
					</span>
				</li>

				<li class="flex gap-2.5">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						<a
							href="/spell/copy-button"
							class="font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						>
							Copy Button
						</a>
						— a copy-to-clipboard button with an animated icon transition between copy and check
						states.
					</span>
				</li>

				<li class="flex gap-2.5">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						<a
							href="/spell/shimmer-text"
							class="font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						>
							Shimmer Text
						</a>
						— a repeating shimmer highlight that sweeps across text content.
					</span>
				</li>

				<li class="flex gap-2.5">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						<a
							href="/spell/spinner"
							class="font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						>
							Spinner
						</a>
						— a smooth gradient spinner built from an SVG arc, with size and speed variants.
					</span>
				</li>

				<li class="flex gap-2.5">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						<a
							href="/spell/tweet"
							class="font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						>
							Tweet
						</a>
						— fetch and render any X/Twitter post by ID, with media, entities, and live like
						counts.
					</span>
				</li>
			</ul>
		</section>
	</div>
</article>
