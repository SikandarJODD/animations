<script lang="ts">
	import MagicOverviewHero from "#lib/components/layout/magic/magic-overview-hero.svelte";
	import MagicOverviewShowcase from "#lib/components/layout/magic/magic-overview-showcase.svelte";
	import { seo_config } from "#lib/config/seo.js";
	import SEOComponent from "#lib/seo/seo.svelte";

	const title = "Svelte Magic UI";
	const description =
		"Explore Svelte Magic UI, a curated collection of animated Svelte 5 components and motion-driven effects built for modern product interfaces.";
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
		url: "https://sv-animations.vercel.app/og.png",
		width: 1200,
		height: 630,
		alt: "Svelte Magic UI",
	};

	const canonical = `${seo_config.url}/magic`;
	let jsonLd = $derived({
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: title,
		description,
		url: canonical,
		isPartOf: {
			"@type": "WebSite",
			name: "Svelte Animations",
			url: seo_config.url,
		},
		about: {
			"@type": "Thing",
			name: "Svelte Magic UI",
		},
	});
</script>

<svelte:head>
	<script type="application/ld+json">
		{@html JSON.stringify(jsonLd)}
	</script>
</svelte:head>

<SEOComponent
	{title}
	{description}
	{keywords}
	siteName="Svelte Magic UI"
	images={[socialImage]}
	author="Sikandar Jodd"
/>

<div class="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
	<MagicOverviewHero />
	<MagicOverviewShowcase />
</div>
