<script lang="ts">
	import ChangelogHighlight from "../changelog-highlight.svelte";
</script>

<article aria-labelledby="changelog-2026-11-13">
	<div class="mb-5 flex items-center gap-3">
		<h2 id="changelog-2026-11-13" class="text-base font-semibold whitespace-nowrap sm:text-lg">
			November 13, 2026
		</h2>
		<div class="bg-border h-px flex-1"></div>
	</div>

	<p class="text-foreground mb-6 text-sm leading-7 sm:text-[15px]">
		<a href="/magic/docs/skills" class="rounded-sm outline-none focus-visible:ring-3">
			<ChangelogHighlight>Experimental agent skills</ChangelogHighlight>
		</a>
		are now available.
	</p>

	<div class="space-y-7">
		<section aria-labelledby="changelog-2026-11-13-added">
			<h3
				id="changelog-2026-11-13-added"
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
					<span class="min-w-0">Polished the UI, layouts, and responsive styles.</span>
				</li>

				<li class="grid grid-cols-[0.65rem_1fr] gap-2">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						Added Copy Prompt and quick links for ChatGPT, Claude, and Codex.
					</span>
				</li>

				<li class="grid grid-cols-[0.65rem_1fr] gap-2">
					<span
						aria-hidden="true"
						class="bg-muted-foreground/45 mt-[0.78em] size-1 rounded-full"
					></span>
					<span class="min-w-0">
						Added experimental agent skills with setup guides, example prompts, and source links.
					</span>
				</li>
			</ul>
		</section>
	</div>
</article>
