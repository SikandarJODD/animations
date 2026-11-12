import SpecialTextRaw from "#lib/components/spell/special-text/special-text.svelte?raw";
import IndexTsRaw from "#lib/components/spell/special-text/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "#lib/types/structure.js";
import type { SEO } from "#lib/types/seo.js";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import ViewportReplayExample from "./examples/viewport-replay-example.svelte";
import ViewportReplayExampleRaw from "./examples/viewport-replay-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "special-text",
	title: "Special Text",
	description: "Animated text with scramble effect.",
	category: "spell",
};

const seo: SEO = {
	title: "Special Text",
	description:
		"Learn how to use the Special Text spell component in Svelte, including delayed scramble timing, viewport triggers, and slotted content input.",
	keywords: ["Svelte", "Special Text", "Spell", "Svelte Animations", "Text Reveal", "Motion SV"],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "special-text.svelte",
			filecode: SpecialTextRaw,
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
            └── special-text/
                ├── special-text.svelte
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
			name: "Speed",
			preview: ViewportReplayExample,
			code: {
				filename: "speed-example.svelte",
				filecode: ViewportReplayExampleRaw,
				lang: "svelte",
				highlight: [2],
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
					default: "undefined",
					description:
						"Optional slotted text content used when the text prop is not provided.",
				},
				{
					name: "text",
					type: "string | undefined",
					default: "undefined",
					description:
						"Optional plain text source for the scramble reveal. Provide either text or children.",
				},
				{
					name: "speed",
					type: "number",
					default: "20",
					description:
						"Controls the scramble update cadence in milliseconds for each animation step.",
				},
				{
					name: "delay",
					type: "number",
					default: "0",
					description: "Adds a delay in seconds before the scramble sequence begins.",
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
						"When using inView, controls whether the reveal runs only on first entry.",
				},
				{
					name: "class",
					type: "ClassValue",
					default: "",
					description: "Custom classes applied to the animated root span.",
				},
			],
		},
	],
};
