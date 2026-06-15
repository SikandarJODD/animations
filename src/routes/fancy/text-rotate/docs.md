# Text Rotate

Rotate through multiple text strings with per-character, per-word, or per-line motion and imperative controls.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/f/text-rotate.json
npm install motion-sv

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/f/text-rotate.json
yarn add motion-sv

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/f/text-rotate.json
pnpm add motion-sv

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/f/text-rotate.json
bun add motion-sv
```

## Preview

```svelte
<script lang="ts">
	import { LayoutGroup, motion } from "motion-sv";
	import { TextRotate } from "$lib/components/fancy/text-rotate";

	const texts = ["work!", "fancy ✽", "right", "fast", "fun", "rock", "🕶️🕶️🕶️"];
</script>

<div
	class="font-overused-grotesk text-foreground dark:text-muted flex h-dvh w-dvw flex-row items-center justify-center overflow-hidden bg-white p-12 text-2xl font-light sm:p-20 sm:text-3xl md:p-24 md:text-5xl"
>
	<LayoutGroup>
		<motion.p class="flex whitespace-pre" layout>
			<motion.span
				class="pt-0.5 sm:pt-1 md:pt-2"
				layout
				transition={{ type: "spring", damping: 30, stiffness: 400 }}
			>
				Make it{" "}
			</motion.span>

			<TextRotate
				as="span"
				{texts}
				mainClassName="bg-[#ff5941] px-2 py-0.5 text-white overflow-hidden justify-center rounded-lg sm:px-2 sm:py-1 md:px-3 md:py-2"
				staggerFrom="last"
				initial={{ y: "100%" }}
				animate={{ y: 0 }}
				exit={{ y: "-120%" }}
				staggerDuration={0.025}
				splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
				transition={{ type: "spring", damping: 30, stiffness: 400 }}
				rotationInterval={2000}
			/>
		</motion.p>
	</LayoutGroup>
</div>
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
	import { LayoutGroup, motion } from "motion-sv";
	import { TextRotate } from "$lib/components/fancy/text-rotate";

	const texts = ["work!", "fancy ✽", "right", "fast", "fun", "rock", "🕶️🕶️🕶️"];
</script>

<div
	class="font-overused-grotesk text-foreground dark:text-muted flex h-dvh w-dvw flex-row items-center justify-center overflow-hidden bg-white p-12 text-2xl font-light sm:p-20 sm:text-3xl md:p-24 md:text-5xl"
>
	<LayoutGroup>
		<motion.p class="flex whitespace-pre" layout>
			<motion.span
				class="pt-0.5 sm:pt-1 md:pt-2"
				layout
				transition={{ type: "spring", damping: 30, stiffness: 400 }}
			>
				Make it{" "}
			</motion.span>

			<TextRotate
				as="span"
				{texts}
				mainClassName="bg-[#ff5941] px-2 py-0.5 text-white overflow-hidden justify-center rounded-lg sm:px-2 sm:py-1 md:px-3 md:py-2"
				staggerFrom="last"
				initial={{ y: "100%" }}
				animate={{ y: 0 }}
				exit={{ y: "-120%" }}
				staggerDuration={0.025}
				splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
				transition={{ type: "spring", damping: 30, stiffness: 400 }}
				rotationInterval={2000}
			/>
		</motion.p>
	</LayoutGroup>
</div>
```

## Usage

Import `TextRotate` from `$lib/components/fancy/text-rotate` and pass the props you need for your use case.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `texts` | `string[]` | `required` | Array of strings rotated through by the component. |
| `as` | `keyof SvelteHTMLElements` | `"p"` | HTML element used for the animated text wrapper. |
| `rotationInterval` | `number` | `2000` | Delay in milliseconds between automatic text changes. |
| `initial` | `MotionProps["initial"] \| MotionProps["initial"][]` | `{ y: "100%", opacity: 0 }` | Initial motion state for each rendered segment. Arrays rotate through multiple states by index. |
| `animate` | `MotionProps["animate"] \| MotionProps["animate"][]` | `{ y: 0, opacity: 1 }` | Visible motion state for each rendered segment. Arrays rotate through multiple states by index. |
| `exit` | `MotionProps["exit"] \| MotionProps["exit"][]` | `{ y: "-120%", opacity: 0 }` | Exit motion state used when the current text leaves. Arrays rotate through multiple states by index. |
| `auto` | `boolean` | `true` | Whether the component should rotate automatically on an interval. |
| `loop` | `boolean` | `true` | Whether rotation wraps back to the first string after the last. |
| `splitBy` | `"characters" \| "words" \| "lines" \| string` | `"characters"` | Controls how each text string is segmented before animation. |
| `staggerDuration` | `number` | `0` | Delay added between animated segments. |
| `staggerFrom` | `"first" \| "last" \| "center" \| "random" \| number` | `"first"` | Starting point used when calculating stagger delays. |
| `transition` | `Transition` | `{ type: "spring", damping: 25, stiffness: 300 }` | Motion transition shared by the layout wrapper and per-segment animations. |
| `animatePresenceMode` | `"sync" \| "wait" \| "popLayout"` | `"wait"` | AnimatePresence mode used when swapping from one text string to the next. |
| `animatePresenceInitial` | `boolean` | `false` | Whether the first render should run the enter animation. |
| `onNext` | `(index: number) => void` | `undefined` | Callback invoked after the component rotates to a new text index. |
| `mainClassName` | `string` | `undefined` | Classes merged onto the root animated wrapper. |
| `splitLevelClassName` | `string` | `undefined` | Classes applied to each word or segment wrapper. |
| `elementLevelClassName` | `string` | `undefined` | Classes applied around each animated character or segment. |
| `class` | `string` | `undefined` | Additional classes merged onto the root layout wrapper. |
