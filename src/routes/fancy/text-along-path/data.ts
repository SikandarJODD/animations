import IndexTsRaw from "$lib/components/fancy/text-along-path/index.ts?raw";
import TextAlongPathRaw from "$lib/components/fancy/text-along-path/text-along-path.svelte?raw";
import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import AutoExample from "./examples/auto-example.svelte";
import AutoExampleRaw from "./examples/auto-example.svelte?raw";
import ClosedPathExample from "./examples/closed-path-example.svelte";
import ClosedPathExampleRaw from "./examples/closed-path-example.svelte?raw";
import Preview from "./examples/preview.svelte";
import PreviewRaw from "./examples/preview.svelte?raw";
import ScrollDrivenExample from "./examples/scroll-driven-example.svelte";
import ScrollDrivenExampleRaw from "./examples/scroll-driven-example.svelte?raw";
import { FANCY_OG_IMAGES, FANCY_TITLE_TEMPLATE } from "../seo";

export const meta: ComponentMeta = {
	id: "text-along-path",
	title: "Text Along Path",
	description: "Render animated text that loops or tracks scroll progress along any SVG path.",
	category: "fancy",
	badge: "new",
};

const seo: SEO = {
	title: "Text Along Path",
	description:
		"Learn how to use the Text Along Path Fancy component in Svelte to animate SVG text along a custom path.",
	titleTemplate: FANCY_TITLE_TEMPLATE,
	images: FANCY_OG_IMAGES,
	keywords: [
		"Text Along Path",
		"Svelte Fancy Components",
		"Fancy Components",
		"Svelte 5",
		"Motion SV",
		"SVG Text Animation",
		"Path Animation",
		"Scroll Text",
	],
};

const installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "text-along-path.svelte",
			filecode: TextAlongPathRaw,
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
            └── text-along-path/
                ├── text-along-path.svelte
                └── index.ts`,
};

let examples: Example[] = [
	{
		name: "Auto Animation",
		preview: AutoExample,
		previewClass: "p-0",
		code: {
			filename: "auto-example.svelte",
			lang: "svelte",
			filecode: AutoExampleRaw,
			isExpand: true,
		},
	},
	{
		name: "Animation on closed path",
		preview: ClosedPathExample,
		code: {
			filename: "closed-path-example.svelte",
			filecode: ClosedPathExampleRaw,
			lang: "svelte",
			isExpand: true,
		},
	},
	{
		name: "Scroll-driven animation",
		previewClass: "p-1",
		preview: ScrollDrivenExample,
		code: {
			filename: "scroll-driven-example.svelte",
			lang: "svelte",
			filecode: ScrollDrivenExampleRaw,
			isExpand: true,
		},
	},
];
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
	examples,
};
