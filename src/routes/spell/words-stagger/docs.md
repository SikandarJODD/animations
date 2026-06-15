# Words Stagger

Word-by-word text animation with blur, transform, and opacity effects.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/words-stagger.json
npm install motion-sv

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/words-stagger.json
yarn add motion-sv

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/s/words-stagger.json
pnpm add motion-sv

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/s/words-stagger.json
bun add motion-sv
```

## Preview

```svelte
<script lang="ts">
	import { WordsStagger } from "$lib/components/spell/words-stagger";
</script>

<WordsStagger class="text-2xl tracking-tight md:text-3xl ">
	Spell UI is an open source collection of elegant, user friendly components that seamlessly
	integrate with frameworks and AI models.
</WordsStagger>
```

## Examples

### 1. Speed

```svelte
<script lang="ts">
	import { WordsStagger } from "$lib/components/spell/words-stagger";
</script>

<div class="flex flex-col gap-8">
	<div class="space-y-2">
		<p class="text-muted-foreground font-mono text-sm">SLOW (1)</p>
		<WordsStagger speed={1} class="text-xl font-medium" triggerOnView once={false}>
			You can just ship things.
		</WordsStagger>
	</div>

	<div class="space-y-2">
		<p class="text-muted-foreground font-mono text-sm">NORMAL (0.5)</p>
		<WordsStagger speed={0.5} class="text-xl font-medium" triggerOnView once={false}>
			You can just ship things.
		</WordsStagger>
	</div>

	<div class="space-y-2">
		<p class="text-muted-foreground font-mono text-sm">FAST (0.3)</p>
		<WordsStagger speed={0.3} class="text-xl font-medium" triggerOnView once={false}>
			You can just ship things.
		</WordsStagger>
	</div>
</div>
```

### 2. Stagger

```svelte
<script lang="ts">
	import { WordsStagger } from "$lib/components/spell/words-stagger";
</script>

<div class="flex flex-col gap-8">
	<div class="space-y-2">
		<p class="text-muted-foreground font-mono text-sm">SMALL STAGGER (0.05s)</p>
		<WordsStagger stagger={0.05} class="text-xl font-medium" triggerOnView once={false}>
			You can just ship things.
		</WordsStagger>
	</div>

	<div class="space-y-2">
		<p class="text-muted-foreground font-mono text-sm">NORMAL STAGGER (0.1s)</p>
		<WordsStagger stagger={0.1} class="text-xl font-medium" triggerOnView once={false}>
			You can just ship things.
		</WordsStagger>
	</div>

	<div class="space-y-2">
		<p class="text-muted-foreground font-mono text-sm">LARGE STAGGER (0.2s)</p>
		<WordsStagger stagger={0.2} class="text-xl font-medium" triggerOnView once={false}>
			You can just ship things.
		</WordsStagger>
	</div>
</div>
```

## Usage

Import the component and wrap the content you want it to affect. Adjust the optional props to tune the visual behavior.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `Snippet` | `required` | Plain text snippet content that is flattened and split into animated words. |
| `as` | `"span" \| "div" \| "p" \| "h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6"` | `"div"` | Sets the semantic tag used for the animated root element. |
| `delay` | `number` | `0` | Adds a delay in seconds before the first word starts animating. |
| `stagger` | `number` | `0.1` | Controls the delay between each animated word in seconds. |
| `speed` | `number` | `0.5` | Sets the per-word tween duration in seconds. |
| `trigger` | `boolean` | `true` | Enables or disables the visible animated state. |
| `triggerOnView` | `boolean` | `false` | Waits to animate until the component enters the viewport. |
| `once` | `boolean` | `true` | When using triggerOnView, controls whether the reveal runs only on first entry. |
| `onStart` | `() => void` | `-` | Called once when a new visible stagger cycle begins. |
| `onComplete` | `() => void` | `-` | Called after the final word completes the visible transition. |
| `class` | `string` | `-` | Custom classes applied to the animated root element. |
| `style` | `string` | `-` | Inline styles forwarded to the animated root element. |
