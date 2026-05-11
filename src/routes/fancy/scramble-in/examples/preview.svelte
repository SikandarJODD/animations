<script lang="ts">
	import { ScrambleIn } from "$lib/components/fancy/scramble-in";

	const titles = [
		"1. One More Time (featuring Romanthony) - 5:20",
		"2. Aerodynamic - 3:27",
		"3. Digital Love - 4:58",
		"4. Harder, Better, Faster, Stronger - 3:45",
		"5. Crescendolls - 3:31",
		"6. Nightvision - 1:44",
		"7. Superheroes - 3:57",
		"8. High Life - 3:22",
		"9. Something About Us - 3:51",
		"10. Voyager - 3:47",
		"11. Veridis Quo - 5:44",
		"12. Short Circuit - 3:26",
		"13. Face to Face (featuring Todd Edwards) - 3:58",
		"14. Too Long (featuring Romanthony) - 10:00",
	];
</script>

<div
	class="text-foreground dark:text-muted rounded-xl flex h-120 w-dvw flex-col items-start justify-center overflow-hidden bg-white px-2 py-16 text-left md:text-center text-sm font-normal sm:px-16 md:px-20 md:text-lg lg:px-24 lg:text-lg xl:text-xl"
>
	{#each titles as model, index}
		<ScrambleIn
			text={model}
			scrambleDelay={index * 50}
			scrambleSpeed={25}
			scrambledLetterCount={5}
		/>
	{/each}
</div>
