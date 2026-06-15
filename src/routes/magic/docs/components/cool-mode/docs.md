# Cool Mode

Add a fun particle effect that follows mouse interactions, with support for emojis, images, and custom shapes.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/cool-mode.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/cool-mode.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/cool-mode.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/cool-mode.json
```

## Preview

```svelte
<script lang="ts">
	import { CoolMode } from "$lib/components/magic/cool-mode";
	import { Button } from "$lib/components/ui/button";
</script>

<div class="relative flex justify-center">
	<CoolMode>
		<Button>Click Me!</Button>
	</CoolMode>
</div>
```

## Examples

### 1. Custom Image

```svelte
<script lang="ts">
	import { CoolMode } from "$lib/components/magic/cool-mode";
	import { Button } from "$lib/components/ui/button";
</script>

<div class="relative flex justify-center">
	<CoolMode
		options={{
			particle:
				"https://raw.githubusercontent.com/sveltejs/branding/refs/heads/master/svelte-logo.png",
		}}
	>
		<Button>Svelte Image</Button>
	</CoolMode>
</div>
```

## Usage

Import the component and wrap the content you want it to affect. Adjust the optional props to tune the visual behavior.

## Props

### CoolMode

A wrapper component that adds particle effects on interaction.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `Snippet` | `required` | The content to wrap with cool mode effect |
| `options` | `CoolParticleOptions` | `undefined` | Configuration options for particles |

### CoolParticleOptions

Configuration options for the particle effect.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `particle` | `string` | `"circle"` | Particle type: "circle", emoji, or image URL |
| `particleCount` | `number` | `undefined` | Maximum number of particles |
| `size` | `number` | `random` | Size of particles in pixels |
| `speedHorz` | `number` | `random` | Horizontal speed of particles |
| `speedUp` | `number` | `random` | Vertical speed of particles |
