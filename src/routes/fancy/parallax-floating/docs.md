# Parallax Floating

Create layered parallax movement that responds smoothly to pointer and touch input.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/f/parallax-floating.json
npm install motion-sv runed

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/f/parallax-floating.json
yarn add motion-sv runed

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/f/parallax-floating.json
pnpm add motion-sv runed

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/f/parallax-floating.json
bun add motion-sv runed
```

## Preview

```svelte
<script lang="ts">
	import { Floating, FloatingElement } from "$lib/components/fancy/parallax-floating";
	import { motion, useReducedMotion } from "motion-sv";

	const reducedMotion = useReducedMotion();

	const images = [
		{
			src: "https://images.unsplash.com/photo-1727341554370-80e0fe9ad082?auto=format&fit=crop&q=80&w=640",
			alt: "A sculptural interior",
			depth: 0.5,
			position: "top-[8%] left-[11%]",
			size: "h-16 w-16 md:h-24 md:w-24",
		},
		{
			src: "https://images.unsplash.com/photo-1640680608781-2e4199dd1579?auto=format&fit=crop&q=80&w=640",
			alt: "An abstract architectural detail",
			depth: 1,
			position: "top-[10%] left-[32%]",
			size: "h-20 w-20 md:h-28 md:w-28",
		},
		{
			src: "https://images.unsplash.com/photo-1726083085160-feeb4e1e5b00?auto=format&fit=crop&q=80&w=640",
			alt: "A modern design detail",
			depth: 2,
			position: "top-[2%] left-[53%]",
			size: "h-40 w-28 md:h-52 md:w-40",
		},
		{
			src: "https://images.unsplash.com/photo-1562016600-ece13e8ba570?auto=format&fit=crop&q=80&w=640",
			alt: "A minimal still life",
			depth: 1,
			position: "top-[0%] left-[83%]",
			size: "h-24 w-24 md:h-32 md:w-32",
		},
		{
			src: "https://images.unsplash.com/photo-1624344965199-ed40391d20f2?auto=format&fit=crop&q=80&w=640",
			alt: "An artistic composition",
			depth: 1,
			position: "top-[40%] left-[2%]",
			size: "h-28 w-28 md:h-36 md:w-36",
		},
		{
			src: "https://images.unsplash.com/photo-1677338354108-223e807fb1bd?auto=format&fit=crop&q=80&w=640",
			alt: "A contemporary interior",
			depth: 2,
			position: "top-[70%] left-[77%]",
			size: "h-28 w-28 md:h-48 md:w-36",
		},
		{
			src: "https://images.unsplash.com/photo-1689553079282-45df1b35741b?auto=format&fit=crop&q=80&w=640",
			alt: "A vivid design scene",
			depth: 4,
			position: "top-[73%] left-[15%]",
			size: "h-full w-40 md:w-52",
		},
		{
			src: "https://images.unsplash.com/photo-1721968317938-cf8c60fccd1a?auto=format&fit=crop&q=80&w=640",
			alt: "A colorful abstract detail",
			depth: 1,
			position: "top-[80%] left-[50%]",
			size: "h-24 w-24 md:h-32 md:w-32",
		},
	] as const;
</script>

