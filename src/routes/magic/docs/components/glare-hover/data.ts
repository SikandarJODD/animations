import GlareHoverSvelteRaw from "$lib/components/magic/glare-hover/glare-hover.svelte?raw";
import IndexTsRaw from "$lib/components/magic/glare-hover/index.ts?raw";

import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "glare-hover",
	title: "Glare Hover",
	description: "A glare hover effect that adds a subtle shine to elements when hovered.",
	category: "magic",
};

const seo: SEO = {
	title: "Glare Hover",
	description: "A glare hover effect that adds a subtle shine to elements when hovered.",
	keywords: ["Svelte", "Glare Hover", "Magic"],
	titleTemplate: "%s | Svelte Magic UI",
};

const installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{ filename: "glare-hover.svelte", filecode: GlareHoverSvelteRaw, lang: "svelte", isExpand: true, },
		{ filename: "index.ts", filecode: IndexTsRaw, lang: "typescript", }
	],
	folderStructure: "",
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
