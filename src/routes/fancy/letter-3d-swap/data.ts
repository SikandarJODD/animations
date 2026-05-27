import CharBoxRaw from "$lib/components/fancy/letter-3d-swap/charbox.svelte?raw";
import IndexTsRaw from "$lib/components/fancy/letter-3d-swap/index.ts?raw";
import Letter3dSwapRaw from "$lib/components/fancy/letter-3d-swap/letter-3d-swap.svelte?raw";
import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import PositionExample from "./examples/position-example.svelte";
import PositionExampleRaw from "./examples/position-example.svelte?raw";
import Preview from "./examples/preview.svelte";
import PreviewRaw from "./examples/preview.svelte?raw";
import RotationExample from "./examples/rotation-example.svelte";
import RotationExampleRaw from "./examples/rotation-example.svelte?raw";
import { FANCY_OG_IMAGES, FANCY_TITLE_TEMPLATE } from "../seo";

export const meta: ComponentMeta = {
	id: "letter-3d-swap",
	title: "Letter 3D Swap",
	description: "A text component that swap the letters in a text with a box 3D effect.",
	category: "fancy",
	badge: "new",
};

let examples: Example[] = [
	{
		name: "Position Example",
		preview: PositionExample,
		code: {
			filename: "position-example.svelte",
			filecode: PositionExampleRaw,
			lang: "svelte",
		},
		previewClass: "p-0",
	},
	{
		name: "Rotation Example",
		preview: RotationExample,
		code: {
			filename: "rotation-example.svelte",
			filecode: RotationExampleRaw,
			lang: "svelte",
		},
		previewClass: "p-0",
	},
];

const seo: SEO = {
	title: "Letter 3D Swap",
	description:
		"Learn how to use the Letter 3D Swap Fancy component in Svelte for 3D character flips with configurable stagger and rotation direction.",
	titleTemplate: FANCY_TITLE_TEMPLATE,
	images: FANCY_OG_IMAGES,
	keywords: [
		"Letter 3D Swap",
		"Svelte Fancy Components",
		"Fancy Components",
		"Svelte 5",
		"Motion SV",
		"3D Text Animation",
		"Character Flip",
		"Hover Text Effect",
	],
};

const installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "letter-3d-swap.svelte",
			filecode: Letter3dSwapRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "charbox.svelte",
			filecode: CharBoxRaw,
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
        └── fancy/
            └── letter-3d-swap/
                ├── letter-3d-swap.svelte
				├── charbox.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	seo,
	installBlock,
	preview: Preview,
	previewCode: {
		filename: "preview.svelte",
		filecode: PreviewRaw,
		lang: "svelte",
		highlight: [[14, 24]],
	},
	previewClass: "p-0",
	examples,
};
