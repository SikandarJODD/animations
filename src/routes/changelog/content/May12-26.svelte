<script lang="ts">
	import ChangelogDate from "../changelog-date.svelte";
	import ChangelogHighlight from "../changelog-highlight.svelte";
</script>

<article aria-labelledby="changelog-2026-05-12">
	<ChangelogDate id="changelog-2026-05-12" datetime="2026-05-12">May 12, 2026</ChangelogDate>

	<p class="text-foreground mb-5 text-sm leading-6 sm:text-[15px]">
		<a href="/fancy/scramble-in" class="rounded-sm outline-none focus-visible:ring-3">
			<ChangelogHighlight>Five new Fancy Components</ChangelogHighlight>
		</a>
		plus better keyboard navigation in the docs.
	</p>

	<div class="space-y-5">
		<section aria-labelledby="changelog-2026-05-12-added">
			<h3
				id="changelog-2026-05-12-added"
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
							href="/fancy/vertical-cut-reveal"
							class="font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						>
							Vertical Cut Reveal
						</a>
						for staggered vertical text reveals across words, characters, or lines.
					</span>
				</li>

				<li class="grid grid-cols-[0.65rem_1fr] gap-2">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						<a
							href="/fancy/underline-to-background"
							class="font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						>
							Underline to Background
						</a>
						for hover interactions that expand an underline into a full background highlight.
					</span>
				</li>
				<li class="grid grid-cols-[0.65rem_1fr] gap-2">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						<a
							href="/fancy/scramble-in"
							class="font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						>
							Scramble In
						</a>
						for animated text reveals with a character-scramble entrance effect.
					</span>
				</li>

				<li class="grid grid-cols-[0.65rem_1fr] gap-2">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						<a
							href="/fancy/text-along-path"
							class="font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						>
							Text Along Path
						</a>
						for curved and circular text layouts that follow SVG paths.
					</span>
				</li>

				<li class="grid grid-cols-[0.65rem_1fr] gap-2">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						<a
							href="/fancy/text-highlighter"
							class="font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						>
							Text Highlighter
						</a>
						for emphasis treatments with animated highlight styling.
					</span>
				</li>
			</ul>
		</section>

		<section aria-labelledby="changelog-2026-05-12-improved">
			<h3
				id="changelog-2026-05-12-improved"
				class="text-muted-foreground mb-2.5 text-sm font-medium"
			>
				Improved
			</h3>

			<ul class="space-y-2 text-sm leading-6 sm:text-[15px]">
				<li class="grid grid-cols-[0.65rem_1fr] gap-2">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						Docs navigation now supports keyboard-based movement for faster
						section-to-section browsing.
					</span>
				</li>

				<li class="grid grid-cols-[0.65rem_1fr] gap-2">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						Added a new issue card below the table of contents to surface feedback and
						reporting actions directly from docs pages.
					</span>
				</li>
			</ul>
		</section>
	</div>
</article>
