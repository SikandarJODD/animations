<script>
	import { VerticalCutReveal } from "$lib/components/fancy/vertical-cut-reveal";
</script>

<div
	class="xs:text-2xl font-overused-grotesk flex h-80 w-dvw flex-col items-start justify-center bg-white p-10 text-2xl tracking-wide text-[#0015ff] uppercase sm:text-4xl md:h-140 md:p-16 md:text-5xl lg:p-24 lg:text-5xl xl:text-5xl"
>
	<VerticalCutReveal
		splitBy="characters"
		staggerDuration={0.025}
		staggerFrom="first"
		transition={{
			type: "spring",
			stiffness: 200,
			damping: 21,
		}}
	>
		HI 👋, FRIEND!
	</VerticalCutReveal>
	<VerticalCutReveal
		splitBy="characters"
		staggerDuration={0.025}
		staggerFrom="last"
		reverse={true}
		transition={{
			type: "spring",
			stiffness: 200,
			damping: 21,
			delay: 0.5,
		}}
	>
		🌤️ IT IS NICE ⇗ TO
	</VerticalCutReveal>
	<VerticalCutReveal
		splitBy="characters"
		staggerDuration={0.025}
		staggerFrom="center"
		transition={{
			type: "spring",
			stiffness: 200,
			damping: 21,
			delay: 1.1,
		}}
	>
		MEET 😊 YOU.
	</VerticalCutReveal>
</div>
