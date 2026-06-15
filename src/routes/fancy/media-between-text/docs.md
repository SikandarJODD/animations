# Media Between Text

A component that animates a media (image or video) between two text elements.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/f/media-between-text.json
npm install motion-sv

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/f/media-between-text.json
yarn add motion-sv

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/f/media-between-text.json
pnpm add motion-sv

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/f/media-between-text.json
bun add motion-sv
```

## Preview

```
<script lang="ts">
	import { MediaBetweenText } from "$lib/components/fancy/media-between-text";
</script>

<MediaBetweenText
	firstText="Hover"
	secondText="Me"
	mediaUrl="https://i.pinimg.com/736x/09/66/63/0966639167069429771428b4d4fd4c2a.jpg"
	mediaType="image"
	alt="Abstract landscape used in the Media Between Text preview"
	class="font-figtree! flex w-full cursor-pointer flex-row items-center justify-center text-2xl font-medium text-orange-400 sm:text-6xl dark:text-[#1ae1f8]"
	mediaContainerClass="w-full rounded-xl h-7.5 sm:h-25 overflow-hidden mx-px mt-1 sm:mx-2 sm:mt-4"
/>
```

## Examples

### 1. Scroll-triggered Reveal

```svelte
<script lang="ts">
	import { MediaBetweenText } from "$lib/components/fancy/media-between-text";
	import { MediaQuery } from "svelte/reactivity";
	const elements = [
		{
			src: "https://github.com/rich-harris.png",
			left: "Rich",
			right: "Harris",
			url: "https://github.com/rich-harris",
		},
		{
			src: "https://github.com/dummdidumm.png",
			left: "Simon ",
			right: "Holthausen",
			url: "https://github.com/dummdidumm",
		},
		{
			src: "https://github.com/trueadm.png",
			left: "Dominic",
			right: "Gannaway",
			url: "https://github.com/trueadm",
		},
		{
			src: "https://github.com/PuruVJ.png",
			left: "Puru",
			right: "Vijay",
			url: "https://github.com/PuruVJ",
		},
	];

	let ref: HTMLDivElement | null = $state(null);
	let isLarge = new MediaQuery("(min-width: 1024px)");
</script>

<div
	class="bg-background thin-scrollbar h-[80vh] w-dvw items-center justify-center overflow-auto"
	bind:this={ref}
