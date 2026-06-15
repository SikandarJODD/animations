# Blur Fade

A component that animates content with blur and fade effects, supporting directional movement and intersection observer triggering.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/blur-fade.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/blur-fade.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/blur-fade.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/blur-fade.json
```

## Preview

```svelte
<script lang="ts">
	import { BlurFade } from "$lib/components/magic/blur-fade";
</script>

<div class="flex flex-col items-center justify-center gap-4 rounded-lg border p-8">
	<BlurFade delay={0}>
		<h3 class="text-3xl font-bold text-black dark:text-white">Welcome to BlurFade</h3>
	</BlurFade>
	<BlurFade delay={0.2}>
		<p class="text-lg text-slate-600 dark:text-slate-300">
			Beautiful blur and fade animations for your content
		</p>
	</BlurFade>
</div>
```

## Examples

### 1. Basic Usage

```svelte
<script lang="ts">
	import { BlurFade } from "$lib/components/magic/blur-fade";
</script>

<div class="flex flex-col items-center justify-center gap-4 rounded-lg border p-8">
	<BlurFade delay={0}>
		<h3 class="text-3xl font-bold text-black dark:text-white">Welcome to BlurFade</h3>
	</BlurFade>
	<BlurFade delay={0.2}>
		<p class="text-lg text-slate-600 dark:text-slate-300">
			Beautiful blur and fade animations for your content
		</p>
	</BlurFade>
</div>
```

### 2. Custom Blur Amount

```svelte
<script lang="ts">
	import { BlurFade } from "$lib/components/magic/blur-fade";
</script>

<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
	<BlurFade blur="2px" delay={0}>
		<div class="rounded-lg border p-6">
			<h4 class="font-semibold text-black dark:text-white">Light Blur</h4>
			<p class="text-sm text-slate-600 dark:text-slate-300">blur="2px"</p>
		</div>
	</BlurFade>
	<BlurFade blur="6px" delay={0.1}>
		<div class="rounded-lg border p-6">
			<h4 class="font-semibold text-black dark:text-white">Medium Blur</h4>
			<p class="text-sm text-slate-600 dark:text-slate-300">blur="6px" (default)</p>
		</div>
	</BlurFade>
	<BlurFade blur="12px" delay={0.2}>
		<div class="rounded-lg border p-6">
			<h4 class="font-semibold text-black dark:text-white">Heavy Blur</h4>
			<p class="text-sm text-slate-600 dark:text-slate-300">blur="12px"</p>
		</div>
	</BlurFade>
</div>
```

### 3. Image Gallery

```svelte
<script lang="ts">
	import { BlurFade } from "$lib/components/magic/blur-fade";

	const images = Array.from({ length: 9 }, (_, i) => {
		const isLandscape = i % 2 === 0;
		const width = isLandscape ? 800 : 600;
		const height = isLandscape ? 600 : 800;
		return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
	});
</script>

<div class="columns-2 gap-4 sm:columns-3">
	{#each images as imageUrl, idx (imageUrl)}
		<BlurFade delay={0.25 + idx * 0.05} triggerOnView>
			<img
				class="mb-4 size-full rounded-lg object-contain"
				src={imageUrl}
				alt="Random stock image {idx + 1}"
			/>
		</BlurFade>
	{/each}
</div>
```

## Usage

Import the component and wrap the content you want it to affect. Adjust the optional props to tune the visual behavior.

## Props

A component for creating blur and fade animations.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `Snippet` | `-` | The content to animate |
| `class` | `string` | `""` | Additional CSS classes to apply |
| `variant` | `Variants` | `-` | Custom animation variants |
| `duration` | `number` | `0.4` | Animation duration in seconds |
| `delay` | `number` | `0` | Animation delay in seconds |
| `offset` | `number` | `6` | Movement offset in pixels |
| `direction` | `"up" \| "down" \| "left" \| "right"` | `"down"` | Animation direction |
| `inView` | `boolean` | `false` | Whether to trigger animation on intersection |
| `inViewMargin` | `string` | `"-50px"` | Intersection observer margin |
| `blur` | `string` | `"6px"` | Blur amount |
