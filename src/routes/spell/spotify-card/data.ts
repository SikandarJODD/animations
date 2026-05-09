import SpotifyCardRaw from "$lib/components/spell/spotify-card/spotify-card.svelte?raw";
import IndexTsRaw from "$lib/components/spell/spotify-card/index.ts?raw";
import SpotifyServerRaw from "../../api/spotify/+server.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import WidthExample from "./examples/width-example.svelte";
import WidthExampleRaw from "./examples/width-example.svelte?raw";
import CarouselExample from "./examples/carousel-example.svelte";
import CarouselExampleRaw from "./examples/carousel-example.svelte?raw";
import type { CodeBlock } from "$lib/components/ui/code";

export const meta: ComponentMeta = {
	id: "spotify-card",
	title: "Spotify Card",
	description: "Display Spotify tracks with album art and blurred background.",
	category: "spell",
};

const seo: SEO = {
	title: "Spotify Card",
	description:
		"Learn how to use the Spotify Card spell component in Svelte, including the required API route, preview playback, and layout sizing.",
	keywords: [
		"Svelte",
		"Spotify Card",
		"Spell",
		"Svelte Animations",
		"Spotify",
		"spotify-url-info",
	],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "spotify-card.svelte",
			filecode: SpotifyCardRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTsRaw,
			lang: "typescript",
		},
	],
	packages: ["spotify-url-info"],
	folderStructure: `src/
└── lib/
    └── components/
        └── spell/
            └── marquee/
                ├── marquee.svelte
                └── index.ts
--------------------------------------
routes/
└── api/
	└── spotify/
		└── +server.ts`,
};

export let apiRouteCode: CodeBlock = {
	filename: "+server.ts",
	filecode: SpotifyServerRaw,
	lang: "typescript",
	isExpand: true,
	highlight: [2],
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
	seo,
	examples: [
		{
			name: "Multiple Songs w/ Carousel",
			description:
				"Auto-advancing carousel that cycles through multiple tracks every two seconds. Dot indicators show the current position.",
			preview: CarouselExample,
			code: {
				filename: "carousel-example.svelte",
				filecode: CarouselExampleRaw,
				lang: "svelte",
			},
		},
	],
	props: [
		{
			props: [
				{
					name: "url",
					type: "string",
					required: true,
					description:
						"The Spotify track, album, playlist, or episode URL sent to the API route for preview metadata.",
				},
				{
					name: "class",
					type: "string",
					default: "''",
					description: "Custom classes merged onto the root card wrapper.",
				},
			],
		},
	],
};
