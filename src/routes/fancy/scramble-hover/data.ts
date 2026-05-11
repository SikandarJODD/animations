import IndexTsRaw from "$lib/components/fancy/scramble-hover/index.ts?raw";
import ScrambleHoverRaw from "$lib/components/fancy/scramble-hover/scramble-hover.svelte?raw";
import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import NewCharsExample from "./examples/new-chars-example.svelte";
import PositionExample from "./examples/position-example.svelte";
import Preview from "./examples/preview.svelte";
import PreviewRaw from "./examples/preview.svelte?raw";
import SpecialSymbolsExample from "./examples/special-symbols-example.svelte";
import NewCharsExampleRaw from "./examples/new-chars-example.svelte?raw";
import PositionExampleRaw from "./examples/position-example.svelte?raw";
import SpecialSymbolsExampleRaw from "./examples/special-symbols-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "scramble-hover",
	title: "Scramble Hover",
	description:
		"Scramble text on hover with sequential or iterative reveals and custom character sets.",
	category: "fancy",
	badge: "new",
};

const seo: SEO = {
	title: "Scramble Hover",
	description:
		"Learn how to use the Scramble Hover Fancy component in Svelte for hover-triggered text scrambling and reveal sequences.",
	keywords: ["Svelte", "Scramble Hover", "Fancy UI", "Svelte Fancy Components", "motion-sv"],
};

const installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "scramble-hover.svelte",
			filecode: ScrambleHoverRaw,
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
            └── scramble-hover/
                ├── scramble-hover.svelte
                └── index.ts`,
};

let examples: Example[] = [
	{
		name: "New Characters Example",
		preview: NewCharsExample,
		code: {
			filename: "new-chars-example.svelte",
			filecode: NewCharsExampleRaw,
			lang: "svelte",
		},
		previewClass: "p-0",
	},
	{
		name: "Special Symbols Example",
		preview: SpecialSymbolsExample,
		code: {
			filename: "special-symbols-example.svelte",
			filecode: SpecialSymbolsExampleRaw,
			lang: "svelte",
		},
		previewClass: "p-0",
	},
	{
		name: "Position Example",
		preview: PositionExample,
		code: {
			filename: "position-example.svelte",
			filecode: PositionExampleRaw,
			lang: "svelte",
		},
		previewClass: "p-0",
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
	previewClass: "p-0",
	examples,
};
