<script lang="ts">
	import { GlyphMatrix } from "#lib/components/magic/glyph-matrix/index.js";
	import { mode } from "mode-watcher";
</script>

<div class="bg-background relative h-100 w-full overflow-hidden rounded-lg">
	<GlyphMatrix
		glyphs="·:|+"
		pattern="aurora"
		cellSize={14}
		mutationRate={0.015}
		interval={160}
		fadeBottom={0}
		boost={1}
		color={mode.current === "dark" ? "oklch(0.8 0.16 160)" : "oklch(0.46 0.1 160)"}
	/>
</div>
