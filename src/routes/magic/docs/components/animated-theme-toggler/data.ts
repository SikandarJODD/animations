import AnimatedThemeTogglerRaw from "$lib/components/magic/animated-theme-toggler/animated-theme-toggler.svelte?raw";

import IndexTs from "$lib/components/magic/animated-theme-toggler/index.ts?raw";

import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "animated-theme-toggler",
	title: "Theme Toggler",
	description: "An Animated theme toggler component, fully customizable using Tailwind CSS.",
	category: "animation",
};

const seo: SEO = {
	title: "Theme Toggler",
	description: "An Animated theme toggler component, fully customizable using Tailwind CSS.",
	keywords: [
		"Svelte",
		"Theme Toggler",
		"Svelte 5 Animations",
		"Animation",
		"Web Design",
		"View Transition API",
	],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: ["@lucide/svelte"],
	installCode: [
		{
			filename: "animated-theme-toggler.svelte",
			filecode: AnimatedThemeTogglerRaw,
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
		filecode: `::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}`,
		lang: "css",
	},
	folderStructure: `src/
└── lib/
    └── components/
        └── magic/
            └── animated-theme-toggler/
                ├── animated-theme-toggler.svelte
                └── index.ts`,
};
export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "animated-theme-toggler.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	seo,
	props: [
		{
			name: "AnimatedThemeToggler",
			desc: "A component for smooth theme switching with circular reveal animation.",
			props: [
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
				{
					name: "duration",
					type: "number",
					default: "400",
					description: "Duration of the animation in milliseconds",
				},
			],
		},
	],
	installBlock,
};
