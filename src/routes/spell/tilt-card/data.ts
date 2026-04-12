import TiltCardRaw from "$lib/components/spell/tilt-card/tilt-card.svelte?raw";
import IndexTsRaw from "$lib/components/spell/tilt-card/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "tilt-card",
	title: "Tilt Card",
	description: "A 3D tilt card with pointer-tracking rotation and an optional spotlight effect.",
	category: "spell",
};

const seo: SEO = {
	title: "Tilt Card",
	description:
		"Learn how to use the Tilt Card spell component in Svelte, including tilt direction, scale, and spotlight customization.",
	keywords: [
		"Svelte Spell UI",
		"Tilt Card",
		"Svelte Spell",
		"Svelte Animations",
		"3D Tilt",
		"Hover Effect",
	],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "tilt-card.svelte",
			filecode: TiltCardRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTsRaw,
			lang: "typescript",
		},
	],
	folderStructure: `src/
└── lib/
    └── components/
        └── spell/
            └── tilt-card/
                ├── tilt-card.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "preview.svelte",
		filecode: PreviewCodeRaw,
		lang: "svelte",
		hideLines: true,
	},
	installBlock,
	examples: [],
	seo,
	props: [
		{
			props: [
				{
					name: "tiltLimit",
					type: "number",
					default: "15",
					description: "Maximum tilt angle in degrees.",
				},
				{
					name: "scale",
					type: "number",
					default: "1.05",
					description: "Scale factor applied on hover.",
				},
				{
					name: "perspective",
					type: "number",
					default: "1200",
					description: "Perspective distance in pixels for the 3D transform.",
				},
				{
					name: "effect",
					type: '"gravitate" | "evade"',
					default: '"evade"',
					description:
						'"gravitate" tilts toward the cursor; "evade" tilts away from it.',
				},
				{
					name: "spotlight",
					type: "boolean",
					default: "true",
					description: "Shows a radial gradient spotlight that follows the cursor.",
				},
				{
					name: "class",
					type: "string",
					default: "''",
					description: "Additional classes forwarded to the card element.",
				},
				{
					name: "style",
					type: "string",
					default: "''",
					description: "Inline styles forwarded to the card element.",
				},
			],
		},
	],
};
