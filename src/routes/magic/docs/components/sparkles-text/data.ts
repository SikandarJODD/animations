import IndexTsRaw from "$lib/components/magic/sparkles-text/index.ts?raw";
import SparklesTextSvelteRaw from "$lib/components/magic/sparkles-text/sparkles-text.svelte?raw";

import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "sparkles-text",
	title: "Sparkles Text",
	description:
		"A dynamic text that generates continuous sparkles with smooth transitions, perfect for highlighting text with animated stars.",
	category: "magic",
};

const seo: SEO = {
	title: "Sparkles Text",
	description:
		"A dynamic text that generates continuous sparkles with smooth transitions, perfect for highlighting text with animated stars.",
	keywords: ["Svelte", "Sparkles Text", "Magic"],
};

const installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{ filename: "index.ts", filecode: IndexTsRaw, lang: "typescript", isExpand: true },
		{ filename: "sparkles-text.svelte", filecode: SparklesTextSvelteRaw, lang: "svelte" },
	],
	folderStructure: "",
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
	examples: [],
	seo,
	props: [
		{
			name: "SparklesText",
			desc: "A text wrapper that renders animated sparkle stars around its children.",
			props: [
				{
					name: "as",
					type: "keyof SvelteHTMLElements",
					default: '"div"',
					description: "HTML element used for the outer wrapper.",
				},
				{
					name: "children",
					type: "Snippet",
					default: "required",
					description: "Content rendered inside the sparkle text component.",
				},
				{
					name: "sparklesCount",
					type: "number",
					default: "10",
					description: "Number of sparkle instances generated and animated at a time.",
				},
				{
					name: "colors",
					type: "{ first: string; second: string }",
					default: '{ first: "#9E7AFF", second: "#FE8BBB" }',
					description: "Two colors randomly used when generating sparkle stars.",
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional classes merged onto the root element.",
				},
				{
					name: "style",
					type: "string",
					default: '""',
					description: "Inline styles appended to the generated sparkle CSS variables.",
				},
			],
		},
	],
};
