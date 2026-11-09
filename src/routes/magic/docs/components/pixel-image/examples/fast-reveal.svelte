<script lang="ts">
	import PixelImage from "#lib/components/magic/pixel-image/pixel-image.svelte";
	import Image from "#lib/assets/pixel-image-demo.jpg";
</script>

<PixelImage
	src={Image}
	grid="6x4"
	pixelFadeInDuration={500}
	maxAnimationDelay={600}
	colorRevealDelay={700}
	grayscaleAnimation
/>
