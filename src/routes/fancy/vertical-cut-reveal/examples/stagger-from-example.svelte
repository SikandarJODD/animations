<script>
	import { VerticalCutReveal } from "$lib/components/fancy/vertical-cut-reveal";
</script>

<div
	class="font-figtree flex h-80 w-full flex-col items-center justify-center space-y-4 bg-white text-sm font-bold tracking-wide text-[#0015ff] uppercase sm:text-base md:h-140 md:text-lg lg:text-xl xl:text-2xl"
>
	<VerticalCutReveal
		splitBy="characters"
		staggerDuration={0.05}
		staggerFrom="first"
		transition={{
			type: "spring",
			stiffness: 200,
			damping: 21,
			delay: 0,
		}}
	>
		THIS STAGGERS FROM FIRST
	</VerticalCutReveal>
	<VerticalCutReveal
		splitBy="characters"
		staggerDuration={0.05}
		staggerFrom="last"
		reverse={true}
		transition={{
			type: "spring",
			stiffness: 200,
			damping: 21,
			delay: 1,
		}}
	>
		THIS STAGGERS FROM LAST
	</VerticalCutReveal>
	<VerticalCutReveal
		splitBy="characters"
		staggerDuration={0.05}
		staggerFrom="center"
		transition={{
			type: "spring",
			stiffness: 200,
			damping: 21,
			delay: 2.3,
		}}
	>
		THIS STAGGERS FROM CENTER
	</VerticalCutReveal>
	<VerticalCutReveal
		splitBy="characters"
		staggerDuration={0.05}
		staggerFrom={5}
		transition={{
			type: "spring",
			stiffness: 200,
			damping: 21,
			delay: 3.2,
		}}
	>
		THIS ONE FROM THE 5TH CHARACTER
	</VerticalCutReveal>
</div>
