import BentoGridRaw from "$lib/components/magic/bento-grid/bento-grid.svelte?raw";
import BentoCardRaw from "$lib/components/magic/bento-grid/bento-card.svelte?raw";
import IndexTs from "$lib/components/magic/bento-grid/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

// Example
import BentoGridExample from "./examples/bento-grid-example.svelte";
import BentoGridExampleRaw from "./examples/bento-grid-example.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "bento-grid",
	title: "Bento Grid",
	description:
		"Bento grid is a layout used to showcase the features of a product in a simple and elegant way.",
	category: "animation",
	badge: "new",
};

// const examples: Example[] = [
// 	{
// 		name: "Bento Grid Example",
// 		preview: BentoGridExample,
// 		code: {
// 			filename: "bento-grid-example.svelte",
// 			filecode: BentoGridExampleRaw,
// 			lang: "svelte",
// 			highlight: [2],
// 		},
// 	},
// ];

const seo: SEO = {
	title: "Bento Grid",
	description:
		"Learn how to create Bento Grid effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Bento Grid", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: ["@lucide/svelte"],
	installCode: [
		{
			filename: "bento-grid.svelte",
			filecode: BentoGridRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "bento-card.svelte",
			filecode: BentoCardRaw,
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
            └── bento-grid/
                ├── bento-grid.svelte
				├── bento-card.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "bento-grid.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	seo,
	props: [
		{
			name: "Bento Grid",
			desc: "Bento grid component",
			props: [
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
				{
					name: "children",
					type: "Snippet",
					description: "The content to be displayed inside the grid",
				},
			],
		},
		{
			name: "Bento Card",
			props: [
				{
					name: "name",
					type: "string",
					description: "The name of the card, displayed as the title",
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
				{
					name: "background",
					type: "Snippet",
					description: "The background of the card, can be a color or an image",
				},
				{
					name: "Icon",
					type: "Component<any>",
					description:
						"The icon to be displayed on the card, passed as a Svelte component",
				},
				{
					name: "iconClass",
					type: "string",
					default: '""',
				},
				{
					name: "description",
					type: "string",
					description: "A brief description of the card's content",
				},
				{
					name: "href",
					type: "string",
					description: "The URL to navigate to when the card is clicked",
				},
				{
					name: "cta",
					type: "string",
					description: "The call-to-action text displayed on the card",
				},
			],
		},
	],
	installBlock,
};
