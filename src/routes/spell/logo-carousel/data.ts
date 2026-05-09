import LogoCarouselRaw from "$lib/components/spell/logo-carousel/logo-carousel.svelte?raw";
import IndexTsRaw from "$lib/components/spell/logo-carousel/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "logo-carousel",
	title: "Logo Carousel",
	description:
		"Animated carousel component that cycles through sets of logos with staggered animations.",
	category: "spell",
};

const seo: SEO = {
	title: "Logo Carousel",
	description:
		"Learn how to use the Logo Carousel spell component in Svelte, including grouped rotations, timing controls, and custom logo card rendering.",
	keywords: [
		"Svelte",
		"Logo Carousel",
		"Spell",
		"Svelte Animations",
		"Brand Wall",
		"Partner Logos",
	],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "logo-carousel.svelte",
			filecode: LogoCarouselRaw,
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
            └── logo-carousel/
                ├── logo-carousel.svelte
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
	seo,
	props: [
		{
			props: [
				{
					name: "items",
					type: "T[]",
					required: true,
					description: "Array of items to display in the carousel. Each item is passed to the children snippet.",
				},
				{
					name: "children",
					type: "Snippet<[T, number]>",
					required: true,
					description: "Snippet used to render each item. Receives the item and its index.",
				},
				{
					name: "stagger",
					type: "number",
					default: "0.14",
					description: "Delay in seconds between each item's animation.",
				},
				{
					name: "count",
					type: "number",
					default: "",
					description: "Number of items to display per group. If not specified, all items are shown in a single group.",
				},
				{
					name: "duration",
					type: "number",
					default: "600",
					description: "Controls the enter and exit animation duration for each item in milliseconds.",
				},
				{
					name: "interval",
					type: "number",
					default: "2500",
					description: "Time in milliseconds between carousel transitions.",
				},
				{
					name: "initialDelay",
					type: "number",
					default: "500",
					description: "Initial delay in milliseconds before the first animation starts.",
				},
				{
					name: "class",
					type: "string",
					default: "''",
					description: "Additional CSS classes for the flex container. Use Tailwind gap-* classes to control spacing.",
				},
			],
		},
	],
};
