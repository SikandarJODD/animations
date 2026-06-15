import LetterSwapRaw from "$lib/components/fancy/letter-swap/letter-swap.svelte?raw";
import LetterSwapPingPongRaw from "$lib/components/fancy/letter-swap-ping-pong/letter-swap-ping-pong.svelte?raw";
import IndexTsPingPongRaw from "$lib/components/fancy/letter-swap-ping-pong/index.ts?raw";
import IndexTsRaw from "$lib/components/fancy/letter-swap/index.ts?raw";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewRaw from "./examples/preview.svelte?raw";
import type { Example } from "$lib/types/examples";
import StaggerFromExample from "./examples/stagger-from-example.svelte";
import StaggerFromExampleRaw from "./examples/stagger-from-example.svelte?raw";
import LineSwapExample from "./examples/line-swap-example.svelte";
import LineSwapExampleRaw from "./examples/line-swap-example.svelte?raw";
import PingPongExample from "./examples/ping-pong-example.svelte";
import PingPongExampleRaw from "./examples/ping-pong-example.svelte?raw";
import { FANCY_OG_IMAGES, FANCY_TITLE_TEMPLATE } from "../seo";

export const meta: ComponentMeta = {
	id: "letter-swap",
	title: "Letter Swap",
	description: "A text component that swaps the letters vertically on hover.",
	category: "fancy",
	badge: "new",
};

const seo: SEO = {
	title: "Letter Swap",
	description:
		"Learn how to use the Letter Swap Fancy component in Svelte for staggered hover-driven letter transitions.",
	titleTemplate: FANCY_TITLE_TEMPLATE,
	images: FANCY_OG_IMAGES,
	keywords: [
		"Letter Swap",
		"Svelte Fancy Components",
		"Fancy Components",
		"Svelte 5",
		"Motion SV",
		"Letter Animation",
		"Hover Text Effect",
	],
};

let examples: Example[] = [
	{
		name: "Stagger From",
		preview: StaggerFromExample,
		code: {
			filename: "stagger-from-example.svelte",
			filecode: StaggerFromExampleRaw,
			lang: "svelte",
			highlight: [8, 9, 10],
		},
		previewClass: "p-0",
	},
	{
		name: "Line Swap",
		description: "By setting the staggerDelay prop to zero, you can create a line swap effect.",
		preview: LineSwapExample,
		code: {
			filename: "line-swap-example.svelte",
			filecode: LineSwapExampleRaw,
			lang: "svelte",
			highlight: [11, 12],
		},
		previewClass: "p-0",
	},
	{
		name: "Ping Pong",
		preview: PingPongExample,
		code: {
			filename: "ping-pong-example.svelte",
			filecode: PingPongExampleRaw,
			lang: "svelte",
		},
		previewClass: "p-0",
	},
];

export const data: ComponentDoc = {
	...meta,
	seo,
	preview: Preview,
	previewClass: "p-0",
	previewCode: {
		filename: "preview.svelte",
		filecode: PreviewRaw,
		lang: "svelte",
	},
	examples,
	props: [
		{
			name: "Shared Props",
			desc: "These props apply to both the forward and ping-pong Letter Swap variants shown on this page.",
			props: [
				{
					name: "label",
					type: "string",
					required: true,
					description: "Text string split into characters and animated on hover.",
				},
				{
					name: "reverse",
					type: "boolean",
					default: "true",
					description: "Reverses the vertical swap direction for the entering characters.",
				},
				{
					name: "transition",
					type: "AnimationOptions",
					default: '{ type: "spring", duration: 0.7 }',
					description: "Motion options used for the character swap animation.",
				},
				{
					name: "staggerDuration",
					type: "number",
					default: "0.03",
					description: "Delay in seconds between adjacent character swaps.",
				},
				{
					name: "staggerFrom",
					type: '"first" | "last" | "center" | number',
					default: '"first"',
					description: "Starting point used when calculating stagger delays.",
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description: "Classes merged onto the interactive text wrapper.",
				},
			],
		},
	],
};

// Letter Swap Installation
export const letterSwapInstallation: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "letter-swap.svelte",
			filecode: LetterSwapRaw,
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
            └── letter-swap/
                ├── letter-swap.svelte
                └── index.ts`,
};
// Letter Swap Ping Pong Installation
export const letterSwapPingPongInstallation: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "letter-swap-ping-pong.svelte",
			filecode: LetterSwapPingPongRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTsPingPongRaw,
			lang: "typescript",
		},
	],
	folderStructure: `src/
└── lib/
    └── components/
        └── fancy/
            └── letter-swap/
                ├── letter-swap-ping-pong.svelte
                └── index.ts`,
};
