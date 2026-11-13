# Pixelate SVG Filter

An SVG filter component that applies a configurable pixelation effect to images, videos, and other elements.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/f/pixelate-svg-filter.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/f/pixelate-svg-filter.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/f/pixelate-svg-filter.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/f/pixelate-svg-filter.json
```

## Usage

Give the filter a unique `id`, then reference that ID with CSS `filter: url(#id)` on the element you want to pixelate.

```svelte
<script lang="ts">
  import { PixelateSvgFilter } from "#lib/components/fancy/pixelate-svg-filter/index.js";

  let pixelated = $state(true);
</script>

<div class="relative w-fit overflow-hidden rounded-2xl">
  <PixelateSvgFilter id="portrait-pixelate" size={12} crossLayers />

  <img
    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=720&q=80"
    alt="Portrait of a woman outdoors"
    class="h-96 w-72 object-cover transition-[filter] duration-300"
    style:filter={pixelated ? "url(#portrait-pixelate)" : "none"}
  />

  <button
    type="button"
    class="absolute right-3 bottom-3 rounded-full bg-black/70 px-4 py-2 text-sm text-white backdrop-blur"
    onclick={() => (pixelated = !pixelated)}
  >
    {pixelated ? "Show original" : "Pixelate image"}
  </button>
</div>
```

Use a different filter ID for every independently configured instance. This SVG filter is not supported in Safari.
