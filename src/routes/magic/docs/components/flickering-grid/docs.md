# Flickering Grid

A flickering grid background made with SVGs, fully customizable using Tailwind CSS.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/flickering-grid.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/flickering-grid.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/flickering-grid.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/flickering-grid.json
```

## Preview

```svelte
<script lang="ts">
	import FlickeringGrid from "$lib/components/magic/flickering-grid/flickering-grid.svelte";
</script>

<div class="bg-background relative h-125 w-full overflow-hidden rounded-lg border md:max-w-xl">
	<FlickeringGrid
		class="absolute inset-0 z-0 size-full"
		squareSize={4}
		gridGap={6}
		color="#6B7280"
		maxOpacity={0.5}
		flickerChance={0.1}
		height={800}
		width={800}
	/>
</div>
```

## Examples

### 1. Basic Usage

A simple flickering grid background.

```svelte
<script lang="ts">
	import { FlickeringGrid } from "$lib/components/magic/flickering-grid";
</script>

<div class="bg-background relative size-150 w-full overflow-hidden rounded-lg border">
	<FlickeringGrid
		class="relative inset-0 z-0 mask-[radial-gradient(450px_circle_at_center,white,transparent)]"
		squareSize={4}
		gridGap={6}
		color="#60A5FA"
		maxOpacity={0.5}
		flickerChance={0.1}
		height={800}
		width={800}
	/>
</div>
```

## Usage

Import `FlickeringGrid` from `$lib/components/magic/flickering-grid` and pass the props you need for your use case.

## Props

A component for creating a flickering grid background.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | `""` | Additional CSS classes to apply |
| `squareSize` | `number` | `4` | The size of each square in the grid |
| `gridGap` | `number` | `6` | The gap between squares in the grid |
| `flickerChance` | `number` | `0.3` | The chance of each square flickering |
| `color` | `string` | `rgb(0, 0, 0)` | The color of the squares |
| `width` | `number` | `-` | The width of the grid |
| `height` | `number` | `-` | The height of the grid |
| `maxOpacity` | `number` | `0.3` | The maximum opacity of the squares |
