# Pulsating Button

An animated pulsating button useful for capturing attention of users.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/pulsating-button.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/pulsating-button.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/pulsating-button.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/pulsating-button.json
```

## Preview

```svelte
<script lang="ts">
	import { PulsatingButton } from "$lib/components/magic/pulsating-button";
</script>

<PulsatingButton>Play Now</PulsatingButton>
```

## Examples

### 1. Ripple Variant

```svelte
<script lang="ts">
	import { PulsatingButton } from "$lib/components/magic/pulsating-button";
</script>

<PulsatingButton variant="ripple">Ripple Example</PulsatingButton>
```

### 2. Ring Variant

```svelte
<script lang="ts">
	import { PulsatingButton } from "$lib/components/magic/pulsating-button";
</script>

<PulsatingButton variant="ring">Ring Example</PulsatingButton>
```

### 3. Duration Example

```svelte
<script lang="ts">
	import { PulsatingButton } from "$lib/components/magic/pulsating-button";
</script>

<div class="flex flex-wrap items-start justify-center gap-12">
	<div class="space-y-6">
		<p class="text-muted-foreground text-sm">Duration: 1.5s</p>
		<PulsatingButton variant="ring" distance="10px" duration="1.5s">
			Join Affiliate Program
		</PulsatingButton>
	</div>

	<div class="space-y-6">
		<p class="text-muted-foreground text-sm">Duration: 3s</p>
		<PulsatingButton variant="ring" distance="10px" duration="3s">
			Join Affiliate Program
		</PulsatingButton>
	</div>

	<div class="space-y-6">
		<p class="text-muted-foreground text-sm">Duration: 6s</p>
		<PulsatingButton variant="ring" distance="10px" duration="6s">
			Join Affiliate Program
		</PulsatingButton>
	</div>
</div>
```

### 4. Colors Example

```svelte
<script lang="ts">
	import { PulsatingButton } from "$lib/components/magic/pulsating-button";
	// add any colors: https://oklch.com
	// customize as you like
</script>

<div class="flex flex-wrap items-start justify-center gap-12">
	<div class="space-y-6">
		<p class="text-muted-foreground text-sm">Color: Teal</p>
		<PulsatingButton
			pulseColor="oklch(0.6434 0.1 166 / 44.6%)"
			class="bg-teal-500"
			distance="12px"
		>
			Play Now
		</PulsatingButton>
	</div>

	<div class="space-y-6">
		<p class="text-muted-foreground text-sm">Color: Yellow</p>
		<PulsatingButton
			pulseColor="oklch(0.8663 0.153 91.69 / 90%)"
			class="bg-yellow-400 text-yellow-50 dark:text-yellow-950"
			distance="12px"
		>
			Slow and Steady
		</PulsatingButton>
	</div>

	<div class="space-y-6">
		<p class="text-muted-foreground text-sm">Color: Red</p>
		<PulsatingButton
			pulseColor="oklch(0.6434 0.2634 27.11 / 54.6%)"
			class="bg-red-500 text-red-100 "
			distance="12px"
		>
			Aggressive
		</PulsatingButton>
	</div>
</div>
```

### 5. Distance Example

```svelte
<script lang="ts">
	import { PulsatingButton } from "$lib/components/magic/pulsating-button";
</script>

<div class="flex flex-col flex-wrap items-start justify-center gap-12 md:flex-row">
	<div class="space-y-6">
		<p class="text-muted-foreground text-sm">Distance: 4px</p>
		<PulsatingButton variant="ring" distance="4px">Small Distance</PulsatingButton>
	</div>

	<div class="space-y-6">
		<p class="text-muted-foreground text-sm">Distance: 8px</p>
		<!-- default distance is 8px -->
		<PulsatingButton variant="ring" distance="8px">Default</PulsatingButton>
	</div>

	<div class="space-y-6">
		<p class="text-muted-foreground text-sm">Distance: 12px</p>
		<PulsatingButton variant="ring" distance="12px">Large Distance</PulsatingButton>
	</div>
</div>
```

### 6. Minimal Example

```svelte
<script lang="ts">
	import { PulsatingButton } from "$lib/components/magic/pulsating-button";
</script>

<div class="flex justify-center">
	<div class="space-y-5 text-center">
		<p class="text-muted-foreground text-sm">Minimal Cyan Example</p>

		<!-- add any olkch colors: https://oklch.com -->
		<PulsatingButton
			variant="ripple"
			pulseColor="oklch(0.5794 0.1549 196.52 / 85.28%)"
			class="bg-cyan-500 font-mono font-medium"
			duration="2.4s"
			distance="10px"
		>
			Play Now
		</PulsatingButton>
	</div>
</div>
```

## Usage

Import the component and wrap the content you want it to affect. Adjust the optional props to tune the visual behavior.

If the component depends on global CSS, add the following styles:

```css
@theme inline {
	--animate-pulse-slow: pulse-slow var(--duration) ease-out infinite;
	--animate-pulse-ring: pulse-ring var(--duration) ease-out infinite;
	--animate-pulse-ripple: pulse-ripple var(--duration) cubic-bezier(0.16, 1, 0.3, 1) infinite;

    /* Pulsating Button Animations - Original */
	@keyframes pulse-slow {
		0% {
			box-shadow: 0 0 0 0 var(--pulse-color);
		}
		100% {
			box-shadow: 0 0 0 var(--distance) transparent;
		}
	}

    /* New Variant */
	@keyframes pulse-ring {
		0%,
		100% {
			box-shadow: 0 0 0 0 var(--pulse-color, oklch(from var(--bg) l c h / 0.5));
		}
		50% {
			box-shadow: 0 0 0 var(--distance) var(--pulse-color, oklch(from var(--bg) l c h / 0.5));
		}
	}

    /* Ripple Variant */
	@keyframes pulse-ripple {
		0% {
			box-shadow: 0 0 0 0 oklch(from var(--pulse-color, var(--bg)) l c h / 1);
		}
		100% {
			box-shadow: 0 0 0 var(--distance) oklch(from var(--pulse-color, var(--bg)) l c h / 0);
		}
	}
}
```

## Props

A component for Pulsating Button.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | `""` | Additional CSS classes to apply |
| `pulseColor` | `string` | `"#808080"` | Color of the pulse |
| `duration` | `string` | `"1.5s"` | Duration of the animation |
| `children` | `Snippet` | `required` | The content to display inside the button |
| `variant` | `"slow" \| "ring" \| "ripple"` | `"slow"` | The animation variant to use |
| `distance` | `string` | `"8px"` | The distance the pulse expands to (applicable for 'ring' and 'ripple' variants) |
