# Motion Grid

A frame-based 2D grid animation primitive with active/inactive cell states.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/motion-grid.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/motion-grid.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/motion-grid.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/motion-grid.json
```

## Preview

#### preview.svelte

```svelte
<script lang="ts">
	import { onMount } from "svelte";
	import { motion, AnimatePresence } from "motion-sv";
	import { MotionGrid, MotionGridCells } from "$lib/components/magic/motion-grid";
	import {
		motionGridStateOrder,
		motionGridStates,
		type MotionGridStateKey,
	} from "./state-frames";

	let stateIndex = $state(0);

	let currentStateKey = $derived.by(() => {
		return motionGridStateOrder[stateIndex] ?? ("importing" as MotionGridStateKey);
	});

	let currentState = $derived(motionGridStates[currentStateKey]);

	onMount(() => {
		const interval = setInterval(() => {
			stateIndex = (stateIndex + 1) % motionGridStateOrder.length;
		}, 3000);

		return () => clearInterval(interval);
	});
</script>

<motion.button
	layout
	whileHover={{ scale: 1.05 }}
	whilePress={{ scale: 0.95 }}
	class="bg-primary relative inline-flex h-11 items-center justify-center gap-x-3 px-3"
>
	<motion.div layout="preserve-aspect">
		<MotionGrid gridSize={[5, 5]} frames={currentState.frames} class="w-fit gap-0.5">
			<MotionGridCells
				class="aspect-square size-[3px] rounded-full bg-white/20 data-[active=true]:bg-white/70 dark:bg-black/20 dark:data-[active=true]:bg-black/70"
			/>
		</MotionGrid>
	</motion.div>

	<div class="absolute top-1/2 left-[46px] -translate-y-1/2">
		<AnimatePresence mode="wait">
			{#key currentState.label}
				<motion.span
					layout="preserve-aspect"
					class="text-primary-foreground inline-block text-sm font-medium"
					initial={{ opacity: 0, y: -12 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 12 }}
					transition={{ duration: 0.25, ease: "easeOut" }}
				>
					{currentState.label}
				</motion.span>
			{/key}
		</AnimatePresence>
	</div>

	<span class="invisible opacity-0" aria-hidden={true}>{currentState.label}</span>
</motion.button>
```

#### state-frames.ts

```typescript
import type { Frames } from "$lib/components/magic/motion-grid";

const importingFrames = [
	[[2, 2]],
	[
		[1, 2],
		[2, 1],
		[2, 3],
		[3, 2],
	],
	[
		[2, 2],
		[0, 2],
		[1, 1],
		[1, 3],
		[2, 0],
		[2, 4],
		[3, 1],
		[3, 3],
		[4, 2],
	],
	[
		[0, 1],
		[0, 3],
		[1, 0],
		[1, 2],
		[1, 4],
		[2, 1],
		[2, 3],
		[3, 0],
		[3, 2],
		[3, 4],
		[4, 1],
		[4, 3],
	],
	[
		[0, 0],
		[0, 2],
		[0, 4],
		[1, 1],
		[1, 3],
		[2, 0],
		[2, 2],
		[2, 4],
		[3, 1],
		[3, 3],
		[4, 0],
		[4, 2],
		[4, 4],
	],
	[
		[0, 1],
		[0, 3],
		[1, 0],
		[1, 2],
		[1, 4],
		[2, 1],
		[2, 3],
		[3, 0],
		[3, 2],
		[3, 4],
		[4, 1],
		[4, 3],
	],
	[
		[0, 0],
		[0, 2],
		[0, 4],
		[1, 1],
		[1, 3],
		[2, 0],
		[2, 4],
		[3, 1],
		[3, 3],
		[4, 0],
		[4, 2],
		[4, 4],
	],
	[
		[0, 1],
		[1, 0],
		[3, 0],
		[4, 1],
		[0, 3],
		[1, 4],
		[3, 4],
		[4, 3],
	],
	[
		[0, 0],
		[0, 4],
		[4, 0],
		[4, 4],
	],
	[],
] as Frames;

const arrowDownFrames = [
	[[2, 0]],
	[
		[1, 0],
		[2, 0],
		[3, 0],
		[2, 1],
	],
	[
		[2, 0],
		[1, 1],
		[2, 1],
		[3, 1],
		[2, 2],
	],
	[
		[2, 0],
		[2, 1],
		[1, 2],
		[2, 2],
		[3, 2],
		[2, 3],
	],
	[
		[2, 1],
		[2, 2],
		[1, 3],
		[2, 3],
		[3, 3],
		[2, 4],
	],
	[
		[2, 2],
		[2, 3],
		[1, 4],
		[2, 4],
		[3, 4],
	],
	[
		[2, 3],
		[2, 4],
	],
	[[2, 4]],
	[],
] as Frames;

const arrowUpFrames = [
	[[2, 4]],
	[
		[1, 4],
		[2, 4],
		[3, 4],
		[2, 3],
	],
	[
		[2, 4],
		[1, 3],
		[2, 3],
		[3, 3],
		[2, 2],
	],
	[
		[2, 4],
		[2, 3],
		[1, 2],
		[2, 2],
		[3, 2],
		[2, 1],
	],
	[
		[2, 3],
		[2, 2],
		[1, 1],
		[2, 1],
		[3, 1],
		[2, 0],
	],
	[
		[2, 2],
		[2, 1],
		[1, 0],
		[2, 0],
		[3, 0],
	],
	[
		[2, 1],
		[2, 0],
	],
	[[2, 0]],
	[],
] as Frames;

const syncingFrames = [...arrowDownFrames, ...arrowUpFrames] as Frames;

const searchingFrames = [
	[
		[1, 0],
		[0, 1],
		[1, 1],
		[2, 1],
		[1, 2],
	],
	[
		[2, 0],
		[1, 1],
		[2, 1],
		[3, 1],
		[2, 2],
	],
	[
		[3, 0],
		[2, 1],
		[3, 1],
		[4, 1],
		[3, 2],
	],
	[
		[3, 1],
		[2, 2],
		[3, 2],
		[4, 2],
		[3, 3],
	],
	[
		[3, 2],
		[2, 3],
		[3, 3],
		[4, 3],
		[3, 4],
	],
	[
		[1, 2],
		[0, 3],
		[1, 3],
		[2, 3],
		[1, 4],
	],
	[
		[0, 0],
		[0, 1],
		[0, 2],
		[1, 0],
		[1, 2],
		[2, 0],
		[2, 1],
		[2, 2],
	],
	[],
] as Frames;

const busyFrames = [
	[
		[0, 1],
		[0, 2],
		[0, 3],
		[1, 2],
		[4, 1],
		[4, 2],
		[4, 3],
	],
	[
		[0, 1],
		[0, 2],
		[0, 3],
		[2, 3],
		[4, 2],
		[4, 3],
		[4, 4],
	],
	[
		[0, 1],
		[0, 2],
		[0, 3],
		[3, 4],
		[4, 2],
		[4, 3],
		[4, 4],
	],
	[
		[0, 1],
		[0, 2],
		[0, 3],
		[2, 3],
		[4, 2],
		[4, 3],
		[4, 4],
	],
	[
		[0, 0],
		[0, 1],
		[0, 2],
		[1, 2],
		[4, 2],
		[4, 3],
		[4, 4],
	],
	[
		[0, 0],
		[0, 1],
		[0, 2],
		[2, 1],
		[4, 1],
		[4, 2],
		[4, 3],
	],
	[
		[0, 0],
		[0, 1],
		[0, 2],
		[3, 0],
		[4, 0],
		[4, 1],
		[4, 2],
	],
	[
		[0, 1],
		[0, 2],
		[0, 3],
		[2, 1],
		[4, 0],
		[4, 1],
		[4, 2],
	],
] as Frames;

const savingFrames = [
	[
		[0, 0],
		[0, 1],
		[0, 2],
		[0, 3],
		[0, 4],
		[1, 0],
		[1, 1],
		[1, 2],
		[1, 3],
		[2, 0],
		[2, 1],
		[2, 2],
		[2, 3],
		[2, 4],
		[3, 0],
		[3, 1],
		[3, 2],
		[3, 3],
		[4, 0],
		[4, 1],
		[4, 2],
		[4, 3],
		[4, 4],
	],
	[
		[0, 0],
		[0, 1],
		[0, 2],
		[0, 3],
		[1, 0],
		[1, 1],
		[1, 2],
		[2, 0],
		[2, 1],
		[2, 2],
		[2, 3],
		[3, 0],
		[3, 1],
		[3, 2],
		[4, 0],
		[4, 1],
		[4, 2],
		[4, 3],
	],
	[
		[0, 0],
		[0, 1],
		[0, 2],
		[1, 0],
		[1, 1],
		[2, 0],
		[2, 1],
		[2, 2],
		[3, 0],
		[3, 1],
		[4, 0],
		[4, 1],
		[4, 2],
		[4, 4],
		[3, 4],
		[2, 4],
		[1, 4],
		[0, 4],
	],
	[
		[0, 0],
		[0, 1],
		[1, 0],
		[2, 0],
		[2, 1],
		[3, 0],
		[4, 0],
		[4, 1],
		[4, 3],
		[3, 3],
		[2, 3],
		[1, 3],
		[0, 3],
		[4, 4],
		[3, 4],
		[2, 4],
		[1, 4],
		[0, 4],
	],
	[
		[0, 0],
		[2, 0],
		[4, 0],
		[4, 2],
		[3, 2],
		[2, 2],
		[1, 2],
		[0, 2],
		[4, 3],
		[3, 3],
		[2, 3],
		[1, 3],
		[0, 3],
		[4, 4],
		[3, 4],
		[2, 4],
		[1, 4],
		[0, 4],
	],
	[
		[0, 0],
		[1, 0],
		[2, 0],
		[3, 0],
		[4, 0],
		[4, 1],
		[3, 1],
		[2, 1],
		[1, 1],
		[0, 1],
		[4, 2],
		[3, 2],
		[2, 2],
		[1, 2],
		[0, 2],
		[4, 3],
		[3, 3],
		[2, 3],
		[1, 3],
		[0, 3],
		[4, 4],
		[3, 4],
		[2, 4],
		[1, 4],
		[0, 4],
	],
	[
		[0, 0],
		[1, 0],
		[2, 0],
		[3, 0],
		[4, 0],
		[4, 1],
		[3, 1],
		[2, 1],
		[1, 1],
		[0, 1],
		[4, 2],
		[3, 2],
		[2, 2],
		[1, 2],
		[0, 2],
		[4, 3],
		[3, 3],
		[2, 3],
		[1, 3],
		[0, 3],
		[4, 4],
		[3, 4],
		[2, 4],
		[1, 4],
		[0, 4],
	],
	[
		[0, 0],
		[1, 0],
		[2, 0],
		[3, 0],
		[4, 0],
		[4, 1],
		[3, 1],
		[2, 1],
		[1, 1],
		[0, 1],
		[4, 2],
		[3, 2],
		[2, 2],
		[1, 2],
		[0, 2],
		[4, 3],
		[3, 3],
		[2, 3],
		[1, 3],
		[0, 3],
		[4, 4],
		[3, 4],
		[2, 4],
		[1, 4],
		[0, 4],
	],
] as Frames;

const initializingFrames = [
	[],
	[
		[1, 0],
		[3, 0],
	],
	[
		[1, 0],
		[3, 0],
		[0, 1],
		[1, 1],
		[2, 1],
		[3, 1],
		[4, 1],
	],
	[
		[1, 0],
		[3, 0],
		[0, 1],
		[1, 1],
		[2, 1],
		[3, 1],
		[4, 1],
		[0, 2],
		[1, 2],
		[2, 2],
		[3, 2],
		[4, 2],
	],
	[
		[1, 0],
		[3, 0],
		[0, 1],
		[1, 1],
		[2, 1],
		[3, 1],
		[4, 1],
		[0, 2],
		[1, 2],
		[2, 2],
		[3, 2],
		[4, 2],
		[1, 3],
		[2, 3],
		[3, 3],
	],
	[
		[1, 0],
		[3, 0],
		[0, 1],
		[1, 1],
		[2, 1],
		[3, 1],
		[4, 1],
		[0, 2],
		[1, 2],
		[2, 2],
		[3, 2],
		[4, 2],
		[1, 3],
		[2, 3],
		[3, 3],
		[2, 4],
	],
	[
		[1, 2],
		[2, 1],
		[2, 2],
		[2, 3],
		[3, 2],
	],
	[[2, 2]],
	[],
] as Frames;

export const motionGridStates = {
	importing: {
		frames: importingFrames,
		label: "Importing",
	},
	syncing: {
		frames: syncingFrames,
		label: "Syncing",
	},
	searching: {
		frames: searchingFrames,
		label: "Searching",
	},
	busy: {
		frames: busyFrames,
		label: "Busy",
	},
	saving: {
		frames: savingFrames,
		label: "Saving",
	},
	initializing: {
		frames: initializingFrames,
		label: "Initializing",
	},
};

export type MotionGridStateKey = keyof typeof motionGridStates;

export const motionGridStateOrder: MotionGridStateKey[] = [
	"importing",
	"syncing",
	"searching",
	"busy",
	"saving",
	"initializing",
];
```

## Examples

### 1. Manual State Switcher

```svelte
<script lang="ts">
	import { MotionGrid, MotionGridCells } from "$lib/components/magic/motion-grid";
	import {
		motionGridStateOrder,
		motionGridStates,
		type MotionGridStateKey,
	} from "./state-frames";

	let selected: MotionGridStateKey = "importing";
</script>

<div class="space-y-4">
	<div class="flex flex-wrap gap-2">
		{#each motionGridStateOrder as key}
			<button
				type="button"
				class="cursor-pointer rounded-md border px-2.5 py-1 text-xs transition-colors"
				class:bg-primary={selected === key}
				class:text-primary-foreground={selected === key}
				class:bg-background={selected !== key}
				onclick={() => (selected = key)}
			>
				{motionGridStates[key].label}
			</button>
		{/each}
	</div>

	<div class="flex items-center gap-3">
		<MotionGrid gridSize={[5, 5]} frames={motionGridStates[selected].frames} class="gap-1">
			<MotionGridCells
				class="bg-muted data-[active=true]:bg-foreground size-2.5 rounded-full"
				activeProps={{ animate: { scale: 1.1 } }}
			/>
		</MotionGrid>

		<span class="text-sm font-medium">{motionGridStates[selected].label}</span>
	</div>
</div>
```

### 2. Custom Cell Props

```svelte
<script lang="ts">
	import { MotionGrid, MotionGridCells } from "$lib/components/magic/motion-grid";
	import { motionGridStates } from "./state-frames";
</script>

<div class="flex items-center gap-4">
	<MotionGrid
		gridSize={[5, 5]}
		frames={motionGridStates.searching.frames}
		duration={220}
		class="gap-1"
	>
		<MotionGridCells
			class="size-2.5 rounded-sm border"
			activeProps={{
				class: "border-emerald-300/70 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.65)]",
				animate: { scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] },
			}}
			inactiveProps={{
				class: "border-muted-foreground/30 bg-muted/40",
				animate: { opacity: 0.4, scale: 0.9 },
			}}
		/>
	</MotionGrid>

	<p class="text-muted-foreground max-w-sm text-sm">
		Use <code>activeProps</code> and <code>inactiveProps</code> to style and animate cell states without
		changing frame data.
	</p>
</div>
```

### 3. Child Render Prop

```svelte
<script lang="ts">
	import { motion } from "motion-sv";
	import { cn } from "$lib/utils";
	import {
		MotionGrid,
		MotionGridCells,
		type MotionGridCellMotionProps,
	} from "$lib/components/magic/motion-grid";
	import { motionGridStates } from "./state-frames";
</script>

{#snippet gridChild({ props }: { props: MotionGridCellMotionProps })}
	<motion.div
		{...props}
		class={cn(
			"from-background to-muted/30 rounded-lg border bg-gradient-to-br p-2 shadow-sm",
			props.class
		)}
	>
		<MotionGridCells
			class="bg-foreground/15 data-[active=true]:bg-foreground/90 size-2 rounded-full"
		/>
	</motion.div>
{/snippet}

<div class="flex items-center gap-4">
	<MotionGrid
		gridSize={[5, 5]}
		frames={motionGridStates.syncing.frames}
		duration={180}
		class="gap-1"
		child={gridChild}
	/>
	<p class="text-muted-foreground text-sm">
		This uses the <code>child</code> render-prop to customize the outer wrapper.
	</p>
</div>
```

## Usage

Import `MotionGrid` from `$lib/components/magic/motion-grid` and pass the props you need for your use case.

## Props

### MotionGrid

Grid container that provides frame state and layout context.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `gridSize` | `[number, number]` | `required` | Grid dimensions as [columns, rows]. |
| `frames` | `Frames` | `required` | Frame sequence of active [x, y] cells. |
| `duration` | `number` | `200` | Frame interval in milliseconds. |
| `animate` | `boolean` | `true` | Toggles automatic frame cycling. |
| `child` | `Snippet<[ { props: MotionGridCellMotionProps } ]>` | `-` | Render-prop wrapper for custom root rendering. |
| `class` | `string` | `""` | Additional classes for the grid root. |

### MotionGridCells

Renders all cells and applies active/inactive presentation.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `activeProps` | `MotionGridCellMotionProps` | `-` | Props merged into active cells. |
| `inactiveProps` | `MotionGridCellMotionProps` | `-` | Props merged into inactive cells. |
| `class` | `string` | `""` | Base class applied to all cells. |
