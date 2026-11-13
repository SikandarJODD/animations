<script lang="ts">
	import { FlickeringGrid } from "#lib/components/magic/flickering-grid/index.js";
</script>

<section class="bg-background w-full max-w-sm overflow-hidden rounded-lg border">
	<div class="relative h-32 border-b bg-amber-50 dark:bg-amber-950/20" aria-hidden="true">
		<FlickeringGrid
			class="absolute inset-0"
			color="#d97706"
			squareSize={6}
			gridGap={4}
			maxOpacity={0.3}
			flickerChance={0.15}
		/>
	</div>
	<div class="p-6">
		<h3 class="font-medium">Design resources</h3>
		<p class="text-muted-foreground mt-2 text-sm">
			Tokens, type scales, and component guidelines.
		</p>
	</div>
</section>
