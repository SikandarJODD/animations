# Text Along Path

Render animated text that loops or tracks scroll progress along any SVG path.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/f/text-along-path.json
npm install motion-sv

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/f/text-along-path.json
yarn add motion-sv

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/f/text-along-path.json
pnpm add motion-sv

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/f/text-along-path.json
bun add motion-sv
```

## Preview

```svelte
<script lang="ts">
	import { onDestroy } from "svelte";
	import { AnimatePresence, motion } from "motion-sv";
	import { AnimatedPathText } from "$lib/components/fancy/text-along-path";
	import { BarSpinner } from "$lib/components/spell/bar-spinner";

	type ButtonState = "idle" | "loading" | "success";

	const rectPath =
		"M 20,20 L 180,20 A 20,20 0 0,1 200,40 L 200,160 A 20,20 0 0,1 180,180 L 20,180 A 20,20 0 0,1 0,160 L 0,40 A 20,20 0 0,1 20,20";

	let buttonState: ButtonState = $state("idle");
	let email = $state("");

	let successTimeout: ReturnType<typeof setTimeout> | null = null;
	let resetTimeout: ReturnType<typeof setTimeout> | null = null;

	function clearTimers() {
		if (successTimeout) {
			clearTimeout(successTimeout);
			successTimeout = null;
		}

		if (resetTimeout) {
			clearTimeout(resetTimeout);
			resetTimeout = null;
		}
	}

	function handleSubmit() {
		if (buttonState !== "idle") return;

		clearTimers();
		buttonState = "loading";

		successTimeout = setTimeout(() => {
			buttonState = "success";
		}, 1750);

		resetTimeout = setTimeout(() => {
			buttonState = "idle";
			email = "";
		}, 3500);
	}

	onDestroy(() => {
		clearTimers();
	});
</script>

<div
	class="relative flex h-60 w-2xl items-center justify-center rounded-xl bg-white text-[#0015ff] md:h-100"
