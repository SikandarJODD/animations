<script lang="ts">
	import { CopyPageDropdown } from "#lib/components/docs/copy-page-dropdown/index.js";
	import { seo_config } from "#lib/config/seo.js";
	import {
		H1,
		H2,
		Link,
		ListItem,
		Paragraph,
		Strong,
		UnorderedList,
	} from "#lib/components/docs/markdown/index.js";
	import SEOComponent from "#lib/seo/seo.svelte";

	const title = "Introduction";
	const description =
		"Introduction to Svelte Fancy Components, a collection of expressive text and media components adapted for Svelte.";
	const keywords = [
		"Svelte Fancy Components introduction",
		"Svelte Fancy Components",
		"Fancy Components for Svelte",
		"Svelte text animations",
		"Svelte media animations",
		"interactive Svelte components",
	];
	const socialImage = {
		url: "https://sv-animations.vercel.app/fancy-og.png",
		width: 1200,
		height: 630,
		alt: "Svelte Fancy Components",
	};
	const socialTitle = `${title} | Svelte Fancy Components`;

	const llmsTxtUrl = `${seo_config.url}/fancy/introduction/llms.txt`;
</script>

<SEOComponent
	{title}
	titleTemplate="%s | Svelte Fancy Components"
	{description}
	{keywords}
	{socialTitle}
	openGraphType="article"
	siteName="Svelte Fancy Components"
	images={[socialImage]}
/>

<div class="space-y-8 md:space-y-6">
	<section class="space-y-4">
		<div class="flex flex-col justify-between gap-3 md:flex-row md:items-center md:gap-4">
			<H1 id="introduction">Introduction</H1>
			<CopyPageDropdown componentName={title} {llmsTxtUrl} />
		</div>

		<div class="max-w-3xl space-y-3">
			<Paragraph>
				Svelte Fancy Components is a focused collection of expressive text and media
				components ported from Fancy Components with patterns that fit naturally into the
				Svelte ecosystem.
			</Paragraph>
		</div>
	</section>

	<section class="space-y-3">
		<H2 id="goal">Goal</H2>
		<div class="max-w-3xl space-y-3">
			<Paragraph>Bring Fancy Components to the Svelte ecosystem.</Paragraph>
		</div>
	</section>

	<section class="space-y-3">
		<H2 id="credits">Credits</H2>
		<UnorderedList class="mt-0">
			<ListItem>
				<Strong>Original Website:</Strong>
				<Link href="https://www.fancycomponents.dev" target="_blank" rel="noreferrer">
					fancycomponents.dev
				</Link>
			</ListItem>
			<ListItem>
				<Strong>Creator:</Strong>
				<Link href="https://x.com/nonzeroexitcode" target="_blank" rel="noreferrer">
					Daniel Petho
				</Link>
			</ListItem>
		</UnorderedList>

		<Paragraph class="mt-4">
			All credits for design and original implementation go to Daniel Petho. This project is a
			port of his work to the Svelte ecosystem.
		</Paragraph>
	</section>
</div>
