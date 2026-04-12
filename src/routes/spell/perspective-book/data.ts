import PerspectiveBookRaw from "$lib/components/spell/perspective-book/perspective-book.svelte?raw";
import IndexTsRaw from "$lib/components/spell/perspective-book/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import TexturedExample from "./examples/textured-example.svelte";
import TexturedExampleRaw from "./examples/textured-example.svelte?raw";

export const textureDownloadUrl = "/perspective-book-textured.avif";

export const meta: ComponentMeta = {
	id: "perspective-book",
	title: "Perspective Book",
	description: "A 3D book component with hover animation and customizable appearance.",
	category: "spell",
};

const seo: SEO = {
	title: "Perspective Book",
	description:
		"Learn how to use the Perspective Book spell component in Svelte, including installation, textured covers, and composition patterns.",
	keywords: [
		"Svelte Spell UI",
		"Perspective Book",
		"Svelte Spell",
		"Svelte Animations",
		"Book Cover",
	],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "perspective-book.svelte",
			filecode: PerspectiveBookRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTsRaw,
			lang: "typescript",
		},
	],
	folderStructure: `src/
└── lib/
    └── components/
        └── spell/
            └── perspective-book/
                ├── perspective-book.svelte
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
			name: "Textured Preview",
			preview: TexturedExample,
			code: {
				filename: "preview.svelte",
				filecode: TexturedExampleRaw,
				lang: "svelte",
				highlight: [2, [28, 54]],
			},
		},
	],
	seo,
	props: [
		{
			props: [
				{
					name: "size",
					type: '"sm" | "default" | "lg"',
					default: '"default"',
					description: "Size of the book.",
				},
				{
					name: "textured",
					type: "boolean",
					default: "false",
					description: "Adds a realistic book texture overlay to the cover.",
				},
				{
					name: "class",
					type: "string",
					default: "''",
					description: "CSS classes for styling the book cover. Use Tailwind classes like bg-amber-500, bg-red-600, etc.",
				},
				{
					name: "style",
					type: "string",
					default: "",
					description: "Additional inline styles to apply to the book cover.",
				},
			],
		},
	],
};
