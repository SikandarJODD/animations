# Underline To Background

Expand an underline into a full background fill while transitioning the text color.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/f/underline-to-background.json
npm install motion-sv

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/f/underline-to-background.json
yarn add motion-sv

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/f/underline-to-background.json
pnpm add motion-sv

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/f/underline-to-background.json
bun add motion-sv
```

## Preview

```svelte
<script lang="ts">
	import { UnderlineToBackground } from "$lib/components/fancy/underline-to-background";
	import { motion } from "motion-sv";
	const fadeInVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { duration: 0.5, staggerChildren: 0.1 },
		},
	};

	const wordVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	const words = "Weekly goodies delivered straight to your inbox —".split(" ");
</script>

<div class="flex h-dvh w-dvw flex-col items-center justify-center bg-[#f5f5f5]">
	<motion.h2
		class="p-12 text-xl text-[#0015ff] md:p-24"
		initial="hidden"
		animate="visible"
		variants={fadeInVariants}
	>
		{#each words as word, index}
			<motion.span variants={wordVariants} class="mr-1 inline-block">
				{word}
			</motion.span>
		{/each}
		<motion.span variants={wordVariants} class="inline-block">
			<UnderlineToBackground targetTextColor="#f0f0f0" class="cursor-pointer">
				subscribe
			</UnderlineToBackground>
		</motion.span>
	</motion.h2>
</div>
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
	import { UnderlineToBackground } from "$lib/components/fancy/underline-to-background";
	import { motion } from "motion-sv";
	const fadeInVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { duration: 0.5, staggerChildren: 0.1 },
		},
	};

	const wordVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	const words = "Weekly goodies delivered straight to your inbox —".split(" ");
</script>

<div class="flex h-dvh w-dvw flex-col items-center justify-center bg-[#f5f5f5]">
	<motion.h2
		class="p-12 text-xl text-[#0015ff] md:p-24"
		initial="hidden"
		animate="visible"
		variants={fadeInVariants}
	>
		{#each words as word, index}
			<motion.span variants={wordVariants} class="mr-1 inline-block">
				{word}
			</motion.span>
		{/each}
		<motion.span variants={wordVariants} class="inline-block">
			<UnderlineToBackground targetTextColor="#f0f0f0" class="cursor-pointer">
				subscribe
			</UnderlineToBackground>
		</motion.span>
	</motion.h2>
</div>
```

## Usage

Import the component and wrap the content you want it to affect. Adjust the optional props to tune the visual behavior.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `Snippet` | `undefined` | Snippet content displayed inside the animated underline/fill treatment. |
| `as` | `keyof SvelteHTMLElements` | `"span"` | HTML element used for the hoverable text wrapper. |
| `transition` | `Transition` | `{ type: "spring", damping: 30, stiffness: 300 }` | Motion transition used for both the underline growth and text-color change. |
| `targetTextColor` | `string` | `"#fef"` | Text color applied while the underline has expanded into the background. |
| `underlineHeightRatio` | `number` | `0.1` | Ratio of the current font size used as the resting underline thickness. |
| `underlinePaddingRatio` | `number` | `0.01` | Ratio of the current font size used to offset the underline below the text baseline. |
| `class` | `string` | `undefined` | Classes merged onto the motion-enabled wrapper element. |
