<script lang="ts">
	import { Floating, FloatingElement } from "$lib/components/fancy/parallax-floating";
	import { motion, useReducedMotion } from "motion-sv";

	const reducedMotion = useReducedMotion();

	const images = [
		{
			src: "https://images.unsplash.com/photo-1727341554370-80e0fe9ad082?auto=format&fit=crop&q=80&w=640",
			alt: "A sculptural interior",
			depth: 0.5,
			position: "top-[8%] left-[11%]",
			size: "h-16 w-16 md:h-24 md:w-24",
		},
		{
			src: "https://images.unsplash.com/photo-1640680608781-2e4199dd1579?auto=format&fit=crop&q=80&w=640",
			alt: "An abstract architectural detail",
			depth: 1,
			position: "top-[10%] left-[32%]",
			size: "h-20 w-20 md:h-28 md:w-28",
		},
		{
			src: "https://images.unsplash.com/photo-1726083085160-feeb4e1e5b00?auto=format&fit=crop&q=80&w=640",
			alt: "A modern design detail",
			depth: 2,
			position: "top-[2%] left-[53%]",
			size: "h-40 w-28 md:h-52 md:w-40",
		},
		{
			src: "https://images.unsplash.com/photo-1562016600-ece13e8ba570?auto=format&fit=crop&q=80&w=640",
			alt: "A minimal still life",
			depth: 1,
			position: "top-[0%] left-[83%]",
			size: "h-24 w-24 md:h-32 md:w-32",
		},
		{
			src: "https://images.unsplash.com/photo-1624344965199-ed40391d20f2?auto=format&fit=crop&q=80&w=640",
			alt: "An artistic composition",
			depth: 1,
			position: "top-[40%] left-[2%]",
			size: "h-28 w-28 md:h-36 md:w-36",
		},
		{
			src: "https://images.unsplash.com/photo-1677338354108-223e807fb1bd?auto=format&fit=crop&q=80&w=640",
			alt: "A contemporary interior",
			depth: 2,
			position: "top-[70%] left-[77%]",
			size: "h-28 w-28 md:h-48 md:w-36",
		},
		{
			src: "https://images.unsplash.com/photo-1689553079282-45df1b35741b?auto=format&fit=crop&q=80&w=640",
			alt: "A vivid design scene",
			depth: 4,
			position: "top-[73%] left-[15%]",
			size: "h-full w-40 md:w-52",
		},
		{
			src: "https://images.unsplash.com/photo-1721968317938-cf8c60fccd1a?auto=format&fit=crop&q=80&w=640",
			alt: "A colorful abstract detail",
			depth: 1,
			position: "top-[80%] left-[50%]",
			size: "h-24 w-24 md:h-32 md:w-32",
		},
	] as const;
</script>

<div class="relative flex h-150 w-full items-center justify-center overflow-hidden bg-black">
	<motion.div
		class="z-50 flex flex-col items-center space-y-4 text-center"
		initial={reducedMotion.current ? false : { opacity: 0, y: 10 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{
			duration: reducedMotion.current ? 0 : 0.88,
			delay: reducedMotion.current ? 0 : 1.5,
		}}
	>
		<p class="font-calendas font-cursive z-50 text-5xl text-white italic md:text-7xl">
			Svelte Fancy.
		</p>
		<button
			type="button"
			class="z-50 w-20 cursor-pointer rounded-full bg-white py-2 text-xs text-black motion-safe:transition-transform motion-safe:hover:scale-110"
		>
			Download
		</button>
	</motion.div>

	<Floating sensitivity={-1} class="overflow-hidden">
		{#each images as image, index (image.src)}
			<FloatingElement depth={image.depth} class={image.position}>
				<motion.img
					initial={reducedMotion.current ? false : { opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						duration: reducedMotion.current ? 0 : 0.5,
						delay: reducedMotion.current ? 0 : index * 0.15,
					}}
					src={image.src}
					alt={image.alt}
					class={`${image.size} cursor-pointer object-cover motion-safe:transition-transform motion-safe:duration-200 motion-safe:hover:scale-105`}
				/>
			</FloatingElement>
		{/each}
	</Floating>
</div>
