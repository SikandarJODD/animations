<script lang="ts">
	import { TextMarquee } from "#lib/components/spell/text-marquee/index.js";

	const updates = ["Shipped", "Reviewed", "Published", "Synced", "Archived"];
</script>

<div class="flex justify-center py-10">
	<div class="rounded-2xl border bg-zinc-950 px-6 py-8 text-zinc-50 shadow-sm">
		<div class="mb-5 space-y-1">
			<p class="text-xs font-semibold tracking-[0.24em] text-zinc-400 uppercase">
				Tighter Settings
			</p>
			<p class="max-w-[18rem] text-sm text-zinc-300">
				A smaller viewport and quicker cycle create a compact announcement strip.
			</p>
		</div>

		<TextMarquee items={updates} height={96} itemHeight={28} speed={0.55} class="min-w-[10rem]">
			{#snippet children(item)}
				<span class="text-sm font-semibold tracking-[0.28em] uppercase">{item}</span>
			{/snippet}
		</TextMarquee>
	</div>
</div>
