<script lang="ts">
	import { MorphingText } from "$lib/components/magic/morphing-text";

	const texts = ["Learn", "Grow", "Enjoy", "Live"];
</script>

<div class="flex min-h-80 items-center justify-center">
	<MorphingText {texts} class="font-figtree font-medium" />
</div>
