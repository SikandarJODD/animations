<script lang="ts">
	import Hero from "#lib/components/layout/hero.svelte";
	import Footer from "#lib/components/main/footer.svelte";
	import Sponsors from "#lib/components/main/sponsors.svelte";
	import { seo_config } from "#lib/config/seo.js";
	import SEOComponent from "#lib/seo/seo.svelte";

	const title = "Svelte Animations Components";
	const description =
		"50+ free and open-source animated components and effects. Built with Svelte 5, Typescript, Tailwind CSS, and Motion SV.";
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
		url: "https://sv-animations.vercel.app/og.png",
		width: 1200,
		height: 630,
		alt: "Svelte Animations Components",
	};

	const canonical = `${seo_config.url}/`;
	let jsonLd = $derived({
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebSite",
				"@id": `${seo_config.url}/#website`,
				name: "Svelte Animations",
				url: seo_config.url,
				description,
				inLanguage: "en",
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
	});
</script>

<svelte:head>
	<script type="application/ld+json">
		{@html JSON.stringify(jsonLd)}
	</script>
</svelte:head>

<SEOComponent {title} {description} {keywords} images={[socialImage]} />

<Hero />
<Sponsors />
<Footer />
