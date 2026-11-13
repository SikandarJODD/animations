<script lang="ts">
	import { onMount } from "svelte";
	import { motion, AnimatePresence } from "motion-sv";
	import { MotionGrid, MotionGridCells } from "#lib/components/magic/motion-grid/index.js";
	import {
		motionGridStateOrder,
		motionGridStates,
		type MotionGridStateKey,
	} from "./state-frames";

	let stateIndex = $state(0);

	let currentStateKey = $derived.by(() => {
		return motionGridStateOrder[stateIndex] ?? ("importing" as MotionGridStateKey);
	});

	let currentState = $derived(motionGridStates[currentStateKey]);

	onMount(() => {
		const interval = setInterval(() => {
			stateIndex = (stateIndex + 1) % motionGridStateOrder.length;
		}, 3000);

		return () => clearInterval(interval);
	});
</script>

<motion.button
	layout
	whileHover={{ scale: 1.05 }}
	whilePress={{ scale: 0.95 }}
	class="bg-primary relative inline-flex h-11 items-center justify-center gap-x-3 px-3"
>
	<motion.div layout="preserve-aspect">
		<MotionGrid gridSize={[5, 5]} frames={currentState.frames} class="w-fit gap-0.5">
			<MotionGridCells
				class="aspect-square size-[3px] rounded-full bg-white/20 data-[active=true]:bg-white/70 dark:bg-black/20 dark:data-[active=true]:bg-black/70"
			/>
		</MotionGrid>
	</motion.div>

	<div class="absolute top-1/2 left-[46px] -translate-y-1/2">
		<AnimatePresence mode="wait">
			{#key currentState.label}
				<motion.span
					layout="preserve-aspect"
					class="text-primary-foreground inline-block text-sm font-medium"
					initial={{ opacity: 0, y: -12 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 12 }}
					transition={{ duration: 0.25, ease: "easeOut" }}
				>
					{currentState.label}
				</motion.span>
			{/key}
		</AnimatePresence>
	</div>

	<span class="invisible opacity-0" aria-hidden={true}>{currentState.label}</span>
</motion.button>
