# Aurora Text

An animated gradient text component with aurora-like flowing colors.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/aurora-text.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/aurora-text.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/aurora-text.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/aurora-text.json
```

## Usage

```svelte
<script lang="ts">
  import { AuroraText } from "#lib/components/magic/aurora-text/index.js";
</script>

<h2 class="text-4xl font-bold">
  Build <AuroraText>beautiful</AuroraText> interfaces
</h2>
```

## Preview

```svelte
<script lang="ts">
  import AuroraText from "#lib/components/magic/aurora-text/aurora-text.svelte";
</script>

<h2 class="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
  Ship <AuroraText>beautiful</AuroraText>
</h2>
```

## Examples

### 1. Demo

```svelte
<script lang="ts">
  import { AuroraText } from "#lib/components/magic/aurora-text/index.ts";
</script>

<h2
  class="font-figtree text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl"
>
  Follow
  <AuroraText colors={["#FF3D3D", "#843DFF", "#3D84FF", "#3DD2FF", "#84FF3D"]}
    >Rabbit</AuroraText
  >
</h2>
```

## Props

An animated gradient text component with flowing aurora colors.

| Prop       | Type       | Default                                        | Description                                          |
| ---------- | ---------- | ---------------------------------------------- | ---------------------------------------------------- |
| `children` | `Snippet`  | `required`                                     | The text content to display with aurora effect       |
| `class`    | `string`   | `""`                                           | Additional CSS classes to apply                      |
| `colors`   | `string[]` | `["#FF0080", "#7928CA", "#0070F3", "#38bdf8"]` | Array of hex color values for the gradient animation |
| `speed`    | `number`   | `1`                                            | Animation speed multiplier (higher = faster)         |
