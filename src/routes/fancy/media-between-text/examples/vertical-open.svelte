<script lang="ts">
	import { MediaBetweenText } from "$lib/components/fancy/media-between-text";
	import { Button } from "$lib/components/ui/button";
	import { MediaQuery } from "svelte/reactivity";

	let isAnimating = $state(false);
	let toggleAnimation = () => {
		isAnimating = !isAnimating;
	};
	let isSmallScreen = new MediaQuery("(max-width: 640px)");
</script>

<Button class="absolute top-2 left-2 rounded-full" variant="secondary" onclick={toggleAnimation}>
	{#if isAnimating}
		Close
	{:else}
		Open
	{/if}
</Button>

<!-- triggerType : ref is important -->
<MediaBetweenText
	bind:isAnimating
	firstText="Hello"
	secondText="Svelte"
	mediaUrl="https://i.pinimg.com/1200x/39/94/16/399416daafc4ee2d4fb8b78732e66ad6.jpg"
	mediaType="image"
	mediaContainerClass="w-full rounded-xl! overflow-hidden my-0.5"
	class="font-mono flex flex-col items-center text-xl sm:text-5xl font-semibold"
	triggerType="ref"
	// here we animating height from 0 to 300px for large devices and 0 to 200px for small devices
	animationVariants={{
		initial: {
			width: isSmallScreen.current ? "160px" : "120px",
			height: 0,
			transition: { duration: 0.5, ease: [0.944, 0.008, 0.147, 1.002] },
		},
		animate: {
			width: isSmallScreen.current ? "200px" : "160px",
			height: isSmallScreen.current ? "200px" : "140px",
			transition: { duration: 0.6, ease: [0.944, 0.008, 0.147, 1.002] },
		},
	}}
/>
