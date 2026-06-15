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

## Preview

```svelte
<script lang="ts">
	import { LineShadowText } from "$lib/components/magic/line-shadow-text";
	import { mode } from "mode-watcher";
</script>

<h1
	class="text-5xl leading-none font-semibold tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl"
>
	Ship
	<LineShadowText
		content="Fast"
		class="italic"
		shadowColor={mode.current === "dark" ? "white" : "black"}
	></LineShadowText>
</h1>
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
	import { LineShadowText } from "$lib/components/magic/line-shadow-text";
	import { mode } from "mode-watcher";
</script>

<h1
	class="text-5xl leading-none font-semibold tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl"
>
	Ship
	<LineShadowText
		content="Fast"
		class="italic"
		shadowColor={mode.current === "dark" ? "white" : "black"}
	></LineShadowText>
</h1>
```

## Usage

Import `LineShadowText` from `$lib/components/magic/line-shadow-text` and pass the props you need for your use case.

If the component depends on global CSS, add the following styles:

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

## Props

A component for Line Shadow Text.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | `""` | Additional CSS classes to apply |
| `shadowColor` | `string` | `"black"` | Color of the shadow |
| `as` | `ElementType` | `"span"` | HTML element to render as |
| `content` | `string` | `""` | Content of the text |
