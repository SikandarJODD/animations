import ChartRaw from "$lib/components/spell/chart/chart.svelte?raw";
import IndexTsRaw from "$lib/components/spell/chart/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import ColorExample from "./examples/color-example.svelte";
import ColorExampleRaw from "./examples/color-example.svelte?raw";
import RevealExample from "./examples/reveal-example.svelte";
import RevealExampleRaw from "./examples/reveal-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "chart",
	title: "Chart",
	description: "Interactive line chart with cursor-tracked tooltip, snap-to-point hover, and X-axis labels.",
	category: "spell",
};

const seo: SEO = {
	title: "Chart",
	description:
		"Learn how to use the Chart spell component in Svelte, including custom colors, reveal effects, and tooltip formatting.",
	keywords: ["Svelte", "Chart", "Spell", "Svelte Animations", "Line Chart", "Data Visualization"],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "chart.svelte",
			filecode: ChartRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTsRaw,
			lang: "typescript",
		},
	],
	folderStructure: `src/
└── lib/
    └── components/
        └── spell/
            └── chart/
                ├── chart.svelte
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
			name: "Custom Color",
			description: "Pass any hex color to `color` — it applies to the line, dot, and tooltip indicator.",
			preview: ColorExample,
			code: {
				filename: "color-example.svelte",
				filecode: ColorExampleRaw,
				lang: "svelte",
				highlight: [7],
			},
		},
		{
			name: "Reveal",
			description:
				"Move the cursor across the chart — the line reveals in color from left to the active point, staying gray beyond it.",
			preview: RevealExample,
			code: {
				filename: "reveal-example.svelte",
				filecode: RevealExampleRaw,
				lang: "svelte",
				highlight: [8],
			},
		},
	],
	seo,
	props: [
		{
			props: [
				{
					name: "data",
					type: "number[]",
					required: true,
					description: "Numeric values to plot — one point per entry.",
				},
				{
					name: "labels",
					type: "string[]",
					description: "Optional label for each data point, shown in the tooltip header and X-axis ticks.",
				},
				{
					name: "name",
					type: "string",
					description: "Series name shown next to the indicator dot in the tooltip.",
				},
				{
					name: "color",
					type: "string",
					default: '"#0090FD"',
					description: "Line, dot, and fill accent color as a hex string.",
				},
				{
					name: "width",
					type: "number",
					default: "640",
					description: "Maximum chart width in px. Preserves a 640:220 aspect ratio.",
				},
				{
					name: "formatValue",
					type: "(value: number, index: number) => string",
					default: "v => v.toLocaleString()",
					description: "Format the value shown in the tooltip.",
				},
				{
					name: "defaultIndex",
					type: "number",
					default: "data.length - 1",
					description: "Index of the active point on initial render.",
				},
				{
					name: "showXAxis",
					type: "boolean",
					default: "true",
					description: "Show X-axis tick labels at the bottom. Requires `labels`.",
				},
				{
					name: "tickCount",
					type: "number",
					default: "6",
					description: "Target number of X-axis ticks.",
				},
				{
					name: "reveal",
					type: "boolean",
					default: "false",
					description: "Reveal the line in color from left to the cursor; gray before it.",
				},
				{
					name: "showFill",
					type: "boolean",
					default: "true",
					description: "Show the gradient fill under the line.",
				},
				{
					name: "showDot",
					type: "boolean",
					default: "true",
					description: "Show the colored dot at the active data point.",
				},
				{
					name: "animated",
					type: "boolean",
					default: "true",
					description: "Animate cursor, dot, and tooltip transitions when the active point changes.",
				},
				{
					name: "class",
					type: "string",
					default: "",
					description: "Additional CSS classes on the root container.",
				},
			],
		},
	],
};
