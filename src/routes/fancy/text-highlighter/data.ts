import IndexTsRaw from "$lib/components/fancy/text-highlighter/index.ts?raw";
import TextHighlighterRaw from "$lib/components/fancy/text-highlighter/text-highlighter.svelte?raw";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";

export const meta: ComponentMeta = {
	id: "text-highlighter",
	title: "Text Highlighter",
	description: "Sweep a highlight background across inline text on hover, in view, or on demand.",
	category: "fancy",
	badge: "new",
};

const seo: SEO = {
	title: "Text Highlighter",
	description:
		"Learn how to use the Text Highlighter Fancy component in Svelte for animated inline emphasis triggered by hover, viewport entry, or imperative calls.",
	keywords: ["Svelte", "Text Highlighter", "Fancy UI", "Svelte Fancy Components", "motion-sv"],
};

const installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "text-highlighter.svelte",
			filecode: TextHighlighterRaw,
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
            +-- text-highlighter/
                |-- text-highlighter.svelte
                +-- index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	seo,
	installBlock,
};
