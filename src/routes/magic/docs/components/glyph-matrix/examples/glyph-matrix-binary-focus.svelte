<script lang="ts">
	import { GlyphMatrix } from "#lib/components/magic/glyph-matrix/index.js";
	import { mode } from "mode-watcher";
</script>

<figure class="w-full max-w-lg">
	<div class="bg-background h-64 overflow-hidden rounded-lg border">
		<GlyphMatrix
			glyphs="01"
			cellSize={14}
			hoverGlyphs="1"
			fadeBottom={0.2}
			boost={1}
			hover
			color={mode.current === "dark" ? "oklch(0.72 0.13 160)" : "oklch(0.45 0.08 160)"}
			hoverColor={mode.current === "dark" ? "oklch(0.86 0.13 160)" : "oklch(0.35 0.06 160)"}
		/>
	</div>
	<figcaption class="text-muted-foreground mt-3 text-xs">hover a 1</figcaption>
</figure>
