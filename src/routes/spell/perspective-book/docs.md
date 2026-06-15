# Perspective Book

A 3D book component with hover animation and customizable appearance.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/perspective-book.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/perspective-book.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/s/perspective-book.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/s/perspective-book.json
```

## Preview

```svelte
<script lang="ts">
	import { PerspectiveBook } from "$lib/components/spell/perspective-book";
	import Code2Icon from "@lucide/svelte/icons/code-2";
</script>

<div class="py-10">
	<PerspectiveBook size="lg" textured class="bg-[#5f4638] text-stone-100">
		<div class="flex h-full flex-col justify-between">
			<div class="space-y-4">
				<div class="flex items-start justify-between gap-4">
					<h2 class="max-w-[12ch] text-lg leading-5 font-semibold sm:text-xl">
						Perspective Interfaces
					</h2>
					<Code2Icon class="mt-0.5 size-6 shrink-0" />
				</div>

				<p
					class="max-w-[18ch] text-xs/relaxed font-medium text-stone-200/80 sm:text-sm/relaxed"
				>
					A layered cover that turns any slot content into a dramatic book-style reveal.
				</p>
			</div>

			<div class="space-y-1">
				<p
					class="text-[0.65rem] font-semibold tracking-[0.28em] text-stone-200/70 uppercase"
				>
					Spell Collection
				</p>
				<span class="font-serif text-base font-medium sm:text-lg">Svelte Animations</span>
			</div>
		</div>
	</PerspectiveBook>
</div>
```

## Examples

### 1. Textured Preview

```svelte
<script lang="ts">
	import { PerspectiveBook } from "$lib/components/spell/perspective-book";
	import Code2Icon from "@lucide/svelte/icons/code-2";
	import { Label } from "$lib/components/ui/label/index.js";
	import { Switch } from "$lib/components/ui/switch/index.js";
	import { Code2 } from "@lucide/svelte";
	import Svelte from "$lib/components/icons/svelte.svelte";

	let textured = $state(true);
</script>

<div class="py-10">
	<div
		class="border-input has-data-[state=checked]:border-ring relative mb-10 flex w-full items-start gap-2 rounded-lg border p-4 shadow-xs shadow-black/[.04]"
	>
		<Switch
			bind:checked={textured}
			class="order-1 h-4 w-6 after:absolute after:inset-0 [&_span]:size-3 data-[state=checked]:[&_span]:translate-x-2 data-[state=checked]:[&_span]:rtl:-translate-x-2"
			id="show-textured"
		/>
		<div class="grid grow gap-2">
			<Label for="show-textured">Toggle Textured</Label>
			<p id="description" class="text-muted-foreground text-xs">
				Zoom in to view the texture details.
			</p>
		</div>
	</div>
	<PerspectiveBook size="lg" {textured}>
		<div class="flex h-full flex-col justify-between">
			<div class="flex flex-col gap-4">
				<div class="flex items-start justify-between gap-4">
					<h2 class="max-w-[12ch] text-lg leading-5 font-semibold sm:text-xl">
						Building Interfaces the Svelte Way
					</h2>
					<!-- <Code2 class="mt-0.5 size-6 shrink-0" /> -->
					<Svelte class="size-14" />
				</div>

				<p
					class="text-muted-foreground/80 max-w-[18ch] text-xs/relaxed font-medium sm:text-sm/relaxed"
				>
					A compact tribute to compiler-driven UI design and the creator behind it.
				</p>
			</div>

			<div class="space-y-1">
				<p class="text-primary/50 text-[0.65rem] font-semibold tracking-[0.28em] uppercase">
					Creator of Svelte
				</p>
				<span class="font-serif text-base font-medium sm:text-lg">Rich Harris</span>
			</div>
		</div>
	</PerspectiveBook>
</div>
```

## Usage

Import `PerspectiveBook` from `$lib/components/spell/perspective-book` and pass the props you need for your use case.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `"sm" \| "default" \| "lg"` | `"default"` | - |
| `textured` | `boolean` | `false` | - |
| `class` | `string` | `''` | - |
| `style` | `string` | `-` | - |
