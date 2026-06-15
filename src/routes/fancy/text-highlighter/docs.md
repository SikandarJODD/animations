# Text Highlighter

Sweep a highlight background across inline text on hover, in view, or on demand.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/f/text-highlighter.json
npm install motion-sv

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/f/text-highlighter.json
yarn add motion-sv

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/f/text-highlighter.json
pnpm add motion-sv

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/f/text-highlighter.json
bun add motion-sv
```

## Preview

```svelte
<script lang="ts">
	import { TextHighlighter } from "$lib/components/fancy/text-highlighter";
	import { type Transition } from "motion-sv";
	const transition = { type: "spring", duration: 0.6, delay: 0.4, bounce: 0 };
	const highlightClass = "rounded-[0.3em]! px-px";
	const highlightColor = "#F2AD91";
	const highlightDirection = "btt";
	const inViewOptions = { once: false, initial: true, amount: 0.1 };
	let containerRef: HTMLDivElement | null = $state(null);
	import Lenis from "lenis";
	import { onMount } from "svelte";
	onMount(() => {
		if (!containerRef) return;
		const lenis = new Lenis({
			autoRaf: true,
			wrapper: containerRef,
			duration: 1.2,
			orientation: "vertical",
			gestureOrientation: "vertical",
			smoothWheel: true,
			touchMultiplier: 2,
		});

		return () => {
			lenis.destroy();
		};
	});
</script>

<div class="relative h-80 w-dvw rounded-xl bg-[#fefefe] p-0 md:h-150">
	<div
		class="pointer-events-none absolute bottom-0 left-0 isolate h-64 w-full bg-gradient-to-t from-[#fefefe] from-10% via-[#fefefe]/50 via-50% to-transparent"
	></div>

	<div class="z-10 h-full w-full overflow-scroll bg-[#fefefe]" bind:this={containerRef}>
		<div class="mx-auto mt-40 max-w-md p-0 px-4 pb-64 text-black">
			<h1 class="font-calendas mb-20 text-4xl font-medium tracking-tight">
				Typeface alphabets
			</h1>

			<div class="text font-overusedGrotesk space-y-4 leading-normal">
				<p class="whitespace-break-spaces">
					The present-day designer has a host of printing types at his disposal.{" "}
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						Since Gutenberg first invented movable type in 1436-55
					</TextHighlighter>{" "}
					hundreds of different types have been designed and cast in lead.{" "}
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						The most recent technical developments
					</TextHighlighter>{" "}
					with computer and photo-typesetting have once again brought new faces or variations
					of old ones on the market.
				</p>

				<p>
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						The choice is up to the designer
					</TextHighlighter>{" "}
					It is left to his feeling for form to use{" "}
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						good or poor typefaces
					</TextHighlighter>{" "}
					for his design work. In view of the limited space available, we shall refer here to
					only a few of the outstanding designs of the past and the 20th century which have
					appeared most frequently in publications.
				</p>

				<p>
					Knowledge of the quality of a typeface is of the greatest importance for the{" "}
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						functional, aesthetic and psychological effect
					</TextHighlighter>{" "}
					of printed matter. Again, the typographic design, i. e. the correct spaces between
					letters and words and the length and spacing of lines conducive to easy reading, does
					much to enhance the impression created.{" "}
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						Today the field is dominated mainly by computer and photo-typesetting
					</TextHighlighter>{" "}
					A typical characteristic of these forms of composition is the too narrow setting of
					the letters which makes reading difficult. The designer will be well advised to demand
					the normal spacing between letters when ordering photo-typesetting.
				</p>

				<p>
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						By studying the classic designs
					</TextHighlighter>{" "}
					of{" "}
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						Garamond, Casion, Bodoni, Walbaum
					</TextHighlighter>{" "}
					and others, the designer can learn what the timeless criteria are which produce a
					refined and artistic typeface that makes for ease of reading.
				</p>

				<p>
					The lead type designs of{" "}
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						Berthold, Helvetica, Folio, Univers
					</TextHighlighter>{" "}
					etc. produce pleasant and easily legible type areas. The typographic rules that apply
					to the roman typefaces are also valid for the sans serifs.
				</p>

				<p>
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						The creators of these type designs
					</TextHighlighter>{" "}
					were extremely intelligent artists with high creative powers. This is shown by the
					fact that for more than four centuries innumerable type designers have sought to create
					new type alphabets but very few of these have gained acceptance.{" "}
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						An alphabet of Garamond
					</TextHighlighter>{" "}
					for example, is an artistic achievement of the first order. Each letter has its own
					unmistakable face, whether lower or upper case, and displays the highest quality of
					form and originality. Each letter has its own personality and makes a marked impact.
				</p>

				<p>
					Every designer who is concerned with typography should take the trouble when
					creating graphic designs to{" "}
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						sketch words and sentences by hand
					</TextHighlighter>{" "}
					Many designers take advantage of the Letraset process, which can undoubtedly produce
					a clean draft design that is almost ready for press. But a feeling for good letter
					forms and an attractive typeface can be acquired only by constant and careful practice
					in sketching letters.
				</p>

				<p>
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						How the forms of letters can create simultaneously both tension and nobility
					</TextHighlighter>{" "}
					and how pleasantly legible lines of type can appear to the eye of the reader may be
					seen from the examples on the following pages.
				</p>

				<p>
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						The Renaissance created midline typography
					</TextHighlighter>{" "}
					which held its position until the 20th century.
				</p>

				<p>
					The new typography differs from the old in that it is the first to try to{" "}
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						develop the outward appearance from the function of the text
					</TextHighlighter>
				</p>

				<p>
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						The new typography uses the background
					</TextHighlighter>{" "}
					as an element of design which is on a par with the other elements.
				</p>

				<p>
					Earlier typography (midline typography){" "}
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						played an active role against a dead, passive background.
					</TextHighlighter>
				</p>
			</div>
		</div>
	</div>
