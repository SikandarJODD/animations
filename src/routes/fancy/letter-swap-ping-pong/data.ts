import IndexTsRaw from "$lib/components/fancy/letter-swap-ping-pong/index.ts?raw";
import LetterSwapPingPongRaw from "$lib/components/fancy/letter-swap-ping-pong/letter-swap-ping-pong.svelte?raw";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";

export const meta: ComponentMeta = {
	id: "letter-swap-ping-pong",
	title: "Letter Swap Ping Pong",
	description: "Swap letters on hover and reverse them on exit with debounced ping-pong motion.",
	category: "fancy",
	badge: "new",
};

const seo: SEO = {
	title: "Letter Swap Ping Pong",
	description:
		"Learn how to use the Letter Swap Ping Pong Fancy component in Svelte for hover-in and hover-out letter swap motion.",
	keywords: [
		"Svelte",
		"Letter Swap Ping Pong",
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
			filename: "letter-swap-ping-pong.svelte",
			filecode: LetterSwapPingPongRaw,
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
            +-- letter-swap-ping-pong/
                |-- letter-swap-ping-pong.svelte
                +-- index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	seo,
	installBlock,
};
