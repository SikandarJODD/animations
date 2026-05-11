<script lang="ts">
	import ChangelogHighlight from "../changelog-highlight.svelte";

</script>

<article aria-labelledby="changelog-2026-05-12">
	<div class="mb-5 flex items-center gap-3">
		<h2 id="changelog-2026-05-12" class="text-base font-semibold whitespace-nowrap sm:text-lg">
			May 12, 2026
		</h2>
		<div class="bg-border h-px flex-1"></div>
	</div>

	<p class="text-foreground mb-6 text-sm leading-7 sm:text-[15px]">
		<a href="/fancy/scramble-in" class="rounded-sm outline-none focus-visible:ring-3">
			<ChangelogHighlight>New Fancy Components</ChangelogHighlight>
		</a>
		and docs navigation upgrades are now available.
	</p>

	<div class="space-y-7">
		<section aria-labelledby="changelog-2026-05-12-added">
			<h3
				id="changelog-2026-05-12-added"
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
				class="text-muted-foreground mb-3 text-[11px] font-medium tracking-[0.16em] uppercase"
			>
				Improved
			</h3>

			<ul class="space-y-2.5 text-sm leading-7 sm:text-[15px]">
				<li class="grid grid-cols-[0.65rem_1fr] gap-2">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						Docs navigation now supports keyboard-based movement for faster section-to-section browsing.
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
