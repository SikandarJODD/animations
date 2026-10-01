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
	description: "TODO: document Animated Background.",
	category: "magic",
};

const seo: SEO = {
	title: "Animated Background",
	description: "TODO: add an SEO description for Animated Background.",
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
	props: [],
};
