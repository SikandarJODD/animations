# Line Shadow Text

A text component with a moving line shadow.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/line-shadow-text.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/line-shadow-text.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/line-shadow-text.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/line-shadow-text.json
```

Add the animation to your global CSS:

```css
@theme inline {
  --animate-line-shadow: line-shadow 15s linear infinite;

  @keyframes line-shadow {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% -100%;
    }
  }
}
```

## Usage

```svelte
<script lang="ts">
  import { LineShadowText } from "#lib/components/magic/line-shadow-text/index.js";
</script>

<LineShadowText content="Shadow" />
```

## Preview

```svelte
<script lang="ts">
  import { LineShadowText } from "#lib/components/magic/line-shadow-text/index.ts";
  import { mode } from "mode-watcher";
</script>

<h2
  class="text-5xl leading-none font-semibold tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl"
>
  Ship
  <LineShadowText
    content="Fast"
    class="italic"
    shadowColor={mode.current === "dark" ? "white" : "black"}
  ></LineShadowText>
</h2>
```

## Examples

### 1. Emerald Shadow

Emerald lettering with a lighter mint shadow in dark mode.

```svelte
<script lang="ts">
  import { LineShadowText } from "#lib/components/magic/line-shadow-text/index.js";
</script>

<LineShadowText
  as="h2"
  content="Shadow"
  shadowColor="var(--line-shadow)"
  class="text-5xl font-semibold text-emerald-600 [--line-shadow:var(--color-emerald-400)] after:top-[0.12em] after:left-[0.12em] sm:text-7xl dark:text-emerald-400 dark:[--line-shadow:var(--color-emerald-200)]"
/>
```

### 2. Orange Shadow

Orange italic lettering with a bright peach shadow in dark mode.

```svelte
<script lang="ts">
  import { LineShadowText } from "#lib/components/magic/line-shadow-text/index.js";
</script>

<LineShadowText
  as="h2"
  content="Shadow"
  shadowColor="var(--line-shadow)"
  class="text-5xl font-semibold text-orange-600 italic [--line-shadow:var(--color-orange-400)] after:top-[0.12em] after:left-[0.12em] sm:text-7xl dark:text-orange-400 dark:[--line-shadow:var(--color-orange-200)]"
/>
```

### 3. Sky Shadow

Sky-blue monospace lettering with an ice-blue shadow in dark mode.

```svelte
<script lang="ts">
  import { LineShadowText } from "#lib/components/magic/line-shadow-text/index.js";
</script>

<LineShadowText
  as="h2"
  content="Shadow"
  shadowColor="var(--line-shadow)"
  class="font-mono text-5xl font-semibold text-sky-600 [--line-shadow:var(--color-sky-400)] after:top-[0.12em] after:left-[0.12em] sm:text-7xl dark:text-sky-400 dark:[--line-shadow:var(--color-sky-200)]"
/>
```

## Props

A component for Line Shadow Text.

| Prop          | Type          | Default   | Description                     |
| ------------- | ------------- | --------- | ------------------------------- |
| `class`       | `string`      | `""`      | Additional CSS classes to apply |
| `shadowColor` | `string`      | `"black"` | Color of the shadow             |
| `as`          | `ElementType` | `"span"`  | HTML element to render as       |
| `content`     | `string`      | `""`      | Content of the text             |
