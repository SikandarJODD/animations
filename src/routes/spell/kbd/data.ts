import KbdRaw from "$lib/components/spell/keyboard-shortcut/keyboard-shortcut.svelte?raw";
import IndexTsRaw from "$lib/components/spell/keyboard-shortcut/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import LiveKeyboardExample from "./examples/live-keyboard-example.svelte";
import LiveKeyboardExampleRaw from "./examples/live-keyboard-example.svelte?raw";
import CustomDisplayExample from "./examples/custom-display-example.svelte";
import CustomDisplayExampleRaw from "./examples/custom-display-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "kbd",
	title: "Keyboard Shortcut",
	description: "Display keyboard shortcuts with proper key symbols.",
	category: "spell",
};

const seo: SEO = {
	title: "Keyboard Shortcut",
	description:
		"Learn how to use the Keyboard Shortcut spell component in Svelte, including shortcut composition, active states, and live keyboard listening.",
	keywords: ["Svelte Spell UI", "Keyboard Shortcut", "Spell", "Svelte Animations", "runed"],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "keyboard-shortcut.svelte",
			filecode: KbdRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTsRaw,
			lang: "typescript",
		},
	],
	packages: ["runed"],
	folderStructure: `src/
└── lib/
    └── components/
        └── spell/
            └── keyboard-shortcut/
                ├── keyboard-shortcut.svelte
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
		highlight: [2],
	},
	installBlock,
	examples: [
		{
			name: "Live Keyboard Listening",
			description:
				"Enable keyboard listening to highlight the keycap automatically when the matching shortcut is currently pressed.",
			preview: LiveKeyboardExample,
			code: {
				filename: "live-keyboard-example.svelte",
				filecode: LiveKeyboardExampleRaw,
				lang: "svelte",
			},
		},
		{
			name: "Custom Display with Keyboard Listener",
			preview: CustomDisplayExample,
			code: {
				filename: "custom-display-example.svelte",
				filecode: CustomDisplayExampleRaw,
				lang: "svelte",
			},
		},
	],
	seo,
	props: [
		{
			props: [
				{
					name: "keys",
					type: "(string | { display: string; key: string })[]",
					default: "[]",
					description: 'Array of key names to display. Each item can be a string or an object with display (shown text) and key (listened key). Supported: command/cmd, ctrl, alt/option, shift, enter, escape, tab, space, delete, arrow keys, or any letter/number.',
				},
				{
					name: "active",
					type: "boolean",
					default: "false",
					description: "Force the pressed state — when true, the key appears visually pressed.",
				},
				{
					name: "listenToKeyboard",
					type: "boolean",
					default: "false",
					description: "When true, shows pressed state when all specified keys are pressed simultaneously.",
				},
				{
					name: "class",
					type: "string | undefined",
					default: "''",
					description: "Additional CSS classes to apply.",
				},
			],
		},
	],
};
