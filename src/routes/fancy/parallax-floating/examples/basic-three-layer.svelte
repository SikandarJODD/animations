<script lang="ts">
	import { Floating, FloatingElement } from "$lib/components/fancy/parallax-floating";
</script>

<div class="font-figtree relative h-96 w-full overflow-hidden bg-white text-black dark:bg-black dark:text-white">
	<p class="pointer-events-none absolute inset-x-0 bottom-8 text-center text-sm opacity-60">
		Higher depth travels farther
	</p>

	<Floating sensitivity={0.7}>
		<FloatingElement depth={0.5} class="top-[18%] left-[8%] z-10">
			<div class="w-28 border border-black/25 bg-white p-4 sm:w-36 dark:border-white/25 dark:bg-black">
				<span class="text-xs opacity-60">Far layer</span>
				<p class="mt-8 font-mono text-lg">0.5</p>
			</div>
		</FloatingElement>

		<FloatingElement depth={1} class="top-[42%] left-[36%] z-20">
			<div class="w-28 border border-black/40 bg-white p-4 sm:w-36 dark:border-white/40 dark:bg-black">
				<span class="text-xs opacity-60">Middle layer</span>
				<p class="mt-8 font-mono text-lg">1.0</p>
			</div>
		</FloatingElement>

		<FloatingElement depth={2} class="top-[14%] left-[68%] z-30">
			<div class="w-32 border border-dashed border-black/60 bg-white p-5 sm:w-44 dark:border-white/60 dark:bg-black">
				<span class="text-xs opacity-70">Near layer</span>
				<p class="mt-14 font-mono text-xl">2.0</p>
			</div>
		</FloatingElement>
	</Floating>
</div>
