import IndexTsRaw from "$lib/components/fancy/vertical-cut-reveal/index.ts?raw";
import VerticalCutRevealRaw from "$lib/components/fancy/vertical-cut-reveal/vertical-cut-reveal.svelte?raw";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";

export const meta: ComponentMeta = {
	id: "vertical-cut-reveal",
	title: "Vertical Cut Reveal",
	description: "Reveal text from vertical cuts with word, character, or line-based staggering.",
	category: "fancy",
	badge: "new",
};

const seo: SEO = {
	title: "Vertical Cut Reveal",
	description:
		"Learn how to use the Vertical Cut Reveal Fancy component in Svelte for staggered vertical text entrances across words, characters, or lines.",
	keywords: ["Svelte", "Vertical Cut Reveal", "Fancy UI", "Svelte Fancy Components", "motion-sv"],
};

const installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "vertical-cut-reveal.svelte",
			filecode: VerticalCutRevealRaw,
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
            +-- vertical-cut-reveal/
                |-- vertical-cut-reveal.svelte
                +-- index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	seo,
	installBlock,
};
