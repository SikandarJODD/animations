import ConfettiRaw from "#lib/components/magic/confetti/confetti.svelte?raw";
import IndexTs from "#lib/components/magic/confetti/index.ts?raw";

import type { Example } from "#lib/types/examples.js";
import type { SEO } from "#lib/types/seo.js";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "#lib/types/structure.js";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "confetti",
	title: "Confetti",
	description: "A description for Confetti component.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [];

const seo: SEO = {
	title: "Confetti",
	description:
		"Learn how to create Confetti effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Confetti", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: ["@neoconfetti/svelte"],
	installCode: [
		{
			filename: "confetti.svelte",
			filecode: ConfettiRaw,
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
            └── confetti/
                ├── confetti.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "confetti.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	usage: {
		code: {
			filename: "usage.svelte",
			filecode: `<script lang="ts">
	import { ConfettiButton } from "#lib/components/magic/confetti/index.js";
</script>

<ConfettiButton>Celebrate</ConfettiButton>`,
			lang: "svelte",
		},
	},
	examples,
	seo,
	props: [
		{
			name: "Confetti",
			desc: "A component for Confetti.",
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
