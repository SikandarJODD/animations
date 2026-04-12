import CopyButtonRaw from "$lib/components/spell/copy-button/copy-button.svelte?raw";
import IndexTsRaw from "$lib/components/spell/copy-button/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import SizesExample from "./examples/sizes-example.svelte";
import SizesExampleRaw from "./examples/sizes-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "copy-button",
	title: "Copy Button",
	description: "A copy-to-clipboard button with animated icon transition between copy and check states.",
	category: "spell",
};

const seo: SEO = {
	title: "Copy Button",
	description:
		"Learn how to use the Copy Button spell component in Svelte, including size variants and clipboard integration.",
	keywords: ["Svelte", "Copy Button", "Spell", "Svelte Animations", "Clipboard", "lucide-svelte"],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "copy-button.svelte",
			filecode: CopyButtonRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTsRaw,
			lang: "typescript",
		},
	],
	packages: ["lucide-svelte"],
	folderStructure: `src/
└── lib/
    └── components/
        └── spell/
            └── copy-button/
                ├── copy-button.svelte
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
		highlight: [2],
	},
	installBlock,
	examples: [
		{
			name: "Sizes",
			description: "The component supports three size variants: sm, default, and lg.",
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
					name: "text",
					type: "string | undefined",
					default: "undefined",
				},
				{
					name: "size",
					type: '"sm" | "default" | "lg"',
					default: '"default"',
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
