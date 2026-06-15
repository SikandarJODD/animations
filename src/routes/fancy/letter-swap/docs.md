# Letter Swap

A text component that swaps the letters vertically on hover.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/f/letter-swap.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/f/letter-swap.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/f/letter-swap.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/f/letter-swap.json
```

## Preview

```svelte
<script>
	import { LetterSwap } from "$lib/components/fancy/letter-swap";
	import { LetterSwapPingPong } from "$lib/components/fancy/letter-swap-ping-pong";
</script>

<div
	class="font-calendas flex h-120 w-full flex-col items-center justify-center rounded-lg bg-white text-xl md:text-3xl"
>
	<div class=" flex flex-col gap-y-1 rounded-xl p-0 align-text-top text-[#0015ff] md:gap-y-2">
		<LetterSwap label="Hover me chief!" reverse={true} class="italic" />
		<LetterSwap label="Awesome!" reverse={false} class="font-bold" />
		<LetterSwap label="Good day!" staggerFrom="center" class="mono" />
		<LetterSwapPingPong
			label="More text?"
			staggerFrom="center"
			reverse={false}
			class="font-overused-grotesk font-bold"
		/>
		<LetterSwapPingPong label="oh, seriously?!" staggerFrom="last" />
	</div>
</div>
```

## Examples

### 1. Stagger From

```svelte
<script>
	import { LetterSwap } from "$lib/components/fancy/letter-swap";
</script>

<div
	class="font-figtree flex h-100 w-full flex-col items-center justify-center gap-x-12 gap-y-4 rounded-xl bg-white text-3xl font-medium text-[#0015ff] md:flex-row"
>
	<LetterSwap label="First" staggerFrom={"first"} />
	<LetterSwap label="Center" staggerFrom={"center"} />
	<LetterSwap label="Last" staggerFrom={"last"} />
</div>
```

### 2. Line Swap

By setting the staggerDelay prop to zero, you can create a line swap effect.

```svelte
<script>
	import { LetterSwap } from "$lib/components/fancy/letter-swap";
</script>

<div
	class="font-figtree flex h-100 w-full flex-row items-center justify-center gap-12 rounded-xl bg-[#0015ff] text-3xl"
>
	<div
		class="grid grid-cols-1 items-center justify-center gap-4 text-white md:grid-cols-2 md:gap-12"
	>
		<LetterSwap label="oh, wow!" staggerDuration={0} />
		<LetterSwap label="nice!" staggerDuration={0} reverse={false} />
	</div>
</div>
```

### 3. Ping Pong

```svelte
<script lang="ts">
	import { LetterSwapPingPong } from "$lib/components/fancy/letter-swap-ping-pong";
</script>

<div
	class="flex h-100 w-full flex-row items-center justify-center gap-12 font-serif text-4xl text-yellow-400"
>
	<LetterSwapPingPong label="First" staggerFrom="first" />
	<LetterSwapPingPong label="Center" staggerFrom="center" />
	<LetterSwapPingPong label="Last" staggerFrom="last" />
</div>
```

## Usage

Import `LetterSwap` from `$lib/components/fancy/letter-swap` and pass the props you need for your use case.

## Props

These props apply to both the forward and ping-pong Letter Swap variants shown on this page.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | `required` | Text string split into characters and animated on hover. |
| `reverse` | `boolean` | `true` | Reverses the vertical swap direction for the entering characters. |
| `transition` | `AnimationOptions` | `{ type: "spring", duration: 0.7 }` | Motion options used for the character swap animation. |
| `staggerDuration` | `number` | `0.03` | Delay in seconds between adjacent character swaps. |
| `staggerFrom` | `"first" \| "last" \| "center" \| number` | `"first"` | Starting point used when calculating stagger delays. |
| `class` | `string` | `undefined` | Classes merged onto the interactive text wrapper. |
