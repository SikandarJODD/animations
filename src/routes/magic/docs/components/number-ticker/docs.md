# Number Ticker

Animate numbers to count up or down to a target number

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/number-ticker.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/number-ticker.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/number-ticker.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/number-ticker.json
```

## Preview

```svelte
<script lang="ts">
	import { NumberTicker } from "$lib/components/magic/number-ticker";
</script>

<NumberTicker
	value={100}
	class="text-8xl font-medium tracking-tighter whitespace-pre-wrap text-black dark:text-white"
/>
```

## Examples

### 1. With Decimal Places

```svelte
<script>
	import { NumberTicker } from "$lib/components/magic/number-ticker";
</script>

<NumberTicker
	value={5.67}
	decimalPlaces={2}
	class="text-8xl font-medium tracking-tighter whitespace-pre-wrap text-black dark:text-white"
/>
```

### 2. With Start Value

```svelte
<script lang="ts">
	import { NumberTicker } from "$lib/components/magic/number-ticker";
</script>

<NumberTicker
	value={100}
	startValue={80}
	class="text-8xl font-medium tracking-tighter whitespace-pre-wrap text-black dark:text-white"
/>
```

### 3. With Prefix and Suffix

```svelte
<script lang="ts">
	import { NumberTicker } from "$lib/components/magic/number-ticker";
</script>

<NumberTicker
	value={100.5}
	decimalPlaces={2}
	startValue={70}
	prefix="$"
	suffix="USD"
	class="text-8xl font-medium tracking-tighter whitespace-pre-wrap text-black dark:text-white"
/>
```

### 4. Trigger On View (without once)

```svelte
<script>
	import { NumberTicker } from "$lib/components/magic/number-ticker";
</script>

<NumberTicker
	value={5.67}
	decimalPlaces={2}
	once={false}
	class="text-4xl font-medium tracking-tighter whitespace-pre-wrap text-black md:text-6xl dark:text-white"
/>
```

## Usage

Import `NumberTicker` from `$lib/components/magic/number-ticker` and pass the props you need for your use case.

## Props

A component for animating numbers to count up or down to a target value.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `number` | `undefined` | The target number to animate to. |
| `startValue` | `number` | `0` | The starting number for the animation. |
| `direction` | `"up" \| "down"` | `"up"` | The direction of the animation. |
| `delay` | `number` | `0` | Delay before starting the animation in seconds. |
| `decimalPlaces` | `number` | `0` | Number of decimal places to display. |
| `class` | `string` | `""` | Additional CSS classes to apply. |
| `prefix` | `string` | `""` | Prefix to display before the number. |
| `suffix` | `string` | `""` | Suffix to display after the number. |
| `once` | `boolean` | `true` | Whether to animate only the first time the component comes into view. |
