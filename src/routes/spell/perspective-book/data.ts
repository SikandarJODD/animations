import PerspectiveBookRaw from "#lib/components/spell/perspective-book/perspective-book.svelte?raw";
import IndexTsRaw from "#lib/components/spell/perspective-book/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "#lib/types/structure.js";
import type { SEO } from "#lib/types/seo.js";
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
	usage: {
		code: {
			filename: "usage.svelte",
			filecode: `<script lang="ts">
	import { PerspectiveBook } from "#lib/components/spell/perspective-book/index.js";
</script>

<PerspectiveBook>
	<h2>Perspective Interfaces</h2>
</PerspectiveBook>`,
			lang: "svelte",
		},
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
				},
				{
					name: "textured",
					type: "boolean",
					default: "false",
				},
				{
					name: "class",
					type: "ClassValue",
					default: "''",
				},
				{
					name: "style",
					type: "string",
					default: "",
				},
			],
		},
	],
};
