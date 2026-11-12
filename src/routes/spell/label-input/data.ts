import LabelInputRaw from "#lib/components/spell/label-input/label-input.svelte?raw";
import IndexTsRaw from "#lib/components/spell/label-input/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "#lib/types/structure.js";
import type { SEO } from "#lib/types/seo.js";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import PasswordToggleExample from "./examples/password-toggle-example.svelte";
import PasswordToggleExampleRaw from "./examples/password-toggle-example.svelte?raw";
import RingColorExample from "./examples/ring-color-example.svelte";
import RingColorExampleRaw from "./examples/ring-color-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "label-input",
	title: "Label Input",
	description: "Input field with floating label and password visibility toggle.",
	category: "spell",
};

const seo: SEO = {
	title: "Label Input",
	description:
		"Learn how to use the Label Input spell component in Svelte, including floating labels, password toggle support, ring-color variants, and bound values.",
	keywords: [
		"Svelte",
		"Label Input",
		"Spell",
		"Svelte Animations",
		"Floating Label",
		"tailwind-variants",
	],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "label-input.svelte",
			filecode: LabelInputRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTsRaw,
			lang: "typescript",
		},
	],
	packages: ["tailwind-variants", "@lucide/svelte"],
	folderStructure: `src/
└── lib/
    └── components/
        └── spell/
            └── label-input/
                ├── label-input.svelte
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
			name: "Password Toggle",
			preview: PasswordToggleExample,
			code: {
				filename: "password-toggle-example.svelte",
				filecode: PasswordToggleExampleRaw,
				lang: "svelte",
			},
		},
		{
			name: "Ring Color",
			preview: RingColorExample,
			code: {
				filename: "ring-color-example.svelte",
				filecode: RingColorExampleRaw,
				lang: "svelte",
				highlight: [2],
			},
		},
	],
	seo,
	props: [
		{
			props: [
				{
					name: "type",
					type: '"text" | "email" | "password" | "search" | "tel" | "url" | "number" | "hidden"',
					default: '"text"',
					description:
						"Controls the input type and enables the password visibility toggle when set to `password`.",
				},
				{
					name: "label",
					type: "string",
					default: '""',
					description: "The floating label text rendered inside the field container.",
				},
				{
					name: "ringColor",
					type: "RingColor | undefined",
					default: '"muted"',
					description: "Selects the focus ring color variant for the input.",
				},
				{
					name: "value",
					type: "string | number | undefined",
					default: "undefined",
					description: "Controlled field value. Supports `bind:value`.",
				},
				{
					name: "placeholder",
					type: "string | undefined",
					default: '""',
					description:
						"Hidden by default and revealed during focus to avoid competing with the label.",
				},
				{
					name: "containerClassName",
					type: "string | undefined",
					default: "undefined",
					description: "Custom classes applied to the outer wrapper element.",
				},
				{
					name: "inputClassName",
					type: "string | undefined",
					default: "undefined",
					description: "Custom classes applied directly to the input element.",
				},
				{
					name: "disabled",
					type: "boolean | undefined",
					default: "false",
					description: "Disables typing, focus styles, and the password toggle button.",
				},
				{
					name: "class",
					type: "ClassValue",
					default: "undefined",
					description: "Custom classes merged onto the wrapper root.",
				},
			],
		},
	],
};
