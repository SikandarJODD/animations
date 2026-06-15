# Warp Background

A description for Warp Background component.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/warp-background.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/warp-background.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/warp-background.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/warp-background.json
```

## Preview

```svelte
<script lang="ts">
	import { WarpBackground } from "$lib/components/magic/warp-background";
	import * as Card from "$lib/components/ui/card/index.js";
</script>

<WarpBackground>
	<Card.Root class="w-80">
		<Card.Content class="flex flex-col gap-2 p-4">
			<Card.Title>Congratulations on Your Promotion!</Card.Title>
			<Card.Description>
				Your hard work and dedication have paid off. We&apos;re thrilled to see you take
				this next step in your career. Keep up the fantastic work!
			</Card.Description>
		</Card.Content>
	</Card.Root>
</WarpBackground>
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
	import { WarpBackground } from "$lib/components/magic/warp-background";
	import * as Card from "$lib/components/ui/card/index.js";
</script>

<WarpBackground>
	<Card.Root class="w-80">
		<Card.Content class="flex flex-col gap-2 p-4">
			<Card.Title>Congratulations on Your Promotion!</Card.Title>
			<Card.Description>
				Your hard work and dedication have paid off. We&apos;re thrilled to see you take
				this next step in your career. Keep up the fantastic work!
			</Card.Description>
		</Card.Content>
	</Card.Root>
</WarpBackground>
```

## Usage

Import the component and wrap the content you want it to affect. Adjust the optional props to tune the visual behavior.

## Props

A component for Warp Background.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | `""` | Additional CSS classes to apply |
| `perspective` | `number` | `100` | Perspective value for the 3D effect |
| `beamsPerSide` | `number` | `3` | Number of beams per side |
| `beamSize` | `number` | `5` | Size of each beam |
| `beamDelayMax` | `number` | `3` | Maximum delay for each beam |
| `beamDelayMin` | `number` | `0` | Minimum delay for each beam |
| `beamDuration` | `number` | `3` | Duration of each beam animation |
| `gridColor` | `string` | `"var(--border)"` | Color of the grid |
| `children` | `Snippet` | `required` | The content to wrap |
