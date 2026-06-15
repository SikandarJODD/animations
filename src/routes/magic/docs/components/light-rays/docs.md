# Light Rays

A component with animated light rays which shine down from above.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/light-rays.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/light-rays.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/light-rays.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/light-rays.json
```

## Preview

```svelte
<script lang="ts">
	import { LightRays } from "$lib/components/magic/light-rays";
</script>

<div class="relative h-125 w-full overflow-hidden rounded-lg border">
	<div
		class="relative z-10 flex h-full flex-col items-center justify-center gap-4 px-6 text-center"
	>
		<span
			class="text-xs font-semibold tracking-[0.35em] text-slate-800/60 uppercase dark:text-slate-200/60"
		>
			Ambient glow
		</span>
		<h1 class="text-foreground text-4xl font-bold md:text-5xl">Light Rays</h1>
		<p class="max-w-md text-sm text-slate-800/80 md:text-base dark:text-slate-200/80">
			Drop this component into any container and it will fill the space with softly animated
			light rays shining from above.
		</p>
	</div>
	<LightRays />
</div>
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
	import { LightRays } from "$lib/components/magic/light-rays";
</script>

<div class="relative h-125 w-full overflow-hidden rounded-lg border">
	<div
		class="relative z-10 flex h-full flex-col items-center justify-center gap-4 px-6 text-center"
	>
		<span
			class="text-xs font-semibold tracking-[0.35em] text-slate-800/60 uppercase dark:text-slate-200/60"
		>
			Ambient glow
		</span>
		<h1 class="text-foreground text-4xl font-bold md:text-5xl">Light Rays</h1>
		<p class="max-w-md text-sm text-slate-800/80 md:text-base dark:text-slate-200/80">
			Drop this component into any container and it will fill the space with softly animated
			light rays shining from above.
		</p>
	</div>
	<LightRays />
</div>
```

## Usage

Import `LightRays` from `$lib/components/magic/light-rays` and pass the props you need for your use case.

## Props

A component for Light Rays.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | `""` | Additional CSS classes to apply |
| `count` | `number` | `7` | Number of light rays to render |
| `color` | `string` | `"rgba(160, 210, 255, 0.2)"` | Color of the light rays |
| `blur` | `number` | `36` | Blur of the light rays |
| `speed` | `number` | `14` | Speed of the light rays |
| `length` | `string` | `"70vh"` | Length of the light rays |
| `style` | `string` | `""` | Additional CSS styles to apply |
