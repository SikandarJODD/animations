<script lang="ts">
	import { GlyphMatrix } from "#lib/components/magic/glyph-matrix/index.js";
	import { mode } from "mode-watcher";
</script>

<div class="bg-background relative h-100 w-full overflow-hidden rounded-lg">
	<GlyphMatrix
		glyphs="01:|"
		pattern="rain"
		cellSize={14}
		mutationRate={0.015}
		interval={160}
		fadeBottom={0}
		boost={1}
		color={mode.current === "dark" ? "oklch(0.78 0.17 340)" : "oklch(0.5 0.19 340)"}
	/>
</div>
