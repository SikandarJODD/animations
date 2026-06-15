# Grid Pattern

A background grid pattern made with SVGs, fully customizable using Tailwind CSS.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/grid-pattern.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/grid-pattern.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/grid-pattern.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/grid-pattern.json
```

## Preview

```svelte
<script lang="ts">
	import { GridPattern } from "$lib/components/magic/grid-pattern";
	import { cn } from "$lib/utils";
</script>

<div
	class="bg-background relative flex h-125 w-full flex-col items-center justify-center overflow-hidden rounded-lg border"
>
	<GridPattern
		squares={[
			[4, 4],
			[5, 1],
			[8, 2],
			[5, 3],
			[5, 5],
			[10, 10],
			[12, 15],
			[15, 10],
			[10, 15],
			[15, 10],
			[10, 15],
			[15, 10],
		]}
		class={cn(
			"[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
			"inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
		)}
	/>
</div>
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
	import { GridPattern } from "$lib/components/magic/grid-pattern";
	import { cn } from "$lib/utils";
</script>

<div
	class="bg-background relative flex h-125 w-full flex-col items-center justify-center overflow-hidden rounded-lg border"
>
	<GridPattern
		squares={[
			[4, 4],
			[5, 1],
			[8, 2],
			[5, 3],
			[5, 5],
			[10, 10],
			[12, 15],
			[15, 10],
			[10, 15],
			[15, 10],
			[10, 15],
			[15, 10],
		]}
		class={cn(
			"[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
			"inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
		)}
	/>
</div>
```

## Usage

Import `GridPattern` from `$lib/components/magic/grid-pattern` and pass the props you need for your use case.

## Props

Props for the GridPattern component

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `width` | `number` | `40` | The width of each grid cell |
| `height` | `number` | `40` | The height of each grid cell |
| `x` | `number` | `-1` | The x-offset of the pattern |
| `y` | `number` | `-1` | The y-offset of the pattern |
| `squares` | `Array<[x: number, y: number]>` | `undefined` | Array of [x, y] coordinates for highlighted squares |
| `strokeDasharray` | `string` | `"0"` | Stroke dash array for dashed lines |
| `class` | `string` | `undefined` | Additional CSS classes |
