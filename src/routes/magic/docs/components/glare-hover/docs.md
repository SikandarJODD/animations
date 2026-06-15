# Glare Hover

A glare hover effect that adds a subtle shine to elements when hovered.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/glare-hover.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/glare-hover.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/glare-hover.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/glare-hover.json
```

## Preview

```svelte
<script lang="ts">
	import { GlareHover } from "$lib/components/magic/glare-hover";
	import Badge from "$lib/components/ui/badge/badge.svelte";
	import { Button } from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";

	let items = ["Unlimited projects", "Team collaboration", "Advanced analytics"];
</script>

<GlareHover class="rounded-xl" duration={600}>
	<Card.Root class="w-85">
		<Card.Header>
			<div class="flex items-center justify-between">
				<Card.Title>Pro</Card.Title>
				<Badge>Popular</Badge>
			</div>
			<Card.Description>For teams that need more.</Card.Description>
			<div class="flex items-baseline gap-1 pt-2">
				<span class="text-4xl font-semibold tracking-tight">$49</span>
				<span class="text-muted-foreground text-sm">/mo</span>
			</div>
		</Card.Header>
		<Card.Content class="flex flex-col gap-2.5">
			{#each items as item}
				<div class="flex items-center gap-2 text-sm">
					<svg width="15" height="15" viewBox="0 0 15 15" fill="none">
						<path
							d="M12.5 3.5L6 10L2.5 6.5"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					{item}
				</div>
			{/each}
			<div class="text-muted-foreground flex items-center gap-2 text-sm">
				<svg width="15" height="15" viewBox="0 0 15 15" fill="none">
					<circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" opacity="0.4" />
				</svg>
				SSO (coming soon)
			</div>
		</Card.Content>
		<Card.Footer>
			<Button class="w-full">Get started</Button>
		</Card.Footer>
	</Card.Root>
</GlareHover>
```

## Examples

### 1. Cta Example

```svelte
<script lang="ts">
	import { GlareHover } from "$lib/components/magic/glare-hover";
	import * as Card from "$lib/components/ui/card";
	import { Button } from "$lib/components/ui/button";
</script>

<GlareHover class="rounded-xl" color="#505050" duration={700}>
	<Card.Root class="w-160 py-10 text-center">
		<Card.Header>
			<p class="text-muted-foreground text-xs font-medium tracking-widest uppercase">
				14-day free trial · No card required
			</p>
			<Card.Title class="text-2xl tracking-tight">Ready to get started?</Card.Title>
			<Card.Description class="mx-auto max-w-sm">
				Join 4,000+ teams already using our platform to ship faster.
			</Card.Description>
		</Card.Header>
		<Card.Footer class="justify-center gap-2">
			<Button>Start free trial</Button>
			<Button variant="outline">View demo</Button>
		</Card.Footer>
	</Card.Root>
</GlareHover>
```

## Usage

Import the component and wrap the content you want it to affect. Adjust the optional props to tune the visual behavior.

## Props

A wrapper component that sweeps a configurable glare across its content on hover.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `Snippet` | `undefined` | Content rendered inside the hover surface. |
| `width` | `string` | `undefined` | Optional CSS width applied to the root element. |
| `height` | `string` | `undefined` | Optional CSS height applied to the root element. |
| `background` | `string` | `"#000"` | Background behind the glare animation. |
| `color` | ``#${string}`` | `"#ffffff"` | Hex color used for the glare highlight. |
| `opacity` | `number` | `0.5` | Opacity of the glare color after conversion to RGBA. |
| `angle` | `number` | `-45` | Angle of the animated glare gradient in degrees. |
| `size` | `number` | `250` | Background-size percentage used for the glare sweep. |
| `duration` | `number` | `650` | Hover transition duration in milliseconds. |
| `playOnce` | `boolean` | `false` | Runs the glare only on hover instead of maintaining a reusable transition state. |
| `class` | `string` | `""` | Additional classes merged onto the root div. |
| `style` | `string` | `""` | Inline styles appended to the generated CSS variables. |
