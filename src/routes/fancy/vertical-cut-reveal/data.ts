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
	keywords: ["Svelte", "Vertical Cut Reveal", "Fancy UI", "Svelte Fancy Components", "motion-sv"],
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
		description: "Animate the Vertical Cut Reveal when the text enters the viewport using the useInView function from motion-sv.",
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
};
