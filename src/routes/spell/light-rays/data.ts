import LightRaysRaw from "$lib/components/spell/light-rays/light-rays.svelte?raw";
import IndexTsRaw from "$lib/components/spell/light-rays/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import CustomColorsExample from "./examples/custom-colors-example.svelte";
import CustomColorsExampleRaw from "./examples/custom-colors-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "light-rays",
	title: "Light Rays",
	description:
		"A WebGL-powered light rays background effect with customizable colors, intensity, and animation.",
	category: "spell",
};

const seo: SEO = {
	title: "Light Rays",
	description:
		"Add a dynamic WebGL light rays background to your Svelte app. Customize ray count, intensity, reach, color mode, and animation speed.",
	keywords: [
		"Svelte",
		"Light Rays",
		"Spell",
		"Svelte Animations",
		"WebGL",
		"Three.js",
		"GLSL Shader",
	],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "light-rays.svelte",
			filecode: LightRaysRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTsRaw,
			lang: "typescript",
		},
	],
	packages: ["three"],
	folderStructure: `src/
lib/
  components/
    spell/
      light-rays/
        index.ts
        light-rays.svelte`,
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
			name: "Multi Color",
			preview: CustomColorsExample,
			previewClass: "!p-0",
			code: {
				filename: "custom-colors-example.svelte",
				filecode: CustomColorsExampleRaw,
				lang: "svelte",
			},
		},
	],
	seo,
	props: [
		{
			props: [
				{
					name: "intensity",
					type: "number",
					default: "13",
					description: "Controls the brightness/intensity of the light rays (0–100 scale).",
				},
				{
					name: "rays",
					type: "number",
					default: "32",
					description: "Controls the density and animation speed of the rays (0–100 scale).",
				},
				{
					name: "reach",
					type: "number",
					default: "16",
					description: "Controls how far the rays extend across the surface (0–100 scale).",
				},
				{
					name: "position",
					type: "number",
					default: "50",
					description: "Horizontal position of the ray source as a percentage (0–100).",
				},
				{
					name: "radius",
					type: "string",
					default: '"0px"',
					description: "CSS border-radius applied to the container.",
				},
				{
					name: "backgroundColor",
					type: "string",
					default: '"#000"',
					description: "Background color behind the rays.",
				},
				{
					name: "animation",
					type: "AnimationConfig",
					default: '{ animate: true, speed: 10 }',
					description: "Controls whether the rays animate and at what speed.",
				},
				{
					name: "raysColor",
					type: "RaysColorConfig",
					default: '{ mode: "single", color: "#639AFF" }',
					description:
						'Color mode: "single" uses one color, "multi" uses two colors, "random" picks a random hue.',
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes for the container element.",
				},
			],
		},
	],
};
