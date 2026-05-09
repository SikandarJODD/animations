# Pop Button

A button with a 3D pop effect and press animation, available in multiple color variants and sizes.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/pop-button.json
```

## Usage

```svelte
<script lang="ts">
  import { PopButton } from "$lib/components/spell/pop-button";
</script>

<PopButton>Click me</PopButton>
```

## Color Variants

Supports all Tailwind colors as the `color` prop.

```svelte
<PopButton color="blue">Blue</PopButton>
<PopButton color="purple">Purple</PopButton>
<PopButton color="red">Red</PopButton>
<PopButton color="green">Green</PopButton>
```

## Sizes

Three size variants are available.

```svelte
<PopButton size="sm">Small</PopButton>
<PopButton size="default">Default</PopButton>
<PopButton size="lg">Large</PopButton>
```

## Props

| Prop       | Type                                                                                                                                                      | Default       | Description                                  |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | -------------------------------------------- |
| `children` | `Snippet`                                                                                                                                                 | required      | The content to display inside the button.    |
| `color`    | `"default" \| "blue" \| "purple" \| "pink" \| "red" \| "orange" \| "yellow" \| "green" \| "teal" \| "cyan" \| "indigo" \| "violet" \| "rose" \| ...` | `"default"`   | Button color — supports all Tailwind colors. |
| `size`     | `"sm" \| "default" \| "lg"`                                                                                                                               | `"default"`   | Button size variant.                         |
| `class`    | `string \| undefined`                                                                                                                                     | `undefined`   | Additional CSS classes to apply.             |
