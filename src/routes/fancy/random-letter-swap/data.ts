import IndexTsRaw from "$lib/components/fancy/random-letter-swap/index.ts?raw";
import RandomLetterSwapRaw from "$lib/components/fancy/random-letter-swap/random-letter-swap.svelte?raw";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";

export const meta: ComponentMeta = {
	id: "random-letter-swap",
	title: "Random Letter Swap",
	description:
		"Reveal a second letter layer in a shuffled hover order for a randomized swap effect.",
	category: "fancy",
	badge: "new",
};

const seo: SEO = {
	title: "Random Letter Swap",
	description:
		"Learn how to use the Random Letter Swap Fancy component in Svelte for randomized hover-driven letter transitions.",
	keywords: [
		"Svelte",
		"Random Letter Swap",
		"Fancy UI",
		"Svelte Fancy Components",
		"motion-sv",
		"runed",
	],
};

const installBlock: InstallComponentDocs = {
	packages: ["motion-sv", "runed"],
	installCode: [
		{
			filename: "random-letter-swap.svelte",
			filecode: RandomLetterSwapRaw,
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
            +-- random-letter-swap/
                |-- random-letter-swap.svelte
                +-- index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	seo,
	installBlock,
};
