import RandomizedTextRaw from "#lib/components/spell/randomized-text/randomized-text.svelte?raw";
import IndexTsRaw from "#lib/components/spell/randomized-text/index.ts?raw";
import SharedTextUtilsRaw from "#lib/utils/text-utils.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "#lib/types/structure.js";
import type { SEO } from "#lib/types/seo.js";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import CharacterSplitExample from "./examples/character-split-example.svelte";
import CharacterSplitExampleRaw from "./examples/character-split-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "randomized-text",
	title: "Randomized Text",
	description:
		"A text reveal with stable, randomized per-token delays for spell-style headlines, labels, and editorial callouts.",
	category: "spell",
};

const seo: SEO = {
	title: "Randomized Text",
	description:
		"Learn how to use the Randomized Text spell component in Svelte, including word and character splitting, deterministic timing jitter, and view-based triggers.",
	keywords: [
		"Svelte",
		"Randomized Text",
		"Spell",
		"Svelte Animations",
		"Text Reveal",
		"Motion SV",
	],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "randomized-text.svelte",
			filecode: RandomizedTextRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTsRaw,
			lang: "typescript",
		},
		{
			filename: "src/lib/utils/text-utils.js",
			filecode: SharedTextUtilsRaw,
			lang: "typescript",
		},
	],
	packages: ["motion-sv"],
	folderStructure: `src/
lib/
  utils/
    text-utils.ts
  components/
    spell/
      randomized-text/
        index.ts
        randomized-text.svelte`,
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
			name: "Split by",
			description:
				"Switch to grapheme-safe character splitting and trigger the reveal when the copy enters the viewport.",
			preview: CharacterSplitExample,
			code: {
				filename: "character-split-example.svelte",
				filecode: CharacterSplitExampleRaw,
				lang: "svelte",
			},
		},
	],
	seo,
	props: [
		{
			props: [
				{
					name: "children",
					type: "Snippet",
					required: true,
					description:
						"Plain text snippet content used to build the animated token list.",
				},
				{
					name: "as",
					type: '"span" | "div" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"',
					default: '"span"',
					description: "Sets the semantic tag used for the animated root element.",
				},
				{
					name: "split",
					type: '"words" | "chars"',
					default: '"words"',
					description:
						"Controls whether the reveal animates full words or grapheme-safe characters.",
				},
				{
					name: "delay",
					type: "number",
					default: "0.2",
					description:
						"Adds a base delay in seconds before token-specific jitter is applied.",
				},
				{
					name: "duration",
					type: "number",
					default: "1.2",
					description:
						"Sets the opacity reveal duration for each animated token in seconds.",
				},
				{
					name: "trigger",
					type: "boolean",
					default: "true",
					description: "Enables or disables the visible animated state.",
				},
				{
					name: "triggerOnView",
					type: "boolean",
					default: "false",
					description: "Waits to animate until the component enters the viewport.",
				},
				{
					name: "once",
					type: "boolean",
					default: "true",
					description:
						"When using triggerOnView, controls whether the reveal runs only on first entry.",
				},
				{
					name: "class",
					type: "string",
					default: "",
					description: "Custom classes applied to the animated root element.",
				},
				{
					name: "style",
					type: "string",
					default: "",
					description: "Inline styles forwarded to the animated root element.",
				},
			],
		},
	],
};
