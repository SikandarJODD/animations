import CharBoxRaw from "$lib/components/fancy/letter-3d-swap/charbox.svelte?raw";
import IndexTsRaw from "$lib/components/fancy/letter-3d-swap/index.ts?raw";
import Letter3dSwapRaw from "$lib/components/fancy/letter-3d-swap/letter-3d-swap.svelte?raw";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";

export const meta: ComponentMeta = {
	id: "letter-3d-swap",
	title: "Letter 3D Swap",
	description:
		"Rotate each character on hover with a 3D flip and configurable stagger direction.",
	category: "fancy",
	badge: "new",
};

const seo: SEO = {
	title: "Letter 3D Swap",
	description:
		"Learn how to use the Letter 3D Swap Fancy component in Svelte for 3D character flips with configurable stagger and rotation direction.",
	keywords: ["Svelte", "Letter 3D Swap", "Fancy UI", "Svelte Fancy Components", "motion-sv"],
};

const installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "letter-3d-swap.svelte",
			filecode: Letter3dSwapRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "charbox.svelte",
			filecode: CharBoxRaw,
			lang: "svelte",
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
            +-- letter-3d-swap/
                |-- letter-3d-swap.svelte
                |-- charbox.svelte
                +-- index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	seo,
	installBlock,
};
