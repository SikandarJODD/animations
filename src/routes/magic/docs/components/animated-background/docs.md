# Animated Background

A shared animated background that smoothly moves between selected or hovered items.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-background.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-background.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-background.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-background.json
```

## Preview

```svelte
<script lang="ts">
	import {
		AnimatedBackground,
		AnimatedBackgroundItem,
	} from "$lib/components/magic/animated-background";
	import { Home, PhoneCall, Settings, User } from "@lucide/svelte";

	const tabs = [
		{ label: "Home", icon: Home },
		{ label: "About", icon: User },
		{ label: "Services", icon: Settings },
		{ label: "Contact", icon: PhoneCall },
	];
</script>

<div class="absolute bottom-8">
	<div
		class="flex w-full space-x-2 rounded-xl border border-zinc-950/10 bg-white p-2 dark:bg-zinc-950"
	>
		<AnimatedBackground
			defaultValue={tabs[0].label}
			class="rounded-lg bg-zinc-100 dark:bg-zinc-800"
			transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
		>
			{#each tabs as tab (tab.label)}
				{@const Icon = tab.icon}
				<AnimatedBackgroundItem data-id={tab.label} class="group h-9 w-9">
					<button
						type="button"
						aria-label={tab.label}
						class="inline-flex h-9 w-9 items-center justify-center text-zinc-500 transition-colors duration-100 group-data-[checked=true]:text-zinc-950 focus-visible:outline-2 dark:text-zinc-400 dark:group-data-[checked=true]:text-zinc-50"
					>
						<Icon class="h-5 w-5" />
					</button>
				</AnimatedBackgroundItem>
			{/each}
		</AnimatedBackground>
	</div>
</div>
```

## Examples

### 1. Hover Tabs

```svelte
<script lang="ts">
	import {
		AnimatedBackground,
		AnimatedBackgroundItem,
	} from "$lib/components/magic/animated-background";

	const tabs = ["Home", "About", "Services", "Contact"];
</script>

<div class="flex flex-row">
	<AnimatedBackground
		defaultValue={tabs[0]}
		class="rounded-lg bg-zinc-100 dark:bg-zinc-800"
		transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
		enableHover
	>
		{#each tabs as tab (tab)}
			<AnimatedBackgroundItem data-id={tab}>
				<button
					type="button"
					class="px-2 py-0.5 text-zinc-600 transition-colors duration-300 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
				>
					{tab}
				</button>
			</AnimatedBackgroundItem>
		{/each}
	</AnimatedBackground>
</div>
```

### 2. Hover Cards

```svelte
<script lang="ts">
	import {
		AnimatedBackground,
		AnimatedBackgroundItem,
	} from "$lib/components/magic/animated-background";

	const items = [
		{ title: "Dialog", description: "Enhances modal presentations." },
		{ title: "Popover", description: "For small interactive overlays." },
		{
			title: "Accordion",
			description: "Collapsible sections for more content.",
		},
		{
			title: "Collapsible",
			description: "Collapsible sections for more content.",
		},
		{
			title: "Drag to Reorder",
			description: "Reorder items with drag and drop.",
		},
		{
			title: "Swipe to Delete",
			description: "Delete items with swipe gestures.",
		},
	];
</script>

<div class="grid grid-cols-2 p-10 md:grid-cols-3">
	<AnimatedBackground
		class="rounded-lg bg-zinc-100 dark:bg-zinc-800"
		transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
		enableHover
	>
		{#each items as item, index (item.title)}
			<AnimatedBackgroundItem data-id={`card-${index}`}>
				<div class="flex flex-col space-y-1 p-4 select-none">
					<h3 class="text-base font-medium text-zinc-800 dark:text-zinc-50">
						{item.title}
					</h3>
					<p class="text-base text-zinc-600 dark:text-zinc-400">
						{item.description}
					</p>
				</div>
			</AnimatedBackgroundItem>
		{/each}
	</AnimatedBackground>
</div>
```

### 3. Segmented Control

```svelte
<script lang="ts">
	import {
		AnimatedBackground,
		AnimatedBackgroundItem,
	} from "$lib/components/magic/animated-background";

	const labels = ["Day", "Week", "Month", "Year"];
</script>

<div class="rounded-xl bg-gray-100 p-1 dark:bg-zinc-800">
	<AnimatedBackground
		defaultValue="Day"
		class="rounded-lg bg-white dark:bg-zinc-700"
		transition={{ ease: "easeInOut", duration: 0.2 }}
	>
		{#each labels as label (label)}
			<AnimatedBackgroundItem data-id={label}>
				<button
					type="button"
					aria-label={`${label} view`}
					class="inline-flex w-20 items-center justify-center text-center text-zinc-800 transition-transform active:scale-[0.98] dark:text-zinc-50"
				>
					{label}
				</button>
			</AnimatedBackgroundItem>
		{/each}
	</AnimatedBackground>
</div>
```

## Usage

Import the component and wrap the content you want it to affect. Adjust the optional props to tune the visual behavior.

## Props

### AnimatedBackground

The root component that manages the active item and shared background animation.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `Snippet` | `-` | The animated background items to render. |
| `defaultValue` | `string` | `undefined` | The ID of the initially active item. |
| `onValueChange` | `(newActiveId: string \| null) => void` | `undefined` | Called when the active item changes. |
| `class` | `string` | `""` | CSS classes applied to the animated background element. |
| `transition` | `Options["transition"]` | `undefined` | Motion transition options for the shared background. |
| `enableHover` | `boolean` | `false` | Activates items on hover instead of click. |

### AnimatedBackgroundItem

An individual selectable item that participates in the shared background animation.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `data-id` | `string` | `required` | A unique ID used to track the active item. |
| `class` | `string` | `""` | Additional CSS classes applied to the item wrapper. |
| `children` | `Snippet` | `-` | The item content to render. |
