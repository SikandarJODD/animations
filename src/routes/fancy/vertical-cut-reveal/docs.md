# Vertical Cut Reveal

Reveal text from vertical cuts with word, character, or line-based staggering.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/f/vertical-cut-reveal.json
npm install motion-sv

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/f/vertical-cut-reveal.json
yarn add motion-sv

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/f/vertical-cut-reveal.json
pnpm add motion-sv

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/f/vertical-cut-reveal.json
bun add motion-sv
```

## Preview

```svelte
<script>
	import { VerticalCutReveal } from "$lib/components/fancy/vertical-cut-reveal";
</script>

<div
	class="xs:text-2xl font-overused-grotesk flex h-80 w-dvw flex-col items-start justify-center bg-white p-10 text-2xl tracking-wide text-[#0015ff] uppercase sm:text-4xl md:h-140 md:p-16 md:text-5xl lg:p-24 lg:text-5xl xl:text-5xl"
>
	<VerticalCutReveal
		splitBy="characters"
		staggerDuration={0.025}
		staggerFrom="first"
		transition={{
			type: "spring",
			stiffness: 200,
			damping: 21,
		}}
	>
		HI 👋, FRIEND!
	</VerticalCutReveal>
	<VerticalCutReveal
		splitBy="characters"
		staggerDuration={0.025}
		staggerFrom="last"
		reverse={true}
		transition={{
			type: "spring",
			stiffness: 200,
			damping: 21,
			delay: 0.5,
		}}
	>
		🌤️ IT IS NICE ⇗ TO
	</VerticalCutReveal>
	<VerticalCutReveal
		splitBy="characters"
		staggerDuration={0.025}
		staggerFrom="center"
		transition={{
			type: "spring",
			stiffness: 200,
			damping: 21,
			delay: 1.1,
		}}
	>
		MEET 😊 YOU.
	</VerticalCutReveal>
</div>
```

## Examples

### 1. Split By Characters And Lines

```svelte
<script>
	import { VerticalCutReveal } from "$lib/components/fancy/vertical-cut-reveal";
</script>

<div
	class="text font-azeret-mono flex h-80 w-dvw flex-col items-center justify-center bg-white p-6 tracking-wide text-[#0015ff] md:h-100 md:p-16 md:text-2xl lg:p-20 lg:text-4xl xl:p-24"
>
	<VerticalCutReveal
		splitBy="lines"
		staggerDuration={0.2}
		staggerFrom="first"
		transition={{
			type: "spring",
			stiffness: 250,
			damping: 30,
			delay: 0.2,
		}}
		containerClass="text-[#00000] leading-relaxed"
	>
		{"→ We're on a mission\nto make the 🌐 web \nsuper fun again! ☺"}
	</VerticalCutReveal>
</div>
```

### 2. Split By Words

With the splitBy prop, you can control how the text is split into smaller pieces. It can be either words, characters, lines, or a custom string delimiter.

```svelte
<script>
	import { VerticalCutReveal } from "$lib/components/fancy/vertical-cut-reveal";
</script>

<div
	class="font-figtree flex h-80 w-full flex-col items-center justify-center bg-[#0015ff] p-10 text-lg font-bold tracking-wide text-white md:h-100 md:text-3xl"
>
	<VerticalCutReveal
		splitBy="words"
		staggerDuration={0.1}
		staggerFrom="first"
		reverse={true}
		transition={{
			type: "spring",
			stiffness: 250,
			damping: 30,
			delay: 0,
		}}
	>
		super cool & awesome example text
	</VerticalCutReveal>
</div>
```

### 3. Stagger From Variants

With the staggerFrom prop, you can control the starting index of the animation. It can be either first, last, center, a number (custom index).

```svelte
<script>
	import { VerticalCutReveal } from "$lib/components/fancy/vertical-cut-reveal";
</script>

<div
	class="font-figtree flex h-80 w-full flex-col items-center justify-center space-y-4 bg-white text-sm font-bold tracking-wide text-[#0015ff] uppercase sm:text-base md:h-140 md:text-lg lg:text-xl xl:text-2xl"
>
	<VerticalCutReveal
		splitBy="characters"
		staggerDuration={0.05}
		staggerFrom="first"
		transition={{
			type: "spring",
			stiffness: 200,
			damping: 21,
			delay: 0,
		}}
	>
		THIS STAGGERS FROM FIRST
	</VerticalCutReveal>
	<VerticalCutReveal
		splitBy="characters"
		staggerDuration={0.05}
		staggerFrom="last"
		reverse={true}
		transition={{
			type: "spring",
			stiffness: 200,
			damping: 21,
			delay: 1,
		}}
	>
		THIS STAGGERS FROM LAST
	</VerticalCutReveal>
	<VerticalCutReveal
		splitBy="characters"
		staggerDuration={0.05}
		staggerFrom="center"
		transition={{
			type: "spring",
			stiffness: 200,
			damping: 21,
			delay: 2.3,
		}}
	>
		THIS STAGGERS FROM CENTER
	</VerticalCutReveal>
	<VerticalCutReveal
		splitBy="characters"
		staggerDuration={0.05}
		staggerFrom={5}
		transition={{
			type: "spring",
			stiffness: 200,
			damping: 21,
			delay: 3.2,
		}}
	>
		THIS ONE FROM THE 5TH CHARACTER
	</VerticalCutReveal>
