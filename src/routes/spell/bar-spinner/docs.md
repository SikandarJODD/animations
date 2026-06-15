# Bar Spinner

A compact loading spinner made from twelve fading bars, ideal for inline waits, cards, dialogs, and button-adjacent status indicators.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/bar-spinner.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/bar-spinner.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/s/bar-spinner.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/s/bar-spinner.json
```

## Preview

```svelte
<script lang="ts">
	import { BarSpinner } from "$lib/components/spell/bar-spinner";
</script>

<BarSpinner />
```

## Examples

### 1. Size

```svelte
<script lang="ts">
	import { BarSpinner } from "$lib/components/spell/bar-spinner";
</script>

<div class="flex items-center gap-4">
	<BarSpinner size={16} />
	<BarSpinner size={20} />
	<BarSpinner size={24} />
	<BarSpinner size={32} />
</div>
```

## Usage

Import `BarSpinner` from `$lib/components/spell/bar-spinner` and pass the props you need for your use case.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `number` | `20` | - |
| `color` | `string` | `"currentColor"` | - |
| `class` | `string \| undefined` | `undefined` | - |
