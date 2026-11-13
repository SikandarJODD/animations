<script>
	import { DitherShader } from "#lib/components/magic/dither-shader/index.js";
</script>

<div class="flex items-center justify-center p-8">
	<div class="relative overflow-hidden rounded-2xl">
		<DitherShader
			src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
			gridSize={4}
			ditherMode="bayer"
			colorMode="grayscale"
			class="h-64 w-80 sm:h-72 sm:w-96"
		/>
	</div>
</div>
