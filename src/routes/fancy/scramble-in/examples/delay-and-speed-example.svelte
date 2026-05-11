<script lang="ts">
	import { ScrambleIn } from "$lib/components/fancy/scramble-in";

	const configurations = [
		{
			label: "0ms delay / 16ms speed",
			text: "Immediate and sharp for hero headlines",
			delay: 0,
			speed: 16,
			scrambledLetterCount: 6,
		},
		{
			label: "300ms delay / 28ms speed",
			text: "Balanced pacing for supporting copy",
			delay: 300,
			speed: 28,
			scrambledLetterCount: 5,
		},
		{
			label: "700ms delay / 42ms speed",
			text: "Slower reveal for deliberate callouts",
			delay: 700,
			speed: 42,
			scrambledLetterCount: 4,
		},
	];
</script>

<div
	class="flex h-64 w-full flex-col justify-center gap-5 overflow-hidden rounded-xl bg-zinc-950 p-6 font-mono text-sm sm:p-8 sm:text-base"
>
	{#each configurations as item (item.label)}
		<div class="grid gap-2 sm:grid-cols-[180px_1fr] sm:items-center">
			<p class="text-[11px] text-zinc-500 uppercase">{item.label}</p>
			<ScrambleIn
				text={item.text}
				scrambleDelay={item.delay}
				scrambleSpeed={item.speed}
				scrambledLetterCount={item.scrambledLetterCount}
				class="text-zinc-100"
				scrambledClass="text-emerald-400/70 sm:text-base"
			/>
		</div>
	{/each}
</div>
