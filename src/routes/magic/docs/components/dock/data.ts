import DockRaw from "$lib/components/magic/dock/dock.svelte?raw";
import DockIconRaw from "$lib/components/magic/dock/dock-icon.svelte?raw";
import IndexTs from "$lib/components/magic/dock/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import DirectionExample from "./examples/direction.svelte";
import DirectionExampleRaw from "./examples/direction.svelte?raw";
import CustomMagnificationExample from "./examples/custom-magnification.svelte";
import CustomMagnificationExampleRaw from "./examples/custom-magnification.svelte?raw";
import ColoredIconsExample from "./examples/colored-icons.svelte";
import ColoredIconsExampleRaw from "./examples/colored-icons.svelte?raw";
import DisabledMagnificationExample from "./examples/disabled-magnification.svelte";
import DisabledMagnificationExampleRaw from "./examples/disabled-magnification.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "dock",
	title: "Dock",
	description:
		"A macOS-style dock component with smooth magnification animation on hover, inspired by the macOS dock.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [
	{
		name: "Direction",
		preview: DirectionExample,
		code: {
			filename: "direction.svelte",
			filecode: DirectionExampleRaw,
			lang: "svelte",
		},
	},
	{
		name: "Custom Magnification",
		preview: CustomMagnificationExample,
		code: {
			filename: "custom-magnification.svelte",
			filecode: CustomMagnificationExampleRaw,
			lang: "svelte",
		},
	},
	{
		name: "Colored Icons",
		preview: ColoredIconsExample,
		code: {
			filename: "colored-icons.svelte",
			filecode: ColoredIconsExampleRaw,
			lang: "svelte",
		},
	},
	{
		name: "Disabled Magnification",
		preview: DisabledMagnificationExample,
		code: {
			filename: "disabled-magnification.svelte",
			filecode: DisabledMagnificationExampleRaw,
			lang: "svelte",
		},
	},
];

const seo: SEO = {
	title: "Dock",
	description:
		"Learn how to create a macOS-style Dock component in Svelte with smooth magnification animation on hover using motion-sv.",
	keywords: [
		"Svelte",
		"Dock",
		"Svelte 5 Animations",
		"Animation",
		"Web Design",
		"macOS Dock",
		"Magnification",
	],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "dock.svelte",
			filecode: DockRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "dock-icon.svelte",
			filecode: DockIconRaw,
			lang: "svelte",
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
            └── dock/
                ├── dock.svelte
                ├── dock-icon.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "preview.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "Dock",
			desc: "The main dock container that provides context and handles mouse tracking for magnification effects.",
			props: [
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply.",
				},
				{
					name: "iconSize",
					type: "number",
					default: "40",
					description: "The base size of icons in pixels.",
				},
				{
					name: "iconMagnification",
					type: "number",
					default: "60",
					description: "The magnified size of icons when hovered.",
				},
				{
					name: "disableMagnification",
					type: "boolean",
					default: "false",
					description: "Disables the magnification effect on hover.",
				},
				{
					name: "iconDistance",
					type: "number",
					default: "140",
					description:
						"The distance in pixels at which magnification starts to take effect.",
				},
				{
					name: "direction",
					type: '"top" | "middle" | "bottom"',
					default: '"middle"',
					description: "The alignment direction of icons within the dock.",
				},
				{
					name: "children",
					type: "Snippet",
					default: "-",
					description: "The dock icon children to render inside the dock.",
				},
			],
		},
		{
			name: "DockIcon",
			desc: "Individual icon wrapper that responds to the dock's magnification context.",
			props: [
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply.",
				},
				{
					name: "children",
					type: "Snippet",
					default: "-",
					description: "The icon content to render inside the dock icon.",
				},
			],
		},
	],
	installBlock,
};
