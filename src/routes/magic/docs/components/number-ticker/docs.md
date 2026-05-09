````markdown
# Number Ticker

An animated number counter component with spring physics that smoothly animates from a start value to an end value.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/number-ticker.json
```

  </Tab>
  <Tab value="Manual">

### Manual Installation

```bash
# Using npm
npm install motion-sv

# Using pnpm
pnpm add motion-sv

# Using yarn
yarn add motion-sv
```

Copy and paste the component source code into your project.

  </Tab>
</Tabs>

## Usage

```svelte
<script lang="ts">
  import { NumberTicker } from "$lib/components/magic/number-ticker";
</script>

<NumberTicker value={1000} class="text-4xl font-bold" />
```

## Props

| Prop            | Type             | Default  | Description                         |
| --------------- | ---------------- | -------- | ----------------------------------- |
| `value`         | `number`         | Required | The target number to count to       |
| `startValue`    | `number`         | `0`      | The starting number to count from   |
| `direction`     | `"up" \| "down"` | `"up"`   | Count direction (up or down)        |
| `delay`         | `number`         | `0`      | Delay before animation starts (ms)  |
| `decimalPlaces` | `number`         | `0`      | Number of decimal places to display |
| `class`         | `string`         | `""`     | Additional CSS classes to apply     |

## Features

- Spring physics for natural motion
- Customizable start and end values
- Count up or down
- Decimal place support
- Delayed start option
- Intersection observer (animates when in view)
- Smooth easing with spring damping

## Examples

### Count from 0 to 100

```svelte
<NumberTicker value={100} class="text-primary text-5xl font-bold" />
```

### Countdown

```svelte
<NumberTicker value={0} startValue={100} direction="down" class="text-4xl" />
```

### With Decimals

```svelte
<NumberTicker value={99.99} decimalPlaces={2} class="text-3xl font-semibold" />
```

### Delayed Start

```svelte
<NumberTicker value={500} delay={1000} class="text-6xl font-black" />
```

### Large Numbers

```svelte
<NumberTicker
  value={1000000}
  startValue={0}
  class="text-7xl font-extrabold tabular-nums"
/>
```

### With Prefix and Suffix

```svelte
<NumberTicker
  value={75}
  startValue={0}
  prefix="$"
  suffix="USD"
  class="text-4xl font-bold"
/>
```

## Notes

- Uses spring physics (damping: 60, stiffness: 100) for smooth animation
- Automatically formats numbers with appropriate decimal places
- Animation triggers when element enters viewport
- Duration is approximately 2 seconds with spring easing
````
