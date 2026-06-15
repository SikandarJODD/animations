import HexagonPatternSvelteRaw from "$lib/components/magic/hexagon-pattern/hexagon-pattern.svelte?raw";
import IndexTsRaw from "$lib/components/magic/hexagon-pattern/index.ts?raw";

import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import type { Example } from "$lib/types/examples";
import DashedStrokeExample from "./examples/dashed-stroke-example.svelte";
import DashedStrokeExampleRaw from "./examples/dashed-stroke-example.svelte?raw";
import LinearGradientExample from "./examples/linear-gradient-example.svelte";
import LinearGradientExampleRaw from "./examples/linear-gradient-example.svelte?raw";
import SpacingExample from "./examples/spacing-example.svelte";
import SpacingExampleRaw from "./examples/spacing-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "hexagon-pattern",
	title: "Hexagon Pattern",
	description:
		"A background hexagon pattern made with SVGs, fully customizable using Tailwind CSS.",
	category: "magic",
};

const seo: SEO = {
	title: "Hexagon Pattern",
	description:
		"A background hexagon pattern made with SVGs, fully customizable using Tailwind CSS.",
	keywords: ["Svelte", "Hexagon Pattern", "Magic"],
	titleTemplate: "%s | Svelte Magic UI",
};

const installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{
			filename: "hexagon-pattern.svelte",
			filecode: HexagonPatternSvelteRaw,
			lang: "svelte",
			isExpand: true,
		},
		{ filename: "index.ts", filecode: IndexTsRaw, lang: "typescript" },
	],
	folderStructure:
		"src/\n`-- lib/\n    `-- components/\n        `-- magic/\n            `-- hexagon-pattern/\n                |-- hexagon-pattern.svelte\n                `-- index.ts",
};

const examples: Example[] = [
	{
		name: "Linear Gradient Example",
		preview: LinearGradientExample,
		code: {
			filename: "linear-gradient-example.svelte",
			filecode: LinearGradientExampleRaw,
			lang: "svelte",
		},
	},
	{
		name: "Spacing Example",
		preview: SpacingExample,
		code: {
			filename: "spacing-example.svelte",
			filecode: SpacingExampleRaw,
			lang: "svelte",
		},
	},
	{
		name: "Dashed Stroke Example",
		preview: DashedStrokeExample,
		code: {
			filename: "dashed-stroke-example.svelte",
			filecode: DashedStrokeExampleRaw,
			lang: "svelte",
		},
	},
];

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
	examples,
	seo,
	props: [
		{
			name: "HexagonPattern",
			desc: "An SVG pattern component that renders repeating hexagons with configurable spacing, orientation, stroke style, and highlighted cells.",
			props: [
				{
					name: "radius",
					type: "number",
					default: "40",
					description: "Radius of each hexagon in the generated pattern.",
				},
				{
					name: "gap",
					type: "number",
					default: "0",
					description: "Extra spacing inserted between neighboring hexagons.",
				},
				{
					name: "x",
					type: "number",
					default: "-1",
					description: "Horizontal offset for the SVG pattern origin.",
				},
				{
					name: "y",
					type: "number",
					default: "-1",
					description: "Vertical offset for the SVG pattern origin.",
				},
				{
					name: "direction",
					type: '"horizontal" | "vertical"',
					default: '"horizontal"',
					description:
						"Controls whether the hexagons use a flat-top or pointy-top orientation.",
				},
				{
					name: "strokeDasharray",
					type: "string",
					default: '"0"',
					description:
						"SVG dash pattern applied to the hexagon outlines. Use values like `4 2` for dashed strokes.",
				},
				{
					name: "hexagons",
					type: "Array<[col: number, row: number]>",
					default: "undefined",
					description: "Specific grid cells to fill on top of the repeating pattern.",
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional classes merged onto the root SVG element.",
				},
			],
		},
	],
};
