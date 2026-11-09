<script lang="ts">
	import { FlickeringGrid } from "#lib/components/magic/flickering-grid/index.js";
</script>

<div class="bg-background relative size-150 w-full overflow-hidden rounded-lg border">
	<FlickeringGrid
		class="relative inset-0 z-0 mask-[radial-gradient(450px_circle_at_center,white,transparent)]"
		squareSize={4}
		gridGap={6}
		color="#60A5FA"
		maxOpacity={0.5}
		flickerChance={0.1}
		height={800}
		width={800}
	/>
</div>
