<script lang="ts">
	import ChangelogDate from "../changelog-date.svelte";
	import ChangelogHighlight from "../changelog-highlight.svelte";
</script>

<article aria-labelledby="changelog-2026-04-18">
	<ChangelogDate id="changelog-2026-04-18" datetime="2026-04-18">April 18, 2026</ChangelogDate>

	<p class="text-foreground mb-5 text-sm leading-6 sm:text-[15px]">
		<a href="/fancy/media-between-text" class="rounded-sm outline-none focus-visible:ring-3">
			<ChangelogHighlight>Media Between Text</ChangelogHighlight>
		</a>
		joins Fancy Components, alongside additions to Spell UI and Magic UI.
	</p>

	<div class="space-y-5">
		<section aria-labelledby="changelog-2026-04-18-added">
			<h3
				id="changelog-2026-04-18-added"
				class="text-muted-foreground mb-2.5 text-sm font-medium"
			>
				Added
			</h3>

			<ul class="space-y-2 text-sm leading-6 sm:text-[15px]">
				<li class="grid grid-cols-[0.65rem_1fr] gap-2">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						<a
							href="/fancy/media-between-text"
							class="font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						>
							Media Between Text
						</a>
						to Fancy Components for image and video reveals between text fragments.
					</span>
				</li>

				<li class="grid grid-cols-[0.65rem_1fr] gap-2">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						<a
							href="/spell/tilt-card"
							class="font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						>
							Tilt Card
						</a>
						with cursor-reactive depth, scale, perspective, and spotlight controls.
					</span>
				</li>

				<li class="grid grid-cols-[0.65rem_1fr] gap-2">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						<a
							href="/spell/fallback-avatar"
							class="font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						>
							Fallback Avatar
						</a>
						with seeded canvas rendering and deterministic fallback visuals.
					</span>
				</li>

				<li class="grid grid-cols-[0.65rem_1fr] gap-2">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						<a
							href="/magic/docs/components/backlight"
							class="font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						>
							Backlight
						</a>
						to Svelte Magic UI for soft SVG filter glow effects.
					</span>
				</li>
			</ul>
		</section>

		<section aria-labelledby="changelog-2026-04-18-fixed">
			<h3
				id="changelog-2026-04-18-fixed"
				class="text-muted-foreground mb-2.5 text-sm font-medium"
			>
				Fixed
			</h3>

			<ul class="space-y-2 text-sm leading-6 sm:text-[15px]">
				<li class="grid grid-cols-[0.65rem_1fr] gap-2">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						Fixed
						<a
							href="/spell/signature"
							class="font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						>
							Signature
						</a>
						by adding a download link for the font.
					</span>
				</li>
			</ul>
		</section>
	</div>
</article>
