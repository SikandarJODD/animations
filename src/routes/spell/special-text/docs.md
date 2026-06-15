# Special Text

Animated text with scramble effect.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/special-text.json
npm install motion-sv

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/special-text.json
yarn add motion-sv

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/s/special-text.json
pnpm add motion-sv

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/s/special-text.json
bun add motion-sv
```

## Preview

```svelte
<script lang="ts">
	import { SpecialText } from "$lib/components/spell/special-text";
</script>

<SpecialText once={false} inView class="text-xl">SVELTE SPELL UI</SpecialText>
```

## Examples

### 1. Speed

```svelte
<script lang="ts">
	import { SpecialText } from "$lib/components/spell/special-text";
</script>

<div class="flex flex-col gap-4">
	<div class="flex items-center gap-4">
		<span class="text-muted-foreground w-20 font-mono text-sm"> FAST: </span>
		<SpecialText speed={10} class="text-lg" inView>FAST ANIMATION</SpecialText>
	</div>
	<div class="flex items-center gap-4">
		<span class="text-muted-foreground w-20 font-mono text-sm"> NORMAL: </span>
		<SpecialText speed={20} class="text-lg" inView>NORMAL SPEED</SpecialText>
	</div>
	<div class="flex items-center gap-4">
		<span class="text-muted-foreground w-20 font-mono text-sm"> SLOW: </span>
		<SpecialText speed={40} class="text-lg" inView>SLOW MOTION</SpecialText>
	</div>
</div>
```

## Usage

Import the component and wrap the content you want it to affect. Adjust the optional props to tune the visual behavior.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `Snippet \| undefined` | `undefined` | Optional slotted text content used when the text prop is not provided. |
| `text` | `string \| undefined` | `undefined` | Optional plain text source for the scramble reveal. Provide either text or children. |
| `speed` | `number` | `20` | Controls the scramble update cadence in milliseconds for each animation step. |
| `delay` | `number` | `0` | Adds a delay in seconds before the scramble sequence begins. |
| `triggerOnView` | `boolean` | `false` | Waits to animate until the component enters the viewport. |
| `once` | `boolean` | `true` | When using inView, controls whether the reveal runs only on first entry. |
| `class` | `string` | `-` | Custom classes applied to the animated root span. |
