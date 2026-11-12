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

## Usage

### Forward animation

Use `RandomLetterSwap` for an animation that completes once per hover, with a freshly shuffled character order each time.

```svelte
<script lang="ts">
  import { RandomLetterSwap } from "#lib/components/fancy/random-letter-swap/index.js";
</script>

<a href="/archive" class="inline-flex text-3xl font-semibold tracking-tight">
  <RandomLetterSwap
    label="Explore the archive"
    staggerDuration={0.025}
    transition={{ type: "spring", duration: 0.65, bounce: 0 }}
    class="text-foreground"
  />
</a>
```

### Ping-pong animation

Use `RandomLetterSwapPingPong` when the randomly ordered letters should return as the pointer leaves.

```svelte
<script lang="ts">
  import { RandomLetterSwapPingPong } from "#lib/components/fancy/random-letter-swap-ping-pong/index.js";
</script>

<button type="button" class="rounded-full bg-black px-5 py-3 text-sm font-medium text-white">
  <RandomLetterSwapPingPong
    label="Shuffle selection"
    reverse={false}
    staggerDuration={0.018}
    transition={{ type: "spring", duration: 0.6, bounce: 0 }}
  />
</button>
```

## Preview

```svelte
<script>
  import { RandomLetterSwap } from "#lib/components/fancy/random-letter-swap/index.ts";
  import { RandomLetterSwapPingPong } from "#lib/components/fancy/random-letter-swap-ping-pong/index.ts";
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
    <RandomLetterSwap
      label="Bottom To Top Animation"
      reverse={false}
      class="px-4 italic"
    />

    <!-- Ping Pong  -->
    <RandomLetterSwapPingPong
      label="Ping Pong Animation"
      class="text-blue-600"
    />
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
  import { RandomLetterSwap } from "#lib/components/fancy/random-letter-swap/index.ts";
  import { RandomLetterSwapPingPong } from "#lib/components/fancy/random-letter-swap-ping-pong/index.ts";
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
    <RandomLetterSwap
      label="Bottom To Top Animation"
      reverse={false}
      class="px-4 italic"
    />

    <!-- Ping Pong  -->
    <RandomLetterSwapPingPong
      label="Ping Pong Animation"
      class="text-blue-600"
    />
    <RandomLetterSwapPingPong
      label="Comes From The Bottom"
      reverse={false}
      class="text-blue-600 italic"
    />
  </div>
</div>
```

## Props

These props apply to both the forward and ping-pong Random Letter Swap variants shown on this page.

| Prop              | Type               | Default                             | Description                                                                |
| ----------------- | ------------------ | ----------------------------------- | -------------------------------------------------------------------------- |
| `label`           | `string`           | `required`                          | Text string split into characters and shuffled into a random reveal order. |
| `reverse`         | `boolean`          | `true`                              | Reverses the vertical swap direction for the entering characters.          |
| `transition`      | `AnimationOptions` | `{ type: "spring", duration: 0.8 }` | Motion options used for each randomly ordered character swap.              |
| `staggerDuration` | `number`           | `0.02`                              | Delay in seconds between characters in the shuffled animation order.       |
| `class`           | `string`           | `undefined`                         | Classes merged onto the interactive text wrapper.                          |
