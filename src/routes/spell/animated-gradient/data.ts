import AnimatedGradientRaw from "$lib/components/spell/animated-gradient/animated-gradient.svelte?raw";
import IndexTsRaw from "$lib/components/spell/animated-gradient/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import PresetsExample from "./examples/presets-example.svelte";
import PresetsExampleRaw from "./examples/presets-example.svelte?raw";
import CustomConfigExample from "./examples/custom-config-example.svelte";
import CustomConfigExampleRaw from "./examples/custom-config-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "animated-gradient",
	title: "Animated Gradient",
	description: "A WebGL2-powered animated gradient background with multiple presets and full customization.",
	category: "spell",
};

const seo: SEO = {
	title: "Animated Gradient",
	description:
		"A WebGL2-powered animated gradient background component for Svelte with presets like Prism, Lava, Plasma, Pulse, Vortex, and Mist.",
	keywords: [
		"Svelte",
		"Animated Gradient",
		"Spell",
		"Svelte Animations",
		"WebGL",
		"Background",
		"Gradient",
	],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "animated-gradient.svelte",
			filecode: AnimatedGradientRaw,
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
            └── animated-gradient/
                ├── animated-gradient.svelte
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
			name: "Presets",
			preview: PresetsExample,
			previewClass: "!p-0",
			code: {
				filename: "presets-example.svelte",
				filecode: PresetsExampleRaw,
				lang: "svelte",
				hideLines: true,
			},
		},
		{
			name: "Custom Config",
			preview: CustomConfigExample,
			previewClass: "!p-0",
			code: {
				filename: "custom-config-example.svelte",
				filecode: CustomConfigExampleRaw,
				lang: "svelte",
				hideLines: true,
			},
		},
	],
	seo,
	props: [
		{
			props: [
				{
					name: "config",
					type: "GradientConfig",
					default: '{ preset: "Prism" }',
					description:
						'Controls the gradient appearance. Use a preset name (e.g. { preset: "Lava" }) or { preset: "custom", color1, color2, color3, ... } for full control.',
				},
				{
					name: "noise",
					type: "{ opacity: number; scale?: number }",
					default: "undefined",
					description: "Overlays a grain texture. opacity controls intensity, scale controls grain size.",
				},
				{
					name: "radius",
					type: "string",
					default: '"0px"',
					description: "CSS border-radius applied to the gradient container.",
				},
				{
					name: "style",
					type: "string",
					default: '""',
					description: "Inline styles forwarded to the container element.",
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "CSS classes applied to the container element.",
				},
			],
		},
		{
			name: "Custom Config Options",
			desc: 'When using { preset: "custom" }, the following options are available.',
			props: [
				{
					name: "color1",
					type: "string",
					default: "required",
					description: "Primary gradient color. Accepts hex, rgb, rgba, hsl, or hsla.",
				},
				{
					name: "color2",
					type: "string",
					default: "required",
					description: "Secondary gradient color.",
				},
				{
					name: "color3",
					type: "string",
					default: "required",
					description: "Tertiary gradient color.",
				},
				{
					name: "rotation",
					type: "number",
					default: "0",
					description: "Rotation angle of the gradient pattern in degrees (-360 to 360).",
				},
				{
					name: "proportion",
					type: "number",
					default: "35",
					description: "Controls the balance between color1 and color2/color3 (0–100).",
				},
				{
					name: "scale",
					type: "number",
					default: "1",
					description: "Zoom level of the noise pattern.",
				},
				{
					name: "speed",
					type: "number",
					default: "25",
					description: "Animation speed (0–100).",
				},
				{
					name: "distortion",
					type: "number",
					default: "12",
					description: "Amount of noise-based warping applied to the UV coordinates (0–100).",
				},
				{
					name: "swirl",
					type: "number",
					default: "80",
					description: "Intensity of the swirl effect (0–100).",
				},
				{
					name: "swirlIterations",
					type: "number",
					default: "10",
					description: "Number of swirl loop iterations — more layers produce a denser swirl (0–20).",
				},
				{
					name: "softness",
					type: "number",
					default: "100",
					description: "Blending softness between color regions (0–100).",
				},
				{
					name: "offset",
					type: "number",
					default: "0",
					description: "Time offset applied to the animation start (-1000 to 1000).",
				},
				{
					name: "shape",
					type: '"Checks" | "Stripes" | "Edge"',
					default: '"Checks"',
					description: "Base pattern used for color mixing.",
				},
				{
					name: "shapeSize",
					type: "number",
					default: "10",
					description: "Scale of the base pattern (0–100).",
				},
			],
		},
	],
};
