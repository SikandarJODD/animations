<script lang="ts">
	import { PixelTrail } from "#lib/components/fancy/pixel-trail/index.js";
</script>

<div class="relative flex h-80 w-dvw flex-col bg-white text-white md:h-120 dark:bg-black">
	<div class="absolute inset-0 z-0">
		<!-- mask triangle using polygon -->
		<PixelTrail fadeDuration={700} class="cursor-none" pixelClass="bg-primary pixel-triangle" />
	</div>

	<div class="flex h-full w-full flex-col items-center justify-center">
		<h2 class="font-figtree text-primary text-3xl font-semibold capitalize sm:text-5xl">
			Deploy on Vercel
		</h2>
		<p class="text-primary mt-4 pt-0.5 text-xs sm:pt-2 sm:text-base md:text-xl">
			Make the web fun again.
		</p>
	</div>
</div>

<style>
	:global(.pixel-triangle) {
		clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
	}
</style>
