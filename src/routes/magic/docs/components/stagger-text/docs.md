# Stagger Text

A description for Stagger Text component.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/stagger-text.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/stagger-text.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/stagger-text.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/stagger-text.json
```

## Preview

```svelte
<script lang="ts">
	import { StaggerText } from "$lib/components/magic/stagger-text";
</script>

<div>
	<StaggerText text="Stagger Text!!" />
</div>

<style>
</style>
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
	import { StaggerText } from "$lib/components/magic/stagger-text";
</script>

<div>
	<StaggerText text="Stagger Text!!" />
</div>

<style>
</style>
```

## Usage

Import `StaggerText` from `$lib/components/magic/stagger-text` and pass the props you need for your use case.

## Props

A component for Stagger Text.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | `""` | Additional CSS classes to apply |
