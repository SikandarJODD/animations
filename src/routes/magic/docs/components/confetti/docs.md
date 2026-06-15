# Confetti

A description for Confetti component.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/confetti.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/confetti.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/confetti.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/confetti.json
```

## Preview

```svelte
<script lang="ts">
	import { Confetti } from "$lib/components/magic/confetti";
	import { Button } from "$lib/components/ui/button";
	let active = $state(true);

	let fire = () => {
		active = false;
		setTimeout(() => {
			active = true;
		}, 10);
	};
</script>

<div
	class="bg-background relative flex h-125 w-full flex-col items-center justify-center overflow-hidden rounded-lg border"
>
	<Confetti {active}>
		<Button onclick={fire}>Fire Confetti</Button>
	</Confetti>
</div>
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
	import { Confetti } from "$lib/components/magic/confetti";
	import { Button } from "$lib/components/ui/button";
	let active = $state(true);

	let fire = () => {
		active = false;
		setTimeout(() => {
			active = true;
		}, 10);
	};
</script>

<div
	class="bg-background relative flex h-125 w-full flex-col items-center justify-center overflow-hidden rounded-lg border"
>
	<Confetti {active}>
		<Button onclick={fire}>Fire Confetti</Button>
	</Confetti>
</div>
```

## Usage

Import `Confetti` from `$lib/components/magic/confetti` and pass the props you need for your use case.

## Props

A component for Confetti.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | `""` | Additional CSS classes to apply |
