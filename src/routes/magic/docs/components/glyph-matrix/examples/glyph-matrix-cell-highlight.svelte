<script lang="ts">
	import { GlyphMatrix } from "#lib/components/magic/glyph-matrix/index.js";
	import { mode } from "mode-watcher";
</script>

<div class="bg-background relative h-100 w-full overflow-hidden rounded-lg">
	<GlyphMatrix
		glyphs=".:+*"
		cellSize={14}
		fadeBottom={0.2}
		boost={1}
		hover
		color={mode.current === "dark" ? "oklch(0.72 0.1 230)" : "oklch(0.48 0.09 230)"}
		hoverColor={mode.current === "dark" ? "oklch(0.86 0.08 230)" : "oklch(0.4 0.08 230)"}
	/>
</div>
