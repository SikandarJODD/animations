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

## Reveal effect

Pass `reveal` to gray-out the line until the cursor passes over it — useful for decorative/marketing use, not for serious data viz.

```svelte
<Chart {data} {labels} name="BTC / USD" reveal formatValue={...} />
```

## Custom tooltip format

`formatValue` receives the value and its index, so you can pair the data with labels.

```svelte
<Chart {data} {labels} name="ETH / USD" formatValue={(v) => v.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })} />
```

## Custom color

Pass any hex string via `color`. The line, dot, and gradient fill all derive from it.

```svelte
<Chart {data} {labels} name="AAPL" color="#EAB308" formatValue={...} />
```

## Without animation

Set `animated={false}` to make the cursor, dot, and tooltip jump to the active point instantly with no transition.

```svelte
<Chart {data} {labels} name="NVDA" color="#A855F7" animated={false} formatValue={...} />
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
