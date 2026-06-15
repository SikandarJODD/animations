import Raw from "$lib/components/magic/marquee/marquee.svelte?raw";
import IndexTs from "$lib/components/magic/marquee/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

import MarqueeVertical from "./examples/marquee-vertical.svelte";
import MarqueeVerticalRaw from "./examples/marquee-vertical.svelte?raw";
import Marquee3D from "./examples/marquee-3d.svelte";
import Marquee3DRaw from "./examples/marquee-3d.svelte?raw";
import ReviewCardRaw from "./examples/review-card.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "marquee",
	title: "Marquee",
	description:
		"An infinite scrolling component that can be used to display text, images, or videos.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [
	{
		name: "Vertical Marquee",
		description: "A marquee that scrolls vertically.",
		preview: MarqueeVertical,
		code: [
			{
				filename: "marquee-vertical.svelte",
				filecode: MarqueeVerticalRaw,
				lang: "svelte",
			},
			{
				filename: "review-card.svelte",
				filecode: ReviewCardRaw,
				lang: "svelte",
			},
		],
	},
	{
		name: "3D Marquee",
		description: "A marquee with a 3D effect.",
		preview: Marquee3D,
		code: [
			{
				filename: "marquee-3d.svelte",
				filecode: Marquee3DRaw,
				lang: "svelte",
			},
			{
				filename: "review-card.svelte",
				filecode: ReviewCardRaw,
				lang: "svelte",
			},
		],
	},
];

const seo: SEO = {
	title: "Marquee",
	description:
		"Learn how to create infinite scrolling marquee effects in Svelte using the Svelte 5 Animations library.",
	keywords: [
		"Svelte",
		"Marquee",
		"Svelte 5 Animations",
		"Animation",
		"Web Design",
		"Infinite Scroll",
	],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{
			filename: "marquee.svelte",
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
	folderStructure: `src/
└── lib/
    └── components/
        └── magic/
            └── marquee/
                ├── marquee.svelte
                └── index.ts`,
	tailwind: {
		filename: "src/routes/layout.css",
		filecode: `@theme inline {
  --animate-marquee: marquee var(--duration) infinite linear;
  --animate-marquee-vertical: marquee-vertical var(--duration) linear infinite;

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - var(--gap)));
    }
  }
  @keyframes marquee-vertical {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - var(--gap)));
    }
  }
}`,
		lang: "css",
		highlight: [
			[2, 3],
			[5, 20],
		],
	},
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "marquee.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "Marquee",
			desc: "An infinite scrolling component that can be used to display text, images, or videos.",
			props: [
				{
					name: "children",
					type: "Snippet",
					default: "-",
					description: "The content to scroll inside the marquee",
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
				{
					name: "reverse",
					type: "boolean",
					default: "false",
					description: "Reverse the animation direction",
				},
				{
					name: "pauseOnHover",
					type: "boolean",
					default: "false",
					description: "Pause the animation when hovered",
				},
				{
					name: "vertical",
					type: "boolean",
					default: "false",
					description: "Scroll vertically instead of horizontally",
				},
				{
					name: "repeat",
					type: "number",
					default: "4",
					description: "Number of times to repeat the content for seamless scrolling",
				},
			],
		},
	],
	installBlock,
};
