# Text Animate

Animate text with various effects like blur, slide, scale, and fade with granular control over words, characters, or lines.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/text-animate.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/text-animate.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/text-animate.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/text-animate.json
```

## Preview

```svelte
<script lang="ts">
	import { TextAnimate } from "$lib/components/magic/text-animate";
</script>

<div class="flex items-center justify-center">
	<TextAnimate content="Hello, Svelte Developers!" animation="blurInUp" by="character" once />
</div>
```

## Examples

### 1. Blur In by Text

Animate entire text with a blur-in effect.

```svelte
<script lang="ts">
	import { TextAnimate } from "$lib/components/magic/text-animate";
</script>

<div class="flex items-center justify-center">
	<TextAnimate content="Blur In Text" animation="blurIn" />
</div>
```

### 2. Slide Up by Word

Animate each word with a slide-up effect.

```svelte
<script lang="ts">
	import { TextAnimate } from "$lib/components/magic/text-animate";
</script>

<div class="flex items-center justify-center">
	<TextAnimate content="Slide up by word" animation="slideUp" by="word" />
</div>
```

### 3. Scale Up by Text

Animate entire text with a scale-up spring effect.

```svelte
<script lang="ts">
	import { TextAnimate } from "$lib/components/magic/text-animate";
</script>

<div class="flex items-center justify-center">
	<TextAnimate content="Scale up by text" animation="scaleUp" by="text" />
</div>
```

### 4. Fade In by Line

Animate text line by line with a fade-in effect.

```svelte
<script lang="ts">
	import { TextAnimate } from "$lib/components/magic/text-animate";
</script>

<div class="flex items-center justify-center">
	<TextAnimate
		content="Fade in by line as paragraph\n\nFade in by line as paragraph\n\nFade in by line as paragraph"
		animation="fadeIn"
		by="line"
	/>
</div>
```

### 5. Slide Left by Character

Animate each character with a slide-left effect.

```svelte
<script lang="ts">
	import { TextAnimate } from "$lib/components/magic/text-animate";
</script>

<div class="flex items-center justify-center">
	<TextAnimate content="Slide left by character" animation="slideLeft" by="character" />
</div>
```

### 6. With Delay

Add a delay before the animation starts.

```svelte
<script lang="ts">
	import { TextAnimate } from "$lib/components/magic/text-animate";
</script>

<div class="flex items-center justify-center">
	<TextAnimate
		content="This animation starts after a delay"
		animation="blurInUp"
		by="character"
		delay={2}
	/>
</div>
```

### 7. With Duration

Control the total duration of the animation.

```svelte
<script lang="ts">
	import { TextAnimate } from "$lib/components/magic/text-animate";
</script>

<div class="flex items-center justify-center">
	<TextAnimate
		content="Slower animation with custom duration"
		animation="slideUp"
		by="word"
		duration={3}
	/>
</div>
```

### 8. Custom Motion Variants

Use custom motion variants for complete control over the animation.

```svelte
<script lang="ts">
	import { TextAnimate } from "$lib/components/magic/text-animate";
	import type { Variants } from "motion-sv";

	const customVariants: Variants = {
		hidden: {
			opacity: 0,
			y: 30,
			rotate: 45,
			scale: 0.5,
		},
		show: (i) => ({
			opacity: 1,
			y: 0,
			rotate: 0,
			scale: 1,
			transition: {
				delay: i * 0.1,
				duration: 0.4,
				y: {
					type: "spring",
					damping: 12,
					stiffness: 200,
					mass: 0.8,
				},
				rotate: {
					type: "spring",
					damping: 8,
					stiffness: 150,
				},
				scale: {
					type: "spring",
					damping: 10,
					stiffness: 300,
				},
			},
		}),
		exit: (i) => ({
			opacity: 0,
			y: 30,
			rotate: 45,
			scale: 0.5,
			transition: {
				delay: i * 0.1,
				duration: 0.4,
			},
		}),
	};
</script>

<div class="flex items-center justify-center">
	<TextAnimate content="Svelte is Amazing!" variants={customVariants} by="character" />
</div>
```

## Usage

Import `TextAnimate` from `$lib/components/magic/text-animate` and pass the props you need for your use case.

## Props

A component for animating text with various effects and granular control.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `content` | `string` | `""` | The text content to animate (required) |
| `animation` | `"fadeIn" \| "blurIn" \| "blurInUp" \| "blurInDown" \| "slideUp" \| "slideDown" \| "slideLeft" \| "slideRight" \| "scaleUp" \| "scaleDown"` | `"fadeIn"` | The animation preset to use |
| `by` | `"text" \| "word" \| "character" \| "line"` | `"word"` | How to split the text for animation |
| `delay` | `number` | `0` | Delay before the animation starts (in seconds) |
| `duration` | `number` | `0.3` | Total duration of the animation (in seconds) |
| `variants` | `Variants` | `undefined` | Custom motion variants for the item animation |
| `startOnView` | `boolean` | `true` | Start animation when component enters viewport |
| `once` | `boolean` | `false` | Animate only once when in view |
| `accessible` | `boolean` | `true` | Enable accessibility features (screen reader support) |
| `class` | `string` | `""` | Additional CSS classes to apply to the container |
| `segmentClass` | `string` | `""` | Additional CSS classes to apply to each segment |
