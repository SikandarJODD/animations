import IndexTsRaw from "$lib/components/fancy/text-along-path/index.ts?raw";
import TextAlongPathRaw from "$lib/components/fancy/text-along-path/text-along-path.svelte?raw";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";

export const meta: ComponentMeta = {
	id: "text-along-path",
	title: "Text Along Path",
	description: "Render animated text that loops or tracks scroll progress along any SVG path.",
	category: "fancy",
	badge: "new",
};

const seo: SEO = {
	title: "Text Along Path",
	description:
		"Learn how to use the Text Along Path Fancy component in Svelte to animate SVG text along a custom path.",
	keywords: ["Svelte", "Text Along Path", "Fancy UI", "Svelte Fancy Components", "motion-sv"],
};

const installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "text-along-path.svelte",
			filecode: TextAlongPathRaw,
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
            +-- text-along-path/
                |-- text-along-path.svelte
                +-- index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	seo,
	installBlock,
};
