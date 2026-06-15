# Icon Cloud

An interactive 3D tag cloud component.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/icon-cloud.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/icon-cloud.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/icon-cloud.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/icon-cloud.json
```

## Preview

```svelte
<script lang="ts">
	import { IconCloud } from "$lib/components/magic/icon-cloud";

	const slugs = [
		"typescript",
		"javascript",
		"dart",
		"java",
		"svelte",
		"flutter",
		"android",
		"html5",
		"css3",
		"nodedotjs",
		"express",
		"nextdotjs",
		"prisma",
		"amazonaws",
		"postgresql",
		"firebase",
		"nginx",
		"vercel",
		"testinglibrary",
		"jest",
		"cypress",
		"docker",
		"git",
		"jira",
		"github",
		"gitlab",
		"visualstudiocode",
		"androidstudio",
		"sonarqube",
		"figma",
	];

	let images = $state(slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`));
</script>

<div class="relative flex size-full items-center justify-center overflow-hidden">
	<IconCloud {images} />
</div>
```

## Examples

### 1. Images

Icon cloud using images from Simple Icons CDN.

```svelte
<script lang="ts">
	import { IconCloud } from "$lib/components/magic/icon-cloud";

	let images = $state([
		"https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop",
		"https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=100&h=100&fit=crop",
		"https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=100&h=100&fit=crop",
		"https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=100&h=100&fit=crop",
		"https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=100&h=100&fit=crop",
		"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=100&h=100&fit=crop",
		"https://images.unsplash.com/photo-1581089778245-3ce67677f718?w=100&h=100&fit=crop",
		"https://images.unsplash.com/photo-1605379399642-870262d3d051?w=100&h=100&fit=crop",
		"https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=100&h=100&fit=crop",
		"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=100&h=100&fit=crop",
		"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=100&h=100&fit=crop",
		"https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=100&h=100&fit=crop",
		"https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=100&h=100&fit=crop",
		"https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=100&h=100&fit=crop",
		"https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=100&h=100&fit=crop",
	]);
</script>

<div
	class="bg-background relative flex size-full items-center justify-center overflow-hidden rounded-lg border px-20 pt-8 pb-20"
>
	<IconCloud {images} />
</div>
```

## Usage

Import `IconCloud` from `$lib/components/magic/icon-cloud` and pass the props you need for your use case.

## Props

A component for Icon Cloud.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `icons` | `Component[]` | `[]` | - |
| `images` | `string[]` | `[]` | Array of image URLs to display in the cloud. |
| `class` | `string` | `""` | Additional CSS classes to apply |
