# Ripple

An animated ripple effect typically used behind elements to emphasize them.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/ripple.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/ripple.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/ripple.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/ripple.json
```

## Preview

```svelte
<script lang="ts">
	import { Ripple } from "$lib/components/magic/ripple";
</script>

<div
	class="bg-background relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border"
>
	<p
		class="z-10 text-center text-5xl font-medium tracking-tighter whitespace-pre-wrap text-white"
	>
		Ripple
	</p>
	<Ripple />
</div>
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
	import { Ripple } from "$lib/components/magic/ripple";
</script>

<div
	class="bg-background relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border"
>
	<p
		class="z-10 text-center text-5xl font-medium tracking-tighter whitespace-pre-wrap text-white"
	>
		Ripple
	</p>
	<Ripple />
</div>
```

## Usage

Import `Ripple` from `$lib/components/magic/ripple` and pass the props you need for your use case.

If the component depends on global CSS, add the following styles:

```css
@theme inline {
  --animate-ripple: ripple var(--duration, 2s) ease calc(var(--i, 0) * 0.2s)
    infinite;

  @keyframes ripple {
    0%,
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      transform: translate(-50%, -50%) scale(0.9);
    }
  }
}
```

## Props

A component for Ripple.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | `""` | Additional CSS classes to apply |
| `mainCircleSize` | `number` | `210` | The size of the main circle |
| `mainCircleOpacity` | `number` | `0.24` | The opacity of the main circle |
| `numCircles` | `number` | `8` | The number of ripple circles |
