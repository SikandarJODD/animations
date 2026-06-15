import AnimatedGridPattern from "$lib/components/magic/animated-grid-pattern/animated-grid-pattern.svelte?raw";
import IndexTs from "$lib/components/magic/animated-grid-pattern/index.ts?raw";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "animated-grid-pattern",
	title: "Animated Grid Pattern",
	description:
		"An animated grid pattern component that creates a dynamic background with moving squares.",
	category: "animation",
	badge: "new",
};

const seo: SEO = {
	title: "Animated Grid Pattern",
	description:
		"Learn how to create animated grid pattern effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Animated Grid Pattern", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "animated-grid-pattern.svelte",
			filecode: AnimatedGridPattern,
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
            └── animated-grid-pattern/
                ├── animated-grid-pattern.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "animated-grid-pattern.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	seo,
	props: [
		{
			name: "AnimatedGridPatternProps",
			desc: "Props for the AnimatedGridPattern component",
			props: [
				{
					name: "width",
					type: "number",
					default: "40",
					description: "Width of each grid square",
				},
				{
					name: "height",
					type: "number",
					default: "40",
					description: "Height of each grid square",
				},
				{
					name: "x",
					type: "number",
					default: "-1",
					description: "X offset for the pattern",
				},
				{
					name: "y",
					type: "number",
					default: "-1",
					description: "Y offset for the pattern",
				},
				{
					name: "strokeDasharray",
					type: "number",
					default: "0",
					description: "Dash array for the grid lines",
				},
				{
					name: "numSquares",
					type: "number",
					default: "50",
					description: "Number of animated squares",
				},
				{
					name: "maxOpacity",
					type: "number",
					default: "0.5",
					description: "Maximum opacity for animated squares",
				},
				{
					name: "duration",
					type: "number",
					default: "4",
					description: "Animation duration in seconds",
				},
				{
					name: "repeatDelay",
					type: "number",
					default: "0.5",
					description: "Delay between animation repeats",
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
