# Animated Gradient Text

An animated gradient background which transitions between colors for text.

## Installation

```bash
npx shadcn-svelte@latest add https://animations.sikandarjodd.dev/r/animated-gradient-text.json
```

## Usage

```svelte
<script lang="ts">
  import AnimatedGradientText from "$lib/components/magic-ui/animated-gradient-text/animated-gradient-text.svelte";
</script>

<AnimatedGradientText>
  ✨ Introducing Magic UI
</AnimatedGradientText>
```

## Tailwind CSS Configuration

Add the following to your `layout.css` or global CSS file:

```css
@theme inline {
  --animate-gradient: gradient 8s linear infinite;

  @keyframes gradient {
    to {
      background-position: var(--bg-size, 300%) 0;
    }
  }
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `speed` | `number` | `1` | Animation speed multiplier for the gradient movement |
| `colorFrom` | `string` | `#ffaa40` | Starting color of the gradient |
| `colorTo` | `string` | `#9c40ff` | Ending color of the gradient |
| `class` | `string` | `""` | Additional CSS classes to apply |

## Examples

### Custom Speed

You can customize the animation speed using the `speed` prop:

```svelte
<script lang="ts">
  import AnimatedGradientText from "$lib/components/magic-ui/animated-gradient-text/animated-gradient-text.svelte";
</script>

<AnimatedGradientText speed={2}>
  Fast Animation
</AnimatedGradientText>

<AnimatedGradientText speed={0.5}>
  Slow Animation
</AnimatedGradientText>
```

### Custom Colors

Customize the gradient colors using `colorFrom` and `colorTo` props:

```svelte
<script lang="ts">
  import AnimatedGradientText from "$lib/components/magic-ui/animated-gradient-text/animated-gradient-text.svelte";
</script>

<AnimatedGradientText colorFrom="#00ff00" colorTo="#0000ff">
  Custom Gradient Colors
</AnimatedGradientText>
```
