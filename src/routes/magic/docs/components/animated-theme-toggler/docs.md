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

Add the view transition styles to your global CSS:

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}
```

## Usage

```svelte
<script lang="ts">
  import { AnimatedThemeToggler } from "#lib/components/magic/animated-theme-toggler/index.js";
</script>

<AnimatedThemeToggler />
```

## Preview

```svelte
<script lang="ts">
  import { AnimatedThemeToggler } from "#lib/components/magic/animated-theme-toggler/index.ts";
</script>

<AnimatedThemeToggler />
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
  import { AnimatedThemeToggler } from "#lib/components/magic/animated-theme-toggler/index.ts";
</script>

<AnimatedThemeToggler />
```

## Props

A component for smooth theme switching with circular reveal animation.

| Prop       | Type     | Default | Description                               |
| ---------- | -------- | ------- | ----------------------------------------- |
| `class`    | `string` | `""`    | Additional CSS classes to apply           |
| `duration` | `number` | `400`   | Duration of the animation in milliseconds |
