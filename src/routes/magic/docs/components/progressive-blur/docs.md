# Progressive Blur

A component that creates a progressive blur effect at the top, bottom, or both edges of a container with customizable blur levels and positioning.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/progressive-blur.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/progressive-blur.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/progressive-blur.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/progressive-blur.json
```

## Preview

```svelte
<script>
	import { ProgressiveBlur } from "$lib/components/magic/progressive-blur";
	import { ScrollArea } from "$lib/components/ui/scroll-area";
</script>

<div class="relative w-full rounded-xl border">
	<ScrollArea fadeEffect={false} class="relative h-100 overflow-hidden">
		<div class="flex flex-col gap-2 p-4">
			{#each { length: 20 } as _, index}
				<div class="bg-card flex h-20 w-full items-center justify-center rounded-xl border">
					{index}
				</div>
			{/each}
		</div>
		<ProgressiveBlur position="bottom" height="40%" />
	</ScrollArea>
</div>
```

## Examples

### 1. Default Example

```svelte
<script>
	import { ProgressiveBlur } from "$lib/components/magic/progressive-blur";
	import { ScrollArea } from "$lib/components/ui/scroll-area";
</script>

<div class="relative w-full rounded-xl border">
	<ScrollArea fadeEffect={false} class="relative h-100 overflow-hidden">
		<div class="flex flex-col gap-2 p-4">
			{#each { length: 20 } as _, index}
				<div class="bg-card flex h-20 w-full items-center justify-center rounded-xl border">
					{index}
				</div>
			{/each}
		</div>
		<ProgressiveBlur position="bottom" height="40%" />
	</ScrollArea>
</div>
```

## Usage

Import `ProgressiveBlur` from `$lib/components/magic/progressive-blur` and pass the props you need for your use case.

## Props

A component that creates a progressive blur effect with customizable positioning and blur levels.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | `""` | Additional CSS classes to apply |
| `height` | `string` | `"30%"` | Height of the blur area |
| `position` | `"top" \| "bottom" \| "both"` | `"bottom"` | Position of the blur effect |
| `blurLevels` | `number[]` | `[0.5, 1, 2, 4, 8, 16, 32, 64]` | Array of blur levels in pixels for progressive blur layers |
