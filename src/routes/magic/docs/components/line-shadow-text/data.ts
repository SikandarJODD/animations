import LineShadowTextRaw from "$lib/components/magic/line-shadow-text/line-shadow-text.svelte?raw";
import IndexTs from "$lib/components/magic/line-shadow-text/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "line-shadow-text",
	title: "Line Shadow Text",
	description: "A text component with a moving line shadow.",
	category: "animation",
	badge: "new",
};

const seo: SEO = {
	title: "Line Shadow Text",
	description:
		"Learn how to create Line Shadow Text effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Line Shadow Text", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "line-shadow-text.svelte",
			filecode: LineShadowTextRaw,
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
            └── line-shadow-text/
                ├── line-shadow-text.svelte
                └── index.ts`,
	tailwind: {
		filename: "src/routes/layout.css",
		filecode: `@theme inline {
  --animate-line-shadow: line-shadow 15s linear infinite;

  @keyframes line-shadow {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% -100%;
    }
  }
}`,
		lang: "css",
		highlight: [2, [4, 14]],
	},
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "line-shadow-text.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	seo,
	props: [
		{
			name: "LineShadowText",
			desc: "A component for Line Shadow Text.",
			props: [
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
				{
					name: "shadowColor",
					type: "string",
					default: '"black"',
					description: "Color of the shadow",
				},
				{
					name: "as",
					type: "ElementType",
					default: '"span"',
					description: "HTML element to render as",
				},
				{
					name: "content",
					type: "string",
					default: '""',
					description: "Content of the text",
				},
			],
		},
	],
	installBlock,
};
