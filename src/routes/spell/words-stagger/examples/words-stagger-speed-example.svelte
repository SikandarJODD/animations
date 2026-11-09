<script lang="ts">
	import { WordsStagger } from "#lib/components/spell/words-stagger/index.js";
</script>

<div class="flex flex-col gap-8">
	<div class="space-y-2">
		<p class="text-muted-foreground font-mono text-sm">SLOW (1)</p>
		<WordsStagger speed={1} class="text-xl font-medium" triggerOnView once={false}>
			You can just ship things.
		</WordsStagger>
	</div>

	<div class="space-y-2">
		<p class="text-muted-foreground font-mono text-sm">NORMAL (0.5)</p>
		<WordsStagger speed={0.5} class="text-xl font-medium" triggerOnView once={false}>
			You can just ship things.
		</WordsStagger>
	</div>

	<div class="space-y-2">
		<p class="text-muted-foreground font-mono text-sm">FAST (0.3)</p>
		<WordsStagger speed={0.3} class="text-xl font-medium" triggerOnView once={false}>
			You can just ship things.
		</WordsStagger>
	</div>
</div>
