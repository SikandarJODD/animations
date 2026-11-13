# Hyper Text

A text animation that scrambles letters before revealing the final text.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/hyper-text.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/hyper-text.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/hyper-text.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/hyper-text.json
```

## Usage

```svelte
<script lang="ts">
  import { HyperText } from "#lib/components/magic/hyper-text/index.js";
</script>

<HyperText text="Hover me" />
```

## Preview

```svelte
<script lang="ts">
  import { HyperText } from "#lib/components/magic/hyper-text/index.ts";
</script>

<HyperText text="Hover Me!"></HyperText>
```

## Examples

### 1. Hex Character Set

Scramble a revision identifier using only hexadecimal characters.

```svelte
<script lang="ts">
  import { HyperText } from "#lib/components/magic/hyper-text/index.js";

  const characterSet = "0123456789ABCDEF".split("");
</script>

<div class="text-center">
  <p class="text-muted-foreground mb-2 text-sm">Revision</p>
  <HyperText
    text="A7F03C"
    {characterSet}
    duration={600}
    class="text-3xl text-emerald-700 sm:text-5xl dark:text-emerald-300"
  />
</div>
```

### 2. Delayed Reveal

Reveal a section heading after a short delay, with hover replay disabled.

```svelte
<script lang="ts">
  import { HyperText } from "#lib/components/magic/hyper-text/index.js";
</script>

<div class="text-center">
  <HyperText
    as="h2"
    text="Release notes"
    delay={300}
    duration={1200}
    animateOnHover={false}
    class="text-2xl sm:text-4xl"
  />
  <p class="text-muted-foreground mt-2 text-sm">
    Changes, fixes, and migration guides.
  </p>
</div>
```

### 3. numeric characters

Reveal a build number using only digits in the scramble.

```svelte
<script lang="ts">
  import { MediaQuery } from "svelte/reactivity";
  import { HyperText } from "#lib/components/magic/hyper-text/index.js";

  const reducedMotion = new MediaQuery("(prefers-reduced-motion: reduce)");
  const digits = "0123456789".split("");
</script>

<div class="text-center">
  <p class="text-muted-foreground mb-2 text-sm">build number</p>
  {#if reducedMotion.current}
    <p
      class="font-mono text-3xl text-emerald-700 tabular-nums sm:text-5xl dark:text-emerald-300"
    >
      20261113
    </p>
  {:else}
    <HyperText
      text="20261113"
      characterSet={digits}
      duration={900}
      class="text-3xl text-emerald-700 tabular-nums sm:text-5xl dark:text-emerald-300"
    />
  {/if}
</div>
```

## Props

A component for Hyper Text.

| Prop             | Type                                                                     | Default                      | Description                                             |
| ---------------- | ------------------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------- |
| `text`           | `string`                                                                 | `undefined`                  | The text content to be animated                         |
| `class`          | `string`                                                                 | `""`                         | Additional CSS classes to apply                         |
| `duration`       | `number`                                                                 | `800`                        | Duration of the animation in milliseconds               |
| `delay`          | `number`                                                                 | `0`                          | Delay before animation starts in milliseconds           |
| `as`             | `"div" \| "span" \| "p" \| "h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6"` | `"div"`                      | Component to render as                                  |
| `startOnView`    | `boolean`                                                                | `false`                      | Whether to start animation when element comes into view |
| `animateOnHover` | `boolean`                                                                | `true`                       | Whether to trigger animation on hover                   |
| `characterSet`   | `string[] \| readonly string[]`                                          | `ABCDEFGHIJKLMNOPQRSTUVWXYZ` | Custom character set for scramble effect                |
