import IndexTsRaw from "$lib/components/fancy/pixelate-svg-filter/index.ts?raw";
import PixelateSvgFilterSvelteRaw from "$lib/components/fancy/pixelate-svg-filter/pixelate-svg-filter.svelte?raw";

import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import type { Example } from "$lib/types/examples";
import VideoPixelateDemo from "./examples/video-pixelate-demo.svelte";
import VideoPixelateDemoRaw from "./examples/video-pixelate-demo.svelte?raw";
import ImagePixelatedDemo from "./examples/image-pixelated-demo.svelte";

export const meta: ComponentMeta = {
	id: "pixelate-svg-filter",
	title: "Pixelate Svg Filter",
	description: "A filter component that applies a pixelation effect with an SVG filter. Safari is not supported.",
	category: "fancy",
};

const seo: SEO = {
	title: "Pixelate Svg Filter",
	description: "A filter component that applies a pixelation effect with an SVG filter. Safari is not supported.",
	keywords: ["Svelte", "Pixelate Svg Filter", "Fancy"],
};

const installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{ filename: "index.ts", filecode: IndexTsRaw, lang: "typescript", isExpand: true, },
		{ filename: "pixelate-svg-filter.svelte", filecode: PixelateSvgFilterSvelteRaw, lang: "svelte", }
	],
	folderStructure: ""
};

const examples: Example[] = [
	{
		name: "Video Pixelate Demo",
		preview: VideoPixelateDemo,
		code: {
			filename: "video-pixelate-demo.svelte",
			filecode: VideoPixelateDemoRaw,
			lang: "svelte",
			hideLines: true,
		}
	},
	{
		name: "Image Pixelate Demo",
		preview: ImagePixelatedDemo,
		code: {
			filename: "image-pixelated-demo.svelte",
			filecode: "",
			lang: "svelte",
			hideLines: true,
		}
	}
]

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
	examples,
	seo,
	props: [],
};
