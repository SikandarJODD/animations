import BorderBeamRaw from "$lib/components/magic/border-beam/border-beam.svelte?raw";
import IndexTs from "$lib/components/magic/border-beam/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import BorderBeamTwo from "./examples/border-beam-two.svelte";
import BorderBeamTwoRaw from "./examples/border-beam-two.svelte?raw";
import BorderBeamReverse from "./examples/border-beam-reverse.svelte";
import BorderBeamReverseRaw from "./examples/border-beam-reverse.svelte?raw";
import BorderBeamSpring from "./examples/border-beam-spring.svelte";
import BorderBeamSpringRaw from "./examples/border-beam-spring.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "border-beam",
	title: "Border Beam",
	description:
		"A component for creating animated border beam effects around elements with customizable gradients, duration, and direction.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [
	{
		name: "2 Border Beams",
		preview: BorderBeamTwo,
		code: {
			filename: "border-beam-two.svelte",
			filecode: BorderBeamTwoRaw,
			lang: "svelte",
		},
	},
	{
		name: "Reverse",
		preview: BorderBeamReverse,
		code: {
			filename: "border-beam-reverse.svelte",
			filecode: BorderBeamReverseRaw,
			lang: "svelte",
		},
	},
	{
		name: "Spring",
		preview: BorderBeamSpring,
		code: {
			filename: "border-beam-spring.svelte",
			filecode: BorderBeamSpringRaw,
			lang: "svelte",
		},
	},
];

let installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "border-beam.svelte",
			filecode: BorderBeamRaw,
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
            └── border-beam/
                ├── border-beam.svelte
                └── index.ts`,
};

const seo: SEO = {
	title: "Border Beam",
	description:
		"Learn how to create border beam effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Border Beam", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "border-beam.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "BorderBeam",
			desc: "A component for creating animated border beam effects.",
			props: [
				{
					name: "size",
					type: "number",
					default: "50",
					description: "The size of the border beam in pixels",
				},
				{
					name: "duration",
					type: "number",
					default: "6",
					description: "The duration of the animation in seconds",
				},
				{
					name: "delay",
					type: "number",
					default: "0",
					description: "The delay before the animation starts in seconds",
				},
				{
					name: "colorFrom",
					type: "string",
					default: '"#ffaa40"',
					description: "The starting color of the gradient",
				},
				{
					name: "colorTo",
					type: "string",
					default: '"#9c40ff"',
					description: "The ending color of the gradient",
				},
				{
					name: "transition",
					type: "Transition",
					default: "undefined",
					description: "Custom motion transition configuration",
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description: "Additional CSS classes to apply",
				},
				{
					name: "style",
					type: "string",
					default: "undefined",
					description: "Additional inline styles",
				},
				{
					name: "reverse",
					type: "boolean",
					default: "false",
					description: "Whether to reverse the animation direction",
				},
				{
					name: "initialOffset",
					type: "number",
					default: "0",
					description: "The initial offset position (0-100)",
				},
				{
					name: "borderWidth",
					type: "number",
					default: "1",
					description: "The border width of the beam in pixels",
				},
			],
		},
	],
	installBlock,
};
