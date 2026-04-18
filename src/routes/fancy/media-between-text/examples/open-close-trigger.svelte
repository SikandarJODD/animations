<script lang="ts">
	import { MediaBetweenText } from "$lib/components/fancy/media-between-text";
	import { Button } from "$lib/components/ui/button";

	let isAnimating = $state(false);
	let toggleAnimation = () => {
		isAnimating = !isAnimating;
	};
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
	firstText="Happy"
	secondText="Birthday"
	mediaUrl="https://i.pinimg.com/1200x/4e/a2/29/4ea229649e46e744b89fcb625723fc73.jpg"
	mediaType="image"
	mediaContainerClass="w-full h-20 rounded-xl! overflow-hidden sm:mx-1 my-4"
	class="items-center text-2xl sm:text-4xl font-semibold font-figtree"
	triggerType="ref"
/>
