import WarpBackgroundRaw from "$lib/components/magic/warp-background/warp-background.svelte?raw";
import IndexTs from "$lib/components/magic/warp-background/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "warp-background",
	title: "Warp Background",
	description: "A description for Warp Background component.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [];

const seo: SEO = {
	title: "Warp Background",
	description:
		"Learn how to create Warp Background effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Warp Background", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "warp-background.svelte",
			filecode: WarpBackgroundRaw,
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
            └── warp-background/
                ├── warp-background.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "warp-background.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "WarpBackground",
			desc: "A component for Warp Background.",
			props: [
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
				{
					name: "perspective",
					type: "number",
					default: "100",
					description: "Perspective value for the 3D effect",
				},
				{
					name: "beamsPerSide",
					type: "number",
					default: "3",
					description: "Number of beams per side",
				},
				{
					name: "beamSize",
					type: "number",
					default: "5",
					description: "Size of each beam",
				},
				{
					name: "beamDelayMax",
					type: "number",
					default: "3",
					description: "Maximum delay for each beam",
				},
				{
					name: "beamDelayMin",
					type: "number",
					default: "0",
					description: "Minimum delay for each beam",
				},
				{
					name: "beamDuration",
					type: "number",
					default: "3",
					description: "Duration of each beam animation",
				},
				{
					name: "gridColor",
					type: "string",
					default: '"var(--border)"',
					description: "Color of the grid",
				},
				{
					name: "children",
					type: "Snippet",
					default: "required",
					description: "The content to wrap",
				},
			],
		},
	],
	installBlock,
};
