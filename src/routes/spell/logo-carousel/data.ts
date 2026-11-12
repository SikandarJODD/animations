import LogoCarouselRaw from "#lib/components/spell/logo-carousel/logo-carousel.svelte?raw";
import IndexTsRaw from "#lib/components/spell/logo-carousel/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "#lib/types/structure.js";
import type { SEO } from "#lib/types/seo.js";
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
	usage: {
		code: {
			filename: "usage.svelte",
			filecode: `<script lang="ts">
	import { LogoCarousel } from "#lib/components/spell/logo-carousel/index.js";
</script>

<LogoCarousel items={["Svelte", "Vite", "SvelteKit"]}>
	{#snippet children(name)}
		<span>{name}</span>
	{/snippet}
</LogoCarousel>`,
			lang: "svelte",
		},
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
				},
				{
					name: "children",
					type: "Snippet<[T, number]>",
					required: true,
				},
				{
					name: "stagger",
					type: "number",
					default: "0.14",
				},
				{
					name: "count",
					type: "number",
					default: "",
				},
				{
					name: "duration",
					type: "number",
					default: "600",
					description:
						"Controls the enter and exit animation duration for each item in milliseconds.",
				},
				{
					name: "interval",
					type: "number",
					default: "2500",
				},
				{
					name: "initialDelay",
					type: "number",
					default: "500",
				},
				{
					name: "class",
					type: "ClassValue",
					default: "''",
				},
			],
		},
	],
};
