<script lang="ts">
	import MagicOverviewHero from "#lib/components/layout/magic/magic-overview-hero.svelte";
	import MagicOverviewShowcase from "#lib/components/layout/magic/magic-overview-showcase.svelte";
	import { seo_config } from "#lib/config/seo.js";
	import { JsonLd, MetaTags } from "svelte-meta-tags";

	const title = "Svelte Magic UI Components";
	const description =
		"Explore open-source Svelte Magic UI components: animated backgrounds, text effects, buttons, cards, and motion-driven UI built for Svelte 5.";
	const keywords = [
		"Svelte Magic UI",
		"Svelte 5 animation components",
		"Svelte UI effects",
		"motion-sv components",
		"Tailwind CSS animations",
		"animated Svelte components",
		"reusable Svelte effects",
		"interactive Svelte UI",
	];
	const socialImage = {
		url: `${seo_config.url}/og.png`,
		secureUrl: `${seo_config.url}/og.png`,
		type: "image/png",
		width: 1200,
		height: 630,
		alt: "Svelte Magic UI",
	};

	const canonical = `${seo_config.url}/magic`;
	const jsonLd = {
		"@graph": [
			{
				"@type": "CollectionPage",
				"@id": `${canonical}#webpage`,
				name: title,
				description,
				url: canonical,
				isPartOf: { "@id": `${seo_config.url}/#website` },
				breadcrumb: { "@id": `${canonical}#breadcrumb` },
				about: { "@type": "Thing", name: "Svelte 5 animation components" },
				inLanguage: "en",
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${canonical}#breadcrumb`,
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: "Svelte Animations",
						item: `${seo_config.url}/`,
					},
					{ "@type": "ListItem", position: 2, name: title, item: canonical },
				],
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
	additionalMetaTags={[{ name: "author", content: "Sikandar Bhide" }]}
/>
<JsonLd schema={jsonLd} />

<div class="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
	<MagicOverviewHero />
	<MagicOverviewShowcase />
</div>
