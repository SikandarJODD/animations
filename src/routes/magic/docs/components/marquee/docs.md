# Marquee

An infinite scrolling component that can be used to display text, images, or videos.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/marquee.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/marquee.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/marquee.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/marquee.json
```

## Preview

```svelte
<script lang="ts">
	import Marquee from "$lib/components/magic/marquee/marquee.svelte";
	import ReviewCard from "./review-card.svelte";

	let reviews = $state([
		{
			name: "Jack",
			username: "@jack",
			body: "I've never seen anything like this before. It's amazing. I love it.",
			img: "https://avatar.vercel.sh/jack",
		},
		{
			name: "Jill",
			username: "@jill",
			body: "I don't know what to say. I'm speechless. This is amazing.",
			img: "https://avatar.vercel.sh/jill",
		},
		{
			name: "John",
			username: "@john",
			body: "I'm at a loss for words. This is amazing. I love it.",
			img: "https://avatar.vercel.sh/john",
		},
		{
			name: "Jane",
			username: "@jane",
			body: "I'm at a loss for words. This is amazing. I love it.",
			img: "https://avatar.vercel.sh/jane",
		},
		{
			name: "Jenny",
			username: "@jenny",
			body: "I'm at a loss for words. This is amazing. I love it.",
			img: "https://avatar.vercel.sh/jenny",
		},
		{
			name: "James",
			username: "@james",
			body: "I'm at a loss for words. This is amazing. I love it.",
			img: "https://avatar.vercel.sh/james",
		},
	]);

	let firstRow = $derived(reviews.slice(0, reviews.length / 2));
	let secondRow = $derived(reviews.slice(reviews.length / 2));
</script>

