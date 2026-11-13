<script lang="ts">
	import { DitherShader } from "#lib/components/magic/dither-shader/index.js";
</script>

<figure class="w-full max-w-lg">
	<DitherShader
		src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=85"
		gridSize={3}
		ditherMode="bayer"
		colorMode="custom"
		customPalette={["#431407", "#c2410c", "#fb923c", "#ffedd5"]}
		contrast={1.15}
		class="h-64 overflow-hidden rounded-lg sm:h-80"
	/>
	<figcaption class="text-muted-foreground mt-3 text-sm">four-color palette</figcaption>
</figure>