<div class="relative flex h-150 w-full items-center justify-center overflow-hidden bg-black">
	<motion.div
		class="z-50 flex flex-col items-center space-y-4 text-center"
		initial={reducedMotion.current ? false : { opacity: 0, y: 10 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{
			duration: reducedMotion.current ? 0 : 0.88,
			delay: reducedMotion.current ? 0 : 1.5,
		}}
	>
		<p class="font-calendas font-cursive z-50 text-5xl text-white italic md:text-7xl">
			Svelte Fancy.
		</p>
		<button
			type="button"
			class="z-50 w-20 cursor-pointer rounded-full bg-white py-2 text-xs text-black motion-safe:transition-transform motion-safe:hover:scale-110"
		>
			Download
		</button>
	</motion.div>

	<Floating sensitivity={-1} class="overflow-hidden">
		{#each images as image, index (image.src)}
			<FloatingElement depth={image.depth} class={image.position}>
				<motion.img
					initial={reducedMotion.current ? false : { opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						duration: reducedMotion.current ? 0 : 0.5,
						delay: reducedMotion.current ? 0 : index * 0.15,
					}}
					src={image.src}
					alt={image.alt}
					class={`${image.size} cursor-pointer object-cover motion-safe:transition-transform motion-safe:duration-200 motion-safe:hover:scale-105`}
				/>
			</FloatingElement>
		{/each}
	</Floating>
</div>
```

## Examples

### 1. Basic Three-Layer Parallax

Compare three labeled layers to see how depth changes travel distance.

```svelte
<script lang="ts">
	import { Floating, FloatingElement } from "$lib/components/fancy/parallax-floating";
</script>

<div class="font-figtree relative h-96 w-full overflow-hidden bg-white text-black dark:bg-black dark:text-white">
	<p class="pointer-events-none absolute inset-x-0 bottom-8 text-center text-sm opacity-60">
		Higher depth travels farther
	</p>

	<Floating sensitivity={0.7}>
		<FloatingElement depth={0.5} class="top-[18%] left-[8%] z-10">
			<div class="w-28 border border-black/25 bg-white p-4 sm:w-36 dark:border-white/25 dark:bg-black">
				<span class="text-xs opacity-60">Far layer</span>
				<p class="mt-8 font-mono text-lg">0.5</p>
			</div>
		</FloatingElement>

		<FloatingElement depth={1} class="top-[42%] left-[36%] z-20">
			<div class="w-28 border border-black/40 bg-white p-4 sm:w-36 dark:border-white/40 dark:bg-black">
				<span class="text-xs opacity-60">Middle layer</span>
				<p class="mt-8 font-mono text-lg">1.0</p>
			</div>
		</FloatingElement>

		<FloatingElement depth={2} class="top-[14%] left-[68%] z-30">
			<div class="w-32 border border-dashed border-black/60 bg-white p-5 sm:w-44 dark:border-white/60 dark:bg-black">
				<span class="text-xs opacity-70">Near layer</span>
				<p class="mt-14 font-mono text-xl">2.0</p>
			</div>
		</FloatingElement>
	</Floating>
</div>
```

### 2. Sensitivity Comparison

The same element and depth respond differently as the root sensitivity changes.

```svelte
<script lang="ts">
	import { Floating, FloatingElement } from "$lib/components/fancy/parallax-floating";
</script>

<div class="font-figtree grid h-112 w-full bg-white text-black sm:grid-cols-2 dark:bg-black dark:text-white">
	<section class="relative min-h-56 overflow-hidden border-b border-black/15 sm:border-r sm:border-b-0 dark:border-white/15">
		<p class="pointer-events-none absolute top-6 left-6 z-10 font-mono text-xs">
			gentle · sensitivity 0.35
		</p>

		<Floating sensitivity={0.35}>
			<FloatingElement depth={2} class="top-1/2 left-1/2">
				<div class="flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/40 bg-white font-mono text-xs dark:border-white/40 dark:bg-black">
					depth 2
				</div>
			</FloatingElement>
		</Floating>
	</section>

	<section class="relative min-h-56 overflow-hidden">
		<p class="pointer-events-none absolute top-6 left-6 z-10 font-mono text-xs">
			responsive · sensitivity 1.4
		</p>

		<Floating sensitivity={1.4}>
			<FloatingElement depth={2} class="top-1/2 left-1/2">
				<div class="flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/40 bg-white font-mono text-xs dark:border-white/40 dark:bg-black">
					depth 2
				</div>
			</FloatingElement>
		</Floating>
	</section>
</div>
```

### 3. Positive and Negative Direction

Positive depth follows pointer movement while negative depth reverses it.

```svelte
<script lang="ts">
	import { Floating, FloatingElement } from "$lib/components/fancy/parallax-floating";
</script>

<div class="font-figtree relative h-96 w-full overflow-hidden bg-white text-black dark:bg-black dark:text-white">
	<p class="pointer-events-none absolute inset-x-0 bottom-8 text-center text-sm opacity-60">
		Positive follows · negative reverses
	</p>

	<Floating sensitivity={0.75}>
		<FloatingElement depth={1.25} class="top-1/2 left-1/4">
			<div class="w-32 -translate-x-1/2 -translate-y-1/2 border border-black/40 bg-white p-4 sm:w-40 dark:border-white/40 dark:bg-black">
				<p class="font-mono text-xs opacity-60">depth +1.25</p>
				<p class="mt-8 font-semibold">Toward</p>
			</div>
		</FloatingElement>

		<FloatingElement depth={-1.25} class="top-1/2 left-3/4">
			<div class="w-32 -translate-x-1/2 -translate-y-1/2 border border-dashed border-black/60 bg-white p-4 sm:w-40 dark:border-white/60 dark:bg-black">
				<p class="font-mono text-xs opacity-60">depth −1.25</p>
				<p class="mt-8 font-semibold">Away</p>
			</div>
		</FloatingElement>
	</Floating>
</div>
```

### 4. Mixed Content

Place images, inline SVGs, and styled text at independent depths in one scene.

```svelte
<script lang="ts">
	import Image from "$lib/assets/pixel-image-demo.jpg";
	import { Floating, FloatingElement } from "$lib/components/fancy/parallax-floating";
</script>

<div class="font-figtree relative h-120 w-full overflow-hidden bg-white text-black dark:bg-black dark:text-white">
	<Floating sensitivity={0.65}>
		<FloatingElement depth={0.6} class="top-[24%] left-[8%] z-10 sm:left-[16%]">
			<figure class="w-52 border border-black/25 bg-white p-2 pb-3 sm:w-64 dark:border-white/25 dark:bg-black">
				<img
					src={Image}
					alt="Colorful houses beside a red boat in Copenhagen"
					class="h-36 w-full object-cover grayscale sm:h-44"
				/>
				<figcaption class="mt-2 text-xs opacity-60">Nyhavn, Copenhagen</figcaption>
			</figure>
		</FloatingElement>

		<FloatingElement depth={0.4} class="top-[20%] left-[72%] z-20">
			<div class="flex size-14 rotate-6 items-center justify-center rounded-full border border-black/40 bg-white sm:size-16 dark:border-white/40 dark:bg-black">
				<svg viewBox="0 0 64 64" class="size-8" role="img" aria-label="Sun icon">
					<circle cx="32" cy="32" r="10" fill="none" stroke="currentColor" stroke-width="3" />
					<path
						d="M32 7v9M32 48v9M7 32h9M48 32h9M14.3 14.3l6.4 6.4M43.3 43.3l6.4 6.4M49.7 14.3l-6.4 6.4M20.7 43.3l-6.4 6.4"
						fill="none"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
					/>
				</svg>
			</div>
		</FloatingElement>

		<FloatingElement depth={-0.8} class="top-[72%] left-[48%] z-30 sm:left-[56%]">
			<div class="-rotate-3 border border-dashed border-black/50 bg-white px-6 py-4 dark:border-white/50 dark:bg-black">
				<p class="font-cursive text-2xl leading-none">Wish you were here</p>
				<p class="mt-2 text-xs opacity-55">Copenhagen · 07:42</p>
			</div>
		</FloatingElement>
	</Floating>
</div>
```

### 5. Grouped Elements

Group related children under one FloatingElement so they share a transform and depth.

```svelte
<script lang="ts">
	import { Floating, FloatingElement } from "$lib/components/fancy/parallax-floating";
</script>

<div class="font-figtree relative h-112 w-full overflow-hidden bg-white text-black dark:bg-black dark:text-white">
	<p class="pointer-events-none absolute inset-x-0 bottom-7 text-center text-sm opacity-60">
		Two wrappers · six items
	</p>

	<Floating sensitivity={0.65}>
		<FloatingElement depth={0.6} class="top-[28%] left-[6%] sm:left-[12%]">
			<div class="w-52 border border-black/25 bg-white p-4 dark:border-white/25 dark:bg-black">
				<p class="font-mono text-xs opacity-60">depth 0.6</p>
				<div class="mt-4 flex items-end gap-3">
					<div class="size-12 border border-black/50 dark:border-white/50"></div>
					<div class="size-12 rounded-full bg-black dark:bg-white"></div>
					<div class="h-12 w-6 border border-black/50 dark:border-white/50"></div>
				</div>
			</div>
		</FloatingElement>

		<FloatingElement depth={1.5} class="top-[58%] left-[38%] sm:left-[56%]">
			<div class="w-52 border border-dashed border-black/40 bg-white p-4 dark:border-white/40 dark:bg-black">
				<p class="font-mono text-xs opacity-60">depth 1.5</p>
				<div class="mt-4 flex items-end gap-3">
					<div class="h-10 w-16 bg-black dark:bg-white"></div>
					<div class="size-10 rotate-45 border border-black/50 dark:border-white/50"></div>
					<div class="size-10 rounded-full border border-black/50 dark:border-white/50"></div>
				</div>
			</div>
		</FloatingElement>
	</Floating>
</div>
```

## Usage

Import the component and wrap the content you want it to affect. Adjust the optional props to tune the visual behavior.

## Props

### Floating

The root container that tracks pointer movement and updates registered floating elements.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `Snippet` | `undefined` | FloatingElement children rendered inside the parallax container. |
| `sensitivity` | `number` | `1` | Scales the distance each element moves in response to pointer input. |
| `easingFactor` | `number` | `0.05` | Controls how quickly elements interpolate toward their target position. |
| `class` | `string` | `undefined` | Classes merged onto the root parallax container. |

### FloatingElement

A positioned layer registered with the nearest Floating root.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `Snippet` | `undefined` | Content rendered inside the floating layer. |
| `depth` | `number` | `1` | Multiplies the layer's movement to create near and far parallax depth. |
| `class` | `string` | `undefined` | Classes merged onto the positioned floating element wrapper. |
