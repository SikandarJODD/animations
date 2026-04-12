import TweetRaw from "$lib/components/spell/tweet/tweet.svelte?raw";
import IndexTsRaw from "$lib/components/spell/tweet/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "tweet",
	title: "Tweet",
	description: "A styled tweet card component for displaying social media content.",
	category: "spell",
};

const seo: SEO = {
	title: "Tweet",
	description:
		"A styled tweet card component for displaying social media content in Svelte. No external API required — renders directly from props.",
	keywords: ["Svelte", "Tweet", "Twitter", "X", "Card", "Spell", "Svelte Animations"],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "tweet.svelte",
			filecode: TweetRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTsRaw,
			lang: "typescript",
		},
	],
	packages: [],
	folderStructure: `src/
└── lib/
    └── components/
        └── spell/
            └── tweet/
                ├── tweet.svelte
                └── index.ts`,
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
	examples: [],
	seo,
	props: [
		{
			props: [
				{
					name: "authorName",
					type: "string",
					required: true,
				},
				{
					name: "authorHandle",
					type: "string",
					required: true,
				},
				{
					name: "text",
					type: "string",
					required: true,
				},
				{
					name: "authorAvatar",
					type: "string | undefined",
					default: "undefined",
				},
				{
					name: "date",
					type: "string | undefined",
					default: "undefined",
				},
				{
					name: "likes",
					type: "number | undefined",
					default: "undefined",
				},
				{
					name: "retweets",
					type: "number | undefined",
					default: "undefined",
				},
				{
					name: "verified",
					type: "boolean",
					default: "false",
				},
				{
					name: "url",
					type: "string | undefined",
					default: "undefined",
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
