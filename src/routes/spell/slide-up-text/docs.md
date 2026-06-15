# Slide Up Text

Text animation that slides up from bottom with stagger effect.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/slide-up-text.json
npm install motion-sv

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/slide-up-text.json
yarn add motion-sv

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/s/slide-up-text.json
pnpm add motion-sv

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/s/slide-up-text.json
bun add motion-sv
```

## Preview

```svelte
<script lang="ts">
	import { SlideUpText } from "$lib/components/spell/slide-up-text";
</script>

<SlideUpText
	split="words"
	once={false}
	triggerOnView
	class="text-2xl font-medium tracking-[-.03em] sm:text-4xl"
>
	You can just ship things.
</SlideUpText>
```

## Examples

### 1. Split By

```svelte
<script lang="ts">
	import { SlideUpText } from "$lib/components/spell/slide-up-text";
</script>

<div class="flex flex-col gap-8">
	<div class="flex flex-col items-start">
		<span class="text-muted-foreground font-mono text-sm"> BY WORDS </span>
		<SlideUpText split="words" class="text-xl font-medium" triggerOnView>
			Beautiful animated text
		</SlideUpText>
	</div>
	<div class="flex flex-col">
		<span class="text-muted-foreground mb-2 font-mono text-sm"> BY CHARACTERS </span>
		<SlideUpText split="characters" stagger={0.02} class="text-xl font-medium" triggerOnView>
			You just can ship things.
		</SlideUpText>
	</div>
	<div class="flex flex-col items-start">
		<span class="text-muted-foreground mb-2 font-mono text-sm"> BY LINES </span>
		<SlideUpText split="lines" stagger={0.2} class="text-xl font-medium" triggerOnView>
			{"First line\nSecond line\nThird line"}
		</SlideUpText>
	</div>
</div>
```

### 2. From

```svelte
<script lang="ts">
	import { SlideUpText } from "$lib/components/spell/slide-up-text";
</script>

<div class="flex flex-col gap-8">
	<div class="flex flex-col items-start">
		<span class="text-muted-foreground mb-2 font-mono text-sm"> FROM FIRST </span>
		<SlideUpText from="first" class="text-xl font-medium" triggerOnView>
			Animation from first word
		</SlideUpText>
	</div>
	<div class="flex flex-col items-start">
		<span class="text-muted-foreground mb-2 font-mono text-sm"> FROM LAST </span>
		<SlideUpText from="last" class="text-xl font-medium" delay={0.8} triggerOnView>
			Animation from last word
		</SlideUpText>
	</div>
	<div class="flex flex-col items-start">
		<span class="text-muted-foreground mb-2 font-mono text-sm"> FROM CENTER </span>
		<SlideUpText from="center" class="text-xl font-medium" delay={1.5} triggerOnView>
			Animation from center outward
		</SlideUpText>
	</div>
</div>
```

## Usage

Import the component and wrap the content you want it to affect. Adjust the optional props to tune the visual behavior.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `Snippet` | `required` | Plain text snippet content that is flattened and split into animated units. |
| `split` | `"words" \| "characters" \| "lines"` | `"words"` | Controls whether the reveal animates word groups, grapheme-safe characters, or line breaks. |
| `delay` | `number` | `0` | Adds a base delay in seconds before the first animated unit begins. |
| `stagger` | `number` | `0.1` | Controls the delay in seconds between animated units. |
| `from` | `"first" \| "last" \| "center"` | `"first"` | Sets where the stagger timing begins across the animated units. |
| `transition` | `AnimationOptions` | `{ type: "tween", duration: 0.5, ease: [0.625, 0.05, 0, 1] }` | Overrides the motion transition used for each unit's vertical reveal. |
| `autoStart` | `boolean` | `true` | Starts the animation immediately when not using viewport triggering. |
| `triggerOnView` | `boolean` | `false` | Waits to animate until the component enters the viewport. |
| `once` | `boolean` | `true` | When using triggerOnView, controls whether the reveal runs only on first entry. |
| `onStart` | `() => void` | `-` | Called when the component starts a new animation cycle. |
| `onComplete` | `() => void` | `-` | Called after the final visible unit finishes animating. |
| `class` | `string` | `-` | Custom classes applied to the root wrapper. |
| `wordClass` | `string` | `''` | Custom classes applied to each word or line wrapper. |
| `charClass` | `string` | `-` | Custom classes applied to each character wrapper. |
