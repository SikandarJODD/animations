# Shimmer Button

A button with a shimmering light which travels around the perimeter.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/shimmer-button.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/shimmer-button.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/shimmer-button.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/shimmer-button.json
```

Add the animations to your global CSS:

```css
@theme inline {
  --animate-shimmer-slide: shimmer-slide var(--speed) ease-in-out infinite alternate;
  --animate-spin-around: spin-around calc(var(--speed) * 2) infinite linear;

  @keyframes shimmer-slide {
    to {
      transform: translate(calc(100cqw - 100%), 0);
    }
  }
  @keyframes spin-around {
    0% {
      transform: translateZ(0) rotate(0);
    }
    15%,
    35% {
      transform: translateZ(0) rotate(90deg);
    }
    65%,
    85% {
      transform: translateZ(0) rotate(270deg);
    }
    100% {
      transform: translateZ(0) rotate(360deg);
    }
  }
}
```

## Usage

```svelte
<script lang="ts">
  import { ShimmerButton } from "#lib/components/magic/shimmer-button/index.js";
</script>

<ShimmerButton>Get started</ShimmerButton>
```

## Preview

```svelte
<script lang="ts">
  import { ShimmerButton } from "#lib/components/magic/shimmer-button/index.ts";
</script>

<ShimmerButton class="shadow-2xl">
  <span
    class="text-center text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-white lg:text-lg dark:from-white dark:to-slate-900/10"
  >
    Shimmer Button
  </span>
</ShimmerButton>
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
  import { ShimmerButton } from "#lib/components/magic/shimmer-button/index.ts";
</script>

<ShimmerButton class="shadow-2xl">
  <span
    class="text-center text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-white lg:text-lg dark:from-white dark:to-slate-900/10"
  >
    Shimmer Button
  </span>
</ShimmerButton>
```

## Props

A component for Shimmer Button.

| Prop              | Type     | Default              | Description                       |
| ----------------- | -------- | -------------------- | --------------------------------- |
| `class`           | `string` | `""`                 | Additional CSS classes to apply   |
| `shimmerColor`    | `string` | `"#ffffff"`          | Color of the shimmer effect       |
| `shimmerSize`     | `string` | `"0.05em"`           | Size of the shimmer effect        |
| `shimmerDuration` | `string` | `"3s"`               | Duration of the shimmer animation |
| `borderRadius`    | `string` | `"100px"`            | Border radius of the button       |
| `background`      | `string` | `"rgba(0, 0, 0, 1)"` | Background color of the button    |
