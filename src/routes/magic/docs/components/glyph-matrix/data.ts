import GlyphMatrixCellHighlight from "./examples/glyph-matrix-cell-highlight.svelte";
import GlyphMatrixCellHighlightRaw from "./examples/glyph-matrix-cell-highlight.svelte?raw";
import GlyphMatrixBinaryFocus from "./examples/glyph-matrix-binary-focus.svelte";
import GlyphMatrixBinaryFocusRaw from "./examples/glyph-matrix-binary-focus.svelte?raw";
import GlyphMatrixOperatorGrid from "./examples/glyph-matrix-operator-grid.svelte";
import GlyphMatrixOperatorGridRaw from "./examples/glyph-matrix-operator-grid.svelte?raw";
import GlyphMatrixQuietBackground from "./examples/glyph-matrix-quiet-background.svelte";
import GlyphMatrixQuietBackgroundRaw from "./examples/glyph-matrix-quiet-background.svelte?raw";
import GlyphMatrixSvelteRaw from "#lib/components/magic/glyph-matrix/glyph-matrix.svelte?raw";
import IndexTsRaw from "#lib/components/magic/glyph-matrix/index.ts?raw";

import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "#lib/types/structure.js";
import type { SEO } from "#lib/types/seo.js";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import type { Example } from "#lib/types/examples.js";
import LettersExample from "./examples/letters-example.svelte";
import LettersExampleRaw from "./examples/letters-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "glyph-matrix",
	title: "Glyph Matrix",
	description:
		"An animated grid of subtly shifting glyphs on a canvas, with a theme-aware color driven by the consumer.",
	category: "magic",
};

const seo: SEO = {
	title: "Glyph Matrix",
	description:
		"An animated grid of subtly shifting glyphs on a canvas, with a theme-aware color driven by the consumer.",
	keywords: [
		"Svelte",
		"Glyph Matrix",
		"Magic",
		"Canvas",
		"Animation",
		"Theme-aware",
		"Color",
		"Grid",
		"Subtle Shifts",
	],
};

const installBlock: InstallComponentDocs = {
	packages: ["runed"],
	installCode: [
		{
			filename: "glyph-matrix.svelte",
			filecode: GlyphMatrixSvelteRaw,
			lang: "svelte",
			isExpand: true,
		},
		{ filename: "index.ts", filecode: IndexTsRaw, lang: "typescript" },
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
		name: "letters",
		preview: LettersExample,
		previewClass: "p-0",
		showRetry: false,
		code: {
			filename: "letters-example.svelte",
			filecode: LettersExampleRaw,
			highlight: [8],
		},
	},
	{
		name: "cell highlight",
		description: "Highlight the cell under the pointer without changing the other glyphs.",
		preview: GlyphMatrixCellHighlight,
		code: {
			filename: "glyph-matrix-cell-highlight.svelte",
			filecode: GlyphMatrixCellHighlightRaw,
			lang: "svelte",
		},
	},
	{
		name: "binary focus",
		description: "Only the digit 1 responds to hover; the digit 0 keeps its base color.",
		preview: GlyphMatrixBinaryFocus,
		code: {
			filename: "glyph-matrix-binary-focus.svelte",
			filecode: GlyphMatrixBinaryFocusRaw,
			lang: "svelte",
		},
	},
	{
		name: "operator grid",
		description: "Apply an orange hover accent only to plus and equals signs.",
		preview: GlyphMatrixOperatorGrid,
		code: {
			filename: "glyph-matrix-operator-grid.svelte",
			filecode: GlyphMatrixOperatorGridRaw,
			lang: "svelte",
		},
	},
	{
		name: "quiet background",
		description: "A slower matrix with larger cells and a rose hover accent.",
		preview: GlyphMatrixQuietBackground,
		code: {
			filename: "glyph-matrix-quiet-background.svelte",
			filecode: GlyphMatrixQuietBackgroundRaw,
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
	previewClass: "p-0",
	installBlock,
	examples,
	seo,
	usage: {
		code: {
			filename: "usage.svelte",
			filecode: `<script lang="ts">
	import { GlyphMatrix } from "#lib/components/magic/glyph-matrix/index.js";
</script>

<div class="h-64 overflow-hidden rounded-lg border">
	<GlyphMatrix hover hoverGlyphs="1" glyphs="01" />
</div>`,
			lang: "svelte",
		},
	},
	props: [
		{
			name: "Glyph Matrix",
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
					description:
						"Glyph color. Pass a theme-aware CSS color value from the consumer.",
				},
				{
					name: "hover",
					type: "boolean",
					default: "false",
					description:
						"Enable pointer interaction for individual cells. Hovered cells keep their glyph until the pointer leaves.",
				},
				{
					name: "hoverColor",
					type: "string",
					default: "oklch(0.85 0.12 160)",
					description:
						"CSS color used for the hovered glyph and its faint cell background.",
				},
				{
					name: "hoverGlyphs",
					type: "string | undefined",
					default: "undefined",
					description:
						"Limit hover highlights to these characters. Omit to highlight every glyph.",
				},
				{
					name: "boost",
					type: "number",
					default: "1.2",
					description:
						"Brightness multiplier for the glyph color. Values above 1 make the matrix brighter.",
				},
				{
					name: "class",
					type: "ClassValue",
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
