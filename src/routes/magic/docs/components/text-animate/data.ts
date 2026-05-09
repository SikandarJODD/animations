import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta } from "$lib/types/structure";

// Import examples
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import BlurInText from "./examples/blur-in-text.svelte";
import BlurInTextRaw from "./examples/blur-in-text.svelte?raw";
import SlideUpWord from "./examples/slide-up-word.svelte";
import SlideUpWordRaw from "./examples/slide-up-word.svelte?raw";
import ScaleUpText from "./examples/scale-up-text.svelte";
import ScaleUpTextRaw from "./examples/scale-up-text.svelte?raw";
import FadeInLine from "./examples/fade-in-line.svelte";
import FadeInLineRaw from "./examples/fade-in-line.svelte?raw";
import SlideLeftCharacter from "./examples/slide-left-character.svelte";
import SlideLeftCharacterRaw from "./examples/slide-left-character.svelte?raw";
import WithDelay from "./examples/with-delay.svelte";
import WithDelayRaw from "./examples/with-delay.svelte?raw";
import WithDuration from "./examples/with-duration.svelte";
import WithDurationRaw from "./examples/with-duration.svelte?raw";
import CustomVariants from "./examples/custom-variants.svelte";
import CustomVariantsRaw from "./examples/custom-variants.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "text-animate",
	title: "Text Animate",
	description:
		"Animate text with various effects like blur, slide, scale, and fade with granular control over words, characters, or lines.",
	category: "text",
	badge: "new",
};

const examples: Example[] = [
	{
		name: "Blur In by Text",
		description: "Animate entire text with a blur-in effect.",
		preview: BlurInText,
		code: {
			filename: "blur-in-text.svelte",
			filecode: BlurInTextRaw,
			lang: "svelte",
		},
	},
	{
		name: "Slide Up by Word",
		description: "Animate each word with a slide-up effect.",
		preview: SlideUpWord,
		code: {
			filename: "slide-up-word.svelte",
			filecode: SlideUpWordRaw,
			lang: "svelte",
		},
	},
	{
		name: "Scale Up by Text",
		description: "Animate entire text with a scale-up spring effect.",
		preview: ScaleUpText,
		code: {
			filename: "scale-up-text.svelte",
			filecode: ScaleUpTextRaw,
			lang: "svelte",
		},
	},
	{
		name: "Fade In by Line",
		description: "Animate text line by line with a fade-in effect.",
		preview: FadeInLine,
		code: {
			filename: "fade-in-line.svelte",
			filecode: FadeInLineRaw,
			lang: "svelte",
		},
	},
	{
		name: "Slide Left by Character",
		description: "Animate each character with a slide-left effect.",
		preview: SlideLeftCharacter,
		code: {
			filename: "slide-left-character.svelte",
			filecode: SlideLeftCharacterRaw,
			lang: "svelte",
		},
	},
	{
		name: "With Delay",
		description: "Add a delay before the animation starts.",
		preview: WithDelay,
		code: {
			filename: "with-delay.svelte",
			filecode: WithDelayRaw,
			lang: "svelte",
		},
	},
	{
		name: "With Duration",
		description: "Control the total duration of the animation.",
		preview: WithDuration,
		code: {
			filename: "with-duration.svelte",
			filecode: WithDurationRaw,
			lang: "svelte",
		},
	},
	{
		name: "Custom Motion Variants",
		description: "Use custom motion variants for complete control over the animation.",
		preview: CustomVariants,
		code: {
			filename: "custom-variants.svelte",
			filecode: CustomVariantsRaw,
			lang: "svelte",
		},
	},
];

const seo: SEO = {
	title: "Text Animate",
	description:
		"Learn how to create animated text effects in Svelte with blur, slide, scale, and fade animations using the Svelte 5 Animations library.",
	keywords: [
		"Svelte",
		"Text Animation",
		"Svelte 5 Animations",
		"Motion",
		"Web Design",
		"Framer Motion",
	],
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "text-animate.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2, 6],
	},
	examples,
	seo,
	installBlock: {
		packages: ["motion-sv"],
	},
	props: [
		{
			name: "TextAnimate",
			desc: "A component for animating text with various effects and granular control.",
			props: [
				{
					name: "content",
					type: "string",
					default: '""',
					description: "The text content to animate (required)",
				},
				{
					name: "animation",
					type: '"fadeIn" | "blurIn" | "blurInUp" | "blurInDown" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "scaleUp" | "scaleDown"',
					default: '"fadeIn"',
					description: "The animation preset to use",
				},
				{
					name: "by",
					type: '"text" | "word" | "character" | "line"',
					default: '"word"',
					description: "How to split the text for animation",
				},
				{
					name: "delay",
					type: "number",
					default: "0",
					description: "Delay before the animation starts (in seconds)",
				},
				{
					name: "duration",
					type: "number",
					default: "0.3",
					description: "Total duration of the animation (in seconds)",
				},
				{
					name: "variants",
					type: "Variants",
					default: "undefined",
					description: "Custom motion variants for the item animation",
				},
				{
					name: "startOnView",
					type: "boolean",
					default: "true",
					description: "Start animation when component enters viewport",
				},
				{
					name: "once",
					type: "boolean",
					default: "false",
					description: "Animate only once when in view",
				},
				{
					name: "accessible",
					type: "boolean",
					default: "true",
					description: "Enable accessibility features (screen reader support)",
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply to the container",
				},
				{
					name: "segmentClass",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply to each segment",
				},
			],
		},
	],
	folderStructure: `src/
└── lib/
    └── components/
        └── magic/
            └── text-animate/
                ├── text-animate.svelte
                └── index.ts`,
};
