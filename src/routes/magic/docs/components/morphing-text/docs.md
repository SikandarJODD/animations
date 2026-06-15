# Morphing Text

A dynamic text morphing component for Magic UI.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/morphing-text.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/morphing-text.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/morphing-text.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/morphing-text.json
```

## Preview

```svelte
<script lang="ts">
	import { MorphingText } from "$lib/components/magic/morphing-text";
	const texts = [
		"Hello",
		"Morphing",
		"Text",
		"Animation",
		"Svelte",
		"Component",
		"Smooth",
		"Transition",
		"Engaging",
	];
</script>

<MorphingText {texts} />
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
	import { MorphingText } from "$lib/components/magic/morphing-text";
	const texts = [
		"Hello",
		"Morphing",
		"Text",
		"Animation",
		"Svelte",
		"Component",
		"Smooth",
		"Transition",
		"Engaging",
	];
</script>

<MorphingText {texts} />
```

## Usage

Import `MorphingText` from `$lib/components/magic/morphing-text` and pass the props you need for your use case.

## Props

A component for Morphing Text.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | `""` | Additional CSS classes to apply |
| `texts` | `string[]` | `[]` | Array of texts to morph through |
