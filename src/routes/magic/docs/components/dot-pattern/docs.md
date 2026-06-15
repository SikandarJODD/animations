# Dot Pattern

A customizable dot pattern background component with optional glow animations and mask effects.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/dot-pattern.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/dot-pattern.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/dot-pattern.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/dot-pattern.json
```

## Preview

```svelte
<script lang="ts">
	import { DotPattern } from "$lib/components/magic/dot-pattern";
	import { cn } from "$lib/utils";
</script>

<div
	class="bg-background relative flex h-125 w-70 flex-col items-center justify-center overflow-hidden rounded-lg border md:min-w-2xl"
>
	<DotPattern class={cn("mask-[radial-gradient(300px_circle_at_center,white,transparent)]")} />
</div>
```

## Examples

### 1. Linear Gradient Mask

```svelte
<script lang="ts">
	import { DotPattern } from "$lib/components/magic/dot-pattern";
	import { cn } from "$lib/utils";
</script>

<div
	class="bg-background relative flex h-80 w-70 items-center justify-center overflow-hidden rounded-lg border p-20 md:min-w-2xl"
>
	<DotPattern
		width={20}
		height={20}
		cx={1}
		cy={1}
		cr={1}
		class={cn("[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]")}
	/>
</div>
```

### 2. Glow Effect

```svelte
<script lang="ts">
	import { DotPattern } from "$lib/components/magic/dot-pattern";
	import { cn } from "$lib/utils";
</script>

<div
	class="relative flex h-125 w-70 flex-col items-center justify-center overflow-hidden md:min-w-2xl"
>
	<DotPattern
		glow={true}
		class={cn("mask-[radial-gradient(300px_circle_at_center,white,transparent)]")}
	/>
</div>
```

## Usage

Import `DotPattern` from `$lib/components/magic/dot-pattern` and pass the props you need for your use case.

## Props

A customizable dot pattern background with optional animations.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `width` | `number` | `16` | Horizontal spacing between dots |
| `height` | `number` | `16` | Vertical spacing between dots |
| `x` | `number` | `0` | X-offset of the entire pattern |
| `y` | `number` | `0` | Y-offset of the entire pattern |
| `cx` | `number` | `1` | X-offset of individual dots |
| `cy` | `number` | `1` | Y-offset of individual dots |
| `cr` | `number` | `1` | Radius of each dot |
| `glow` | `boolean` | `false` | Enable glowing animation effect |
| `class` | `string` | `""` | Additional CSS classes |
