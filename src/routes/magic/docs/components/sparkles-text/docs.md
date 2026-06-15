# Sparkles Text

A dynamic text that generates continuous sparkles with smooth transitions, perfect for highlighting text with animated stars.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/sparkles-text.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/sparkles-text.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/sparkles-text.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/sparkles-text.json
```

## Preview

```svelte
<script>
	import { SparklesText } from "$lib/components/magic/sparkles-text";
</script>

<SparklesText>Svelte Magic UI</SparklesText>
```

## Examples

### 1. Default Example

```svelte
<script>
	import { SparklesText } from "$lib/components/magic/sparkles-text";
</script>

<SparklesText>Svelte Magic UI</SparklesText>
```

## Usage

Import the component and wrap the content you want it to affect. Adjust the optional props to tune the visual behavior.

## Props

A text wrapper that renders animated sparkle stars around its children.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `keyof SvelteHTMLElements` | `"div"` | HTML element used for the outer wrapper. |
| `children` | `Snippet` | `required` | Content rendered inside the sparkle text component. |
| `sparklesCount` | `number` | `10` | Number of sparkle instances generated and animated at a time. |
| `colors` | `{ first: string; second: string }` | `{ first: "#9E7AFF", second: "#FE8BBB" }` | Two colors randomly used when generating sparkle stars. |
| `class` | `string` | `""` | Additional classes merged onto the root element. |
| `style` | `string` | `""` | Inline styles appended to the generated sparkle CSS variables. |
