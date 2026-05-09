import PulsatingButtonRaw from "$lib/components/magic/pulsating-button/pulsating-button.svelte?raw";
import IndexTs from "$lib/components/magic/pulsating-button/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import RingVariant from "./examples/ring-variant.svelte";
import RingVarianRaw from "./examples/ring-variant.svelte?raw";
import RippleVariant from "./examples/ripple-variant.svelte";
import RippleVariantRaw from "./examples/ripple-variant.svelte?raw";
import DurationExample from "./examples/duration-example.svelte";
import ColorsExample from "./examples/colors-example.svelte";
import DistanceExample from "./examples/distance-example.svelte";
import MinimalExample from "./examples/minimal-example.svelte";
import DurationExampleRaw from "./examples/duration-example.svelte?raw";
import ColorsExampleRaw from "./examples/colors-example.svelte?raw";
import DistanceExampleRaw from "./examples/distance-example.svelte?raw";
import MinimalExampleRaw from "./examples/minimal-example.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "pulsating-button",
	title: "Pulsating Button",
	description: "An animated pulsating button useful for capturing attention of users.",
	category: "animation",
	badge: "new",
};

const seo: SEO = {
	title: "Pulsating Button",
	description:
		"Learn how to create Pulsating Button effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Pulsating Button", "Svelte 5 Animations", "Animation", "Web Design"],
};

let installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{
			filename: "pulsating-button.svelte",
			filecode: PulsatingButtonRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTs,
			lang: "typescript",
		},
	],
	tailwind: {
		filename: "src/routes/layout.css",
		lang: "css",
		highlight: [2, [4, 14]],
		filecode: `@theme inline {
	--animate-pulse-slow: pulse-slow var(--duration) ease-out infinite;
	--animate-pulse-ring: pulse-ring var(--duration) ease-out infinite;
	--animate-pulse-ripple: pulse-ripple var(--duration) cubic-bezier(0.16, 1, 0.3, 1) infinite;

    /* Pulsating Button Animations - Original */
	@keyframes pulse-slow {
		0% {
			box-shadow: 0 0 0 0 var(--pulse-color);
		}
		100% {
			box-shadow: 0 0 0 var(--distance) transparent;
		}
	}

    /* New Variant */
	@keyframes pulse-ring {
		0%,
		100% {
			box-shadow: 0 0 0 0 var(--pulse-color, oklch(from var(--bg) l c h / 0.5));
		}
		50% {
			box-shadow: 0 0 0 var(--distance) var(--pulse-color, oklch(from var(--bg) l c h / 0.5));
		}
	}

    /* Ripple Variant */
	@keyframes pulse-ripple {
		0% {
			box-shadow: 0 0 0 0 oklch(from var(--pulse-color, var(--bg)) l c h / 1);
		}
		100% {
			box-shadow: 0 0 0 var(--distance) oklch(from var(--pulse-color, var(--bg)) l c h / 0);
		}
	}
}
`,
	},
	folderStructure: `src/
└── lib/
    └── components/
        └── magic/
            └── pulsating-button/
                ├── pulsating-button.svelte
                └── index.ts`,
};

export let examples: Example[] = [
	{
		name: "Ripple Variant",
		preview: RippleVariant,
		code: {
			filename: "ripple-variant.svelte",
			filecode: RippleVariantRaw,
			lang: "svelte",
		},
	},
	{
		name: "Ring Variant",
		preview: RingVariant,
		code: {
			filename: "ring-variant.svelte",
			filecode: RingVarianRaw,
			lang: "svelte",
		},
	},
	{
		name: "Duration Example",
		preview: DurationExample,
		code: {
			filename: "duration-example.svelte",
			filecode: DurationExampleRaw,
			lang: "svelte",
		},
	},
	{
		name: "Colors Example",
		preview: ColorsExample,
		code: {
			filename: "colors-example.svelte",
			filecode: ColorsExampleRaw,
			lang: "svelte",
		},
	},
	{
		name: "Distance Example",
		preview: DistanceExample,
		code: {
			filename: "distance-example.svelte",
			filecode: DistanceExampleRaw,
			lang: "svelte",
		},
	},
	{
		name: "Minimal Example",
		preview: MinimalExample,
		code: {
			filename: "minimal-example.svelte",
			filecode: MinimalExampleRaw,
			lang: "svelte",
		},
	},
];

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "pulsating-button.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "PulsatingButton",
			desc: "A component for Pulsating Button.",
			props: [
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
				{
					name: "pulseColor",
					type: "string",
					default: '"#808080"',
					description: "Color of the pulse",
				},
				{
					name: "duration",
					type: "string",
					default: '"1.5s"',
					description: "Duration of the animation",
				},
				{
					name: "children",
					type: "Snippet",
					default: "required",
					description: "The content to display inside the button",
				},
				{
					name: "variant",
					type: '"slow" | "ring" | "ripple"',
					default: '"slow"',
					description: "The animation variant to use",
				},
				{
					name: "distance",
					type: "string",
					default: '"8px"',
					description:
						"The distance the pulse expands to (applicable for 'ring' and 'ripple' variants)",
				},
			],
		},
	],
	installBlock,
};
