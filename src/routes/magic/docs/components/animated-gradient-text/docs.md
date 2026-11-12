# Animated Gradient Text

An animated gradient background which transitions between colors for text.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-gradient-text.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-gradient-text.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-gradient-text.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-gradient-text.json
```

Add the animation to your global CSS:

```css
@theme inline {
  --animate-gradient: gradient 8s linear infinite;

  @keyframes gradient {
    to {
      background-position: var(--bg-size, 300%) 0;
    }
  }
}
```

## Usage

```svelte
<script lang="ts">
  import { AnimatedGradientText } from "#lib/components/magic/animated-gradient-text/index.js";
</script>

<AnimatedGradientText>Animated gradient text</AnimatedGradientText>
```

## Preview

```svelte
<script lang="ts">
  import { AnimatedGradientText } from "#lib/components/magic/animated-gradient-text/index.ts";
  import { cn } from "#lib/utils.ts";
  import { ChevronRight } from "@lucide/svelte";
</script>

<div>
  <div
    class="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]"
  >
    <span
      class={cn(
        "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
      )}
      style="
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: subtract;
        -webkit-clip-path: padding-box;"
    ></span>
    🎉
    <hr class="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
    <AnimatedGradientText class="text-sm font-medium">
      Introducing Magic UI
    </AnimatedGradientText>
    <ChevronRight
      class="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
    />
  </div>
</div>
```

## Examples

### 1. Custom Speed

```svelte
<script lang="ts">
  import { AnimatedGradientText } from "#lib/components/magic/animated-gradient-text/index.ts";
</script>

<AnimatedGradientText
  speed={2}
  colorFrom="#4ade80"
  colorTo="#06b6d4"
  class="text-4xl font-semibold tracking-tight"
>
  Fast Gradient
</AnimatedGradientText>
```

## Props

| Prop        | Type     | Default     | Description                                          |
| ----------- | -------- | ----------- | ---------------------------------------------------- |
| `speed`     | `number` | `1`         | Animation speed multiplier for the gradient movement |
| `colorFrom` | `string` | `"#ffaa40"` | Starting color of the gradient                       |
| `colorTo`   | `string` | `"#9c40ff"` | Ending color of the gradient                         |
| `class`     | `string` | `""`        | Additional CSS classes to apply                      |