>
	<AnimatedPathText
		path={rectPath}
		svgClass="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-2 sm:py-8"
		viewBox="-20 10 240 180"
		text="JOIN THE WAITLIST ✉ JOIN THE WAITLIST ✉ JOIN THE WAITLIST ✉ JOIN THE WAITLIST ✉ JOIN THE WAITLIST ✉ JOIN THE WAITLIST ✉JOIN THE WAITLIST ✉JOIN BROTHER"
		textClass="text-[10.6px] lowercase font-azeret-mono text-[#0015ff]"
		preserveAspectRatio="none"
		duration={20}
		textAnchor="start"
	/>
	<div class="absolute top-1/2 left-1/2 w-56 -translate-x-1/2 -translate-y-1/2 p-6 sm:w-80">
		<div class="space-y-3">
			<label class="sr-only" for="waitlist-email">Email</label>
			<input
				id="waitlist-email"
				type="email"
				placeholder="Enter your email"
				bind:value={email}
				class="focus:ring-primary-blue/50 font-azeret-mono w-full rounded-lg border border-[#0015ff] bg-white px-3 py-2 text-xs placeholder:text-[#0015ff] focus:outline-hidden sm:px-4 sm:py-2 sm:text-base"
			/>

			<button
				type="button"
				onclick={handleSubmit}
				disabled={buttonState === "loading"}
				class="font-azeret-mono relative flex h-10 w-full items-center justify-center overflow-hidden rounded-xl bg-[#0015ff] px-4 text-xs text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-80 sm:h-11 sm:text-sm"
			>
				<AnimatePresence mode="wait" initial={false}>
					<motion.span
						class="inline-flex items-center justify-center"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						transition={{ type: "spring", duration: 0.3, bounce: 0 }}
					>
						{#if buttonState === "loading"}
							<BarSpinner />
						{:else if buttonState === "success"}
							Done
						{:else}
							Subscribe
						{/if}
					</motion.span>
				</AnimatePresence>
			</button>
		</div>
	</div>
</div>
```

## Examples

### 1. Auto Animation

```svelte
<script lang="ts">
	import { AnimatedPathText } from "$lib/components/fancy/text-along-path";

	const paths = [
		"M1 248C214 -47 582 158 679 -39",
		"M1 208C214 -87 582 118 679 -79",
		"M1 168C214 -127 582 78 679 -119",
	];

	const texts = [
		`PARIS • LONDON • BERLIN • ROME • BARCELONA • MADRID • VIENNA • PRAGUE • AMSTERDAM • STOCKHOLM`,
		`BUDAPEST • COPENHAGEN • OSLO • HELSINKI • MILAN • MUNICH • VENICE • MADRID • VIENNA • PRAGUE`,
		`PARIS • BERLIN • ROME • BARCELONA • MADRID • VIENNA • PRAGUE • AMSTERDAM`,
	];
</script>

<div class="relative h-80 w-dvw overflow-hidden bg-white md:h-160">
	<div class="absolute flex h-full w-full flex-col">
		{#each paths as path, i}
			<AnimatedPathText
				{path}
				pathId="auto-path-{i}"
				svgClass="absolute -left-25 top-1/3 w-[calc(100%+200px)] h-full"
				viewBox="0 0 680 250"
				text={texts[i]}
				textClass="text font-thin text-gray-800"
				animationType="auto"
				duration={i * 0.5 + 5}
				textAnchor="start"
			/>
		{/each}
	</div>
</div>
```

### 2. Animation on closed path

```svelte
<script lang="ts">
	import { AnimatedPathText } from "$lib/components/fancy/text-along-path";
	import { cn } from "$lib/utils";

	const circlePath = "M 100 100 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0";
</script>

<div class="relative flex h-80 w-dvw items-center justify-center md:h-100">
	{#each [0, 90, 180, 270] as rotation, i}
		<AnimatedPathText
			path={circlePath}
			pathId="circle-path-{i}"
			svgClass={cn(
				"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full ",
				{
					"rotate-0": rotation === 0,
					"rotate-90": rotation === 90,
					"rotate-180": rotation === 180,
					"-rotate-90": rotation === 270,
				}
			)}
			easingFunction={{
				calcMode: "spline",
				keyTimes: "0;1",
				keySplines: "0.762 0.002 0.253 0.999",
			}}
			viewBox="0 0 200 200"
			text="loading"
			textClass="text-[15px] font-serif"
			duration={2.5}
			textAnchor="start"
		></AnimatedPathText>
	{/each}
</div>
```

### 3. Scroll-driven animation

```svelte
<script lang="ts">
	import { AnimatedPathText } from "$lib/components/fancy/text-along-path";

	const paths = [
		"M1 254C177 219 61 -64 269 15C477 94 332 285 214 348C96 411 155 546 331 486C507 426 410 267 667 215C872.6 173.4 951.333 264.333 965 315",
		"M1 214C177 179 61 -104 269 -25C477 54 332 245 214 308C96 371 155 506 331 446C507 386 410 227 667 175C872.6 133.4 951.333 224.333 965 275",
		"M1 294C177 259 61 -24 269 55C477 134 332 325 214 388C96 451 155 586 331 526C507 466 410 307 667 255C872.6 213.4 951.333 304.333 965 355",
		"M1 174C177 139 61 -144 269 -65C477 14 332 205 214 268C96 331 155 466 331 406C507 346 410 187 667 135C872.6 93.4 951.333 184.333 965 235",
		"M1 334C177 299 61 16 269 95C477 174 332 365 214 428C96 491 155 626 331 566C507 506 410 347 667 295C872.6 253.4 951.333 344.333 965 395",
		"M1 134C177 99 61 -184 269 -105C477 -26 332 165 214 228C96 291 155 426 331 366C507 306 410 147 667 95C872.6 53.4 951.333 144.333 965 195",
		"M1 374C177 339 61 56 269 135C477 214 332 405 214 468C96 531 155 666 331 606C507 546 410 387 667 335C872.6 293.4 951.333 384.333 965 435",
		"M1 94C177 59 61 -224 269 -145C477 -66 332 125 214 188C96 251 155 386 331 326C507 266 410 107 667 55C872.6 13.4 951.333 104.333 965 155",
	];

	// Fun text phrases for each path
	const texts = [
		"Information is expanding daily. How to get it out visually is important.",
		"The details are not the details. They make the design.",
		"There's no other product that changes function like the computer.",
		"Innovation is the outcome of a habit, not a random act.",
		"The only important thing about design is how it relates to people.",
		"Good design is obvious. Great design is transparent.",
	];

	let containerRef: HTMLDivElement | null = $state(null);
</script>

<div
	class="font-figtree scrollbar-thin relative h-80 w-full overflow-auto md:h-130"
	bind:this={containerRef}
>
	<div class="absolute top-0 left-0 mt-40 flex h-[200%] w-full flex-col items-center text-4xl">
		<p>SCROLL DOWN</p>
	</div>
	<div class="sticky top-0 flex h-full w-full flex-col">
		{#each paths as path, i}
			<AnimatedPathText
				{path}
				// showPath
				scrollContainer={containerRef}
				pathId="flowing-path-{i}"
				svgClass="absolute -left-25 top-0 w-[calc(100%+200px)] h-full"
				viewBox="0 0 900 600"
				text={texts[i]}
				textClass={`text-xl font-thin font-calendas`}
				animationType="scroll"
				scrollTransformValues={[-130, 95]}
				textAnchor="start"
			/>
		{/each}
	</div>
</div>
```

## Usage

Import `TextAlongPath` from `$lib/components/fancy/text-along-path` and pass the props you need for your use case.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `path` | `string` | `required` | SVG path data string used as the motion track for the text. |
| `text` | `string` | `required` | Text content rendered along the path. |
| `pathId` | `string` | `auto-generated` | Optional id used to link the `<path>` and `<textPath>` nodes. |
| `pathClass` | `string` | `undefined` | Classes applied to the underlying SVG path element. |
| `preserveAspectRatio` | `PreserveAspectRatio` | `"xMidYMid meet"` | SVG preserveAspectRatio value forwarded to the root element. |
| `showPath` | `boolean` | `false` | Displays the underlying guide path using the current text color. |
| `width` | `string \| number` | `"100%"` | Width forwarded to the root SVG element. |
| `height` | `string \| number` | `"100%"` | Height forwarded to the root SVG element. |
| `viewBox` | `string` | `"0 0 100 100"` | SVG viewBox used to size and scale the path scene. |
| `svgClass` | `string` | `undefined` | Classes applied to the root SVG element. |
| `textClass` | `string` | `undefined` | Classes applied to each `<textPath>` instance. |
| `textAnchor` | `"start" \| "middle" \| "end"` | `"start"` | Anchor alignment used for the rendered SVG text. |
| `animationType` | `"auto" \| "scroll"` | `"auto"` | Uses SVG `<animate>` loops in `auto` mode or maps scroll progress to `startOffset` in `scroll` mode. |
| `duration` | `number` | `4` | Duration in seconds for the automatic looping animation. |
| `repeatCount` | `number \| "indefinite"` | `"indefinite"` | Repeat count forwarded to the SVG animate elements in auto mode. |
| `easingFunction` | `{ calcMode?: string; keyTimes?: string; keySplines?: string }` | `{}` | Optional SVG animation timing settings forwarded to both auto animation tracks. |
| `scrollContainer` | `HTMLElement \| null` | `undefined` | Optional scroll container observed when `animationType` is `scroll`. |
| `scrollOffset` | `UseScrollOptions["offset"]` | `["start end", "end end"]` | Offset pair used by `motion-sv` when tracking scroll progress. |
| `scrollTransformValues` | `[number, number]` | `[0, 100]` | Maps scroll progress to the text path start offset percentage range. |
