import ColorSelectorRaw from "$lib/components/spell/color-selector/color-selector.svelte?raw";
import IndexTsRaw from "$lib/components/spell/color-selector/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import SizeVariationExample from "./examples/size-variation-example.svelte";
import SizeVariationExampleRaw from "./examples/size-variation-example.svelte?raw";
import CallbackExample from "./examples/callback-example.svelte";
import CallbackExampleRaw from "./examples/callback-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "color-selector",
	title: "Color Selector",
	description: "Interactive color picker component.",
	category: "spell",
};

const seo: SEO = {
	title: "Color Selector",
	description:
		"Learn how to use the Color Selector spell component in Svelte, including controlled selection, form integration, custom CSS colors, and size variations.",
	keywords: [
		"Svelte",
		"Color Selector",
		"Spell",
		"Svelte Animations",
		"Color Picker",
		"tailwind-variants",
	],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "color-selector.svelte",
			filecode: ColorSelectorRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTsRaw,
			lang: "typescript",
		},
	],
	packages: ["tailwind-variants"],
	folderStructure: `src/
└── lib/
    └── components/
        └── spell/
            └── color-selector/
                ├── color-selector.svelte
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
			name: "Callback",
			description:
				"Use the onColorSelect callback to track the selected color in parent state.",
			preview: CallbackExample,
			code: {
				filename: "callback-example.svelte",
				filecode: CallbackExampleRaw,
				lang: "svelte",
			},
		},
		{
			name: "Size Variation",
			description:
				"Mix compact preset swatches with larger custom CSS colors to build palettes that fit both dense toolbars and expressive settings panels.",
			preview: SizeVariationExample,
			code: {
				filename: "size-variation-example.svelte",
				filecode: SizeVariationExampleRaw,
				lang: "svelte",
			},
		},
	],
	seo,
	props: [
		{
			props: [
				{
					name: "colors",
					type: "readonly ColorSelectorColor[]",
					default: "[]",
					description:
						"The swatches to render. Each item can be a built-in preset name or any supported CSS color string.",
				},
				{
					name: "size",
					type: '"sm" | "default" | "lg"',
					default: '"default"',
					description: "Controls the diameter of each swatch button.",
				},
				{
					name: "defaultValue",
					type: "ColorSelectorColor",
					default: "",
					description: "Sets the initial selected swatch for uncontrolled usage.",
				},
				{
					name: "value",
					type: "ColorSelectorColor",
					default: "",
					description: "Controlled selected color value. Supports `bind:value`.",
				},
				{
					name: "name",
					type: "string",
					default: "",
					description:
						"When provided, renders a hidden input so the selected value participates in native form submission.",
				},
				{
					name: "onColorSelect",
					type: "((color: ColorSelectorColor) => void) | undefined",
					default: "",
					description: "Callback fired when a swatch is selected.",
				},
				{
					name: "class",
					type: "string",
					default: "",
					description: "Custom classes merged onto the radiogroup root.",
				},
			],
		},
	],
};
