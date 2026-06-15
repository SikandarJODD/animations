# Meteors

A meteor shower effect.

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

## Preview

```svelte
<script>
	import Meteors from "$lib/components/magic/meteors/meteors.svelte";
</script>

<div
	class="bg-background relative flex h-fit w-full max-w-lg items-center justify-center overflow-hidden rounded-lg border p-20 md:shadow-xl"
>
	<Meteors number={30} />
	<p
		class="z-10 bg-linear-to-br from-white to-blue-900/40 bg-clip-text text-center text-5xl font-semibold tracking-tight whitespace-pre-wrap text-transparent"
	>
		Meteors
	</p>
</div>
```

## Examples

### 1. Default Example

```svelte
<script>
	import Meteors from "$lib/components/magic/meteors/meteors.svelte";
</script>

<div
	class="bg-background relative flex h-fit w-full max-w-lg items-center justify-center overflow-hidden rounded-lg border p-20 md:shadow-xl"
>
	<Meteors number={30} />
	<p
		class="z-10 bg-linear-to-br from-white to-blue-900/40 bg-clip-text text-center text-5xl font-semibold tracking-tight whitespace-pre-wrap text-transparent"
	>
		Meteors
	</p>
</div>
```

## Usage

Import `Meteors` from `$lib/components/magic/meteors` and pass the props you need for your use case.

If the component depends on global CSS, add the following styles:

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

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `number` | `number` | `20` | Number of meteors |
| `minDelay` | `number` | `0.2` | Minimum delay in seconds before meteor animation starts |
| `maxDelay` | `number` | `1.2` | Maximum delay in seconds before meteor animation starts |
| `minDuration` | `number` | `2` | Minimum duration in seconds for meteor animation |
| `maxDuration` | `number` | `10` | Maximum duration in seconds for meteor animation |
| `angle` | `number` | `215` | Angle in degrees for meteor trajectory |
| `class` | `string` | `-` | Additional CSS classes for the meteors container |
