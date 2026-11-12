# Animated Gradient Svg

An animated multi-color gradient background effect with SVG elements.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/f/animated-gradient-svg.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/f/animated-gradient-svg.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/f/animated-gradient-svg.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/f/animated-gradient-svg.json
```

## Usage

Use the gradient as an absolutely positioned visual layer inside a relatively positioned container. Keep the content in a higher stacking layer so it remains interactive and readable.

```svelte
<script lang="ts">
  import { AnimatedGradientSvg } from "#lib/components/fancy/animated-gradient-svg/index.js";
</script>

<section class="relative min-h-96 overflow-hidden rounded-3xl bg-slate-950 text-white">
  <AnimatedGradientSvg
    colors={["#7c3aed", "#2563eb", "#06b6d4", "#f43f5e"]}
    speed={8}
    blur="medium"
    class="opacity-80"
  />

  <div class="relative z-10 flex min-h-96 max-w-2xl flex-col justify-end p-8 sm:p-12">
    <p class="text-sm font-medium tracking-[0.2em] text-white/70 uppercase">New collection</p>
    <h2 class="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
      Color in motion.
    </h2>
    <p class="mt-4 max-w-lg text-white/75">
      Build an atmospheric hero while keeping your content readable above the animated layer.
    </p>
  </div>
</section>
```

## Preview

```svelte
<script lang="ts">
  import BentoCard from "./bento-card.svelte";
</script>

<div class="bg-background flex h-80 w-full items-center justify-center">
  <div class="grid w-full max-w-lg grid-cols-1 gap-2 sm:grid-cols-6">
    <!-- Top left card -->
    <div class="h-32 sm:col-span-4 sm:h-48">
      <BentoCard
        title="Animated Bento"
        subtitle="#001"
        description="Using only SVG circles and blur"
      />
    </div>
    <!-- Top right card -->
    <div class="h-32 sm:col-span-2 sm:h-48">
      <BentoCard title="Gradients" buttonText="Explore More" />
    </div>
  </div>
</div>
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
  import BentoCard from "./bento-card.svelte";
</script>

<div class="bg-background flex h-80 w-full items-center justify-center">
  <div class="grid w-full max-w-lg grid-cols-1 gap-2 sm:grid-cols-6">
    <!-- Top left card -->
    <div class="h-32 sm:col-span-4 sm:h-48">
      <BentoCard
        title="Animated Bento"
        subtitle="#001"
        description="Using only SVG circles and blur"
      />
    </div>
    <!-- Top right card -->
    <div class="h-32 sm:col-span-2 sm:h-48">
      <BentoCard title="Gradients" buttonText="Explore More" />
    </div>
  </div>
</div>
```

## Props

| Prop     | Type                             | Default     | Description                                                       |
| -------- | -------------------------------- | ----------- | ----------------------------------------------------------------- |
| `colors` | `string[]`                       | `required`  | List of blob colors used to generate the animated gradient field. |
| `speed`  | `number`                         | `5`         | Animation duration in seconds shared by each SVG blob.            |
| `blur`   | `"light" \| "medium" \| "heavy"` | `"light"`   | Controls the blur strength applied to the full gradient layer.    |
| `class`  | `string`                         | `undefined` | Classes merged onto the outer absolute-positioned wrapper.        |
