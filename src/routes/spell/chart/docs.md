# Chart

An interactive line chart with cursor-tracked tooltip, snap-to-point hover, and built-in X-axis labels.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/chart.json
```

## Usage

```svelte
<script lang="ts">
  import { Chart } from "$lib/components/spell/chart";

  const data = [12, 18, 15, 24, 22, 30, 28, 35, 42, 38, 48, 56];
</script>

<Chart {data} />
```

## With Labels and Custom Formatting

```svelte
<script lang="ts">
  import { Chart } from "$lib/components/spell/chart";

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const revenue = [12400, 18200, 15600, 24100, 22800, 31500, 28900, 36200, 43800, 38400, 49100, 57600];
</script>

<Chart
  data={revenue}
  labels={months}
  name="Revenue"
  formatValue={(v) => `$${(v / 1000).toFixed(1)}k`}
/>
```

## Custom Color

Pass any hex color to `color` — it applies to the line, dot, and tooltip indicator.

```svelte
<Chart data={[8, 14, 11, 19, 17, 25]} color="#10b981" name="Growth" />
```

## Reveal Effect

`reveal` grays out the line until the cursor passes over it — useful for decorative or marketing charts.

```svelte
<Chart data={[42, 38, 51, 47, 63, 58, 71]} reveal />
```

## Props

| Prop           | Type                                  | Default                    | Description                                                         |
| -------------- | ------------------------------------- | -------------------------- | ------------------------------------------------------------------- |
| `data`         | `number[]`                            | required                   | Numeric values to plot.                                             |
| `labels`       | `string[]`                            | —                          | Optional label for each data point, shown in the tooltip and X-axis.|
| `name`         | `string`                              | —                          | Series name shown next to the indicator dot in the tooltip.         |
| `color`        | `string`                              | `"#0090FD"`                | Line, dot, and fill color as a hex string.                          |
| `width`        | `number`                              | `640`                      | Maximum chart width in px. Preserves a 640:220 aspect ratio.        |
| `formatValue`  | `(value: number, index: number) => string` | `v => v.toLocaleString()` | Format the tooltip value.                                    |
| `defaultIndex` | `number`                              | `data.length - 1`          | Index of the active point on initial render.                        |
| `showXAxis`    | `boolean`                             | `true`                     | Show X-axis tick labels at the bottom. Requires `labels`.           |
| `tickCount`    | `number`                              | `6`                        | Target number of X-axis ticks.                                      |
| `reveal`       | `boolean`                             | `false`                    | Reveal the line in color from left to the cursor; gray before.      |
| `showFill`     | `boolean`                             | `true`                     | Show the gradient fill under the line.                              |
| `showDot`      | `boolean`                             | `true`                     | Show the colored dot at the active data point.                      |
| `animated`     | `boolean`                             | `true`                     | Animate cursor, dot, and tooltip when the active point changes.     |
| `class`        | `string`                              | —                          | Additional CSS classes on the root container.                       |
