# Animated List

A component for creating animated lists with smooth transitions between items.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-list.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-list.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-list.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-list.json
```

## Preview

```svelte
<script lang="ts">
	import { AnimatedList } from "$lib/components/magic/animated-list";
	import { cn } from "$lib/utils";
	import Notification from "./notification.svelte";

	interface NotificationItem {
		name: string;
		description: string;
		icon: string;
		color: string;
		time: string;
		id: number;
	}

	interface AnimatedListDemoProps {
		class?: string;
	}

	let { class: className }: AnimatedListDemoProps = $props();

	let baseNotifications = [
		{
			name: "Payment received",
			description: "Magic UI",
			time: "15m ago",
			icon: "💸",
			color: "#00C9A7",
		},
		{
			name: "User signed up",
			description: "Magic UI",
			time: "10m ago",
			icon: "👤",
			color: "#FFB800",
		},
		{
			name: "New message",
			description: "Magic UI",
			time: "5m ago",
			icon: "💬",
			color: "#FF3D71",
		},
		{
			name: "New event",
			description: "Magic UI",
			time: "2m ago",
			icon: "🗞️",
			color: "#1E86FF",
		},
	];

	let notifications: NotificationItem[] = Array.from({ length: 10 }, (_, i) =>
		baseNotifications.map((notif, j) => ({
			...notif,
			id: i * baseNotifications.length + j,
		}))
	).flat();
</script>

<div class={cn("relative flex h-125 w-full flex-col overflow-hidden p-2", className)}>
	<AnimatedList items={notifications}>
		{#snippet children(item, i)}
			<Notification {...item} />
		{/snippet}
	</AnimatedList>

	<div
		class="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"
	></div>
</div>
```

## Examples

### 1. Notification Feed

```svelte
<script lang="ts">
	import { AnimatedList } from "$lib/components/magic/animated-list";
	import { cn } from "$lib/utils";
	import Notification from "./notification.svelte";

	interface NotificationItem {
		name: string;
		description: string;
		icon: string;
		color: string;
		time: string;
		id: number;
	}

	interface AnimatedListDemoProps {
		class?: string;
	}

	let { class: className }: AnimatedListDemoProps = $props();

	let baseNotifications = [
		{
			name: "Payment received",
			description: "Magic UI",
			time: "15m ago",
			icon: "💸",
			color: "#00C9A7",
		},
		{
			name: "User signed up",
			description: "Magic UI",
			time: "10m ago",
			icon: "👤",
			color: "#FFB800",
		},
		{
			name: "New message",
			description: "Magic UI",
			time: "5m ago",
			icon: "💬",
			color: "#FF3D71",
		},
		{
			name: "New event",
			description: "Magic UI",
			time: "2m ago",
			icon: "🗞️",
			color: "#1E86FF",
		},
	];

	let notifications: NotificationItem[] = Array.from({ length: 10 }, (_, i) =>
		baseNotifications.map((notif, j) => ({
			...notif,
			id: i * baseNotifications.length + j,
		}))
	).flat();
</script>

<div class={cn("relative flex h-125 w-full flex-col overflow-hidden p-2", className)}>
	<AnimatedList items={notifications}>
		{#snippet children(item, i)}
			<Notification {...item} />
		{/snippet}
	</AnimatedList>

	<div
		class="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"
	></div>
</div>
```

```svelte
<script lang="ts">
	import { cn } from "$lib/utils";

	interface NotificationProps {
		name: string;
		description: string;
		icon: string;
		color: string;
		time: string;
	}

	let { name, description, icon, color, time }: NotificationProps = $props();
</script>

<div
	class={cn(
		"relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
		"transition-all duration-200 ease-in-out hover:scale-[103%]",
		"bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
		"transform-gpu dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]"
	)}
>
	<div class="flex flex-row items-center gap-3">
		<div
			class="flex size-10 items-center justify-center rounded-2xl"
			style="background-color: {color};"
		>
			<span class="text-lg">{icon}</span>
		</div>
		<div class="flex flex-col overflow-hidden">
			<div
				class="flex flex-row items-center text-lg font-medium whitespace-pre dark:text-white"
			>
				<span class="text-sm sm:text-lg">{name}</span>
				<span class="mx-1">·</span>
				<span class="text-xs text-gray-500">{time}</span>
			</div>
			<p class="text-sm font-normal dark:text-white/60">
				{description}
			</p>
		</div>
	</div>
</div>
```

## Usage

Pass an `items` array and render each item through the `children` snippet. The component progressively reveals list entries using the configured `delay`.

```svelte
<script lang="ts">
	import { AnimatedList } from "$lib/components/magic/animated-list";

	const items = [
		{ id: 1, label: "First item" },
		{ id: 2, label: "Second item" },
		{ id: 3, label: "Third item" },
	];
</script>

<AnimatedList {items} delay={1000}>
	{#snippet children(item)}
		<div class="rounded-md border p-3">{item.label}</div>
	{/snippet}
</AnimatedList>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | `""` | Additional CSS classes to apply |
| `delay` | `number` | `1000` | Delay in milliseconds before the next item is revealed |
| `items` | `T[]` | `[]` | An array of items to be rendered in the animated list |
| `children` | `Snippet<[T, number]>` | `required` | A render snippet that receives each item and its index |
