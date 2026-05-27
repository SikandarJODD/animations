<script lang="ts">
	import { LayoutGroup, motion } from "motion-sv";
	import { TextRotate } from "$lib/components/fancy/text-rotate";

	const texts = ["work!", "fancy ✽", "right", "fast", "fun", "rock", "🕶️🕶️🕶️"];
</script>

<div
	class="font-overused-grotesk text-foreground dark:text-muted flex h-dvh w-dvw flex-row items-center justify-center overflow-hidden bg-white p-12 text-2xl font-light sm:p-20 sm:text-3xl md:p-24 md:text-5xl"
>
	<LayoutGroup>
		<motion.p class="flex whitespace-pre" layout>
			<motion.span
				class="pt-0.5 sm:pt-1 md:pt-2"
				layout
				transition={{ type: "spring", damping: 30, stiffness: 400 }}
			>
				Make it{" "}
			</motion.span>

			<TextRotate
				as="span"
				{texts}
				mainClassName="bg-[#ff5941] px-2 py-0.5 text-white overflow-hidden justify-center rounded-lg sm:px-2 sm:py-1 md:px-3 md:py-2"
				staggerFrom="last"
				initial={{ y: "100%" }}
				animate={{ y: 0 }}
				exit={{ y: "-120%" }}
				staggerDuration={0.025}
				splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
				transition={{ type: "spring", damping: 30, stiffness: 400 }}
				rotationInterval={2000}
			/>
		</motion.p>
	</LayoutGroup>
</div>
