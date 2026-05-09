<script lang="ts">
	import { ColorSelector, type ColorSelectorColor } from "$lib/components/spell/color-selector";

	let selectedColor: ColorSelectorColor = $state("blue");
</script>

<div class="flex flex-col items-start gap-4">
	<ColorSelector
		colors={["red", "blue", "green", "yellow", "purple", "pink", "orange"]}
		defaultValue={selectedColor}
		onColorSelect={(color) => (selectedColor = color)}
	/>
	<p class="text-muted-foreground font-mono text-sm">
		Selected: <span class="text-foreground">{selectedColor}</span>
	</p>
</div>
