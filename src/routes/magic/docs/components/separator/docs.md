# Separator

A flexible horizontal separator for dividing content with solid or gradient lines and optional centered labels.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/separator.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/separator.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/separator.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/separator.json
```

## Preview

```svelte
<script lang="ts">
	import { Separator } from "$lib/components/magic/separator";
</script>

<div class="flex min-h-64 w-full items-center px-6 md:px-20">
	<Separator />
</div>
```

## Examples

### 1. Gradient

A softly fading gradient separator.

```svelte
<script lang="ts">
	import { Separator } from "$lib/components/magic/separator";
</script>

<div class="flex min-h-64 w-full items-center px-6 md:px-20">
	<Separator gradient />
</div>
```

### 2. Label

A separator with a centered text label.

```svelte
<script lang="ts">
	import { Separator } from "$lib/components/magic/separator";
</script>

<div class="flex min-h-64 w-full items-center px-6 md:px-20">
	<Separator>
		<div class="px-2">Section</div>
	</Separator>
</div>
```

### 3. Gradient with Label

A gradient separator framing a centered text label.

```svelte
<script lang="ts">
	import { Separator } from "$lib/components/magic/separator";
</script>

<div class="flex min-h-64 w-full items-center px-6 md:px-20">
	<Separator gradient>
		<div class="px-2">Section</div>
	</Separator>
</div>
```

### 4. Pill Label

A separator with a bordered pill-shaped label.

```svelte
<script lang="ts">
	import { Separator } from "$lib/components/magic/separator";
</script>

<div class="flex min-h-64 w-full items-center px-6 md:px-20">
	<Separator>
		<div class="rounded-full border px-4 py-1">Section</div>
	</Separator>
</div>
```

### 5. Dashed Pill Label

A separator with a dashed pill-shaped label.

```svelte
<script lang="ts">
	import { Separator } from "$lib/components/magic/separator";
</script>

<div class="flex min-h-64 w-full items-center px-6 md:px-20">
	<Separator>
		<div class="rounded-full border border-dashed px-4 py-1">Section</div>
	</Separator>
</div>
```

### 6. Icon Label

A gradient separator with a centered icon treatment.

```svelte
<script lang="ts">
	import { Separator } from "$lib/components/magic/separator";
</script>

<div class="flex min-h-64 w-full items-center px-6 md:px-20">
	<Separator gradient>
		<div class="rounded-full border p-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-label="Add section"
			>
				<path d="M5 12h14" />
				<path d="M12 5v14" />
			</svg>
		</div>
	</Separator>
</div>
```

## Usage

Import the component and wrap the content you want it to affect. Adjust the optional props to tune the visual behavior.

## Props

A horizontal divider with optional gradient styling and centered snippet content.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | `-` | Additional CSS classes applied to the separator line |
| `gradient` | `boolean` | `false` | Whether to render the separator line with a fading gradient |
| `children` | `Snippet` | `-` | Optional content rendered as a centered label between the separator lines |
| `textClass` | `string` | `""` | Additional CSS classes applied to the centered label wrapper |
