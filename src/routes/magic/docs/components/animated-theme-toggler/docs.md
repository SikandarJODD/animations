# Theme Toggler

An Animated theme toggler component, fully customizable using Tailwind CSS.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-theme-toggler.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-theme-toggler.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-theme-toggler.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-theme-toggler.json
```

## Preview

```svelte
<script lang="ts">
	import { AnimatedThemeToggler } from "$lib/components/magic/animated-theme-toggler";
</script>

<AnimatedThemeToggler />
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
	import { AnimatedThemeToggler } from "$lib/components/magic/animated-theme-toggler";
</script>

<AnimatedThemeToggler />
```

## Usage

Import `AnimatedThemeToggler` from `$lib/components/magic/animated-theme-toggler` and pass the props you need for your use case.

If the component depends on global CSS, add the following styles:

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}
```

## Props

A component for smooth theme switching with circular reveal animation.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | `""` | Additional CSS classes to apply |
| `duration` | `number` | `400` | Duration of the animation in milliseconds |
