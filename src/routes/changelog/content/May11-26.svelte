<script lang="ts">
	import ChangelogHighlight from "../changelog-highlight.svelte";
</script>

<article aria-labelledby="changelog-2026-05-11">
	<div class="mb-5 flex items-center gap-3">
		<h2 id="changelog-2026-05-11" class="text-base font-semibold whitespace-nowrap sm:text-lg">
			May 11, 2026
		</h2>
		<div class="bg-border h-px flex-1"></div>
	</div>

	<p class="text-foreground mb-6 text-sm leading-7 sm:text-[15px]">
		<a href="/fancy/letter-swap" class="rounded-sm outline-none focus-visible:ring-3">
			<ChangelogHighlight>New Fancy Components</ChangelogHighlight>
		</a>
		are now available with new text-swap and hover interaction effects.
	</p>

	<div class="space-y-7">
		<section aria-labelledby="changelog-2026-05-11-added">
			<h3
				id="changelog-2026-05-11-added"
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
							href="/fancy/letter-swap"
							class="font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						>
							Letter Swap
						</a>
						for clean text transitions with directional letter movement.
					</span>
				</li>

				<li class="grid grid-cols-[0.65rem_1fr] gap-2">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						<a
							href="/fancy/letter-3d-swap"
							class="font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						>
							Letter 3D Swap
						</a>
						for layered swaps with depth and rotation.
					</span>
				</li>

				<li class="grid grid-cols-[0.65rem_1fr] gap-2">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						<a
							href="/fancy/random-letter-swap"
							class="font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						>
							Random Letter Swap
						</a>
						for shuffled text transitions with randomized letter sequencing.
					</span>
				</li>

				<li class="grid grid-cols-[0.65rem_1fr] gap-2">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						<a
							href="/fancy/scramble-hover"
							class="font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						>
							Scramble Hover
						</a>
						for hover-driven text scrambling with customizable character sets.
					</span>
				</li>
			</ul>
		</section>
	</div>
</article>
