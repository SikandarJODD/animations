<script lang="ts">
	import { GlyphMatrix } from "#lib/components/magic/glyph-matrix/index.js";
	import { mode } from "mode-watcher";
</script>

<div class="bg-background relative h-120 w-full overflow-hidden rounded-lg">
	<GlyphMatrix
		glyphs="·:+*"
		pattern="flame"
		cellSize={14}
		mutationRate={0.015}
		interval={160}
		fadeBottom={0}
		boost={1}
		hover
		hoverRadius={60}
		color={mode.current === "dark" ? "oklch(0.7 0.19 35)" : "oklch(0.55 0.19 35)"}
		hoverColor={mode.current === "dark" ? "oklch(0.76 0.13 35)" : "oklch(0.45 0.14 35)"}
	/>
</div>
