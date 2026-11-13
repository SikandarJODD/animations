<script lang="ts">
	import { SpecialText } from "#lib/components/spell/special-text/index.js";
</script>

<div class="flex flex-col gap-4">
	<div class="flex items-center gap-4">
		<span class="text-muted-foreground w-20 font-mono text-sm"> FAST: </span>
		<SpecialText speed={10} class="text-lg" inView>FAST ANIMATION</SpecialText>
	</div>
	<div class="flex items-center gap-4">
		<span class="text-muted-foreground w-20 font-mono text-sm"> NORMAL: </span>
		<SpecialText speed={20} class="text-lg" inView>NORMAL SPEED</SpecialText>
	</div>
	<div class="flex items-center gap-4">
		<span class="text-muted-foreground w-20 font-mono text-sm"> SLOW: </span>
		<SpecialText speed={40} class="text-lg" inView>SLOW MOTION</SpecialText>
	</div>
</div>
