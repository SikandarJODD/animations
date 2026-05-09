````markdown
# Dia Text Reveal

A sweeping gradient text reveal component built with Svelte 5 and Motion SV. It can reveal a single string, trigger on viewport entry, or rotate through multiple strings with repeated sweep passes.

## Installation

### Using CLI

npm

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/dia-text-reveal.json
```

yarn

```bash
yarn dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/dia-text-reveal.json
```

pnpm

```bash
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/dia-text-reveal.json
```

bun

```bash
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/dia-text-reveal.json
```

## Usage

```svelte
<script lang="ts">
  import { DiaTextReveal } from "$lib/components/magic/dia-text-reveal";
</script>

<DiaTextReveal text="Text reveal" class="text-5xl font-semibold" />
```

## Props

| Prop            | Type                 | Default                                                   | Description                                                             |
| --------------- | -------------------- | --------------------------------------------------------- | ----------------------------------------------------------------------- |
| `text`          | `string \| string[]` | Required                                                  | Text to reveal. Pass multiple strings to rotate when `repeat` is true.  |
| `colors`        | `string[]`           | `["#c679c4", "#fa3d1d", "#ffb005", "#e1e1fe", "#0358f7"]` | Colors sampled across the moving gradient band.                         |
| `textColor`     | `string`             | `"var(--foreground)"`                                     | CSS color for revealed text after the sweep.                            |
| `duration`      | `number`             | `1.5`                                                     | Duration of one sweep pass in seconds.                                  |
| `delay`         | `number`             | `0`                                                       | Delay before the sweep starts in seconds.                               |
| `repeat`        | `boolean`            | `false`                                                   | Replay the sweep and advance to the next string after each completion.  |
| `repeatDelay`   | `number`             | `0.5`                                                     | Pause between repeated cycles in seconds.                               |
| `triggerOnView` | `boolean`            | `true`                                                    | Start the reveal when the component enters the viewport.                |
| `once`          | `boolean`            | `true`                                                    | When using `triggerOnView`, run only on the first viewport entry.       |
| `fixedWidth`    | `boolean`            | `false`                                                   | Use the widest string width instead of animating width between strings. |
| `class`         | `string`             | `""`                                                      | Additional CSS classes to apply to the animated span.                   |

## Examples

### Repeating Text

```svelte
<DiaTextReveal
  text={["Build", "Animate", "Ship"]}
  repeat
  fixedWidth
  class="text-5xl font-semibold"
/>
```

### Custom Colors

```svelte
<DiaTextReveal
  text="Chromatic sweep"
  colors={["#38bdf8", "#22c55e", "#facc15", "#fb7185"]}
  textColor="var(--foreground)"
  class="text-5xl font-semibold"
/>
```

### Immediate Start

```svelte
<DiaTextReveal text="Start now" triggerOnView={false} />
```

## Features

- Motion SV-powered sweep animation
- Viewport-triggered reveal with `triggerOnView`
- Reduced-motion support
- Repeating multi-text mode
- Optional fixed-width layout for rotating strings
- Custom gradient palette and revealed text color
````
