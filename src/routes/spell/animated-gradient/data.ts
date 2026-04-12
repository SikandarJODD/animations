import AnimatedGradientRaw from "$lib/components/spell/animated-gradient/animated-gradient.svelte?raw";
import IndexTsRaw from "$lib/components/spell/animated-gradient/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import PresetsExample from "./examples/presets-example.svelte";
import PresetsExampleRaw from "./examples/presets-example.svelte?raw";

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
	],
};
