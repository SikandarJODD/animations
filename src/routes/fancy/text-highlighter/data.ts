import IndexTsRaw from "$lib/components/fancy/text-highlighter/index.ts?raw";
import TextHighlighterRaw from "$lib/components/fancy/text-highlighter/text-highlighter.svelte?raw";
import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import DirectionBasedHighlightExample from "./examples/direction-based-highlight-example.svelte";
import DirectionBasedHighlightExampleRaw from "./examples/direction-based-highlight-example.svelte?raw";
import HoverExample from "./examples/hover.svelte";
import HoverExampleRaw from "./examples/hover.svelte?raw";
import Preview from "./examples/preview.svelte";
import PreviewRaw from "./examples/preview.svelte?raw";
import ProgramticControlExample from "./examples/programtic-control.svelte";
import ProgramticControlExampleRaw from "./examples/programtic-control.svelte?raw";
import { FANCY_OG_IMAGES, FANCY_TITLE_TEMPLATE } from "../seo";

export const meta: ComponentMeta = {
	id: "text-highlighter",
	title: "Text Highlighter",
	description: "Sweep a highlight background across inline text on hover, in view, or on demand.",
	category: "fancy",
	badge: "new",
};

const seo: SEO = {
	title: "Text Highlighter",
	description:
		"Learn how to use the Text Highlighter Fancy component in Svelte for animated inline emphasis triggered by hover, viewport entry, or imperative calls.",
	titleTemplate: FANCY_TITLE_TEMPLATE,
	images: FANCY_OG_IMAGES,
	keywords: [
		"Text Highlighter",
		"Svelte Fancy Components",
		"Fancy Components",
		"Svelte 5",
		"Motion SV",
		"Inline Highlight",
		"Text Emphasis",
		"Hover Highlight",
	],
};

const installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "text-highlighter.svelte",
			filecode: TextHighlighterRaw,
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
            └── text-highlighter/
                ├── text-highlighter.svelte
                └── index.ts`,
};

const examples: Example[] = [
	{
		name: "Direction Based Highlight",
		preview: DirectionBasedHighlightExample,
		previewClass: "p-0",
		code: {
			filename: "direction-based-highlight-example.svelte",
			filecode: DirectionBasedHighlightExampleRaw,
			lang: "svelte",
			isExpand: true,
		},
	},
	{
		name: "Programtic Control",
		preview: ProgramticControlExample,
		previewClass: "p-0",
		code: {
			filename: "programtic-control.svelte",
			filecode: ProgramticControlExampleRaw,
			lang: "svelte",
			isExpand: true,
		},
	},
	{
		name: "Hover",
		preview: HoverExample,
		previewClass: "p-0",
		code: {
			filename: "hover.svelte",
			filecode: HoverExampleRaw,
			lang: "svelte",
			isExpand: true,
		},
	},
];

export const data: ComponentDoc = {
	...meta,
	seo,
	installBlock,
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
			props: [
				{
					name: "children",
					type: "Snippet",
					default: "undefined",
					description: "Inline content rendered inside the animated highlight span.",
				},
				{
					name: "as",
					type: "keyof SvelteHTMLElements",
					default: '"span"',
					description: "HTML element used for the outer wrapper.",
				},
				{
					name: "triggerType",
					type: '"hover" | "ref" | "inView" | "auto"',
					default: '"inView"',
					description: "Controls whether the highlight responds to hover, viewport, binding, or immediately.",
				},
				{
					name: "transition",
					type: "Transition",
					default: '{ type: "spring", duration: 1, delay: 0, bounce: 0 }',
					description: "Motion transition used for the highlight sweep animation.",
				},
				{
					name: "useInViewOptions",
					type: "{ once?: boolean; amount?: \"some\" | \"all\" | number; margin?: string; root?: HTMLElement | Document }",
					default: "{ once: true, amount: 0.1 }",
					description: "Observer options used when `triggerType` is `inView`.",
				},
				{
					name: "highlightColor",
					type: "string",
					default: '"hsl(25, 90%, 80%)"',
					description: "Color used to draw the animated background highlight.",
				},
				{
					name: "direction",
					type: '"ltr" | "rtl" | "ttb" | "btt"',
					default: '"ltr"',
					description: "Direction the highlight expands from.",
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description: "Classes applied to both the wrapper element and animated inline span.",
				},
			],
		},
	],
};
