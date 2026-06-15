# Lens

A interactive component that enables zooming into images, videos and other elements.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/lens.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/lens.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/lens.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/lens.json
```

## Preview

```svelte
<script lang="ts">
	import { Lens } from "$lib/components/magic/lens";
	import { Button } from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card/index.js";
</script>

<Card.Root class="relative max-w-md shadow-none">
	<Card.Header>
		<Lens zoomFactor={2} lensSize={150} isStatic={false} ariaLabel="Zoom Area">
			<img
				src="https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="image_placeholder"
				width={500}
				height={500}
			/>
		</Lens>
	</Card.Header>
	<Card.Content>
		<Card.Title class="text-2xl">Your next camp</Card.Title>
		<Card.Description>
			See our latest and best camp destinations all across the five continents of the globe.
		</Card.Description>
	</Card.Content>
	<Card.Footer class="space-x-4">
		<Button>Let&apos;s go</Button>
		<Button variant="secondary">Another time</Button>
	</Card.Footer>
</Card.Root>
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
	import { Lens } from "$lib/components/magic/lens";
	import { Button } from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card/index.js";
</script>

<Card.Root class="relative max-w-md shadow-none">
	<Card.Header>
		<Lens zoomFactor={2} lensSize={150} isStatic={false} ariaLabel="Zoom Area">
			<img
				src="https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="image_placeholder"
				width={500}
				height={500}
			/>
		</Lens>
	</Card.Header>
	<Card.Content>
		<Card.Title class="text-2xl">Your next camp</Card.Title>
		<Card.Description>
			See our latest and best camp destinations all across the five continents of the globe.
		</Card.Description>
	</Card.Content>
	<Card.Footer class="space-x-4">
		<Button>Let&apos;s go</Button>
		<Button variant="secondary">Another time</Button>
	</Card.Footer>
</Card.Root>
```

## Usage

Import the component and wrap the content you want it to affect. Adjust the optional props to tune the visual behavior.

## Props

A component for Lens.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `Snippet` | `-` | Content wrapped by the lens (image, video, etc.). |
| `zoomFactor` | `number` | `1` | The zoom factor of the lens. |
| `lensSize` | `number` | `100` | The size of the lens (diameter in pixels). |
| `position` | `{ x: number; y: number }` | `{ x: 0, y: 0 }` | The position of the lens (x and y coordinates). |
| `defaultPosition` | `{ x: number; y: number }` | `{ x: 0, y: 0 }` | The default position of the lens. |
| `isStatic` | `boolean` | `false` | Whether the lens is static (doesn't follow pointer). |
| `duration` | `number` | `0.3` | The duration of the animation (seconds). |
| `lensColor` | `string` | `"rgba(255,255,255,0.5)"` | The color of the lens overlay. |
| `ariaLabel` | `string` | `"zoom lens"` | The aria label of the lens for accessibility. |
| `class` | `string` | `""` | Additional CSS classes to apply to lens container. |
