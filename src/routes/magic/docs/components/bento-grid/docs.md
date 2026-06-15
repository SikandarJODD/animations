# Bento Grid

Bento grid is a layout used to showcase the features of a product in a simple and elegant way.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/bento-grid.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/bento-grid.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/bento-grid.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/bento-grid.json
```

## Preview

```svelte
<script lang="ts">
	import { BentoCard, BentoGrid } from "$lib/components/magic/bento-grid";

	// Icons
	import FileTextIcon from "@lucide/svelte/icons/file-text";
	import InputIcon from "@lucide/svelte/icons/file-input";
	import GlobeIcon from "@lucide/svelte/icons/globe";
	import CalendarIcon from "@lucide/svelte/icons/calendar";
	import BellIcon from "@lucide/svelte/icons/bell";

	import type { Snippet } from "svelte";

	type Feature = {
		Icon: typeof FileTextIcon;
		name: string;
		background: Snippet;
		description: string;
		href: string;
		cta: string;
		class: string;
		iconClass?: string;
	};

	let features: Feature[] = [
		{
			Icon: FileTextIcon,
			name: "Save your files",
			background: bg,
			description: "We automatically save your files as you type.",
			href: "/",
			cta: "Learn more",
			class: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
			iconClass: "stroke-[1.4]",
		},
		{
			Icon: InputIcon,
			name: "Full text search",
			background: bg,
			description: "Search through all your files in one place.",
			href: "/",
			cta: "Learn more",
			class: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
			iconClass: "stroke-[1.4]",
		},
		{
			Icon: GlobeIcon,
			name: "Multilingual",
			background: bg,
			description: "Supports 100+ languages and counting.",
			href: "/",
			cta: "Learn more",
			class: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
			iconClass: "stroke-[1.4]",
		},
		{
			Icon: CalendarIcon,
			name: "Calendar",
			background: bg,
			description: "Use the calendar to filter your files by date.",
			href: "/",
			cta: "Learn more",
			class: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
			iconClass: "stroke-[1.4]",
		},
		{
			Icon: BellIcon,
			name: "Notifications",
			background: bg,
			description: "Get notified when someone shares a file or mentions you in a comment.",
			href: "/",
			cta: "Learn more",
			class: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
			iconClass: "stroke-[1.4]",
		},
	];
</script>

<!-- background  -->
{#snippet bg()}
	<img src="" alt="demo" class="absolute -top-20 -right-20 opacity-60" />
{/snippet}

<BentoGrid class="lg:grid-rows-3">
	{#each features as feature}
		<BentoCard {...feature} />
	{/each}
</BentoGrid>
```

## Examples

### 1. Bento Grid Example

```svelte
<script lang="ts">
	import { BentoCard, BentoGrid } from "$lib/components/magic/bento-grid";

	// Icons
	import FileTextIcon from "@lucide/svelte/icons/file-text";
	import InputIcon from "@lucide/svelte/icons/file-input";
	import GlobeIcon from "@lucide/svelte/icons/globe";
	import CalendarIcon from "@lucide/svelte/icons/calendar";
	import BellIcon from "@lucide/svelte/icons/bell";

	import type { Snippet } from "svelte";

	type Feature = {
		Icon: typeof FileTextIcon;
		name: string;
		background: Snippet;
		description: string;
		href: string;
		cta: string;
		class: string;
		iconClass?: string;
	};

	let features: Feature[] = [
		{
			Icon: FileTextIcon,
			name: "Save your files",
			background: bg,
			description: "We automatically save your files as you type.",
			href: "/",
			cta: "Learn more",
			class: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
			iconClass: "stroke-[1.4]",
		},
		{
			Icon: InputIcon,
			name: "Full text search",
			background: bg,
			description: "Search through all your files in one place.",
			href: "/",
			cta: "Learn more",
			class: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
			iconClass: "stroke-[1.4]",
		},
		{
			Icon: GlobeIcon,
			name: "Multilingual",
			background: bg,
			description: "Supports 100+ languages and counting.",
			href: "/",
			cta: "Learn more",
			class: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
			iconClass: "stroke-[1.4]",
		},
		{
			Icon: CalendarIcon,
			name: "Calendar",
			background: bg,
			description: "Use the calendar to filter your files by date.",
			href: "/",
			cta: "Learn more",
			class: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
			iconClass: "stroke-[1.4]",
		},
		{
			Icon: BellIcon,
			name: "Notifications",
			background: bg,
			description: "Get notified when someone shares a file or mentions you in a comment.",
			href: "/",
			cta: "Learn more",
			class: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
			iconClass: "stroke-[1.4]",
		},
	];
</script>

<!-- background  -->
{#snippet bg()}
	<img src="" alt="demo" class="absolute -top-20 -right-20 opacity-60" />
{/snippet}

<BentoGrid class="lg:grid-rows-3">
	{#each features as feature}
		<BentoCard {...feature} />
	{/each}
</BentoGrid>
```

## Usage

Import the component and wrap the content you want it to affect. Adjust the optional props to tune the visual behavior.

## Props

### Bento Grid

Bento grid component

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | `""` | Additional CSS classes to apply |
| `children` | `Snippet` | `-` | The content to be displayed inside the grid |

### Bento Card

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | `-` | The name of the card, displayed as the title |
| `class` | `string` | `""` | Additional CSS classes to apply |
| `background` | `Snippet` | `-` | The background of the card, can be a color or an image |
| `Icon` | `Component<any>` | `-` | The icon to be displayed on the card, passed as a Svelte component |
| `iconClass` | `string` | `""` | - |
| `description` | `string` | `-` | A brief description of the card's content |
| `href` | `string` | `-` | The URL to navigate to when the card is clicked |
| `cta` | `string` | `-` | The call-to-action text displayed on the card |
