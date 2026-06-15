import NeonGradientCardRaw from "$lib/components/magic/neon-gradient-card/neon-gradient-card.svelte?raw";
import IndexTs from "$lib/components/magic/neon-gradient-card/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "neon-gradient-card",
	title: "Neon Gradient Card",
	description: "A beautiful neon card effect",
	category: "animation",
	badge: "new",
};

const seo: SEO = {
	title: "Neon Gradient Card",
	description:
		"Learn how to create Neon Gradient Card effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Neon Gradient Card", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{
			filename: "neon-gradient-card.svelte",
			filecode: NeonGradientCardRaw,
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
		filename: "/src/routes/layout.css",
		filecode: `@theme inline {
  --animate-background-position-spin: background-position-spin 3000ms infinite
    alternate;

  @keyframes background-position-spin {
    0% {
      background-position: top center;
    }
    100% {
      background-position: bottom center;
    }
  }
}`,
		lang: "css",
		highlight: [2, [4, 14]],
	},
	folderStructure: `src/
└── lib/
    └── components/
        └── magic/
            └── neon-gradient-card/
                ├── neon-gradient-card.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "neon-gradient-card.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	seo,
	props: [
		{
			name: "NeonGradientCard",
			desc: "A component for Neon Gradient Card.",
			props: [
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
				{
					name: "borderSize",
					type: "number",
					default: "2",
					description: "Size of the border",
				},
				{
					name: "borderRadius",
					type: "number",
					default: "20",
					description: "Radius of the border",
				},
				{
					name: "neonColors",
					type: "NeonColorsProps",
					default: '{ firstColor: "#ff00aa", secondColor: "#00FFF1" }',
					description: "Colors of the neon effect",
				},
				{
					name: "children",
					type: "Snippet",
					default: "required",
					description: "The content to display inside the card",
				},
			],
		},
	],
	installBlock,
};
