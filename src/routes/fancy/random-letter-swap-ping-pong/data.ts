import IndexTsRaw from "$lib/components/fancy/random-letter-swap-ping-pong/index.ts?raw";
import RandomLetterSwapPingPongRaw from "$lib/components/fancy/random-letter-swap-ping-pong/random-letter-swap-ping-pong.svelte?raw";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";

export const meta: ComponentMeta = {
	id: "random-letter-swap-ping-pong",
	title: "Random Letter Swap Ping Pong",
	description:
		"Animate randomized letter swaps on hover in and out using a persistent shuffled order.",
	category: "fancy",
	badge: "new",
};

const seo: SEO = {
	title: "Random Letter Swap Ping Pong",
	description:
		"Learn how to use the Random Letter Swap Ping Pong Fancy component in Svelte for randomized hover-in and hover-out letter transitions.",
	keywords: [
		"Svelte",
		"Random Letter Swap Ping Pong",
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
			filename: "random-letter-swap-ping-pong.svelte",
			filecode: RandomLetterSwapPingPongRaw,
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
            +-- random-letter-swap-ping-pong/
                |-- random-letter-swap-ping-pong.svelte
                +-- index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	seo,
	installBlock,
};
