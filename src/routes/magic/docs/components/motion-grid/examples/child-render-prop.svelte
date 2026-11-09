<script lang="ts">
	import { motion } from "motion-sv";
	import { cn } from "#lib/utils.ts";
	import {
		MotionGrid,
		MotionGridCells,
		type MotionGridCellMotionProps,
	} from "#lib/components/magic/motion-grid/index.js";
	import { motionGridStates } from "./state-frames";
</script>

{#snippet gridChild({ props }: { props: MotionGridCellMotionProps })}
	<motion.div
		{...props}
		class={cn(
			"from-background to-muted/30 rounded-lg border bg-gradient-to-br p-2 shadow-sm",
			props.class
		)}
	>
		<MotionGridCells
			class="bg-foreground/15 data-[active=true]:bg-foreground/90 size-2 rounded-full"
		/>
	</motion.div>
{/snippet}

<div class="flex items-center gap-4">
	<MotionGrid
		gridSize={[5, 5]}
		frames={motionGridStates.syncing.frames}
		duration={180}
		class="gap-1"
		child={gridChild}
	/>
	<p class="text-muted-foreground text-sm">
		This uses the <code>child</code> render-prop to customize the outer wrapper.
	</p>
</div>
