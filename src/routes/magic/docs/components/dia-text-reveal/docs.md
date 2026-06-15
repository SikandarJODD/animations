# Dia Text Reveal

A sweeping gradient text reveal with viewport triggering and rotating text support.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/dia-text-reveal.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/dia-text-reveal.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/dia-text-reveal.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/dia-text-reveal.json
```

## Preview

```svelte
<script lang="ts">
	import { DiaTextReveal } from "$lib/components/magic/dia-text-reveal";
</script>

<div class="flex min-h-40 items-center justify-center">
	<DiaTextReveal
		text="Joy of Code"
		class="font-figtree pb-1 text-4xl font-semibold tracking-normal sm:text-6xl"
	/>
</div>
```

## Examples

### 1. Custom Gradient

```svelte
<script>
	import { DiaTextReveal } from "$lib/components/magic/dia-text-reveal";
</script>

<div class="flex min-h-56 items-center justify-center p-8">
	<DiaTextReveal
		class="text-4xl font-bold tracking-tight"
		colors={["#22d3ee", "#818cf8", "#f472b6", "#34d399"]}
		text="Design systems"
	/>
</div>
```

### 2. Rotating Phrases

```svelte
<script>
	import { DiaTextReveal } from "$lib/components/magic/dia-text-reveal";
</script>

<div class="text-foreground flex min-h-64 items-center justify-center p-8">
	<h1 class="text-center text-3xl font-semibold tracking-tight md:text-4xl">
		Learn to{" "}
		<DiaTextReveal
			repeat
			repeatDelay={1.2}
			text={["build faster", "ship smarter", "scale easier"]}
		/>
	</h1>
</div>
```

### 3. Duration and Delay

Adjust the sweep duration and delay before starting.

```svelte
<script>
	import { DiaTextReveal } from "$lib/components/magic/dia-text-reveal";
</script>

<div class="flex min-h-56 items-center justify-center p-8">
	<DiaTextReveal
		class="text-4xl font-bold tracking-tight"
		colors={["#f97316", "#eab308", "#22c55e", "#3b82f6", "#a855f7"]}
		delay={0.35}
		duration={2.4}
		text="Made with care"
	/>
</div>
```

## Usage

Import `DiaTextReveal` from `$lib/components/magic/dia-text-reveal` and pass the props you need for your use case.

## Props

A component for revealing text with a moving gradient sweep.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | `string \| string[]` | `required` | Text to reveal. Pass multiple strings to rotate when repeat is enabled. |
| `colors` | `string[]` | `["#c679c4", "#fa3d1d", "#ffb005", "#e1e1fe", "#0358f7"]` | Colors sampled across the moving gradient band. |
| `textColor` | `string` | `"var(--foreground)"` | CSS color for revealed text after the sweep. |
| `duration` | `number` | `1.5` | Duration of one sweep pass in seconds. |
| `delay` | `number` | `0` | Delay before the sweep starts in seconds. |
| `repeat` | `boolean` | `false` | Replay the sweep and advance to the next string after each completion. |
| `repeatDelay` | `number` | `0.5` | Pause between repeated cycles in seconds. |
| `triggerOnView` | `boolean` | `true` | Start the reveal when the component enters the viewport. |
| `once` | `boolean` | `true` | When using triggerOnView, run only on the first viewport entry. |
| `fixedWidth` | `boolean` | `false` | Use the widest string width instead of animating width between strings. |
| `class` | `string` | `""` | Additional CSS classes to apply to the animated span. |
