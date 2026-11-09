<script lang="ts">
	import { WordsStagger } from "#lib/components/spell/words-stagger/index.js";

	let starts = $state(0);
	let completes = $state(0);
</script>

<div class="flex justify-center py-10">
	<div class="w-full max-w-xl rounded-3xl border bg-zinc-950 px-6 py-8 text-zinc-50 shadow-sm">
		<div class="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
			<div class="space-y-1">
				<p class="text-xs font-semibold tracking-[0.24em] text-zinc-400 uppercase">
					View Trigger
				</p>
				<p class="max-w-[26rem] text-sm text-zinc-300">
					Scroll this block out of frame and back in to replay the stagger and watch the
					lifecycle counters update.
				</p>
			</div>

			<div class="rounded-2xl border border-zinc-800 bg-zinc-900/80 px-3 py-2 text-right">
				<p class="text-[11px] tracking-[0.22em] text-zinc-500 uppercase">Callbacks</p>
				<p class="text-sm text-zinc-200">start {starts} | complete {completes}</p>
			</div>
		</div>

		<WordsStagger
			as="p"
			class="max-w-[28ch] text-2xl font-medium tracking-tight sm:text-3xl"
			delay={0.05}
			stagger={0.075}
			speed={0.3}
			triggerOnView
			once={false}
			onStart={() => (starts += 1)}
			onComplete={() => (completes += 1)}
		>
			This line waits for the viewport, then steps through each word with a tighter editorial
			rhythm.
		</WordsStagger>
	</div>
</div>
