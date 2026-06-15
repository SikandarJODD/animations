import ProgressiveBlurRaw from "$lib/components/magic/progressive-blur/progressive-blur.svelte?raw";
import IndexTs from "$lib/components/magic/progressive-blur/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "progressive-blur",
	title: "Progressive Blur",
	description:
		"A component that creates a progressive blur effect at the top, bottom, or both edges of a container with customizable blur levels and positioning.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [];

const seo: SEO = {
	title: "Progressive Blur",
	description:
		"A component that creates a progressive blur effect at the top, bottom, or both edges of a container with customizable blur levels and positioning in Svelte 5.",
	keywords: [
		"Svelte",
		"Progressive Blur",
		"Svelte 5 Animations",
		"Blur Effect",
		"Backdrop Filter",
		"Web Design",
	],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{
			filename: "progressive-blur.svelte",
			filecode: ProgressiveBlurRaw,
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
            └── progressive-blur/
                ├── progressive-blur.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "progressive-blur.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "ProgressiveBlur",
			desc: "A component that creates a progressive blur effect with customizable positioning and blur levels.",
			props: [
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
				{
					name: "height",
					type: "string",
					default: '"30%"',
					description: "Height of the blur area",
				},
				{
					name: "position",
					type: '"top" | "bottom" | "both"',
					default: '"bottom"',
					description: "Position of the blur effect",
				},
				{
					name: "blurLevels",
					type: "number[]",
					default: "[0.5, 1, 2, 4, 8, 16, 32, 64]",
					description: "Array of blur levels in pixels for progressive blur layers",
				},
			],
		},
	],
	installBlock,
};
