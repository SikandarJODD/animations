import IndexTsRaw from "$lib/components/fancy/underline-to-background/index.ts?raw";
import UnderlineToBackgroundRaw from "$lib/components/fancy/underline-to-background/underline-to-background.svelte?raw";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewRaw from "./examples/preview.svelte?raw";
import { FANCY_OG_IMAGES, FANCY_TITLE_TEMPLATE } from "../seo";

export const meta: ComponentMeta = {
	id: "underline-to-background",
	title: "Underline To Background",
	description:
		"Expand an underline into a full background fill while transitioning the text color.",
	category: "fancy",
	badge: "new",
};

const seo: SEO = {
	title: "Underline To Background",
	description:
		"Learn how to use the Underline To Background Fancy component in Svelte for underline-to-fill hover transitions.",
	titleTemplate: FANCY_TITLE_TEMPLATE,
	images: FANCY_OG_IMAGES,
	keywords: [
		"Underline To Background",
		"Svelte Fancy Components",
		"Fancy Components",
		"Svelte 5",
		"Motion SV",
		"Underline Hover Effect",
		"Background Fill",
		"Text Highlight Animation",
	],
};

const installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "underline-to-background.svelte",
			filecode: UnderlineToBackgroundRaw,
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
            +-- underline-to-background/
                |-- underline-to-background.svelte
                +-- index.ts`,
};

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
	props: [
		{
			props: [
				{
					name: "children",
					type: "Snippet",
					default: "undefined",
					description: "Snippet content displayed inside the animated underline/fill treatment.",
				},
				{
					name: "as",
					type: "keyof SvelteHTMLElements",
					default: '"span"',
					description: "HTML element used for the hoverable text wrapper.",
				},
				{
					name: "transition",
					type: "Transition",
					default: '{ type: "spring", damping: 30, stiffness: 300 }',
					description: "Motion transition used for both the underline growth and text-color change.",
				},
				{
					name: "targetTextColor",
					type: "string",
					default: '"#fef"',
					description: "Text color applied while the underline has expanded into the background.",
				},
				{
					name: "underlineHeightRatio",
					type: "number",
					default: "0.1",
					description: "Ratio of the current font size used as the resting underline thickness.",
				},
				{
					name: "underlinePaddingRatio",
					type: "number",
					default: "0.01",
					description: "Ratio of the current font size used to offset the underline below the text baseline.",
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description: "Classes merged onto the motion-enabled wrapper element.",
				},
			],
		},
	],
};
