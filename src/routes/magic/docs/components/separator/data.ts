import IndexTsRaw from "$lib/components/magic/separator/index.ts?raw";
import SeparatorSvelteRaw from "$lib/components/magic/separator/separator.svelte?raw";

import type { Example } from "$lib/types/examples";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import DashedPillLabel from "./examples/dashed-pill-label.svelte";
import DashedPillLabelRaw from "./examples/dashed-pill-label.svelte?raw";
import Gradient from "./examples/gradient.svelte";
import GradientRaw from "./examples/gradient.svelte?raw";
import GradientLabel from "./examples/gradient-label.svelte";
import GradientLabelRaw from "./examples/gradient-label.svelte?raw";
import IconLabel from "./examples/icon-label.svelte";
import IconLabelRaw from "./examples/icon-label.svelte?raw";
import Label from "./examples/label.svelte";
import LabelRaw from "./examples/label.svelte?raw";
import PillLabel from "./examples/pill-label.svelte";
import PillLabelRaw from "./examples/pill-label.svelte?raw";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import SignupForm from "./examples/signup-form.svelte";
import SignupFormRaw from "./examples/signup-form.svelte?raw";

export const meta: ComponentMeta = {
	id: "separator",
	title: "Separator",
	description:
		"A flexible horizontal separator for dividing content with solid or gradient lines and optional centered labels.",
	category: "magic",
};

const seo: SEO = {
	title: "Separator",
	description:
		"Add polished content dividers to Svelte 5 interfaces with solid or gradient lines, custom styles, and centered text or icon labels.",
	keywords: [
		"Svelte",
		"Svelte 5",
		"Separator",
		"Divider",
		"Gradient Separator",
		"Section Divider",
		"UI Component",
		"Svelte Component",
		"Tailwind CSS",
		"Magic UI",
	],
	titleTemplate: "%s | Svelte Magic UI",
};

const examples: Example[] = [
	{
		name: "Gradient",
		description: "A softly fading gradient separator.",
		preview: Gradient,
		code: {
			filename: "gradient.svelte",
			filecode: GradientRaw,
			lang: "svelte",
		},
	},
	{
		name: "Label",
		description: "A separator with a centered text label.",
		preview: Label,
		code: {
			filename: "label.svelte",
			filecode: LabelRaw,
			lang: "svelte",
		},
	},
	{
		name: "Gradient with Label",
		description: "A gradient separator framing a centered text label.",
		preview: GradientLabel,
		code: {
			filename: "gradient-label.svelte",
			filecode: GradientLabelRaw,
			lang: "svelte",
		},
	},
	{
		name: "Pill Label",
		description: "A separator with a bordered pill-shaped label.",
		preview: PillLabel,
		code: {
			filename: "pill-label.svelte",
			filecode: PillLabelRaw,
			lang: "svelte",
		},
	},
	{
		name: "Dashed Pill Label",
		description: "A separator with a dashed pill-shaped label.",
		preview: DashedPillLabel,
		code: {
			filename: "dashed-pill-label.svelte",
			filecode: DashedPillLabelRaw,
			lang: "svelte",
		},
	},
	{
		name: "Icon Label",
		description: "A gradient separator with a centered icon treatment.",
		preview: IconLabel,
		code: {
			filename: "icon-label.svelte",
			filecode: IconLabelRaw,
			lang: "svelte",
		},
	},
	{
		name: "Sign-up Form",
		description: "Use a labeled separator to distinguish email registration from social sign-up options.",
		preview: SignupForm,
		code: {
			filename: "signup-form.svelte",
			filecode: SignupFormRaw,
			lang: "svelte",
		},
	},
];

const installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{ filename: "index.ts", filecode: IndexTsRaw, lang: "typescript", isExpand: true },
		{ filename: "separator.svelte", filecode: SeparatorSvelteRaw, lang: "svelte" },
	],
	folderStructure: `src/
└── lib/
    └── components/
        └── magic/
            └── separator/
                ├── separator.svelte
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
	examples,
	seo,
	props: [
		{
			name: "Separator",
			desc: "A horizontal divider with optional gradient styling and centered snippet content.",
			props: [
				{
					name: "class",
					type: "string",
					description: "Additional CSS classes applied to the separator line",
				},
				{
					name: "gradient",
					type: "boolean",
					default: "false",
					description: "Whether to render the separator line with a fading gradient",
				},
				{
					name: "children",
					type: "Snippet",
					description: "Optional content rendered as a centered label between the separator lines",
				},
				{
					name: "textClass",
					type: "string",
					default: '""',
					description: "Additional CSS classes applied to the centered label wrapper",
				},
			],
		},
	],
};
