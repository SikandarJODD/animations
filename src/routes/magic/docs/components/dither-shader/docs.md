# Dither Shader

A real-time ordered dithering effect for images, perfect for pixel art and retro aesthetics.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/dither-shader.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/dither-shader.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/dither-shader.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/dither-shader.json
```

## Preview

```svelte
<script>
	import { DitherShader } from "$lib/components/magic/dither-shader";
</script>

<div class="flex flex-col items-center gap-8 p-8">
	<div
		class="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800"
	>
		<DitherShader
			src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2670&auto=format&fit=crop"
			gridSize={2}
			ditherMode="bayer"
			colorMode="grayscale"
			invert={false}
			animated={false}
			animationSpeed={0.02}
			primaryColor="#000000"
			secondaryColor="#f5f5f5"
			threshold={0.5}
			class="h-80 w-[500px] sm:h-96 sm:w-[600px]"
		/>
	</div>
</div>
```

## Examples

### 1. Dither Shader Demo Simple

An example showcasing the Dither Shader component in action.

```svelte
<script>
	import { DitherShader } from "$lib/components/magic/dither-shader";
</script>

<div class="flex items-center justify-center p-8">
	<div class="relative overflow-hidden rounded-2xl">
		<DitherShader
			src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
			gridSize={4}
			ditherMode="bayer"
			colorMode="grayscale"
			class="h-64 w-80 sm:h-72 sm:w-96"
		/>
	</div>
</div>
```

### 2. Dither Shader Demo Duotone

```svelte
<script>
	import { DitherShader } from "$lib/components/magic/dither-shader";
</script>

<div class="flex flex-col items-center gap-6 p-8">
	<div
		class="relative overflow-hidden rounded-2xl border border-neutral-200 shadow-2xl dark:border-neutral-800"
	>
		<DitherShader
			src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			gridSize={1}
			ditherMode="bayer"
			colorMode="duotone"
			primaryColor="#1e3a5f"
			secondaryColor="#f0e68c"
			threshold={0.45}
			class="h-72 w-100 sm:h-80 sm:w-125"
		/>
	</div>
</div>
```

## Usage

Import `DitherShader` from `$lib/components/magic/dither-shader` and pass the props you need for your use case.

## Props

A component for Dither Shader.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `src` | `string` | `-` | Source image URL (required). |
| `gridSize` | `number` | `4` | Size of the dithering grid cells. |
| `ditherMode` | `"bayer" \| "halftone" \| "noise" \| "crosshatch"` | `"bayer"` | Type of dithering pattern to use. |
| `colorMode` | `"original" \| "grayscale" \| "duotone" \| "custom"` | `"original"` | Color processing mode for the output. |
| `invert` | `boolean` | `false` | Invert the dithered output colors. |
| `pixelRatio` | `number` | `1` | Pixelation multiplier (1 = no pixelation, higher = more pixelated). |
| `primaryColor` | `string` | `"#000000"` | Primary color for duotone mode. |
| `secondaryColor` | `string` | `"#ffffff"` | Secondary color for duotone mode. |
| `customPalette` | `string[]` | `["#000000", "#ffffff"]` | Custom color palette array for custom mode. |
| `brightness` | `number` | `0` | Brightness adjustment (-1 to 1). |
| `contrast` | `number` | `1` | Contrast adjustment (0 to 2, 1 = normal). |
| `backgroundColor` | `string` | `"transparent"` | Background color behind the dithered image. |
| `objectFit` | `"cover" \| "contain" \| "fill" \| "none"` | `"cover"` | Object fit behavior for the source image. |
| `threshold` | `number` | `0.5` | Threshold bias for dithering (0 to 1). |
| `animated` | `boolean` | `false` | Enable animation effect. |
| `animationSpeed` | `number` | `0.02` | Animation speed (lower = slower). |
| `class` | `string` | `""` | Additional CSS classes for the container (use this to set size via Tailwind). |
