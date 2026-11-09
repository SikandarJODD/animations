<script>
	import { DitherShader } from "#lib/components/magic/dither-shader/index.js";
</script>

<div class="flex flex-col items-center gap-8 p-8">
	<div
		class="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800"
	>
		<DitherShader
			src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2670&auto=format&fit=crop"
			gridSize={2}
			ditherMode="bayer"
			colorMode="grayscale"
			invert={false}
			animated={false}
			animationSpeed={0.02}
			primaryColor="#000000"
			secondaryColor="#f5f5f5"
			threshold={0.5}
			class="h-80 w-[500px] sm:h-96 sm:w-[600px]"
		/>
	</div>
</div>
