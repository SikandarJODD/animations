import type { SEO } from "$lib/types/seo";

export const FANCY_TITLE_TEMPLATE = "%s | Svelte Fancy Components";

export const FANCY_OG_IMAGES: NonNullable<SEO["images"]> = [
	{
		url: "https://sv-animations.vercel.app/fancy-og.png",
		width: 1200,
		height: 630,
		alt: "Svelte Fancy Components",
	},
];
