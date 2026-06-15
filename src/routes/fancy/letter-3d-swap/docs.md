# Letter 3D Swap

A text component that swap the letters in a text with a box 3D effect.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/f/letter-3d-swap.json
npm install motion-sv

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/f/letter-3d-swap.json
yarn add motion-sv

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/f/letter-3d-swap.json
pnpm add motion-sv

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/f/letter-3d-swap.json
bun add motion-sv
```

## Preview

```svelte
<script lang="ts">
	import { Letter3DSwap } from "$lib/components/fancy/letter-3d-swap";
	let debug = $state(false);
</script>

<div class="flex max-w-2xl flex-col items-center font-serif">
	<button
		class="bg-background text-foreground hover:bg-muted absolute top-4 left-4 cursor-pointer rounded-md border px-2 py-1 text-[8px]"
		onclick={() => (debug = !debug)}
	>
		Debug: {debug ? "On" : "Off"}
	</button>

	<Letter3DSwap
		mainClass="text-2xl sm:text-5xl md:text-7xl bg-background lowercase"
		frontFaceClass={`bg-background ${debug ? "border" : ""} text-foreground`}
		secondFaceClass={`bg-background ${debug ? "border" : ""} text-foreground`}
		rotateDirection="top"
		staggerDuration={0.03}
		staggerFrom="first"
		transition={{ type: "spring", damping: 25, stiffness: debug ? 50 : 160 }}
	>
		SET YOUR MIND TO IT
	</Letter3DSwap>
</div>
```

## Examples

### 1. Position Example

```svelte
<script lang="ts">
	import { Letter3DSwap } from "$lib/components/fancy/letter-3d-swap";
</script>

<div class="flex h-120 max-w-2xl flex-col items-center justify-center gap-10 font-serif">
	<Letter3DSwap
		mainClass="text-2xl sm:text-5xl bg-background lowercase"
		frontFaceClass="bg-background text-foreground"
		secondFaceClass="bg-background text-foreground"
		rotateDirection="top"
		staggerDuration={0.03}
		staggerFrom="first"
		transition={{ type: "spring", damping: 25, stiffness: 160 }}
	>
		Let's fo from start
	</Letter3DSwap>
	<Letter3DSwap
		mainClass="text-2xl sm:text-5xl bg-background lowercase"
		frontFaceClass="bg-background text-foreground"
		secondFaceClass="bg-background text-foreground"
		rotateDirection="top"
		staggerDuration={0.03}
		staggerFrom="center"
		transition={{ type: "spring", damping: 25, stiffness: 160 }}
	>
		Start from Center
	</Letter3DSwap>
	<Letter3DSwap
		mainClass="text-2xl sm:text-5xl bg-background lowercase"
		frontFaceClass="bg-background text-foreground"
		secondFaceClass="bg-background text-foreground"
		rotateDirection="top"
		staggerDuration={0.03}
		staggerFrom="last"
		transition={{ type: "spring", damping: 25, stiffness: 160 }}
	>
		Start from End
	</Letter3DSwap>
	<Letter3DSwap
		mainClass="text-2xl sm:text-5xl bg-background lowercase"
		frontFaceClass="bg-background text-foreground"
		secondFaceClass="bg-background text-foreground"
		rotateDirection="top"
		staggerDuration={0.03}
		staggerFrom="random"
		transition={{ type: "spring", damping: 25, stiffness: 160 }}
	>
		Random Stagger
	</Letter3DSwap>
</div>
```

### 2. Rotation Example

```svelte
<script lang="ts">
	import { Letter3DSwap } from "$lib/components/fancy/letter-3d-swap";
</script>

<div class="flex h-120 max-w-2xl flex-col items-center justify-center gap-10 font-serif">
	<Letter3DSwap
		mainClass="text-2xl sm:text-5xl bg-background lowercase"
		frontFaceClass="bg-background text-foreground"
		secondFaceClass="bg-background text-foreground"
		rotateDirection="left"
		staggerDuration={0.03}
		staggerFrom="first"
		transition={{ type: "spring", damping: 25, stiffness: 160 }}
	>
		Left
	</Letter3DSwap>
	<Letter3DSwap
		mainClass="text-2xl sm:text-5xl bg-background lowercase"
		frontFaceClass="bg-background text-foreground"
		secondFaceClass="bg-background text-foreground"
		rotateDirection="right"
		staggerDuration={0.03}
		staggerFrom="first"
		transition={{ type: "spring", damping: 25, stiffness: 160 }}
	>
		Right
	</Letter3DSwap>
	<Letter3DSwap
		mainClass="text-2xl sm:text-5xl bg-background lowercase"
		frontFaceClass="bg-background text-foreground"
		secondFaceClass="bg-background text-foreground"
		rotateDirection="top"
		staggerDuration={0.03}
		staggerFrom="first"
		transition={{ type: "spring", damping: 25, stiffness: 160 }}
	>
		Top is cool
	</Letter3DSwap>
	<Letter3DSwap
		mainClass="text-2xl sm:text-5xl bg-background lowercase"
		frontFaceClass="bg-background text-foreground"
		secondFaceClass="bg-background text-foreground"
		rotateDirection="bottom"
		staggerDuration={0.03}
		staggerFrom="first"
		transition={{ type: "spring", damping: 25, stiffness: 160 }}
	>
		Goes to Bottom
	</Letter3DSwap>
</div>
```

## Usage

Import the component and wrap the content you want it to affect. Adjust the optional props to tune the visual behavior.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `Snippet` | `undefined` | Snippet content flattened into grapheme-safe characters for the 3D flip. |
| `as` | `keyof SvelteHTMLElements` | `"p"` | HTML element used for the interactive text wrapper. |
| `mainClass` | `string` | `undefined` | Classes applied to the root flex wrapper before `class` is merged in. |
| `frontFaceClass` | `string` | `undefined` | Classes applied to the visible face of each 3D character box. |
| `secondFaceClass` | `string` | `undefined` | Classes applied to the rotating second face of each character box. |
| `staggerDuration` | `number` | `0.05` | Delay in seconds between adjacent character flips. |
| `staggerFrom` | `"first" \| "last" \| "center" \| "random" \| number` | `"first"` | Starting point used to compute the per-character stagger delay. |
| `transition` | `AnimationOptions` | `{ type: "spring", damping: 30, stiffness: 300 }` | Motion options used when rotating the characters. |
| `rotateDirection` | `"top" \| "right" \| "bottom" \| "left"` | `"right"` | Direction each character box rotates toward on hover. |
| `class` | `string` | `undefined` | Additional classes merged onto the root wrapper. |
