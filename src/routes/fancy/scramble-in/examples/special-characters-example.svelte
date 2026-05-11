<script lang="ts">
	import { ScrambleIn } from "$lib/components/fancy/scramble-in";

	const commandLines = [
		"Wake up, Neo...",
		"The Matrix has you...",
		"Follow the White Rabbit, Neo.",
	];

	const characterPool = "01<>[]{}()/\\\\|+-_=*#@!?$%^&:";
</script>

<div
	class="flex h-64 w-full flex-col justify-center gap-4 overflow-hidden rounded-xl bg-black p-6 font-mono text-sm sm:p-8 sm:text-base"
>
	{#each commandLines as line, index (line)}
		<ScrambleIn
			text={line}
			scrambleDelay={index * 820}
			scrambleSpeed={40}
			scrambledLetterCount={7}
			characters={characterPool}
			class="text-green-600"
			scrambledClass="text-lime-500/55"
		/>
	{/each}
</div>
