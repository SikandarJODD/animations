<script lang="ts">
	import { Letter3DSwap } from "$lib/components/fancy/letter-3d-swap";
</script>

<div class="flex h-120 max-w-2xl flex-col items-center justify-center gap-10 font-serif">
	<Letter3DSwap
		mainClass="text-2xl sm:text-5xl bg-background lowercase"
		frontFaceClass="bg-background text-foreground"
		secondFaceClass="bg-background text-foreground"
		rotateDirection="left"
		staggerDuration={0.03}
		staggerFrom="first"
		transition={{ type: "spring", damping: 25, stiffness: 160 }}
	>
		Left
	</Letter3DSwap>
	<Letter3DSwap
		mainClass="text-2xl sm:text-5xl bg-background lowercase"
		frontFaceClass="bg-background text-foreground"
		secondFaceClass="bg-background text-foreground"
		rotateDirection="right"
		staggerDuration={0.03}
		staggerFrom="first"
		transition={{ type: "spring", damping: 25, stiffness: 160 }}
	>
		Right
	</Letter3DSwap>
	<Letter3DSwap
		mainClass="text-2xl sm:text-5xl bg-background lowercase"
		frontFaceClass="bg-background text-foreground"
		secondFaceClass="bg-background text-foreground"
		rotateDirection="top"
		staggerDuration={0.03}
		staggerFrom="first"
		transition={{ type: "spring", damping: 25, stiffness: 160 }}
	>
		Top is cool
	</Letter3DSwap>
	<Letter3DSwap
		mainClass="text-2xl sm:text-5xl bg-background lowercase"
		frontFaceClass="bg-background text-foreground"
		secondFaceClass="bg-background text-foreground"
		rotateDirection="bottom"
		staggerDuration={0.03}
		staggerFrom="first"
		transition={{ type: "spring", damping: 25, stiffness: 160 }}
	>
		Goes to Bottom
	</Letter3DSwap>
</div>
