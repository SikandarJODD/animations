import CoolModeRaw from "$lib/components/magic/cool-mode/cool-mode.svelte?raw";
import IndexTs from "$lib/components/magic/cool-mode/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import CoolModeCustomImg from "./examples/cool-mode-custom-img.svelte";
import CoolModeCustomImgRaw from "./examples/cool-mode-custom-img.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "cool-mode",
	title: "Cool Mode",
	description:
		"Add a fun particle effect that follows mouse interactions, with support for emojis, images, and custom shapes.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [
	{
		name: "Custom Image",
		preview: CoolModeCustomImg,
		code: {
			filename: "cool-mode-custom-img.svelte",
			filecode: CoolModeCustomImgRaw,
			lang: "svelte",
		},
	},
];

const seo: SEO = {
	title: "Cool Mode",
	description:
		"Learn how to add interactive particle effects to Svelte components with cool-mode.",
	keywords: [
		"Svelte",
		"Cool Mode",
		"Svelte 5 Animations",
		"Animation",
		"Web Design",
		"Particles",
		"Interactive",
	],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{
			filename: "cool-mode.svelte",
			filecode: CoolModeRaw,
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
            └── cool-mode/
                ├── cool-mode.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "cool-mode.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "CoolMode",
			desc: "A wrapper component that adds particle effects on interaction.",
			props: [
				{
					name: "children",
					type: "Snippet",
					default: "required",
					description: "The content to wrap with cool mode effect",
				},
				{
					name: "options",
					type: "CoolParticleOptions",
					default: "undefined",
					description: "Configuration options for particles",
				},
			],
		},
		{
			name: "CoolParticleOptions",
			desc: "Configuration options for the particle effect.",
			props: [
				{
					name: "particle",
					type: "string",
					default: '"circle"',
					description: 'Particle type: "circle", emoji, or image URL',
				},
				{
					name: "particleCount",
					type: "number",
					default: "undefined",
					description: "Maximum number of particles",
				},
				{
					name: "size",
					type: "number",
					default: "random",
					description: "Size of particles in pixels",
				},
				{
					name: "speedHorz",
					type: "number",
					default: "random",
					description: "Horizontal speed of particles",
				},
				{
					name: "speedUp",
					type: "number",
					default: "random",
					description: "Vertical speed of particles",
				},
			],
		},
	],
	installBlock,
};