<div class="relative flex w-full flex-col items-center justify-center overflow-hidden">
	<Marquee pauseOnHover class="[--duration:20s]">
		{#each firstRow as review}
			<ReviewCard {...review} />
		{/each}
	</Marquee>
	<Marquee reverse pauseOnHover class="[--duration:20s]">
		{#each secondRow as review}
			<ReviewCard {...review} />
		{/each}
	</Marquee>
	<div
		class="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"
	></div>
	<div
		class="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"
	></div>
</div>
```

## Examples

### 1. Vertical Marquee

A marquee that scrolls vertically.

#### marquee-vertical.svelte

```svelte
<script lang="ts">
	import Marquee from "$lib/components/magic/marquee/marquee.svelte";
	import ReviewCard from "./review-card.svelte";

	let reviews = $state([
		{
			name: "Jack",
			username: "@jack",
			body: "I've never seen anything like this before. It's amazing. I love it.",
			img: "https://avatar.vercel.sh/jack",
		},
		{
			name: "Jill",
			username: "@jill",
			body: "I don't know what to say. I'm speechless. This is amazing.",
			img: "https://avatar.vercel.sh/jill",
		},
		{
			name: "John",
			username: "@john",
			body: "I'm at a loss for words. This is amazing. I love it.",
			img: "https://avatar.vercel.sh/john",
		},
		{
			name: "Jane",
			username: "@jane",
			body: "I'm at a loss for words. This is amazing. I love it.",
			img: "https://avatar.vercel.sh/jane",
		},
		{
			name: "Jenny",
			username: "@jenny",
			body: "I'm at a loss for words. This is amazing. I love it.",
			img: "https://avatar.vercel.sh/jenny",
		},
		{
			name: "James",
			username: "@james",
			body: "I'm at a loss for words. This is amazing. I love it.",
			img: "https://avatar.vercel.sh/james",
		},
	]);

	let firstRow = $derived(reviews.slice(0, reviews.length / 2));
	let secondRow = $derived(reviews.slice(reviews.length / 2));
</script>

<div class="relative flex h-125 w-full flex-row items-center justify-center overflow-hidden">
	<Marquee pauseOnHover vertical class="[--duration:20s]">
		{#each firstRow as review}
			<ReviewCard {...review} />
		{/each}
	</Marquee>
	<Marquee reverse pauseOnHover vertical class="[--duration:20s]">
		{#each secondRow as review}
			<ReviewCard {...review} />
		{/each}
	</Marquee>
	<div
		class="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-linear-to-b"
	></div>
	<div
		class="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t"
	></div>
</div>
```

#### review-card.svelte

```svelte
<script lang="ts">
	import { cn } from "$lib/utils";
	let {
		img,
		name,
		username,
		body,
	}: {
		img: string;
		name: string;
		username: string;
		body: string;
	} = $props();
</script>

<figure
	class={cn(
		"relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
		// light styles
		"border-gray-950/10 bg-gray-950/1 hover:bg-gray-950/5",
		// dark styles
		"dark:border-gray-50/10 dark:bg-gray-50/10 dark:hover:bg-gray-50/15"
	)}
>
	<div class="flex flex-row items-center gap-2">
		<img class="rounded-full" width="32" height="32" alt="" src={img} />
		<div class="flex flex-col">
			<figure>
				<figcaption class="text-sm font-medium dark:text-white">
					{name}
				</figcaption>
			</figure>
			<p class="text-xs font-medium dark:text-white/40">{username}</p>
		</div>
	</div>
	<blockquote class="mt-2 text-sm">{body}</blockquote>
</figure>
```

### 2. 3D Marquee

A marquee with a 3D effect.

#### marquee-3d.svelte

```svelte
<script lang="ts">
	import Marquee from "$lib/components/magic/marquee/marquee.svelte";
	import ReviewCard from "./review-card.svelte";

	let reviews = $state([
		{
			name: "Jack",
			username: "@jack",
			body: "I've never seen anything like this before. It's amazing. I love it.",
			img: "https://avatar.vercel.sh/jack",
		},
		{
			name: "Jill",
			username: "@jill",
			body: "I don't know what to say. I'm speechless. This is amazing.",
			img: "https://avatar.vercel.sh/jill",
		},
		{
			name: "John",
			username: "@john",
			body: "I'm at a loss for words. This is amazing. I love it.",
			img: "https://avatar.vercel.sh/john",
		},
		{
			name: "Jane",
			username: "@jane",
			body: "I'm at a loss for words. This is amazing. I love it.",
			img: "https://avatar.vercel.sh/jane",
		},
		{
			name: "Jenny",
			username: "@jenny",
			body: "I'm at a loss for words. This is amazing. I love it.",
			img: "https://avatar.vercel.sh/jenny",
		},
		{
			name: "James",
			username: "@james",
			body: "I'm at a loss for words. This is amazing. I love it.",
			img: "https://avatar.vercel.sh/james",
		},
	]);

	let firstRow = $derived(reviews.slice(0, reviews.length / 2));
	let secondRow = $derived(reviews.slice(reviews.length / 2));
	let thirdRow = $derived(reviews.slice(0, reviews.length / 2));
	let fourthRow = $derived(reviews.slice(reviews.length / 2));
</script>

<div
	class="relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden perspective-near"
>
	<div
		class="flex flex-row items-center gap-4"
		style="transform:translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg);"
	>
		<Marquee pauseOnHover vertical class="[--duration:20s]">
			{#each firstRow as review}
				<ReviewCard {...review} />
			{/each}
		</Marquee>
		<Marquee reverse pauseOnHover class="[--duration:20s]" vertical>
			{#each secondRow as review}
				<ReviewCard {...review} />
			{/each}
		</Marquee>
		<Marquee reverse pauseOnHover class="[--duration:20s]" vertical>
			{#each thirdRow as review}
				<ReviewCard {...review} />
			{/each}
		</Marquee>
		<Marquee pauseOnHover class="[--duration:20s]" vertical>
			{#each fourthRow as review}
				<ReviewCard {...review} />
			{/each}
		</Marquee>
	</div>
	<div
		class="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-linear-to-b"
	></div>
	<div
		class="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t"
	></div>
	<div
		class="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"
	></div>
	<div
		class="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"
	></div>
</div>
```

#### review-card.svelte

```svelte
<script lang="ts">
	import { cn } from "$lib/utils";
	let {
		img,
		name,
		username,
		body,
	}: {
		img: string;
		name: string;
		username: string;
		body: string;
	} = $props();
</script>

<figure
	class={cn(
		"relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
		// light styles
		"border-gray-950/10 bg-gray-950/1 hover:bg-gray-950/5",
		// dark styles
		"dark:border-gray-50/10 dark:bg-gray-50/10 dark:hover:bg-gray-50/15"
	)}
>
	<div class="flex flex-row items-center gap-2">
		<img class="rounded-full" width="32" height="32" alt="" src={img} />
		<div class="flex flex-col">
			<figure>
				<figcaption class="text-sm font-medium dark:text-white">
					{name}
				</figcaption>
			</figure>
			<p class="text-xs font-medium dark:text-white/40">{username}</p>
		</div>
	</div>
	<blockquote class="mt-2 text-sm">{body}</blockquote>
</figure>
```

## Usage

Import the component and wrap the content you want it to affect. Adjust the optional props to tune the visual behavior.

If the component depends on global CSS, add the following styles:

```css
@theme inline {
  --animate-marquee: marquee var(--duration) infinite linear;
  --animate-marquee-vertical: marquee-vertical var(--duration) linear infinite;

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - var(--gap)));
    }
  }
  @keyframes marquee-vertical {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - var(--gap)));
    }
  }
}
```

## Props

An infinite scrolling component that can be used to display text, images, or videos.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `Snippet` | `-` | The content to scroll inside the marquee |
| `class` | `string` | `""` | Additional CSS classes to apply |
| `reverse` | `boolean` | `false` | Reverse the animation direction |
| `pauseOnHover` | `boolean` | `false` | Pause the animation when hovered |
| `vertical` | `boolean` | `false` | Scroll vertically instead of horizontally |
| `repeat` | `number` | `4` | Number of times to repeat the content for seamless scrolling |
