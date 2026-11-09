import BlurRevealRaw from "#lib/components/spell/blur-reveal/blur-reveal.svelte?raw";
import IndexTsRaw from "#lib/components/spell/blur-reveal/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "#lib/types/structure.js";
import type { SEO } from "#lib/types/seo.js";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import SpeedExample from "./examples/speed-example.svelte";
import SpeedExampleRaw from "./examples/speed-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "blur-reveal",
	title: "Blur Reveal",
	description: "Animated text reveal with blur effect.",
	category: "spell",
};

const seo: SEO = {
	title: "Blur Reveal",
	description:
		"Learn how to use the Blur Reveal spell component in Svelte, including snippet-based text, speed-driven timing, and view-triggered animation.",
	keywords: [
		"Svelte",
		"Blur Reveal",
		"Spell",
		"Svelte Animations",
		"Text Animation",
		"Motion SV",
	],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "blur-reveal.svelte",
			filecode: BlurRevealRaw,
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
            └── blur-reveal/
                ├── blur-reveal.svelte
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
			name: "Speed",
			preview: SpeedExample,
			code: {
				filename: "speed-example.svelte",
				filecode: SpeedExampleRaw,
				lang: "svelte",
				hideLines: true,
				highlight: [2],
			},
		},
	],
	seo,
	props: [
		{
			props: [
				{
					name: "children",
					type: "Snippet",
					required: true,
					description:
						"Plain text snippet content flattened into grapheme-safe characters before animation.",
				},
				{
					name: "as",
					type: '"span" | "div" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"',
					default: '"p"',
					description: "Sets the semantic tag used for the animated root element.",
				},
				{
					name: "delay",
					type: "number",
					default: "0",
					description: "Adds a delay in seconds before the reveal sequence begins.",
				},
				{
					name: "speedReveal",
					type: "number",
					default: "1.5",
					description:
						"Higher values tighten the stagger delay between animated characters.",
				},
				{
					name: "speedSegment",
					type: "number",
					default: "0.5",
					description: "Higher values shorten the per-character reveal duration.",
				},
				{
					name: "stagger",
					type: "number",
					default: "undefined",
					description:
						"Optional direct override for the computed character stagger timing.",
				},
				{
					name: "duration",
					type: "number",
					default: "undefined",
					description:
						"Optional direct override for the computed per-character reveal duration.",
				},
				{
					name: "trigger",
					type: "boolean",
					default: "true",
					description: "Enables or disables the visible reveal state.",
				},
				{
					name: "triggerOnView",
					type: "boolean",
					default: "false",
					description: "Waits to animate until the component enters the viewport.",
				},
				{
					name: "once",
					type: "boolean",
					default: "true",
					description:
						"When using triggerOnView, controls whether the reveal runs only on first entry.",
				},
				{
					name: "letterSpacing",
					type: "string | number",
					default: "undefined",
					description: "Applies extra spacing between animated characters.",
				},
				{
					name: "onStart",
					type: "() => void",
					default: "",
					description: "Called when a new reveal cycle begins.",
				},
				{
					name: "onComplete",
					type: "() => void",
					default: "",
					description:
						"Called after the final animated unit completes the visible transition.",
				},
				{
					name: "class",
					type: "string",
					default: "''",
					description: "Custom classes applied to the animated root element.",
				},
				{
					name: "style",
					type: "string",
					default: "''",
					description: "Inline styles forwarded to the animated root element.",
				},
			],
		},
	],
};
