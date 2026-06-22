<script lang="ts">
	import { PixelTrail } from "$lib/components/fancy/pixel-trail";
</script>

<div class="flex h-80 w-dvw flex-col bg-white dark:bg-black relative text-white md:h-120">
	<div class="absolute inset-0 z-0">
		<!-- mask triangle using polygon -->
		<PixelTrail fadeDuration={700} class='cursor-none' pixelClass="bg-primary pixel-triangle" />
	</div>

	<div class="flex h-full w-full flex-col items-center justify-center">
		<h2 class="font-figtree font-semibold text-primary text-3xl capitalize sm:text-5xl">Deploy on Vercel</h2>
		<p class="mt-4 pt-0.5 text-primary text-xs sm:pt-2 sm:text-base md:text-xl">Make the web fun again.</p>
	</div>
</div>

<style>
	:global(.pixel-triangle){
		clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
	}
</style>
