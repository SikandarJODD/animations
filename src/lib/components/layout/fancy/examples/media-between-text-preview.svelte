<script lang="ts">
	import { MediaBetweenText } from "$lib/components/fancy/media-between-text";
	import pixelImageDemo from "$lib/assets/pixel-image-demo.jpg";
</script>

<div class="flex min-h-80 items-center justify-center rounded-xl bg-fuchsia-200/70 dark:bg-fuchsia-500 px-4 py-8">
	<MediaBetweenText
		firstText="Between"
		secondText="Frames"
		mediaUrl={pixelImageDemo}
		mediaType="image"
		alt="Colorful pixelated demo preview"
		class="font-figtree flex w-full max-w-xl cursor-pointer items-center justify-center text-3xl font-semibold text-fuchsia-500 dark:text-white sm:text-4xl"
		mediaContainerClass="mx-2 h-12 w-full overflow-hidden rounded-2xl sm:mx-2 sm:h-16"
	/>
</div>
