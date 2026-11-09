<script lang="ts">
	import PixelImage from "#lib/components/magic/pixel-image/pixel-image.svelte";
	import Image from "#lib/assets/pixel-image-demo.jpg";
</script>

<PixelImage src={Image} customGrid={{ rows: 4, cols: 6 }} grayscaleAnimation />
