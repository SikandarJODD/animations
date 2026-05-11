import IndexTsRaw from "$lib/components/fancy/text-highlighter/index.ts?raw";
import TextHighlighterRaw from "$lib/components/fancy/text-highlighter/text-highlighter.svelte?raw";
import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import DirectionBasedHighlightExample from "./examples/direction-based-highlight-example.svelte";
import DirectionBasedHighlightExampleRaw from "./examples/direction-based-highlight-example.svelte?raw";
import HoverExample from "./examples/hover.svelte";
import HoverExampleRaw from "./examples/hover.svelte?raw";
import Preview from "./examples/preview.svelte";
import PreviewRaw from "./examples/preview.svelte?raw";
import ProgramticControlExample from "./examples/programtic-control.svelte";
import ProgramticControlExampleRaw from "./examples/programtic-control.svelte?raw";

export const meta: ComponentMeta = {
	id: "text-highlighter",
	title: "Text Highlighter",
	description: "Sweep a highlight background across inline text on hover, in view, or on demand.",
	category: "fancy",
	badge: "new",
};

const seo: SEO = {
	title: "Text Highlighter",
	description:
		"Learn how to use the Text Highlighter Fancy component in Svelte for animated inline emphasis triggered by hover, viewport entry, or imperative calls.",
	keywords: ["Svelte", "Text Highlighter", "Fancy UI", "Svelte Fancy Components", "motion-sv"],
};

const installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "text-highlighter.svelte",
			filecode: TextHighlighterRaw,
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
+-- lib/
    +-- components/
        +-- fancy/
            +-- text-highlighter/
				|-- text-highlighter.svelte
                +-- index.ts`,
};

const examples: Example[] = [
	{
		name: "Direction Based Highlight",
		preview: DirectionBasedHighlightExample,
		previewClass: "p-0",
		code: {
			filename: "direction-based-highlight-example.svelte",
			filecode: DirectionBasedHighlightExampleRaw,
			lang: "svelte",
			isExpand: true,
		},
	},
	{
		name: "Programtic Control",
		preview: ProgramticControlExample,
		previewClass: "p-0",
		code: {
			filename: "programtic-control.svelte",
			filecode: ProgramticControlExampleRaw,
			lang: "svelte",
			isExpand: true,
		},
	},
	{
		name: "Hover",
		preview: HoverExample,
		previewClass: "p-0",
		code: {
			filename: "hover.svelte",
			filecode: HoverExampleRaw,
			lang: "svelte",
			isExpand: true,
		},
	},
];

export const data: ComponentDoc = {
	...meta,
	seo,
	installBlock,
	preview: Preview,
	previewClass: "p-0",
	previewCode: {
		filename: "preview.svelte",
		filecode: PreviewRaw,
		lang: "svelte",
	},
	examples,
};
