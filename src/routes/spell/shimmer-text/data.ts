import ShimmerTextRaw from "$lib/components/spell/shimmer-text/shimmer-text.svelte?raw";
import IndexTsRaw from "$lib/components/spell/shimmer-text/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import ColorsExample from "./examples/colors-example.svelte";
import ColorsExampleRaw from "./examples/colors-example.svelte?raw";
import TimingExample from "./examples/timing-example.svelte";
import TimingExampleRaw from "./examples/timing-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "shimmer-text",
	title: "Shimmer Text",
	description: "Text with an animated shimmer highlight that sweeps across on repeat.",
	category: "spell",
};

const seo: SEO = {
	title: "Shimmer Text",
	description:
		"Learn how to use the Shimmer Text spell component in Svelte, including color variants and custom animation timing.",
	keywords: [
		"Svelte",
		"Shimmer Text",
		"Spell",
		"Svelte Animations",
		"Text Animation",
		"Shimmer Effect",
	],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "shimmer-text.svelte",
			filecode: ShimmerTextRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTsRaw,
			lang: "typescript",
		},
	],
	packages: [],
	folderStructure: `src/
└── lib/
    └── components/
        └── spell/
            └── shimmer-text/
                ├── shimmer-text.svelte
                └── index.ts`,
};

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
	examples: [
		{
			name: "Color Variants",
			preview: ColorsExample,
			code: {
				filename: "colors-example.svelte",
				filecode: ColorsExampleRaw,
				lang: "svelte",
			},
		},
		{
			name: "Timing",
			preview: TimingExample,
			code: {
				filename: "timing-example.svelte",
				filecode: TimingExampleRaw,
				lang: "svelte",
			},
		},
	],
	seo,
	props: [
		{
			props: [
				{
					name: "children",
					type: "Snippet",
					required: true,
					description: "The text content rendered with the shimmer effect.",
				},
				{
					name: "variant",
					type: '"default" | "secondary" | "destructive" | "red" | "blue" | "green" | "yellow" | "purple" | "pink" | "orange" | "cyan" | "indigo" | "violet" | "rose" | "amber" | "lime" | "emerald" | "sky" | "slate" | "fuchsia"',
					default: '"default"',
					description: "Color variant applied to the text.",
				},
				{
					name: "duration",
					type: "number",
					default: "1.5",
					description: "Duration in seconds for one shimmer sweep to complete.",
				},
				{
					name: "delay",
					type: "number",
					default: "1.5",
					description: "Delay in seconds before the first shimmer sweep begins.",
				},
				{
					name: "repeatDelay",
					type: "number",
					default: "1.5",
					description: "Pause in seconds between each shimmer sweep repetition.",
				},
				{
					name: "class",
					type: "string",
					default: "",
					description: "Additional CSS classes applied to the shimmer span.",
				},
			],
		},
	],
};
