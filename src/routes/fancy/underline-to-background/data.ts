import IndexTsRaw from "$lib/components/fancy/underline-to-background/index.ts?raw";
import UnderlineToBackgroundRaw from "$lib/components/fancy/underline-to-background/underline-to-background.svelte?raw";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewRaw from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "underline-to-background",
	title: "Underline To Background",
	description:
		"Expand an underline into a full background fill while transitioning the text color.",
	category: "fancy",
	badge: "new",
};

const seo: SEO = {
	title: "Underline To Background",
	description:
		"Learn how to use the Underline To Background Fancy component in Svelte for underline-to-fill hover transitions.",
	keywords: [
		"Svelte",
		"Underline To Background",
		"Fancy UI",
		"Svelte Fancy Components",
		"motion-sv",
	],
};

const installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "underline-to-background.svelte",
			filecode: UnderlineToBackgroundRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTsRaw,
			lang: "typescript",
		},
	],
	folderStructure: `src/
+-- lib/
    +-- components/
        +-- fancy/
            +-- underline-to-background/
                |-- underline-to-background.svelte
                +-- index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	seo,
	installBlock,
	preview: Preview,
	previewClass: 'p-0',
	previewCode:{
		filename: "preview.svelte",
		filecode: PreviewRaw,
		lang: "svelte",
	}
};
