# Scroll Progress

A description for Scroll Progress component.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/scroll-progress.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/scroll-progress.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/scroll-progress.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/scroll-progress.json
```

## Preview

```svelte
<script lang="ts">
	import { ScrollProgress } from "$lib/components/magic/scroll-progress";
</script>

<div class="z-10 rounded-lg p-4">
	<ScrollProgress class="top-15.5" />
	<h2 class="pb-4 font-bold">Note: The scroll progress is shown below the navbar of the page.</h2>
</div>
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
	import { ScrollProgress } from "$lib/components/magic/scroll-progress";
</script>

<div class="z-10 rounded-lg p-4">
	<ScrollProgress class="top-15.5" />
	<h2 class="pb-4 font-bold">Note: The scroll progress is shown below the navbar of the page.</h2>
</div>
```

## Usage

Import `ScrollProgress` from `$lib/components/magic/scroll-progress` and pass the props you need for your use case.

## Props

A component for Scroll Progress.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | `""` | Additional CSS classes to apply |