>
	<div class="relative flex h-full w-full">
		<h3
			class="absolute bottom-10 left-4 w-full text-3xl tracking-wide sm:bottom-12 sm:left-12 sm:text-7xl md:w-64"
		>
			Svelte Creators
		</h3>
		<p class="absolute right-0 bottom-4 sm:right-12 sm:bottom-12">Scroll down ↓</p>
	</div>

	<div
		class="mt-0 mb-0 flex h-full w-full flex-col items-center justify-center space-y-12 text-6xl sm:mt-10 sm:mb-64 md:px-6"
	>
		{#each elements as element}
			<a href={element.url} target="_blank" rel="noreferrer">
				<MediaBetweenText
					firstText={element.left}
					secondText={element.right}
					mediaUrl={element.src}
					mediaType="image"
					triggerType="inView"
					useInViewOptionsProp={{
						once: false,
						amount: 1,
						margin: "-5% 0px -0% 0px",
						root: ref,
					}}
					containerRef={ref}
					mediaContainerClass="w-full h-[40px] sm:h-[100px] rounded-xl overflow-hidden mx-1 sm:mx-2 mt-1 sm:mt-4"
					class="flex cursor-pointer flex-row items-center justify-center text-lg font-light sm:text-4xl"
					animationVariants={{
						initial: { width: 0 },
						animate: {
							width: isLarge.current ? "100px" : "40px",
							transition: {
								duration: 1,
								type: "spring",
								bounce: 0,
								delay: 0.1,
							},
						},
					}}
				/>
			</a>
		{/each}
	</div>
</div>
```

### 2. Open/Close Trigger

```svelte
<script lang="ts">
	import { MediaBetweenText } from "$lib/components/fancy/media-between-text";
	import { Button } from "$lib/components/ui/button";

	let isAnimating = $state(false);
	let toggleAnimation = () => {
		isAnimating = !isAnimating;
	};
</script>

<Button class="absolute top-2 left-2 rounded-full" variant="secondary" onclick={toggleAnimation}>
	{#if isAnimating}
		Close
	{:else}
		Open
	{/if}
</Button>

<!-- triggerType : ref is important -->
<MediaBetweenText
	bind:isAnimating
	firstText="Happy"
	secondText="Birthday"
	mediaUrl="https://i.pinimg.com/1200x/4e/a2/29/4ea229649e46e744b89fcb625723fc73.jpg"
	mediaType="image"
	mediaContainerClass="w-full h-20 rounded-xl! overflow-hidden mx-1 sm:mx-1 my-4"
	class="font-figtree items-center text-2xl font-semibold sm:text-4xl"
	triggerType="ref"
/>
```

### 3. Vertical Open/Close

```svelte
<script lang="ts">
	import { MediaBetweenText } from "$lib/components/fancy/media-between-text";
	import { Button } from "$lib/components/ui/button";
	import { MediaQuery } from "svelte/reactivity";

	let isAnimating = $state(false);
	let toggleAnimation = () => {
		isAnimating = !isAnimating;
	};
	let isSmallScreen = new MediaQuery("(max-width: 640px)");
</script>

<Button class="absolute top-2 left-2 rounded-full" variant="secondary" onclick={toggleAnimation}>
	{#if isAnimating}
		Close
	{:else}
		Open
	{/if}
</Button>

<!-- triggerType : ref is important -->
<MediaBetweenText
	bind:isAnimating
	firstText="Hello"
	secondText="Svelte"
	mediaUrl="https://i.pinimg.com/1200x/39/94/16/399416daafc4ee2d4fb8b78732e66ad6.jpg"
	mediaType="image"
	mediaContainerClass="w-full rounded-xl! overflow-hidden my-0.5"
	class="flex flex-col items-center font-mono text-xl font-semibold sm:text-5xl"
	triggerType="ref"
	// here we animating height from 0 to 300px for large devices and 0 to 200px for small devices
	animationVariants={{
		initial: {
			width: isSmallScreen.current ? "100px" : "120px",
			height: 0,
			transition: { duration: 0.5, ease: [0.944, 0.008, 0.147, 1.002] },
		},
		animate: {
			width: isSmallScreen.current ? "120px" : "160px",
			height: isSmallScreen.current ? "120px" : "140px",
			transition: { duration: 0.6, ease: [0.944, 0.008, 0.147, 1.002] },
		},
	}}
/>
```

## Usage

Import `MediaBetweenText` from `$lib/components/fancy/media-between-text` and pass the props you need for your use case.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `firstText` | `string` | `required` | Text rendered before the media reveal. |
| `secondText` | `string` | `required` | Text rendered after the media reveal. |
| `mediaUrl` | `string` | `required` | Image or video source URL. |
| `mediaType` | `"image" \| "video"` | `required` | Controls whether an img or video element is rendered. |
| `mediaContainerClass` | `string` | `undefined` | Classes applied to the animated media wrapper. |
| `fallbackUrl` | `string \| undefined` | `undefined` | Poster URL used when rendering video media. |
| `as` | `keyof SvelteHTMLElements` | `"p"` | HTML element used for each text fragment. |
| `autoPlay` | `boolean` | `true` | Whether video media should autoplay. |
| `loop` | `boolean` | `true` | Whether video media should loop. |
| `muted` | `boolean` | `true` | Whether video media should be muted. |
| `playsInline` | `boolean` | `true` | Whether video media should play inline on mobile browsers. |
| `alt` | `string \| undefined` | `undefined` | Alt text used for image media. |
| `triggerType` | `"hover" \| "ref" \| "inView"` | `"hover"` | Controls when the media reveal animation runs. |
| `containerRef` | `HTMLElement \| Document \| null` | `null` | Optional viewport root used with in-view triggering. |
| `useInViewOptionsProp` | `UseInViewOptions` | `{ once: true, amount: 0.5 }` | Options forwarded to the in-view observer. |
| `animationVariants` | `Variants` | `defaultAnimationVariants` | Motion variants used for the media reveal. |
| `leftTextClass` | `ClassValue` | `undefined` | Classes applied to the first text fragment. |
| `rightTextClass` | `string` | `undefined` | Classes applied to the second text fragment. |
| `class` | `string` | `undefined` | Classes merged onto the root container. |
| `isAnimating` | `boolean` | `false` | Bindable flag used with `triggerType="ref"` to programmatically open or close the media reveal. |
