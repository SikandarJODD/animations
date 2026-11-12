<script lang="ts">
	import { H1, Paragraph } from "#lib/components/docs/markdown/index.js";
	import { seo_config } from "#lib/config/seo.js";
	import FancyShowcase from "#lib/components/layout/fancy/fancy-showcase.svelte";
	import FaviconLink from "#lib/components/ui/favicon-link/favicon-link.svelte";
	import { JsonLd, MetaTags } from "svelte-meta-tags";
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
		url: `${seo_config.url}/fancy-og.png`,
		secureUrl: `${seo_config.url}/fancy-og.png`,
		type: "image/png",
		width: 1200,
		height: 630,
		alt: "Svelte Fancy Components",
	};

	const canonical = `${seo_config.url}/fancy`;
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
				about: { "@type": "Thing", name: "Creative Svelte 5 components" },
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
