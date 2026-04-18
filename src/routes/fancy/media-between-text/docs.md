# Media Between Text

Reveal image or video media between two text fragments with hover, viewport, or manual triggers.

## Installation

Install the component source into your Fancy component folder and make sure `motion-sv` is available in your project.

```bash
pnpm add motion-sv
```

## Usage

```svelte
<script lang="ts">
  import { MediaBetweenText } from "$lib/components/fancy/media-between-text";
  import Image from "$lib/assets/pixel-image-demo.jpg";
</script>

<MediaBetweenText
  firstText="Design"
  secondText="Motion"
  mediaUrl={Image}
  mediaType="image"
  class="items-center gap-3 text-5xl font-semibold"
  mediaContainerClassName="h-16 overflow-hidden rounded-md"
/>
```

## Trigger Types

Use `triggerType="hover"` for hover previews, `triggerType="inView"` for scroll-driven reveals, or `triggerType="ref"` when controlling animation through the exported `animate` and `reset` component methods.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `firstText` | `string` | required | Text rendered before the media reveal. |
| `secondText` | `string` | required | Text rendered after the media reveal. |
| `mediaUrl` | `string` | required | Image or video source URL. |
| `mediaType` | `"image" \| "video"` | required | Controls whether an image or video is rendered. |
| `mediaContainerClassName` | `string \| undefined` | `undefined` | Classes applied to the animated media wrapper. |
| `triggerType` | `"hover" \| "ref" \| "inView"` | `"hover"` | Controls when the media reveal animation runs. |
| `animationVariants` | `Variants` | `defaultAnimationVariants` | Motion variants used for the media reveal. |
| `class` | `string \| undefined` | `undefined` | Classes merged onto the root container. |