</div>
```

## Examples

### 1. Direction Based Highlight

```svelte
<script lang="ts">
	import { TextHighlighter } from "$lib/components/fancy/text-highlighter";
	import { motion, type Transition } from "motion-sv";
	import { onMount } from "svelte";

	type ScrollDirection = "ltr" | "rtl";
	type Fragment = {
		text: string;
		highlight?: boolean;
	};
	type SectionData = {
		delay?: number;
		paragraphs: Fragment[][];
	};

	const HIGHLIGHT_COLOR = "hsl(80, 100%, 50%)";
	const DEMO_USE_IN_VIEW_OPTIONS = { once: false, initial: false, amount: 0.1 };
	const DEMO_TRANSITION: Transition = { type: "spring", duration: 1, delay: 0.4, bounce: 0 };

	const sections: SectionData[] = [
		{
			paragraphs: [
				[
					{ text: "Our " },
					{ text: "object detection systems", highlight: true },
					{ text: " identify and locate items in real-time. From " },
					{ text: "facial recognition", highlight: true },
					{ text: " to product identification, we deliver precision at scale." },
				],
				[
					{ text: "Whether it's " },
					{ text: "traffic monitoring", highlight: true },
					{ text: " for smart cities or " },
					{ text: "inventory management", highlight: true },
					{
						text: " for retail, our AI distinguishes between people, vehicles, and objects with unmatched accuracy.",
					},
				],
			],
		},
		{
			paragraphs: [
				[
					{ text: "Advanced " },
					{ text: "video analytics", highlight: true },
					{ text: " track movement across frames. Our " },
					{ text: "object tracking algorithms", highlight: true },
					{ text: " power autonomous vehicles and security systems worldwide." },
				],
				[
					{ text: "Scene understanding", highlight: true },
					{ text: " capabilities analyze spatial relationships and context. From " },
					{ text: "sports performance analysis", highlight: true },
					{ text: " to " },
					{ text: "surveillance systems", highlight: true },
					{ text: ", we make sense of complex visual data." },
				],
			],
		},
		{
			paragraphs: [
				[
					{ text: "Our " },
					{ text: "OCR technology", highlight: true },
					{
						text: " converts printed and handwritten text to digital format instantly. ",
					},
					{ text: "Document automation", highlight: true },
					{ text: " streamlines workflows across industries." },
				],
				[
					{ text: "From " },
					{ text: "invoice processing", highlight: true },
					{ text: " to " },
					{ text: "accessibility solutions", highlight: true },
					{
						text: ", our text recognition supports multiple languages and formats with exceptional accuracy.",
					},
				],
			],
		},
		{
			paragraphs: [
				[
					{ text: "3D depth perception", highlight: true },
					{ text: " enables precise spatial understanding. Our " },
					{ text: "stereo vision systems", highlight: true },
					{ text: " power robotic automation and quality control processes." },
				],
				[
					{ text: "Advanced " },
					{ text: "augmented reality", highlight: true },
					{ text: " and " },
					{ text: "virtual reality applications", highlight: true },
					{ text: " rely on our depth analysis for immersive, interactive experiences." },
				],
			],
		},
		{
			paragraphs: [
				[
					{ text: "Image segmentation", highlight: true },
					{ text: " separates objects with pixel-perfect precision. Our " },
					{ text: "enhancement algorithms", highlight: true },
					{ text: " restore clarity and remove noise from any visual content." },
				],
				[
					{ text: "Generate " },
					{ text: "synthetic training data", highlight: true },
					{ text: " and create " },
					{ text: "high-resolution imagery", highlight: true },
					{ text: " for machine learning models and creative applications." },
				],
				[
					{ text: "Transform your industry", highlight: true },
					{
						text: " with computer vision that sees, understands, and acts on visual information like never before.",
					},
				],
			],
		},
	];

	let containerRef = $state<HTMLDivElement | null>(null);
	let currentSection = $state(1);
	let scrollDirection = $state<ScrollDirection>("ltr");
	let visibleSections = $state(Array.from({ length: sections.length }, () => false));

	function observeSection(node: HTMLDivElement, index: number) {
		let currentIndex = index;
		const observer = new IntersectionObserver(
			([entry]) => {
				visibleSections[currentIndex] =
					entry.isIntersecting && entry.intersectionRatio >= 0.5;
			},
			{
				rootMargin: "-20%",
				threshold: [0, 0.5, 1],
			}
		);

		observer.observe(node);

		return {
			update(nextIndex: number) {
				currentIndex = nextIndex;
			},
			destroy() {
				observer.disconnect();
			},
		};
	}

	onMount(() => {
		const container = containerRef;
		if (!container) return;

		let previousScrollLeft = container.scrollLeft;

		const handleScroll = () => {
			const { scrollLeft, clientWidth } = container;
			const sectionIndex = Math.round(scrollLeft / clientWidth) + 1;

			currentSection = Math.min(sections.length, Math.max(1, sectionIndex));

			const scrollDiff = scrollLeft - previousScrollLeft;
			if (Math.abs(scrollDiff) > 5) {
				scrollDirection = scrollDiff > 0 ? "ltr" : "rtl";
			}

			previousScrollLeft = scrollLeft;
		};

		container.addEventListener("scroll", handleScroll);

		return () => {
			container.removeEventListener("scroll", handleScroll);
		};
	});
