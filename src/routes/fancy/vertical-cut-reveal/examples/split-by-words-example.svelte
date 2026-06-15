<script>
	import { VerticalCutReveal } from "$lib/components/fancy/vertical-cut-reveal";
</script>

<div
	class="font-figtree flex h-80 w-full flex-col items-center justify-center bg-[#0015ff] p-10 text-lg font-bold tracking-wide text-white md:h-100 md:text-3xl"
>
	<VerticalCutReveal
		splitBy="words"
		staggerDuration={0.1}
		staggerFrom="first"
		reverse={true}
		transition={{
			type: "spring",
			stiffness: 250,
			damping: 30,
			delay: 0,
		}}
	>
		super cool & awesome example text
	</VerticalCutReveal>
</div>
