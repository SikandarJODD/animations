<script lang="ts">
	import { FlickeringGrid } from "#lib/components/magic/flickering-grid/index.js";
</script>

<header
	class="bg-background relative isolate w-full max-w-xl overflow-hidden rounded-lg border px-6 py-16 sm:px-10"
>
	<div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
		<FlickeringGrid
			class="mask-[linear-gradient(to_left,black,transparent)]"
			color="#10b981"
			squareSize={3}
			gridGap={8}
			maxOpacity={0.35}
			flickerChance={0.08}
		/>
	</div>
	<p class="text-muted-foreground mb-3 text-sm">Developer reference</p>
	<h2 class="text-3xl font-semibold">API documentation</h2>
</header>
