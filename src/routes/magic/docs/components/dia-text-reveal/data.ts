import DiaTextRevealRaw from "$lib/components/magic/dia-text-reveal/dia-text-reveal.svelte?raw";
import IndexTs from "$lib/components/magic/dia-text-reveal/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import CustomGradient from "./examples/custom-gradient.svelte";
import CustomGradientRaw from "./examples/custom-gradient.svelte?raw";
import DurationAndDelay from "./examples/duration-and-delay.svelte";
import DurationAndDelayRaw from "./examples/duration-and-delay.svelte?raw";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import RotatingPhrases from "./examples/rotating-phrases.svelte";
import RotatingPhrasesRaw from "./examples/rotating-phrases.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "dia-text-reveal",
	title: "Dia Text Reveal",
	description:
		"A sweeping gradient text reveal with viewport triggering and rotating text support.",
	category: "text",
	badge: "new",
};

const examples: Example[] = [
	{
		name: "Custom Gradient",
		preview: CustomGradient,
		code: {
			filename: "custom-gradient.svelte",
			filecode: CustomGradientRaw,
			lang: "svelte",
		},
	},
	{
		name: "Rotating Phrases",
		preview: RotatingPhrases,
		code: {
			filename: "rotating-phrases.svelte",
			filecode: RotatingPhrasesRaw,
			lang: "svelte",
		},
	},
	{
		name: "Duration and Delay",
		preview: DurationAndDelay,
		description: "Adjust the sweep duration and delay before starting.",
		code: {
			filename: "duration-and-delay.svelte",
			filecode: DurationAndDelayRaw,
			lang: "svelte",
		},
	},
];

const seo: SEO = {
	title: "Dia Text Reveal",
	description:
		"Learn how to create a sweeping gradient text reveal in Svelte using Motion SV and Svelte 5 Animations.",
	keywords: [
		"Svelte",
		"Dia Text Reveal",
		"Svelte 5 Animations",
		"Motion SV",
		"Text Reveal",
		"Gradient Text",
	],
};

let installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "dia-text-reveal.svelte",
			filecode: DiaTextRevealRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTs,
			lang: "typescript",
		},
	],
	folderStructure: `src/
└── lib/
    └── components/
        └── magic/
            └── dia-text-reveal/
                ├── dia-text-reveal.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "preview.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2, 6],
	},
	examples,
	seo,
	props: [
		{
			name: "DiaTextReveal",
			desc: "A component for revealing text with a moving gradient sweep.",
			props: [
				{
					name: "text",
					type: "string | string[]",
					required: true,
					description:
						"Text to reveal. Pass multiple strings to rotate when repeat is enabled.",
				},
				{
					name: "colors",
					type: "string[]",
					default: '["#c679c4", "#fa3d1d", "#ffb005", "#e1e1fe", "#0358f7"]',
					description: "Colors sampled across the moving gradient band.",
				},
				{
					name: "textColor",
					type: "string",
					default: '"var(--foreground)"',
					description: "CSS color for revealed text after the sweep.",
				},
				{
					name: "duration",
					type: "number",
					default: "1.5",
					description: "Duration of one sweep pass in seconds.",
				},
				{
					name: "delay",
					type: "number",
					default: "0",
					description: "Delay before the sweep starts in seconds.",
				},
				{
					name: "repeat",
					type: "boolean",
					default: "false",
					description:
						"Replay the sweep and advance to the next string after each completion.",
				},
				{
					name: "repeatDelay",
					type: "number",
					default: "0.5",
					description: "Pause between repeated cycles in seconds.",
				},
				{
					name: "triggerOnView",
					type: "boolean",
					default: "true",
					description: "Start the reveal when the component enters the viewport.",
				},
				{
					name: "once",
					type: "boolean",
					default: "true",
					description: "When using triggerOnView, run only on the first viewport entry.",
				},
				{
					name: "fixedWidth",
					type: "boolean",
					default: "false",
					description:
						"Use the widest string width instead of animating width between strings.",
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply to the animated span.",
				},
			],
		},
	],
	installBlock,
};
