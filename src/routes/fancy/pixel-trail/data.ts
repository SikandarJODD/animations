import IndexTsRaw from "$lib/components/fancy/pixel-trail/index.ts?raw";
import PixelDotSvelteRaw from "$lib/components/fancy/pixel-trail/pixel-dot.svelte?raw";
import PixelTrailSvelteRaw from "$lib/components/fancy/pixel-trail/pixel-trail.svelte?raw";

import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "pixel-trail",
	title: "Pixel Trail",
	description: "A pixelated trail effect that recolors grid pixels as you move your cursor.",
	category: "fancy",
};

const seo: SEO = {
	title: "Pixel Trail",
	description: "A pixelated trail effect that recolors grid pixels as you move your cursor.",
	keywords: ["Svelte", "Pixel Trail", "Fancy"],
};

const installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{ filename: "index.ts", filecode: IndexTsRaw, lang: "typescript", isExpand: true, },
		{ filename: "pixel-dot.svelte", filecode: PixelDotSvelteRaw, lang: "svelte", },
		{ filename: "pixel-trail.svelte", filecode: PixelTrailSvelteRaw, lang: "svelte", }
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
