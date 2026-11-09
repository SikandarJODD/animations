import GradientWaveTextRaw from "#lib/components/spell/gradient-wave-text/gradient-wave-text.svelte?raw";
import IndexTsRaw from "#lib/components/spell/gradient-wave-text/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "#lib/types/structure.js";
import type { SEO } from "#lib/types/seo.js";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import LinearBandsExample from "./examples/linear-bands-example.svelte";
import LinearBandsExampleRaw from "./examples/linear-bands-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "gradient-wave-text",
	title: "Gradient Wave Text",
	description: "Apple-style animated gradient text with wave effect.",
	category: "spell",
};

const seo: SEO = {
	title: "Gradient Wave Text",
	description:
		"Learn how to use the Gradient Wave Text spell component in Svelte, including repeat behavior, custom color bands, and linear or radial gradients.",
	keywords: [
		"Svelte",
		"Gradient Wave Text",
		"Spell",
		"Svelte Animations",
		"Gradient Text",
		"Motion SV",
	],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "gradient-wave-text.svelte",
			filecode: GradientWaveTextRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTsRaw,
			lang: "typescript",
		},
	],
	packages: ["motion-sv"],
	folderStructure: `src/
└── lib/
    └── components/
        └── spell/
            └── gradient-wave-text/
                ├── gradient-wave-text.svelte
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
			name: "Linear Bands",
			preview: LinearBandsExample,
			code: {
				filename: "linear-bands-example.svelte",
				filecode: LinearBandsExampleRaw,
				lang: "svelte",
			},
		},
	],
	seo,
	props: [
		{
			props: [
				{
					name: "children",
					type: "Snippet",
					required: true,
					description: "The text content rendered inside the animated gradient mask.",
				},
				{
					name: "align",
					type: '"left" | "center" | "right"',
					default: '"center"',
					description:
						"Controls content alignment and text alignment for the rendered headline.",
				},
				{
					name: "speed",
					type: "number",
					default: "1",
					description:
						"Controls how quickly the gradient index advances through the color bands.",
				},
				{
					name: "paused",
					type: "boolean",
					default: "false",
					description:
						"Pauses gradient movement while keeping the current visual state rendered.",
				},
				{
					name: "delay",
					type: "number",
					default: "0",
					description: "Adds a delay in seconds before the gradient animation begins.",
				},
				{
					name: "repeat",
					type: "boolean",
					default: "false",
					description:
						"When true, loops the gradient wave indefinitely instead of stopping after one pass.",
				},
				{
					name: "triggerOnView",
					type: "boolean",
					default: "false",
					description: "Waits to animate until the component enters the viewport.",
				},
				{
					name: "once",
					type: "boolean",
					default: "true",
					description:
						"When using triggerOnView, controls whether the animation runs only on first entry.",
				},
				{
					name: "radial",
					type: "boolean",
					default: "true",
					description:
						"Uses a radial gradient when true and a linear gradient when false.",
				},
				{
					name: "bottomOffset",
					type: "number",
					default: "20",
					description:
						"Controls how much extra bottom padding is applied to preserve the gradient bloom.",
				},
				{
					name: "bandGap",
					type: "number",
					default: "4",
					description: "Sets the spacing between each gradient color band.",
				},
				{
					name: "bandCount",
					type: "number",
					default: "8",
					description: "Controls how many color bands are rendered into the gradient.",
				},
				{
					name: "customColors",
					type: "string[]",
					default: "",
					description: "Overrides the default gradient palette with a custom color list.",
				},
				{
					name: "ariaLabel",
					type: "string",
					default: "",
					description:
						"Provides an accessible label when the rendered content should be announced as an image-like effect.",
				},
				{
					name: "role",
					type: "string",
					default: "",
					description: "Overrides the computed root role if you need explicit semantics.",
				},
				{
					name: "class",
					type: "string",
					default: "",
					description: "Custom classes applied to the root wrapper.",
				},
				{
					name: "style",
					type: "string",
					default: "",
					description: "Inline styles merged onto the root wrapper.",
				},
			],
		},
	],
};
