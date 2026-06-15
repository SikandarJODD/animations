# Video Text

A text component with a video background.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/video-text.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/video-text.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/video-text.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/video-text.json
```

## Preview

```svelte
<script lang="ts">
	import { VideoText } from "$lib/components/magic/video-text";
</script>

<div class="relative h-50 w-full overflow-hidden">
	<VideoText src="https://cdn.magicui.design/ocean-small.webm" content="OCEAN"></VideoText>
</div>
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
	import { VideoText } from "$lib/components/magic/video-text";
</script>

<div class="relative h-50 w-full overflow-hidden">
	<VideoText src="https://cdn.magicui.design/ocean-small.webm" content="OCEAN"></VideoText>
</div>
```

## Usage

Import `VideoText` from `$lib/components/magic/video-text` and pass the props you need for your use case.

## Props

A component for Video Text.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | `""` | Additional CSS classes to apply |
| `src` | `string` | `-` | Source URL of the video |
| `content` | `string` | `-` | Text content to display |
| `autoPlay` | `boolean` | `true` | Whether to autoplay the video |
| `muted` | `boolean` | `true` | Whether to mute the video |
| `loop` | `boolean` | `true` | Whether to loop the video |
| `preload` | `"auto" \| "metadata" \| "none"` | `"auto"` | Preload behavior of the video |
| `fontSize` | `string \| number` | `20` | Font size of the text |
| `fontWeight` | `string \| number` | `"bold"` | Font weight of the text |
| `textAnchor` | `string` | `"middle"` | Text anchor alignment |
| `dominantBaseline` | `string` | `"middle"` | Dominant baseline alignment |
| `fontFamily` | `string` | `"sans-serif"` | Font family of the text |
