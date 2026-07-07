import GlyphMatrixSvelteRaw from "$lib/components/magic/glyph-matrix/glyph-matrix.svelte?raw";
import IndexTsRaw from "$lib/components/magic/glyph-matrix/index.ts?raw";

import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";

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
	examples: [],
	seo,
	props: [],
};
