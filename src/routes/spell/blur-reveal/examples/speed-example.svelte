<script lang="ts">
	import { BlurReveal } from "#lib/components/spell/blur-reveal/index.js";
</script>

<div class="flex flex-col gap-8 *:flex-col">
	<div>
		<p class="text-muted-foreground font-mono text-sm">SLOW (0.5)</p>
		<BlurReveal class="text-2xl font-medium tracking-tight" speedReveal={0.5} triggerOnView>
			You can just ship things.
		</BlurReveal>
	</div>
	<div>
		<p class="text-muted-foreground font-mono text-sm">NORMAL (1.5)</p>
		<BlurReveal class="text-2xl font-medium tracking-tight" speedReveal={1.5} triggerOnView>
			You can just ship things.
		</BlurReveal>
	</div>
	<div>
		<p class="text-muted-foreground font-mono text-sm">FAST (2)</p>
		<BlurReveal class="text-2xl font-medium tracking-tight" speedReveal={2} triggerOnView>
			You can just ship things.
		</BlurReveal>
	</div>
</div>
