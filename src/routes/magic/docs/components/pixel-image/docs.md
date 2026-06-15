# Pixel Image

A stunning image reveal animation that splits images into grid pieces with staggered fade-in and grayscale-to-color transitions.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/pixel-image.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/pixel-image.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/pixel-image.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/pixel-image.json
```

## Preview

```svelte
<script lang="ts">
	import PixelImage from "$lib/components/magic/pixel-image/pixel-image.svelte";
	import Image from "$lib/assets/pixel-image-demo.jpg";
</script>

<PixelImage src={Image} customGrid={{ rows: 4, cols: 6 }} grayscaleAnimation />
```

## Examples

### 1. Color Only (Once)

Pixel image with once={true} - animation plays only once and stays visible.

```svelte
<script lang="ts">
	import PixelImage from "$lib/components/magic/pixel-image/pixel-image.svelte";
	import Image from "$lib/assets/pixel-image-demo.jpg";
</script>

<PixelImage
	src={Image}
	customGrid={{ rows: 5, cols: 7 }}
	grayscaleAnimation={false}
	pixelFadeInDuration={800}
	maxAnimationDelay={1000}
	once
/>
```

### 2. Fast Reveal (Replay)

Quick animation that replays each time you scroll into view (default once={false}).

```svelte
<script lang="ts">
	import PixelImage from "$lib/components/magic/pixel-image/pixel-image.svelte";
	import Image from "$lib/assets/pixel-image-demo.jpg";
</script>

<PixelImage
	src={Image}
	grid="6x4"
	pixelFadeInDuration={500}
	maxAnimationDelay={600}
	colorRevealDelay={700}
	grayscaleAnimation
/>
```

### 3. Grid Variations

Compare different grid sizes - see how 8x8 vs 8x3 grids affect the animation.

```svelte
<script lang="ts">
	import PixelImage from "$lib/components/magic/pixel-image/pixel-image.svelte";
	import Image from "$lib/assets/pixel-image-demo.jpg";
</script>

<div class="flex flex-wrap items-center justify-center gap-12">
	<div class="flex flex-col items-center gap-4">
		<PixelImage src={Image} grid="8x8" />
		<p class="text-muted-foreground text-sm">8x8 Grid</p>
	</div>

	<div class="flex flex-col items-center gap-4">
		<PixelImage src={Image} grid="8x3" />
		<p class="text-muted-foreground text-sm">8x3 Grid</p>
	</div>
</div>
```

## Usage

Import `PixelImage` from `$lib/components/magic/pixel-image` and pass the props you need for your use case.

## Props

A component that creates stunning image reveal animations by splitting images into a grid of pieces with staggered fade-in effects.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `src` | `string` | `Required` | The image source URL |
| `grid` | `"6x4" \| "8x8" \| "8x3" \| "4x6" \| "3x8"` | `"6x4"` | Predefined grid configuration |
| `customGrid` | `{ rows: number; cols: number }` | `-` | Custom grid dimensions (overrides grid prop) |
| `grayscaleAnimation` | `boolean` | `true` | Enable grayscale-to-color transition effect |
| `pixelFadeInDuration` | `number` | `1000` | Duration of each piece's fade-in animation (ms) |
| `maxAnimationDelay` | `number` | `1200` | Maximum random delay for piece animations (ms) |
| `colorRevealDelay` | `number` | `1300` | Delay before color reveal begins (ms) |
| `once` | `boolean` | `false` | If true, animation plays only once. If false, replays each time element enters view |
