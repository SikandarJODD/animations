<script lang="ts">
	import { BlurFade } from "#lib/components/magic/blur-fade/index.js";

	const images = Array.from({ length: 9 }, (_, i) => {
		const isLandscape = i % 2 === 0;
		const width = isLandscape ? 800 : 600;
		const height = isLandscape ? 600 : 800;
		return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
	});
</script>

<div class="columns-2 gap-4 sm:columns-3">
	{#each images as imageUrl, idx (imageUrl)}
		<BlurFade delay={0.25 + idx * 0.05} triggerOnView>
			<img
				class="mb-4 size-full rounded-lg object-contain"
				src={imageUrl}
				alt="Random stock image {idx + 1}"
			/>
		</BlurFade>
	{/each}
</div>
