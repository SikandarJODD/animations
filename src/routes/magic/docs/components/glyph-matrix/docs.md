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

## Usage

```svelte
<script lang="ts">
  import { GlyphMatrix } from "#lib/components/magic/glyph-matrix/index.js";
</script>

<div class="h-64 overflow-hidden rounded-lg border">
  <GlyphMatrix hover hoverGlyphs="1" glyphs="01" />
</div>
```

Set `hover` to brighten an area of glyphs around the pointer. `hoverRadius` controls the size of that spotlight, with a soft falloff at its edge. The highlighted glyphs fade back after the pointer leaves. Use `hoverGlyphs="1"` to limit the effect to ones. All animated patterns remain still with reduced motion.

### Patterns

| Pattern  | Motion                                                         |
| -------- | -------------------------------------------------------------- |
| `random` | Scattered glyph mutations.                                     |
| `wave`   | A moving horizontal crest.                                     |
| `flame`  | A tapered, flickering flame.                                   |
| `ripple` | Concentric rings expanding outward.                            |
| `aurora` | Two flowing vertical curtains.                                 |
| `rain`   | Falling streams with fading tails and different column speeds. |

## Preview

```svelte
<script lang="ts">
  import { GlyphMatrix } from "#lib/components/magic/glyph-matrix/index.js";
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

### 1. Letters

A lowercase letter pool with an orange accent.

```svelte
<script lang="ts">
  import { GlyphMatrix } from "#lib/components/magic/glyph-matrix/index.js";
  import { mode } from "mode-watcher";
</script>

<div class="bg-background relative h-100 w-full overflow-hidden rounded-lg">
  <GlyphMatrix
    glyphs="svelte"
    cellSize={16}
    mutationRate={0.04}
    interval={40}
    fadeBottom={0.8}
    color={mode.current === "dark" ? "#FF4000" : "rgb(255, 21, 0)"}
    boost={1.25}
  />
</div>
```

### 2. Cell Highlight

A soft pointer spotlight brightens nearby blue glyphs and leaves a fading trail.

```svelte
<script lang="ts">
  import { GlyphMatrix } from "#lib/components/magic/glyph-matrix/index.js";
  import { mode } from "mode-watcher";
</script>

<div class="bg-background relative h-100 w-full overflow-hidden rounded-lg">
  <GlyphMatrix
    glyphs=".:+*"
    cellSize={14}
    fadeBottom={0.2}
    boost={1}
    hover
    color={mode.current === "dark"
      ? "oklch(0.72 0.1 230)"
      : "oklch(0.48 0.09 230)"}
    hoverColor={mode.current === "dark"
      ? "oklch(0.86 0.08 230)"
      : "oklch(0.4 0.08 230)"}
  />
</div>
```

### 3. Binary Focus

A simple emerald matrix of shifting ones and zeros.

```svelte
<script lang="ts">
  import { GlyphMatrix } from "#lib/components/magic/glyph-matrix/index.js";
  import { mode } from "mode-watcher";
</script>

<div class="bg-background relative h-100 w-full overflow-hidden rounded-lg">
  <GlyphMatrix
    glyphs="01"
    cellSize={14}
    fadeBottom={0.2}
    boost={1}
    color={mode.current === "dark"
      ? "oklch(0.72 0.13 160)"
      : "oklch(0.45 0.08 160)"}
  />
</div>
```

### 4. Wave Glyphs

An aqua-blue wave with stronger light-mode contrast and a compact pointer spotlight.

```svelte
<script lang="ts">
  import { GlyphMatrix } from "#lib/components/magic/glyph-matrix/index.js";
  import { mode } from "mode-watcher";
</script>

<div class="bg-background relative h-100 w-full overflow-hidden rounded-lg">
  <GlyphMatrix
    glyphs="~·:+"
    pattern="wave"
    cellSize={14}
    mutationRate={0.015}
    interval={160}
    fadeBottom={0}
    boost={1}
    hover
    hoverRadius={60}
    color={mode.current === "dark"
      ? "oklch(0.8 0.12 215)"
      : "oklch(0.48 0.08 215)"}
    hoverColor={mode.current === "dark"
      ? "oklch(0.88 0.08 215)"
      : "oklch(0.4 0.07 215)"}
  />
</div>
```

### 5. Flame Glyphs

A taller orange-red flame with saturated colors and a compact pointer spotlight.

```svelte
<script lang="ts">
  import { GlyphMatrix } from "#lib/components/magic/glyph-matrix/index.js";
  import { mode } from "mode-watcher";
</script>

