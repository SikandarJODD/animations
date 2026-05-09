import TiltCardRaw from "$lib/components/spell/tilt-card/tilt-card.svelte?raw";
import IndexTsRaw from "$lib/components/spell/tilt-card/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import ScaleExample from "./examples/scale-example.svelte";
import ScaleExampleRaw from "./examples/scale-example.svelte?raw";
import TiltLimitExample from "./examples/tilt-limit-example.svelte";
import TiltLimitExampleRaw from "./examples/tilt-limit-example.svelte?raw";
import PerspectiveExample from "./examples/perspective-example.svelte";
import PerspectiveExampleRaw from "./examples/perspective-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "tilt-card",
	title: "Tilt Card",
	description:
		"A cursor-reactive card wrapper with configurable tilt depth, hover scale, perspective, and optional spotlight.",
	category: "spell",
};

const seo: SEO = {
	title: "Tilt Card",
	description:
		"Learn how to use the Tilt Card spell component in Svelte, including scale, tilt limit, perspective, spotlight, and gravitate or evade behavior.",
	keywords: [
		"Svelte Spell UI",
		"Tilt Card",
		"Svelte Hover Card",
		"3D Card Effect",
		"Svelte Interaction",
	],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "tilt-card.svelte",
			filecode: TiltCardRaw,
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
            └── tilt-card/
                ├── tilt-card.svelte
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
	seo,
	props: [
		{
			props: [
				{
					name: "tiltLimit",
					type: "number",
					default: "15",
					description: "Sets the maximum rotation angle in degrees on both axes.",
				},
				{
					name: "scale",
					type: "number",
					default: "1.05",
					description: "Controls how much the card scales up while hovered.",
				},
				{
					name: "perspective",
					type: "number",
					default: "1200",
					description: "Sets the CSS perspective distance used for the 3D depth effect.",
				},
				{
					name: "effect",
					type: '"gravitate" | "evade"',
					default: '"evade"',
					description:
						"Determines whether the card tilts away from the cursor or follows it.",
				},
				{
					name: "spotlight",
					type: "boolean",
					default: "true",
					description:
						"Toggles the radial highlight overlay that tracks the pointer position.",
				},
				{
					name: "class",
					type: "ClassValue",
					default: "undefined",
					description: "Custom classes applied to the root tilt wrapper.",
				},
				{
					name: "style",
					type: "string",
					default: "undefined",
					description: "Inline styles appended to the root wrapper.",
				},
			],
		},
	],
};
