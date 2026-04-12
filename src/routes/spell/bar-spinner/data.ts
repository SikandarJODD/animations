import BarSpinnerRaw from "$lib/components/spell/bar-spinner/bar-spinner.svelte?raw";
import IndexTsRaw from "$lib/components/spell/bar-spinner/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import SizeAndColorExample from "./examples/size-and-color-example.svelte";
import SizeAndColorExampleRaw from "./examples/size-and-color-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "bar-spinner",
	title: "Bar Spinner",
	description:
		"A compact loading spinner made from twelve fading bars, ideal for inline waits, cards, dialogs, and button-adjacent status indicators.",
	category: "spell",
};

const seo: SEO = {
	title: "Bar Spinner",
	description:
		"Learn how to use the Bar Spinner spell component in Svelte, including size control, custom colors, and inline loading states.",
	keywords: ["Svelte", "Bar Spinner", "Spell", "Svelte Animations", "Loading Spinner", "Loader"],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "bar-spinner.svelte",
			filecode: BarSpinnerRaw,
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
      bar-spinner/
        bar-spinner.svelte
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
			name: "Size",
			preview: SizeAndColorExample,
			code: {
				filename: "size-example.svelte",
				filecode: SizeAndColorExampleRaw,
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
					type: "number",
					default: "20",
					description: "The size of the spinner in pixels.",
				},
				{
					name: "color",
					type: "string",
					default: '"currentColor"',
					description: "The color of the spinner bars.",
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
