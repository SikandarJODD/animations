import WordRotateRaw from "$lib/components/magic/word-rotate/word-rotate.svelte?raw";
import IndexTs from "$lib/components/magic/word-rotate/index.ts?raw";

import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "word-rotate",
	title: "Word Rotate",
	description: "A vertical rotation of words",
	category: "animation",
	badge: "new",
};

const seo: SEO = {
	title: "Word Rotate",
	description:
		"Learn how to create Word Rotate effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Word Rotate", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "word-rotate.svelte",
			filecode: WordRotateRaw,
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
            └── word-rotate/
                ├── word-rotate.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "word-rotate.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	seo,
	props: [
		{
			name: "WordRotate",
			desc: "A component for Word Rotate.",
			props: [
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
				{
					name: "words",
					type: "string[]",
					default: "required",
					description: "Array of words to rotate through",
				},
				{
					name: "duration",
					type: "number",
					default: "2500",
					description: "Duration between word changes in milliseconds",
				},
				{
					name: "motionProps",
					type: "MotionProps",
					default:
						"{ initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 50 }, transition: { duration: 0.25, ease: 'easeOut' } }",
					description: "Motion animation properties",
				},
			],
		},
	],
	installBlock,
};
