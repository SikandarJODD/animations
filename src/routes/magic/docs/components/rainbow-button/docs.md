# Rainbow Button

An animated button with a rainbow effect.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/rainbow-button.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/rainbow-button.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/rainbow-button.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/rainbow-button.json
```

## Preview

```svelte
<script lang="ts">
	import { RainbowButton } from "$lib/components/magic/rainbow-button";
</script>

<RainbowButton>Join Affiliate Program</RainbowButton>
```

## Examples

### 1. Outline Variant

```svelte
<script>
	import { RainbowButton } from "$lib/components/magic/rainbow-button";
</script>

<RainbowButton variant="outline">Get Unlimited Access</RainbowButton>
```

## Usage

Import `RainbowButton` from `$lib/components/magic/rainbow-button` and pass the props you need for your use case.

If the component depends on global CSS, add the following styles:

```css
@theme inline {
  --animate-rainbow: rainbow var(--speed, 2s) infinite linear;

  @keyframes rainbow {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 200%;
    }
  }
}
```

## Props

No documented props.
