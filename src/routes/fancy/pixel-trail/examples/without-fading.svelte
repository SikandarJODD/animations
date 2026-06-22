<script>
	import { PixelTrail } from "$lib/components/fancy/pixel-trail";
</script>

<div class="flex h-dvh w-dvw flex-col overflow-hidden">
	<img
		src="https://images.unsplash.com/photo-1562016600-ece13e8ba570?q=80&w=2838&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		alt="water surface"
		class="absolute inset-0 z-0 contrast-70"
	/>
	<div class="absolute inset-0 z-1">
		<PixelTrail pixelSize={20} delay={130} fadeDuration={0} pixelClass="bg-[#f1ff76]" />
	</div>

	<ul
		class="z-10 flex w-full items-center justify-between space-x-6 px-6 py-4 text-2xl font-bold text-[#f1ff76] md:text-4xl"
	>
		<a href="/">WATER SUPPLY CO.</a>
		<a href="/" class="cursor-pointer font-bold text-[#f1ff76] uppercase hover:underline">
			Menu
		</a>
	</ul>
	<div class="z-0 mx-6 mt-12 text-6xl text-[#f1ff76]">
		<div class="flex flex-row items-center">
			<h2 class="font-tiny5 text-6xl uppercase md:text-9xl">100%</h2>
			<h2 class="ml-4 text-5xl md:ml-8 md:text-8xl">purity</h2>
		</div>
		<p class="mt-3 text-base md:text-3xl">
			{"we deliver more than just hydration — we offer nature's purest refreshment, untouched by modern contaminants. Our water is sourced from deep, protected aquifers and naturally filtered through ancient rock layers, with unmatched clarity and taste."}
		</p>
	</div>
</div>
