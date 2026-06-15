import IndexTsRaw from "$lib/components/fancy/text-along-path/index.ts?raw";
import TextAlongPathRaw from "$lib/components/fancy/text-along-path/text-along-path.svelte?raw";
import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import AutoExample from "./examples/auto-example.svelte";
import AutoExampleRaw from "./examples/auto-example.svelte?raw";
import ClosedPathExample from "./examples/closed-path-example.svelte";
import ClosedPathExampleRaw from "./examples/closed-path-example.svelte?raw";
import Preview from "./examples/preview.svelte";
import PreviewRaw from "./examples/preview.svelte?raw";
import ScrollDrivenExample from "./examples/scroll-driven-example.svelte";
import ScrollDrivenExampleRaw from "./examples/scroll-driven-example.svelte?raw";
import { FANCY_OG_IMAGES, FANCY_TITLE_TEMPLATE } from "../seo";

export const meta: ComponentMeta = {
	id: "text-along-path",
	title: "Text Along Path",
	description: "Render animated text that loops or tracks scroll progress along any SVG path.",
	category: "fancy",
	badge: "new",
};

const seo: SEO = {
	title: "Text Along Path",
	description:
		"Learn how to use the Text Along Path Fancy component in Svelte to animate SVG text along a custom path.",
	titleTemplate: FANCY_TITLE_TEMPLATE,
	images: FANCY_OG_IMAGES,
	keywords: [
		"Text Along Path",
		"Svelte Fancy Components",
		"Fancy Components",
		"Svelte 5",
		"Motion SV",
		"SVG Text Animation",
		"Path Animation",
		"Scroll Text",
	],
};

const installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "text-along-path.svelte",
			filecode: TextAlongPathRaw,
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
        └── fancy/
            └── text-along-path/
                ├── text-along-path.svelte
                └── index.ts`,
};

let examples: Example[] = [
	{
		name: "Auto Animation",
		preview: AutoExample,
		previewClass: "p-0",
		code: {
			filename: "auto-example.svelte",
			lang: "svelte",
			filecode: AutoExampleRaw,
			isExpand: true,
		},
	},
	{
		name: "Animation on closed path",
		preview: ClosedPathExample,
		code: {
			filename: "closed-path-example.svelte",
			filecode: ClosedPathExampleRaw,
			lang: "svelte",
			isExpand: true,
		},
	},
	{
		name: "Scroll-driven animation",
		previewClass: "p-1",
		preview: ScrollDrivenExample,
		code: {
			filename: "scroll-driven-example.svelte",
			lang: "svelte",
			filecode: ScrollDrivenExampleRaw,
			isExpand: true,
		},
	},
];
export const data: ComponentDoc = {
	...meta,
	seo,
	installBlock,
	preview: Preview,
	previewCode: {
		filename: "preview.svelte",
		filecode: PreviewRaw,
		lang: "svelte",
	},
	examples,
	props: [
		{
			props: [
				{
					name: "path",
					type: "string",
					required: true,
					description: "SVG path data string used as the motion track for the text.",
				},
				{
					name: "text",
					type: "string",
					required: true,
					description: "Text content rendered along the path.",
				},
				{
					name: "pathId",
					type: "string",
					default: "auto-generated",
					description: "Optional id used to link the `<path>` and `<textPath>` nodes.",
				},
				{
					name: "pathClass",
					type: "string",
					default: "undefined",
					description: "Classes applied to the underlying SVG path element.",
				},
				{
					name: "preserveAspectRatio",
					type: "PreserveAspectRatio",
					default: '"xMidYMid meet"',
					description: "SVG preserveAspectRatio value forwarded to the root element.",
				},
				{
					name: "showPath",
					type: "boolean",
					default: "false",
					description: "Displays the underlying guide path using the current text color.",
				},
				{
					name: "width",
					type: "string | number",
					default: '"100%"',
					description: "Width forwarded to the root SVG element.",
				},
				{
					name: "height",
					type: "string | number",
					default: '"100%"',
					description: "Height forwarded to the root SVG element.",
				},
				{
					name: "viewBox",
					type: "string",
					default: '"0 0 100 100"',
					description: "SVG viewBox used to size and scale the path scene.",
				},
				{
					name: "svgClass",
					type: "string",
					default: "undefined",
					description: "Classes applied to the root SVG element.",
				},
				{
					name: "textClass",
					type: "string",
					default: "undefined",
					description: "Classes applied to each `<textPath>` instance.",
				},
				{
					name: "textAnchor",
					type: '"start" | "middle" | "end"',
					default: '"start"',
					description: "Anchor alignment used for the rendered SVG text.",
				},
				{
					name: "animationType",
					type: '"auto" | "scroll"',
					default: '"auto"',
					description:
						"Uses SVG `<animate>` loops in `auto` mode or maps scroll progress to `startOffset` in `scroll` mode.",
				},
				{
					name: "duration",
					type: "number",
					default: "4",
					description: "Duration in seconds for the automatic looping animation.",
				},
				{
					name: "repeatCount",
					type: 'number | "indefinite"',
					default: '"indefinite"',
					description: "Repeat count forwarded to the SVG animate elements in auto mode.",
				},
				{
					name: "easingFunction",
					type: '{ calcMode?: string; keyTimes?: string; keySplines?: string }',
					default: "{}",
					description:
						"Optional SVG animation timing settings forwarded to both auto animation tracks.",
				},
				{
					name: "scrollContainer",
					type: "HTMLElement | null",
					default: "undefined",
					description: "Optional scroll container observed when `animationType` is `scroll`.",
				},
				{
					name: "scrollOffset",
					type: 'UseScrollOptions["offset"]',
					default: '["start end", "end end"]',
					description: "Offset pair used by `motion-sv` when tracking scroll progress.",
				},
				{
					name: "scrollTransformValues",
					type: "[number, number]",
					default: "[0, 100]",
					description: "Maps scroll progress to the text path start offset percentage range.",
				},
			],
		},
	],
};
