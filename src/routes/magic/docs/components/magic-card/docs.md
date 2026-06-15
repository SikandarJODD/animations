# Magic Card

A spotlight effect that follows your mouse cursor and highlights borders on hover.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/magic-card.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/magic-card.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/magic-card.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/magic-card.json
```

## Preview

#### magic-card.svelte

```svelte
<script>
	import { MagicCard } from "$lib/components/magic/magic-card";
	import { Button } from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card/index.js";
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
	import { mode } from "mode-watcher";
</script>

<Card.Root class="w-full max-w-sm border-none p-0 shadow-none">
	<MagicCard
		gradientSize={160}
		gradientColor={mode.current === "dark" ? "#262626" : "#D9D9D955"}
		class="p-0"
	>
		<Card.Header class="border-border border-b p-4 [.border-b]:pb-4">
			<Card.Title>Login</Card.Title>
			<Card.Description>Enter your credentials to access your account</Card.Description>
		</Card.Header>
		<Card.Content class="p-4">
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
		<Card.Footer class="border-border border-t p-4 [.border-t]:pt-4">
			<Button class="w-full">Sign In</Button>
		</Card.Footer>
	</MagicCard>
</Card.Root>
```

#### index.ts

```typescript
export { default as MagicCard } from "./magic-card.svelte";
```

## Examples

### 1. Default Example

#### magic-card.svelte

```svelte
<script>
	import { MagicCard } from "$lib/components/magic/magic-card";
	import { Button } from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card/index.js";
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
	import { mode } from "mode-watcher";
</script>

<Card.Root class="w-full max-w-sm border-none p-0 shadow-none">
	<MagicCard
		gradientSize={160}
		gradientColor={mode.current === "dark" ? "#262626" : "#D9D9D955"}
		class="p-0"
	>
		<Card.Header class="border-border border-b p-4 [.border-b]:pb-4">
			<Card.Title>Login</Card.Title>
			<Card.Description>Enter your credentials to access your account</Card.Description>
		</Card.Header>
		<Card.Content class="p-4">
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
		<Card.Footer class="border-border border-t p-4 [.border-t]:pt-4">
			<Button class="w-full">Sign In</Button>
		</Card.Footer>
	</MagicCard>
</Card.Root>
```

#### index.ts

```typescript
export { default as MagicCard } from "./magic-card.svelte";
```

## Usage

Import the component and wrap the content you want it to affect. Adjust the optional props to tune the visual behavior.

## Props

A component for Magic Card.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `Snippet` | `-` | Card content. |
| `class` | `string` | `""` | Additional CSS classes. |
| `gradientSize` | `number` | `200` | Size of the gradient circle. |
| `gradientColor` | `string` | `"#262626"` | Color of the gradient overlay. |
| `gradientOpacity` | `number` | `0.8` | Opacity of the gradient overlay. |
| `gradientFrom` | `string` | `"#9E7AFF"` | Starting color of the border gradient. |
| `gradientTo` | `string` | `"#FE8BBB"` | Ending color of the border gradient. |
