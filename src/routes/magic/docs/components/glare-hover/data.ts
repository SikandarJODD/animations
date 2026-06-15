import GlareHoverSvelteRaw from "$lib/components/magic/glare-hover/glare-hover.svelte?raw";
import IndexTsRaw from "$lib/components/magic/glare-hover/index.ts?raw";

import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import type { Example } from "$lib/types/examples";
import CtaExample from "./examples/cta-example.svelte";
import CtaExampleRaw from "./examples/cta-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "glare-hover",
	title: "Glare Hover",
	description: "A glare hover effect that adds a subtle shine to elements when hovered.",
	category: "magic",
};

const seo: SEO = {
	title: "Glare Hover",
	description: "A glare hover effect that adds a subtle shine to elements when hovered.",
	keywords: ["Svelte", "Glare Hover", "Magic"],
	titleTemplate: "%s | Svelte Magic UI",
};

const installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{
			filename: "glare-hover.svelte",
			filecode: GlareHoverSvelteRaw,
			lang: "svelte",
			isExpand: true,
		},
		{ filename: "index.ts", filecode: IndexTsRaw, lang: "typescript" },
	],
	folderStructure: "",
};

const examples: Example[] = [
	{
		name: "Cta Example",
		preview: CtaExample,
		previewClass: "py-20",
		code: {
			filename: "cta-example.svelte",
			filecode: CtaExampleRaw,
			lang: "svelte",
		},
	},
];

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
	examples,
	seo,
	props: [
		{
			name: "GlareHover",
			desc: "A wrapper component that sweeps a configurable glare across its content on hover.",
			props: [
				{
					name: "children",
					type: "Snippet",
					default: "undefined",
					description: "Content rendered inside the hover surface.",
				},
				{
					name: "width",
					type: "string",
					default: "undefined",
					description: "Optional CSS width applied to the root element.",
				},
				{
					name: "height",
					type: "string",
					default: "undefined",
					description: "Optional CSS height applied to the root element.",
				},
				{
					name: "background",
					type: "string",
					default: '"#000"',
					description: "Background behind the glare animation.",
				},
				{
					name: "color",
					type: "`#${string}`",
					default: '"#ffffff"',
					description: "Hex color used for the glare highlight.",
				},
				{
					name: "opacity",
					type: "number",
					default: "0.5",
					description: "Opacity of the glare color after conversion to RGBA.",
				},
				{
					name: "angle",
					type: "number",
					default: "-45",
					description: "Angle of the animated glare gradient in degrees.",
				},
				{
					name: "size",
					type: "number",
					default: "250",
					description: "Background-size percentage used for the glare sweep.",
				},
				{
					name: "duration",
					type: "number",
					default: "650",
					description: "Hover transition duration in milliseconds.",
				},
				{
					name: "playOnce",
					type: "boolean",
					default: "false",
					description:
						"Runs the glare only on hover instead of maintaining a reusable transition state.",
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional classes merged onto the root div.",
				},
				{
					name: "style",
					type: "string",
					default: '""',
					description: "Inline styles appended to the generated CSS variables.",
				},
			],
		},
	],
};
