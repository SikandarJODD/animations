import GlyphMatrixSvelteRaw from "$lib/components/magic/glyph-matrix/glyph-matrix.svelte?raw";
import IndexTsRaw from "$lib/components/magic/glyph-matrix/index.ts?raw";

import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import type { Example } from "$lib/types/examples";
import LettersExample from "./examples/letters-example.svelte";
import LettersExampleRaw from "./examples/letters-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "glyph-matrix",
	title: "Glyph Matrix",
	description: "An animated grid of subtly shifting glyphs on a canvas, with a theme-aware color driven by the consumer.",
	category: "magic",
};

const seo: SEO = {
	title: "Glyph Matrix",
	description: "An animated grid of subtly shifting glyphs on a canvas, with a theme-aware color driven by the consumer.",
	keywords: ["Svelte", "Glyph Matrix", "Magic", "Canvas", "Animation", "Theme-aware", "Color", "Grid", "Subtle Shifts"],
};

const installBlock: InstallComponentDocs = {
	packages: ['runed'],
	installCode: [
		{ filename: "glyph-matrix.svelte", filecode: GlyphMatrixSvelteRaw, lang: "svelte", isExpand: true, },
		{ filename: "index.ts", filecode: IndexTsRaw, lang: "typescript", }
	],
	folderStructure: `src/
└── lib/
    └── components/
        └── magic/
            └── glyph-matrix/
                ├── glyph-matrix.svelte
                └── index.ts`,
};
let examples: Example[] = [
	{
		name: "Letters Example",
		preview: LettersExample,
		previewClass: 'p-0',
		showRetry: false,
		code: {
			filename: "letters-example.svelte",
			filecode: LettersExampleRaw,
			highlight: [8],
		}
	}
]
export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "preview.svelte",
		filecode: PreviewCodeRaw,
		lang: "svelte",
		hideLines: true,
	},
	previewClass: 'p-0',
	installBlock,
	examples,
	seo,
	props: [
		{
			name: "GlyphMatrix",
			desc: "A canvas-based glyph animation that renders a shifting matrix of characters.",
			props: [
				{
					name: "glyphs",
					type: "string",
					default: '"01·•+*/\\<>="',
					description: "Characters to randomly pick from.",
				},
				{
					name: "cellSize",
					type: "number",
					default: "14",
					description: "Cell size in pixels, which also controls the font size.",
				},
				{
					name: "mutationRate",
					type: "number",
					default: "0.04",
					description: "Probability from 0 to 1 that a cell mutates on each tick.",
				},
				{
					name: "interval",
					type: "number",
					default: "90",
					description: "Tick interval in milliseconds.",
				},
				{
					name: "fadeBottom",
					type: "number",
					default: "0.6",
					description: "Fade amount toward the bottom of the canvas.",
				},
				{
					name: "color",
					type: "string",
					default: '"#6B7280"',
					description: "Glyph color. Pass a theme-aware CSS color value from the consumer.",
				},
				{
					name: "boost",
					type: "number",
					default: "1.2",
					description: "Brightness multiplier for the glyph color. Values above 1 make the matrix brighter.",
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes applied to the canvas.",
				},
				{
					name: "style",
					type: "string",
					default: "undefined",
					description: "Inline styles forwarded to the canvas element.",
				},
			],
		},
	],
};
