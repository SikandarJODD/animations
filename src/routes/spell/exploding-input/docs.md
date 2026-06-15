# Exploding Input

A particle input companion that launches squares, emoji, images, or custom snippets outward from the cursor as user types.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/exploding-input.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/exploding-input.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/s/exploding-input.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/s/exploding-input.json
```

## Preview

```svelte
<script lang="ts">
	import { ExplodingInput } from "$lib/components/spell/exploding-input";
</script>

<div class="flex justify-center py-8">
	<label class="block w-full max-w-sm">
		<input
			type="text"
			placeholder="Type to launch particles"
			class="bg-background h-10 w-full border-b p-0 text-base font-medium outline-none placeholder:font-medium"
		/>
		<ExplodingInput class="z-50" count={2} duration={2.2} gravity={0.45} />
	</label>
</div>
```

## Examples

### 1. Emoji Particles

```svelte
<script lang="ts">
	import { ExplodingInput } from "$lib/components/spell/exploding-input";

	const emojis = [
		"\u{1F929}",
		"\u{1F47E}",
		"\u{1F63A}",
		"\u{1F47B}",
		"\u{1F383}",
		"\u{1F5A4}",
		"\u{1F5EF}",
	];
</script>

<div class="flex justify-center py-8">
	<label class="block">
		<input
			type="text"
			placeholder="try@spell.here"
			class="bg-background h-10 w-72 border-b p-0 text-base font-medium outline-none placeholder:font-medium"
		/>
		<ExplodingInput
			class="z-50"
			items={emojis}
			direction={{ horizontal: "left", vertical: "top" }}
			gravity={0.5}
			duration={3}
			count={3}
		>
			{#snippet children(item)}
				<span class="text-4xl">{item}</span>
			{/snippet}
		</ExplodingInput>
	</label>
</div>
```

### 2. Image Particles

Render image URLs as particle payloads so each typed character can release branded badges, avatars, or product thumbnails.

```svelte
<script lang="ts">
	import { ExplodingInput } from "$lib/components/spell/exploding-input";

	function makeBadgeDataUrl(fill: string, accent: string) {
		const svg = `
			<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72">
				<rect x="6" y="6" width="60" height="60" rx="18" fill="${fill}" />
				<circle cx="36" cy="26" r="10" fill="${accent}" />
				<path d="M20 50c6-8 11-12 16-12s10 4 16 12" fill="${accent}" />
			</svg>
		`;

		return `data:image/svg+xml;utf8,${encodeURIComponent(svg.replace(/\s+/g, " ").trim())}`;
	}

	const badges = [
		makeBadgeDataUrl("#fde68a", "#ea580c"),
		makeBadgeDataUrl("#a7f3d0", "#047857"),
		makeBadgeDataUrl("#bfdbfe", "#1d4ed8"),
		makeBadgeDataUrl("#fecdd3", "#be123c"),
	];
</script>

<div class="flex justify-center py-8">
	<label class="block">
		<input
			type="text"
			placeholder="drop image particles"
			class="bg-background h-10 w-80 rounded-none border-b p-0 text-base font-medium outline-none placeholder:font-medium"
		/>
		<ExplodingInput
			items={badges}
			count={2}
			duration={2.6}
			gravity={0.35}
			direction={{ horizontal: "center", vertical: "top" }}
		>
			{#snippet children(src)}
				<img
					{src}
					alt=""
					class="h-9 w-9 rounded-xl object-cover shadow-[0_8px_24px_rgba(15,23,42,0.16)]"
				/>
			{/snippet}
		</ExplodingInput>
	</label>
</div>
```

### 3. Custom SVG Components

Pass lightweight component references into items and render them through the snippet API for fully custom particle shapes.

```svelte
<script lang="ts">
	import { ExplodingInput } from "$lib/components/spell/exploding-input";
	import BoltIcon from "./bolt-icon.svelte";
	import DiamondIcon from "./diamond-icon.svelte";
	import OrbitIcon from "./orbit-icon.svelte";
	import SparkIcon from "./spark-icon.svelte";

	const icons = [
		{ component: SparkIcon, className: "text-amber-500" },
		{ component: OrbitIcon, className: "text-sky-500" },
		{ component: BoltIcon, className: "text-fuchsia-500" },
		{ component: DiamondIcon, className: "text-emerald-500" },
	];
</script>

<div class="flex justify-center py-8">
	<label class="block">
		<input
			type="text"
			placeholder="custom svg particles"
			class="bg-background h-10 w-80 border-b p-0 text-base font-medium outline-none placeholder:font-medium"
		/>
		<ExplodingInput
			items={icons}
			count={3}
			duration={2.9}
			gravity={0.42}
			scale={{ value: 1, randomize: true, randomVariation: 20 }}
			rotation={{ animate: true }}
			direction={{ horizontal: "right", vertical: "top" }}
		>
			{#snippet children(item)}
				<svelte:component
					this={item.component}
					class={`h-8 w-8 drop-shadow-[0_10px_18px_rgba(15,23,42,0.18)] ${item.className}`}
				/>
			{/snippet}
		</ExplodingInput>
	</label>
</div>
```

### 4. Shared Svelte Icon

Reuse the Svelte logo component from the shared icons folder and burst branded particles directly from the input cursor.

```svelte
<script lang="ts">
	import SvelteIcon from "$lib/components/icons/svelte.svelte";
	import { ExplodingInput } from "$lib/components/spell/exploding-input";

	const iconBursts = [
		"h-7 w-7 opacity-100",
		"h-6 w-6 opacity-85",
		"h-8 w-8 opacity-95",
		"h-5 w-5 opacity-75",
	];
</script>

<div class="flex justify-center py-8">
	<label class="block">
		<input
			type="text"
			placeholder="Svelte Logo Explosion"
			class="bg-background h-10 w-80 border-b p-0 text-base font-medium outline-none placeholder:font-medium"
		/>
		<ExplodingInput
			class="z-50"
			items={iconBursts}
			count={3}
			duration={2.8}
			gravity={0.32}
			direction={{ horizontal: "right", vertical: "top" }}
			scale={{ value: 0.92, randomize: true, randomVariation: 18 }}
			rotation={{ animate: true }}
		>
			{#snippet children(sizeClass)}
				<SvelteIcon class={sizeClass} />
			{/snippet}
		</ExplodingInput>
	</label>
</div>
```

## Usage

Pass an `items` array and render each item through the `children` snippet. Use `delay` to control how quickly new entries appear.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `T[]` | `[]` | The particle payloads to cycle through. Leave it empty to use the built-in square fallback. |
| `children` | `Snippet<[T, number]> \| undefined` | `undefined` | Optional snippet used to render each item when you want custom emoji, images, or component particles. |
| `count` | `number` | `1` | The number of particles spawned on each input event. |
| `direction` | `{ horizontal?: "left" \| "center" \| "right"; vertical?: "top" \| "center" \| "bottom" }` | `{ horizontal: "center", vertical: "top" }` | Controls the general launch direction of each burst. |
| `gravity` | `number` | `0.7` | Adjusts the simulated pull on particles, where lower values float more and higher values fall faster. |
| `duration` | `number` | `3` | Sets particle lifetime in seconds before each burst fades away. |
| `scale` | `{ value?: number; randomize?: boolean; randomVariation?: number }` | `{ value: 1, randomize: false, randomVariation: 0 }` | Defines the base particle scale and optional randomized size variation. |
| `rotation` | `{ value?: number; animate?: boolean }` | `{ value: 0, animate: false }` | Sets a fixed particle rotation or enables randomized spin animation. |
| `target` | `HTMLInputElement \| null` | `null` | Optionally bind the effect to a specific input when the component is not nested inside a label wrapper. |
| `class` | `string` | `-` | Custom classes merged onto the fixed overlay root element. |
