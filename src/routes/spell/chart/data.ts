import ChartRaw from "$lib/components/spell/chart/chart.svelte?raw";
import IndexTsRaw from "$lib/components/spell/chart/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import RevealExample from "./examples/reveal-example.svelte";
import RevealExampleRaw from "./examples/reveal-example.svelte?raw";
import FormatExample from "./examples/format-example.svelte";
import FormatExampleRaw from "./examples/format-example.svelte?raw";
import ColorExample from "./examples/color-example.svelte";
import ColorExampleRaw from "./examples/color-example.svelte?raw";
import StaticExample from "./examples/static-example.svelte";
import StaticExampleRaw from "./examples/static-example.svelte?raw";

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
			name: "Reveal effect",
			description:
				"Pass `reveal` to gray-out the line until the cursor passes over it — useful for decorative or marketing charts.",
			preview: RevealExample,
			code: {
				filename: "reveal-example.svelte",
				filecode: RevealExampleRaw,
				lang: "svelte",
				highlight: [42, 43, 44, 45, 46, 47, 48],
			},
		},
		{
			name: "Custom tooltip format",
			description:
				"`formatValue` receives the value and its index, so you can pair the data with labels.",
			preview: FormatExample,
			code: {
				filename: "format-example.svelte",
				filecode: FormatExampleRaw,
				lang: "svelte",
				highlight: [33, 34, 35, 36, 37, 38, 39],
			},
		},
		{
			name: "Custom color",
			description:
				"Pass any hex string via `color`. The line, dot, and gradient fill all derive from it.",
			preview: ColorExample,
			code: {
				filename: "color-example.svelte",
				filecode: ColorExampleRaw,
				lang: "svelte",
				highlight: [62],
			},
		},
		{
			name: "Without animation",
			description:
				"Set `animated={false}` to make the cursor, dot, and tooltip jump to the active point instantly with no transition.",
			preview: StaticExample,
			code: {
				filename: "static-example.svelte",
				filecode: StaticExampleRaw,
				lang: "svelte",
				highlight: [63],
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
