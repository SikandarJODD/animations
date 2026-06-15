import RippleRaw from "$lib/components/magic/ripple/ripple.svelte?raw";
import IndexTs from "$lib/components/magic/ripple/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "ripple",
	title: "Ripple",
	description: "An animated ripple effect typically used behind elements to emphasize them.",
	category: "animation",
	badge: "new",
};

const seo: SEO = {
	title: "Ripple",
	description:
		"Learn how to create Ripple effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Ripple", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{
			filename: "ripple.svelte",
			filecode: RippleRaw,
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
		filecode: `@theme inline {
  --animate-ripple: ripple var(--duration, 2s) ease calc(var(--i, 0) * 0.2s)
    infinite;

  @keyframes ripple {
    0%,
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      transform: translate(-50%, -50%) scale(0.9);
    }
  }
}`,
		highlight: [2, [4, 14]],
	},
	folderStructure: `src/
└── lib/
    └── components/
        └── magic/
            └── ripple/
                ├── ripple.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "ripple.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	seo,
	props: [
		{
			name: "Ripple",
			desc: "A component for Ripple.",
			props: [
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
				{
					name: "mainCircleSize",
					type: "number",
					default: "210",
					description: "The size of the main circle",
				},
				{
					name: "mainCircleOpacity",
					type: "number",
					default: "0.24",
					description: "The opacity of the main circle",
				},
				{
					name: "numCircles",
					type: "number",
					default: "8",
					description: "The number of ripple circles",
				},
			],
		},
	],
	installBlock,
};
