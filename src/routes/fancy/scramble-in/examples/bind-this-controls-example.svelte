<script lang="ts">
	import { ScrambleIn } from "$lib/components/fancy/scramble-in";
	import { Button } from "$lib/components/ui/button";

	let scrambleRef: { start: () => void; reset: () => void } | null = null;
	let status = $state("Ready to animate");

	function handleStart() {
		status = "Starting animation...";
		scrambleRef?.start();
	}

	function handleReset() {
		scrambleRef?.reset();
		status = "Reset to idle";
	}
</script>

<div
	class="text-foreground flex h-56 w-full flex-col justify-between rounded-xl border p-6 sm:p-8"
>
	<div class="flex items-center gap-2">
		<Button size="sm" onclick={handleStart}>Start</Button>
		<Button size="sm" variant="outline" onclick={handleReset}>Reset</Button>
	</div>

	<ScrambleIn
		bind:this={scrambleRef}
		text="deployment check complete"
		autoStart={false}
		scrambleSpeed={40}
		scrambledLetterCount={4}
		class="text-2xl font-semibold tracking-tight sm:text-3xl"
		scrambledClass="text-blue-500/70 sm:text-3xl"
		onStart={() => (status = "Scrambling in progress...")}
		onComplete={() => (status = "Animation complete")}
	/>

	<p class="text-sm text-muted-foreground">{status}</p>
</div>
