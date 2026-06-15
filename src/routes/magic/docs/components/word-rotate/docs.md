# Word Rotate

A vertical rotation of words

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/word-rotate.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/word-rotate.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/word-rotate.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/word-rotate.json
```

## Preview

```svelte
<script lang="ts">
	import { WordRotate } from "$lib/components/magic/word-rotate";
</script>

<WordRotate class="text-4xl font-bold text-black dark:text-white" words={["Word", "Rotate"]} />
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
	import { WordRotate } from "$lib/components/magic/word-rotate";
</script>

<WordRotate class="text-4xl font-bold text-black dark:text-white" words={["Word", "Rotate"]} />
```

## Usage

Import `WordRotate` from `$lib/components/magic/word-rotate` and pass the props you need for your use case.

## Props

A component for Word Rotate.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | `""` | Additional CSS classes to apply |
| `words` | `string[]` | `required` | Array of words to rotate through |
| `duration` | `number` | `2500` | Duration between word changes in milliseconds |
| `motionProps` | `MotionProps` | `{ initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 50 }, transition: { duration: 0.25, ease: 'easeOut' } }` | Motion animation properties |
