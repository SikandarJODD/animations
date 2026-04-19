# Light Rays

A WebGL-powered light rays background effect with customizable colors, intensity, and animation speed.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/light-rays.json
```

## Usage

```svelte
<script lang="ts">
  import { LightRays } from "$lib/components/spell/light-rays";
</script>

<div class="relative h-64 w-full overflow-hidden rounded-xl">
  <LightRays class="absolute inset-0 h-full w-full" />
</div>
```

## Custom Colors

Use `raysColor` to switch between `single`, `multi`, and `random` color modes.

```svelte
<LightRays raysColor={{ mode: "single", color: "#a78bfa" }} />
<LightRays raysColor={{ mode: "multi", color: "#6366f1", color2: "#ec4899" }} />
<LightRays raysColor={{ mode: "random" }} />
```

## Controlling Intensity and Reach

```svelte
<LightRays intensity={30} reach={40} rays={50} />
```

## Static Mode

Disable animation for a static ray background.

```svelte
<LightRays animation={{ animate: false, speed: 0 }} />
```

## Props

| Prop              | Type                                                 | Default                              | Description                                                  |
| ----------------- | ---------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------ |
| `intensity`       | `number`                                             | `13`                                 | Brightness of the light rays (0–100).                        |
| `rays`            | `number`                                             | `32`                                 | Density and animation speed of rays (0–100).                 |
| `reach`           | `number`                                             | `16`                                 | How far rays extend across the surface (0–100).              |
| `position`        | `number`                                             | `50`                                 | Horizontal position of the ray source as a percentage.       |
| `radius`          | `string`                                             | `"0px"`                              | CSS border-radius applied to the container.                  |
| `backgroundColor` | `string`                                             | `"#000"`                             | Background color behind the rays.                            |
| `animation`       | `AnimationConfig`                                    | `{ animate: true, speed: 10 }`       | Whether rays animate and at what speed.                      |
| `raysColor`       | `RaysColorConfig`                                    | `{ mode: "single", color: "#639AFF" }` | Color mode: `single`, `multi`, or `random`.               |
| `class`           | `string`                                             | `""`                                 | Additional CSS classes for the container element.            |
