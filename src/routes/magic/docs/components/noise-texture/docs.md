# Noise Texture

An SVG fractal noise layer using feTurbulence for subtle texture overlays.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/noise-texture.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/noise-texture.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/noise-texture.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/noise-texture.json
```

## Preview

```svelte
<script>
	import { NoiseTexture } from "$lib/components/magic/noise-texture";
	import { cn } from "$lib/utils";
</script>

<div
	class="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-neutral-100/80 dark:bg-neutral-950"
>
	<NoiseTexture
		className={cn(
			"absolute inset-0",
			"mask-[radial-gradient(420px_circle_at_center,white,transparent)]"
		)}
	/>
</div>
```

## Examples

### 1. Newsletter Example

```svelte
<script lang="ts">
	import { NoiseTexture } from "$lib/components/magic/noise-texture";
	import { Button } from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
</script>

<div class="flex justify-center p-4">
	<Card.Root class="bg-card/80 relative w-full overflow-hidden border md:w-120">
		<NoiseTexture noiseOpacity={0.45} />
		<Card.Header class="relative z-10 space-y-1 pb-4">
			<Card.Title class="text-xl">The weekly digest</Card.Title>
			<Card.Description>
				One email on Sundays—new components, tips, and changelog highlights. No spam,
				unsubscribe anytime.
			</Card.Description>
		</Card.Header>
		<Card.Content class="relative z-10 space-y-4 pt-0">
			<div class="space-y-2">
				<Label for="newsletter-email">Email</Label>
				<Input
					id="newsletter-email"
					autocomplete="email"
					placeholder="you@company.com"
					type="email"
				/>
			</div>
			<Button class="w-full" type="button">Subscribe</Button>
		</Card.Content>
	</Card.Root>
</div>
```

## Usage

Import `NoiseTexture` from `$lib/components/magic/noise-texture` and pass the props you need for your use case.

## Props

An SVG overlay that renders grayscale fractal noise using an internal filter.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `frequency` | `number` | `0.4` | Base turbulence frequency; higher values produce finer grain. |
| `octaves` | `number` | `6` | Number of turbulence octaves used to add smaller-scale detail. |
| `slope` | `number` | `0.15` | Linear channel slope applied after desaturation to control contrast. |
| `noiseOpacity` | `number` | `0.6` | Opacity of the filtered rect that displays the noise texture. |
| `class` | `string` | `""` | Additional classes applied to the root SVG element. |
