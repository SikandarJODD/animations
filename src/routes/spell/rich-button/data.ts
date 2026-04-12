import RichButtonRaw from "$lib/components/spell/rich-button/rich-button.svelte?raw";
import IndexTsRaw from "$lib/components/spell/rich-button/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import VariantsExample from "./examples/variants-example.svelte";
import VariantsExampleRaw from "./examples/variants-example.svelte?raw";
import SizeExample from "./examples/size-example.svelte";
import SizeExampleRaw from "./examples/size-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "rich-button",
	title: "Rich Button",
	description:
		"A button component with gradient backgrounds, text shadows, and 23 color variants.",
	category: "spell",
};

const seo: SEO = {
	title: "Rich Button",
	description:
		"Learn how to use the Rich Button spell component in Svelte, including color variants, gradient backgrounds, and size options.",
	keywords: [
		"Svelte",
		"Rich Button",
		"Spell",
		"Svelte Animations",
		"Gradient Button",
		"tailwind-variants",
	],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "rich-button.svelte",
			filecode: RichButtonRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTsRaw,
			lang: "typescript",
		},
	],
	packages: ["tailwind-variants"],
	folderStructure: `src/
└── lib/
    └── components/
        └── spell/
            └── rich-button/
                ├── rich-button.svelte
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
			name: "Color",
			preview: VariantsExample,
			code: {
				filename: "variants-example.svelte",
				filecode: VariantsExampleRaw,
				lang: "svelte",
			},
		},
		{
			name: "Size",
			preview: SizeExample,
			code: {
				filename: "size-example.svelte",
				filecode: SizeExampleRaw,
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
					description: "The content of the button.",
				},
				{
					name: "color",
					type: '"default" | "blue" | "purple" | "pink" | "red" | "orange" | "yellow" | "green" | "teal" | "cyan" | "indigo" | "violet" | "rose" | "amber" | "lime" | "sky" | "slate" | "gray" | "zinc" | "neutral" | "stone" | "fuchsia" | "emerald"',
					default: '"default"',
					description: "The color of the button — supports all Tailwind colors.",
				},
				{
					name: "size",
					type: '"sm" | "default" | "lg"',
					default: '"default"',
					description: "The size of the button.",
				},
				{
					name: "class",
					type: "string | undefined",
					default: "undefined",
					description: "Additional CSS classes to apply.",
				},
			],
		},
	],
};
