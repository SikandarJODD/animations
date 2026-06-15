import HeroVideoDialogRaw from "$lib/components/magic/hero-video-dialog/hero-video-dialog.svelte?raw";
import IndexTs from "$lib/components/magic/hero-video-dialog/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import TopInBottomOut from "./examples/hero-video-top-in-bottom-out.svelte";
import TopInBottomOutCode from "./examples/hero-video-top-in-bottom-out.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "hero-video-dialog",
	title: "Hero Video Dialog",
	description: "A hero video dialog component.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [
	{
		name: "Top In Bottom Out",
		description: "Hero video dialog with top-in-bottom-out animation",
		preview: TopInBottomOut,
		code: {
			filename: "hero-video-top-in-bottom-out.svelte",
			filecode: TopInBottomOutCode,
			lang: "svelte",
			hideLines: true,
			highlight: [2],
		},
	},
];

const seo: SEO = {
	title: "Hero Video Dialog",
	description:
		"Learn how to create Hero Video Dialog effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Hero Video Dialog", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "hero-video-dialog.svelte",
			filecode: HeroVideoDialogRaw,
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
            └── hero-video-dialog/
                ├── hero-video-dialog.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "hero-video-dialog.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "HeroVideoDialogProps",
			desc: "Props for the HeroVideoDialog component",
			props: [
				{
					name: "animationStyle",
					type: '"from-bottom" | "from-center" | "from-top" | "from-left" | "from-right" | "fade" | "top-in-bottom-out" | "left-in-right-out"',
					default: '"from-center"',
					description: "The animation style for the dialog",
				},
				{
					name: "videoSrc",
					type: "string",
					default: "undefined",
					description: "The source URL of the video to play",
				},
				{
					name: "thumbnailSrc",
					type: "string",
					default: "undefined",
					description: "The source URL of the thumbnail image",
				},
				{
					name: "thumbnailAlt",
					type: "string",
					default: '"Video thumbnail"',
					description: "Alt text for the thumbnail image",
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description: "Additional CSS classes",
				},
			],
		},
	],
	installBlock,
};
