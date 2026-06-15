<script lang="ts">
	import { Letter3DSwap } from "$lib/components/fancy/letter-3d-swap";
	let debug = $state(false);
</script>

<div class="flex max-w-2xl flex-col items-center font-serif">
	<button
		class="bg-background text-foreground hover:bg-muted absolute top-4 left-4 cursor-pointer rounded-md border px-2 py-1 text-[8px]"
		onclick={() => (debug = !debug)}
	>
		Debug: {debug ? "On" : "Off"}
	</button>

	<Letter3DSwap
		mainClass="text-2xl sm:text-5xl md:text-7xl bg-background lowercase"
		frontFaceClass={`bg-background ${debug ? "border" : ""} text-foreground`}
		secondFaceClass={`bg-background ${debug ? "border" : ""} text-foreground`}
		rotateDirection="top"
		staggerDuration={0.03}
		staggerFrom="first"
		transition={{ type: "spring", damping: 25, stiffness: debug ? 50 : 160 }}
	>
		SET YOUR MIND TO IT
	</Letter3DSwap>
</div>
