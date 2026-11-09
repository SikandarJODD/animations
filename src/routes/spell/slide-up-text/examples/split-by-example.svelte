<script lang="ts">
	import { SlideUpText } from "#lib/components/spell/slide-up-text/index.js";
</script>

<div class="flex flex-col gap-8">
	<div class="flex flex-col items-start">
		<span class="text-muted-foreground font-mono text-sm"> BY WORDS </span>
		<SlideUpText split="words" class="text-xl font-medium" triggerOnView>
			Beautiful animated text
		</SlideUpText>
	</div>
	<div class="flex flex-col">
		<span class="text-muted-foreground mb-2 font-mono text-sm"> BY CHARACTERS </span>
		<SlideUpText split="characters" stagger={0.02} class="text-xl font-medium" triggerOnView>
			You just can ship things.
		</SlideUpText>
	</div>
	<div class="flex flex-col items-start">
		<span class="text-muted-foreground mb-2 font-mono text-sm"> BY LINES </span>
		<SlideUpText split="lines" stagger={0.2} class="text-xl font-medium" triggerOnView>
			{"First line\nSecond line\nThird line"}
		</SlideUpText>
	</div>
</div>
