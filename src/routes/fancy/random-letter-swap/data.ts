import RandomLetterSwapPingPongRaw from "#lib/components/fancy/random-letter-swap-ping-pong/random-letter-swap-ping-pong.svelte?raw";
import IndexPingPongRaw from "#lib/components/fancy/random-letter-swap-ping-pong/index.ts?raw";
import IndexTsRaw from "#lib/components/fancy/random-letter-swap/index.ts?raw";
import RandomLetterSwapRaw from "#lib/components/fancy/random-letter-swap/random-letter-swap.svelte?raw";
import type { SEO } from "#lib/types/seo.js";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "#lib/types/structure.js";
import Preview from "./examples/preview.svelte";
import PreviewRaw from "./examples/preview.svelte?raw";
import { FANCY_OG_IMAGES, FANCY_TITLE_TEMPLATE } from "../seo";

export const meta: ComponentMeta = {
	id: "random-letter-swap",
	title: "Random Letter Swap",
	description: "A text component that randomly swaps the letters vertically on hover.",
	category: "fancy",
	badge: "new",
};

const seo: SEO = {
	title: "Random Letter Swap",
	description:
		"Learn how to use the Random Letter Swap Fancy component in Svelte for randomized hover-driven letter transitions.",
	titleTemplate: FANCY_TITLE_TEMPLATE,
	images: FANCY_OG_IMAGES,
	keywords: [
		"Random Letter Swap",
		"Svelte Fancy Components",
		"Fancy Components",
		"Svelte 5",
		"Motion SV",
		"Randomized Text Animation",
		"Hover Text Effect",
		"runed",
	],
};

const installBlock: InstallComponentDocs = {
	packages: ["motion-sv", "runed"],
	installCode: [
		{
			filename: "random-letter-swap.svelte",
			filecode: RandomLetterSwapRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTsRaw,
			lang: "typescript",
		},
	],
	folderStructure: `src/
+-- lib/
    +-- components/
        +-- fancy/
            +-- random-letter-swap/
                |-- random-letter-swap.svelte
                +-- index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	seo,
	installBlock,
	preview: Preview,
	previewCode: {
		filename: "preview.svelte",
		filecode: PreviewRaw,
		lang: "svelte",
	},
	previewClass: "p-0",
	usage: {
		code: [
			{
				filename: "forward-usage.svelte",
				filecode: `<script lang="ts">
	import { RandomLetterSwap } from "#lib/components/fancy/random-letter-swap/index.js";
</script>

<a href="/archive" class="inline-flex text-3xl font-semibold tracking-tight">
	<RandomLetterSwap
		label="Explore the archive"
		staggerDuration={0.025}
		transition={{ type: "spring", duration: 0.65, bounce: 0 }}
		class="text-foreground"
	/>
</a>`,
				lang: "svelte",
			},
			{
				filename: "ping-pong-usage.svelte",
				filecode: `<script lang="ts">
	import { RandomLetterSwapPingPong } from "#lib/components/fancy/random-letter-swap-ping-pong/index.js";
</script>

<button type="button" class="rounded-full bg-black px-5 py-3 text-sm font-medium text-white">
	<RandomLetterSwapPingPong
		label="Shuffle selection"
		reverse={false}
		staggerDuration={0.018}
		transition={{ type: "spring", duration: 0.6, bounce: 0 }}
	/>
</button>`,
				lang: "svelte",
			},
		],
	},
	props: [
		{
			name: "Shared Props",
			desc: "These props apply to both the forward and ping-pong Random Letter Swap variants shown on this page.",
			props: [
				{
					name: "label",
					type: "string",
					required: true,
					description:
						"Text string split into characters and shuffled into a random reveal order.",
				},
				{
					name: "reverse",
					type: "boolean",
					default: "true",
					description:
						"Reverses the vertical swap direction for the entering characters.",
				},
				{
					name: "transition",
					type: "AnimationOptions",
					default: '{ type: "spring", duration: 0.8 }',
					description: "Motion options used for each randomly ordered character swap.",
				},
				{
					name: "staggerDuration",
					type: "number",
					default: "0.02",
					description:
						"Delay in seconds between characters in the shuffled animation order.",
				},
				{
					name: "class",
					type: "ClassValue",
					default: "undefined",
					description: "Classes merged onto the interactive text wrapper.",
				},
			],
		},
	],
};

export let randomLetterSwapInstallation: InstallComponentDocs = {
	packages: ["motion-sv", "runed"],
	installCode: [
		{
			filename: "random-letter-swap.svelte",
			filecode: RandomLetterSwapRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTsRaw,
			lang: "typescript",
		},
	],
	folderStructure: `src/
└── lib/
    └── components/
        └── fancy/
            └── random-letter-swap/
                ├── random-letter-swap.svelte
                └── index.ts`,
};

export let randomLetterSwapPingPongInstallation: InstallComponentDocs = {
	packages: ["motion-sv", "runed"],
	installCode: [
		{
			filename: "random-letter-swap-ping-pong.svelte",
			filecode: RandomLetterSwapPingPongRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexPingPongRaw,
			lang: "typescript",
		},
	],
	folderStructure: `src/
└── lib/
    └── components/
        └── fancy/
            └── random-letter-swap-ping-pong/
                ├── random-letter-swap-ping-pong.svelte
                └── index.ts`,
};
