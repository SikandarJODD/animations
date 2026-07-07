<script lang="ts">
	import { GlyphMatrix } from "$lib/components/magic/glyph-matrix";
	import { mode } from "mode-watcher";
    // Visit https://www.fffuel.co/cccolor/ for colors
</script>

<div class="bg-background relative h-100 w-full overflow-hidden rounded-lg">
	<GlyphMatrix
		glyphs="SVELTE"
		cellSize={16}
		mutationRate={0.04}
		interval={40}
		fadeBottom={0.8}
		color={mode.current === "dark" ? "#FF4000" : "rgb(255, 21, 0)"}
		boost={1.25}
	/>
</div>
