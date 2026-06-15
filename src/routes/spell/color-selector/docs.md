# Color Selector

Interactive color picker component.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/color-selector.json
npm install tailwind-variants

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/color-selector.json
yarn add tailwind-variants

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/s/color-selector.json
pnpm add tailwind-variants

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/s/color-selector.json
bun add tailwind-variants
```

## Preview

```svelte
<script lang="ts">
	import { ColorSelector, type ColorSelectorColor } from "$lib/components/spell/color-selector";

	let value: ColorSelectorColor = $state("teal");
</script>

<ColorSelector
	colors={["orange", "teal", "purple", "#111827", "currentColor"]}
	size="lg"
	bind:value
/>
```

## Examples

### 1. Size Variation

Mix compact preset swatches with larger custom CSS colors to build palettes that fit both dense toolbars and expressive settings panels.

```svelte
<script lang="ts">
	import { ColorSelector, type ColorSelectorColor } from "$lib/components/spell/color-selector";
</script>

<div class="flex flex-col gap-6">
	<div class="flex flex-col items-start gap-2">
		<span class="text-muted-foreground font-mono text-sm">SMALL</span>
		<ColorSelector colors={["red", "blue", "green", "yellow"]} defaultValue="red" size="sm" />
	</div>
	<div class="flex flex-col items-start gap-2">
		<span class="text-muted-foreground font-mono text-sm">DEFAULT</span>
		<ColorSelector
			colors={["red", "blue", "green", "yellow"]}
			defaultValue="blue"
			size="default"
		/>
	</div>
	<div class="flex flex-col items-start gap-2">
		<span class="text-muted-foreground font-mono text-sm">LARGE</span>
		<ColorSelector colors={["red", "blue", "green", "yellow"]} defaultValue="green" size="lg" />
	</div>
</div>
```

## Usage

Import `ColorSelector` from `$lib/components/spell/color-selector` and pass the props you need for your use case.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `colors` | `readonly ColorSelectorColor[]` | `[]` | The swatches to render. Each item can be a built-in preset name or any supported CSS color string. |
| `size` | `"sm" \| "default" \| "lg"` | `"default"` | Controls the diameter of each swatch button. |
| `defaultValue` | `ColorSelectorColor` | `-` | Sets the initial selected swatch for uncontrolled usage. |
| `value` | `ColorSelectorColor` | `-` | Controlled selected color value. Supports `bind:value`. |
| `name` | `string` | `-` | When provided, renders a hidden input so the selected value participates in native form submission. |
| `onColorSelect` | `((color: ColorSelectorColor) => void) \| undefined` | `-` | Callback fired when a swatch is selected. |
| `class` | `string` | `-` | Custom classes merged onto the radiogroup root. |
