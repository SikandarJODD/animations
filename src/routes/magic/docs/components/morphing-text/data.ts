import MorphingTextRaw from "$lib/components/magic/morphing-text/morphing-text.svelte?raw";
import IndexTs from "$lib/components/magic/morphing-text/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "morphing-text",
	title: "Morphing Text",
	description: "A dynamic text morphing component for Magic UI.",
	category: "animation",
	badge: "new",
};

const seo: SEO = {
	title: "Morphing Text",
	description:
		"Learn how to create Morphing Text effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Morphing Text", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{
			filename: "morphing-text.svelte",
			filecode: MorphingTextRaw,
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
            └── morphing-text/
                ├── morphing-text.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "morphing-text.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	seo,
	props: [
		{
			name: "MorphingText",
			desc: "A component for Morphing Text.",
			props: [
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
				{
					name: "texts",
					type: "string[]",
					default: "[]",
					description: "Array of texts to morph through",
				},
			],
		},
	],
	installBlock,
};
