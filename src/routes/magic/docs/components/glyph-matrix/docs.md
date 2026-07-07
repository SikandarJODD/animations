# Glyph Matrix

An animated grid of subtly shifting glyphs on a canvas, with a theme-aware color driven by the consumer.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/glyph-matrix.json
npm install runed

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/glyph-matrix.json
yarn add runed

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/glyph-matrix.json
pnpm add runed

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/glyph-matrix.json
bun add runed
```

## Preview

```svelte
<script lang="ts">
	import { GlyphMatrix } from "$lib/components/magic/glyph-matrix";
	import { mode } from "mode-watcher";
</script>

<div
	class="border-border bg-background relative h-100 w-full overflow-hidden rounded-lg border"
>
	<GlyphMatrix
		glyphs="01·•+*/\<>="
		cellSize={14}
		mutationRate={0.04}
		interval={90}
		fadeBottom={0.6}
		color={mode.current === "dark" ? "#ffffff" : "#000000"}
	/>
</div>
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
	import { GlyphMatrix } from "$lib/components/magic/glyph-matrix";
	import { mode } from "mode-watcher";
</script>

<div
	class="border-border bg-background relative h-100 w-full overflow-hidden rounded-lg border"
>
	<GlyphMatrix
		glyphs="01·•+*/\<>="
		cellSize={14}
		mutationRate={0.04}
		interval={90}
		fadeBottom={0.6}
		color={mode.current === "dark" ? "#ffffff" : "#000000"}
	/>
</div>
```

## Usage

Import `GlyphMatrix` from `$lib/components/magic/glyph-matrix` and pass the props you need for your use case.

## Props

No documented props.
