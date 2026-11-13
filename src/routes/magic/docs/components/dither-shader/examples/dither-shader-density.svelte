<script lang="ts">
	import { DitherShader } from "#lib/components/magic/dither-shader/index.js";
</script>

<div class="grid w-full max-w-2xl grid-cols-1 gap-4 py-6 sm:grid-cols-3">
	{#each [2, 4, 8] as gridSize}
		<figure>
			<DitherShader
				src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=85"
				{gridSize}
				colorMode="duotone"
				primaryColor="#0c4a6e"
				secondaryColor="#bae6fd"
				class="h-64 overflow-hidden rounded-md sm:h-72"
			/>
			<figcaption class="text-muted-foreground mt-2 font-mono text-xs">
				gridSize = {gridSize}
			</figcaption>
		</figure>
	{/each}
</div>
