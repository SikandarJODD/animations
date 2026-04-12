````markdown
# Backlight

An SVG filter wrapper that adds a soft, saturated backlight glow around the content it wraps.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/backlight.json
```

  </Tab>
  <Tab value="Manual">

### Manual Installation

Copy the component source files into your project:

- `src/lib/components/magic/backlight/backlight.svelte`
- `src/lib/components/magic/backlight/index.ts`

  </Tab>
</Tabs>

## Usage

```svelte
<script lang="ts">
  import { Backlight } from "$lib/components/magic/backlight";
</script>

<Backlight class="w-full">
  <img
    class="mx-auto h-auto w-full max-w-lg rounded-xl"
    src="https://plus.unsplash.com/premium_photo-1672201106204-58e9af7a2888?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="fancy gradient background"
  />
</Backlight>
```

## Props

| Prop       | Type      | Default     | Description                                          |
| ---------- | --------- | ----------- | ---------------------------------------------------- |
| `children` | `Snippet` | `undefined` | Content rendered inside the backlight wrapper.       |
| `class`    | `string`  | `undefined` | Custom classes applied to the outer wrapper element. |
| `blur`     | `number`  | `10`        | Blur intensity used by the SVG filter.               |

## Features

- SVG-based glow effect without additional dependencies
- Saturation boost layered on top of the blur filter
- Snippet-based wrapper API for arbitrary child content
- Simple `blur` control for stronger or softer highlights
- Stable per-instance filter IDs so multiple backlights can coexist safely
````
