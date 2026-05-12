<script>
	import { VerticalCutReveal } from "$lib/components/fancy/vertical-cut-reveal";
</script>

<div
	class="text font-overused-grotesk flex h-80 md:h-120 w-dvw items-center justify-center bg-white p-10 text-[#0015ff] md:p-16 md:text-xl lg:p-24"
>
	<VerticalCutReveal
		splitBy="characters"
		staggerDuration={0.002}
		staggerFrom="random"
		transition={{
			type: "spring",
			stiffness: 200,
			damping: 35,
			delay: 0.1,
		}}
		containerClass="text-[#00000] leading-snug"
	>
		“When a small, unassuming object exceeds our expectations, we are not only surprised but
		pleased. Our usual reaction is something like, "That little thing did all that?" Simplicity
		is about the unexpected pleasure derived from what is likely to be insignificant and would
		otherwise go unnoticed. The smaller the object, the more forgiving we can be when it
		misbehaves.” ― John Maeda,
	</VerticalCutReveal>
</div>
