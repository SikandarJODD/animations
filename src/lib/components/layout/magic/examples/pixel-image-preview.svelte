<script lang="ts">
	import Image from "$lib/assets/pixel-image-demo.jpg";
	import PixelImage from "$lib/components/magic/pixel-image/pixel-image.svelte";
</script>

<div class="bg-muted/20 dark:bg-muted/10 flex min-h-80 items-center justify-center p-6">
	<div class="overflow-hidden rounded-xl">
		<PixelImage src={Image} customGrid={{ rows: 8, cols: 8 }} grayscaleAnimation />
	</div>
</div>
