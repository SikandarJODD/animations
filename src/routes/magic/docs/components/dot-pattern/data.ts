import DotPatternRaw from "$lib/components/magic/dot-pattern/dot-pattern.svelte?raw";
import IndexTs from "$lib/components/magic/dot-pattern/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import DotPatternLinearGradient from "./examples/dot-pattern-linear-gradient.svelte";
import DotPatternLinearGradientRaw from "./examples/dot-pattern-linear-gradient.svelte?raw";
import DotPatternWithGlowEffect from "./examples/dot-pattern-with-glow-effect.svelte";
import DotPatternWithGlowEffectRaw from "./examples/dot-pattern-with-glow-effect.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "dot-pattern",
	title: "Dot Pattern",
	description:
		"A customizable dot pattern background component with optional glow animations and mask effects.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [
	{
		name: "Linear Gradient Mask",
		preview: DotPatternLinearGradient,
		code: {
			filename: "dot-pattern-linear-gradient.svelte",
			filecode: DotPatternLinearGradientRaw,
			lang: "svelte",
		},
	},
	{
		name: "Glow Effect",
		preview: DotPatternWithGlowEffect,
		code: {
			filename: "dot-pattern-with-glow-effect.svelte",
			filecode: DotPatternWithGlowEffectRaw,
			lang: "svelte",
		},
	},
];

const seo: SEO = {
	title: "Dot Pattern",
	description:
		"Learn how to create customizable dot pattern backgrounds in Svelte with animations.",
	keywords: [
		"Svelte",
		"Dot Pattern",
		"Svelte 5 Animations",
		"Animation",
		"Web Design",
		"Background",
	],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "dot-pattern.svelte",
			filecode: DotPatternRaw,
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
            └── dot-pattern/
                ├── dot-pattern.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "dot-pattern.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "DotPattern",
			desc: "A customizable dot pattern background with optional animations.",
			props: [
				{
					name: "width",
					type: "number",
					default: "16",
					description: "Horizontal spacing between dots",
				},
				{
					name: "height",
					type: "number",
					default: "16",
					description: "Vertical spacing between dots",
				},
				{
					name: "x",
					type: "number",
					default: "0",
					description: "X-offset of the entire pattern",
				},
				{
					name: "y",
					type: "number",
					default: "0",
					description: "Y-offset of the entire pattern",
				},
				{
					name: "cx",
					type: "number",
					default: "1",
					description: "X-offset of individual dots",
				},
				{
					name: "cy",
					type: "number",
					default: "1",
					description: "Y-offset of individual dots",
				},
				{ name: "cr", type: "number", default: "1", description: "Radius of each dot" },
				{
					name: "glow",
					type: "boolean",
					default: "false",
					description: "Enable glowing animation effect",
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes",
				},
			],
		},
	],
	installBlock,
};
