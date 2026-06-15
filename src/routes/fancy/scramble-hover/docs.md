# Scramble Hover

Scramble text on hover with sequential or iterative reveals and custom character sets.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/f/scramble-hover.json
npm install motion-sv

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/f/scramble-hover.json
yarn add motion-sv

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/f/scramble-hover.json
pnpm add motion-sv

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/f/scramble-hover.json
bun add motion-sv
```

## Preview

```svelte
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
```

## Examples

### 1. New Characters Example

```svelte
<script>
	import { ScrambleHover } from "$lib/components/fancy/scramble-hover";
</script>

<div
	class="text-foreground dark:text-muted flex h-40 w-full flex-col justify-center space-y-2 space-x-6 overflow-hidden rounded-xl bg-white p-8 text-xl font-normal sm:p-20 sm:text-3xl md:h-90 md:text-5xl"
>
	<ScrambleHover
		text="original characters"
		scrambleSpeed={50}
		maxIterations={8}
		useOriginalCharsOnly={true}
		class="cursor-pointer"
	/>
	<ScrambleHover
		text="new characters"
		scrambleSpeed={50}
		maxIterations={8}
		useOriginalCharsOnly={false}
		class="cursor-pointer"
		characters="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]/|;':\,./<>?"
	/>
</div>
```

### 2. Special Symbols Example

```svelte
<script>
	import { ScrambleHover } from "$lib/components/fancy/scramble-hover";
</script>

<div
	class="text-foreground dark:text-muted flex h-50 w-full items-center justify-center space-y-2 overflow-hidden rounded-xl bg-white p-24 text-4xl font-normal md:h-120"
>
	<ScrambleHover
		text="special symbols"
		scrambleSpeed={50}
		maxIterations={12}
		useOriginalCharsOnly={false}
		class="cursor-pointer text-4xl"
		characters="čüỳĦØ↋⒬¢⏧⏛⏄⎄*¿"
		scrambledClass="font-notoSansSymbols text-3xl cursor-pointer"
	/>
</div>
```

### 3. Position Example

```svelte
<script>
	import { ScrambleHover } from "$lib/components/fancy/scramble-hover";
</script>

<div
	class="text-light flex h-60 w-dvw flex-col items-center justify-center space-y-20 overflow-hidden bg-black p-0 text-sm font-normal text-white sm:text-xl md:h-90 md:p-12 md:text-2xl"
>
	<div class="w-full text-left">
		<ScrambleHover
			text={"from the start"}
			scrambleSpeed={40}
			sequential={true}
			revealDirection="start"
			useOriginalCharsOnly={false}
			class="font-azeret-mono"
			characters="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]|;':\,./<>?"
		/>
	</div>
	<div class="w-full text-center">
		<ScrambleHover
			text={"from the center"}
			scrambleSpeed={40}
			sequential={true}
			revealDirection="center"
			useOriginalCharsOnly={false}
			class="font-azeret-mono"
			characters="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]|;':\,./<>?"
		/>
	</div>
	<div class="w-full text-right">
		<ScrambleHover
			text={"from the end"}
			scrambleSpeed={40}
			sequential={true}
			revealDirection="end"
			useOriginalCharsOnly={false}
			class="font-azeret-mono"
			characters="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]|;':\,./<>?"
		/>
	</div>
</div>
```

## Usage

Import `ScrambleHover` from `$lib/components/fancy/scramble-hover` and pass the props you need for your use case.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | `string` | `required` | Source text shown when idle and revealed again after scrambling. |
| `scrambleSpeed` | `number` | `50` | Interval in milliseconds between scramble updates while hovering. |
| `maxIterations` | `number` | `10` | Maximum number of random refresh cycles used when `sequential` is disabled. |
| `sequential` | `boolean` | `false` | Reveals one character position at a time instead of running a fixed number of scramble passes. |
| `revealDirection` | `"start" \| "end" \| "center"` | `"start"` | Direction used for sequential reveals. |
| `useOriginalCharsOnly` | `boolean` | `false` | Restricts scrambling to characters already present in the source text. |
| `characters` | `string` | `"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"` | Character pool used when generating random scramble symbols. |
| `scrambledClass` | `string` | `undefined` | Classes applied only to character positions that are currently scrambled. |
| `class` | `string` | `undefined` | Classes merged onto the rendered motion span. |
