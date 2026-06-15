# Hexagon Pattern

A background hexagon pattern made with SVGs, fully customizable using Tailwind CSS.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/hexagon-pattern.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/hexagon-pattern.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/hexagon-pattern.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/hexagon-pattern.json
```

## Preview

```svelte
<script>
	import { HexagonPattern } from "$lib/components/magic/hexagon-pattern";
	import { cn } from "$lib/utils";
</script>

<div
	class="bg-background relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border"
>
	<HexagonPattern
		hexagons={[
			[1, 1],
			[4, 4],
			[2, 2],
			[3, 4],
			[5, 4],
			[8, 2],
			[6, 3],
			[8, 5],
			[10, 10],
		]}
		class={cn(
			"mask-[radial-gradient(420px_circle_at_center,white,transparent)]",
			"inset-0 skew-y-6"
		)}
	/>
</div>
```

## Examples

### 1. Linear Gradient Example

```svelte
<script lang="ts">
	import { HexagonPattern } from "$lib/components/magic/hexagon-pattern";
	import { cn } from "$lib/utils";
</script>

<div
	class="bg-background relative flex h-125 w-full items-center justify-center overflow-hidden rounded-lg border p-20"
>
	<HexagonPattern
		radius={40}
		x={-1}
		y={-1}
		className={cn(
			"mask-[linear-gradient(to_bottom_right,white,transparent,transparent)]"
		)}
	/>
</div>
```

### 2. Spacing Example

```svelte
<script>
	import { HexagonPattern } from "$lib/components/magic/hexagon-pattern";
</script>

<div
	class="bg-background relative flex h-125 w-full items-center justify-center overflow-hidden rounded-lg border p-20"
>
	<HexagonPattern gap={20} radius={40} x={-1} y={-1} />
</div>
```

### 3. Dashed Stroke Example

```svelte
<script>
	import { HexagonPattern } from "$lib/components/magic/hexagon-pattern";
</script>

<div
	class="bg-background relative flex h-125 w-full items-center justify-center overflow-hidden rounded-lg border p-20"
>
	<HexagonPattern radius={40} x={-1} y={-1} strokeDasharray="4 2" />
</div>
```

## Usage

Import `HexagonPattern` from `$lib/components/magic/hexagon-pattern` and pass the props you need for your use case.

## Props

An SVG pattern component that renders repeating hexagons with configurable spacing, orientation, stroke style, and highlighted cells.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `radius` | `number` | `40` | Radius of each hexagon in the generated pattern. |
| `gap` | `number` | `0` | Extra spacing inserted between neighboring hexagons. |
| `x` | `number` | `-1` | Horizontal offset for the SVG pattern origin. |
| `y` | `number` | `-1` | Vertical offset for the SVG pattern origin. |
| `direction` | `"horizontal" \| "vertical"` | `"horizontal"` | Controls whether the hexagons use a flat-top or pointy-top orientation. |
| `strokeDasharray` | `string` | `"0"` | SVG dash pattern applied to the hexagon outlines. Use values like `4 2` for dashed strokes. |
| `hexagons` | `Array<[col: number, row: number]>` | `undefined` | Specific grid cells to fill on top of the repeating pattern. |
| `class` | `string` | `""` | Additional classes merged onto the root SVG element. |
