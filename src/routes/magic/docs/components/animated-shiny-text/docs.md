# Animated Shiny Text

A light glare effect which pans across text making it appear as if it is shimmering.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-shiny-text.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-shiny-text.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-shiny-text.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-shiny-text.json
```

## Preview

```svelte
<script lang="ts">
	import AnimatedShinyText from "$lib/components/magic/animated-shiny-text/animated-shiny-text.svelte";
	import { cn } from "$lib/utils";
	import { ArrowRightIcon } from "@lucide/svelte";
</script>

<div class="z-10 flex min-h-64 items-center justify-center">
	<div
		class={cn(
			"group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
		)}
	>
		<AnimatedShinyText
			class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
		>
			<span>✨ Introducing Magic UI</span>
			<ArrowRightIcon
				class="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
			/>
		</AnimatedShinyText>
	</div>
</div>
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
	import AnimatedShinyText from "$lib/components/magic/animated-shiny-text/animated-shiny-text.svelte";
	import { cn } from "$lib/utils";
	import { ArrowRightIcon } from "@lucide/svelte";
</script>

<div class="z-10 flex min-h-64 items-center justify-center">
	<div
		class={cn(
			"group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
		)}
	>
		<AnimatedShinyText
			class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
		>
			<span>✨ Introducing Magic UI</span>
			<ArrowRightIcon
				class="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
			/>
		</AnimatedShinyText>
	</div>
</div>
```

## Usage

Import the component and wrap the content you want it to affect. Adjust the optional props to tune the visual behavior.

If the component depends on global CSS, add the following styles:

```css
@theme inline {
  --animate-shiny-text: shiny-text 8s infinite;

  @keyframes shiny-text {
    0%,
    90%,
    100% {
      background-position: calc(-100% - var(--shiny-width)) 0;
    }
    30%,
    60% {
      background-position: calc(100% + var(--shiny-width)) 0;
    }
  }
}
```

## Props

A text component with a light glare shimmer effect.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `shimmerWidth` | `number` | `100` | The width of the shimmer effect in pixels |
| `class` | `string` | `""` | Additional CSS classes to apply |
| `duration` | `number` | `8` | The duration of the shimmer animation in seconds |
| `children` | `string \| Svelte snippet` | `-` | The text content to display with the shimmer effect |
