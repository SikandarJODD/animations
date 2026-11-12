<script lang="ts">
	import { page } from "$app/state";
	import { seo_config } from "#lib/config/seo.js";
	import type { SEO } from "#lib/types/seo.js";
	import { MetaTags } from "svelte-meta-tags";

	type Props = SEO;
	let {
		title,
		description,
		titleTemplate = seo_config.title_template,
		keywords,
		canonicalPath,
		robots = "index,follow",
		siteName = seo_config.site_name,
		socialTitle = title,
		openGraphType = "website",
		author = "Sikandar Bhide",
		images = [
			{
				url: `${seo_config.url}/og.png`,
				width: 1200,
				height: 630,
				alt: "Svelte Animations",
			},
		],
	}: Props = $props();

	let canonical = $derived(new URL(canonicalPath ?? page.url.pathname, seo_config.url).href);
	let primaryImage = $derived(images[0]);
</script>

<MetaTags
	{title}
	{titleTemplate}
	{keywords}
	{description}
	{canonical}
	{robots}
	additionalRobotsProps={{
		maxSnippet: -1,
		maxImagePreview: "large",
		maxVideoPreview: -1,
	}}
	openGraph={{
		url: canonical,
		title: socialTitle,
		description,
		type: openGraphType,
		images,
		siteName,
	}}
	twitter={{
		creator: "@Sikandar_Bhide",
		site: "@Sikandar_Bhide",
		cardType: "summary_large_image",
		title: socialTitle,
		description,
		image: primaryImage?.url,
		imageAlt: primaryImage?.alt,
	}}
	additionalMetaTags={[{ name: "author", content: author }]}
/>
