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

Set `hover` to brighten an area of glyphs around the pointer. `hoverRadius` controls the size of that spotlight, with a soft falloff at its edge. The highlighted glyphs fade back after the pointer leaves. Use `hoverGlyphs="1"` to limit the effect to ones. Wave and flame patterns remain still with reduced motion.

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

<figure class="w-full max-w-lg">
  <div class="bg-background h-64 overflow-hidden rounded-lg border">
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
  <figcaption class="text-muted-foreground mt-3 text-xs">
    hover any glyph
  </figcaption>
</figure>
```

### 3. Binary Focus

Nearby ones brighten around the pointer while zeros keep their base color.

```svelte
<script lang="ts">
  import { GlyphMatrix } from "#lib/components/magic/glyph-matrix/index.js";
  import { mode } from "mode-watcher";
</script>

<figure class="w-full max-w-lg">
  <div class="bg-background h-64 overflow-hidden rounded-lg border">
    <GlyphMatrix
      glyphs="01"
      cellSize={14}
      hoverGlyphs="1"
      fadeBottom={0.2}
      boost={1}
      hover
      color={mode.current === "dark"
        ? "oklch(0.72 0.13 160)"
        : "oklch(0.45 0.08 160)"}
      hoverColor={mode.current === "dark"
        ? "oklch(0.86 0.13 160)"
        : "oklch(0.35 0.06 160)"}
    />
  </div>
  <figcaption class="text-muted-foreground mt-3 text-xs">hover a 1</figcaption>
</figure>
```

### 4. Wave Glyphs

An aqua-blue wave with a compact spotlight that reveals nearby glyphs.

```svelte
<script lang="ts">
  import { GlyphMatrix } from "#lib/components/magic/glyph-matrix/index.js";
  import { mode } from "mode-watcher";
</script>

<figure class="w-full max-w-lg">
  <div class="bg-background h-72 overflow-hidden rounded-lg border">
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
        : "oklch(0.57 0.1 215)"}
      hoverColor={mode.current === "dark"
        ? "oklch(0.88 0.08 215)"
        : "oklch(0.47 0.08 215)"}
    />
  </div>
  <figcaption class="text-muted-foreground mt-3 text-xs">
    move across the matrix to reveal a soft trail
  </figcaption>
</figure>
```

### 5. Flame Glyphs

An orange-red flame with a compact spotlight that reveals nearby glyphs.

```svelte
<script lang="ts">
  import { GlyphMatrix } from "#lib/components/magic/glyph-matrix/index.js";
  import { mode } from "mode-watcher";
</script>

<figure class="w-full max-w-lg">
  <div class="bg-background h-72 overflow-hidden rounded-lg border">
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
        : "oklch(0.6 0.19 35)"}
      hoverColor={mode.current === "dark"
        ? "oklch(0.76 0.13 35)"
        : "oklch(0.5 0.16 35)"}
    />
  </div>
  <figcaption class="text-muted-foreground mt-3 text-xs">
    move across the matrix to reveal a soft trail
  </figcaption>
</figure>
```

## Props

A canvas-based glyph animation that renders a shifting matrix of characters.

| Prop           | Type                            | Default                  | Description                                                                                |
| -------------- | ------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------ |
| `glyphs`       | `string`                        | `"01·•+*/\<>="`          | Characters to randomly pick from.                                                          |
| `cellSize`     | `number`                        | `14`                     | Cell size in pixels, which also controls the font size.                                    |
| `mutationRate` | `number`                        | `0.04`                   | Probability from 0 to 1 that a cell mutates on each tick.                                  |
| `interval`     | `number`                        | `90`                     | Tick interval in milliseconds.                                                             |
| `fadeBottom`   | `number`                        | `0.6`                    | Fade amount toward the bottom of the canvas.                                               |
| `color`        | `string`                        | `"#6B7280"`              | Glyph color. Pass a theme-aware CSS color value from the consumer.                         |
| `boost`        | `number`                        | `1.2`                    | Brightness multiplier for the glyph color. Values above 1 make the matrix brighter.        |
| `class`        | `string`                        | `""`                     | Additional CSS classes applied to the canvas.                                              |
| `style`        | `string`                        | `undefined`              | Inline styles forwarded to the canvas element.                                             |
| `pattern`      | `"random" \| "wave" \| "flame"` | `"random"`               | Ambient opacity pattern. Wave and flame remain still with reduced motion.                  |
| `hover`        | `boolean`                       | `false`                  | Enable a soft pointer spotlight across nearby glyphs, fading out after the pointer leaves. |
| `hoverColor`   | `string`                        | `"oklch(0.85 0.12 160)"` | Highlight color for glyphs inside the pointer spotlight.                                   |
| `hoverRadius`  | `number`                        | `70`                     | Spotlight radius in CSS pixels with a soft falloff toward its edge.                        |
| `hoverGlyphs`  | `string`                        | `undefined`              | Restrict hover highlights to these characters. Omit to highlight every glyph.              |
