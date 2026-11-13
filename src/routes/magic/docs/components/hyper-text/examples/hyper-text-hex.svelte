<script lang="ts">
	import { HyperText } from "#lib/components/magic/hyper-text/index.js";

	const characterSet = "0123456789ABCDEF".split("");
</script>

<div class="text-center">
	<p class="text-muted-foreground mb-2 text-sm">Revision</p>
	<HyperText
		text="A7F03C"
		{characterSet}
		duration={600}
		class="text-3xl text-emerald-700 sm:text-5xl dark:text-emerald-300"
	/>
</div>
