# Animated Beam

An animated beam of light which travels along a path. Useful for showcasing the "integration" features of a website.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-beam.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-beam.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-beam.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-beam.json
```

## Preview

```svelte
<script lang="ts">
	import { AnimatedBeam } from "$lib/components/magic/animated-beam";
	import Circle from "./circle.svelte";
	import OpenAIIcon from "./openai-icon.svelte";
	import UserIcon from "./user-icon.svelte";

	let containerRef: HTMLDivElement | null = $state(null);
	let div1Ref: HTMLDivElement | null = $state(null);
	let div2Ref: HTMLDivElement | null = $state(null);
</script>

<div
	class="relative flex min-w-70 items-center justify-center overflow-hidden md:min-w-125 md:p-10"
	bind:this={containerRef}
>
	<div class="flex size-full flex-col items-stretch justify-between gap-10">
		<div class="flex flex-row justify-between">
			<Circle bind:ref={div1Ref}>
				<UserIcon />
			</Circle>
			<Circle bind:ref={div2Ref}>
				<OpenAIIcon />
			</Circle>
		</div>
	</div>
	<AnimatedBeam duration={3} {containerRef} fromRef={div1Ref} toRef={div2Ref} />
</div>
```

## Examples

### 1. With Curvature

```svelte
<script lang="ts">
	import { AnimatedBeam } from "$lib/components/magic/animated-beam";
	import Circle from "./circle.svelte";
	import OpenaiIcon from "./openai-icon.svelte";
	import UserIcon from "./user-icon.svelte";

	let containerRef: HTMLDivElement | null = $state(null);
	let div1Ref: HTMLDivElement | null = $state(null);
	let div2Ref: HTMLDivElement | null = $state(null);
</script>

<div
	class="relative flex min-w-70 items-center justify-center overflow-hidden p-10 md:min-w-125"
	bind:this={containerRef}
>
	<div class="flex size-full flex-col items-stretch justify-between gap-10">
		<div class="flex flex-row justify-between">
			<Circle bind:ref={div1Ref}>
				<UserIcon />
			</Circle>
			<Circle bind:ref={div2Ref}>
				<OpenaiIcon />
			</Circle>
		</div>
	</div>

	<AnimatedBeam duration={3} {containerRef} fromRef={div1Ref} toRef={div2Ref} curvature={100} />
</div>
```

### 2. Reverse Direction

```svelte
<script lang="ts">
	import { AnimatedBeam } from "$lib/components/magic/animated-beam";
	import Circle from "./circle.svelte";
	import OpenaiIcon from "./openai-icon.svelte";
	import UserIcon from "./user-icon.svelte";

	let containerRef: HTMLDivElement | null = $state(null);
	let div1Ref: HTMLDivElement | null = $state(null);
	let div2Ref: HTMLDivElement | null = $state(null);
</script>

<div
	class="relative flex min-w-70 items-center justify-center overflow-hidden p-10 md:min-w-125"
	bind:this={containerRef}
>
	<div class="flex size-full flex-col items-stretch justify-between gap-10">
		<div class="flex flex-row justify-between">
			<Circle bind:ref={div1Ref}>
				<UserIcon />
			</Circle>
			<Circle bind:ref={div2Ref}>
				<OpenaiIcon />
			</Circle>
		</div>
	</div>

	<AnimatedBeam duration={3} {containerRef} fromRef={div1Ref} toRef={div2Ref} reverse={true} />
</div>
```

### 3. Bi Directional Beams

```svelte
<script lang="ts">
	import { AnimatedBeam } from "$lib/components/magic/animated-beam";
	import Circle from "./circle.svelte";
	import OpenaiIcon from "./openai-icon.svelte";
	import UserIcon from "./user-icon.svelte";

	let containerRef: HTMLDivElement | null = $state(null);
	let div1Ref: HTMLDivElement | null = $state(null);
	let div2Ref: HTMLDivElement | null = $state(null);
</script>

