# ShineBorder

A description for ShineBorder component.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/shine-border.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/shine-border.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/shine-border.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/shine-border.json
```

## Preview

```svelte
<script lang="ts">
	import ShineBorder from "$lib/components/magic/shine-border/shine-border.svelte";
	import { Button } from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card/index.js";
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
</script>

<Card.Root class="relative mx-auto max-w-87 overflow-hidden">
	<ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
	<Card.Header>
		<Card.Title>Login</Card.Title>
		<Card.Description>Enter your credentials to access your account</Card.Description>
	</Card.Header>
	<Card.Content>
		<form>
			<div class="grid gap-4">
				<div class="grid gap-2">
					<Label for="email">Email</Label>
					<Input id="email" type="email" placeholder="name@example.com" />
				</div>
				<div class="grid gap-2">
					<Label for="password">Password</Label>
					<Input id="password" type="password" />
				</div>
			</div>
		</form>
	</Card.Content>
	<Card.Footer>
		<Button class="w-full">Sign In</Button>
	</Card.Footer>
</Card.Root>
```

## Examples

### 1. Monotone

```svelte
<script lang="ts">
	import ShineBorder from "$lib/components/magic/shine-border/shine-border.svelte";
	import { Button } from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card/index.js";
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
	// For Light and Dark Mode
	import { mode } from "mode-watcher";
</script>

<Card.Root class="relative mx-auto max-w-87 overflow-hidden">
	<ShineBorder shineColor={mode.current === "dark" ? "white" : "black"} />
	<Card.Header>
		<Card.Title>Login</Card.Title>
		<Card.Description>Enter your credentials to access your account</Card.Description>
	</Card.Header>
	<Card.Content>
		<form>
			<div class="grid gap-4">
				<div class="grid gap-2">
					<Label for="email">Email</Label>
					<Input id="email" type="email" placeholder="name@example.com" />
				</div>
				<div class="grid gap-2">
					<Label for="password">Password</Label>
					<Input id="password" type="password" />
				</div>
			</div>
		</form>
	</Card.Content>
	<Card.Footer>
		<Button class="w-full">Sign In</Button>
	</Card.Footer>
</Card.Root>
```

## Usage

Import `ShineBorder` from `$lib/components/magic/shine-border` and pass the props you need for your use case.

If the component depends on global CSS, add the following styles:

```css
@theme inline {
  --animate-shine: shine var(--duration) infinite linear;

  @keyframes shine {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    to {
      background-position: 0% 0%;
    }
  }
}
```

## Props

A component for ShineBorder.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | `""` | Additional CSS classes to apply |
| `borderWidth` | `number` | `2` | Width of the border |
| `duration` | `number` | `300` | Duration of the shine animation in milliseconds |
| `shineColor` | `string \| string[]` | `""` | Color(s) of the shine effect |
