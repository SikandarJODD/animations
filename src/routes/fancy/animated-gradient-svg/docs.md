# Animated Gradient Svg

An animated multi-color gradient background effect with SVG elements.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/f/animated-gradient-svg.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/f/animated-gradient-svg.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/f/animated-gradient-svg.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/f/animated-gradient-svg.json
```

## Preview

```svelte
<script lang="ts">
	import BentoCard from "./bento-card.svelte";
</script>

<div class="bg-background flex h-80 w-full items-center justify-center">
	<div class="grid w-full max-w-lg grid-cols-1 gap-2 sm:grid-cols-6">
		<!-- Top left card -->
		<div class="h-32 sm:col-span-4 sm:h-48">
			<BentoCard
				title="Animated Bento"
				subtitle="#001"
				description="Using only SVG circles and blur"
			/>
		</div>
		<!-- Top right card -->
		<div class="h-32 sm:col-span-2 sm:h-48">
			<BentoCard title="Gradients" buttonText="Explore More" />
		</div>
	</div>
</div>
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
	import BentoCard from "./bento-card.svelte";
</script>

<div class="bg-background flex h-80 w-full items-center justify-center">
	<div class="grid w-full max-w-lg grid-cols-1 gap-2 sm:grid-cols-6">
		<!-- Top left card -->
		<div class="h-32 sm:col-span-4 sm:h-48">
			<BentoCard
				title="Animated Bento"
				subtitle="#001"
				description="Using only SVG circles and blur"
			/>
		</div>
		<!-- Top right card -->
		<div class="h-32 sm:col-span-2 sm:h-48">
			<BentoCard title="Gradients" buttonText="Explore More" />
		</div>
	</div>
</div>
```

## Usage

Import `AnimatedGradientSvg` from `$lib/components/fancy/animated-gradient-svg` and pass the props you need for your use case.

If the component depends on global CSS, add the following styles:

```
@theme inline {
  --animate-background-gradient: background-gradient;

  @keyframes background-gradient {
      0%, 100% {
        transform: translate(0, 0);
        animationDelay: var(--background-gradient-delay, 0s);
      }
      20% {
        transform: translate(calc(100% * var(--tx-1, 1)), calc(100% * var(--ty-1, 1)));
      }
      40% {
        transform: translate(calc(100% * var(--tx-2, -1)), calc(100% * var(--ty-2, 1)));
      }
      60% {
        transform: translate(calc(100% * var(--tx-3, 1)), calc(100% * var(--ty-3, -1)));
      }
      80% {
        transform: translate(calc(100% * var(--tx-4, -1)), calc(100% * var(--ty-4, -1)));
      }
    }
}
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `colors` | `string[]` | `required` | List of blob colors used to generate the animated gradient field. |
| `speed` | `number` | `5` | Animation duration in seconds shared by each SVG blob. |
| `blur` | `"light" \| "medium" \| "heavy"` | `"light"` | Controls the blur strength applied to the full gradient layer. |
| `class` | `string` | `undefined` | Classes merged onto the outer absolute-positioned wrapper. |
