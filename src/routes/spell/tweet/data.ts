import TweetRaw from "$lib/components/spell/tweet/tweet.svelte?raw";
import IndexTsRaw from "$lib/components/spell/tweet/index.ts?raw";
import ApiRouteRaw from "../../api/tweet/[id]/+server.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "tweet",
	title: "Tweet",
	description: "Fetch and render any tweet by ID, with media, entities, and live like counts.",
	category: "spell",
};

const seo: SEO = {
	title: "Tweet",
	description:
		"Fetch and render any X/Twitter post by ID in Svelte. Supports photos, videos, hashtags, mentions, and live like counts via a SvelteKit API route.",
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
		{
			filename: "api/tweet/[id]/+server.ts",
			filecode: ApiRouteRaw,
			lang: "typescript",
		},
	],
	packages: [],
	folderStructure: `src/
├── lib/
│   └── components/
│       └── spell/
│           └── tweet/
│               ├── tweet.svelte
│               └── index.ts
└── routes/
    └── api/
        └── tweet/
            └── [id]/
                └── +server.ts`,
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
					name: "id",
					type: "string",
					required: true,
					description: "The numeric tweet/post ID to fetch and display.",
				},
				{
					name: "showDate",
					type: "boolean",
					default: "true",
					description: "Whether to show the tweet's timestamp below the body.",
				},
				{
					name: "showLikeButton",
					type: "boolean",
					default: "true",
					description: "Whether to show the like count linking to the like intent.",
				},
				{
					name: "showCopyLink",
					type: "boolean",
					default: "true",
					description: "Whether to show the copy-link button in the footer.",
				},
				{
					name: "class",
					type: "string | undefined",
					default: "undefined",
					description: "Additional CSS classes to apply to the tweet card.",
				},
			],
		},
	],
};
