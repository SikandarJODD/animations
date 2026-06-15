import BlurFadeRaw from "$lib/components/magic/blur-fade/blur-fade.svelte?raw";
import IndexTs from "$lib/components/magic/blur-fade/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import Example1 from "./examples/blur-fade-basic.svelte";
import Example1Raw from "./examples/blur-fade-basic.svelte?raw";
import Example2 from "./examples/blur-fade-custom-blur-amount.svelte";
import Example2Raw from "./examples/blur-fade-custom-blur-amount.svelte?raw";
import Example3 from "./examples/blur-fade-image-gallery.svelte";
import Example3Raw from "./examples/blur-fade-image-gallery.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "blur-fade",
	title: "Blur Fade",
	description:
		"A component that animates content with blur and fade effects, supporting directional movement and intersection observer triggering.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [
	{
		name: "Basic Usage",
		preview: Example1,
		code: {
			filename: "blur-fade-basic.svelte",
			filecode: Example1Raw,
			lang: "svelte",
		},
	},
	{
		name: "Custom Blur Amount",
		preview: Example2,
		code: {
			filename: "blur-fade-custom-blur-amount.svelte",
			filecode: Example2Raw,
			lang: "svelte",
		},
	},
	{
		name: "Image Gallery",
		preview: Example3,
		code: {
			filename: "blur-fade-image-gallery.svelte",
			filecode: Example3Raw,
			lang: "svelte",
		},
	},
];

const seo: SEO = {
	title: "Blur Fade",
	description:
		"Learn how to create blur fade effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Blur Fade", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "blur-fade.svelte",
			filecode: BlurFadeRaw,
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
            └── blur-fade/
                ├── blur-fade.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "blur-fade.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "BlurFade",
			desc: "A component for creating blur and fade animations.",
			props: [
				{
					name: "children",
					type: "Snippet",
					default: "-",
					description: "The content to animate",
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
				{
					name: "variant",
					type: "Variants",
					default: "-",
					description: "Custom animation variants",
				},
				{
					name: "duration",
					type: "number",
					default: "0.4",
					description: "Animation duration in seconds",
				},
				{
					name: "delay",
					type: "number",
					default: "0",
					description: "Animation delay in seconds",
				},
				{
					name: "offset",
					type: "number",
					default: "6",
					description: "Movement offset in pixels",
				},
				{
					name: "direction",
					type: '"up" | "down" | "left" | "right"',
					default: '"down"',
					description: "Animation direction",
				},
				{
					name: "inView",
					type: "boolean",
					default: "false",
					description: "Whether to trigger animation on intersection",
				},
				{
					name: "inViewMargin",
					type: "string",
					default: '"-50px"',
					description: "Intersection observer margin",
				},
				{ name: "blur", type: "string", default: '"6px"', description: "Blur amount" },
			],
		},
	],
	installBlock,
};
