import FlowButtonRaw from "$lib/components/spell/flow-button/flow-button.svelte?raw";
import IndexTsRaw from "$lib/components/spell/flow-button/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import SizesExample from "./examples/sizes-example.svelte";
import SizesExampleRaw from "./examples/sizes-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "flow-button",
	title: "Flow Button",
	description: "A button with an animated dashed SVG border that flows on hover.",
	category: "spell",
};

const seo: SEO = {
	title: "Flow Button",
	description:
		"A Svelte 5 button component with an animated dashed SVG border that flows on hover, supporting sm, default, and lg sizes.",
	keywords: ["Svelte", "Flow Button", "Spell", "Svelte Animations", "SVG border", "animated button"],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "flow-button.svelte",
			filecode: FlowButtonRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTsRaw,
			lang: "typescript",
		},
	],
	packages: [],
	folderStructure: `src/
└── lib/
    └── components/
        └── spell/
            └── flow-button/
                ├── flow-button.svelte
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
			name: "Sizes",
			preview: SizesExample,
			code: {
				filename: "sizes-example.svelte",
				filecode: SizesExampleRaw,
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
				},
				{
					name: "size",
					type: '"sm" | "default" | "lg"',
					default: '"default"',
				},
				{
					name: "borderColor",
					type: "string",
					default: '"var(--rotating-border-color, currentColor)"',
				},
				{
					name: "class",
					type: "string | undefined",
					default: "undefined",
				},
			],
		},
	],
};
