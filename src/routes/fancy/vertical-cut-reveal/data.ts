import IndexTsRaw from "$lib/components/fancy/vertical-cut-reveal/index.ts?raw";
import VerticalCutRevealRaw from "$lib/components/fancy/vertical-cut-reveal/vertical-cut-reveal.svelte?raw";
import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewRaw from "./examples/preview.svelte?raw";
import RandomLetterExample from "./examples/random-letter-example.svelte";
import RandomLetterExampleRaw from "./examples/random-letter-example.svelte?raw";
import ScrollDemoExample from "./examples/scroll-demo-example.svelte";
import ScrollDemoExampleRaw from "./examples/scroll-demo-example.svelte?raw";
import SplitByExample from "./examples/split-by-example.svelte";
import SplitByExampleRaw from "./examples/split-by-example.svelte?raw";
import SplitByWordsExample from "./examples/split-by-words-example.svelte";
import SplitByWordsExampleRaw from "./examples/split-by-words-example.svelte?raw";
import StaggerFromExample from "./examples/stagger-from-example.svelte";
import StaggerFromExampleRaw from "./examples/stagger-from-example.svelte?raw";
import { FANCY_OG_IMAGES, FANCY_TITLE_TEMPLATE } from "../seo";

export const meta: ComponentMeta = {
	id: "vertical-cut-reveal",
	title: "Vertical Cut Reveal",
	description: "Reveal text from vertical cuts with word, character, or line-based staggering.",
	category: "fancy",
	badge: "new",
};

const seo: SEO = {
	title: "Vertical Cut Reveal",
	description:
		"Learn how to use the Vertical Cut Reveal Fancy component in Svelte for staggered vertical text entrances across words, characters, or lines.",
	titleTemplate: FANCY_TITLE_TEMPLATE,
	images: FANCY_OG_IMAGES,
	keywords: [
		"Vertical Cut Reveal",
		"Svelte Fancy Components",
		"Fancy Components",
		"Svelte 5",
		"Motion SV",
		"Text Reveal Animation",
		"Staggered Text",
		"Split Text Animation",
	],
};

const installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "vertical-cut-reveal.svelte",
			filecode: VerticalCutRevealRaw,
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
+-- lib/
    +-- components/
        +-- fancy/
            +-- vertical-cut-reveal/
                |-- vertical-cut-reveal.svelte
                +-- index.ts`,
};

const examples: Example[] = [
	{
		name: "Split By Characters And Lines",
		preview: SplitByExample,
		previewClass: "p-0",
		code: {
			filename: "split-by-example.svelte",
			filecode: SplitByExampleRaw,
			lang: "svelte",
		},
	},
	{
		name: "Split By Words",
		description:
			"With the splitBy prop, you can control how the text is split into smaller pieces. It can be either words, characters, lines, or a custom string delimiter.",
		preview: SplitByWordsExample,
		previewClass: "p-0",
		code: {
			filename: "split-by-words-example.svelte",
			filecode: SplitByWordsExampleRaw,
			lang: "svelte",
		},
	},
	{
		name: "Stagger From Variants",
		description:
			"With the staggerFrom prop, you can control the starting index of the animation. It can be either first, last, center, a number (custom index).",
		preview: StaggerFromExample,
		previewClass: "p-0",
		code: {
			filename: "stagger-from-example.svelte",
			filecode: StaggerFromExampleRaw,
			lang: "svelte",
		},
	},
	{
		name: "Random Letter Reveal",
		description: "Reveal text characters in a random order for a playful effect.",
		preview: RandomLetterExample,
		previewClass: "p-0",
		code: {
			filename: "random-letter-example.svelte",
			filecode: RandomLetterExampleRaw,
			lang: "svelte",
		},
	},
	{
		name: "Scroll Trigger",
		preview: ScrollDemoExample,
		description:
			"Animate the Vertical Cut Reveal when the text enters the viewport using the useInView function from motion-sv.",
		previewClass: "p-0",
		code: {
			filename: "scroll-demo-example.svelte",
			filecode: ScrollDemoExampleRaw,
			lang: "svelte",
		},
	},
];

export const data: ComponentDoc = {
	...meta,
	seo,
	installBlock,
	preview: Preview,
	previewClass: "p-0",
	previewCode: {
		filename: "preview.svelte",
		filecode: PreviewRaw,
		lang: "svelte",
	},
	examples,
	props: [
		{
			props: [
				{
					name: "children",
					type: "Snippet",
					default: "undefined",
					description: "Snippet content observed and split into animated units.",
				},
				{
					name: "reverse",
					type: "boolean",
					default: "false",
					description: "Reverses the reveal direction so units enter from above instead of below.",
				},
				{
					name: "transition",
					type: "AnimationOptions",
					default: '{ type: "spring", stiffness: 190, damping: 22 }',
					description: "Motion options used for each revealed unit.",
				},
				{
					name: "splitBy",
					type: '"words" | "characters" | "lines" | string',
					default: '"words"',
					description: "Controls whether the text is split by words, characters, lines, or a custom delimiter.",
				},
				{
					name: "staggerDuration",
					type: "number",
					default: "0.2",
					description: "Delay in seconds between animated units.",
				},
				{
					name: "staggerFrom",
					type: '"first" | "last" | "center" | "random" | number',
					default: '"first"',
					description: "Starting point used when calculating stagger delays.",
				},
				{
					name: "containerClass",
					type: "string",
					default: "undefined",
					description: "Classes applied to the outer flex container.",
				},
				{
					name: "wordLevelClass",
					type: "string",
					default: "undefined",
					description: "Classes applied to each overflow-hidden group wrapper.",
				},
				{
					name: "elementLevelClass",
					type: "string",
					default: "undefined",
					description: "Classes applied to each individual animated unit wrapper.",
				},
				{
					name: "onStart",
					type: "() => void",
					default: "undefined",
					description: "Called when the reveal animation begins.",
				},
				{
					name: "onComplete",
					type: "() => void",
					default: "undefined",
					description: "Called after the final visible unit finishes animating.",
				},
				{
					name: "autoStart",
					type: "boolean",
					default: "true",
					description: "Starts the reveal automatically instead of waiting for `startAnimation()`.",
				},
				{
					name: "class",
					type: "string",
					default: "undefined",
					description: "Additional classes merged onto the outer container.",
				},
			],
		},
	],
};
