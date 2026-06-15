<script lang="ts">
	import { ScrambleHover } from "$lib/components/fancy/scramble-hover";
	import { motion } from "motion-sv";
	const models = [
		"Llama 3.1 405B Instruct Turbo",
		"Llama 3.2 3B Instruct Turbo",
		"Gemma 2 27B",
		"Mistral 7B Instruct v0.3",
		"Mixtral 8x7B Instruct",
		"DeepSeek LLM Chat 67B",
		"Qwen 2.5 72B Instruct Turbo",
		"WizardLM 2 8x22B",
		"Nous Hermes 2 Mixtral",
		"StripedHyena Nous 7B",
		"DBRX Instruct",
		"MythoMax L2 13B",
		"SOLAR 10.7B Instruct",
		"Gemma 2B Instruct",
	];
</script>

<div
	class="text-foreground dark:text-muted flex h-80 w-full flex-col items-end justify-center overflow-hidden rounded-xl bg-white px-8 py-20 text-right text-sm font-normal sm:px-16 sm:text-lg md:h-130 md:px-24 md:text-xl lg:px-32"
>
	{#each models as model, index}
		<motion.div
			animate={{ opacity: [0, 1, 1], y: [10, 10, 0] }}
			transition={{
				duration: 0.1,
				ease: "circInOut",
				delay: index * 0.05 + 0.5,
				times: [0, 0.2, 1],
			}}
		>
			<ScrambleHover
				text={model}
				scrambleSpeed={50}
				maxIterations={8}
				useOriginalCharsOnly={true}
				class="cursor-pointer"
			/>
		</motion.div>
	{/each}
</div>
