# Globe

An autorotating, interactive, and highly performant globe made using WebGL.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/globe.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/globe.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/globe.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/globe.json
```

## Preview

```svelte
<script>
	import { Globe } from "$lib/components/magic/globe";
</script>

<div
	class="bg-background relative flex size-full max-h-90 max-w-lg flex-col items-center overflow-hidden rounded-lg border px-40 pt-8 pb-40 md:pb-60"
>
	<span
		class="pointer-events-none bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10"
	>
		Globe
	</span>
	<Globe class="top-28 " config={{ width: 400, height: 400 }} />
</div>
```

## Examples

### 1. Default Example

```svelte
<script>
	import { Globe } from "$lib/components/magic/globe";
</script>

<div
	class="bg-background relative flex size-full max-h-90 max-w-lg flex-col items-center overflow-hidden rounded-lg border px-40 pt-8 pb-40 md:pb-60"
>
	<span
		class="pointer-events-none bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10"
	>
		Globe
	</span>
	<Globe class="top-28 " config={{ width: 400, height: 400 }} />
</div>
```

## Usage

Import `Globe` from `$lib/components/magic/globe` and pass the props you need for your use case.

## Props

No documented props.
