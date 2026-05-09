# Shimmer Text

Text with an animated shimmer highlight that sweeps across the content on repeat.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/shimmer-text.json
```

## Usage

```svelte
<script lang="ts">
  import { ShimmerText } from "$lib/components/spell/shimmer-text";
</script>

<ShimmerText>Hello, world</ShimmerText>
```

## Color Variants

Use the `variant` prop to apply a color theme to the shimmer effect.

```svelte
<ShimmerText variant="blue">Blue shimmer</ShimmerText>
<ShimmerText variant="purple">Purple shimmer</ShimmerText>
<ShimmerText variant="rose">Rose shimmer</ShimmerText>
```

## Custom Timing

Adjust `duration`, `delay`, and `repeatDelay` to control the animation cadence.

```svelte
<ShimmerText duration={2} delay={0.5} repeatDelay={3}>Slow shimmer</ShimmerText>
```

## Props

| Prop          | Type                                                                    | Default       | Description                                           |
| ------------- | ----------------------------------------------------------------------- | ------------- | ----------------------------------------------------- |
| `children`    | `Snippet`                                                               | required      | The text content rendered with the shimmer effect.    |
| `variant`     | `"default" \| "secondary" \| "destructive" \| "red" \| "blue" \| ...`  | `"default"`   | Color variant applied to the text.                    |
| `duration`    | `number`                                                                | `1.5`         | Duration in seconds for one shimmer sweep.            |
| `delay`       | `number`                                                                | `1.5`         | Delay in seconds before the first shimmer sweep.      |
| `repeatDelay` | `number`                                                                | `1.5`         | Pause in seconds between each shimmer repetition.     |
| `class`       | `string`                                                                | `""`          | Additional CSS classes applied to the shimmer span.   |
