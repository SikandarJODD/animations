# Randomized Text

A text reveal with stable, randomized per-token delays for spell-style headlines, labels, and editorial callouts.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/randomized-text.json
npm install motion-sv

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/randomized-text.json
yarn add motion-sv

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/s/randomized-text.json
pnpm add motion-sv

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/s/randomized-text.json
bun add motion-sv
```

## Preview

```svelte
<script lang="ts">
	import { RandomizedText } from "$lib/components/spell/randomized-text";
</script>

<div class="flex min-h-[200px] items-center justify-center">
	<div class="flex max-w-2xl flex-col items-start gap-4 px-4">
		<RandomizedText split="chars" class="text-2xl font-semibold tracking-tighter md:text-3xl">
			Introducing Spell UI
		</RandomizedText>
		<RandomizedText class="text-muted-foreground text-base font-[550] tracking-tight">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae doloremque alias aliquam
			neque eligendi? Vel dolore quibusdam corrupti corporis sapiente. Eveniet facilis, error
			voluptatem alias fugiat est fuga? Commodi, officia?
		</RandomizedText>
	</div>
</div>
```

## Examples

### 1. Split by

Switch to grapheme-safe character splitting and trigger the reveal when the copy enters the viewport.

```svelte
<script lang="ts">
	import { RandomizedText } from "$lib/components/spell/randomized-text";
</script>

<div class="flex min-h-[200px] w-[500px] flex-col items-center justify-start gap-4">
	<div class="justif-start flex flex-col items-start gap-1">
		<span class="text-muted-foreground font-mono text-sm"> BY CHARACTERS </span>
		<RandomizedText
			split="chars"
			class="text-base font-medium tracking-tight"
			triggerOnView
			once={false}
		>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis debitis ipsam saepe
			incidunt laboriosam eaque quasi commodi beatae excepturi quos!
		</RandomizedText>
	</div>
	<div class="justif-start flex flex-col items-start gap-1">
		<span class="text-muted-foreground font-mono text-sm"> BY WORDS WITH DELAY (0.5s)</span>
		<RandomizedText
			delay={0.5}
			class="text-base font-medium tracking-tight"
			triggerOnView
			once={false}
		>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis debitis ipsam saepe
			incidunt laboriosam eaque quasi commodi beatae excepturi quos!
		</RandomizedText>
	</div>
</div>
```

## Usage

Import the component and wrap the content you want it to affect. Adjust the optional props to tune the visual behavior.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `Snippet` | `required` | Plain text snippet content used to build the animated token list. |
| `as` | `"span" \| "div" \| "p" \| "h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6"` | `"span"` | Sets the semantic tag used for the animated root element. |
| `split` | `"words" \| "chars"` | `"words"` | Controls whether the reveal animates full words or grapheme-safe characters. |
| `delay` | `number` | `0.2` | Adds a base delay in seconds before token-specific jitter is applied. |
| `duration` | `number` | `1.2` | Sets the opacity reveal duration for each animated token in seconds. |
| `trigger` | `boolean` | `true` | Enables or disables the visible animated state. |
| `triggerOnView` | `boolean` | `false` | Waits to animate until the component enters the viewport. |
| `once` | `boolean` | `true` | When using triggerOnView, controls whether the reveal runs only on first entry. |
| `class` | `string` | `-` | Custom classes applied to the animated root element. |
| `style` | `string` | `-` | Inline styles forwarded to the animated root element. |
