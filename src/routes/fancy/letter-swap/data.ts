import IndexTsRaw from "$lib/components/fancy/letter-swap/index.ts?raw";
import LetterSwapRaw from "$lib/components/fancy/letter-swap/letter-swap.svelte?raw";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";

export const meta: ComponentMeta = {
	id: "letter-swap",
	title: "Letter Swap",
	description: "Slide each letter into a second copy on hover with directional staggered motion.",
	category: "fancy",
	badge: "new",
};

const seo: SEO = {
	title: "Letter Swap",
	description:
		"Learn how to use the Letter Swap Fancy component in Svelte for staggered hover-driven letter transitions.",
	keywords: ["Svelte", "Letter Swap", "Fancy UI", "Svelte Fancy Components", "motion-sv"],
};

const installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "letter-swap.svelte",
			filecode: LetterSwapRaw,
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
            +-- letter-swap/
                |-- letter-swap.svelte
                +-- index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	seo,
	installBlock,
};
