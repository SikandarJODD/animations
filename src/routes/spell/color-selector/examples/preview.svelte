<script lang="ts">
	import {
		ColorSelector,
		type ColorSelectorColor,
	} from "#lib/components/spell/color-selector/index.js";

	let value: ColorSelectorColor = $state("teal");
</script>

<ColorSelector
	colors={["orange", "teal", "purple", "#111827", "currentColor"]}
	size="lg"
	bind:value
/>
