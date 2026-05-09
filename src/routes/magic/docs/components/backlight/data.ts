import BacklightRaw from "$lib/components/magic/backlight/backlight.svelte?raw";
import IndexTs from "$lib/components/magic/backlight/index.ts?raw";

import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import BacklightSvgExample from "./examples/backlight-svg-example.svelte";
import BacklightSvgExampleRaw from "./examples/backlight-svg-example.svelte?raw";
import BacklightImageExample from "./examples/backlight-image-example.svelte";
import BacklightImageExampleRaw from "./examples/backlight-image-example.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "backlight",
	title: "Backlight",
	description:
		"An SVG filter wrapper that adds a soft, saturated backlight glow around the content it wraps.",
	category: "animation",
	badge: "new",
};

const seo: SEO = {
	title: "Backlight",
	description:
		"Learn how to wrap content with a soft backlight glow effect in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Backlight", "Glow Effect", "SVG Filter", "Svelte 5 Animations"],
};

const examples: Example[] = [
	{
		name: "Image",
		preview: BacklightImageExample,
		previewClass: "h-100",
		code: {
			filename: "backlight-image-example.svelte",
			filecode: BacklightImageExampleRaw,
			lang: "svelte",
			highlight: [2],
		},
	},
	{
		name: "Svg",
		preview: BacklightSvgExample,
		code: {
			filename: "backlight-svg-example.svelte",
			filecode: BacklightSvgExampleRaw,
			lang: "svelte",
			highlight: [2],
		},
	},
];

let installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{
			filename: "backlight.svelte",
			filecode: BacklightRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTs,
			lang: "typescript",
		},
	],
	folderStructure: `src/
└── lib/
    └── components/
        └── magic/
            └── backlight/
                ├── backlight.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "backlight.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "Backlight",
			desc: "Wraps content in an SVG blur and saturation filter to create a glowing backlight effect.",
			props: [
				{
					name: "children",
					type: "Snippet",
					default: "undefined",
					description: "The content rendered inside the backlight wrapper.",
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description: "Custom classes applied to the outer wrapper element.",
				},
				{
					name: "blur",
					type: "number",
					default: "10",
					description: "Controls the blur intensity used by the SVG filter.",
				},
			],
		},
	],
	installBlock,
};
