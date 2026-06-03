<script lang="ts">
	import { Letter3DSwap } from "$lib/components/fancy/letter-3d-swap";
</script>

<div class="flex min-h-80 items-center justify-center rounded-xl bg-sky-100 px-5 py-8">
	<Letter3DSwap
		mainClass="font-serif text-center text-3xl sm:text-5xl"
		frontFaceClass="bg-sky-100 text-blue-500"
		secondFaceClass="bg-sky-100 text-blue-500"
		rotateDirection="top"
		staggerDuration={0.03}
		staggerFrom="first"
		transition={{ type: "spring", damping: 25, stiffness: 170 }}
	>
		Hover me
	</Letter3DSwap>
</div>
