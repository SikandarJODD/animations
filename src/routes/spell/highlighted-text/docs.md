# Highlighted Text

Text with sliding background highlight animation using mix-blend-mode.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/highlighted-text.json
npm install motion-sv

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/highlighted-text.json
yarn add motion-sv

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/s/highlighted-text.json
pnpm add motion-sv

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/s/highlighted-text.json
bun add motion-sv
```

## Preview

```svelte
<script lang="ts">
	import { HighlightedText } from "$lib/components/spell/highlighted-text";
</script>

<div class="flex items-center text-2xl font-medium tracking-[-.03em] md:text-4xl">
	You&nbsp;<HighlightedText>can</HighlightedText>&nbsp;just&nbsp;
	<HighlightedText delay={0.4} from="left">ship things.</HighlightedText>
</div>
```

## Examples

### 1. Direction And View Trigger

Change the sweep origin and wait for viewport entry when you want the emphasis to arrive with surrounding content.

```svelte
<script lang="ts">
	import { HighlightedText } from "$lib/components/spell/highlighted-text";
</script>

<div class="flex flex-col gap-6 text-xl font-semibold tracking-tight">
	<div>
		<HighlightedText from="left" delay={0} triggerOnView>From Left</HighlightedText>
	</div>
	<div>
		<HighlightedText from="right" delay={0.2} triggerOnView>From Right</HighlightedText>
	</div>
	<div>
		<HighlightedText from="top" delay={0.4} triggerOnView>From Top</HighlightedText>
	</div>
	<div>
		<HighlightedText from="bottom" delay={0.6} triggerOnView>From Bottom</HighlightedText>
	</div>
</div>
```

## Usage

Import the component and wrap the content you want it to affect. Adjust the optional props to tune the visual behavior.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `Snippet \| undefined` | `required` | The inline text content wrapped by the animated highlight. |
| `from` | `"left" \| "right" \| "top" \| "bottom"` | `"bottom"` | Controls the direction the highlight bar sweeps in from. |
| `delay` | `number` | `0` | Adds a delay in seconds before the highlight motion begins. |
| `triggerOnView` | `boolean` | `false` | Waits to animate until the component enters the viewport. |
| `once` | `boolean` | `true` | When using triggerOnView, controls whether the animation runs only on first entry. |
| `class` | `string` | `-` | Custom classes applied to the outer inline wrapper. |
