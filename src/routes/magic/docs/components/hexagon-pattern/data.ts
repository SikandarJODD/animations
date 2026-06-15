import HexagonPatternSvelteRaw from "$lib/components/magic/hexagon-pattern/hexagon-pattern.svelte?raw";
import IndexTsRaw from "$lib/components/magic/hexagon-pattern/index.ts?raw";

import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "hexagon-pattern",
	title: "Hexagon Pattern",
	description: "TODO: document Hexagon Pattern.",
	category: "magic",
};

const seo: SEO = {
	title: "Hexagon Pattern",
	description: "TODO: add an SEO description for Hexagon Pattern.",
	keywords: ["Svelte", "Hexagon Pattern", "Magic"],
	titleTemplate: "%s | Svelte Magic UI",
};

const installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{
			filename: "hexagon-pattern.svelte",
			filecode: HexagonPatternSvelteRaw,
			lang: "svelte",
			isExpand: true,
		},
		{ filename: "index.ts", filecode: IndexTsRaw, lang: "typescript" },
	],
	folderStructure:
		"src/\n`-- lib/\n    `-- components/\n        `-- magic/\n            `-- hexagon-pattern/\n                |-- hexagon-pattern.svelte\n                `-- index.ts",
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
