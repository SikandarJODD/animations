<script lang="ts">
	import BentoCard from "./bento-card.svelte";
</script>

<div class="bg-background flex h-80 w-full items-center justify-center">
	<div class="grid w-full max-w-lg grid-cols-1 gap-2 sm:grid-cols-6">
		<!-- Top left card -->
		<div class="h-32 sm:col-span-4 sm:h-48">
			<BentoCard
				title="Animated Bento"
				subtitle="#001"
				description="Using only SVG circles and blur"
			/>
		</div>
		<!-- Top right card -->
		<div class="h-32 sm:col-span-2 sm:h-48">
			<BentoCard title="Gradients" buttonText="Explore More" />
		</div>
	</div>
</div>
