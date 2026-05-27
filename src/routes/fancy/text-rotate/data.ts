import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import IndexTsRaw from "$lib/components/fancy/text-rotate/index.ts?raw";
import TextRotateRaw from "$lib/components/fancy/text-rotate/text-rotate.svelte?raw";
import Preview from "./examples/preview.svelte";
import PreviewRaw from "./examples/preview.svelte?raw";
import { FANCY_OG_IMAGES, FANCY_TITLE_TEMPLATE } from "../seo";

export const meta: ComponentMeta = {
	id: "text-rotate",
	title: "Text Rotate",
	description:
		"Rotate through multiple text strings with per-character, per-word, or per-line motion and imperative controls.",
	category: "fancy",
	badge: "new",
};

const seo: SEO = {
	title: "Text Rotate",
	description:
		"Learn how to use the Text Rotate Fancy component in Svelte for staggered rotating text, layout-aware swaps, and imperative navigation.",
	titleTemplate: FANCY_TITLE_TEMPLATE,
	images: FANCY_OG_IMAGES,
	keywords: [
		"Text Rotate",
		"Svelte Fancy Components",
		"Fancy Components",
		"Svelte 5",
		"Motion SV",
		"Rotating Text",
		"Text Carousel",
		"Staggered Text",
	],
};

const installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "text-rotate.svelte",
			filecode: TextRotateRaw,
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
â””â”€â”€ lib/
    â””â”€â”€ components/
        â””â”€â”€ fancy/
            â””â”€â”€ text-rotate/
                â”œâ”€â”€ text-rotate.svelte
                â””â”€â”€ index.ts`,
};

const examples: Example[] = [];

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
					name: "texts",
					type: "string[]",
					required: true,
					description: "Array of strings rotated through by the component.",
				},
				{
					name: "as",
					type: "keyof SvelteHTMLElements",
					default: '"p"',
					description: "HTML element used for the animated text wrapper.",
				},
				{
					name: "rotationInterval",
					type: "number",
					default: "2000",
					description: "Delay in milliseconds between automatic text changes.",
				},
				{
					name: "auto",
					type: "boolean",
					default: "true",
					description: "Whether the component should rotate automatically on an interval.",
				},
				{
					name: "loop",
					type: "boolean",
					default: "true",
					description: "Whether rotation wraps back to the first string after the last.",
				},
				{
					name: "splitBy",
					type: '"characters" | "words" | "lines" | string',
					default: '"characters"',
					description: "Controls how each text string is segmented before animation.",
				},
				{
					name: "staggerDuration",
					type: "number",
					default: "0",
					description: "Delay added between animated segments.",
				},
				{
					name: "staggerFrom",
					type: '"first" | "last" | "center" | "random" | number',
					default: '"first"',
					description: "Starting point used when calculating stagger delays.",
				},
				{
					name: "transition",
					type: "Transition",
					default: '{ type: "spring", damping: 25, stiffness: 300 }',
					description: "Motion transition shared by the layout wrapper and text segments.",
				},
				{
					name: "animatePresenceMode",
					type: '"sync" | "wait" | "popLayout"',
					default: '"wait"',
					description: "AnimatePresence mode used when swapping from one text string to the next.",
				},
				{
					name: "animatePresenceInitial",
					type: "boolean",
					default: "false",
					description: "Whether the first render should run the enter animation.",
				},
				{
					name: "onNext",
					type: "(index: number) => void",
					default: "undefined",
					description: "Callback invoked after the component rotates to a new text index.",
				},
				{
					name: "mainClassName",
					type: "string",
					default: "undefined",
					description: "Classes merged onto the root animated wrapper.",
				},
				{
					name: "splitLevelClassName",
					type: "string",
					default: "undefined",
					description: "Classes applied to each word or segment wrapper.",
				},
				{
					name: "elementLevelClassName",
					type: "string",
					default: "undefined",
					description: "Classes applied around each animated character or segment.",
				},
			],
		},
	],
};
