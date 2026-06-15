import RetroGridRaw from "$lib/components/magic/retro-grid/retro-grid.svelte?raw";
import IndexTs from "$lib/components/magic/retro-grid/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "retro-grid",
	title: "Retro Grid",
	description: "A description for Retro Grid component.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [];

const seo: SEO = {
	title: "Retro Grid",
	description:
		"Learn how to create Retro Grid effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Retro Grid", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{
			filename: "retro-grid.svelte",
			filecode: RetroGridRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTs,
			lang: "typescript",
		},
	],
	tailwind: {
		filename: "src/routes/layout.css",
		lang: "css",
		highlight: [2, [4, 14]],
		filecode: `@theme inline {
  --animate-grid: grid 15s linear infinite;

  @keyframes grid {
    0% {
      transform: translateY(-50%);
    }
    100% {
      transform: translateY(0);
    }
  }
}`,
	},
	folderStructure: `src/
└── lib/
    └── components/
        └── magic/
            └── retro-grid/
                ├── retro-grid.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "retro-grid.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "RetroGrid",
			desc: "A component for Retro Grid.",
			props: [
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
				{
					name: "angle",
					type: "number",
					default: "65",
					description: "Rotation angle of the grid in degrees",
				},
				{
					name: "cellSize",
					type: "number",
					default: "60",
					description: "Size of each grid cell in pixels",
				},
				{
					name: "opacity",
					type: "number",
					default: "0.5",
					description: "Opacity of the grid lines (0 to 1)",
				},
				{
					name: "lightLineColor",
					type: "string",
					default: '"gray"',
					description: "Color of the light grid lines",
				},
				{
					name: "darkLineColor",
					type: "string",
					default: '"gray"',
					description: "Color of the dark grid lines",
				},
			],
		},
	],
	installBlock,
};
