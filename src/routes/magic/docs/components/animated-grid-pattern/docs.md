# Animated Grid Pattern

An animated grid pattern component that creates a dynamic background with moving squares.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-grid-pattern.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-grid-pattern.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-grid-pattern.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-grid-pattern.json
```

## Preview

```svelte
<script lang="ts">
	import { AnimatedGridPattern } from "$lib/components/magic/animated-grid-pattern";
	import { cn } from "$lib/utils";
</script>

<div
	class="bg-background relative flex h-125 w-70 items-center justify-center overflow-hidden rounded-lg border md:min-w-2xl md:p-20"
>
	<AnimatedGridPattern
		numSquares={30}
		maxOpacity={0.1}
		duration={3}
		repeatDelay={1}
		class={cn(
			"mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
			"inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
		)}
	/>
</div>
```

## Examples

### 1. Default Animated Grid

```svelte
<script lang="ts">
	import { AnimatedGridPattern } from "$lib/components/magic/animated-grid-pattern";
	import { cn } from "$lib/utils";
</script>

<div
	class="bg-background relative flex h-125 w-70 items-center justify-center overflow-hidden rounded-lg border md:min-w-2xl md:p-20"
>
	<AnimatedGridPattern
		numSquares={30}
		maxOpacity={0.1}
		duration={3}
		repeatDelay={1}
		class={cn(
			"mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
			"inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
		)}
	/>
</div>
```

## Usage

Place `AnimatedGridPattern` inside a relatively positioned container and use standard CSS classes to size, mask, and position it. The animation behavior is controlled by `numSquares`, `maxOpacity`, `duration`, and `repeatDelay`.

```svelte
<script lang="ts">
	import { AnimatedGridPattern } from "$lib/components/magic/animated-grid-pattern";
</script>

<div class="relative h-64 overflow-hidden rounded-lg border">
	<AnimatedGridPattern class="absolute inset-0" />
</div>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `width` | `number` | `40` | Width of each grid square |
| `height` | `number` | `40` | Height of each grid square |
| `x` | `number` | `-1` | X offset for the pattern |
| `y` | `number` | `-1` | Y offset for the pattern |
| `strokeDasharray` | `number` | `0` | Dash array for the grid lines |
| `numSquares` | `number` | `50` | Number of animated squares |
| `maxOpacity` | `number` | `0.5` | Maximum opacity for animated squares |
| `duration` | `number` | `4` | Animation duration in seconds |
| `repeatDelay` | `number` | `0.5` | Delay between animation repeats |
| `class` | `string` | `""` | Additional CSS classes to apply |
