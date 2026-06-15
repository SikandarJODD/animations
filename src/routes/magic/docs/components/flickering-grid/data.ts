import Raw from "$lib/components/magic/flickering-grid/flickering-grid.svelte?raw";
import IndexTs from "$lib/components/magic/flickering-grid/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import FlickeringGridBasic from "./examples/flickering-grid-basic.svelte";
import FlickeringGridBasicRaw from "./examples/flickering-grid-basic.svelte?raw";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "flickering-grid",
	title: "Flickering Grid",
	description:
		"A flickering grid background made with SVGs, fully customizable using Tailwind CSS.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [
	{
		name: "Basic Usage",
		description: "A simple flickering grid background.",
		preview: FlickeringGridBasic,
		code: {
			filename: "flickering-grid-basic.svelte",
			filecode: FlickeringGridBasicRaw,
			lang: "svelte",
		},
	},
];

const seo: SEO = {
	title: "Flickering Grid",
	description:
		"A flickering grid background made with SVGs, fully customizable using Tailwind CSS.",
	keywords: ["Svelte", "Flickering Grid", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{
			filename: "flickering-grid.svelte",
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
            └── flickering-grid/
                ├── flickering-grid.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "flickering-grid.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "FlickeringGrid",
			desc: "A component for creating a flickering grid background.",
			props: [
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
				{
					name: "squareSize",
					type: "number",
					default: "4",
					description: "The size of each square in the grid",
				},
				{
					name: "gridGap",
					type: "number",
					default: "6",
					description: "The gap between squares in the grid",
				},
				{
					name: "flickerChance",
					type: "number",
					default: "0.3",
					description: "The chance of each square flickering",
				},
				{
					name: "color",
					type: "string",
					default: "rgb(0, 0, 0)",
					description: "The color of the squares",
				},
				{
					name: "width",
					type: "number",
					default: undefined,
					description: "The width of the grid",
				},
				{
					name: "height",
					type: "number",
					default: undefined,
					description: "The height of the grid",
				},
				{
					name: "maxOpacity",
					type: "number",
					default: "0.3",
					description: "The maximum opacity of the squares",
				},
			],
		},
	],
	installBlock,
};
