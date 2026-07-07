# Glyph Matrix

An animated grid of subtly shifting glyphs on a canvas, with a theme-aware color driven by the consumer.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/glyph-matrix.json
npm install runed

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/glyph-matrix.json
yarn add runed

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/glyph-matrix.json
pnpm add runed

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/glyph-matrix.json
bun add runed
```

## Preview

```svelte
<script lang="ts">
	import { GlyphMatrix } from "$lib/components/magic/glyph-matrix";
	import { mode } from "mode-watcher";
</script>

<div class="bg-background relative h-100 w-full overflow-hidden rounded-lg">
	<GlyphMatrix
		glyphs="01·•+*/\<>="
		cellSize={14}
		mutationRate={0.04}
		interval={90}
		fadeBottom={0.6}
		color={mode.current === "dark" ? "#4FFF92" : "#000000"}
		boost={1}
	/>
</div>
```

## Examples

### 1. Letters Example

```
<script lang="ts">
	import { GlyphMatrix } from "$lib/components/magic/glyph-matrix";
	import { mode } from "mode-watcher";
    // Visit https://www.fffuel.co/cccolor/ for colors
</script>

<div class="bg-background relative h-100 w-full overflow-hidden rounded-lg">
	<GlyphMatrix
		glyphs="SVELTE"
		cellSize={16}
		mutationRate={0.04}
		interval={40}
		fadeBottom={0.8}
		color={mode.current === "dark" ? "#FF4000" : "rgb(255, 21, 0)"}
		boost={1.25}
	/>
</div>
```

## Usage

Import `GlyphMatrix` from `$lib/components/magic/glyph-matrix` and pass the props you need for your use case.

## Props

A canvas-based glyph animation that renders a shifting matrix of characters.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `glyphs` | `string` | `"01·•+*/\<>="` | Characters to randomly pick from. |
| `cellSize` | `number` | `14` | Cell size in pixels, which also controls the font size. |
| `mutationRate` | `number` | `0.04` | Probability from 0 to 1 that a cell mutates on each tick. |
| `interval` | `number` | `90` | Tick interval in milliseconds. |
| `fadeBottom` | `number` | `0.6` | Fade amount toward the bottom of the canvas. |
| `color` | `string` | `"#6B7280"` | Glyph color. Pass a theme-aware CSS color value from the consumer. |
| `boost` | `number` | `1.2` | Brightness multiplier for the glyph color. Values above 1 make the matrix brighter. |
| `class` | `string` | `""` | Additional CSS classes applied to the canvas. |
| `style` | `string` | `undefined` | Inline styles forwarded to the canvas element. |
