<script lang="ts">
	import SpellOverviewHero from "#lib/components/layout/spell/spell-overview-hero.svelte";
	import SpellOverviewShowcase from "#lib/components/layout/spell/spell-overview-showcase.svelte";
	import { seo_config } from "#lib/config/seo.js";
	import { buildSpellKeywords, SPELL_SOCIAL_IMAGE } from "#lib/seo/spell.js";
	import { JsonLd, MetaTags } from "svelte-meta-tags";

	const title = "Svelte Spell UI Components";
	const description =
		"Explore polished Svelte Spell UI components inspired by Spell UI and built with Svelte 5, Tailwind CSS, and Motion SV for modern product interfaces.";
	const keywords = buildSpellKeywords([
		"Svelte 5 UI components",
		"Svelte design system",
		"polished Svelte components",
		"modern Svelte interface",
		"Svelte frontend components",
		"interactive Svelte UI",
		"Svelte animation components",
		"reusable Svelte components",
		"UI components for design engineers",
		"product interface components",
	]);
	const socialTitle = `${title} | Svelte Spell UI`;
	const canonical = `${seo_config.url}/spell`;
	const socialImage = {
		...SPELL_SOCIAL_IMAGE,
		secureUrl: SPELL_SOCIAL_IMAGE.url,
		type: "image/png",
	};
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
				about: { "@type": "Thing", name: "Svelte 5 product interface components" },
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
		title: socialTitle,
		description,
		locale: "en_US",
		siteName: "Svelte Animations",
		images: [socialImage],
	}}
	twitter={{
		cardType: "summary_large_image",
		site: "@Sikandar_Bhide",
		creator: "@Sikandar_Bhide",
		title: socialTitle,
		description,
		image: socialImage.url,
		imageAlt: socialImage.alt,
	}}
	additionalMetaTags={[{ name: "author", content: "Sikandar Bhide" }]}
/>
<JsonLd schema={jsonLd} />

<div class="w-full">
	<div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
		<SpellOverviewHero />
	</div>

	<SpellOverviewShowcase />
</div>
