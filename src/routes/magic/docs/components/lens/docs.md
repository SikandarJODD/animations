# Lens

A interactive component that enables zooming into images, videos and other elements.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/lens.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/lens.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/lens.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/lens.json
```

## Usage

```svelte
<script lang="ts">
  import { Lens } from "#lib/components/magic/lens/index.js";
</script>

<Lens>
  <img
    src="https://images.unsplash.com/photo-1736606355698-5efdb410fe93"
    alt="Mountain lake"
  />
</Lens>
```

## Preview

```svelte
<script lang="ts">
  import { Lens } from "#lib/components/magic/lens/index.ts";
  import { Button } from "#lib/components/ui/button/index.ts";
  import * as Card from "#lib/components/ui/card/index.js";
</script>

<Card.Root class="relative max-w-md shadow-none">
  <Card.Header>
    <Lens zoomFactor={2} lensSize={150} isStatic={false} ariaLabel="Zoom Area">
      <img
        src="https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image_placeholder"
        width={500}
        height={500}
      />
    </Lens>
  </Card.Header>
  <Card.Content>
    <Card.Title class="text-2xl">Your next camp</Card.Title>
    <Card.Description>
      See our latest and best camp destinations all across the five continents
      of the globe.
    </Card.Description>
  </Card.Content>
  <Card.Footer class="space-x-4">
    <Button>Let&apos;s go</Button>
    <Button variant="secondary">Another time</Button>
  </Card.Footer>
</Card.Root>
```

## Examples

### 1. Image Inspection

Inspect a high-resolution image with a larger lens and two-times zoom.

```svelte
<script lang="ts">
  import { Lens } from "#lib/components/magic/lens/index.js";
</script>

<figure class="w-full max-w-lg">
  <Lens
    zoomFactor={2}
    lensSize={180}
    ariaLabel="inspect mountain detail"
    class="rounded-lg"
  >
    <img
      src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1000&q=85"
      alt="mountains reflected in a lake"
      width="1000"
      height="667"
      class="aspect-3/2 w-full object-cover"
    />
  </Lens>
  <figcaption class="text-muted-foreground mt-3 text-sm">
    move over the image to inspect the detail
  </figcaption>
</figure>
```

### 2. Diagram Labels

Inspect compact request labels on hover without obscuring the diagram at rest.

```svelte
<script lang="ts">
  import { Lens } from "#lib/components/magic/lens/index.js";
</script>

<figure class="w-full max-w-lg">
  <Lens
    duration={0}
    zoomFactor={1.5}
    lensSize={100}
    ariaLabel="inspect request flow labels"
    class="rounded-lg border"
  >
    <svg
      viewBox="0 0 500 200"
      class="bg-background block h-auto w-full"
      role="img"
      aria-label="a browser sends a request to a router, which reads from the cache on a hit or the origin on a miss"
    >
      <g fill="none" stroke="var(--color-sky-500)" stroke-width="1">
        <path d="M120 100H180 M270 100H315V60H380 M315 100V140H380" />
      </g>
      <g fill="var(--background)" stroke="var(--border)">
        <rect x="20" y="80" width="100" height="40" rx="6" />
        <rect x="180" y="80" width="90" height="40" rx="6" />
        <rect x="380" y="40" width="100" height="40" rx="6" />
        <rect x="380" y="120" width="100" height="40" rx="6" />
      </g>
      <g
        fill="var(--foreground)"
        text-anchor="middle"
        dominant-baseline="middle"
        font-size="12"
        font-family="monospace"
      >
        <text x="70" y="100">browser</text>
        <text x="225" y="100">router</text>
        <text x="430" y="60">cache</text>
        <text x="430" y="140">origin</text>
      </g>
      <g
        fill="var(--color-sky-600)"
        class="dark:fill-sky-400"
        text-anchor="middle"
        font-size="9"
        font-family="monospace"
      >
        <text x="150" y="90">request</text>
        <text x="347" y="50">hit</text>
        <text x="347" y="130">miss</text>
      </g>
    </svg>
  </Lens>
  <figcaption class="text-muted-foreground mt-3 text-sm">
    hover to inspect the request path
  </figcaption>
</figure>
```

## Props

A component for Lens.

| Prop              | Type                       | Default                   | Description                                          |
| ----------------- | -------------------------- | ------------------------- | ---------------------------------------------------- |
| `children`        | `Snippet`                  | `-`                       | Content wrapped by the lens (image, video, etc.).    |
| `zoomFactor`      | `number`                   | `1`                       | The zoom factor of the lens.                         |
| `lensSize`        | `number`                   | `100`                     | The size of the lens (diameter in pixels).           |
| `position`        | `{ x: number; y: number }` | `{ x: 0, y: 0 }`          | The position of the lens (x and y coordinates).      |
| `defaultPosition` | `{ x: number; y: number }` | `{ x: 0, y: 0 }`          | The default position of the lens.                    |
| `isStatic`        | `boolean`                  | `false`                   | Whether the lens is static (doesn't follow pointer). |
| `duration`        | `number`                   | `0.3`                     | The duration of the animation (seconds).             |
| `lensColor`       | `string`                   | `"rgba(255,255,255,0.5)"` | The color of the lens overlay.                       |
| `ariaLabel`       | `string`                   | `"zoom lens"`             | The aria label of the lens for accessibility.        |
| `class`           | `string`                   | `""`                      | Additional CSS classes to apply to lens container.   |
