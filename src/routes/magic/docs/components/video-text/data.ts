import VideoTextRaw from "$lib/components/magic/video-text/video-text.svelte?raw";
import IndexTs from "$lib/components/magic/video-text/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "video-text",
	title: "Video Text",
	description: "A text component with a video background.",
	category: "animation",
	badge: "new",
};

const seo: SEO = {
	title: "Video Text",
	description:
		"Learn how to create Video Text effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Video Text", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: ["runed"],
	installCode: [
		{
			filename: "video-text.svelte",
			filecode: VideoTextRaw,
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
            └── video-text/
                ├── video-text.svelte
                └── index.ts`,
};

/*
interface VideoTextProps {
		src: string;
		content: string;
		class?: string;
		autoPlay?: boolean;
		muted?: boolean;
		loop?: boolean;
		preload?: "auto" | "metadata" | "none";
		fontSize?: string | number;
		fontWeight?: string | number;
		textAnchor?: string;
		dominantBaseline?: string;
		fontFamily?: string;
	}

	let {
		src,
		content,
		class: className = "",
		autoPlay = true,
		muted = true,
		loop = true,
		preload = "auto",
		fontSize = 20,
		fontWeight = "bold",
		textAnchor = "middle",
		dominantBaseline = "middle",
		fontFamily = "sans-serif",
	}: VideoTextProps = $props();
 */

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "video-text.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	seo,
	props: [
		{
			name: "VideoText",
			desc: "A component for Video Text.",
			props: [
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
				{
					name: "src",
					type: "string",
					default: "",
					description: "Source URL of the video",
				},
				{
					name: "content",
					type: "string",
					default: "",
					description: "Text content to display",
				},
				{
					name: "autoPlay",
					type: "boolean",
					default: "true",
					description: "Whether to autoplay the video",
				},
				{
					name: "muted",
					type: "boolean",
					default: "true",
					description: "Whether to mute the video",
				},
				{
					name: "loop",
					type: "boolean",
					default: "true",
					description: "Whether to loop the video",
				},
				{
					name: "preload",
					type: '"auto" | "metadata" | "none"',
					default: '"auto"',
					description: "Preload behavior of the video",
				},
				{
					name: "fontSize",
					type: "string | number",
					default: "20",
					description: "Font size of the text",
				},
				{
					name: "fontWeight",
					type: "string | number",
					default: '"bold"',
					description: "Font weight of the text",
				},
				{
					name: "textAnchor",
					type: "string",
					default: '"middle"',
					description: "Text anchor alignment",
				},
				{
					name: "dominantBaseline",
					type: "string",
					default: '"middle"',
					description: "Dominant baseline alignment",
				},
				{
					name: "fontFamily",
					type: "string",
					default: '"sans-serif"',
					description: "Font family of the text",
				},
			],
		},
	],
	installBlock,
};
