import PointerRaw from "#lib/components/magic/pointer/pointer.svelte?raw";
import IndexTs from "#lib/components/magic/pointer/index.ts?raw";

import type { Example } from "#lib/types/examples.js";
import type { SEO } from "#lib/types/seo.js";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "#lib/types/structure.js";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "pointer",
	title: "Pointer",
	description: "A description for Pointer component.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [];

const seo: SEO = {
	title: "Pointer",
	description:
		"Learn how to create Pointer effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Pointer", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: ["motion-sv", "runed"],
	installCode: [
		{
			filename: "pointer.svelte",
			filecode: PointerRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTs,
			lang: "typescript",
		},
	],
	folderStructure: `src/
└── lib/
    └── components/
        └── magic/
            └── pointer/
                ├── pointer.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "pointer.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	usage: {
		code: {
			filename: "usage.svelte",
			filecode: `<script lang="ts">
	import { Pointer } from "#lib/components/magic/pointer/index.js";
</script>

<div class="relative h-48 rounded-xl border p-8">
	Move your pointer here
	<Pointer />
</div>`,
			lang: "svelte",
		},
	},
	examples,
	seo,
	props: [
		{
			name: "Pointer",
			desc: "A component for Pointer.",
			props: [
				{
					name: "class",
					type: "ClassValue",
					default: '""',
					description: "Additional CSS classes to apply",
				},
			],
		},
	],
	installBlock,
};
