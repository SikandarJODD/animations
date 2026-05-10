import RandomLetterSwapPingPongRaw from "$lib/components/fancy/random-letter-swap-ping-pong/random-letter-swap-ping-pong.svelte?raw";
import IndexPingPongRaw from "$lib/components/fancy/random-letter-swap-ping-pong/index.ts?raw";
import IndexTsRaw from "$lib/components/fancy/random-letter-swap/index.ts?raw";
import RandomLetterSwapRaw from "$lib/components/fancy/random-letter-swap/random-letter-swap.svelte?raw";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewRaw from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "random-letter-swap",
	title: "Random Letter Swap",
	description: "A text component that randomly swaps the letters vertically on hover.",
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
	preview: Preview,
	previewCode: {
		filename: "preview.svelte",
		filecode: PreviewRaw,
		lang: "svelte",
	},
};

export let randomLetterSwapInstallation: InstallComponentDocs = {
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

export let randomLetterSwapPingPongInstallation: InstallComponentDocs = {
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
			filecode: IndexPingPongRaw,
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
