# Badge

A badge component with multiple color variants and sizes.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/badge.json
npm install tailwind-variants

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/badge.json
yarn add tailwind-variants

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/s/badge.json
pnpm add tailwind-variants

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/s/badge.json
bun add tailwind-variants
```

## Preview

```svelte
<script lang="ts">
	import { Badge } from "$lib/components/spell/badge";
</script>

<div class="flex gap-2">
	<Badge>Default</Badge>
	<Badge variant="secondary">Secondary</Badge>
	<Badge variant="outline">Outline</Badge>
	<Badge variant="destructive">Destructive</Badge>
</div>
```

## Examples

### 1. Color

```svelte
<script lang="ts">
	import { Badge } from "$lib/components/spell/badge";
</script>

<div class="flex flex-wrap gap-2">
	<Badge variant="red">Red</Badge>
	<Badge variant="blue">Blue</Badge>
	<Badge variant="green">Green</Badge>
	<Badge variant="yellow">Yellow</Badge>
	<Badge variant="purple">Purple</Badge>
	<Badge variant="pink">Pink</Badge>
	<Badge variant="orange">Orange</Badge>
	<Badge variant="cyan">Cyan</Badge>
	<Badge variant="indigo">Indigo</Badge>
	<Badge variant="violet">Violet</Badge>
	<Badge variant="rose">Rose</Badge>
	<Badge variant="amber">Amber</Badge>
	<Badge variant="lime">Lime</Badge>
	<Badge variant="emerald">Emerald</Badge>
	<Badge variant="sky">Sky</Badge>
	<Badge variant="fuchsia">Fuchsia</Badge>
</div>
```

### 2. Sizes

```svelte
<script>
	import Badge from "$lib/components/spell/badge/badge.svelte";
</script>

<div class="flex items-center gap-4">
	<Badge size="sm">Small</Badge>
	<Badge size="default">Default</Badge>
</div>
```

## Usage

Import the component and wrap the content you want it to affect. Adjust the optional props to tune the visual behavior.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `Snippet` | `required` | - |
| `href` | `string \| undefined` | `undefined` | - |
| `variant` | `"default" \| "secondary" \| "outline" \| "destructive" \| "red" \| "blue" \| "green" \| "yellow" \| "purple" \| "pink" \| "orange" \| "cyan" \| "indigo" \| "violet" \| "rose" \| "amber" \| "lime" \| "emerald" \| "sky" \| "slate" \| "fuchsia"` | `"default"` | - |
| `size` | `"default" \| "sm"` | `"default"` | - |
| `class` | `string \| undefined` | `undefined` | - |
