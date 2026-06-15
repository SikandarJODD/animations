# Hero Video Dialog

A hero video dialog component.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/hero-video-dialog.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/hero-video-dialog.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/hero-video-dialog.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/hero-video-dialog.json
```

## Preview

```svelte
<script lang="ts">
	import { HeroVideoDialog } from "$lib/components/magic/hero-video-dialog";
</script>

<div class="relative">
	<HeroVideoDialog
		class="block dark:hidden"
		animationStyle="from-center"
		videoSrc="https://www.youtube.com/embed/rv3Yq-B8qp4?si=VgqpxuoBVCw2QLqT"
		thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
		thumbnailAlt="Hero Video"
	/>
	<HeroVideoDialog
		class="hidden dark:block"
		animationStyle="from-center"
		videoSrc="https://www.youtube.com/embed/rv3Yq-B8qp4?si=VgqpxuoBVCw2QLqT"
		thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
		thumbnailAlt="Hero Video"
	/>
</div>
```

## Examples

### 1. Top In Bottom Out

Hero video dialog with top-in-bottom-out animation

```svelte
<script lang="ts">
	import { HeroVideoDialog } from "$lib/components/magic/hero-video-dialog";
</script>

<div>
	<div class="relative">
		<HeroVideoDialog
			class="block dark:hidden"
			animationStyle="top-in-bottom-out"
			videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
			thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
			thumbnailAlt="Hero Video"
		/>
		<HeroVideoDialog
			class="hidden dark:block"
			animationStyle="top-in-bottom-out"
			videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
			thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
			thumbnailAlt="Hero Video"
		/>
	</div>
</div>

<style>
</style>
```

## Usage

Import `HeroVideoDialog` from `$lib/components/magic/hero-video-dialog` and pass the props you need for your use case.

## Props

Props for the HeroVideoDialog component

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `animationStyle` | `"from-bottom" \| "from-center" \| "from-top" \| "from-left" \| "from-right" \| "fade" \| "top-in-bottom-out" \| "left-in-right-out"` | `"from-center"` | The animation style for the dialog |
| `videoSrc` | `string` | `undefined` | The source URL of the video to play |
| `thumbnailSrc` | `string` | `undefined` | The source URL of the thumbnail image |
| `thumbnailAlt` | `string` | `"Video thumbnail"` | Alt text for the thumbnail image |
| `class` | `string` | `undefined` | Additional CSS classes |
