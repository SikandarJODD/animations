# Meteors

A meteor shower with a consistent travel angle and container-relative spawn positions.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/meteors.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/meteors.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/meteors.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/meteors.json
```

Add the animation to your global CSS:

```css
@theme inline {
  --animate-meteor: meteor 5s linear infinite;

  @keyframes meteor {
    0% {
      transform: rotate(var(--angle)) translateX(0);
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      transform: rotate(var(--angle)) translateX(-500px);
      opacity: 0;
    }
  }
}
```

## Usage

```svelte
<script lang="ts">
  import { Meteors } from "#lib/components/magic/meteors/index.js";
</script>

<div class="relative h-64 overflow-hidden">
  <Meteors />
</div>
```

## Preview

```svelte
<script lang="ts">
  import { Meteors } from "#lib/components/magic/meteors/index.js";
</script>

<div
  class="bg-background relative flex h-64 w-full max-w-lg items-center justify-center overflow-hidden rounded-lg border"
>
  <Meteors number={20} angle={215} minDuration={3} maxDuration={6} />
  <p class="text-foreground relative z-10 text-4xl font-medium">meteors</p>
</div>
```

The angle is applied once through `transform`, including the animation delay. The default 215-degree angle travels down and to the right. Spawn positions use the container width.

## Props

| Prop          | Type     | Default | Description                                             |
| ------------- | -------- | ------- | ------------------------------------------------------- |
| `number`      | `number` | `20`    | Number of meteors                                       |
| `minDelay`    | `number` | `0.2`   | Minimum delay in seconds before meteor animation starts |
| `maxDelay`    | `number` | `1.2`   | Maximum delay in seconds before meteor animation starts |
| `minDuration` | `number` | `2`     | Minimum duration in seconds for meteor animation        |
| `maxDuration` | `number` | `10`    | Maximum duration in seconds for meteor animation        |
| `angle`       | `number` | `215`   | Angle in degrees for meteor trajectory                  |
| `class`       | `string` | `-`     | Additional CSS classes for the meteors container        |
