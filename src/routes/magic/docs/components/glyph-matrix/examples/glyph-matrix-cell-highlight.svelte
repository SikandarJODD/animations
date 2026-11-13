<script lang="ts">
	import { GlyphMatrix } from "#lib/components/magic/glyph-matrix/index.js";
	import { mode } from "mode-watcher";
</script>

<figure class="w-full max-w-lg">
	<div class="bg-background h-64 overflow-hidden rounded-lg border">
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
	<figcaption class="text-muted-foreground mt-3 text-xs">hover any glyph</figcaption>
</figure>