<div
	class="relative flex min-w-70 items-center justify-center overflow-hidden p-10 md:min-w-125"
	bind:this={containerRef}
>
	<div class="flex size-full flex-col items-stretch justify-between gap-10">
		<div class="flex flex-row justify-between">
			<Circle bind:ref={div1Ref}>
				<UserIcon />
			</Circle>
			<Circle bind:ref={div2Ref}>
				<OpenaiIcon />
			</Circle>
		</div>
	</div>

	<AnimatedBeam
		{containerRef}
		fromRef={div1Ref}
		toRef={div2Ref}
		startYOffset={10}
		endYOffset={10}
		curvature={-20}
	/>
	<AnimatedBeam
		{containerRef}
		fromRef={div2Ref}
		toRef={div1Ref}
		startYOffset={-10}
		endYOffset={-10}
		curvature={20}
		reverse
	/>
</div>
```

### 4. Multiple Beams Inputs

```svelte
<script lang="ts">
	import { AnimatedBeam } from "$lib/components/magic/animated-beam";
	import Circle from "./circle.svelte";
	import GoogleDriveIcon from "./google-drive-icon.svelte";
	import GoogleDocsIcon from "./google-docs-icon.svelte";
	import WhatsappIcon from "./whatsapp-icon.svelte";
	import MessengerIcon from "./messenger-icon.svelte";
	import NotionIcon from "./notion-icon.svelte";
	import OpenaiIcon from "./openai-icon.svelte";
	import UserIcon from "./user-icon.svelte";

	let containerRef: HTMLDivElement | null = $state(null);
	let div1Ref: HTMLDivElement | null = $state(null);
	let div2Ref: HTMLDivElement | null = $state(null);
	let div3Ref: HTMLDivElement | null = $state(null);
	let div4Ref: HTMLDivElement | null = $state(null);
	let div5Ref: HTMLDivElement | null = $state(null);
	let div6Ref: HTMLDivElement | null = $state(null);
	let div7Ref: HTMLDivElement | null = $state(null);
</script>

<div
	class="relative flex h-[500px] w-full items-center justify-center overflow-hidden p-10"
	bind:this={containerRef}
>
	<div class="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
		<div class="flex flex-col justify-center gap-2">
			<Circle bind:ref={div1Ref}>
				<GoogleDriveIcon />
			</Circle>
			<Circle bind:ref={div2Ref}>
				<GoogleDocsIcon />
			</Circle>
			<Circle bind:ref={div3Ref}>
				<WhatsappIcon />
			</Circle>
			<Circle bind:ref={div4Ref}>
				<MessengerIcon />
			</Circle>
			<Circle bind:ref={div5Ref}>
				<NotionIcon />
			</Circle>
		</div>
		<div class="flex flex-col justify-center">
			<Circle bind:ref={div6Ref} class="size-16">
				<OpenaiIcon />
			</Circle>
		</div>
		<div class="flex flex-col justify-center">
			<Circle bind:ref={div7Ref}>
				<UserIcon />
			</Circle>
		</div>
	</div>

	<AnimatedBeam {containerRef} fromRef={div1Ref} toRef={div6Ref} />
	<AnimatedBeam {containerRef} fromRef={div2Ref} toRef={div6Ref} />
	<AnimatedBeam {containerRef} fromRef={div3Ref} toRef={div6Ref} />
	<AnimatedBeam {containerRef} fromRef={div4Ref} toRef={div6Ref} />
	<AnimatedBeam {containerRef} fromRef={div5Ref} toRef={div6Ref} />
	<AnimatedBeam {containerRef} fromRef={div6Ref} toRef={div7Ref} />
