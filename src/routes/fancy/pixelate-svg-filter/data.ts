import IndexTsRaw from "$lib/components/fancy/pixelate-svg-filter/index.ts?raw";
import PixelateSvgFilterSvelteRaw from "$lib/components/fancy/pixelate-svg-filter/pixelate-svg-filter.svelte?raw";

import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "pixelate-svg-filter",
	title: "Pixelate Svg Filter",
	description: "TODO: document Pixelate Svg Filter.",
	category: "fancy",
};

const seo: SEO = {
	title: "Pixelate Svg Filter",
	description: "TODO: add an SEO description for Pixelate Svg Filter.",
	keywords: ["Svelte", "Pixelate Svg Filter", "Fancy"],
};

const installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{ filename: "index.ts", filecode: IndexTsRaw, lang: "typescript", isExpand: true, },
		{ filename: "pixelate-svg-filter.svelte", filecode: PixelateSvgFilterSvelteRaw, lang: "svelte", }
	],
	folderStructure: "src/\n`-- lib/\n    `-- components/\n        `-- fancy/\n            `-- pixelate-svg-filter/\n                |-- index.ts\n                `-- pixelate-svg-filter.svelte",
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
