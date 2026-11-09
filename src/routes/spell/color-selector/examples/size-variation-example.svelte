<script lang="ts">
	import {
		ColorSelector,
		type ColorSelectorColor,
	} from "#lib/components/spell/color-selector/index.js";
</script>

<div class="flex flex-col gap-6">
	<div class="flex flex-col items-start gap-2">
		<span class="text-muted-foreground font-mono text-sm">SMALL</span>
		<ColorSelector colors={["red", "blue", "green", "yellow"]} defaultValue="red" size="sm" />
	</div>
	<div class="flex flex-col items-start gap-2">
		<span class="text-muted-foreground font-mono text-sm">DEFAULT</span>
		<ColorSelector
			colors={["red", "blue", "green", "yellow"]}
			defaultValue="blue"
			size="default"
		/>
	</div>
	<div class="flex flex-col items-start gap-2">
		<span class="text-muted-foreground font-mono text-sm">LARGE</span>
		<ColorSelector colors={["red", "blue", "green", "yellow"]} defaultValue="green" size="lg" />
	</div>
</div>
