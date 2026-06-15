<script lang="ts">
	import { ScrambleIn } from "$lib/components/fancy/scramble-in";
</script>

<div
	class="flex min-h-80 flex-col justify-center rounded-xl bg-emerald-200 px-6 py-8 text-left text-white sm:px-8"
>
	<div class="font-mono text-[11px] font-medium tracking-[0.22em] text-emerald-600 uppercase">
		Headline
	</div>
	<div class="mt-4 text-3xl font-semibold tracking-tight text-emerald-500 sm:text-4xl">
		<ScrambleIn
			text="Design in motion"
			scrambleDelay={80}
			scrambleSpeed={25}
			scrambledLetterCount={5}
			scrambledClass="text-emerald-700"
		/>
	</div>
	<div class="mt-3 max-w-sm text-sm text-emerald-600 sm:text-base">
		<ScrambleIn
			text="A cleaner second variant for the overview grid."
			scrambleDelay={480}
			scrambleSpeed={25}
			scrambledLetterCount={3}
			scrambledClass="text-emerald-500"
		/>
	</div>
</div>
