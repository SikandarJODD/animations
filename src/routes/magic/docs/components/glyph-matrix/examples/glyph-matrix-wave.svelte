<script lang="ts">
	import { GlyphMatrix } from "#lib/components/magic/glyph-matrix/index.js";
	import { mode } from "mode-watcher";
</script>

<div class="bg-background relative h-100 w-full overflow-hidden rounded-lg">
	<GlyphMatrix
		glyphs="~·:+"
		pattern="wave"
		cellSize={14}
		mutationRate={0.015}
		interval={160}
		fadeBottom={0}
		boost={1}
		hover
		hoverRadius={60}
		color={mode.current === "dark" ? "oklch(0.8 0.12 215)" : "oklch(0.48 0.08 215)"}
		hoverColor={mode.current === "dark" ? "oklch(0.88 0.08 215)" : "oklch(0.4 0.07 215)"}
	/>
</div>
