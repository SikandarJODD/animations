<script lang="ts">
	import { DitherShader } from "#lib/components/magic/dither-shader/index.js";
</script>

<figure class="w-full max-w-lg">
	<DitherShader
		src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1000&q=85"
		gridSize={2}
		ditherMode="halftone"
		colorMode="duotone"
		primaryColor="#064e3b"
		secondaryColor="#a7f3d0"
		contrast={1.2}
		class="h-64 overflow-hidden rounded-lg sm:h-80"
	/>
	<figcaption class="text-muted-foreground mt-3 text-sm">emerald halftone</figcaption>
</figure>
