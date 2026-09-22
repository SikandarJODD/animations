<script lang="ts">
	import Image from "$lib/assets/pixel-image-demo.jpg";
	import { Floating, FloatingElement } from "$lib/components/fancy/parallax-floating";
</script>

<div class="font-figtree relative h-120 w-full overflow-hidden bg-white text-black dark:bg-black dark:text-white">
	<Floating sensitivity={0.65}>
		<FloatingElement depth={0.6} class="top-[24%] left-[8%] z-10 sm:left-[16%]">
			<figure class="w-52 border border-black/25 bg-white p-2 pb-3 sm:w-64 dark:border-white/25 dark:bg-black">
				<img
					src={Image}
					alt="Colorful houses beside a red boat in Copenhagen"
					class="h-36 w-full object-cover grayscale sm:h-44"
				/>
				<figcaption class="mt-2 text-xs opacity-60">Nyhavn, Copenhagen</figcaption>
			</figure>
		</FloatingElement>

		<FloatingElement depth={0.4} class="top-[20%] left-[72%] z-20">
			<div class="flex size-14 rotate-6 items-center justify-center rounded-full border border-black/40 bg-white sm:size-16 dark:border-white/40 dark:bg-black">
				<svg viewBox="0 0 64 64" class="size-8" role="img" aria-label="Sun icon">
					<circle cx="32" cy="32" r="10" fill="none" stroke="currentColor" stroke-width="3" />
					<path
						d="M32 7v9M32 48v9M7 32h9M48 32h9M14.3 14.3l6.4 6.4M43.3 43.3l6.4 6.4M49.7 14.3l-6.4 6.4M20.7 43.3l-6.4 6.4"
						fill="none"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
					/>
				</svg>
			</div>
		</FloatingElement>

		<FloatingElement depth={-0.8} class="top-[72%] left-[48%] z-30 sm:left-[56%]">
			<div class="-rotate-3 border border-dashed border-black/50 bg-white px-6 py-4 dark:border-white/50 dark:bg-black">
				<p class="font-cursive text-2xl leading-none">Wish you were here</p>
				<p class="mt-2 text-xs opacity-55">Copenhagen · 07:42</p>
			</div>
		</FloatingElement>
	</Floating>
</div>
