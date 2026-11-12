import HighlightedTextRaw from "#lib/components/spell/highlighted-text/highlighted-text.svelte?raw";
import IndexTsRaw from "#lib/components/spell/highlighted-text/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "#lib/types/structure.js";
import type { SEO } from "#lib/types/seo.js";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import DirectionExample from "./examples/direction-example.svelte";
import DirectionExampleRaw from "./examples/direction-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "highlighted-text",
	title: "Highlighted Text",
	description: "Text with sliding background highlight animation using mix-blend-mode.",
	category: "spell",
};

const seo: SEO = {
	title: "Highlighted Text",
	description:
		"Learn how to use the Highlighted Text spell component in Svelte, including directional sweeps, delay control, and viewport-triggered playback.",
	keywords: [
		"Svelte",
		"Highlighted Text",
		"Spell",
		"Svelte Animations",
		"Inline Highlight",
		"Motion SV",
	],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "highlighted-text.svelte",
			filecode: HighlightedTextRaw,
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
            └── highlighted-text/
                ├── highlighted-text.svelte
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
			name: "Direction And View Trigger",
			description:
				"Change the sweep origin and wait for viewport entry when you want the emphasis to arrive with surrounding content.",
			preview: DirectionExample,
			code: {
				filename: "direction-example.svelte",
				filecode: DirectionExampleRaw,
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
					type: "Snippet | undefined",
					required: true,
					description: "The inline text content wrapped by the animated highlight.",
				},
				{
					name: "from",
					type: '"left" | "right" | "top" | "bottom"',
					default: '"bottom"',
					description: "Controls the direction the highlight bar sweeps in from.",
				},
				{
					name: "delay",
					type: "number",
					default: "0",
					description: "Adds a delay in seconds before the highlight motion begins.",
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
					name: "class",
					type: "ClassValue",
					default: "",
					description: "Custom classes applied to the outer inline wrapper.",
				},
			],
		},
	],
};
