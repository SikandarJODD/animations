# Logo Carousel

Animated carousel component that cycles through sets of logos with staggered animations.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/logo-carousel.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/logo-carousel.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/s/logo-carousel.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/s/logo-carousel.json
```

## Preview

```svelte
<script lang="ts">
	import { LogoCarousel } from "$lib/components/spell/logo-carousel";

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

<LogoCarousel items={logos} count={4} class="gap-6 sm:gap-10">
	{#snippet children(item)}
		<img
			src={item.src}
			alt={item.alt}
			width={96}
			height={96}
			class="pointer-events-none h-24 w-24 object-contain opacity-70 select-none not-dark:invert-100"
		/>
	{/snippet}
</LogoCarousel>
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
	import { LogoCarousel } from "$lib/components/spell/logo-carousel";

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

<LogoCarousel items={logos} count={4} class="gap-6 sm:gap-10">
	{#snippet children(item)}
		<img
			src={item.src}
			alt={item.alt}
			width={96}
			height={96}
			class="pointer-events-none h-24 w-24 object-contain opacity-70 select-none not-dark:invert-100"
		/>
	{/snippet}
</LogoCarousel>
```

## Usage

Pass an `items` array and render each item through the `children` snippet. Use `delay` to control how quickly new entries appear.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `T[]` | `required` | - |
| `children` | `Snippet<[T, number]>` | `required` | - |
| `stagger` | `number` | `0.14` | - |
| `count` | `number` | `-` | - |
| `duration` | `number` | `600` | Controls the enter and exit animation duration for each item in milliseconds. |
| `interval` | `number` | `2500` | - |
| `initialDelay` | `number` | `500` | - |
| `class` | `string` | `''` | - |
