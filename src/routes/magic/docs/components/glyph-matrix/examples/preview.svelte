<script lang="ts">
	import { GlyphMatrix } from "$lib/components/magic/glyph-matrix";
	import { mode } from "mode-watcher";
</script>

<div
	class="border-border bg-background relative h-100 w-full overflow-hidden rounded-lg border"
>
	<GlyphMatrix
		glyphs="01·•+*/\<>="
		cellSize={14}
		mutationRate={0.04}
		interval={90}
		fadeBottom={0.6}
		color={mode.current === "dark" ? "#ffffff" : "#000000"}
	/>
</div>
