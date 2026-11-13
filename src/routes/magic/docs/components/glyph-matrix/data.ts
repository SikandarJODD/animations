import GlyphMatrixWave from "./examples/glyph-matrix-wave.svelte";
import GlyphMatrixWaveRaw from "./examples/glyph-matrix-wave.svelte?raw";
import GlyphMatrixFlame from "./examples/glyph-matrix-flame.svelte";
import GlyphMatrixFlameRaw from "./examples/glyph-matrix-flame.svelte?raw";
import GlyphMatrixCellHighlight from "./examples/glyph-matrix-cell-highlight.svelte";
import GlyphMatrixCellHighlightRaw from "./examples/glyph-matrix-cell-highlight.svelte?raw";
import GlyphMatrixBinaryFocus from "./examples/glyph-matrix-binary-focus.svelte";
import GlyphMatrixBinaryFocusRaw from "./examples/glyph-matrix-binary-focus.svelte?raw";
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
		name: "Letters",
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
		name: "Cell Highlight",
		description:
			"A soft pointer spotlight brightens nearby blue glyphs and leaves a fading trail.",
		preview: GlyphMatrixCellHighlight,
		code: {
			filename: "glyph-matrix-cell-highlight.svelte",
			filecode: GlyphMatrixCellHighlightRaw,
			lang: "svelte",
		},
	},
	{
		name: "Binary Focus",
		description: "Nearby ones brighten around the pointer while zeros keep their base color.",
		preview: GlyphMatrixBinaryFocus,
		code: {
			filename: "glyph-matrix-binary-focus.svelte",
			filecode: GlyphMatrixBinaryFocusRaw,
			lang: "svelte",
		},
	},
	{
		name: "Wave Glyphs",
		description: "An aqua-blue wave with a compact spotlight that reveals nearby glyphs.",
		preview: GlyphMatrixWave,
		code: {
			filename: "glyph-matrix-wave.svelte",
			filecode: GlyphMatrixWaveRaw,
			lang: "svelte",
		},
	},
	{
		name: "Flame Glyphs",
		description: "An orange-red flame with a compact spotlight that reveals nearby glyphs.",
		preview: GlyphMatrixFlame,
		code: {
			filename: "glyph-matrix-flame.svelte",
			filecode: GlyphMatrixFlameRaw,
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
					name: "pattern",
					type: '"random" | "wave" | "flame"',
					default: '"random"',
					description:
						"Ambient glyph opacity pattern. Wave and flame patterns animate continuously unless reduced motion is enabled.",
				},
				{
					name: "hover",
					type: "boolean",
					default: "false",
					description:
						"Enable a soft pointer spotlight across nearby glyphs. Characters stay stable while their highlights fade.",
				},
				{
					name: "hoverColor",
					type: "string",
					default: "oklch(0.85 0.12 160)",
					description:
						"CSS color used for nearby highlighted glyphs. Highlights fade out after the pointer leaves.",
				},
				{
					name: "hoverRadius",
					type: "number",
					default: "70",
					description:
						"Pointer spotlight radius in CSS pixels, with a soft falloff toward its edge.",
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
