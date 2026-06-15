# Signature

Animated signature component with handwriting effect using custom fonts.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/signature.json
npm install opentype.js

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/signature.json
yarn add opentype.js

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/s/signature.json
pnpm add opentype.js

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/s/signature.json
bun add opentype.js
```

## Preview

```svelte
<script lang="ts">
	import { Signature } from "$lib/components/spell/signature";
</script>

<div class="flex items-center justify-center">
	<Signature
		once={false}
		inView
		class="dark:invert-100"
		text="Rich Harris"
		fontSize={16}
		color="#1D1D1F"
	/>
</div>
```

## Examples

### 1. Color

```svelte
<script lang="ts">
	import { Signature } from "$lib/components/spell/signature";
</script>

<div class="rounded-2xl p-6">
	<Signature text="GTA Vice City VI" fontSize={20} color="#00D9FF" />
</div>
```

### 2. Size

```svelte
<script lang="ts">
	import { Signature } from "$lib/components/spell/signature";
</script>

<div class="flex flex-col items-center justify-center gap-4">
	<Signature once={false} inView class="dark:invert-100" text="Svelte is Cool" fontSize={10} />
	<Signature once={false} inView class="dark:invert-100" text="Svelte is Cool" fontSize={16} />
	<Signature once={false} inView class="dark:invert-100" text="Svelte is Cool" fontSize={24} />
</div>
```

## Usage

Import `Signature` from `$lib/components/spell/signature` and pass the props you need for your use case.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | `string` | `''` | The text converted into animated SVG paths using the downloaded font file. |
| `color` | `string` | `"#000"` | Sets both the stroke and fill color used for the drawn signature paths. |
| `fontSize` | `number` | `14` | Controls the font size passed into the font parser when generating glyph paths. |
| `duration` | `number` | `1.5` | Sets the draw animation duration in seconds for each path segment. |
| `delay` | `number` | `0` | Adds a base delay in seconds before path drawing begins. |
| `inView` | `boolean` | `false` | Waits to animate until the component enters the viewport. |
| `once` | `boolean` | `true` | When using inView, controls whether the signature draws only on first entry. |
| `class` | `string` | `-` | Custom classes applied to the root SVG element. |
