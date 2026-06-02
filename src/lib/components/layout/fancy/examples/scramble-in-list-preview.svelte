<script lang="ts">
	import { ScrambleIn } from "$lib/components/fancy/scramble-in";

	const items = ["Animations", "Motions", "Transitions", "Interactions"];
</script>

<div
	class="flex min-h-80 flex-col justify-center rounded-xl bg-yellow-50 px-5 py-7 text-left text-sm text-yellow-600 sm:px-7 sm:text-base"
>
	<div class="font-medium">
		{#each items as item, index}
			<div class="rounded-full px-3 py-0.5">
				<ScrambleIn
					text={item}
					scrambleDelay={index * 120}
					scrambleSpeed={24}
					scrambledLetterCount={4}
				/>
			</div>
		{/each}
	</div>
</div>