</script>

<div class="relative h-80 w-dvw bg-[#fff] p-0 text-black md:h-130">
	<div
		class="absolute bottom-8 left-1/2 z-20 flex w-8 -translate-x-1/2 items-center justify-center rounded-full border border-black/80 px-2 pb-0.5 text-sm tabular-nums sm:bottom-12 sm:w-10 sm:px-3 sm:text-base md:bottom-16 lg:bottom-20"
	>
		{#key currentSection}
			<div class="font-overusedGrotesk">
				{currentSection.toString().padStart(2, "0")}
			</div>
		{/key}
	</div>

	<div
		bind:this={containerRef}
		class="z-10 mb-4 flex h-full w-full snap-x snap-mandatory overflow-x-scroll overflow-y-hidden bg-[#fff] sm:mb-6"
	>
		{#each sections as section, index (index)}
			<section class="flex h-full min-w-full shrink-0 snap-start items-center justify-center">
				<div
					class="mx-auto max-w-[240px] px-4 sm:max-w-sm sm:px-6 md:max-w-md lg:max-w-lg xl:max-w-xl"
				>
					<div use:observeSection={index}>
						<motion.div
							initial={{
								opacity: 0,
								filter: "blur(8px)",
							}}
							animate={visibleSections[index]
								? { opacity: 1, filter: "blur(0px)" }
								: { opacity: 0.3, filter: "blur(6px)" }}
							transition={{
								duration: 0.8,
								delay: visibleSections[index] ? (section.delay ?? 0) : 0,
								ease: [0.25, 0.1, 0.25, 1],
							}}
							class="space-y-4"
						>
							{#each section.paragraphs as paragraph, paragraphIndex (paragraphIndex)}
								<p
									class="font-overusedGrotesk mb-3 text-sm leading-relaxed whitespace-break-spaces last:mb-0 sm:mb-4 sm:text-base md:text-lg"
								>
									{#each paragraph as fragment, fragmentIndex (fragmentIndex)}
										{#if fragment.highlight}
											<TextHighlighter
												highlightColor={HIGHLIGHT_COLOR}
												direction={scrollDirection}
												useInViewOptions={DEMO_USE_IN_VIEW_OPTIONS}
												transition={DEMO_TRANSITION}
											>
												{fragment.text}
											</TextHighlighter>
										{:else}
											<span>{fragment.text}</span>
										{/if}
									{/each}
								</p>
							{/each}
						</motion.div>
					</div>
				</div>
			</section>
		{/each}
	</div>
</div>
```

### 2. Programtic Control

```svelte
<script lang="ts">
	import { TextHighlighter } from "$lib/components/fancy/text-highlighter";
	import { mode } from "mode-watcher";
	import type { Transition } from "motion-sv";

	type HighlighterRef = {
		animate: () => void;
		reset: () => void;
	};

	type Fragment = {
		text: string;
		highlight?: boolean;
	};

	const transition: Transition = { type: "spring", duration: 1, delay: 0, bounce: 0 };
	const highlightClass = "rounded-[0.3em]! px-px";
	const lightHighlightColor = "#F7F764";
	const darkHighlightColor = "#F7005F";
	let highlightColor = $derived(
		mode.current === "dark" ? darkHighlightColor : lightHighlightColor
	);

	const paragraphs: Fragment[][] = [
		[
			{
				text: "The present-day designer has a host of printing types at his disposal. Since ",
			},
			{ text: "Gutenberg", highlight: true },
			{
				text: " first invented movable type in 1436-55 hundreds of different types have been designed and cast in lead. The ",
			},
			{ text: "most recent technical developments", highlight: true },
			{
				text: " with computer and photo-typesetting have once again brought new faces or variations of old ones on the market.",
			},
		],
		[
			{
				text: "Knowledge of the quality of a typeface is of the greatest importance for the ",
			},
			{ text: "functional, aesthetic and psychological effect", highlight: true },
			{
				text: " of printed matter. Again, the typographic design, i.e. the correct spaces between letters and words and the length and spacing of lines conducive to easy reading, does much to enhance the impression created.",
			},
		],
		[
			{ text: "By studying the classic designs of " },
			{ text: "Garamond, Caslon, Bodoni, Walbaum", highlight: true },
			{
				text: " and others, the designer can learn what the timeless criteria are which produce a refined and artistic typeface that makes for ease of reading.",
			},
		],
		[
			{ text: "The lead type designs of " },
			{ text: "Berthold, Helvetica, Folio, Univers", highlight: true },
			{
				text: " etc. produce pleasant and easily legible type areas. The typographic rules that apply to the roman typefaces are also valid for the sans serifs.",
			},
		],
		[
			{ text: "The creators of these type designs", highlight: true },
			{
				text: " were extremely intelligent artists with high creative powers. This is shown by the fact that for more than four centuries innumerable type designers have sought to create new type alphabets but very few of these have gained acceptance. An ",
			},
			{ text: "alphabet of Garamond", highlight: true },
			{ text: " for example, is an artistic achievement of the first order." },
		],
		[
			{
				text: "Every designer who is concerned with typography should take the trouble when creating graphic designs to ",
			},
			{ text: "sketch words and sentences by hand", highlight: true },
			{
				text: ". Many designers take advantage of the Letraset process, which can undoubtedly produce a clean draft design that is almost ready for press.",
			},
		],
	];

	let highlighterRefs = $state<(HighlighterRef | null)[]>([]);
	let isHighlighted = $state(false);

	function getHighlightIndex(paragraphIndex: number, fragmentIndex: number) {
		let count = 0;

		for (let i = 0; i < paragraphIndex; i += 1) {
			for (const fragment of paragraphs[i]) {
				if (fragment.highlight) count += 1;
			}
		}

		for (let i = 0; i <= fragmentIndex; i += 1) {
			if (paragraphs[paragraphIndex][i]?.highlight) count += 1;
		}

		return count - 1;
	}

	function handleHighlight() {
		for (const ref of highlighterRefs) {
			ref?.animate();
		}

		isHighlighted = true;
	}

	function handleReset() {
		for (const ref of highlighterRefs) {
			ref?.reset();
		}

		isHighlighted = false;
	}
</script>

<div
	class="relative h-80 w-dvw bg-[#fefefe] p-0 text-black md:h-130 dark:bg-[#0b0b0b] dark:text-white"
>
	<div class="z-10 h-full w-full overflow-scroll bg-[#fefefe] dark:bg-[#0b0b0b]">
		<div class="mx-auto mt-20 max-w-5xl px-8 pb-20 md:px-12">
			<div class="grid grid-cols-1 gap-8 text-xs leading-relaxed md:grid-cols-2">
				{#each paragraphs as paragraph, paragraphIndex (paragraphIndex)}
					<div class="space-y-2">
						<p>
							{#each paragraph as fragment, fragmentIndex (fragmentIndex)}
								{@const highlightIndex = getHighlightIndex(
									paragraphIndex,
									fragmentIndex
								)}
								{#if fragment.highlight}
									<TextHighlighter
										bind:this={highlighterRefs[highlightIndex]}
										triggerType="ref"
										class={highlightClass}
										{transition}
										{highlightColor}
									>
										{fragment.text}
									</TextHighlighter>
								{:else}
									<span>{fragment.text}</span>
								{/if}
							{/each}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div class="absolute top-4 left-4 flex gap-4">
		<button
			onclick={isHighlighted ? handleReset : handleHighlight}
			class="border-border cursor-pointer rounded-md border bg-transparent px-3 py-1.5 text-xs text-black backdrop-blur-lg hover:bg-black/5 dark:text-white dark:hover:bg-white/10"
		>
			{isHighlighted ? "Reset" : "Highlight"}
		</button>
	</div>
</div>
```

### 3. Hover

```svelte
<script lang="ts">
	import { TextHighlighter } from "$lib/components/fancy/text-highlighter";
	import type { Transition } from "motion-sv";

	const highlightColor = "#BBC2E2";
	const baseClass = "cursor-pointer px-2 py-1";

	const transitions: Record<"ltr" | "rtl" | "ttb" | "btt", Transition> = {
		ltr: { type: "spring", duration: 0.68, bounce: 0 },
		rtl: { type: "spring", duration: 0.8, bounce: 0 },
		ttb: { type: "spring", duration: 0.8, bounce: 0 },
		btt: { type: "spring", duration: 0.8, bounce: 0 },
	};
</script>

<div
	class="flex h-80 w-dvw items-center justify-center bg-[#fefefe] text-black md:h-130 dark:bg-[#0b0b0b] dark:text-white"
>
	<div class="mx-auto max-w-sm px-4 md:max-w-md lg:max-w-lg xl:max-w-xl">
		<div class="flex flex-col gap-8 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl">
			<TextHighlighter
				triggerType="hover"
				direction="ltr"
				class={baseClass}
				{highlightColor}
				transition={transitions.ltr}
			>
				hover me - left to right
			</TextHighlighter>

			<TextHighlighter
				triggerType="hover"
				direction="rtl"
				class={baseClass}
				{highlightColor}
				transition={transitions.rtl}
			>
				hover me - right to left
			</TextHighlighter>

			<TextHighlighter
				triggerType="hover"
				direction="ttb"
				class={baseClass}
				{highlightColor}
				transition={transitions.ttb}
			>
				hover me - top to bottom
			</TextHighlighter>

			<TextHighlighter
				triggerType="hover"
				direction="btt"
				class={baseClass}
				{highlightColor}
				transition={transitions.btt}
			>
				hover me - bottom to top
			</TextHighlighter>
		</div>
	</div>
</div>
```

## Usage

Import the component and wrap the content you want it to affect. Adjust the optional props to tune the visual behavior.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `Snippet` | `undefined` | Inline content rendered inside the animated highlight span. |
| `as` | `keyof SvelteHTMLElements` | `"span"` | HTML element used for the outer wrapper. |
| `triggerType` | `"hover" \| "ref" \| "inView" \| "auto"` | `"inView"` | Controls whether the highlight responds to hover, viewport, binding, or immediately. |
| `transition` | `Transition` | `{ type: "spring", duration: 1, delay: 0, bounce: 0 }` | Motion transition used for the highlight sweep animation. |
| `useInViewOptions` | `{ once?: boolean; amount?: "some" \| "all" \| number; margin?: string; root?: HTMLElement \| Document }` | `{ once: true, amount: 0.1 }` | Observer options used when `triggerType` is `inView`. |
| `highlightColor` | `string` | `"hsl(25, 90%, 80%)"` | Color used to draw the animated background highlight. |
| `direction` | `"ltr" \| "rtl" \| "ttb" \| "btt"` | `"ltr"` | Direction the highlight expands from. |
| `class` | `string` | `undefined` | Classes applied to both the wrapper element and animated inline span. |
