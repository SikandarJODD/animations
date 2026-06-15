# Avatar Circles

A component displaying user avatars in a stacked, overlapping circle layout with an optional count badge.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/avatar-circles.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/avatar-circles.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/avatar-circles.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/avatar-circles.json
```

## Preview

```svelte
<script lang="ts">
	import { AvatarCircles } from "$lib/components/magic/avatar-circles";

	const avatars = [
		{
			imageUrl: "https://avatars.githubusercontent.com/u/16860528",
			profileUrl: "https://github.com/dillionverma",
		},
		{
			imageUrl: "https://avatars.githubusercontent.com/u/20110627",
			profileUrl: "https://github.com/tomonarifeehan",
		},
		{
			imageUrl: "https://avatars.githubusercontent.com/u/106103625",
			profileUrl: "https://github.com/BankkRoll",
		},
		{
			imageUrl: "https://avatars.githubusercontent.com/u/59228569",
			profileUrl: "https://github.com/safethecode",
		},
		{
			imageUrl: "https://avatars.githubusercontent.com/u/59442788",
			profileUrl: "https://github.com/sanjay-mali",
		},
		{
			imageUrl: "https://avatars.githubusercontent.com/u/89768406",
			profileUrl: "https://github.com/itsarghyadas",
		},
	];
</script>

<AvatarCircles numPeople={99} avatarUrls={avatars} />
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
	import { AvatarCircles } from "$lib/components/magic/avatar-circles";

	const avatars = [
		{
			imageUrl: "https://avatars.githubusercontent.com/u/16860528",
			profileUrl: "https://github.com/dillionverma",
		},
		{
			imageUrl: "https://avatars.githubusercontent.com/u/20110627",
			profileUrl: "https://github.com/tomonarifeehan",
		},
		{
			imageUrl: "https://avatars.githubusercontent.com/u/106103625",
			profileUrl: "https://github.com/BankkRoll",
		},
		{
			imageUrl: "https://avatars.githubusercontent.com/u/59228569",
			profileUrl: "https://github.com/safethecode",
		},
		{
			imageUrl: "https://avatars.githubusercontent.com/u/59442788",
			profileUrl: "https://github.com/sanjay-mali",
		},
		{
			imageUrl: "https://avatars.githubusercontent.com/u/89768406",
			profileUrl: "https://github.com/itsarghyadas",
		},
	];
</script>

<AvatarCircles numPeople={99} avatarUrls={avatars} />
```

## Usage

Import `AvatarCircles` from `$lib/components/magic/avatar-circles` and pass the props you need for your use case.

## Props

A component that displays user avatars in a stacked, overlapping circle layout.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `avatarUrls` | `Avatar[]` | `required` | Array of avatar objects with imageUrl and profileUrl properties |
| `numPeople` | `number` | `undefined` | Optional number to display in the count badge (e.g., +99) |
| `class` | `string` | `""` | Additional CSS classes to apply |
