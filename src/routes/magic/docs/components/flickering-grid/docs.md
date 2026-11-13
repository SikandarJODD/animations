# Flickering Grid

A customizable Canvas-rendered flickering grid background with responsive sizing, color, density, and opacity controls.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/flickering-grid.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/flickering-grid.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/flickering-grid.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/flickering-grid.json
```

## Usage

```svelte
<script lang="ts">
  import { FlickeringGrid } from "#lib/components/magic/flickering-grid/index.js";
</script>

<div class="relative h-64 overflow-hidden">
  <FlickeringGrid class="absolute inset-0 size-full" />
</div>
```

## Preview

```svelte
<script lang="ts">
  import FlickeringGrid from "#lib/components/magic/flickering-grid/flickering-grid.svelte";
</script>

<div
  class="bg-background relative h-125 w-full overflow-hidden rounded-lg border md:max-w-xl"
>
  <FlickeringGrid
    class="absolute inset-0 z-0 size-full"
    squareSize={4}
    gridGap={6}
    color="#6B7280"
    maxOpacity={0.5}
    flickerChance={0.1}
    height={800}
    width={800}
  />
</div>
```

## Examples

### 1. Basic Usage

A simple flickering grid background.

```svelte
<script lang="ts">
  import { FlickeringGrid } from "#lib/components/magic/flickering-grid/index.ts";
</script>

<div
  class="bg-background relative size-150 w-full overflow-hidden rounded-lg border"
>
  <FlickeringGrid
    class="relative inset-0 z-0 mask-[radial-gradient(450px_circle_at_center,white,transparent)]"
    squareSize={4}
    gridGap={6}
    color="#60A5FA"
    maxOpacity={0.5}
    flickerChance={0.1}
    height={800}
    width={800}
  />
</div>
```

### 2. Header Backdrop

A sparse emerald grid faded away from the heading to keep the text readable.

```svelte
<script lang="ts">
  import { FlickeringGrid } from "#lib/components/magic/flickering-grid/index.js";
</script>

<header
  class="bg-background relative isolate w-full max-w-xl overflow-hidden rounded-lg border px-6 py-16 sm:px-10"
>
  <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
    <FlickeringGrid
      class="mask-[linear-gradient(to_left,black,transparent)]"
      color="#10b981"
      squareSize={3}
      gridGap={8}
      maxOpacity={0.35}
      flickerChance={0.08}
    />
  </div>
  <p class="text-muted-foreground mb-3 text-sm">Developer reference</p>
  <h2 class="text-3xl font-semibold">API documentation</h2>
</header>
```

### 3. Inset Panel

A denser amber grid confined to a panel header, leaving the content area still.

```svelte
<script lang="ts">
  import { FlickeringGrid } from "#lib/components/magic/flickering-grid/index.js";
</script>

<section
  class="bg-background w-full max-w-sm overflow-hidden rounded-lg border"
>
  <div
    class="relative h-32 border-b bg-amber-50 dark:bg-amber-950/20"
    aria-hidden="true"
  >
    <FlickeringGrid
      class="absolute inset-0"
      color="#d97706"
      squareSize={6}
      gridGap={4}
      maxOpacity={0.3}
      flickerChance={0.15}
    />
  </div>
  <div class="p-6">
    <h3 class="font-medium">Design resources</h3>
    <p class="text-muted-foreground mt-2 text-sm">
      Tokens, type scales, and component guidelines.
    </p>
  </div>
</section>
```

## Props

A component for creating a flickering grid background.

| Prop            | Type     | Default        | Description                          |
| --------------- | -------- | -------------- | ------------------------------------ |
| `class`         | `string` | `""`           | Additional CSS classes to apply      |
| `squareSize`    | `number` | `4`            | The size of each square in the grid  |
| `gridGap`       | `number` | `6`            | The gap between squares in the grid  |
| `flickerChance` | `number` | `0.3`          | The chance of each square flickering |
| `color`         | `string` | `rgb(0, 0, 0)` | The color of the squares             |
| `width`         | `number` | `-`            | The width of the grid                |
| `height`        | `number` | `-`            | The height of the grid               |
| `maxOpacity`    | `number` | `0.3`          | The maximum opacity of the squares   |
