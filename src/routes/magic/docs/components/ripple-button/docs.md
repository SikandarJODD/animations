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

## Preview

```svelte
<script lang="ts">
	import { RippleButton } from "$lib/components/magic/ripple-button";
</script>

<RippleButton rippleColor="#ADD8E6">Click me</RippleButton>
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
	import { RippleButton } from "$lib/components/magic/ripple-button";
</script>

<RippleButton rippleColor="#ADD8E6">Click me</RippleButton>
```

## Usage

Import the component and wrap the content you want it to affect. Adjust the optional props to tune the visual behavior.

If the component depends on global CSS, add the following styles:

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

## Props

A component for Ripple Button.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | `""` | Additional CSS classes to apply |
| `rippleColor` | `string` | `"#ffffff"` | Color of the ripple effect |
| `duration` | `string` | `"600ms"` | Duration of the ripple effect |
| `children` | `Snippet` | `required` | The content of the button |
