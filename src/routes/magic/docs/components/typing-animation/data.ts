import Raw from "$lib/components/magic/typing-animation/typing-animation.svelte?raw";
import IndexTs from "$lib/components/magic/typing-animation/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import Example1 from "./examples/cursor-blinking.svelte";
import Example1Raw from "./examples/cursor-blinking.svelte?raw";
import Example2 from "./examples/cursor-style.svelte";
import Example2Raw from "./examples/cursor-style.svelte?raw";
import Example3 from "./examples/single-play.svelte";
import Example3Raw from "./examples/single-play.svelte?raw";
import Example4 from "./examples/typing-animation-custom-speed.svelte";
import Example4Raw from "./examples/typing-animation-custom-speed.svelte?raw";
import Example5 from "./examples/typing-animation-multiple-words-with-logo.svelte";
import Example5Raw from "./examples/typing-animation-multiple-words-with-logo.svelte?raw";
import Example6 from "./examples/typing-animation-start-on-view.svelte";
import Example6Raw from "./examples/typing-animation-start-on-view.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "typing-animation",
	title: "Typing Animation",
	description:
		"A customizable typing animation component with support for multiple words, cursor styles, and animation controls.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [
	{
		name: "Cursor Blinking",
		preview: Example1,
		code: {
			filename: "cursor-blinking.svelte",
			filecode: Example1Raw,
			lang: "svelte",
		},
	},
	{
		name: "Cursor Style",
		preview: Example2,
		code: {
			filename: "cursor-style.svelte",
			filecode: Example2Raw,
			lang: "svelte",
		},
	},
	{
		name: "Single Play",
		preview: Example3,
		code: {
			filename: "single-play.svelte",
			filecode: Example3Raw,
			lang: "svelte",
		},
	},
	{
		name: "Custom Speed",
		preview: Example4,
		code: {
			filename: "typing-animation-custom-speed.svelte",
			filecode: Example4Raw,
			lang: "svelte",
		},
	},
	{
		name: "Multiple Words with Emojis",
		preview: Example5,
		code: {
			filename: "typing-animation-multiple-words-with-logo.svelte",
			filecode: Example5Raw,
			lang: "svelte",
		},
	},
	{
		name: "Start On View",
		preview: Example6,
		code: {
			filename: "typing-animation-start-on-view.svelte",
			filecode: Example6Raw,
			lang: "svelte",
		},
	},
];

const seo: SEO = {
	title: "Typing Animation",
	description:
		"Learn how to create typing animation effects in Svelte using the Svelte 5 Animations library with customizable cursor styles and animation controls.",
	keywords: [
		"Svelte",
		"Typing Animation",
		"Svelte 5 Animations",
		"Animation",
		"Web Design",
		"Text Animation",
		"Typewriter Effect",
	],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: ["motion-sv", "runed"],
	installCode: [
		{
			filename: "typing-animation.svelte",
			filecode: Raw,
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
            └── typing-animation/
                ├── typing-animation.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "typing-animation.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "TypingAnimation",
			desc: "A versatile typing animation component with support for single text, multiple words, cursor customization, and animation controls.",
			props: [
				{
					name: "content",
					type: "string",
					default: "undefined",
					description: "Single text string to type (use this OR words)",
				},
				{
					name: "words",
					type: "string[]",
					default: "undefined",
					description: "Array of words to cycle through (use this OR content)",
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
				{
					name: "duration",
					type: "number",
					default: "100",
					description: "Default duration for typing speed (ms per character)",
				},
				{
					name: "typeSpeed",
					type: "number",
					default: "duration",
					description: "Speed for typing characters (ms per character)",
				},
				{
					name: "deleteSpeed",
					type: "number",
					default: "typeSpeed / 2",
					description: "Speed for deleting characters (ms per character)",
				},
				{
					name: "delay",
					type: "number",
					default: "0",
					description: "Initial delay before animation starts (ms)",
				},
				{
					name: "pauseDelay",
					type: "number",
					default: "1000",
					description: "Delay between typing and deleting (ms)",
				},
				{
					name: "loop",
					type: "boolean",
					default: "false",
					description: "Whether to loop the animation continuously",
				},
				{
					name: "startOnView",
					type: "boolean",
					default: "true",
					description: "Start animation when element enters viewport",
				},
				{
					name: "showCursor",
					type: "boolean",
					default: "true",
					description: "Show the typing cursor",
				},
				{
					name: "blinkCursor",
					type: "boolean",
					default: "true",
					description: "Make the cursor blink during pause",
				},
				{
					name: "cursorStyle",
					type: "'line' | 'block' | 'underscore'",
					default: "'line'",
					description: "Style of the cursor ('line': |, 'block': ▌, 'underscore': _)",
				},
			],
		},
	],
	installBlock,
};
