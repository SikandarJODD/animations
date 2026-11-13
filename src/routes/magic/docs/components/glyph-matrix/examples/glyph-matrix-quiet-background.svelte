<script lang="ts">
	import { GlyphMatrix } from "#lib/components/magic/glyph-matrix/index.js";
	import { mode } from "mode-watcher";
</script>

<figure class="w-full max-w-lg">
	<div class="bg-background h-64 overflow-hidden rounded-lg border">
		<GlyphMatrix
			glyphs="·:+"
			cellSize={28}
			mutationRate={0.01}
			interval={300}
			fadeBottom={0.5}
			boost={1}
			hover
			color={mode.current === "dark" ? "oklch(0.72 0.12 10)" : "oklch(0.48 0.1 10)"}
			hoverColor={mode.current === "dark" ? "oklch(0.85 0.08 10)" : "oklch(0.4 0.09 10)"}
		/>
	</div>
	<figcaption class="text-muted-foreground mt-3 text-xs">hover to inspect a cell</figcaption>
</figure>
