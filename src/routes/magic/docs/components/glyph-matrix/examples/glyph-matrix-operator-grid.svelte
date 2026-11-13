<script lang="ts">
	import { GlyphMatrix } from "#lib/components/magic/glyph-matrix/index.js";
	import { mode } from "mode-watcher";
</script>

<figure class="w-full max-w-lg">
	<div class="bg-background h-64 overflow-hidden rounded-lg border">
		<GlyphMatrix
			glyphs="+−×÷="
			cellSize={26}
			hoverGlyphs="+="
			fadeBottom={0.2}
			boost={1}
			hover
			color={mode.current === "dark" ? "oklch(0.74 0.15 55)" : "oklch(0.48 0.1 55)"}
			hoverColor={mode.current === "dark" ? "oklch(0.85 0.09 55)" : "oklch(0.4 0.09 55)"}
		/>
	</div>
	<figcaption class="text-muted-foreground mt-3 text-xs">hover + or =</figcaption>
</figure>
