import AnimatedCheckboxRaw from "#lib/components/spell/animated-checkbox/animated-checkbox.svelte?raw";
import IndexTsRaw from "#lib/components/spell/animated-checkbox/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "#lib/types/structure.js";
import type { SEO } from "#lib/types/seo.js";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import ControlledStateExample from "./examples/controlled-state-example.svelte";
import ControlledStateExampleRaw from "./examples/controlled-state-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "animated-checkbox",
	title: "Animated Checkbox",
	description: "Animated checkbox with spring transitions and strike-through text effect.",
	category: "spell",
};

const seo: SEO = {
	title: "Animated Checkbox",
	description:
		"Learn how to use the Animated Checkbox spell component in Svelte, including controlled checked state, checklist groups, and title strike-through motion.",
	keywords: [
		"Svelte",
		"Animated Checkbox",
		"Spell",
		"Svelte Animations",
		"Checkbox",
		"motion-sv",
	],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "animated-checkbox.svelte",
			filecode: AnimatedCheckboxRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTsRaw,
			lang: "typescript",
		},
	],
	packages: ["motion-sv"],
	folderStructure: `src/
└── lib/
    └── components/
        └── spell/
            └── animated-checkbox/
                ├── animated-checkbox.svelte
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
			name: "Controlled State",
			description:
				"Drive the checkbox from external state so you can sync task completion with forms, stores, or other interface logic.",
			preview: ControlledStateExample,
			code: {
				filename: "controlled-state-example.svelte",
				filecode: ControlledStateExampleRaw,
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
					name: "title",
					type: "string",
					default: '"Implement Checkbox"',
					description: "The label shown next to the animated check indicator.",
				},
				{
					name: "checked",
					type: "boolean",
					default: "false",
					description:
						"Controlled checked state. Provide this together with `onCheckedChange` for fully managed behavior.",
				},
				{
					name: "defaultChecked",
					type: "boolean",
					default: "false",
					description: "Initial checked state for uncontrolled usage.",
				},
				{
					name: "onCheckedChange",
					type: "((checked: boolean) => void) | undefined",
					default: "",
					description: "Callback fired whenever the checkbox toggles.",
				},
				{
					name: "class",
					type: "string",
					default: "",
					description: "Custom classes merged onto the clickable button root.",
				},
			],
		},
	],
};
