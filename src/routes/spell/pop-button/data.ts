import PopButtonRaw from "$lib/components/spell/pop-button/pop-button.svelte?raw";
import IndexTsRaw from "$lib/components/spell/pop-button/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import VariantsExample from "./examples/variants-example.svelte";
import VariantsExampleRaw from "./examples/variants-example.svelte?raw";
import SizeExample from "./examples/size-example.svelte";
import SizeExampleRaw from "./examples/size-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "pop-button",
	title: "Pop Button",
	description:
		"A button component with a 3D pop effect and press animation, available in multiple color variants and sizes.",
	category: "spell",
};

const seo: SEO = {
	title: "Pop Button",
	description:
		"Learn how to use the Pop Button spell component in Svelte, including color variants, sizes, and the 3D press animation effect.",
	keywords: [
		"Svelte",
		"Pop Button",
		"Spell",
		"Svelte Animations",
		"3D Button",
		"tailwind-variants",
	],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "pop-button.svelte",
			filecode: PopButtonRaw,
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
            └── pop-button/
                ├── pop-button.svelte
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
			name: "Colors",
			preview: VariantsExample,
			code: {
				filename: "variants-example.svelte",
				filecode: VariantsExampleRaw,
				lang: "svelte",
			},
		},
		{
			name: "Sizes",
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
					description: "The content to display inside the button.",
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
