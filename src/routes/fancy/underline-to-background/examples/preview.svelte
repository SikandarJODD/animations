<script lang="ts">
	import { UnderlineToBackground } from "$lib/components/fancy/underline-to-background";
	import { motion } from "motion-sv";
	const fadeInVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { duration: 0.5, staggerChildren: 0.1 },
		},
	};

	const wordVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	const words = "Weekly goodies delivered straight to your inbox —".split(" ");
</script>

<div class="flex h-dvh w-dvw flex-col items-center justify-center bg-[#f5f5f5]">
	<motion.h2
		class="p-12 text-xl text-[#0015ff] md:p-24"
		initial="hidden"
		animate="visible"
		variants={fadeInVariants}
	>
		{#each words as word, index}
			<motion.span variants={wordVariants} class="mr-1 inline-block">
				{word}
			</motion.span>
		{/each}
		<motion.span variants={wordVariants} class="inline-block">
			<UnderlineToBackground targetTextColor="#f0f0f0" class="cursor-pointer">
				subscribe
			</UnderlineToBackground>
		</motion.span>
	</motion.h2>
</div>
