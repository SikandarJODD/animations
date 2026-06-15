import IconCloudRaw from "$lib/components/magic/icon-cloud/icon-cloud.svelte?raw";
import IndexTs from "$lib/components/magic/icon-cloud/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

import Images from "./examples/images.svelte";
import ImagesCode from "./examples/images.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "icon-cloud",
	title: "Icon Cloud",
	description: "An interactive 3D tag cloud component.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [
	{
		name: "Images",
		description: "Icon cloud using images from Simple Icons CDN.",
		preview: Images,
		code: { filename: "images.svelte", filecode: ImagesCode, lang: "svelte" },
	},
];

const seo: SEO = {
	title: "Icon Cloud",
	description:
		"Learn how to create Icon Cloud effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Icon Cloud", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{
			filename: "icon-cloud.svelte",
			filecode: IconCloudRaw,
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
            └── icon-cloud/
                ├── icon-cloud.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "icon-cloud.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "IconCloud",
			desc: "A component for Icon Cloud.",
			props: [
				{
					name: "icons",
					type: "Component[]",
					default: "[]",
				},

				{
					name: "images",
					type: "string[]",
					default: "[]",
					description: "Array of image URLs to display in the cloud.",
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
			],
		},
	],
	installBlock,
};
