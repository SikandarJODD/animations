# Pixel Trail

A pixelated trail effect that recolors grid pixels as you move your cursor.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/f/pixel-trail.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/f/pixel-trail.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/f/pixel-trail.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/f/pixel-trail.json
```

## Usage

Place `PixelTrail` inside a relatively positioned container with a fixed height. Keep foreground content non-interactive when the trail should continue receiving pointer movement beneath it.

```svelte
<script lang="ts">
  import { PixelTrail } from "#lib/components/fancy/pixel-trail/index.js";
</script>

<section class="relative h-80 overflow-hidden rounded-3xl bg-neutral-950 text-white">
  <PixelTrail
    pixelSize={24}
    fadeDuration={650}
    delay={80}
    class="z-10"
    pixelClass="bg-cyan-400"
  />

  <div class="pointer-events-none relative z-20 flex h-full flex-col justify-end p-8">
    <p class="font-mono text-xs tracking-[0.2em] text-cyan-300 uppercase">Interactive field</p>
    <h2 class="mt-3 max-w-md text-4xl font-semibold tracking-tight">
      Move your pointer across the canvas.
    </h2>
  </div>
</section>
```

The component fills its nearest positioned ancestor. Adjust `pixelSize`, `fadeDuration`, and `delay` together to control the density and persistence of the trail.
