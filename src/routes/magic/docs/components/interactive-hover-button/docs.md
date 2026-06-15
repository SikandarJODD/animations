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

## Preview

```svelte
<script lang="ts">
	import { InteractiveHoverButton } from "$lib/components/magic/interactive-hover-button";
</script>

<InteractiveHoverButton>Hover Me</InteractiveHoverButton>
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
	import { InteractiveHoverButton } from "$lib/components/magic/interactive-hover-button";
</script>

<InteractiveHoverButton>Hover Me</InteractiveHoverButton>
```

## Usage

Import the component and wrap the content you want it to affect. Adjust the optional props to tune the visual behavior.

## Props

A component for Interactive Hover Button.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | `""` | Additional CSS classes to apply |
| `children` | `Snippet` | `required` | The content to display inside the button |
