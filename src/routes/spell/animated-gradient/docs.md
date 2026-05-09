# Animated Gradient

A WebGL2-powered animated gradient background with multiple presets and full customization support.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/animated-gradient.json
```

## Usage

```svelte
<script lang="ts">
  import { AnimatedGradient } from "$lib/components/spell/animated-gradient";
</script>

<div class="relative h-64 w-full overflow-hidden rounded-xl">
  <AnimatedGradient config={{ preset: "Prism" }} class="absolute inset-0" />
</div>
```

## Presets

Six built-in presets are available: `Prism`, `Lava`, `Plasma`, `Pulse`, `Vortex`, and `Mist`.

```svelte
<AnimatedGradient config={{ preset: "Lava" }} />
<AnimatedGradient config={{ preset: "Plasma" }} />
<AnimatedGradient config={{ preset: "Vortex" }} />
```

## Custom Config

Use `{ preset: "custom" }` with explicit color and animation values for full control.

```svelte
<AnimatedGradient
  config={{
    preset: "custom",
    color1: "#ff6b6b",
    color2: "#4ecdc4",
    color3: "#45b7d1",
    speed: 30,
    swirl: 60,
    distortion: 20,
  }}
/>
```

## Noise Overlay

Add a grain texture overlay with configurable opacity and scale.

```svelte
<AnimatedGradient config={{ preset: "Prism" }} noise={{ opacity: 0.15, scale: 1.5 }} />
```

## Props

| Prop     | Type                                      | Default               | Description                                                     |
| -------- | ----------------------------------------- | --------------------- | --------------------------------------------------------------- |
| `config` | `GradientConfig`                          | `{ preset: "Prism" }` | Preset name or custom color/animation config object.            |
| `noise`  | `{ opacity: number; scale?: number }`     | `undefined`           | Grain texture overlay. `opacity` controls intensity.            |
| `radius` | `string`                                  | `"0px"`               | CSS border-radius applied to the container.                     |
| `style`  | `string`                                  | `""`                  | Inline styles forwarded to the container element.               |
| `class`  | `string`                                  | `""`                  | CSS classes applied to the container element.                   |

### Custom Config Options

| Prop              | Type                            | Default     | Description                                                |
| ----------------- | ------------------------------- | ----------- | ---------------------------------------------------------- |
| `color1`          | `string`                        | required    | Primary gradient color (hex, rgb, hsl, etc.).              |
| `color2`          | `string`                        | required    | Secondary gradient color.                                  |
| `color3`          | `string`                        | required    | Tertiary gradient color.                                   |
| `rotation`        | `number`                        | `0`         | Rotation angle of the gradient pattern in degrees.         |
| `speed`           | `number`                        | `25`        | Animation speed (0–100).                                   |
| `swirl`           | `number`                        | `80`        | Intensity of the swirl effect (0–100).                     |
| `distortion`      | `number`                        | `12`        | Noise-based warping of UV coordinates (0–100).             |
| `softness`        | `number`                        | `100`       | Blending softness between color regions (0–100).           |
| `scale`           | `number`                        | `1`         | Zoom level of the noise pattern.                           |
| `proportion`      | `number`                        | `35`        | Balance between color1 and color2/color3 (0–100).          |
| `swirlIterations` | `number`                        | `10`        | Number of swirl loop iterations (0–20).                    |
| `offset`          | `number`                        | `0`         | Time offset applied to animation start (−1000 to 1000).    |
| `shape`           | `"Checks" \| "Stripes" \| "Edge"` | `"Checks"` | Base pattern used for color mixing.                        |
| `shapeSize`       | `number`                        | `10`        | Scale of the base pattern (0–100).                         |
