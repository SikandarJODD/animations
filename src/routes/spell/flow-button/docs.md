# Flow Button

A button with an animated dashed SVG border that flows around the edges on hover.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/flow-button.json
```

## Usage

```svelte
<script lang="ts">
  import { FlowButton } from "$lib/components/spell/flow-button";
</script>

<FlowButton>Click me</FlowButton>
```

## Sizes

Three size variants are available: `sm`, `default`, and `lg`.

```svelte
<FlowButton size="sm">Small</FlowButton>
<FlowButton size="default">Default</FlowButton>
<FlowButton size="lg">Large</FlowButton>
```

## Custom Border Color

Pass any CSS color value to `borderColor` to change the flowing dashed border.

```svelte
<FlowButton borderColor="#6366f1">Indigo border</FlowButton>
<FlowButton borderColor="oklch(70% 0.2 140)">Green border</FlowButton>
```

## Props

| Prop          | Type                          | Default                         | Description                                         |
| ------------- | ----------------------------- | ------------------------------- | --------------------------------------------------- |
| `children`    | `Snippet`                     | required                        | The content of the button.                          |
| `size`        | `"sm" \| "default" \| "lg"`   | `"default"`                     | Button size variant.                                |
| `borderColor` | `string`                      | `"var(--rotating-border-color)"` | Color of the flowing dashed border (CSS color).    |
| `class`       | `string \| undefined`         | `undefined`                     | Additional CSS classes to apply.                    |
