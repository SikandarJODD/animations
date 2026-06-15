# Marquee

Infinite scrolling marquee component with customizable speed and direction.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/marquee.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/marquee.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/s/marquee.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/s/marquee.json
```

## Preview

```svelte
<script lang="ts">
	import { Marquee } from "$lib/components/spell/marquee";
	const logos = [
		{ src: "/logos/vercel.svg", alt: "Vercel logo" },
		{ src: "/logos/google.svg", alt: "Google logo" },
		{ src: "/logos/framer.svg", alt: "Framer logo" },
		{ src: "/logos/discord.svg", alt: "Discord logo" },
		{ src: "/logos/openai.svg", alt: "OpenAI logo" },
		{ src: "/logos/phantom.svg", alt: "Phantom logo" },
		{ src: "/logos/descript.svg", alt: "Descript logo" },
		{ src: "/logos/netflix.svg", alt: "Netflix logo" },
		{ src: "/logos/linear.svg", alt: "Linear logo" },
		{ src: "/logos/notion.svg", alt: "Notion logo" },
		{ src: "/logos/shopify.svg", alt: "Shopify logo" },
		{ src: "/logos/duolingo.svg", alt: "Duolingo logo" },
		{ src: "/logos/ramp.svg", alt: "Ramp logo" },
		{ src: "/logos/tesla.svg", alt: "Tesla logo" },
		{ src: "/logos/opensea.svg", alt: "OpenSea logo" },
		{ src: "/logos/cursor.svg", alt: "Cursor logo" },
	];
</script>

<Marquee class="flex py-4" duration={40}>
	{#each logos as logo}
		<img
			src={logo.src}
			alt={logo.alt}
			width={96}
			height={96}
			class="pointer-events-none mx-8 h-24 w-24 object-contain opacity-70 select-none not-dark:invert-100"
		/>
	{/each}
</Marquee>
```

## Examples

### 1. Pause on Hover

```svelte
<script lang="ts">
	import { Marquee } from "$lib/components/spell/marquee";
	import { Avatar, AvatarImage, AvatarFallback } from "$lib/components/ui/avatar";
	const users = [
		{ id: "alice", name: "Alice", role: "Product Manager", initials: "AL" },
		{ id: "bob", name: "Bob", role: "Software Engineer", initials: "BO" },
		{ id: "carol", name: "Carol", role: "UX Designer", initials: "CA" },
		{ id: "david", name: "David", role: "Data Scientist", initials: "DA" },
		{ id: "emma", name: "Emma", role: "Marketing Lead", initials: "EM" },
		{ id: "frank", name: "Frank", role: "DevOps Engineer", initials: "FR" },
		{ id: "grace", name: "Grace", role: "Design Engineer", initials: "GR" },
		{ id: "henry", name: "Henry", role: "QA Specialist", initials: "HE" },
	];
</script>

<Marquee pauseOnHover class="py-4">
	{#each users as user}
		<div class="mx-2 flex gap-3 rounded-md border p-3 shadow-xs">
			<Avatar class="my-auto size-9 border">
				<AvatarImage
					src={`https://api.dicebear.com/9.x/dylan/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&seed=${user.id}`}
					alt={`@${user.id}`}
				/>
				<AvatarFallback>{user.initials}</AvatarFallback>
			</Avatar>
			<div class="flex flex-col justify-between">
				<h1 class="text-sm font-medium">{user.name}</h1>
				<p class="text-muted-foreground text-xs">{user.role}</p>
			</div>
		</div>
	{/each}
</Marquee>
```

### 2. Vertical Stack

Switch the direction to vertical and tune the fade amount to create a stacked announcement or feature rail.

```svelte
<script lang="ts">
	import { Marquee } from "$lib/components/spell/marquee";
	import { cn } from "$lib/utils";

	const notifications = [
		{ text: "New message received", time: "2 min ago", type: "info" },
		{ text: "Upload completed", time: "5 min ago", type: "success" },
		{ text: "Meeting starting soon", time: "10 min ago", type: "warning" },
		{ text: "Task completed", time: "15 min ago", type: "success" },
		{ text: "New follower", time: "20 min ago", type: "info" },
		{ text: "System update available", time: "30 min ago", type: "warning" },
	];
</script>

<div class="h-75">
	<Marquee direction="up" class="h-full">
		{#each notifications as notification, index}
			<div class="bg-card mx-4 my-2 flex items-center gap-3 rounded-md border p-3">
				<div
					class={cn(
						"h-2 w-2 rounded-full",
						notification.type === "success" && "bg-green-500",
						notification.type === "warning" && "bg-yellow-500",
						notification.type === "info" && "bg-blue-500"
					)}
				></div>
				<div class="flex-1">
					<p class="text-sm font-medium">{notification.text}</p>
					<p class="text-muted-foreground text-xs">
						{notification.time}
					</p>
				</div>
			</div>
		{/each}
	</Marquee>
</div>
```

## Usage

Import the component and wrap the content you want it to affect. Adjust the optional props to tune the visual behavior.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `Snippet` | `required` | - |
| `duration` | `number` | `20` | - |
| `pauseOnHover` | `boolean` | `false` | - |
| `direction` | `"left" \| "right" \| "up" \| "down"` | `"left"` | - |
| `fade` | `boolean` | `true` | - |
| `fadeAmount` | `number` | `10` | - |
| `class` | `string` | `''` | - |
| `style` | `string` | `''` | - |
