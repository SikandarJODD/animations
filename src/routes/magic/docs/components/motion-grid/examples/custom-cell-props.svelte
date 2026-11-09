<script lang="ts">
	import { MotionGrid, MotionGridCells } from "#lib/components/magic/motion-grid/index.js";
	import { motionGridStates } from "./state-frames";
</script>

<div class="flex items-center gap-4">
	<MotionGrid
		gridSize={[5, 5]}
		frames={motionGridStates.searching.frames}
		duration={220}
		class="gap-1"
	>
		<MotionGridCells
			class="size-2.5 rounded-sm border"
			activeProps={{
				class: "border-emerald-300/70 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.65)]",
				animate: { scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] },
			}}
			inactiveProps={{
				class: "border-muted-foreground/30 bg-muted/40",
				animate: { opacity: 0.4, scale: 0.9 },
			}}
		/>
	</MotionGrid>

	<p class="text-muted-foreground max-w-sm text-sm">
		Use <code>activeProps</code> and <code>inactiveProps</code> to style and animate cell states without
		changing frame data.
	</p>
</div>
