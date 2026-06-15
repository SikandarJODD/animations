import Raw from "$lib/components/magic/grid-pattern/grid-pattern.svelte?raw";
import IndexTs from "$lib/components/magic/grid-pattern/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "grid-pattern",
	title: "Grid Pattern",
	description: "A background grid pattern made with SVGs, fully customizable using Tailwind CSS.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [];

const seo: SEO = {
	title: "Grid Pattern",
	description:
		"Learn how to create grid pattern effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Grid Pattern", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{
			filename: "grid-pattern.svelte",
			filecode: Raw,
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
			└── grid-pattern/
				├── grid-pattern.svelte
				└── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "grid-pattern.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "GridPatternProps",
			desc: "Props for the GridPattern component",
			props: [
				{
					name: "width",
					type: "number",
					default: "40",
					description: "The width of each grid cell",
				},
				{
					name: "height",
					type: "number",
					default: "40",
					description: "The height of each grid cell",
				},
				{
					name: "x",
					type: "number",
					default: "-1",
					description: "The x-offset of the pattern",
				},
				{
					name: "y",
					type: "number",
					default: "-1",
					description: "The y-offset of the pattern",
				},
				{
					name: "squares",
					type: "Array<[x: number, y: number]>",
					default: "undefined",
					description: "Array of [x, y] coordinates for highlighted squares",
				},
				{
					name: "strokeDasharray",
					type: "string",
					default: '"0"',
					description: "Stroke dash array for dashed lines",
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description: "Additional CSS classes",
				},
			],
		},
	],
	installBlock,
};
