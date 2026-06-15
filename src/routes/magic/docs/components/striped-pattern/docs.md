# Striped Pattern

A background striped pattern made with SVGs, fully customizable using Tailwind CSS.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/striped-pattern.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/striped-pattern.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/striped-pattern.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/striped-pattern.json
```

## Preview

```svelte
<script lang="ts">
	import { StripedPattern } from "$lib/components/magic/striped-pattern";
</script>

<div
	class="relative flex h-125 w-full flex-col items-center justify-center overflow-hidden rounded-lg border"
>
	<StripedPattern class="mask-[radial-gradient(300px_circle_at_center,white,transparent)]" />
</div>
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
	import { StripedPattern } from "$lib/components/magic/striped-pattern";
</script>

<div
	class="relative flex h-125 w-full flex-col items-center justify-center overflow-hidden rounded-lg border"
>
	<StripedPattern class="mask-[radial-gradient(300px_circle_at_center,white,transparent)]" />
</div>
```

## Usage

Import `StripedPattern` from `$lib/components/magic/striped-pattern` and pass the props you need for your use case.

## Props

A component for .

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | `""` | Additional CSS classes to apply |
| `direction` | `"left" \| "right"` | `"left"` | Direction of the stripes |
| `width` | `number` | `10` | Width of the pattern |
| `height` | `number` | `10` | Height of the pattern |
