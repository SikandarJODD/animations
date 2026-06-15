# Smooth Cursor

A description for Smooth Cursor component.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/smooth-cursor.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/smooth-cursor.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/smooth-cursor.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/smooth-cursor.json
```

## Preview

```svelte
<script lang="ts">
	import { SmoothCursor } from "$lib/components/magic/smooth-cursor";
</script>

<div>
	<span class="hidden md:block">Move your mouse around</span>
	<span class="block md:hidden">Tap anywhere to see the cursor</span>
	<SmoothCursor />
</div>
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
	import { SmoothCursor } from "$lib/components/magic/smooth-cursor";
</script>

<div>
	<span class="hidden md:block">Move your mouse around</span>
	<span class="block md:hidden">Tap anywhere to see the cursor</span>
	<SmoothCursor />
</div>
```

## Usage

Import `SmoothCursor` from `$lib/components/magic/smooth-cursor` and pass the props you need for your use case.

## Props

A component for Smooth Cursor.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | `""` | Additional CSS classes to apply |
