# Shiny Button

A description for Shiny Button component.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/shiny-button.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/shiny-button.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/shiny-button.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/shiny-button.json
```

## Preview

```svelte
<script lang="ts">
	import { ShinyButton } from "$lib/components/magic/shiny-button";
</script>

<ShinyButton>Shiny Button</ShinyButton>
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
	import { ShinyButton } from "$lib/components/magic/shiny-button";
</script>

<ShinyButton>Shiny Button</ShinyButton>
```

## Usage

Import `ShinyButton` from `$lib/components/magic/shiny-button` and pass the props you need for your use case.

## Props

A component for Shiny Button.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | `""` | Additional CSS classes to apply |
