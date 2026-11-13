import ShineBorderRaw from "#lib/components/magic/shine-border/shine-border.svelte?raw";
import IndexTs from "#lib/components/magic/shine-border/index.ts?raw";

import type { Example } from "#lib/types/examples.js";
import type { SEO } from "#lib/types/seo.js";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "#lib/types/structure.js";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

import ShineBorderMonotone from "./examples/shine-border-monotone.svelte";
import ShineBorderMonotoneRaw from "./examples/shine-border-monotone.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "shine-border",
	title: "ShineBorder",
	description:
		"Add an animated gradient shine to cards, buttons, and panels with the customizable Shine Border component for Svelte 5.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [
	{
		name: "Monotone",
		description: "A responsive card up to 28rem wide with a theme-aware shine border.",
		preview: ShineBorderMonotone,
		code: {
			filename: "shine-border-monotone.svelte",
			filecode: ShineBorderMonotoneRaw,
			lang: "svelte",
			isExpand: true,
			highlight: [2, 6],
		},
	},
];

const seo: SEO = {
	title: "ShineBorder",
	description:
		"Create an animated Shine Border effect in Svelte 5 with customizable colors, duration, width, and rounded corners for cards and interactive surfaces.",
	keywords: ["Svelte", "ShineBorder", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{
			filename: "shine-border.svelte",
			filecode: ShineBorderRaw,
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
            └── shine-border/
                ├── shine-border.svelte
                └── index.ts`,
	tailwind: {
		filename: "src/routes/layout.css",
		lang: "css",
		filecode: `@theme inline {
  --animate-shine: shine var(--duration) infinite linear;

  @keyframes shine {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    to {
      background-position: 0% 0%;
    }
  }
}`,
		highlight: [2, [4, 14]],
	},
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "shine-border.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	usage: {
		code: {
			filename: "usage.svelte",
			filecode: `<script lang="ts">
	import { ShineBorder } from "#lib/components/magic/shine-border/index.js";
</script>

<div class="relative overflow-hidden rounded-xl border p-8">
	Shine border
	<ShineBorder />
</div>`,
			lang: "svelte",
		},
	},
	examples,
	seo,
	props: [
		{
			name: "Shine Border",
			desc: "A component for ShineBorder.",
			props: [
				{
					name: "class",
					type: "ClassValue",
					default: '""',
					description: "Additional CSS classes to apply",
				},
				{
					name: "borderWidth",
					type: "number",
					default: "2",
					description: "Width of the border",
				},
				{
					name: "duration",
					type: "number",
					default: "300",
					description: "Duration of the shine animation in milliseconds",
				},
				{
					name: "shineColor",
					type: "string | string[]",
					default: '""',
					description: "Color(s) of the shine effect",
				},
			],
		},
	],
	installBlock,
};
