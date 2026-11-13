# Animated Shiny Text

A light glare effect which pans across text making it appear as if it is shimmering.

The text color provides a solid base beneath the moving highlight. Use `--shiny-highlight` to customize the shine color.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-shiny-text.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-shiny-text.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-shiny-text.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-shiny-text.json
```

Add the animation to your global CSS:

```css
@theme inline {
  --animate-shiny-text: shiny-text var(--duration, 8s) infinite;

  @keyframes shiny-text {
    0%,
    90%,
    100% {
      background-position:
        calc(-100% - var(--shiny-width)) 0,
        0 0;
    }
    30%,
    60% {
      background-position:
        calc(100% + var(--shiny-width)) 0,
        0 0;
    }
  }
}
```

## Usage

```svelte
<script lang="ts">
  import { AnimatedShinyText } from "#lib/components/magic/animated-shiny-text/index.js";
</script>

<AnimatedShinyText>Shiny text</AnimatedShinyText>
```

## Preview

```svelte
<script lang="ts">
  import AnimatedShinyText from "#lib/components/magic/animated-shiny-text/animated-shiny-text.svelte";
  import { cn } from "#lib/utils.ts";
  import { ArrowRightIcon } from "@lucide/svelte";
</script>

<div class="z-10 flex min-h-64 items-center justify-center">
  <div
    class={cn(
      "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
    )}
  >
    <AnimatedShinyText
      class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
    >
      <span>✨ Introducing Magic UI</span>
      <ArrowRightIcon
        class="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
      />
    </AnimatedShinyText>
  </div>
</div>
```

## Examples

### 1. Documentation Link

A real documentation link with a narrow shimmer and a visible keyboard focus state.

```svelte
<script lang="ts">
  import { AnimatedShinyText } from "#lib/components/magic/animated-shiny-text/index.js";
</script>

<a
  href="/magic/docs/components/animated-shiny-text#props"
  class="rounded-sm underline decoration-neutral-300 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 dark:decoration-neutral-700"
>
  <AnimatedShinyText
    shimmerWidth={60}
    duration={4}
    class="text-sm text-neutral-600 dark:text-neutral-400"
  >
    explore the text api &rarr;
  </AnimatedShinyText>
</a>
```

### 2. Display Text

A wider highlight across a short heading with enough contrast to see the sweep.

```svelte
<script lang="ts">
  import { AnimatedShinyText } from "#lib/components/magic/animated-shiny-text/index.js";
</script>

<h2 class="text-center font-serif text-4xl sm:text-6xl">
  <AnimatedShinyText
    shimmerWidth={100}
    duration={6}
    class="text-neutral-500 dark:text-neutral-400"
  >
    collected works
  </AnimatedShinyText>
</h2>
```

### 3. Orange Accent

Apply a narrow shimmer to an inline link without adding a badge or container.

```svelte
<script lang="ts">
  import { AnimatedShinyText } from "#lib/components/magic/animated-shiny-text/index.js";
</script>

<a
  href="/magic/docs/components/animated-shiny-text#usage"
  class="rounded-sm text-sm underline decoration-orange-400/40 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
>
  <AnimatedShinyText
    shimmerWidth={45}
    duration={5}
    class="text-orange-800 [--shiny-highlight:var(--color-orange-400)] dark:text-orange-300 dark:[--shiny-highlight:var(--color-orange-50)]"
  >
    view implementation &rarr;
  </AnimatedShinyText>
</a>
```

## Props

A text component with a light glare shimmer effect.

| Prop           | Type                       | Default | Description                                         |
| -------------- | -------------------------- | ------- | --------------------------------------------------- |
| `shimmerWidth` | `number`                   | `100`   | The width of the shimmer effect in pixels           |
| `class`        | `string`                   | `""`    | Additional CSS classes to apply                     |
| `duration`     | `number`                   | `8`     | The duration of the shimmer animation in seconds    |
| `children`     | `string \| Svelte snippet` | `-`     | The text content to display with the shimmer effect |
