# Ripple Button

An animated button with ripple useful for user engagement.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/ripple-button.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/ripple-button.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/ripple-button.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/ripple-button.json
```

Add the animation to your global CSS:

```css
@theme inline {
  --animate-rippling: rippling var(--duration) ease-out;

  @keyframes rippling {
    0% {
      opacity: 1;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
}
```

## Usage

```svelte
<script lang="ts">
  import { RippleButton } from "#lib/components/magic/ripple-button/index.js";
</script>

<RippleButton>Click me</RippleButton>
```

## Preview

```svelte
<script lang="ts">
  import { RippleButton } from "#lib/components/magic/ripple-button/index.ts";
</script>

<RippleButton rippleColor="#ADD8E6">Click me</RippleButton>
```

## Examples

### 1. Tinted Buttons

Emerald and orange buttons with faint translucent fills and light text in dark mode.

```svelte
<script lang="ts">
  import { RippleButton } from "#lib/components/magic/ripple-button/index.js";
</script>

<div class="flex flex-wrap items-center justify-center gap-4">
  <RippleButton
    type="button"
    rippleColor="oklch(0.765 0.177 163.223 / 0.5)"
    class="border-emerald-300 bg-emerald-200 text-emerald-900 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200"
  >
    Save changes
  </RippleButton>
  <RippleButton
    type="button"
    rippleColor="oklch(0.75 0.183 55.934 / 0.5)"
    class="border-orange-300 bg-orange-200 text-orange-900 dark:border-orange-400/20 dark:bg-orange-400/10 dark:text-orange-200"
  >
    Review changes
  </RippleButton>
</div>
```

### 2. Button Sizes

Compact, default, and large buttons using padding and font-size utilities.

```svelte
<script lang="ts">
  import { RippleButton } from "#lib/components/magic/ripple-button/index.js";
</script>

<div class="flex flex-wrap items-center justify-center gap-4">
  <RippleButton type="button" rippleColor="#a3a3a3" class="px-3 py-1.5 text-sm"
    >Small</RippleButton
  >
  <RippleButton type="button" rippleColor="#a3a3a3" class="px-4 py-2 text-base"
    >Medium</RippleButton
  >
  <RippleButton type="button" rippleColor="#a3a3a3" class="px-6 py-3 text-lg"
    >Large</RippleButton
  >
</div>
```

## Props

A component for Ripple Button.

| Prop          | Type      | Default     | Description                     |
| ------------- | --------- | ----------- | ------------------------------- |
| `class`       | `string`  | `""`        | Additional CSS classes to apply |
| `rippleColor` | `string`  | `"#ffffff"` | Color of the ripple effect      |
| `duration`    | `string`  | `"600ms"`   | Duration of the ripple effect   |
| `children`    | `Snippet` | `required`  | The content of the button       |
