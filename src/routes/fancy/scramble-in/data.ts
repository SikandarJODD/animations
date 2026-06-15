import IndexTsRaw from "$lib/components/fancy/scramble-in/index.ts?raw";
import ScrambleInRaw from "$lib/components/fancy/scramble-in/scramble-in.svelte?raw";
import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import BindThisControlsExample from "./examples/bind-this-controls-example.svelte";
import BindThisControlsExampleRaw from "./examples/bind-this-controls-example.svelte?raw";
import DelayAndSpeedExample from "./examples/delay-and-speed-example.svelte";
import DelayAndSpeedExampleRaw from "./examples/delay-and-speed-example.svelte?raw";
import Preview from "./examples/preview.svelte";
import PreviewRaw from "./examples/preview.svelte?raw";
import SpecialCharactersExample from "./examples/special-characters-example.svelte";
import SpecialCharactersExampleRaw from "./examples/special-characters-example.svelte?raw";
import { FANCY_OG_IMAGES, FANCY_TITLE_TEMPLATE } from "../seo";

export const meta: ComponentMeta = {
	id: "scramble-in",
	title: "Scramble In",
	description: "A text component that reveals the text with a scrambled part in front.",
	category: "fancy",
	badge: "new",
};

const seo: SEO = {
	title: "Scramble In",
	description:
		"Learn how to use the Scramble In Fancy component in Svelte for text reveals driven by progressive character scrambling.",
	titleTemplate: FANCY_TITLE_TEMPLATE,
	images: FANCY_OG_IMAGES,
	keywords: [
		"Scramble In",
		"Svelte Fancy Components",
		"Fancy Components",
		"Svelte 5",
		"Motion SV",
		"Text Reveal",
		"Scramble Text",
		"Character Animation",
	],
};

const installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "scramble-in.svelte",
			filecode: ScrambleInRaw,
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
        └── fancy/
            └── scramble-in/
                ├── scramble-in.svelte
                └── index.ts`,
};

let examples: Example[] = [
	{
		name: "Programmatic Controls",
		description:
			"Control the exported start and reset methods through bind:this and react to completion.",
		preview: BindThisControlsExample,
		code: {
			filename: "bind-this-controls-example.svelte",
			filecode: BindThisControlsExampleRaw,
			lang: "svelte",
		},
	},
	{
		name: "Delay And Speed",
		description:
			"Compare how scrambleDelay and scrambleSpeed change pacing across multiple lines.",
		preview: DelayAndSpeedExample,
		code: {
			filename: "delay-and-speed-example.svelte",
			filecode: DelayAndSpeedExampleRaw,
			lang: "svelte",
		},
	},
	{
		name: "Special Characters",
		description:
			"Use a custom scramble character pool for terminal commands, URLs, and punctuation-heavy strings.",
		preview: SpecialCharactersExample,
		code: {
			filename: "special-characters-example.svelte",
			filecode: SpecialCharactersExampleRaw,
			lang: "svelte",
		},
	},
];

export const data: ComponentDoc = {
	...meta,
	seo,
	installBlock,
	preview: Preview,
	previewCode: {
		filename: "preview.svelte",
		filecode: PreviewRaw,
		lang: "svelte",
	},
	previewClass: "p-0",
	examples,
	props: [
		{
			props: [
				{
					name: "text",
					type: "string",
					required: true,
					description: "Source text progressively revealed from left to right.",
				},
				{
					name: "scrambleDelay",
					type: "number",
					default: "0",
					description: "Delay in milliseconds before the scramble reveal starts.",
				},
				{
					name: "scrambleSpeed",
					type: "number",
					default: "50",
					description: "Interval in milliseconds between reveal updates.",
				},
				{
					name: "scrambledLetterCount",
					type: "number",
					default: "2",
					description: "Maximum number of trailing scrambled characters shown during the reveal.",
				},
				{
					name: "characters",
					type: "string",
					default: '"abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"',
					description: "Character pool used to build the temporary scrambled suffix.",
				},
				{
					name: "scrambledClass",
					type: "string",
					default: "undefined",
					description: "Classes applied to the still-scrambled trailing portion of the text.",
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description: "Classes applied to the revealed portion of the text.",
				},
				{
					name: "autoStart",
					type: "boolean",
					default: "true",
					description: "Starts the reveal automatically when the component mounts.",
				},
				{
					name: "onStart",
					type: "() => void",
					default: "undefined",
					description: "Called when a reveal cycle begins after any configured delay.",
				},
				{
					name: "onComplete",
					type: "() => void",
					default: "undefined",
					description: "Called after the full text has been completely revealed.",
				},
			],
		},
	],
};