<div class="bg-background relative h-120 w-full overflow-hidden rounded-lg">
  <GlyphMatrix
    glyphs="·:+*"
    pattern="flame"
    cellSize={14}
    mutationRate={0.015}
    interval={160}
    fadeBottom={0}
    boost={1}
    hover
    hoverRadius={60}
    color={mode.current === "dark"
      ? "oklch(0.7 0.19 35)"
      : "oklch(0.55 0.19 35)"}
    hoverColor={mode.current === "dark"
      ? "oklch(0.76 0.13 35)"
      : "oklch(0.45 0.14 35)"}
  />
</div>
```

### 6. Ripple Glyphs

Concentric cobalt rings expand outward across the matrix.

```svelte
<script lang="ts">
  import { GlyphMatrix } from "#lib/components/magic/glyph-matrix/index.js";
  import { mode } from "mode-watcher";
</script>

<div class="bg-background relative h-100 w-full overflow-hidden rounded-lg">
  <GlyphMatrix
    glyphs="·:+*"
    pattern="ripple"
    cellSize={14}
    mutationRate={0.015}
    interval={160}
    fadeBottom={0}
    boost={1}
    color={mode.current === "dark"
      ? "oklch(0.76 0.12 265)"
      : "oklch(0.5 0.23 265)"}
  />
</div>
```

### 7. Aurora Glyphs

Emerald curtains drift across the matrix.

```svelte
<script lang="ts">
  import { GlyphMatrix } from "#lib/components/magic/glyph-matrix/index.js";
  import { mode } from "mode-watcher";
</script>

<div class="bg-background relative h-100 w-full overflow-hidden rounded-lg">
  <GlyphMatrix
    glyphs="·:|+"
    pattern="aurora"
    cellSize={14}
    mutationRate={0.015}
    interval={160}
    fadeBottom={0}
    boost={1}
    color={mode.current === "dark"
      ? "oklch(0.8 0.16 160)"
      : "oklch(0.46 0.1 160)"}
  />
</div>
```

### 8. Rain Glyphs

Magenta glyph streams fall at different speeds with fading vertical trails.

```svelte
<script lang="ts">
  import { GlyphMatrix } from "#lib/components/magic/glyph-matrix/index.js";
  import { mode } from "mode-watcher";
</script>

<div class="bg-background relative h-100 w-full overflow-hidden rounded-lg">
  <GlyphMatrix
    glyphs="01:|"
    pattern="rain"
    cellSize={14}
    mutationRate={0.015}
    interval={160}
    fadeBottom={0}
    boost={1}
    color={mode.current === "dark"
      ? "oklch(0.78 0.17 340)"
      : "oklch(0.5 0.19 340)"}
  />
</div>
```

## Props

A canvas-based glyph animation that renders a shifting matrix of characters.

| Prop           | Type                                                              | Default                  | Description                                                                                |
| -------------- | ----------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------ |
| `glyphs`       | `string`                                                          | `"01·•+*/\<>="`          | Characters to randomly pick from.                                                          |
| `cellSize`     | `number`                                                          | `14`                     | Cell size in pixels, which also controls the font size.                                    |
| `mutationRate` | `number`                                                          | `0.04`                   | Probability from 0 to 1 that a cell mutates on each tick.                                  |
| `interval`     | `number`                                                          | `90`                     | Tick interval in milliseconds.                                                             |
| `fadeBottom`   | `number`                                                          | `0.6`                    | Fade amount toward the bottom of the canvas.                                               |
| `color`        | `string`                                                          | `"#6B7280"`              | Glyph color. Pass a theme-aware CSS color value from the consumer.                         |
| `boost`        | `number`                                                          | `1.2`                    | Brightness multiplier for the glyph color. Values above 1 make the matrix brighter.        |
| `class`        | `string`                                                          | `""`                     | Additional CSS classes applied to the canvas.                                              |
| `style`        | `string`                                                          | `undefined`              | Inline styles forwarded to the canvas element.                                             |
| `pattern`      | `"random" \| "wave" \| "flame" \| "ripple" \| "aurora" \| "rain"` | `"random"`               | Ambient opacity pattern. Animated patterns remain still with reduced motion.               |
| `hover`        | `boolean`                                                         | `false`                  | Enable a soft pointer spotlight across nearby glyphs, fading out after the pointer leaves. |
| `hoverColor`   | `string`                                                          | `"oklch(0.85 0.12 160)"` | Highlight color for glyphs inside the pointer spotlight.                                   |
| `hoverRadius`  | `number`                                                          | `70`                     | Spotlight radius in CSS pixels with a soft falloff toward its edge.                        |
| `hoverGlyphs`  | `string`                                                          | `undefined`              | Restrict hover highlights to these characters. Omit to highlight every glyph.              |
