<script lang="ts">
	import { MotionGrid, MotionGridCells } from "#lib/components/magic/motion-grid/index.js";
	import {
		motionGridStateOrder,
		motionGridStates,
		type MotionGridStateKey,
	} from "./state-frames";

	let selected: MotionGridStateKey = "importing";
</script>

<div class="space-y-4">
	<div class="flex flex-wrap gap-2">
		{#each motionGridStateOrder as key}
			<button
				type="button"
				class="cursor-pointer rounded-md border px-2.5 py-1 text-xs transition-colors"
				class:bg-primary={selected === key}
				class:text-primary-foreground={selected === key}
				class:bg-background={selected !== key}
				onclick={() => (selected = key)}
			>
				{motionGridStates[key].label}
			</button>
		{/each}
	</div>

	<div class="flex items-center gap-3">
		<MotionGrid gridSize={[5, 5]} frames={motionGridStates[selected].frames} class="gap-1">
			<MotionGridCells
				class="bg-muted data-[active=true]:bg-foreground size-2.5 rounded-full"
				activeProps={{ animate: { scale: 1.1 } }}
			/>
		</MotionGrid>

		<span class="text-sm font-medium">{motionGridStates[selected].label}</span>
	</div>
</div>
