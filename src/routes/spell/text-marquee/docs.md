# Text Marquee

Animated text marquee component with vertical scrolling.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/text-marquee.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/text-marquee.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/s/text-marquee.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/s/text-marquee.json
```

## Preview

```svelte
<script lang="ts">
	import { TextMarquee } from "$lib/components/spell/text-marquee";

	let phrases = ["Magic", "Spell", "Aceternity", "Luxe", "Indie", "Motion"];
</script>

<TextMarquee items={phrases} height={120} itemHeight={40} speed={0.85}>
	{#snippet prefix()}
		<span class="text-muted-foreground/75 text-3xl font-medium">sv-animations/ </span>
	{/snippet}

	{#snippet children(item)}
		<span class="text-3xl font-medium">{item}</span>
	{/snippet}
</TextMarquee>
```

## Examples

### 1. Tuning Example

```svelte
<script lang="ts">
	import { TextMarquee } from "$lib/components/spell/text-marquee";

	const updates = ["Shipped", "Reviewed", "Published", "Synced", "Archived"];
</script>

<div class="flex justify-center py-10">
	<div class="rounded-2xl border bg-zinc-950 px-6 py-8 text-zinc-50 shadow-sm">
		<div class="mb-5 space-y-1">
			<p class="text-xs font-semibold tracking-[0.24em] text-zinc-400 uppercase">
				Tighter Settings
			</p>
			<p class="max-w-[18rem] text-sm text-zinc-300">
				A smaller viewport and quicker cycle create a compact announcement strip.
			</p>
		</div>

		<TextMarquee items={updates} height={96} itemHeight={28} speed={0.55} class="min-w-[10rem]">
			{#snippet children(item)}
				<span class="text-sm font-semibold tracking-[0.28em] uppercase">{item}</span>
			{/snippet}
		</TextMarquee>
	</div>
</div>
```

## Usage

Pass an `items` array and render each item through the `children` snippet. Use `delay` to control how quickly new entries appear.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `T[]` | `required` | The ordered list of items to animate through vertically. |
| `children` | `Snippet<[T, number]>` | `required` | Snippet used to render each animated row with the current item and index. |
| `prefix` | `Snippet` | `-` | Optional snippet rendered once before the animated viewport. |
| `speed` | `number` | `1` | Scales the total loop duration; larger values make the marquee cycle more slowly. |
| `height` | `number` | `200` | Sets the visible viewport height in pixels. |
| `itemHeight` | `number` | `40` | Sets the height of each animated row in pixels. |
| `class` | `string` | `-` | Custom classes applied to the root wrapper. |
| `style` | `string` | `-` | Inline styles forwarded to the root wrapper. |
