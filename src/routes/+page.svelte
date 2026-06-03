<script lang="ts">
	import { page } from "$app/state";
	import Hero from "$lib/components/layout/Hero.svelte";
	import { MetaTags } from "svelte-meta-tags";

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

	let canonical = $derived(page.url.href.split("?")[0].split("#")[0]);
	let jsonLd = $derived({
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebSite",
				"@id": `${page.url.origin}/#website`,
				name: "Svelte Animations",
				url: page.url.origin,
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
					"@id": `${page.url.origin}/#website`,
				},
				mainEntity: {
					"@type": "ItemList",
					name: "Svelte animation component collections",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							url: `${page.url.origin}/magic`,
							name: "Svelte Magic UI",
							description:
								"Animated Svelte 5 components and motion-driven effects for modern interfaces.",
						},
						{
							"@type": "ListItem",
							position: 2,
							url: `${page.url.origin}/spell`,
							name: "Svelte Spell UI",
							description:
								"Refined Svelte 5 UI components inspired by Spell UI for product interfaces.",
						},
						{
							"@type": "ListItem",
							position: 3,
							url: `${page.url.origin}/fancy`,
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

<MetaTags
	{title}
	{description}
	{keywords}
	{canonical}
	robots="index,follow"
	additionalRobotsProps={{
		maxSnippet: -1,
		maxImagePreview: "large",
		maxVideoPreview: -1,
	}}
	openGraph={{
		url: canonical,
		title,
		description,
		type: "website",
		siteName: "Svelte Animations",
		images: [socialImage],
	}}
	twitter={{
		cardType: "summary_large_image",
		title,
		description,
		image: socialImage.url,
		imageAlt: socialImage.alt,
		site: "@Sikandar_Bhide",
		creator: "@Sikandar_Bhide",
	}}
	additionalMetaTags={[
		{
			name: "author",
			content: "Sikandar Bhide",
		},
	]}
/>

<Hero />
