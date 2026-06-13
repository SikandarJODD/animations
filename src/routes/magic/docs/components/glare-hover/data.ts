import GlareHoverSvelteRaw from "$lib/components/magic/glare-hover/glare-hover.svelte?raw";
import IndexTsRaw from "$lib/components/magic/glare-hover/index.ts?raw";

import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "glare-hover",
	title: "Glare Hover",
	description: "TODO: document Glare Hover.",
	category: "magic",
};

const seo: SEO = {
	title: "Glare Hover",
	description: "TODO: add an SEO description for Glare Hover.",
	keywords: ["Svelte", "Glare Hover", "Magic"],
};

const installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{ filename: "glare-hover.svelte", filecode: GlareHoverSvelteRaw, lang: "svelte", isExpand: true, },
		{ filename: "index.ts", filecode: IndexTsRaw, lang: "typescript", }
	],
	folderStructure: "src/\n`-- lib/\n    `-- components/\n        `-- magic/\n            `-- glare-hover/\n                |-- glare-hover.svelte\n                `-- index.ts",
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
