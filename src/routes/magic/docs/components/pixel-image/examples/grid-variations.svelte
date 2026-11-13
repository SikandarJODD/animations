<script lang="ts">
	import PixelImage from "#lib/components/magic/pixel-image/pixel-image.svelte";
	import Image from "#lib/assets/pixel-image-demo.jpg";
</script>

<div class="flex flex-wrap items-center justify-center gap-12">
	<div class="flex flex-col items-center gap-4">
		<PixelImage src={Image} grid="8x8" />
		<p class="text-muted-foreground text-sm">8x8 Grid</p>
	</div>

	<div class="flex flex-col items-center gap-4">
		<PixelImage src={Image} grid="8x3" />
		<p class="text-muted-foreground text-sm">8x3 Grid</p>
	</div>
</div>
