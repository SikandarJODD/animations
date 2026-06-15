# Fallback Avatar

A seeded avatar canvas that renders a deterministic color composition with hover-only animation and a built-in 2D fallback.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/fallback-avatar.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/fallback-avatar.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/s/fallback-avatar.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/s/fallback-avatar.json
```

## Preview

```svelte
<script lang="ts">
	import { FallbackAvatar } from "$lib/components/spell/fallback-avatar";

	const names = ["xxtomm", "svelte", "neo", "Aidan", "dheeraj"];
</script>

<div class="flex flex-wrap items-center gap-3">
	{#each names as name}
		<div class="flex flex-col items-center gap-1">
			<FallbackAvatar class="border" {name} size={32} />
			<span class="text-muted-foreground text-[11px]">{name}</span>
		</div>
	{/each}
</div>
```

## Examples

### 1. Size

Use the same seeded avatar across multiple size values when you need tiny inline chips, default profile dots, or larger hero accents.

```svelte
<script lang="ts">
	import { FallbackAvatar } from "$lib/components/spell/fallback-avatar";

	const sizes = [20, 28, 36, 44] as const;
</script>

<div class="flex items-end gap-6">
	{#each sizes as size}
		<div class="flex flex-col items-center gap-3">
			<FallbackAvatar class="border" name="sun" {size} />
			<span class="font-mono text-xs text-neutral-600 dark:text-neutral-400">{size}px</span>
		</div>
	{/each}
</div>
```

### 2. Animated

Compare hover-enabled rendering with a static variant when you want motion only in emphasis-heavy surfaces.

```svelte
<script lang="ts">
	import { FallbackAvatar } from "$lib/components/spell/fallback-avatar";
</script>

<div class="flex flex-wrap items-center gap-6">
	<div class="flex flex-col items-center gap-2">
		<FallbackAvatar class="border" name="animated" size={56} />
		<div class="text-center">
			<p class="text-sm font-medium">Animated</p>
			<p class="text-muted-foreground text-xs">Hover to animate</p>
		</div>
	</div>

	<div class="flex flex-col items-center gap-2">
		<FallbackAvatar class="border" name="animated" size={56} animated={false} />
		<div class="text-center">
			<p class="text-sm font-medium">Static</p>
			<p class="text-muted-foreground text-xs">Animation disabled</p>
		</div>
	</div>
</div>
```

## Usage

Import `FallbackAvatar` from `$lib/components/spell/fallback-avatar` and pass the props you need for your use case.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | `required` | The seed used to derive the avatar composition, color palette, and motion anchors. |
| `size` | `number` | `32` | Controls the rendered avatar size in CSS pixels. |
| `animated` | `boolean` | `true` | Enables the hover-only animation loop for the avatar surface. |
| `class` | `ClassValue` | `undefined` | Custom classes merged onto the root canvas element. |
| `style` | `string` | `undefined` | Inline styles appended to the root canvas element. |
