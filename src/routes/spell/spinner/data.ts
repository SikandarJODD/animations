import SpinnerRaw from "$lib/components/spell/spinner/spinner.svelte?raw";
import IndexTsRaw from "$lib/components/spell/spinner/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import SizesExample from "./examples/sizes-example.svelte";
import SizesExampleRaw from "./examples/sizes-example.svelte?raw";
import SpeedExample from "./examples/speed-example.svelte";
import SpeedExampleRaw from "./examples/speed-example.svelte?raw";
import ColorExample from "./examples/color-example.svelte";
import ColorExampleRaw from "./examples/color-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "spinner",
	title: "Spinner",
	description:
		"A smooth gradient spinner built from an SVG arc, with size and speed variants for flexible loading states across buttons, cards, and full-page overlays.",
	category: "Spinner",
};

const seo: SEO = {
	title: "Spinner",
	description:
		"Learn how to use the Spinner spell component in Svelte, including size and speed variants for loading indicators.",
	keywords: ["Svelte", "Spinner", "Spell", "Svelte Animations", "Loading Spinner", "Loader"],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "spinner.svelte",
			filecode: SpinnerRaw,
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
lib/
  components/
    spell/
      spinner/
        spinner.svelte
        index.ts`,
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
			name: "Sizes",
			preview: SizesExample,
			code: {
				filename: "sizes-example.svelte",
				filecode: SizesExampleRaw,
				lang: "svelte",
			},
		},
		{
			name: "Speed",
			preview: SpeedExample,
			code: {
				filename: "speed-example.svelte",
				filecode: SpeedExampleRaw,
				lang: "svelte",
			},
		},
		{
			name: "Color",
			preview: ColorExample,
			code: {
				filename: "color-example.svelte",
				filecode: ColorExampleRaw,
				lang: "svelte",
			},
		},
	],
	seo,
	props: [
		{
			props: [
				{
					name: "size",
					type: '"sm" | "default" | "md" | "lg"',
					default: '"md"',
					description: "The size variant of the spinner.",
				},
				{
					name: "speed",
					type: '"slow" | "normal" | "fast"',
					default: '"normal"',
					description: "The animation speed of the spinner.",
				},
				{
					name: "class",
					type: "string | undefined",
					default: "undefined",
					description: "Additional CSS classes to apply to the spinner.",
				},
			],
		},
	],
};
