import IndexTsRaw from "$lib/components/magic/noise-texture/index.ts?raw";
import NoiseTextureSvelteRaw from "$lib/components/magic/noise-texture/noise-texture.svelte?raw";

import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import type { Example } from "$lib/types/examples";
import NewsletterExample from "./examples/newsletter-example.svelte";
import NewsletterExampleRaw from "./examples/newsletter-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "noise-texture",
	title: "Noise Texture",
	description: "An SVG fractal noise layer using feTurbulence for subtle texture overlays.",
	category: "magic",
};

const seo: SEO = {
	title: "Noise Texture",
	description: "An SVG fractal noise layer using feTurbulence for subtle texture overlays.",
	keywords: ["Svelte", "Noise Texture", "Magic"],
	titleTemplate: "%s | Svelte Magic UI",
};

const installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{ filename: "index.ts", filecode: IndexTsRaw, lang: "typescript", isExpand: true, },
		{ filename: "noise-texture.svelte", filecode: NoiseTextureSvelteRaw, lang: "svelte", }
	],
	folderStructure: ''
};

const examples: Example[] = [
	{
		name: "Newsletter Example",
		preview: NewsletterExample,
		code: {
			filename: "newsletter-example.svelte",
			filecode: NewsletterExampleRaw,
			lang: "svelte",
			highlight: [11]
		}
	}
]

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
	examples,
	seo,
	props: [
		{
			name: "NoiseTexture",
			desc: "An SVG overlay that renders grayscale fractal noise using an internal filter.",
			props: [
				{
					name: "frequency",
					type: "number",
					default: "0.4",
					description: "Base turbulence frequency; higher values produce finer grain.",
				},
				{
					name: "octaves",
					type: "number",
					default: "6",
					description: "Number of turbulence octaves used to add smaller-scale detail.",
				},
				{
					name: "slope",
					type: "number",
					default: "0.15",
					description: "Linear channel slope applied after desaturation to control contrast.",
				},
				{
					name: "noiseOpacity",
					type: "number",
					default: "0.6",
					description: "Opacity of the filtered rect that displays the noise texture.",
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional classes applied to the root SVG element.",
				},
			],
		},
	],
};
