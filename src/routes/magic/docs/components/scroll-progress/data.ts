import ScrollProgressRaw from "$lib/components/magic/scroll-progress/scroll-progress.svelte?raw";
import IndexTs from "$lib/components/magic/scroll-progress/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "scroll-progress",
	title: "Scroll Progress",
	description: "A description for Scroll Progress component.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [];

const seo: SEO = {
	title: "Scroll Progress",
	description:
		"Learn how to create Scroll Progress effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Scroll Progress", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "scroll-progress.svelte",
			filecode: ScrollProgressRaw,
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
            └── scroll-progress/
                ├── scroll-progress.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "scroll-progress.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "ScrollProgress",
			desc: "A component for Scroll Progress.",
			props: [
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
			],
		},
	],
	installBlock,
};
