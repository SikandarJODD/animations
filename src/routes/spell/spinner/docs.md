# Spinner

A smooth gradient spinner built from an SVG arc, with size and speed variants for flexible loading states.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/spinner.json
```

## Usage

```svelte
<script lang="ts">
  import { Spinner } from "$lib/components/spell/spinner";
</script>

<Spinner />
```

## Sizes

Four size variants are available: `sm`, `default`, `md`, and `lg`.

```svelte
<Spinner size="sm" />
<Spinner size="default" />
<Spinner size="md" />
<Spinner size="lg" />
```

## Speed

Three speed variants control the rotation cadence.

```svelte
<Spinner speed="slow" />
<Spinner speed="normal" />
<Spinner speed="fast" />
```

## Props

| Prop    | Type                                   | Default      | Description                                    |
| ------- | -------------------------------------- | ------------ | ---------------------------------------------- |
| `size`  | `"sm" \| "default" \| "md" \| "lg"`   | `"md"`       | The size variant of the spinner.               |
| `speed` | `"slow" \| "normal" \| "fast"`         | `"normal"`   | The animation speed of the spinner.            |
| `class` | `string \| undefined`                  | `undefined`  | Additional CSS classes to apply to the spinner.|
