import SpinnerRaw from "$lib/components/spell/spinner/spinner.svelte?raw";
import IndexTsRaw from "$lib/components/spell/spinner/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import SizesExample from "./examples/sizes-example.svelte";
import SizesExampleRaw from "./examples/sizes-example.svelte?raw";

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
	],
	seo,
	props: [
		{
			props: [
				{
					name: "size",
					type: '"sm" | "default" | "md" | "lg"',
					default: '"md"',
				},
				{
					name: "speed",
					type: '"slow" | "normal" | "fast"',
					default: '"normal"',
				},
				{
					name: "class",
					type: "string | undefined",
					default: "undefined",
				},
			],
		},
	],
};
