import IndexTsRaw from "#lib/components/fancy/pixel-trail/index.ts?raw";
import PixelDotSvelteRaw from "#lib/components/fancy/pixel-trail/pixel-dot.svelte?raw";
import PixelTrailSvelteRaw from "#lib/components/fancy/pixel-trail/pixel-trail.svelte?raw";

import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "#lib/types/structure.js";
import type { SEO } from "#lib/types/seo.js";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import type { Example } from "#lib/types/examples.js";
import WithoutFading from "./examples/without-fading.svelte";
import PixelCircleExample from "./examples/pixel-circle-example.svelte";
import HiddenCursorPixel from "./examples/hidden-cursor-pixel.svelte";
import CustomizePixelExample from "./examples/customize-pixel-example.svelte";
import WithoutFadingRaw from "./examples/without-fading.svelte?raw";
import PixelCircleExampleRaw from "./examples/pixel-circle-example.svelte?raw";
import HiddenCursorPixelRaw from "./examples/hidden-cursor-pixel.svelte?raw";
import CustomizePixelExampleRaw from "./examples/customize-pixel-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "pixel-trail",
	title: "Pixel Trail",
	description: "A pixelated trail effect that recolors grid pixels as you move your cursor.",
	category: "fancy",
};

const seo: SEO = {
	title: "Pixel Trail",
	description: "A pixelated trail effect that recolors grid pixels as you move your cursor.",
	keywords: ["Svelte", "Pixel Trail", "Fancy"],
};

const installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{ filename: "index.ts", filecode: IndexTsRaw, lang: "typescript", isExpand: true },
		{ filename: "pixel-dot.svelte", filecode: PixelDotSvelteRaw, lang: "svelte" },
		{ filename: "pixel-trail.svelte", filecode: PixelTrailSvelteRaw, lang: "svelte" },
	],
	folderStructure: `src/
└── lib/
    └── components/
        └── fancy/
            └── pixel-trail/
                ├── pixel-trail.svelte
                └── index.ts`,
};

const examples: Example[] = [
	{
		name: "Without Fading",
		description:
			"If you set the fadeDuration prop to 0, and increase the delay prop, you can create a trail effect that doesn't fade.",
		preview: WithoutFading,
		code: {
			filename: "without-fading.svelte",
			filecode: WithoutFadingRaw,
			lang: "svelte",
			highlight: [[11, 13]],
		},
		previewClass: "p-0",
	},
	{
		name: "Pixel Circle",
		description:
			"You can create a pixel circle effect by setting the pixelClass prop to a class that has a border-radius of 50%.",
		preview: PixelCircleExample,
		code: {
			filename: "pixel-circle-example.svelte",
			filecode: PixelCircleExampleRaw,
			lang: "svelte",
			highlight: [[6, 8]],
		},
	},
	// {
	// 	name: 'Hidden Cursor Pixel',
	// 	description: "You can hide the cursor and create a pixel trail effect by setting the class prop to 'cursor-none'.",
	// 	preview: HiddenCursorPixel,
	// 	code: {
	// 		filename: "hidden-cursor-pixel.svelte",
	// 		filecode: HiddenCursorPixelRaw,
	// 		lang: "svelte",
	// 	},
	// },
	{
		name: "Customize Pixel Size and Color",
		description:
			"You can customize the pixel size and color by setting the pixelSize and pixelClass props.",
		preview: CustomizePixelExample,
		code: {
			filename: "customize-pixel-example.svelte",
			filecode: CustomizePixelExampleRaw,
			lang: "svelte",
			highlight: [
				[6, 9],
				[18, 20],
			],
		},
	},
];

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "preview.svelte",
		filecode: PreviewCodeRaw,
		lang: "svelte",
		hideLines: true,
	},
	previewClass: "!p-0",
	installBlock,
	usage: {
		code: {
			filename: "usage.svelte",
			filecode: `<script lang="ts">
	import { PixelTrail } from "#lib/components/fancy/pixel-trail/index.js";
</script>

<section class="relative h-80 overflow-hidden rounded-3xl bg-neutral-950 text-white">
	<PixelTrail
		pixelSize={24}
		fadeDuration={650}
		delay={80}
		class="z-10"
		pixelClass="bg-cyan-400"
	/>

	<div class="pointer-events-none relative z-20 flex h-full flex-col justify-end p-8">
		<p class="font-mono text-xs tracking-[0.2em] text-cyan-300 uppercase">Interactive field</p>
		<h2 class="mt-3 max-w-md text-4xl font-semibold tracking-tight">
			Move your pointer across the canvas.
		</h2>
	</div>
</section>`,
			lang: "svelte",
		},
	},
	examples,
	seo,
	props: [],
};
