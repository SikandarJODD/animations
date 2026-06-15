# Scramble In

A text component that reveals the text with a scrambled part in front.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/f/scramble-in.json
npm install motion-sv

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/f/scramble-in.json
yarn add motion-sv

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/f/scramble-in.json
pnpm add motion-sv

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/f/scramble-in.json
bun add motion-sv
```

## Preview

```svelte
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
	class="text-foreground dark:text-muted flex h-120 w-dvw flex-col items-start justify-center overflow-hidden rounded-xl bg-white px-2 py-16 text-left text-sm font-normal sm:px-16 md:px-20 md:text-center md:text-lg lg:px-24 lg:text-lg xl:text-xl"
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
```

## Examples

### 1. Programmatic Controls

Control the exported start and reset methods through bind:this and react to completion.

```svelte
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

<div class="text-foreground flex h-56 w-full flex-col justify-between rounded-xl border p-6 sm:p-8">
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

	<p class="text-muted-foreground text-sm">{status}</p>
</div>
```

### 2. Delay And Speed

Compare how scrambleDelay and scrambleSpeed change pacing across multiple lines.

```svelte
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
```

### 3. Special Characters

Use a custom scramble character pool for terminal commands, URLs, and punctuation-heavy strings.

```svelte
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
```

## Usage

Import `ScrambleIn` from `$lib/components/fancy/scramble-in` and pass the props you need for your use case.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | `string` | `required` | Source text progressively revealed from left to right. |
| `scrambleDelay` | `number` | `0` | Delay in milliseconds before the scramble reveal starts. |
| `scrambleSpeed` | `number` | `50` | Interval in milliseconds between reveal updates. |
| `scrambledLetterCount` | `number` | `2` | Maximum number of trailing scrambled characters shown during the reveal. |
| `characters` | `string` | `"abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"` | Character pool used to build the temporary scrambled suffix. |
| `scrambledClass` | `string` | `undefined` | Classes applied to the still-scrambled trailing portion of the text. |
| `class` | `string` | `undefined` | Classes applied to the revealed portion of the text. |
| `autoStart` | `boolean` | `true` | Starts the reveal automatically when the component mounts. |
| `onStart` | `() => void` | `undefined` | Called when a reveal cycle begins after any configured delay. |
| `onComplete` | `() => void` | `undefined` | Called after the full text has been completely revealed. |
