import IndexTsRaw from "$lib/components/magic/noise-texture/index.ts?raw";
import NoiseTextureSvelteRaw from "$lib/components/magic/noise-texture/noise-texture.svelte?raw";

import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "noise-texture",
	title: "Noise Texture",
	description: "TODO: document Noise Texture.",
	category: "magic",
};

const seo: SEO = {
	title: "Noise Texture",
	description: "TODO: add an SEO description for Noise Texture.",
	keywords: ["Svelte", "Noise Texture", "Magic"],
};

const installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{ filename: "index.ts", filecode: IndexTsRaw, lang: "typescript", isExpand: true, },
		{ filename: "noise-texture.svelte", filecode: NoiseTextureSvelteRaw, lang: "svelte", }
	],
	folderStructure: "src/\n`-- lib/\n    `-- components/\n        `-- magic/\n            `-- noise-texture/\n                |-- index.ts\n                `-- noise-texture.svelte",
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
