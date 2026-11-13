import TypingAnimationInline from "./examples/typing-animation-inline.svelte";
import TypingAnimationInlineRaw from "./examples/typing-animation-inline.svelte?raw";
import TypingAnimationCommand from "./examples/typing-animation-command.svelte";
import TypingAnimationCommandRaw from "./examples/typing-animation-command.svelte?raw";
import Raw from "#lib/components/magic/typing-animation/typing-animation.svelte?raw";
import IndexTs from "#lib/components/magic/typing-animation/index.ts?raw";

import type { Example } from "#lib/types/examples.js";
import type { SEO } from "#lib/types/seo.js";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "#lib/types/structure.js";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import CursorBlinking from "./examples/cursor-blinking.svelte";
import CursorBlinkingRaw from "./examples/cursor-blinking.svelte?raw";
import CursorStyle from "./examples/cursor-style.svelte";
import CursorStyleRaw from "./examples/cursor-style.svelte?raw";
import SinglePlay from "./examples/single-play.svelte";
import SinglePlayRaw from "./examples/single-play.svelte?raw";
import CustomSpeed from "./examples/typing-animation-custom-speed.svelte";
import CustomSpeedRaw from "./examples/typing-animation-custom-speed.svelte?raw";
import MultipleWords from "./examples/typing-animation-multiple-words-with-logo.svelte";
import MultipleWordsRaw from "./examples/typing-animation-multiple-words-with-logo.svelte?raw";
import StartOnView from "./examples/typing-animation-start-on-view.svelte";
import StartOnViewRaw from "./examples/typing-animation-start-on-view.svelte?raw";

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
		name: "cursor blinking",
		description: "Compare a blinking cursor with a steady cursor.",
		preview: CursorBlinking,
		code: { filename: "cursor-blinking.svelte", filecode: CursorBlinkingRaw, lang: "svelte" },
	},
	{
		name: "cursor styles",
		description: "Compare line, block, and underscore cursors at the same text size.",
		preview: CursorStyle,
		code: { filename: "cursor-style.svelte", filecode: CursorStyleRaw, lang: "svelte" },
	},
	{
		name: "single play",
		description: "Cycle through three words once and keep the last word visible.",
		preview: SinglePlay,
		code: { filename: "single-play.svelte", filecode: SinglePlayRaw, lang: "svelte" },
	},
	{
		name: "custom speed",
		description: "Type quickly and delete slowly with separate speed controls.",
		preview: CustomSpeed,
		code: {
			filename: "typing-animation-custom-speed.svelte",
			filecode: CustomSpeedRaw,
			lang: "svelte",
		},
	},
	{
		name: "multiple words",
		description: "Rotate through a short list of words without extra decoration.",
		preview: MultipleWords,
		code: {
			filename: "typing-animation-multiple-words-with-logo.svelte",
			filecode: MultipleWordsRaw,
			lang: "svelte",
		},
	},
	{
		name: "start on view",
		description: "Type a single line when it enters the viewport.",
		preview: StartOnView,
		code: {
			filename: "typing-animation-start-on-view.svelte",
			filecode: StartOnViewRaw,
			lang: "svelte",
		},
	},
	{
		name: "command line",
		description: "Type an installation command once with a block cursor.",
		preview: TypingAnimationCommand,
		code: {
			filename: "typing-animation-command.svelte",
			filecode: TypingAnimationCommandRaw,
			lang: "svelte",
		},
	},
	{
		name: "inline rotation",
		description: "Keep a sentence still while the final words rotate.",
		preview: TypingAnimationInline,
		code: {
			filename: "typing-animation-inline.svelte",
			filecode: TypingAnimationInlineRaw,
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
	usage: {
		code: {
			filename: "usage.svelte",
			filecode: `<script lang="ts">
	import { TypingAnimation } from "#lib/components/magic/typing-animation/index.js";
</script>

<TypingAnimation content="hello, svelte." class="text-2xl leading-relaxed font-normal tracking-normal" />`,
			lang: "svelte",
		},
	},
	examples,
	seo,
	props: [
		{
			name: "Typing Animation",
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
					type: "ClassValue",
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
