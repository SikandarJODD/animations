import FloatingContextSvelteTsRaw from "$lib/components/fancy/parallax-floating/floating-context.svelte.ts?raw";
import FloatingElementSvelteRaw from "$lib/components/fancy/parallax-floating/floating-element.svelte?raw";
import FloatingSvelteRaw from "$lib/components/fancy/parallax-floating/floating.svelte?raw";
import IndexTsRaw from "$lib/components/fancy/parallax-floating/index.ts?raw";
import UseMousePositionSvelteTsRaw from "$lib/hooks/use-mouse-position.svelte.ts?raw";

import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import BasicThreeLayer from "./examples/basic-three-layer.svelte";
import BasicThreeLayerRaw from "./examples/basic-three-layer.svelte?raw";
import DirectionComparison from "./examples/direction-comparison.svelte";
import DirectionComparisonRaw from "./examples/direction-comparison.svelte?raw";
import GroupedElements from "./examples/grouped-elements.svelte";
import GroupedElementsRaw from "./examples/grouped-elements.svelte?raw";
import MixedContent from "./examples/mixed-content.svelte";
import MixedContentRaw from "./examples/mixed-content.svelte?raw";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import SensitivityComparison from "./examples/sensitivity-comparison.svelte";
import SensitivityComparisonRaw from "./examples/sensitivity-comparison.svelte?raw";

export const meta: ComponentMeta = {
	id: "parallax-floating",
	title: "Parallax Floating",
	description: "Create layered parallax movement that responds smoothly to pointer and touch input.",
	category: "fancy",
};

const seo: SEO = {
	title: "Parallax Floating",
	description:
		"A Svelte 5 parallax component for building layered, pointer-responsive floating elements with configurable depth and motion.",
	keywords: ["Svelte", "Svelte 5", "Parallax Floating", "Motion SV", "Fancy Components"],
};

const examples: Example[] = [
	{
		name: "Basic Three-Layer Parallax",
		description: "Compare three labeled layers to see how depth changes travel distance.",
		preview: BasicThreeLayer,
		code: {
			filename: "basic-three-layer.svelte",
			filecode: BasicThreeLayerRaw,
			lang: "svelte",
			highlight: [[1, 3]],
		},
		previewClass: "p-0",
	},
	{
		name: "Sensitivity Comparison",
		description: "The same element and depth respond differently as the root sensitivity changes.",
		preview: SensitivityComparison,
		code: {
			filename: "sensitivity-comparison.svelte",
			filecode: SensitivityComparisonRaw,
			lang: "svelte",
			highlight: [[1, 3]],
		},
		previewClass: "p-0",
	},
	{
		name: "Positive and Negative Direction",
		description: "Positive depth follows pointer movement while negative depth reverses it.",
		preview: DirectionComparison,
		code: {
			filename: "direction-comparison.svelte",
			filecode: DirectionComparisonRaw,
			lang: "svelte",
			highlight: [[1, 3]],
		},
		previewClass: "p-0",
	},
	{
		name: "Mixed Content",
		description: "Place images, inline SVGs, and styled text at independent depths in one scene.",
		preview: MixedContent,
		code: {
			filename: "mixed-content.svelte",
			filecode: MixedContentRaw,
			lang: "svelte",
			highlight: [[1, 4]],
		},
		previewClass: "p-0",
	},
	{
		name: "Grouped Elements",
		description: "Group related children under one FloatingElement so they share a transform and depth.",
		preview: GroupedElements,
		code: {
			filename: "grouped-elements.svelte",
			filecode: GroupedElementsRaw,
			lang: "svelte",
			highlight: [[1, 3]],
		},
		previewClass: "p-0",
	},
];

const installBlock: InstallComponentDocs = {
	packages: ["motion-sv", "runed"],
	installCode: [
		{
			filename: "floating.svelte",
			filecode: FloatingSvelteRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "floating-element.svelte",
			filecode: FloatingElementSvelteRaw,
			lang: "svelte",
		},
		{
			filename: "floating-context.svelte.ts",
			filecode: FloatingContextSvelteTsRaw,
			lang: "typescript",
		},
		{ filename: "index.ts", filecode: IndexTsRaw, lang: "typescript" },
		{
			filename: "use-mouse-position.svelte.ts",
			filecode: UseMousePositionSvelteTsRaw,
			lang: "typescript",
		},
	],
	folderStructure: `src/
└── lib/
    ├── components/
    │   └── fancy/
    │       └── parallax-floating/
    │           ├── floating-context.svelte.ts
    │           ├── floating-element.svelte
    │           ├── floating.svelte
    │           └── index.ts
    └── hooks/
        └── use-mouse-position.svelte.ts`,
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
	previewClass: "p-0",
	installBlock,
	originalDocsUrl: "https://www.fancycomponents.dev/docs/components/image/parallax-floating",
	usage: {
		code: {
			filename: "usage.svelte",
			filecode: `<script lang="ts">
	import { Floating, FloatingElement } from "$lib/components/fancy/parallax-floating";
</script>

<Floating>
	<FloatingElement depth={0.5}>
		<div class="absolute top-1/2 left-1/4 bg-red-500"></div>
	</FloatingElement>
	<FloatingElement depth={1}>
		<div class="absolute top-1/2 left-2/4 bg-green-500"></div>
	</FloatingElement>
	<FloatingElement depth={2}>
		<div class="absolute top-1/2 left-3/4 bg-blue-500"></div>
	</FloatingElement>
</Floating>`,
			lang: "svelte",
		},
	},
	examples,
	seo,
	props: [
		{
			name: "Floating",
			desc: "The root container that tracks pointer movement and updates registered floating elements.",
			props: [
				{
					name: "children",
					type: "Snippet",
					default: "undefined",
					description: "FloatingElement children rendered inside the parallax container.",
				},
				{
					name: "sensitivity",
					type: "number",
					default: "1",
					description: "Scales the distance each element moves in response to pointer input.",
				},
				{
					name: "easingFactor",
					type: "number",
					default: "0.05",
					description: "Controls how quickly elements interpolate toward their target position.",
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description: "Classes merged onto the root parallax container.",
				},
			],
		},
		{
			name: "FloatingElement",
			desc: "A positioned layer registered with the nearest Floating root.",
			props: [
				{
					name: "children",
					type: "Snippet",
					default: "undefined",
					description: "Content rendered inside the floating layer.",
				},
				{
					name: "depth",
					type: "number",
					default: "1",
					description: "Multiplies the layer's movement to create near and far parallax depth.",
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description: "Classes merged onto the positioned floating element wrapper.",
				},
			],
		},
	],
};
