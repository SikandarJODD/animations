<script lang="ts">
	import { GlyphMatrix } from "#lib/components/magic/glyph-matrix/index.js";
	import { mode } from "mode-watcher";
</script>

<div class="bg-background relative h-100 w-full overflow-hidden rounded-lg">
	<GlyphMatrix
		glyphs="01"
		cellSize={14}
		fadeBottom={0.2}
		boost={1}
		color={mode.current === "dark" ? "oklch(0.72 0.13 160)" : "oklch(0.45 0.08 160)"}
	/>
</div>
