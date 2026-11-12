<script lang="ts">
	import Hero from "#lib/components/layout/hero.svelte";
	import Footer from "#lib/components/main/footer.svelte";
	import Sponsors from "#lib/components/main/sponsors.svelte";
	import { seo_config } from "#lib/config/seo.js";
	import { github_repo } from "#lib/config/repo.js";
	import { JsonLd, MetaTags } from "svelte-meta-tags";

	const title = "Svelte 5 Animation Components";
	const description =
		"Explore 100+ free, open-source Svelte 5 animation and UI components built with TypeScript, Tailwind CSS, and Motion for production interfaces.";
	const keywords = [
		"svelte animations",
		"svelte transition",
		"svelte motion",
		"animation components",
		"ui animations",
		"web animations",
		"frontend animations",
		"interactive animations",
		"animated components",
	];
	const socialImage = {
		url: `${seo_config.url}/og.png`,
		secureUrl: `${seo_config.url}/og.png`,
		type: "image/png",
		width: 1200,
		height: 630,
		alt: "Svelte Animations Components",
	};

	const canonical = `${seo_config.url}/`;
	const jsonLd = {
		"@graph": [
			{
				"@type": "Organization",
				"@id": `${seo_config.url}/#organization`,
				name: "Svelte Animations",
				url: seo_config.url,
				sameAs: [github_repo.url, "https://x.com/Sikandar_Bhide"],
			},
			{
				"@type": "WebSite",
				"@id": `${seo_config.url}/#website`,
				name: "Svelte Animations",
				url: seo_config.url,
				description,
				inLanguage: "en",
				publisher: { "@id": `${seo_config.url}/#organization` },
			},
			{
				"@type": "CollectionPage",
				"@id": `${canonical}#webpage`,
				name: title,
				description,
				url: canonical,
				isPartOf: {
					"@id": `${seo_config.url}/#website`,
				},
				mainEntity: {
					"@type": "ItemList",
					name: "Svelte animation component collections",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							url: `${seo_config.url}/magic`,
							name: "Svelte Magic UI",
							description:
								"Animated Svelte 5 components and motion-driven effects for modern interfaces.",
						},
						{
							"@type": "ListItem",
							position: 2,
							url: `${seo_config.url}/spell`,
							name: "Svelte Spell UI",
							description:
								"Refined Svelte 5 UI components inspired by Spell UI for product interfaces.",
						},
						{
							"@type": "ListItem",
							position: 3,
							url: `${seo_config.url}/fancy`,
							name: "Svelte Fancy Components",
							description:
								"Expressive text and media-driven components for Svelte 5 with distinctive interaction design.",
						},
					],
				},
			},
		],
	};
</script>

<MetaTags
	{title}
	titleTemplate="%s | Svelte Animations"
	{description}
	{keywords}
	{canonical}
	robots="index,follow"
	additionalRobotsProps={{ maxSnippet: -1, maxImagePreview: "large", maxVideoPreview: -1 }}
	openGraph={{
		type: "website",
		url: canonical,
		title: `${title} | Svelte Animations`,
		description,
		locale: "en_US",
		siteName: "Svelte Animations",
		images: [socialImage],
	}}
	twitter={{
		cardType: "summary_large_image",
		site: "@Sikandar_Bhide",
		creator: "@Sikandar_Bhide",
		title: `${title} | Svelte Animations`,
		description,
		image: socialImage.url,
		imageAlt: socialImage.alt,
	}}
	additionalMetaTags={[
		{ name: "author", content: "Sikandar Bhide" },
		{ name: "application-name", content: "Svelte Animations" },
	]}
/>
<JsonLd schema={jsonLd} />

<Hero />
<Sponsors />
<Footer />
