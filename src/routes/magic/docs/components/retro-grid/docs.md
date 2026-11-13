# Retro Grid

A description for Retro Grid component.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/retro-grid.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/retro-grid.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/retro-grid.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/retro-grid.json
```

Add the animation to your global CSS:

```css
@theme inline {
  --animate-grid: grid 15s linear infinite;

  @keyframes grid {
    0% {
      transform: translateY(-50%);
    }
    100% {
      transform: translateY(0);
    }
  }
}
```

## Usage

```svelte
<script lang="ts">
  import { RetroGrid } from "#lib/components/magic/retro-grid/index.js";
</script>

<div class="relative h-64 overflow-hidden">
  <RetroGrid />
</div>
```

## Preview

```svelte
<script>
  import { RetroGrid } from "#lib/components/magic/retro-grid/index.ts";
</script>

<div
  class="bg-background relative flex h-125 w-full flex-col items-center justify-center overflow-hidden rounded-lg border"
>
  <span
    class="pointer-events-none z-10 bg-linear-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl leading-none font-bold tracking-tighter whitespace-pre-wrap text-transparent"
  >
    Retro Grid
  </span>
  <RetroGrid />
</div>
```

## Examples

### 1. Default Example

```svelte
<script>
  import { RetroGrid } from "#lib/components/magic/retro-grid/index.ts";
</script>

<div
  class="bg-background relative flex h-125 w-full flex-col items-center justify-center overflow-hidden rounded-lg border"
>
  <span
    class="pointer-events-none z-10 bg-linear-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl leading-none font-bold tracking-tighter whitespace-pre-wrap text-transparent"
  >
    Retro Grid
  </span>
  <RetroGrid />
</div>
```

## Props

A component for Retro Grid.

| Prop             | Type     | Default  | Description                           |
| ---------------- | -------- | -------- | ------------------------------------- |
| `class`          | `string` | `""`     | Additional CSS classes to apply       |
| `angle`          | `number` | `65`     | Rotation angle of the grid in degrees |
| `cellSize`       | `number` | `60`     | Size of each grid cell in pixels      |
| `opacity`        | `number` | `0.5`    | Opacity of the grid lines (0 to 1)    |
| `lightLineColor` | `string` | `"gray"` | Color of the light grid lines         |
| `darkLineColor`  | `string` | `"gray"` | Color of the dark grid lines          |
