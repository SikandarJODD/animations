# Interactive Hover Button

A visually engaging button component that responds to hover with dynamic transitions, adapting smoothly between light and dark modes for enhanced user interactivity.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/interactive-hover-button.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/interactive-hover-button.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/interactive-hover-button.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/interactive-hover-button.json
```

## Usage

```svelte
<script lang="ts">
  import { InteractiveHoverButton } from "#lib/components/magic/interactive-hover-button/index.js";
</script>

<InteractiveHoverButton>Hover me</InteractiveHoverButton>
```

## Preview

```svelte
<script lang="ts">
  import { InteractiveHoverButton } from "#lib/components/magic/interactive-hover-button/index.ts";
</script>

<InteractiveHoverButton>Hover Me</InteractiveHoverButton>
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
  import { InteractiveHoverButton } from "#lib/components/magic/interactive-hover-button/index.ts";
</script>

<InteractiveHoverButton>Hover Me</InteractiveHoverButton>
```

## Props

A component for Interactive Hover Button.

| Prop       | Type      | Default    | Description                              |
| ---------- | --------- | ---------- | ---------------------------------------- |
| `class`    | `string`  | `""`       | Additional CSS classes to apply          |
| `children` | `Snippet` | `required` | The content to display inside the button |
