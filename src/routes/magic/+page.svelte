<script lang="ts">
	import { page } from "$app/state";
	import { H1, Paragraph } from "$lib/components/docs/markdown";
	import { MetaTags } from "svelte-meta-tags";

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

	let canonical = $derived(page.url.href.split("?")[0].split("#")[0]);
	let jsonLd = $derived({
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: title,
		description,
		url: canonical,
		isPartOf: {
			"@type": "WebSite",
			name: "Svelte Animations",
			url: page.url.origin,
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
		siteName: "Svelte Magic UI",
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
			content: "Sikandar Jodd",
		},
	]}
/>

<div class="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
	<section class="space-y-4">
		<H1 id="overview" class="font-semibold">Svelte Magic UI</H1>
		<Paragraph class="max-w-3xl text-balance">
			A focused landing page for the Svelte Magic UI collection, with reusable animated
			components, visual effects, and installation-ready examples for Svelte 5.
		</Paragraph>
	</section>
</div>
