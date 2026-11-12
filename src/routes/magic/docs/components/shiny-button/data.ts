import ShinyButtonRaw from "#lib/components/magic/shiny-button/shiny-button.svelte?raw";
import IndexTs from "#lib/components/magic/shiny-button/index.ts?raw";

import type { Example } from "#lib/types/examples.js";
import type { SEO } from "#lib/types/seo.js";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "#lib/types/structure.js";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "shiny-button",
	title: "Shiny Button",
	description: "A description for Shiny Button component.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [];

const seo: SEO = {
	title: "Shiny Button",
	description:
		"Learn how to create Shiny Button effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Shiny Button", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "shiny-button.svelte",
			filecode: ShinyButtonRaw,
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
            └── shiny-button/
                ├── shiny-button.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "shiny-button.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	usage: {
		code: {
			filename: "usage.svelte",
			filecode: `<script lang="ts">
	import { ShinyButton } from "#lib/components/magic/shiny-button/index.js";
</script>

<ShinyButton>Get started</ShinyButton>`,
			lang: "svelte",
		},
	},
	examples,
	seo,
	props: [
		{
			name: "Shiny Button",
			desc: "A component for Shiny Button.",
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
