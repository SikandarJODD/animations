# Animated Circular Progress Bar

A circular progress bar component with animated transitions between primary and secondary colors.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-circular-progress-bar.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-circular-progress-bar.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-circular-progress-bar.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-circular-progress-bar.json
```

## Preview

```svelte
<script lang="ts">
	import { AnimatedCircularProgressBar } from "$lib/components/magic/animated-circular-progress-bar";
	import { onMount, onDestroy } from "svelte";

	let value = $state(0);
	let interval: ReturnType<typeof setInterval>;

	onMount(() => {
		const handleIncrement = () => {
			value = value === 100 ? 0 : value + 10;
		};

		handleIncrement();
		interval = setInterval(handleIncrement, 2000);
	});

	onDestroy(() => {
		if (interval) {
			clearInterval(interval);
		}
	});
</script>

<AnimatedCircularProgressBar
	{value}
	gaugePrimaryColor="rgb(79 70 229)"
	gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
/>
```

## Examples

### 1. Animated Value

```svelte
<script lang="ts">
	import { AnimatedCircularProgressBar } from "$lib/components/magic/animated-circular-progress-bar";
	import { onMount, onDestroy } from "svelte";

	let value = $state(0);
	let interval: ReturnType<typeof setInterval>;

	onMount(() => {
		const handleIncrement = () => {
			value = value === 100 ? 0 : value + 10;
		};

		handleIncrement();
		interval = setInterval(handleIncrement, 2000);
	});

	onDestroy(() => {
		if (interval) {
			clearInterval(interval);
		}
	});
</script>

<AnimatedCircularProgressBar
	{value}
	gaugePrimaryColor="rgb(79 70 229)"
	gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
/>
```

## Usage

Pass the current `value` along with `gaugePrimaryColor` and `gaugeSecondaryColor`. The component calculates the percentage from `min`, `max`, and `value`.

```svelte
<script lang="ts">
	import { AnimatedCircularProgressBar } from "$lib/components/magic/animated-circular-progress-bar";
</script>

<AnimatedCircularProgressBar
	value={75}
	gaugePrimaryColor="rgb(79 70 229)"
	gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
/>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `max` | `number` | `100` | The maximum value for the progress bar |
| `min` | `number` | `0` | The minimum value for the progress bar |
| `value` | `number` | `0` | The current value of the progress bar |
| `gaugePrimaryColor` | `string` | `required` | The color for the progress portion of the bar |
| `gaugeSecondaryColor` | `string` | `required` | The color for the remaining portion of the bar |
| `class` | `string` | `""` | Additional CSS classes to apply |
