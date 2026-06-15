import ShineBorderRaw from "$lib/components/magic/shine-border/shine-border.svelte?raw";
import IndexTs from "$lib/components/magic/shine-border/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

import ShineBorderMonotone from "./examples/shine-border-monotone.svelte";
import ShineBorderMonotoneRaw from "./examples/shine-border-monotone.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "shine-border",
	title: "ShineBorder",
	description: "A description for ShineBorder component.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [
	{
		name: "Monotone",
		preview: ShineBorderMonotone,
		code: {
			filename: "shine-border-monotone.svelte",
			filecode: ShineBorderMonotoneRaw,
			lang: "svelte",
			isExpand: true,
			highlight: [2, 6],
		},
	},
];

const seo: SEO = {
	title: "ShineBorder",
	description: "Shine border is an animated background border effect.",
	keywords: ["Svelte", "ShineBorder", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{
			filename: "shine-border.svelte",
			filecode: ShineBorderRaw,
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
            └── shine-border/
                ├── shine-border.svelte
                └── index.ts`,
	tailwind: {
		filename: "src/routes/layout.css",
		lang: "css",
		filecode: `@theme inline {
  --animate-shine: shine var(--duration) infinite linear;

  @keyframes shine {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    to {
      background-position: 0% 0%;
    }
  }
}`,
		highlight: [2, [4, 14]],
	},
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "shine-border.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "ShineBorder",
			desc: "A component for ShineBorder.",
			props: [
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
				{
					name: "borderWidth",
					type: "number",
					default: "2",
					description: "Width of the border",
				},
				{
					name: "duration",
					type: "number",
					default: "300",
					description: "Duration of the shine animation in milliseconds",
				},
				{
					name: "shineColor",
					type: "string | string[]",
					default: '""',
					description: "Color(s) of the shine effect",
				},
			],
		},
	],
	installBlock,
};
