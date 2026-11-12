<script lang="ts">
	import { H1, Paragraph } from "#lib/components/docs/markdown/index.js";
	import { seo_config } from "#lib/config/seo.js";
	import FancyShowcase from "#lib/components/layout/fancy/fancy-showcase.svelte";
	import FaviconLink from "#lib/components/ui/favicon-link/favicon-link.svelte";
	import SEOComponent from "#lib/seo/seo.svelte";
	import { Button } from "#lib/components/ui/button/index.js";

	const title = "Svelte Fancy Components";
	const description =
		"Explore Svelte Fancy Components, a collection of expressive text and media-driven components for Svelte 5 with distinctive interaction design.";
	const keywords = [
		"Svelte Fancy Components",
		"Svelte text animations",
		"Svelte media components",
		"expressive Svelte UI",
		"Svelte motion components",
		"interactive typography",
		"creative Svelte components",
		"Svelte 5 animation library",
	];
	const socialImage = {
		url: "https://sv-animations.vercel.app/fancy-og.png",
		width: 1200,
		height: 630,
		alt: "Svelte Fancy Components",
	};

	const canonical = `${seo_config.url}/fancy`;
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
			name: "Svelte Fancy Components",
		},
	});
</script>

<SEOComponent
	{title}
	titleTemplate="%s | Svelte Animations"
	{description}
	{keywords}
	siteName="Svelte Fancy Components"
	images={[socialImage]}
/>
<svelte:head>
	<script type="application/ld+json">
		{@html JSON.stringify(jsonLd)}
	</script>
</svelte:head>

<div class="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
	<section
		class="flex min-h-96 flex-col items-center justify-center px-6 py-14 text-center sm:px-10"
	>
		<H1 id="overview" class="text-3xl leading-16 font-semibold sm:text-5xl md:text-6xl">
			Svelte Fancy Components
		</H1>
		<Paragraph
			id="description"
			class="text-muted-foreground mx-auto mt-5 max-w-2xl text-base text-balance"
		>
			Unofficial Svelte port of
			<FaviconLink href="https://www.fancycomponents.dev/" class="my-0">
				Fancy Components
			</FaviconLink>
			by
			<FaviconLink href="https://www.danielpetho.com/" class="my-0">
				Daniel Petho
			</FaviconLink>.
		</Paragraph>
		<div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
			<Button size="lg" class="rounded-full px-4" href="/fancy/letter-3d-swap">
				View Components</Button
			>
			<Button
				size="lg"
				class="rounded-full pr-4 pl-3 shadow-none transition-none"
				variant="outline"
				href="https://github.com/sponsors/SikandarJODD"
				target="_blank"
				rel="noopener noreferrer"
			>
				<span class="rounded-full">
					<img
						src="https://github.com/SikandarJODD.png"
						alt="Sikandar JODD"
						class="font-figtree size-5 rounded-full"
					/>
				</span>
				Sponsor My Work</Button
			>
		</div>
	</section>
	<FancyShowcase />
</div>
