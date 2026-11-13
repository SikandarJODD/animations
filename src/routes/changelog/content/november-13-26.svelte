<script lang="ts">
	import ChangelogDate from "../changelog-date.svelte";
	import ChangelogHighlight from "../changelog-highlight.svelte";
</script>

<article aria-labelledby="changelog-2026-11-13">
	<ChangelogDate id="changelog-2026-11-13" datetime="2026-11-13">November 13, 2026</ChangelogDate>

	<p class="text-foreground mb-5 text-sm leading-6 sm:text-[15px]">
		Try the
		<a href="/magic/docs/skills" class="rounded-sm outline-none focus-visible:ring-3">
			<ChangelogHighlight>Experimental agent skills</ChangelogHighlight>
		</a>
		with install steps and example prompts.
	</p>

	<div class="space-y-5">
		<section aria-label="Added">
			<ul class="space-y-2 text-sm leading-6 sm:text-[15px]">
				<li class="grid grid-cols-[0.65rem_1fr] gap-2">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">Refined component examples and responsive layouts across the site.</span>
				</li>

				<li class="grid grid-cols-[0.65rem_1fr] gap-2">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						Copy a prompt or open it directly in ChatGPT, Claude, or Codex.
					</span>
				</li>

				<li class="grid grid-cols-[0.65rem_1fr] gap-2">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						Published skill setup guides, example prompts, and source links.
					</span>
				</li>
			</ul>
		</section>
	</div>
</article>
