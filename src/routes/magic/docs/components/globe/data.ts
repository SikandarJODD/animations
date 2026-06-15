import GlobeSvelteRaw from "$lib/components/magic/globe/globe.svelte?raw";
import IndexTsRaw from "$lib/components/magic/globe/index.ts?raw";

import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "globe",
	title: "Globe",
	description: "TODO: document Globe.",
	category: "magic",
};

const seo: SEO = {
	title: "Globe",
	description: "TODO: add an SEO description for Globe.",
	keywords: ["Svelte", "Globe", "Magic"],
	titleTemplate: "%s | Svelte Magic UI",
};

const installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{ filename: "globe.svelte", filecode: GlobeSvelteRaw, lang: "svelte", isExpand: true, },
		{ filename: "index.ts", filecode: IndexTsRaw, lang: "typescript", }
	],
	folderStructure: "src/\n`-- lib/\n    `-- components/\n        `-- magic/\n            `-- globe/\n                |-- globe.svelte\n                `-- index.ts",
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
