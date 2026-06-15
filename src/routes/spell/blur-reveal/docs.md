# Blur Reveal

Animated text reveal with blur effect.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/blur-reveal.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/blur-reveal.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/s/blur-reveal.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/s/blur-reveal.json
```

## Preview

```svelte
<script lang="ts">
	import { BlurReveal } from "$lib/components/spell/blur-reveal";
</script>

<div class="flex justify-center py-12">
	<BlurReveal as="h1" class="text-2xl font-medium md:text-4xl"
		>You can just ship things.</BlurReveal
	>
</div>
```

## Examples

### 1. Speed

```svelte
<script lang="ts">
	import { BlurReveal } from "$lib/components/spell/blur-reveal";
</script>

<div class="flex flex-col gap-8 *:flex-col">
	<div>
		<p class="text-muted-foreground font-mono text-sm">SLOW (0.5)</p>
		<BlurReveal class="text-2xl font-medium tracking-tight" speedReveal={0.5} triggerOnView>
			You can just ship things.
		</BlurReveal>
	</div>
	<div>
		<p class="text-muted-foreground font-mono text-sm">NORMAL (1.5)</p>
		<BlurReveal class="text-2xl font-medium tracking-tight" speedReveal={1.5} triggerOnView>
			You can just ship things.
		</BlurReveal>
	</div>
	<div>
		<p class="text-muted-foreground font-mono text-sm">FAST (2)</p>
		<BlurReveal class="text-2xl font-medium tracking-tight" speedReveal={2} triggerOnView>
			You can just ship things.
		</BlurReveal>
	</div>
</div>
```

## Usage

Import the component and wrap the content you want it to affect. Adjust the optional props to tune the visual behavior.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `Snippet` | `required` | Plain text snippet content flattened into grapheme-safe characters before animation. |
| `as` | `"span" \| "div" \| "p" \| "h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6"` | `"p"` | Sets the semantic tag used for the animated root element. |
| `delay` | `number` | `0` | Adds a delay in seconds before the reveal sequence begins. |
| `speedReveal` | `number` | `1.5` | Higher values tighten the stagger delay between animated characters. |
| `speedSegment` | `number` | `0.5` | Higher values shorten the per-character reveal duration. |
| `stagger` | `number` | `undefined` | Optional direct override for the computed character stagger timing. |
| `duration` | `number` | `undefined` | Optional direct override for the computed per-character reveal duration. |
| `trigger` | `boolean` | `true` | Enables or disables the visible reveal state. |
| `triggerOnView` | `boolean` | `false` | Waits to animate until the component enters the viewport. |
| `once` | `boolean` | `true` | When using triggerOnView, controls whether the reveal runs only on first entry. |
| `letterSpacing` | `string \| number` | `undefined` | Applies extra spacing between animated characters. |
| `onStart` | `() => void` | `-` | Called when a new reveal cycle begins. |
| `onComplete` | `() => void` | `-` | Called after the final animated unit completes the visible transition. |
| `class` | `string` | `''` | Custom classes applied to the animated root element. |
| `style` | `string` | `''` | Inline styles forwarded to the animated root element. |
