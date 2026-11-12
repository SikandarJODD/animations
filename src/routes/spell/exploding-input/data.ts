import ExplodingInputRaw from "#lib/components/spell/exploding-input/exploding-input.svelte?raw";
import IndexTsRaw from "#lib/components/spell/exploding-input/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "#lib/types/structure.js";
import type { SEO } from "#lib/types/seo.js";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import EmojiExample from "./examples/emoji-example.svelte";
import EmojiExampleRaw from "./examples/emoji-example.svelte?raw";
import ImageExample from "./examples/image-example.svelte";
import ImageExampleRaw from "./examples/image-example.svelte?raw";
import SvelteIconExample from "./examples/svelte-icon-example.svelte";
import SvelteIconExampleRaw from "./examples/svelte-icon-example.svelte?raw";
import SvgComponentsExample from "./examples/svg-components-example.svelte";
import SvgComponentsExampleRaw from "./examples/svg-components-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "exploding-input",
	title: "Exploding Input",
	description:
		"A particle input companion that launches squares, emoji, images, or custom snippets outward from the cursor as user types.",
	category: "spell",
};

const seo: SEO = {
	title: "Exploding Input",
	description:
		"Learn how to use the Exploding Input spell component in Svelte, including default particle bursts, emoji payloads, image particles, and custom SVG snippets.",
	keywords: [
		"Svelte",
		"Exploding Input",
		"Spell",
		"Svelte Animations",
		"Input Animation",
		"Particle Input",
	],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "exploding-input.svelte",
			filecode: ExplodingInputRaw,
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
└── lib/
    └── components/
        └── spell/
            └── exploding-input/
                ├── exploding-input.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "preview.svelte",
		filecode: PreviewCodeRaw,
		lang: "svelte",
		hideLines: true,
	},
	installBlock,
	examples: [
		{
			name: "Emoji Particles",
			preview: EmojiExample,
			code: {
				filename: "emoji-example.svelte",
				filecode: EmojiExampleRaw,
				lang: "svelte",
			},
		},
		{
			name: "Image Particles",
			description:
				"Render image URLs as particle payloads so each typed character can release branded badges, avatars, or product thumbnails.",
			preview: ImageExample,
			code: {
				filename: "image-example.svelte",
				filecode: ImageExampleRaw,
				lang: "svelte",
			},
		},
		{
			name: "Custom SVG Components",
			description:
				"Pass lightweight component references into items and render them through the snippet API for fully custom particle shapes.",
			preview: SvgComponentsExample,
			code: {
				filename: "svg-components-example.svelte",
				filecode: SvgComponentsExampleRaw,
				lang: "svelte",
			},
		},
		{
			name: "Shared Svelte Icon",
			description:
				"Reuse the Svelte logo component from the shared icons folder and burst branded particles directly from the input cursor.",
			preview: SvelteIconExample,
			code: {
				filename: "svelte-icon-example.svelte",
				filecode: SvelteIconExampleRaw,
				lang: "svelte",
			},
		},
	],
	seo,
	props: [
		{
			props: [
				{
					name: "items",
					type: "T[]",
					default: "[]",
					description:
						"The particle payloads to cycle through. Leave it empty to use the built-in square fallback.",
				},
				{
					name: "children",
					type: "Snippet<[T, number]> | undefined",
					default: "undefined",
					description:
						"Optional snippet used to render each item when you want custom emoji, images, or component particles.",
				},
				{
					name: "count",
					type: "number",
					default: "1",
					description: "The number of particles spawned on each input event.",
				},
				{
					name: "direction",
					type: '{ horizontal?: "left" | "center" | "right"; vertical?: "top" | "center" | "bottom" }',
					default: '{ horizontal: "center", vertical: "top" }',
					description: "Controls the general launch direction of each burst.",
				},
				{
					name: "gravity",
					type: "number",
					default: "0.7",
					description:
						"Adjusts the simulated pull on particles, where lower values float more and higher values fall faster.",
				},
				{
					name: "duration",
					type: "number",
					default: "3",
					description: "Sets particle lifetime in seconds before each burst fades away.",
				},
				{
					name: "scale",
					type: "{ value?: number; randomize?: boolean; randomVariation?: number }",
					default: "{ value: 1, randomize: false, randomVariation: 0 }",
					description:
						"Defines the base particle scale and optional randomized size variation.",
				},
				{
					name: "rotation",
					type: "{ value?: number; animate?: boolean }",
					default: "{ value: 0, animate: false }",
					description:
						"Sets a fixed particle rotation or enables randomized spin animation.",
				},
				{
					name: "target",
					type: "HTMLInputElement | null",
					default: "null",
					description:
						"Optionally bind the effect to a specific input when the component is not nested inside a label wrapper.",
				},
				{
					name: "class",
					type: "ClassValue",
					default: "",
					description: "Custom classes merged onto the fixed overlay root element.",
				},
			],
		},
	],
};