</div>
```

### 4. Random Letter Reveal

Reveal text characters in a random order for a playful effect.

```svelte
<script>
	import { VerticalCutReveal } from "$lib/components/fancy/vertical-cut-reveal";
</script>

<div
	class="text font-overused-grotesk flex h-80 w-dvw items-center justify-center bg-white p-10 text-[#0015ff] md:h-120 md:p-16 md:text-xl lg:p-24"
>
	<VerticalCutReveal
		splitBy="characters"
		staggerDuration={0.002}
		staggerFrom="random"
		transition={{
			type: "spring",
			stiffness: 200,
			damping: 35,
			delay: 0.1,
		}}
		containerClass="text-[#00000] leading-snug"
	>
		“When a small, unassuming object exceeds our expectations, we are not only surprised but
		pleased. Our usual reaction is something like, "That little thing did all that?" Simplicity
		is about the unexpected pleasure derived from what is likely to be insignificant and would
		otherwise go unnoticed. The smaller the object, the more forgiving we can be when it
		misbehaves.” ― John Maeda,
	</VerticalCutReveal>
</div>
```

### 5. Scroll Trigger

Animate the Vertical Cut Reveal when the text enters the viewport using the useInView function from motion-sv.

```svelte
<script lang="ts">
	import { VerticalCutReveal } from "$lib/components/fancy/vertical-cut-reveal";
	import { useInView } from "motion-sv";

	let ref = $state<HTMLDivElement | null>(null);
	let textRef = $state<{ startAnimation: () => void; reset: () => void } | null>(null);

	const view = useInView(
		() => ref as HTMLDivElement,
		() =>
			({
				once: false,
			}) as any
	);

	const isInView = $derived(view.current);

	$effect(() => {
		if (!textRef) {
			return;
		}

		if (isInView) {
			textRef.startAnimation();
			return;
		}

		textRef.reset();
	});
</script>

<div
	class="font-figtree h-120 w-full overflow-auto bg-[#0015ff] text-xl font-bold text-white md:text-4xl lg:text-4xl"
>
	<div class="flex h-full w-full items-center justify-center">Scroll down champ ↓</div>
	<div class="flex h-full items-center justify-center text-white">
		<div bind:this={ref}>
			<VerticalCutReveal
				splitBy="characters"
				staggerDuration={0.02}
				staggerFrom="first"
				transition={{
					type: "spring",
					stiffness: 200,
					damping: 35,
					delay: 0.1,
				}}
				containerClass="leading-snug text-black"
				// Autostart is false, so we can control it programtically with .startAnimation() and .reset() methods
				autoStart={false}
				// Exposes the .startAnimation() and .reset() methods to control the animation programmatically
				bind:this={textRef}
			>
				howdy! 👋
			</VerticalCutReveal>
		</div>
	</div>
</div>
```

## Usage

Import the component and wrap the content you want it to affect. Adjust the optional props to tune the visual behavior.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `Snippet` | `undefined` | Snippet content observed and split into animated units. |
| `reverse` | `boolean` | `false` | Reverses the reveal direction so units enter from above instead of below. |
| `transition` | `AnimationOptions` | `{ type: "spring", stiffness: 190, damping: 22 }` | Motion options used for each revealed unit. |
| `splitBy` | `"words" \| "characters" \| "lines" \| string` | `"words"` | Controls whether the text is split by words, characters, lines, or a custom delimiter. |
| `staggerDuration` | `number` | `0.2` | Delay in seconds between animated units. |
| `staggerFrom` | `"first" \| "last" \| "center" \| "random" \| number` | `"first"` | Starting point used when calculating stagger delays. |
| `containerClass` | `string` | `undefined` | Classes applied to the outer flex container. |
| `wordLevelClass` | `string` | `undefined` | Classes applied to each overflow-hidden group wrapper. |
| `elementLevelClass` | `string` | `undefined` | Classes applied to each individual animated unit wrapper. |
| `onStart` | `() => void` | `undefined` | Called when the reveal animation begins. |
| `onComplete` | `() => void` | `undefined` | Called after the final visible unit finishes animating. |
| `autoStart` | `boolean` | `true` | Starts the reveal automatically instead of waiting for `startAnimation()`. |
| `class` | `string` | `undefined` | Additional classes merged onto the outer container. |
