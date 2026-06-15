import LightRaysRaw from "$lib/components/magic/light-rays/light-rays.svelte?raw";
import IndexTs from "$lib/components/magic/light-rays/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "light-rays",
	title: "Light Rays",
	description: "A component with animated light rays which shine down from above.",
	category: "animation",
	badge: "new",
};

const seo: SEO = {
	title: "Light Rays",
	description:
		"Learn how to create Light Rays effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Light Rays", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "light-rays.svelte",
			filecode: LightRaysRaw,
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
            └── light-rays/
                ├── light-rays.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "light-rays.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	seo,
	props: [
		{
			name: "LightRays",
			desc: "A component for Light Rays.",
			props: [
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
				{
					name: "count",
					type: "number",
					default: "7",
					description: "Number of light rays to render",
				},
				{
					name: "color",
					type: "string",
					default: '"rgba(160, 210, 255, 0.2)"',
					description: "Color of the light rays",
				},
				{
					name: "blur",
					type: "number",
					default: "36",
					description: "Blur of the light rays",
				},
				{
					name: "speed",
					type: "number",
					default: "14",
					description: "Speed of the light rays",
				},
				{
					name: "length",
					type: "string",
					default: '"70vh"',
					description: "Length of the light rays",
				},
				{
					name: "style",
					type: "string",
					default: '""',
					description: "Additional CSS styles to apply",
				},
			],
		},
	],
	installBlock,
};
