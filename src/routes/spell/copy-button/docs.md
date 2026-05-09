# Copy Button

A copy-to-clipboard button with an animated icon transition between copy and check states.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/copy-button.json
```

## Usage

```svelte
<script lang="ts">
  import { CopyButton } from "$lib/components/spell/copy-button";
</script>

<CopyButton text="Text to copy" />
```

## Sizes

Three size variants are available: `sm`, `default`, and `lg`.

```svelte
<CopyButton text="hello" size="sm" />
<CopyButton text="hello" size="default" />
<CopyButton text="hello" size="lg" />
```

## Props

| Prop    | Type                          | Default       | Description                               |
| ------- | ----------------------------- | ------------- | ----------------------------------------- |
| `text`  | `string \| undefined`         | `undefined`   | The text content to copy to clipboard.    |
| `size`  | `"sm" \| "default" \| "lg"`   | `"default"`   | Button size variant.                      |
| `class` | `string \| undefined`         | `undefined`   | Additional CSS classes to apply.          |
