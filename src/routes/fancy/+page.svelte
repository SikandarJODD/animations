<script lang="ts">
	import { page } from "$app/state";
	import { H1, Paragraph } from "$lib/components/docs/markdown";
	import FancyShowcase from "$lib/components/layout/fancy/fancy-showcase.svelte";
	import { MetaTags } from "svelte-meta-tags";
	import gsap from "gsap";
	import { SplitText } from "gsap/SplitText";
	import { Button } from "$lib/components/ui/button";
	import { LineShadowText } from "$lib/components/magic/line-shadow-text";
	import { mode } from "mode-watcher";

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
			name: "Svelte Fancy Components",
		},
	});

	let animate = (node: HTMLElement) => {
		gsap.registerPlugin(SplitText);
		let heading = node.querySelector("h1");
		let paragraph = node.querySelector("p");
		let buttons = node.querySelectorAll("a");
		let splitTextHeading = new SplitText(heading, { type: "words", mask: "words" });
		let splitTextParagraph = new SplitText(paragraph, { type: "words", mask: "words" });
		let tl = gsap
			.timeline()
			.from(splitTextHeading.words, {
				opacity: 0,
				y: 50,
				stagger: 0.2,
				ease: "power4.out",
			})
			.from(
				splitTextParagraph.words,
				{
					opacity: 0,
					stagger: 0.05,
					y: 20,
					ease: "power4.out",
				},
				"-=0.5"
			)
			.fromTo(
				buttons,
				{ opacity: 0, y: 20 },
				{
					opacity: 1,
					y: 0,
					stagger: 0.2,
					ease: "power4.out",
				},
				"-=0.5"
			);
	};
</script>

<MetaTags
	{title}
	titleTemplate="%s | Svelte Animations"
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
		siteName: "Svelte Fancy Components",
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
<svelte:head>
	<script type="application/ld+json">
		{@html JSON.stringify(jsonLd)}
	</script>
</svelte:head>

<div class="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
	<section
		{@attach animate}
		class="relative flex min-h-90 flex-col items-center justify-center rounded-2xl bg-linear-20 dark:from-emerald-900/50 dark:via-emerald-900/10 dark:via-40% dark:to-transparent"
	>
		<H1 id="overview" class="text-2xl font-semibold md:text-4xl">Svelte Fancy Components</H1>
		<Paragraph id="description" class="mt-4">
			Unoffical port of the original <a
				href="https://fancycomponents.dev"
				target="_blank"
				rel="noopener noreferrer"
				class="text-primary">Fancy Components</a
			>
		</Paragraph>
		<div class="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
			<Button
				size="lg"
				class="relative cursor-pointer rounded-full bg-emerald-400 text-emerald-900 transition-none hover:bg-emerald-400/80 dark:bg-emerald-500 dark:text-emerald-950 dark:hover:bg-emerald-500/90"
				href="/fancy/letter-3d-swap"
			>
				View Components</Button
			>
			<Button
				size="lg"
				class="cursor-pointer rounded-full pl-2 transition-none"
				variant="outline"
				href="https://github.com/sponsors/SikandarJODD"
			>
				<span class="rounded-full border">
					<img
						src="https://github.com/SikandarJODD.png"
						alt="Bhide Svelte"
						class="font-figtree size-5 rounded-full"
					/>
				</span>
				Sponsor My Work</Button
			>
		</div>
	</section>
	<FancyShowcase />
</div>
