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

Set `hover` to enable cell highlights. Use `hoverGlyphs` to restrict which characters respond; for example, `hoverGlyphs="1"` highlights ones while zeros keep their base color.

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

### 1. letters

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

### 2. cell highlight

Highlight the cell under the pointer without changing the other glyphs.

```svelte
<script lang="ts">
  import { GlyphMatrix } from "#lib/components/magic/glyph-matrix/index.js";
  import { mode } from "mode-watcher";
</script>

<figure class="w-full max-w-lg">
  <div class="bg-background h-64 overflow-hidden rounded-lg border">
    <GlyphMatrix
      glyphs=".:+*"
      cellSize={24}
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

### 3. binary focus

Only the digit 1 responds to hover; the digit 0 keeps its base color.

```svelte
<script lang="ts">
  import { GlyphMatrix } from "#lib/components/magic/glyph-matrix/index.js";
  import { mode } from "mode-watcher";
</script>

<figure class="w-full max-w-lg">
  <div class="bg-background h-64 overflow-hidden rounded-lg border">
    <GlyphMatrix
      glyphs="01"
      cellSize={24}
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

### 4. operator grid

Apply an orange hover accent only to plus and equals signs.

```svelte
<script lang="ts">
  import { GlyphMatrix } from "#lib/components/magic/glyph-matrix/index.js";
  import { mode } from "mode-watcher";
</script>

<figure class="w-full max-w-lg">
  <div class="bg-background h-64 overflow-hidden rounded-lg border">
    <GlyphMatrix
      glyphs="+−×÷="
      cellSize={26}
      hoverGlyphs="+="
      fadeBottom={0.2}
      boost={1}
      hover
      color={mode.current === "dark"
        ? "oklch(0.74 0.15 55)"
        : "oklch(0.48 0.1 55)"}
      hoverColor={mode.current === "dark"
        ? "oklch(0.85 0.09 55)"
        : "oklch(0.4 0.09 55)"}
    />
  </div>
  <figcaption class="text-muted-foreground mt-3 text-xs">
    hover + or =
  </figcaption>
</figure>
```

### 5. quiet background

A slower matrix with larger cells and a rose hover accent.

```svelte
<script lang="ts">
  import { GlyphMatrix } from "#lib/components/magic/glyph-matrix/index.js";
  import { mode } from "mode-watcher";
</script>

<figure class="w-full max-w-lg">
  <div class="bg-background h-64 overflow-hidden rounded-lg border">
    <GlyphMatrix
      glyphs="·:+"
      cellSize={28}
      mutationRate={0.01}
      interval={300}
      fadeBottom={0.5}
      boost={1}
      hover
      color={mode.current === "dark"
        ? "oklch(0.72 0.12 10)"
        : "oklch(0.48 0.1 10)"}
      hoverColor={mode.current === "dark"
        ? "oklch(0.85 0.08 10)"
        : "oklch(0.4 0.09 10)"}
    />
  </div>
  <figcaption class="text-muted-foreground mt-3 text-xs">
    hover to inspect a cell
  </figcaption>
</figure>
```

## Props

A canvas-based glyph animation that renders a shifting matrix of characters.

| Prop           | Type      | Default                  | Description                                                                                  |
| -------------- | --------- | ------------------------ | -------------------------------------------------------------------------------------------- |
| `glyphs`       | `string`  | `"01·•+*/\<>="`          | Characters to randomly pick from.                                                            |
| `cellSize`     | `number`  | `14`                     | Cell size in pixels, which also controls the font size.                                      |
| `mutationRate` | `number`  | `0.04`                   | Probability from 0 to 1 that a cell mutates on each tick.                                    |
| `interval`     | `number`  | `90`                     | Tick interval in milliseconds.                                                               |
| `fadeBottom`   | `number`  | `0.6`                    | Fade amount toward the bottom of the canvas.                                                 |
| `color`        | `string`  | `"#6B7280"`              | Glyph color. Pass a theme-aware CSS color value from the consumer.                           |
| `boost`        | `number`  | `1.2`                    | Brightness multiplier for the glyph color. Values above 1 make the matrix brighter.          |
| `class`        | `string`  | `""`                     | Additional CSS classes applied to the canvas.                                                |
| `style`        | `string`  | `undefined`              | Inline styles forwarded to the canvas element.                                               |
| `hover`        | `boolean` | `false`                  | Enable per-cell pointer highlights. Hovered cells keep their glyph until the pointer leaves. |
| `hoverColor`   | `string`  | `"oklch(0.85 0.12 160)"` | Highlight color for the glyph and its faint cell background.                                 |
| `hoverGlyphs`  | `string`  | `undefined`              | Restrict hover highlights to these characters. Omit to highlight every glyph.                |
