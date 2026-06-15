<script lang="ts">
	import { Letter3DSwap } from "$lib/components/fancy/letter-3d-swap";
</script>

<div class="flex h-120 max-w-2xl flex-col items-center justify-center gap-10 font-serif">
	<Letter3DSwap
		mainClass="text-2xl sm:text-5xl bg-background lowercase"
		frontFaceClass="bg-background text-foreground"
		secondFaceClass="bg-background text-foreground"
		rotateDirection="top"
		staggerDuration={0.03}
		staggerFrom="first"
		transition={{ type: "spring", damping: 25, stiffness: 160 }}
	>
		Let's fo from start
	</Letter3DSwap>
	<Letter3DSwap
		mainClass="text-2xl sm:text-5xl bg-background lowercase"
		frontFaceClass="bg-background text-foreground"
		secondFaceClass="bg-background text-foreground"
		rotateDirection="top"
		staggerDuration={0.03}
		staggerFrom="center"
		transition={{ type: "spring", damping: 25, stiffness: 160 }}
	>
		Start from Center
	</Letter3DSwap>
	<Letter3DSwap
		mainClass="text-2xl sm:text-5xl bg-background lowercase"
		frontFaceClass="bg-background text-foreground"
		secondFaceClass="bg-background text-foreground"
		rotateDirection="top"
		staggerDuration={0.03}
		staggerFrom="last"
		transition={{ type: "spring", damping: 25, stiffness: 160 }}
	>
		Start from End
	</Letter3DSwap>
	<Letter3DSwap
		mainClass="text-2xl sm:text-5xl bg-background lowercase"
		frontFaceClass="bg-background text-foreground"
		secondFaceClass="bg-background text-foreground"
		rotateDirection="top"
		staggerDuration={0.03}
		staggerFrom="random"
		transition={{ type: "spring", damping: 25, stiffness: 160 }}
	>
		Random Stagger
	</Letter3DSwap>
</div>
