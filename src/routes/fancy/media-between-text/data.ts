import MediaBetweenTextRaw from "$lib/components/fancy/media-between-text/media-between-text.svelte?raw";
import IndexTsRaw from "$lib/components/fancy/media-between-text/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import type { Example } from "$lib/types/examples";
import ScrollDemo from "./examples/scroll-demo.svelte";
import ScrollDemoRaw from "./examples/scroll-demo.svelte?raw";
import OpenCloseTrigger from "./examples/open-close-trigger.svelte";
import OpenCloseTriggerRaw from "./examples/open-close-trigger.svelte?raw";
import VerticalOpen from "./examples/vertical-open.svelte";
import VerticalOpenRaw from "./examples/vertical-open.svelte?raw";

export const meta: ComponentMeta = {
	id: "media-between-text",
	title: "Media Between Text",
	description: "A component that animates a media (image or video) between two text elements.",
	category: "fancy",
	badge: "new",
};

const seo: SEO = {
	title: "Media Between Text",
	description:
		"Learn how to use the Media Between Text Fancy component in Svelte, including image and video media reveals between text fragments.",
	keywords: [
		"Svelte",
		"Media Between Text",
		"Fancy UI",
		"Svelte Fancy UI",
		"Motion SV",
		"Media Reveal",
	],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "media-between-text.svelte",
			filecode: MediaBetweenTextRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTsRaw,
			lang: "typescript",
		},
	],
	packages: ["motion-sv"],
	folderStructure: `src/
+-- lib/
    +-- components/
        +-- fancy/
            +-- media-between-text/
                |-- media-between-text.svelte
                +-- index.ts`,
};

let examples: Example[] = [
	{
		name: "Scroll-triggered Reveal",
		preview: ScrollDemo,
		code: {
			filename: "scroll-demo.svelte",
			filecode: ScrollDemoRaw,
			lang: "svelte",
		},
	},
	{
		name: "Open/Close Trigger",
		preview: OpenCloseTrigger,
		code: {
			filename: "open-close-trigger.svelte",
			filecode: OpenCloseTriggerRaw,
			lang: "svelte",
		},
	},
	{
		name: "Vertical Open/Close",
		preview: VerticalOpen,
		previewClass: "min-h-90",
		code: {
			filename: "vertical-open-close.svelte",
			filecode: VerticalOpenRaw,
			lang: "svelte",
			highlight: [21, 23, [31, 43]],
		},
	},
];

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewClass: "min-h-120",
	previewCode: {
		filename: "preview.svelte",
		filecode: PreviewCodeRaw,
		hideLines: true,
		highlight: [2],
	},
	examples,
	installBlock,
	seo,
	props: [
		{
			props: [
				{
					name: "firstText",
					type: "string",
					required: true,
					description: "Text rendered before the media reveal.",
				},
				{
					name: "secondText",
					type: "string",
					required: true,
					description: "Text rendered after the media reveal.",
				},
				{
					name: "mediaUrl",
					type: "string",
					required: true,
					description: "Image or video source URL.",
				},
				{
					name: "mediaType",
					type: '"image" | "video"',
					required: true,
					description: "Controls whether an img or video element is rendered.",
				},
				{
					name: "mediaContainerClass",
					type: "string",
					default: "''",
					description: "Classes applied to the animated media wrapper.",
				},
				{
					name: "fallbackUrl",
					type: "string | undefined",
					default: "undefined",
					description: "Poster URL used when rendering video media.",
				},
				{
					name: "as",
					type: "keyof SvelteHTMLElements",
					default: '"p"',
					description: "HTML element used for each text fragment.",
				},
				{
					name: "autoPlay",
					type: "boolean",
					default: "true",
					description: "Whether video media should autoplay.",
				},
				{
					name: "loop",
					type: "boolean",
					default: "true",
					description: "Whether video media should loop.",
				},
				{
					name: "muted",
					type: "boolean",
					default: "true",
					description: "Whether video media should be muted.",
				},
				{
					name: "playsInline",
					type: "boolean",
					default: "true",
					description: "Whether video media should play inline on mobile browsers.",
				},
				{
					name: "alt",
					type: "string | undefined",
					default: "undefined",
					description: "Alt text used for image media.",
				},
				{
					name: "triggerType",
					type: '"hover" | "ref" | "inView"',
					default: '"hover"',
					description: "Controls when the media reveal animation runs.",
				},
				{
					name: "containerRef",
					type: "HTMLElement | Document | null",
					default: "null",
					description: "Optional viewport root used with in-view triggering.",
				},
				{
					name: "useInViewOptionsProp",
					type: "UseInViewOptions",
					default: "{ once: true, amount: 0.5 }",
					description: "Options forwarded to the in-view observer.",
				},
				{
					name: "animationVariants",
					type: "Variants",
					default: "defaultAnimationVariants",
					description: "Motion variants used for the media reveal.",
				},
				{
					name: "leftTextClass",
					type: "string",
					default: "''",
					description: "Classes applied to the first text fragment.",
				},
				{
					name: "rightTextClass",
					type: "string",
					default: "''",
					description: "Classes applied to the second text fragment.",
				},
				{
					name: "class",
					type: "string",
					default: "''",
					description: "Classes merged onto the root container.",
				},
			],
		},
	],
};
