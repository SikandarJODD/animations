# Neon Gradient Card

A beautiful neon card effect

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/neon-gradient-card.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/neon-gradient-card.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/neon-gradient-card.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/neon-gradient-card.json
```

## Preview

```svelte
<script lang="ts">
	import { NeonGradientCard } from "$lib/components/magic/neon-gradient-card";
</script>

<NeonGradientCard class="my-32 max-w-sm items-center justify-center text-center">
	<span
		class="pointer-events-none z-10 h-full bg-linear-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-3xl leading-none font-bold tracking-tight text-balance whitespace-pre-wrap text-transparent md:text-5xl xl:text-6xl dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]"
	>
		Svelte Is Amazing
	</span>
</NeonGradientCard>
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
	import { NeonGradientCard } from "$lib/components/magic/neon-gradient-card";
</script>

<NeonGradientCard class="my-32 max-w-sm items-center justify-center text-center">
	<span
		class="pointer-events-none z-10 h-full bg-linear-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-3xl leading-none font-bold tracking-tight text-balance whitespace-pre-wrap text-transparent md:text-5xl xl:text-6xl dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]"
	>
		Svelte Is Amazing
	</span>
</NeonGradientCard>
```

## Usage

Import the component and wrap the content you want it to affect. Adjust the optional props to tune the visual behavior.

If the component depends on global CSS, add the following styles:

```css
@theme inline {
  --animate-background-position-spin: background-position-spin 3000ms infinite
    alternate;

  @keyframes background-position-spin {
    0% {
      background-position: top center;
    }
    100% {
      background-position: bottom center;
    }
  }
}
```

## Props

A component for Neon Gradient Card.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | `""` | Additional CSS classes to apply |
| `borderSize` | `number` | `2` | Size of the border |
| `borderRadius` | `number` | `20` | Radius of the border |
| `neonColors` | `NeonColorsProps` | `{ firstColor: "#ff00aa", secondColor: "#00FFF1" }` | Colors of the neon effect |
| `children` | `Snippet` | `required` | The content to display inside the card |
