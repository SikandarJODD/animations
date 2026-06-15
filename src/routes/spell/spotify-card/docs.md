# Spotify Card

Display Spotify tracks with album art and blurred background.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/spotify-card.json
npm install spotify-url-info

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/spotify-card.json
yarn add spotify-url-info

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/s/spotify-card.json
pnpm add spotify-url-info

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/s/spotify-card.json
bun add spotify-url-info
```

## Preview

```svelte
<script lang="ts">
	import { SpotifyCard } from "$lib/components/spell/spotify-card";
</script>

<SpotifyCard
	url="https://open.spotify.com/track/4n7jnSxVLd8QioibtTDBDq"
	class="max-h-25 max-w-100"
/>
```

## Examples

### 1. Width Example

```svelte
<script lang="ts">
	import { SpotifyCard } from "$lib/components/spell/spotify-card";
</script>

<div class="bg-card mx-auto flex w-full max-w-2xl flex-col gap-4 rounded-3xl border p-6 shadow-sm">
	<div class="space-y-1">
		<h3 class="text-sm font-medium tracking-tight">Featured listen</h3>
		<p class="text-muted-foreground text-sm">
			Drop the card into a narrower column or media shelf by constraining its width with
			utility classes.
		</p>
	</div>

	<div class="max-w-[360px]">
		<SpotifyCard url="https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b" class="w-full" />
	</div>
</div>
```

## Usage

Import `SpotifyCard` from `$lib/components/spell/spotify-card` and pass the props you need for your use case.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `url` | `string` | `required` | The Spotify track, album, playlist, or episode URL sent to the API route for preview metadata. |
| `class` | `string` | `''` | Custom classes merged onto the root card wrapper. |