</div>
```

### 5. Multiple Beams Outputs

```svelte
<script lang="ts">
	import { AnimatedBeam } from "$lib/components/magic/animated-beam";
	import Circle from "./circle.svelte";
	import GoogleDriveIcon from "./google-drive-icon.svelte";
	import GoogleDocsIcon from "./google-docs-icon.svelte";
	import WhatsappIcon from "./whatsapp-icon.svelte";
	import MessengerIcon from "./messenger-icon.svelte";
	import NotionIcon from "./notion-icon.svelte";
	import OpenaiIcon from "./openai-icon.svelte";
	import UserIcon from "./user-icon.svelte";

	let containerRef: HTMLDivElement | null = $state(null);
	let div1Ref: HTMLDivElement | null = $state(null);
	let div2Ref: HTMLDivElement | null = $state(null);
	let div3Ref: HTMLDivElement | null = $state(null);
	let div4Ref: HTMLDivElement | null = $state(null);
	let div5Ref: HTMLDivElement | null = $state(null);
	let div6Ref: HTMLDivElement | null = $state(null);
	let div7Ref: HTMLDivElement | null = $state(null);
</script>

<div
	class="relative flex h-[500px] w-full items-center justify-center overflow-hidden p-10"
	bind:this={containerRef}
>
	<div class="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
		<div class="flex flex-col justify-center">
			<Circle bind:ref={div7Ref}>
				<UserIcon />
			</Circle>
		</div>
		<div class="flex flex-col justify-center">
			<Circle bind:ref={div6Ref} class="size-16">
				<OpenaiIcon />
			</Circle>
		</div>
		<div class="flex flex-col justify-center gap-2">
			<Circle bind:ref={div1Ref}>
				<GoogleDriveIcon />
			</Circle>
			<Circle bind:ref={div2Ref}>
				<GoogleDocsIcon />
			</Circle>
			<Circle bind:ref={div3Ref}>
				<WhatsappIcon />
			</Circle>
			<Circle bind:ref={div4Ref}>
				<MessengerIcon />
			</Circle>
			<Circle bind:ref={div5Ref}>
				<NotionIcon />
			</Circle>
		</div>
	</div>

	<AnimatedBeam {containerRef} fromRef={div1Ref} toRef={div6Ref} duration={3} />
	<AnimatedBeam {containerRef} fromRef={div2Ref} toRef={div6Ref} duration={3} />
	<AnimatedBeam {containerRef} fromRef={div3Ref} toRef={div6Ref} duration={3} />
	<AnimatedBeam {containerRef} fromRef={div4Ref} toRef={div6Ref} duration={3} />
	<AnimatedBeam {containerRef} fromRef={div5Ref} toRef={div6Ref} duration={3} />
	<AnimatedBeam {containerRef} fromRef={div6Ref} toRef={div7Ref} duration={3} />
</div>
```

## Usage

Bind a shared container and the two endpoint elements, then pass those refs into `AnimatedBeam`. You can shape the path with `curvature`, reverse its direction with `reverse`, and fine-tune the start and end positions with the offset props.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | `""` | Additional CSS classes to apply |
| `containerRef` | `HTMLElement \| null` | `null` | Reference to the container element |
| `fromRef` | `HTMLElement \| null` | `null` | Reference to the starting element |
| `toRef` | `HTMLElement \| null` | `null` | Reference to the ending element |
| `curvature` | `number` | `0` | Curvature of the beam path |
| `reverse` | `boolean` | `false` | Reverse the animation direction |
| `duration` | `number` | `Math.random() * 3 + 4` | Duration of the animation in seconds |
| `delay` | `number` | `0` | Delay before the animation starts |
| `pathColor` | `string` | `"gray"` | Color of the beam path |
| `pathWidth` | `number` | `2` | Width of the beam path |
| `pathOpacity` | `number` | `0.2` | Opacity of the beam path |
| `gradientStartColor` | `string` | `"#ffaa40"` | Starting color of the beam gradient |
| `gradientStopColor` | `string` | `"#9c40ff"` | Ending color of the beam gradient |
| `startXOffset` | `number` | `0` | X offset for the start position |
| `startYOffset` | `number` | `0` | Y offset for the start position |
| `endXOffset` | `number` | `0` | X offset for the end position |
| `endYOffset` | `number` | `0` | Y offset for the end position |
