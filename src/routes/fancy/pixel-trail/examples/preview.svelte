<script lang="ts">
	import { PixelTrail } from "$lib/components/fancy/pixel-trail";

</script>

<div>
	<div class="flex h-80 md:h-120 w-dvw flex-col bg-black text-white">
		<div class="absolute z-0 inset-0">
			<PixelTrail fadeDuration={700} class='cursor-none' pixelClass="bg-white" />
		</div>

		<div class="flex h-full w-full flex-col items-center justify-center">
			<h2 class="font-figtree text-3xl uppercase sm:text-5xl">
				Svelte Fancy Components
			</h2>
			<p class="pt-0.5 mt-4 text-xs sm:pt-2 sm:text-base md:text-xl">Make the web fun again.</p>
		</div>
	</div>
</div>
