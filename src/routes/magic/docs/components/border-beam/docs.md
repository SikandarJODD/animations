# Border Beam

A component for creating animated border beam effects around elements with customizable gradients, duration, and direction.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/border-beam.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/border-beam.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/border-beam.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/border-beam.json
```

## Preview

```svelte
<script lang="ts">
	import { BorderBeam } from "$lib/components/magic/border-beam";
	import Button from "$lib/components/ui/button/button.svelte";
	import * as Card from "$lib/components/ui/card/index.js";
	import Input from "$lib/components/ui/input/input.svelte";
	import Label from "$lib/components/ui/label/label.svelte";
</script>

<Card.Root class="relative w-87.5 overflow-hidden">
	<Card.Header>
		<Card.Title>Login</Card.Title>
		<Card.Description>Enter your credentials to access your account.</Card.Description>
	</Card.Header>
	<Card.Content>
		<form>
			<div class="grid w-full items-center gap-4">
				<div class="flex flex-col space-y-1.5">
					<Label for="email">Email</Label>
					<Input id="email" type="email" placeholder="Enter your email" />
				</div>
				<div class="flex flex-col space-y-1.5">
					<Label for="password">Password</Label>
					<Input id="password" type="password" placeholder="Enter your password" />
				</div>
			</div>
		</form>
	</Card.Content>
	<Card.Footer class="flex justify-between">
		<Button variant="outline">Register</Button>
		<Button>Login</Button>
	</Card.Footer>
	<BorderBeam duration={8} size={100} />
</Card.Root>
```

## Examples

### 1. 2 Border Beams

```svelte
<script lang="ts">
	import { BorderBeam } from "$lib/components/magic/border-beam";
	import Button from "$lib/components/ui/button/button.svelte";
	import * as Card from "$lib/components/ui/card/index.js";

	import Play from "@lucide/svelte/icons/play";
	import SkipBack from "@lucide/svelte/icons/skip-back";
	import SkipForward from "@lucide/svelte/icons/skip-forward";
</script>

<Card.Root class="relative w-87.5 overflow-hidden">
	<Card.Header>
		<Card.Title>Now Playing</Card.Title>
		<Card.Description>Stairway to Heaven - Led Zeppelin</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="flex flex-col items-center gap-4">
			<div class="h-48 w-48 rounded-lg bg-linear-to-br from-purple-500 to-pink-500"></div>

			<div class="bg-secondary h-1 w-full rounded-full">
				<div class="bg-primary h-full w-1/3 rounded-full"></div>
			</div>
			<div class="text-muted-foreground flex w-full justify-between text-sm">
				<span>2:45</span>
				<span>8:02</span>
			</div>
		</div>
	</Card.Content>
	<Card.Footer class="flex justify-center gap-4">
		<Button variant="outline" size="icon" class="rounded-full">
			<SkipBack class="size-4" />
		</Button>
		<Button size="icon" class="rounded-full">
			<Play class="size-4" />
		</Button>
		<Button variant="outline" size="icon" class="rounded-full">
			<SkipForward class="size-4" />
		</Button>
	</Card.Footer>
	<BorderBeam duration={6} size={400} class="from-transparent via-red-500 to-transparent" />
	<BorderBeam
		duration={6}
		delay={3}
		size={400}
		borderWidth={2}
		class="from-transparent via-blue-500 to-transparent"
	/>
</Card.Root>
```

### 2. Reverse

```svelte
<script lang="ts">
	import { BorderBeam } from "$lib/components/magic/border-beam";
	import Button from "$lib/components/ui/button/button.svelte";
	import * as Card from "$lib/components/ui/card/index.js";
	import Input from "$lib/components/ui/input/input.svelte";
	import Label from "$lib/components/ui/label/label.svelte";
</script>

<Card.Root class="relative w-87.5 overflow-hidden">
	<Card.Header>
		<Card.Title>Login</Card.Title>
		<Card.Description>Enter your credentials to access your account.</Card.Description>
	</Card.Header>
	<Card.Content>
		<form>
			<div class="grid w-full items-center gap-4">
				<div class="flex flex-col space-y-1.5">
					<Label for="email">Email</Label>
					<Input id="email" type="email" placeholder="Enter your email" />
				</div>
				<div class="flex flex-col space-y-1.5">
					<Label for="password">Password</Label>
					<Input id="password" type="password" placeholder="Enter your password" />
				</div>
			</div>
		</form>
	</Card.Content>
	<Card.Footer class="flex justify-between">
		<Button variant="outline">Register</Button>
		<Button>Login</Button>
	</Card.Footer>
	<BorderBeam
		duration={4}
		size={300}
		reverse
		class="from-transparent via-green-500 to-transparent"
	/>
</Card.Root>
```

### 3. Spring

```svelte
<script lang="ts">
	import { BorderBeam } from "$lib/components/magic/border-beam";
	import { Button } from "$lib/components/ui/button";
</script>

<Button class="relative overflow-hidden" size="lg" variant="outline">
	Buy Now
	<BorderBeam
		size={40}
		initialOffset={20}
		class="from-transparent via-yellow-500 to-transparent"
		transition={{
			type: "spring",
			stiffness: 60,
			damping: 20,
		}}
	/>
</Button>
```

## Usage

Import `BorderBeam` from `$lib/components/magic/border-beam` and pass the props you need for your use case.

## Props

A component for creating animated border beam effects.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `number` | `50` | The size of the border beam in pixels |
| `duration` | `number` | `6` | The duration of the animation in seconds |
| `delay` | `number` | `0` | The delay before the animation starts in seconds |
| `colorFrom` | `string` | `"#ffaa40"` | The starting color of the gradient |
| `colorTo` | `string` | `"#9c40ff"` | The ending color of the gradient |
| `transition` | `Transition` | `undefined` | Custom motion transition configuration |
| `class` | `string` | `undefined` | Additional CSS classes to apply |
| `style` | `string` | `undefined` | Additional inline styles |
| `reverse` | `boolean` | `false` | Whether to reverse the animation direction |
| `initialOffset` | `number` | `0` | The initial offset position (0-100) |
| `borderWidth` | `number` | `1` | The border width of the beam in pixels |
