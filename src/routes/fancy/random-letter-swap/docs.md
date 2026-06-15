# Random Letter Swap

A text component that randomly swaps the letters vertically on hover.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/f/random-letter-swap.json
npm install motion-sv runed

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/f/random-letter-swap.json
yarn add motion-sv runed

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/f/random-letter-swap.json
pnpm add motion-sv runed

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/f/random-letter-swap.json
bun add motion-sv runed
```

## Preview

```svelte
<script>
	import { RandomLetterSwap } from "$lib/components/fancy/random-letter-swap";
	import { RandomLetterSwapPingPong } from "$lib/components/fancy/random-letter-swap-ping-pong";
</script>

<div
	class="flex h-120 w-full flex-col items-center justify-center rounded-lg bg-white font-serif text-3xl md:text-5xl"
>
	<div
		class="align-text-center flex h-full flex-col items-center justify-center gap-y-1 rounded-xl py-12 text-red-500 md:gap-y-2"
	>
		<!-- reverse: true - Animate from top to bottom -->
		<RandomLetterSwap label="Random Letter Swap" reverse={true} class="" />
		<!-- reverse: false - Animate from bottom to top -->
		<RandomLetterSwap label="Bottom To Top Animation" reverse={false} class="px-4 italic" />

		<!-- Ping Pong  -->
		<RandomLetterSwapPingPong label="Ping Pong Animation" class="text-blue-600" />
		<RandomLetterSwapPingPong
			label="Comes From The Bottom"
			reverse={false}
			class="text-blue-600 italic"
		/>
	</div>
</div>
```

## Examples

### 1. Default Example

```svelte
<script>
	import { RandomLetterSwap } from "$lib/components/fancy/random-letter-swap";
	import { RandomLetterSwapPingPong } from "$lib/components/fancy/random-letter-swap-ping-pong";
</script>

<div
	class="flex h-120 w-full flex-col items-center justify-center rounded-lg bg-white font-serif text-3xl md:text-5xl"
>
	<div
		class="align-text-center flex h-full flex-col items-center justify-center gap-y-1 rounded-xl py-12 text-red-500 md:gap-y-2"
	>
		<!-- reverse: true - Animate from top to bottom -->
		<RandomLetterSwap label="Random Letter Swap" reverse={true} class="" />
		<!-- reverse: false - Animate from bottom to top -->
		<RandomLetterSwap label="Bottom To Top Animation" reverse={false} class="px-4 italic" />

		<!-- Ping Pong  -->
		<RandomLetterSwapPingPong label="Ping Pong Animation" class="text-blue-600" />
		<RandomLetterSwapPingPong
			label="Comes From The Bottom"
			reverse={false}
			class="text-blue-600 italic"
		/>
	</div>
</div>
```

## Usage

Import `RandomLetterSwap` from `$lib/components/fancy/random-letter-swap` and pass the props you need for your use case.

## Props

These props apply to both the forward and ping-pong Random Letter Swap variants shown on this page.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | `required` | Text string split into characters and shuffled into a random reveal order. |
| `reverse` | `boolean` | `true` | Reverses the vertical swap direction for the entering characters. |
| `transition` | `AnimationOptions` | `{ type: "spring", duration: 0.8 }` | Motion options used for each randomly ordered character swap. |
| `staggerDuration` | `number` | `0.02` | Delay in seconds between characters in the shuffled animation order. |
| `class` | `string` | `undefined` | Classes merged onto the interactive text wrapper. |
