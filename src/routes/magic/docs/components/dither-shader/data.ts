import DitherShaderRaw from "$lib/components/magic/dither-shader/dither-shader.svelte?raw";
import IndexTs from "$lib/components/magic/dither-shader/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import DitherShaderExample from "./examples/dither-shader-example.svelte";
import DitherShaderExampleRaw from "./examples/dither-shader-example.svelte?raw";
import DitherSharerDemoDuotone from "./examples/dither-sharer-demo-duotone.svelte";
import DitherSharerDemoDuotoneRaw from "./examples/dither-sharer-demo-duotone.svelte?raw";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "dither-shader",
	title: "Dither Shader",
	description:
		"A real-time ordered dithering effect for images, perfect for pixel art and retro aesthetics.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [
	{
		name: "Dither Shader Demo Simple",
		description: "An example showcasing the Dither Shader component in action.",
		code: {
			filename: "dither-shader-example.svelte",
			filecode: DitherShaderExampleRaw,
			lang: "svelte",
			highlight: [2],
		},
		preview: DitherShaderExample,
	},
	{
		name: "Dither Shader Demo Duotone",
		code: {
			filename: "dither-shader-duotone.svelte",
			filecode: DitherSharerDemoDuotoneRaw,
			lang: "svelte",
			highlight: [2],
		},
		preview: DitherSharerDemoDuotone,
	},
];

const seo: SEO = {
	title: "Dither Shader",
	description:
		"Learn how to create Dither Shader effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Dither Shader", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{
			filename: "dither-shader.svelte",
			filecode: DitherShaderRaw,
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
            └── dither-shader/
                ├── dither-shader.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "dither-shader.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "DitherShader",
			desc: "A component for Dither Shader.",
			props: [
				{
					name: "src",
					type: "string",
					default: "",
					description: "Source image URL (required).",
				},
				{
					name: "gridSize",
					type: "number",
					default: "4",
					description: "Size of the dithering grid cells.",
				},
				{
					name: "ditherMode",
					type: '"bayer" | "halftone" | "noise" | "crosshatch"',
					default: '"bayer"',
					description: "Type of dithering pattern to use.",
				},
				{
					name: "colorMode",
					type: '"original" | "grayscale" | "duotone" | "custom"',
					default: '"original"',
					description: "Color processing mode for the output.",
				},
				{
					name: "invert",
					type: "boolean",
					default: "false",
					description: "Invert the dithered output colors.",
				},
				{
					name: "pixelRatio",
					type: "number",
					default: "1",
					description:
						"Pixelation multiplier (1 = no pixelation, higher = more pixelated).",
				},
				{
					name: "primaryColor",
					type: "string",
					default: '"#000000"',
					description: "Primary color for duotone mode.",
				},
				{
					name: "secondaryColor",
					type: "string",
					default: '"#ffffff"',
					description: "Secondary color for duotone mode.",
				},
				{
					name: "customPalette",
					type: "string[]",
					default: '["#000000", "#ffffff"]',
					description: "Custom color palette array for custom mode.",
				},
				{
					name: "brightness",
					type: "number",
					default: "0",
					description: "Brightness adjustment (-1 to 1).",
				},
				{
					name: "contrast",
					type: "number",
					default: "1",
					description: "Contrast adjustment (0 to 2, 1 = normal).",
				},
				{
					name: "backgroundColor",
					type: "string",
					default: '"transparent"',
					description: "Background color behind the dithered image.",
				},
				{
					name: "objectFit",
					type: '"cover" | "contain" | "fill" | "none"',
					default: '"cover"',
					description: "Object fit behavior for the source image.",
				},
				{
					name: "threshold",
					type: "number",
					default: "0.5",
					description: "Threshold bias for dithering (0 to 1).",
				},
				{
					name: "animated",
					type: "boolean",
					default: "false",
					description: "Enable animation effect.",
				},
				{
					name: "animationSpeed",
					type: "number",
					default: "0.02",
					description: "Animation speed (lower = slower).",
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description:
						"Additional CSS classes for the container (use this to set size via Tailwind).",
				},
			],
		},
	],
	installBlock,
};
