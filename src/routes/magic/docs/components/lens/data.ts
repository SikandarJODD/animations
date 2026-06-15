import LensRaw from "$lib/components/magic/lens/lens.svelte?raw";
import IndexTs from "$lib/components/magic/lens/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "lens",
	title: "Lens",
	description:
		"A interactive component that enables zooming into images, videos and other elements.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [];

const seo: SEO = {
	title: "Lens",
	description:
		"Learn how to create Lens effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Lens", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "lens.svelte",
			filecode: LensRaw,
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
            └── lens/
                ├── lens.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: [
		{
			filename: "lens.svelte",
			filecode: PreviewCode,
			lang: "svelte",
			hideLines: true,
			highlight: [2],
		},
	],
	examples,
	seo,
	installBlock,
	props: [
		{
			name: "Lens",
			desc: "A component for Lens.",
			props: [
				{
					name: "children",
					type: "Snippet",
					default: "",
					description: "Content wrapped by the lens (image, video, etc.).",
				},
				{
					name: "zoomFactor",
					type: "number",
					default: "1",
					description: "The zoom factor of the lens.",
				},
				{
					name: "lensSize",
					type: "number",
					default: "100",
					description: "The size of the lens (diameter in pixels).",
				},
				{
					name: "position",
					type: "{ x: number; y: number }",
					default: "{ x: 0, y: 0 }",
					description: "The position of the lens (x and y coordinates).",
				},
				{
					name: "defaultPosition",
					type: "{ x: number; y: number }",
					default: "{ x: 0, y: 0 }",
					description: "The default position of the lens.",
				},
				{
					name: "isStatic",
					type: "boolean",
					default: "false",
					description: "Whether the lens is static (doesn't follow pointer).",
				},
				{
					name: "duration",
					type: "number",
					default: "0.3",
					description: "The duration of the animation (seconds).",
				},
				{
					name: "lensColor",
					type: "string",
					default: '"rgba(255,255,255,0.5)"',
					description: "The color of the lens overlay.",
				},
				{
					name: "ariaLabel",
					type: "string",
					default: '"zoom lens"',
					description: "The aria label of the lens for accessibility.",
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply to lens container.",
				},
			],
		},
	],
};
