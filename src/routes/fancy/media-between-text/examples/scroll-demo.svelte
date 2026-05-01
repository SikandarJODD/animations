<script lang="ts">
	import { MediaBetweenText } from "$lib/components/fancy/media-between-text";
	import { MediaQuery } from "svelte/reactivity";
	const elements = [
		{
			src: "https://github.com/rich-harris.png",
			left: "Rich",
			right: "Harris",
			url: "https://github.com/rich-harris",
		},
		{
			src: "https://github.com/dummdidumm.png",
			left: "Simon ",
			right: "Holthausen",
			url: "https://github.com/dummdidumm",
		},
		{
			src: "https://github.com/trueadm.png",
			left: "Dominic",
			right: "Gannaway",
			url: "https://github.com/trueadm",
		},
		{
			src: "https://github.com/PuruVJ.png",
			left: "Puru",
			right: "Vijay",
			url: "https://github.com/PuruVJ",
		},
	];

	let ref: HTMLDivElement | null = $state(null);
	let isLarge = new MediaQuery("(min-width: 1024px)");
</script>

<div
	class="bg-background thin-scrollbar h-[80vh] w-dvw items-center justify-center overflow-auto"
	bind:this={ref}
>
	<div class="relative flex h-full w-full">
		<h3
			class="absolute bottom-10 left-4 w-full text-3xl tracking-wide sm:bottom-12 sm:left-12 sm:text-7xl md:w-64"
		>
			Svelte Creators
		</h3>
		<p class="absolute right-0 bottom-4 sm:right-12 sm:bottom-12">Scroll down ↓</p>
	</div>

	<div
		class="mt-0 mb-0 flex h-full w-full flex-col items-center justify-center space-y-12 text-6xl sm:mt-10 sm:mb-64 md:px-6"
	>
		{#each elements as element}
			<a href={element.url} target="_blank" rel="noreferrer">
				<MediaBetweenText
					firstText={element.left}
					secondText={element.right}
					mediaUrl={element.src}
					mediaType="image"
					triggerType="inView"
					useInViewOptionsProp={{
						once: false,
						amount: 1,
						margin: "-5% 0px -0% 0px",
						root: ref,
					}}
					containerRef={ref}
					mediaContainerClass="w-full h-[40px] sm:h-[100px] rounded-xl overflow-hidden mx-1 sm:mx-2 mt-1 sm:mt-4"
					class="flex cursor-pointer flex-row items-center justify-center text-lg font-light sm:text-4xl"
					animationVariants={{
						initial: { width: 0 },
						animate: {
							width: isLarge.current ? "100px" : "40px",
							transition: {
								duration: 1,
								type: "spring",
								bounce: 0,
								delay: 0.1,
							},
						},
					}}
				/>
			</a>
		{/each}
	</div>
</div>
