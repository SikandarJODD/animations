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

### 1. Default Example

```svelte
<script lang="ts">
  import { RippleButton } from "#lib/components/magic/ripple-button/index.ts";
</script>

<RippleButton rippleColor="#ADD8E6">Click me</RippleButton>
```

## Props

A component for Ripple Button.

| Prop          | Type      | Default     | Description                     |
| ------------- | --------- | ----------- | ------------------------------- |
| `class`       | `string`  | `""`        | Additional CSS classes to apply |
| `rippleColor` | `string`  | `"#ffffff"` | Color of the ripple effect      |
| `duration`    | `string`  | `"600ms"`   | Duration of the ripple effect   |
| `children`    | `Snippet` | `required`  | The content of the button       |
