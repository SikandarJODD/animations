<script lang="ts">
	import { GlyphMatrix } from "#lib/components/magic/glyph-matrix/index.js";
	import { mode } from "mode-watcher";
</script>

<figure class="w-full max-w-lg">
	<div class="bg-background h-72 overflow-hidden rounded-lg border">
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
			color={mode.current === "dark" ? "oklch(0.8 0.12 215)" : "oklch(0.57 0.1 215)"}
			hoverColor={mode.current === "dark" ? "oklch(0.88 0.08 215)" : "oklch(0.47 0.08 215)"}
		/>
	</div>
	<figcaption class="text-muted-foreground mt-3 text-xs">
		move across the matrix to reveal a soft trail
	</figcaption>
</figure>
