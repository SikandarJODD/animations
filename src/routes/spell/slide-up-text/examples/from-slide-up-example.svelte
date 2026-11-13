<script lang="ts">
	import { SlideUpText } from "#lib/components/spell/slide-up-text/index.js";
</script>

<div class="flex flex-col gap-8">
	<div class="flex flex-col items-start">
		<span class="text-muted-foreground mb-2 font-mono text-sm"> FROM FIRST </span>
		<SlideUpText from="first" class="text-xl font-medium" triggerOnView>
			Animation from first word
		</SlideUpText>
	</div>
	<div class="flex flex-col items-start">
		<span class="text-muted-foreground mb-2 font-mono text-sm"> FROM LAST </span>
		<SlideUpText from="last" class="text-xl font-medium" delay={0.8} triggerOnView>
			Animation from last word
		</SlideUpText>
	</div>
	<div class="flex flex-col items-start">
		<span class="text-muted-foreground mb-2 font-mono text-sm"> FROM CENTER </span>
		<SlideUpText from="center" class="text-xl font-medium" delay={1.5} triggerOnView>
			Animation from center outward
		</SlideUpText>
	</div>
</div>
