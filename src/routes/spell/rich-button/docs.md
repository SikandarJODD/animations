# Rich Button

A button with gradient backgrounds, text shadows, and 23 color variants.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/rich-button.json
```

## Usage

```svelte
<script lang="ts">
  import { RichButton } from "$lib/components/spell/rich-button";
</script>

<RichButton>Click me</RichButton>
```

## Color Variants

Supports all Tailwind colors via the `color` prop, each with a matching gradient and text shadow.

```svelte
<RichButton color="blue">Blue</RichButton>
<RichButton color="purple">Purple</RichButton>
<RichButton color="emerald">Emerald</RichButton>
```

## Sizes

Three size variants are available.

```svelte
<RichButton size="sm">Small</RichButton>
<RichButton size="default">Default</RichButton>
<RichButton size="lg">Large</RichButton>
```

## Props

| Prop       | Type                                                                                                                                                      | Default       | Description                                    |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------- |
| `children` | `Snippet`                                                                                                                                                 | required      | The content of the button.                     |
| `color`    | `"default" \| "blue" \| "purple" \| "pink" \| "red" \| "orange" \| "yellow" \| "green" \| "teal" \| "cyan" \| "indigo" \| "violet" \| "rose" \| ...` | `"default"`   | Button color — supports all Tailwind colors.   |
| `size`     | `"sm" \| "default" \| "lg"`                                                                                                                               | `"default"`   | Button size variant.                           |
| `class`    | `string \| undefined`                                                                                                                                     | `undefined`   | Additional CSS classes to apply.               |
