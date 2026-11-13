<script lang="ts">
	import { GlyphMatrix } from "#lib/components/magic/glyph-matrix/index.js";
	import { mode } from "mode-watcher";
</script>

<figure class="w-full max-w-lg">
	<div class="bg-background h-72 overflow-hidden rounded-lg border">
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
			color={mode.current === "dark" ? "oklch(0.7 0.19 35)" : "oklch(0.6 0.19 35)"}
			hoverColor={mode.current === "dark" ? "oklch(0.76 0.13 35)" : "oklch(0.5 0.16 35)"}
		/>
	</div>
	<figcaption class="text-muted-foreground mt-3 text-xs">
		move across the matrix to reveal a soft trail
	</figcaption>
</figure>
