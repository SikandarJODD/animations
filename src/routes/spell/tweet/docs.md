# Tweet

Fetch and render any X/Twitter post by ID, with media, entities, and live like counts.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/tweet.json
```

The component requires a SvelteKit API route at `src/routes/api/tweet/[id]/+server.ts` that proxies requests to the Twitter embed API. This file is included automatically when installing via the registry.

## Usage

```svelte
<script lang="ts">
  import { Tweet } from "$lib/components/spell/tweet";
</script>

<Tweet id="1847682508822913359" />
```

## Minimal Display

Hide the footer controls for a cleaner embed.

```svelte
<Tweet id="1847682508822913359" showDate={false} showLikeButton={false} showCopyLink={false} />
```

## Props

| Prop             | Type                  | Default     | Description                                           |
| ---------------- | --------------------- | ----------- | ----------------------------------------------------- |
| `id`             | `string`              | required    | The numeric tweet/post ID to fetch and display.       |
| `showDate`       | `boolean`             | `true`      | Show the tweet's timestamp below the body.            |
| `showLikeButton` | `boolean`             | `true`      | Show the like count linking to the like intent.       |
| `showCopyLink`   | `boolean`             | `true`      | Show the copy-link button in the footer.              |
| `class`          | `string \| undefined` | `undefined` | Additional CSS classes to apply to the tweet card.    |
