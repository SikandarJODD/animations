import IndexTsRaw from "$lib/components/fancy/scramble-hover/index.ts?raw";
import ScrambleHoverRaw from "$lib/components/fancy/scramble-hover/scramble-hover.svelte?raw";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";

export const meta: ComponentMeta = {
	id: "scramble-hover",
	title: "Scramble Hover",
	description:
		"Scramble text on hover with sequential or iterative reveals and custom character sets.",
	category: "fancy",
	badge: "new",
};

const seo: SEO = {
	title: "Scramble Hover",
	description:
		"Learn how to use the Scramble Hover Fancy component in Svelte for hover-triggered text scrambling and reveal sequences.",
	keywords: ["Svelte", "Scramble Hover", "Fancy UI", "Svelte Fancy Components", "motion-sv"],
};

const installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "scramble-hover.svelte",
			filecode: ScrambleHoverRaw,
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
            +-- scramble-hover/
                |-- scramble-hover.svelte
                +-- index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	seo,
	installBlock,
};
