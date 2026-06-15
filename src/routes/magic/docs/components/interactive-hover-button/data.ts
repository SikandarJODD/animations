import InteractiveHoverButtonRaw from "$lib/components/magic/interactive-hover-button/interactive-hover-button.svelte?raw";
import IndexTs from "$lib/components/magic/interactive-hover-button/index.ts?raw";

import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "interactive-hover-button",
	title: "Interactive Hover Button",
	description:
		"A visually engaging button component that responds to hover with dynamic transitions, adapting smoothly between light and dark modes for enhanced user interactivity.",
	category: "animation",
	badge: "new",
};

const seo: SEO = {
	title: "Interactive Hover Button",
	description:
		"Learn how to create Interactive Hover Button effects in Svelte using the Svelte 5 Animations library.",
	keywords: [
		"Svelte",
		"Interactive Hover Button",
		"Svelte 5 Animations",
		"Animation",
		"Web Design",
	],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: ["@lucide/svelte"],
	installCode: [
		{
			filename: "interactive-hover-button.svelte",
			filecode: InteractiveHoverButtonRaw,
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
            └── interactive-hover-button/
                ├── interactive-hover-button.svelte
                └── index.ts`,
};

/*
	interface InteractiveHoverButtonProps extends HTMLButtonAttributes {
		children: Snippet;
		class?: string;
	}
 */

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "interactive-hover-button.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	seo,
	props: [
		{
			name: "InteractiveHoverButton",
			desc: "A component for Interactive Hover Button.",
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
					default: "required",
					description: "The content to display inside the button",
				},
			],
		},
	],
	installBlock,
};
