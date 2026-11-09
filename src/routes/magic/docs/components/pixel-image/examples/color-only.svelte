<script lang="ts">
	import PixelImage from "#lib/components/magic/pixel-image/pixel-image.svelte";
	import Image from "#lib/assets/pixel-image-demo.jpg";
</script>

<PixelImage
	src={Image}
	customGrid={{ rows: 5, cols: 7 }}
	grayscaleAnimation={false}
	pixelFadeInDuration={800}
	maxAnimationDelay={1000}
	once
/>
