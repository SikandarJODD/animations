# Hyper Text

A text animation that scrambles letters before revealing the final text.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/hyper-text.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/hyper-text.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/hyper-text.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/hyper-text.json
```

## Usage

```svelte
<script lang="ts">
  import { HyperText } from "#lib/components/magic/hyper-text/index.js";
</script>

<HyperText text="Hover me" />
```

## Preview

```svelte
<script lang="ts">
  import { HyperText } from "#lib/components/magic/hyper-text/index.ts";
</script>

<HyperText text="Hover Me!"></HyperText>
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
  import { HyperText } from "#lib/components/magic/hyper-text/index.ts";
</script>

<HyperText text="Hover Me!"></HyperText>
```

## Props

A component for Hyper Text.

| Prop             | Type                                                                     | Default                      | Description                                             |
| ---------------- | ------------------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------- |
| `text`           | `string`                                                                 | `undefined`                  | The text content to be animated                         |
| `class`          | `string`                                                                 | `""`                         | Additional CSS classes to apply                         |
| `duration`       | `number`                                                                 | `800`                        | Duration of the animation in milliseconds               |
| `delay`          | `number`                                                                 | `0`                          | Delay before animation starts in milliseconds           |
| `as`             | `"div" \| "span" \| "p" \| "h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6"` | `"div"`                      | Component to render as                                  |
| `startOnView`    | `boolean`                                                                | `false`                      | Whether to start animation when element comes into view |
| `animateOnHover` | `boolean`                                                                | `true`                       | Whether to trigger animation on hover                   |
| `characterSet`   | `string[] \| readonly string[]`                                          | `ABCDEFGHIJKLMNOPQRSTUVWXYZ` | Custom character set for scramble effect                |
