import Raw from "$lib/components/magic/avatar-circles/avatar-circles.svelte?raw";
import IndexTs from "$lib/components/magic/avatar-circles/index.ts?raw";

import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "avatar-circles",
	title: "Avatar Circles",
	description:
		"A component displaying user avatars in a stacked, overlapping circle layout with an optional count badge.",
	category: "animation",
	badge: "new",
};

const seo: SEO = {
	title: "Avatar Circles",
	description:
		"Learn how to create stacked avatar circles in Svelte using the Svelte 5 Animations library.",
	keywords: [
		"Svelte",
		"Avatar Circles",
		"Svelte 5 Animations",
		"Avatar Stack",
		"Web Design",
		"User Avatars",
	],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{
			filename: "avatar-circles.svelte",
			filecode: Raw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTs,
			lang: "typescript",
		},
	],
	folderStructure: `src
└── lib
    └── components
        └── magic-ui
            └── avatar-circles
                ├── avatar-circles.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "avatar-circles.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	seo,
	props: [
		{
			name: "AvatarCircles",
			desc: "A component that displays user avatars in a stacked, overlapping circle layout.",
			props: [
				{
					name: "avatarUrls",
					type: "Avatar[]",
					default: "required",
					description: "Array of avatar objects with imageUrl and profileUrl properties",
				},
				{
					name: "numPeople",
					type: "number",
					default: "undefined",
					description: "Optional number to display in the count badge (e.g., +99)",
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
