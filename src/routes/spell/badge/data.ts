import BadgeRaw from "$lib/components/spell/badge/badge.svelte?raw";
import IndexTsRaw from "$lib/components/spell/badge/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import ColorBadgesExample from "./examples/color-badges-example.svelte";
import ColorBadgesExampleRaw from "./examples/color-badges-example.svelte?raw";
import BadgesSizeExample from "./examples/badges-size-example.svelte";
import BadgesSizeExampleRaw from "./examples/badges-size-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "badge",
	title: "Badge",
	description: "A badge component with multiple color variants and sizes.",
	category: "spell",
};

const seo: SEO = {
	title: "Badge",
	description:
		"Learn how to use the Badge spell component in Svelte, including color variants, compact sizing, and optional anchor rendering.",
	keywords: ["Svelte", "Badge", "Spell", "Svelte Animations", "Status Tag", "tailwind-variants"],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "badge.svelte",
			filecode: BadgeRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTsRaw,
			lang: "typescript",
		},
	],
	packages: ["tailwind-variants"],
	folderStructure: `src/
└── lib/
    └── components/
        └── spell/
            └── badge/
                ├── badge.svelte
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
	examples: [
		{
			name: "Color",
			preview: ColorBadgesExample,
			code: {
				filename: "color-badges-example.svelte",
				filecode: ColorBadgesExampleRaw,
				lang: "svelte",
			},
		},
		{
			name: "Sizes",
			preview: BadgesSizeExample,
			code: {
				filename: "badges-size-example.svelte",
				filecode: BadgesSizeExampleRaw,
				lang: "svelte",
				hideLines: true,
				highlight: [2],
			},
		},
	],
	seo,
	props: [
		{
			props: [
				{
					name: "children",
					type: "Snippet",
					required: true,
					description: "The content of the badge.",
				},
				{
					name: "href",
					type: "string | undefined",
					default: "undefined",
					description: "When provided, renders the badge as an anchor element with this href.",
				},
				{
					name: "variant",
					type: '"default" | "secondary" | "outline" | "destructive" | "red" | "blue" | "green" | "yellow" | "purple" | "pink" | "orange" | "cyan" | "indigo" | "violet" | "rose" | "amber" | "lime" | "emerald" | "sky" | "slate" | "fuchsia"',
					default: '"default"',
					description: "Color variant of the badge.",
				},
				{
					name: "size",
					type: '"default" | "sm"',
					default: '"default"',
					description: "Size variant of the badge.",
				},
				{
					name: "class",
					type: "string | undefined",
					default: "undefined",
					description: "Additional CSS classes to apply.",
				},
			],
		},
	],
};
