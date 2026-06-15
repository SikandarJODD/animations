import ShimmerButtonRaw from "$lib/components/magic/shimmer-button/shimmer-button.svelte?raw";
import IndexTs from "$lib/components/magic/shimmer-button/index.ts?raw";

import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "shimmer-button",
	title: "Shimmer Button",
	description: "A button with a shimmering light which travels around the perimeter.",
	category: "animation",
	badge: "new",
};

const seo: SEO = {
	title: "Shimmer Button",
	description:
		"Learn how to create Shimmer Button effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Shimmer Button", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{
			filename: "shimmer-button.svelte",
			filecode: ShimmerButtonRaw,
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
		highlight: [
			[2, 4],
			[6, 26],
		],
		filecode: `@theme inline {
  --animate-shimmer-slide: shimmer-slide var(--speed) ease-in-out infinite
    alternate;
  --animate-spin-around: spin-around calc(var(--speed) * 2) infinite linear;

  @keyframes shimmer-slide {
    to {
      transform: translate(calc(100cqw - 100%), 0);
    }
  }
  @keyframes spin-around {
    0% {
      transform: translateZ(0) rotate(0);
    }
    15%,
    35% {
      transform: translateZ(0) rotate(90deg);
    }
    65%,
    85% {
      transform: translateZ(0) rotate(270deg);
    }
    100% {
      transform: translateZ(0) rotate(360deg);
    }
  }
}`,
	},
	folderStructure: `src/
└── lib/
    └── components/
        └── magic/
            └── shimmer-button/
                ├── shimmer-button.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "shimmer-button.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	seo,
	props: [
		{
			name: "ShimmerButton",
			desc: "A component for Shimmer Button.",
			props: [
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
				{
					name: "shimmerColor",
					type: "string",
					default: '"#ffffff"',
					description: "Color of the shimmer effect",
				},
				{
					name: "shimmerSize",
					type: "string",
					default: '"0.05em"',
					description: "Size of the shimmer effect",
				},
				{
					name: "shimmerDuration",
					type: "string",
					default: '"3s"',
					description: "Duration of the shimmer animation",
				},
				{
					name: "borderRadius",
					type: "string",
					default: '"100px"',
					description: "Border radius of the button",
				},
				{
					name: "background",
					type: "string",
					default: '"rgba(0, 0, 0, 1)"',
					description: "Background color of the button",
				},
			],
		},
	],
	installBlock,
};
