import RainbowButtonRaw from "$lib/components/magic/rainbow-button/rainbow-button.svelte?raw";
import IndexTs from "$lib/components/magic/rainbow-button/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

import RainbowButtonOutline from "./examples/rainbow-button-outline.svelte";
import RainbowButtonOutlineRaw from "./examples/rainbow-button-outline.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "rainbow-button",
	title: "Rainbow Button",
	description: "An animated button with a rainbow effect.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [
	{
		name: "Outline Variant",
		preview: RainbowButtonOutline,
		code: {
			filename: "rainbow-button-outline.svelte",
			filecode: RainbowButtonOutlineRaw,
			lang: "svelte",
		},
	},
];

const seo: SEO = {
	title: "Rainbow Button",
	description:
		"Learn how to create Rainbow Button effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Rainbow Button", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: ["bits-ui", "tailwind-variants"],
	installCode: [
		{
			filename: "rainbow-button.svelte",
			filecode: RainbowButtonRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTs,
			lang: "typescript",
		},
		{
			filename: "src/routes/layout.css",
			filecode: `:root {
  --color-1: 0 100% 63%;
  --color-2: 270 100% 63%;
  --color-3: 210 100% 63%;
  --color-4: 195 100% 63%;
  --color-5: 90 100% 63%;
}`,
			lang: "css",
			highlight: [[2, 6]],
		},
	],
	tailwind: {
		filename: "src/routes/layout.css",
		lang: "css",
		filecode: `@theme inline {
  --animate-rainbow: rainbow var(--speed, 2s) infinite linear;

  @keyframes rainbow {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 200%;
    }
  }
}`,
		highlight: [2, [4, 14]],
	},
	folderStructure: `src/
└── lib/
    └── components/
        └── magic/
            └── rainbow-button/
                ├── rainbow-button.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "rainbow-button.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	installBlock,
};
