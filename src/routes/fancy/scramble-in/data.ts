import IndexTsRaw from "$lib/components/fancy/scramble-in/index.ts?raw";
import ScrambleInRaw from "$lib/components/fancy/scramble-in/scramble-in.svelte?raw";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";

export const meta: ComponentMeta = {
	id: "scramble-in",
	title: "Scramble In",
	description:
		"Animate text in by revealing real characters through a configurable scramble pass.",
	category: "fancy",
	badge: "new",
};

const seo: SEO = {
	title: "Scramble In",
	description:
		"Learn how to use the Scramble In Fancy component in Svelte for text reveals driven by progressive character scrambling.",
	keywords: ["Svelte", "Scramble In", "Fancy UI", "Svelte Fancy Components", "motion-sv"],
};

const installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "scramble-in.svelte",
			filecode: ScrambleInRaw,
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
            +-- scramble-in/
                |-- scramble-in.svelte
                +-- index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	seo,
	installBlock,
};
