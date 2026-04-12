import TextMarqueeRaw from "$lib/components/spell/text-marquee/text-marquee.svelte?raw";
import IndexTsRaw from "$lib/components/spell/text-marquee/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import TuningExample from "./examples/tuning-example.svelte";
import TuningExampleRaw from "./examples/tuning-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "text-marquee",
	title: "Text Marquee",
	description: "Animated text marquee component with vertical scrolling.",
	category: "spell",
};

const seo: SEO = {
	title: "Text Marquee",
	description:
		"Learn how to use the Text Marquee spell component in Svelte, including snippet-based prefixes, row rendering, and timing controls.",
	keywords: [
		"Svelte",
		"Text Marquee",
		"Spell",
		"Svelte Animations",
		"Vertical Marquee",
		"Snippet",
	],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "text-marquee.svelte",
			filecode: TextMarqueeRaw,
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
            └── text-marquee/
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
	seo,
	examples: [
		{
			name: "Tuning",
			description:
				"A smaller viewport height and quicker cycle speed create a compact announcement strip.",
			preview: TuningExample,
			code: {
				filename: "tuning-example.svelte",
				filecode: TuningExampleRaw,
				lang: "svelte",
			},
		},
	],
	props: [
		{
			props: [
				{
					name: "items",
					type: "T[]",
					required: true,
					description: "The ordered list of items to animate through vertically.",
				},
				{
					name: "children",
					type: "Snippet<[T, number]>",
					required: true,
					description:
						"Snippet used to render each animated row with the current item and index.",
				},
				{
					name: "prefix",
					type: "Snippet",
					default: "",
					description: "Optional snippet rendered once before the animated viewport.",
				},
				{
					name: "speed",
					type: "number",
					default: "1",
					description:
						"Scales the total loop duration; larger values make the marquee cycle more slowly.",
				},
				{
					name: "height",
					type: "number",
					default: "200",
					description: "Sets the visible viewport height in pixels.",
				},
				{
					name: "itemHeight",
					type: "number",
					default: "40",
					description: "Sets the height of each animated row in pixels.",
				},
				{
					name: "class",
					type: "string",
					default: "",
					description: "Custom classes applied to the root wrapper.",
				},
				{
					name: "style",
					type: "string",
					default: "",
					description: "Inline styles forwarded to the root wrapper.",
				},
			],
		},
	],
};
