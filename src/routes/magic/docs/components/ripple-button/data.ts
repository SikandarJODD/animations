import RippleButtonRaw from "$lib/components/magic/ripple-button/ripple-button.svelte?raw";
import IndexTs from "$lib/components/magic/ripple-button/index.ts?raw";

import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "ripple-button",
	title: "Ripple Button",
	description: "An animated button with ripple useful for user engagement.",
	category: "animation",
	badge: "new",
};

const seo: SEO = {
	title: "Ripple Button",
	description:
		"Learn how to create Ripple Button effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Ripple Button", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: ["runed"],
	installCode: [
		{
			filename: "ripple-button.svelte",
			filecode: RippleButtonRaw,
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
  --animate-rippling: rippling var(--duration) ease-out;

  @keyframes rippling {
    0% {
      opacity: 1;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
}`,
	},
	folderStructure: `src/
└── lib/
    └── components/
        └── magic/
            └── ripple-button/
                ├── ripple-button.svelte
                └── index.ts`,
};

/*
interface RippleButtonProps extends HTMLButtonAttributes {
		children: Snippet;
		class?: string;
		rippleColor?: string;
		duration?: string;
	}

	let {
		class: className,
		children,
		rippleColor = "#ffffff",
		duration = "600ms",
		onclick,
		...props
	}: RippleButtonProps = $props();
 */

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "ripple-button.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	seo,
	props: [
		{
			name: "RippleButton",
			desc: "A component for Ripple Button.",
			props: [
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
				{
					name: "rippleColor",
					type: "string",
					default: '"#ffffff"',
					description: "Color of the ripple effect",
				},
				{
					name: "duration",
					type: "string",
					default: '"600ms"',
					description: "Duration of the ripple effect",
				},
				{
					name: "children",
					type: "Snippet",
					default: "required",
					description: "The content of the button",
				},
			],
		},
	],
	installBlock,
};
