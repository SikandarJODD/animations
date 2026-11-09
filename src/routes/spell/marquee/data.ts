import MarqueeRaw from "#lib/components/spell/marquee/marquee.svelte?raw";
import IndexTsRaw from "#lib/components/spell/marquee/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "#lib/types/structure.js";
import type { SEO } from "#lib/types/seo.js";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import VerticalExample from "./examples/vertical-example.svelte";
import VerticalExampleRaw from "./examples/vertical-example.svelte?raw";
import PauseOnHoverExample from "./examples/pause-on-hover-example.svelte";
import PauseOnHoverExampleRaw from "./examples/pause-on-hover-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "marquee",
	title: "Marquee",
	description: "Infinite scrolling marquee component with customizable speed and direction.",
	category: "spell",
};

const seo: SEO = {
	title: "Marquee",
	description:
		"Learn how to use the Marquee spell component in Svelte, including horizontal and vertical directions, hover pause, and fade tuning.",
	keywords: ["Svelte", "Marquee", "Spell", "Svelte Animations", "Ticker", "Scrolling Content"],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "marquee.svelte",
			filecode: MarqueeRaw,
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
        └── spell/
            └── marquee/
                ├── marquee.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "preview.svelte",
		filecode: PreviewCodeRaw,
		lang: "svelte",
		hideLines: true,
	},
	installBlock,
	examples: [
		{
			name: "Pause on Hover",
			preview: PauseOnHoverExample,
			code: {
				filename: "pause-on-hover-example.svelte",
				filecode: PauseOnHoverExampleRaw,
				lang: "svelte",
				highlight: [2],
			},
		},
		{
			name: "Vertical Stack",
			description:
				"Switch the direction to vertical and tune the fade amount to create a stacked announcement or feature rail.",
			preview: VerticalExample,
			code: {
				filename: "vertical-example.svelte",
				filecode: VerticalExampleRaw,
				lang: "svelte",
				highlight: [2],
			},
		},
	],
	seo,
	props: [
		{
			props: [
				{
					name: "children",
					type: "Snippet",
					required: true,
				},
				{
					name: "duration",
					type: "number",
					default: "20",
				},
				{
					name: "pauseOnHover",
					type: "boolean",
					default: "false",
				},
				{
					name: "direction",
					type: '"left" | "right" | "up" | "down"',
					default: '"left"',
				},
				{
					name: "fade",
					type: "boolean",
					default: "true",
				},
				{
					name: "fadeAmount",
					type: "number",
					default: "10",
				},
				{
					name: "class",
					type: "string",
					default: "''",
				},
				{
					name: "style",
					type: "string",
					default: "''",
				},
			],
		},
	],
};
