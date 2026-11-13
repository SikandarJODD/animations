<script lang="ts">
	import ChangelogDate from "../changelog-date.svelte";
	import ChangelogHighlight from "../changelog-highlight.svelte";
</script>

<article aria-labelledby="changelog-2026-05-02">
	<ChangelogDate id="changelog-2026-05-02" datetime="2026-05-02">May 2, 2026</ChangelogDate>

	<p class="text-foreground mb-5 text-sm leading-6 sm:text-[15px]">
		<a
			href="/magic/docs/components/arc-timeline"
			class="rounded-sm outline-none focus-visible:ring-3"
		>
			<ChangelogHighlight>Arc Timeline</ChangelogHighlight>
		</a>
		joins Svelte Magic UI.
	</p>

	<div class="space-y-5">
		<section aria-label="Added">
			<ul class="space-y-2 text-sm leading-6 sm:text-[15px]">
				<li class="flex gap-2.5">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						<a
							href="/magic/docs/components/arc-timeline"
							class="font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
						>
							Arc Timeline
						</a>
						to Svelte Magic UI with rotating milestone steps, grouped timeline labels, and
						customizable arc spacing.
					</span>
				</li>
				<li class="flex gap-2.5">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						Added documentation, installable registry support, and multiple examples for
						product roadmaps and company milestone timelines.
					</span>
				</li>
			</ul>
		</section>
	</div>
</article>
