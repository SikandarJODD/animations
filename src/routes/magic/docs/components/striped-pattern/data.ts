import Raw from "$lib/components/magic/striped-pattern/striped-pattern.svelte?raw";
import IndexTs from "$lib/components/magic/striped-pattern/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "striped-pattern",
	title: "Striped Pattern",
	description:
		"A background striped pattern made with SVGs, fully customizable using Tailwind CSS.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [];

const seo: SEO = {
	title: "Striped Pattern",
	description:
		"A background striped pattern made with SVGs, fully customizable using Tailwind CSS.",
	keywords: ["Svelte", "", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{
			filename: "striped-pattern.svelte",
			filecode: Raw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTs,
			lang: "typescript",
		},
	],
	folderStructure: ``,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "striped-pattern.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "",
			desc: "A component for .",
			props: [
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
				{
					name: "direction",
					type: '"left" | "right"',
					default: '"left"',
					description: "Direction of the stripes",
				},
				{
					name: "width",
					type: "number",
					default: "10",
					description: "Width of the pattern",
				},
				{
					name: "height",
					type: "number",
					default: "10",
					description: "Height of the pattern",
				},
			],
		},
	],
	installBlock,
};
