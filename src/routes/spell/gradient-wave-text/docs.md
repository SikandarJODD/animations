# Gradient Wave Text

Apple-style animated gradient text with wave effect.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/gradient-wave-text.json
npm install motion-sv

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/gradient-wave-text.json
yarn add motion-sv

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/s/gradient-wave-text.json
pnpm add motion-sv

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/s/gradient-wave-text.json
bun add motion-sv
```

## Preview

```svelte
<script lang="ts">
	import { GradientWaveText } from "$lib/components/spell/gradient-wave-text";
</script>

<GradientWaveText
	once={false}
	triggerOnView
	class="text-3xl font-medium tracking-[-.03em] md:text-5xl"
>
	Just ship things.
</GradientWaveText>
```

## Examples

### 1. Linear Bands

```svelte
<script lang="ts">
	import { GradientWaveText } from "$lib/components/spell/gradient-wave-text";

	let customColors = ["#2563eb", "#0ea5e9", "#67e8f9", "#e0f2fe"];
</script>

<GradientWaveText
	repeat
	radial={false}
	{customColors}
	class="text-3xl font-medium tracking-[-.03em] md:text-5xl"
>
	Signals move in deliberate lines
</GradientWaveText>
```

## Usage

Import the component and wrap the content you want it to affect. Adjust the optional props to tune the visual behavior.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `Snippet` | `required` | The text content rendered inside the animated gradient mask. |
| `align` | `"left" \| "center" \| "right"` | `"center"` | Controls content alignment and text alignment for the rendered headline. |
| `speed` | `number` | `1` | Controls how quickly the gradient index advances through the color bands. |
| `paused` | `boolean` | `false` | Pauses gradient movement while keeping the current visual state rendered. |
| `delay` | `number` | `0` | Adds a delay in seconds before the gradient animation begins. |
| `repeat` | `boolean` | `false` | When true, loops the gradient wave indefinitely instead of stopping after one pass. |
| `triggerOnView` | `boolean` | `false` | Waits to animate until the component enters the viewport. |
| `once` | `boolean` | `true` | When using triggerOnView, controls whether the animation runs only on first entry. |
| `radial` | `boolean` | `true` | Uses a radial gradient when true and a linear gradient when false. |
| `bottomOffset` | `number` | `20` | Controls how much extra bottom padding is applied to preserve the gradient bloom. |
| `bandGap` | `number` | `4` | Sets the spacing between each gradient color band. |
| `bandCount` | `number` | `8` | Controls how many color bands are rendered into the gradient. |
| `customColors` | `string[]` | `-` | Overrides the default gradient palette with a custom color list. |
| `ariaLabel` | `string` | `-` | Provides an accessible label when the rendered content should be announced as an image-like effect. |
| `role` | `string` | `-` | Overrides the computed root role if you need explicit semantics. |
| `class` | `string` | `-` | Custom classes applied to the root wrapper. |
| `style` | `string` | `-` | Inline styles merged onto the root wrapper. |
