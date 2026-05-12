<script>
	import { VerticalCutReveal } from "$lib/components/fancy/vertical-cut-reveal";
</script>

<div
	class="text font-azeret-mono flex h-80 w-dvw flex-col items-center justify-center bg-white p-6 tracking-wide text-[#0015ff] md:h-100 md:p-16 md:text-2xl lg:p-20 lg:text-4xl xl:p-24"
>
	<VerticalCutReveal
		splitBy="lines"
		staggerDuration={0.2}
		staggerFrom="first"
		transition={{
			type: "spring",
			stiffness: 250,
			damping: 30,
			delay: 0.2,
		}}
		containerClass="text-[#00000] leading-relaxed"
	>
		{"→ We're on a mission\nto make the 🌐 web \nsuper fun again! ☺"}
	</VerticalCutReveal>
</div>
