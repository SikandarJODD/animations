import AnimatedCircularProgressBar from "$lib/components/magic/animated-circular-progress-bar/animated-circular-progress-bar.svelte?raw";
import IndexTs from "$lib/components/magic/animated-circular-progress-bar/index.ts?raw";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

// Main Component

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "animated-circular-progress-bar",
	title: "Animated Circular Progress Bar",
	description:
		"A circular progress bar component with animated transitions between primary and secondary colors.",
	category: "animation",
	badge: "new",
};

const seo: SEO = {
	title: "Animated Circular Progress Bar",
	description:
		"Animated Circular Progress Bar is a component that displays a circular gauge with a percentage value.",
	keywords: [
		"Svelte",
		"Animated Circular Progress Bar",
		"Svelte 5 Animations",
		"Animation",
		"Web Design",
	],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: [],
	folderStructure: `src/
└── lib/
    └── components/
        └── magic/
            └── animated-circular-progress-bar/
                ├── animated-circular-progress-bar.svelte
                └── index.ts`,
	installCode: [
		{
			filename: "animated-circular-progress-bar.svelte",
			filecode: AnimatedCircularProgressBar,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTs,
			lang: "typescript",
		},
	],
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "animated-circular-progress-bar.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	seo,
	props: [
		{
			name: "AnimatedCircularProgressBar",
			desc: "A component for displaying animated circular progress.",
			props: [
				{
					name: "max",
					type: "number",
					default: "100",
					description: "The maximum value for the progress bar",
				},
				{
					name: "min",
					type: "number",
					default: "0",
					description: "The minimum value for the progress bar",
				},
				{
					name: "value",
					type: "number",
					default: "0",
					description: "The current value of the progress bar",
				},
				{
					name: "gaugePrimaryColor",
					type: "string",
					required: true,
					description: "The color for the progress portion of the bar",
				},
				{
					name: "gaugeSecondaryColor",
					type: "string",
					required: true,
					description: "The color for the remaining portion of the bar",
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
			],
		},
	],
	installBlock,
};
