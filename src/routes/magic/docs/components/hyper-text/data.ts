import HyperTextRaw from "$lib/components/magic/hyper-text/hyper-text.svelte?raw";
import IndexTs from "$lib/components/magic/hyper-text/index.ts?raw";

import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "hyper-text",
	title: "Hyper Text",
	description: "A text animation that scrambles letters before revealing the final text.",
	category: "animation",
	badge: "new",
};

const seo: SEO = {
	title: "Hyper Text",
	description:
		"Learn how to create Hyper Text effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Hyper Text", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "hyper-text.svelte",
			filecode: HyperTextRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTs,
			lang: "typescript",
		},
	],
	folderStructure: `src/
└── lib/
	└── components/
		└── magic/
			└── hyper-text/
				├── hyper-text.svelte
				└── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "hyper-text.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	seo,
	props: [
		{
			name: "HyperText",
			desc: "A component for Hyper Text.",
			props: [
				{
					name: "text",
					type: "string",
					default: "undefined",
					description: "The text content to be animated",
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
				{
					name: "duration",
					type: "number",
					default: "800",
					description: "Duration of the animation in milliseconds",
				},
				{
					name: "delay",
					type: "number",
					default: "0",
					description: "Delay before animation starts in milliseconds",
				},
				{
					name: "as",
					type: '"div" | "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"',
					default: '"div"',
					description: "Component to render as",
				},
				{
					name: "startOnView",
					type: "boolean",
					default: "false",
					description: "Whether to start animation when element comes into view",
				},
				{
					name: "animateOnHover",
					type: "boolean",
					default: "true",
					description: "Whether to trigger animation on hover",
				},
				{
					name: "characterSet",
					type: "string[] | readonly string[]",
					default: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
					description: "Custom character set for scramble effect",
				},
			],
		},
	],
	installBlock,
};
