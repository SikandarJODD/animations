import AnimatedBackgroundContextSvelteTsRaw from "$lib/components/magic/animated-background/animated-background-context.svelte.ts?raw";
import AnimatedBackgroundItemSvelteRaw from "$lib/components/magic/animated-background/animated-background-item.svelte?raw";
import AnimatedBackgroundSvelteRaw from "$lib/components/magic/animated-background/animated-background.svelte?raw";
import IndexTsRaw from "$lib/components/magic/animated-background/index.ts?raw";

import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import AnimatedTabsHoverExample from "./examples/animated-tabs-hover-example.svelte";
import AnimatedTabsHoverExampleRaw from "./examples/animated-tabs-hover-example.svelte?raw";
import AnimatedCardBackgroundHoverExample from "./examples/animated-card-background-hover-example.svelte";
import AnimatedCardBackgroundHoverExampleRaw from "./examples/animated-card-background-hover-example.svelte?raw";
import SegmentedControlExample from "./examples/segmented-control-example.svelte";
import SegmentedControlExampleRaw from "./examples/segmented-control-example.svelte?raw";
import type { Example } from "$lib/types/examples";

export const meta: ComponentMeta = {
	id: "animated-background",
	title: "Animated Background",
	description: "A shared animated background that smoothly moves between selected or hovered items.",
	category: "magic",
};

const seo: SEO = {
	title: "Animated Background",
	description:
		"Create smooth shared-layout background animations for tabs, cards, and segmented controls in Svelte.",
	keywords: ["Svelte", "Animated Background", "Magic"],
};

const installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{
			filename: "animated-background-context.svelte.ts",
			filecode: AnimatedBackgroundContextSvelteTsRaw,
			lang: "typescript",
			isExpand: true,
		},
		{
			filename: "animated-background-item.svelte",
			filecode: AnimatedBackgroundItemSvelteRaw,
			lang: "svelte",
		},
		{
			filename: "animated-background.svelte",
			filecode: AnimatedBackgroundSvelteRaw,
			lang: "svelte",
		},
		{ filename: "index.ts", filecode: IndexTsRaw, lang: "typescript" },
	],
	folderStructure: `src/
└── lib/
    └── components/
        └── magic/
            └── animated-background/
                ├── animated-background-context.svelte.ts
                ├── animated-background-item.svelte
                ├── animated-background.svelte
                └── index.ts`,
};

const examples: Example[] = [
	{
		name: "Hover Tabs",
		preview: AnimatedTabsHoverExample,
		code: {
			filename: "animated-tabs-hover-example.svelte",
			filecode: AnimatedTabsHoverExampleRaw,
			lang: "svelte",
		},
	},
	{
		name: "Hover Cards",
		preview: AnimatedCardBackgroundHoverExample,
		code: {
			filename: "animated-card-background-hover-example.svelte",
			filecode: AnimatedCardBackgroundHoverExampleRaw,
			lang: "svelte",
		},
	},
	{
		name: "Segmented Control",
		preview: SegmentedControlExample,
		code: {
			filename: "segmented-control-example.svelte",
			filecode: SegmentedControlExampleRaw,
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
			name: "AnimatedBackground",
			desc: "The root component that manages the active item and shared background animation.",
			props: [
				{
					name: "children",
					type: "Snippet",
					default: "-",
					description: "The animated background items to render.",
				},
				{
					name: "defaultValue",
					type: "string",
					default: "undefined",
					description: "The ID of the initially active item.",
				},
				{
					name: "onValueChange",
					type: "(newActiveId: string | null) => void",
					default: "undefined",
					description: "Called when the active item changes.",
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "CSS classes applied to the animated background element.",
				},
				{
					name: "transition",
					type: 'Options["transition"]',
					default: "undefined",
					description: "Motion transition options for the shared background.",
				},
				{
					name: "enableHover",
					type: "boolean",
					default: "false",
					description: "Activates items on hover instead of click.",
				},
			],
		},
		{
			name: "AnimatedBackgroundItem",
			desc: "An individual selectable item that participates in the shared background animation.",
			props: [
				{
					name: "data-id",
					type: "string",
					required: true,
					description: "A unique ID used to track the active item.",
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes applied to the item wrapper.",
				},
				{
					name: "children",
					type: "Snippet",
					default: "-",
					description: "The item content to render.",
				},
			],
		},
	],
};
