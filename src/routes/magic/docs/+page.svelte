<script lang="ts">
	import { page } from "$app/state";
	import { CopyPageDropdown } from "$lib/components/docs/copy-page-dropdown";
	import {
		Divider,
		H1,
		H2,
		Link,
		ListItem,
		Paragraph,
		Strong,
		UnorderedList,
	} from "$lib/components/docs/markdown";
	import { MetaTags } from "svelte-meta-tags";

	const title = "Introduction";
	const description =
		"Svelte Magic UI is a collection of re-usable components built with Svelte, Tailwind CSS and Motion SV.";
	const socialTitle = "Svelte Magic UI - Introduction";

	let canonical = $derived(page.url.href.split("?")[0].split("#")[0]);
	let llmsTxtUrl = $derived(`${canonical}/llms.txt`);
</script>

<MetaTags
	{title}
	titleTemplate="%s - Svelte Magic UI"
	{description}
	keywords={[
		"Svelte Magic UI",
		"Introduction",
		"Landing Pages",
		"Components",
		"Svelte",
		"Tailwind CSS",
		"Motion SV",
	]}
	{canonical}
	openGraph={{
		title: socialTitle,
		description,
		url: canonical,
		type: "article",
	}}
	twitter={{
		title: socialTitle,
		description,
		image: "https://sv-animations.vercel.app/og.png",
		cardType: "summary_large_image",
		site: "@Sikandar_Bhide",
		creator: "@Sikandar_Bhide",
	}}
/>

<div class="space-y-10 md:space-y-12">
	<section class="space-y-4">
		<div class="flex flex-col justify-between gap-3 md:flex-row md:items-center md:gap-4">
			<H1 id="introduction">Introduction</H1>
			<CopyPageDropdown componentName={title} {llmsTxtUrl} />
		</div>

		<div class="max-w-3xl space-y-3">
			<Paragraph>
				<span class="text-primary">Svelte Magic UI</span> is a collection of animation components
				built with Svelte, Tailwind CSS and Motion SV.
			</Paragraph>
		</div>
	</section>

	<Divider class="my-0" />

	<section class="space-y-3">
		<H2 id="features">Features</H2>

		<UnorderedList class="mt-0">
			<ListItem><Strong>50+ components</Strong> ready to use in your projects</ListItem>
			<ListItem><Strong>Open source</Strong> and free forever</ListItem>
			<ListItem><Strong>Easily customizable</Strong> to match your design system</ListItem>
			<ListItem
				><Strong>Install components via Shadcn Svelte CLI</Strong> - Quick integration with your
				project</ListItem
			>
			<ListItem
				><Strong>All components include</Strong> Copy markdown, open in AI tools support</ListItem
			>
			<ListItem><Strong>TypeScript support</Strong> - Fully typed components</ListItem>
		</UnorderedList>
	</section>

	<Divider class="my-0" />

	<section class="space-y-4">
		<H2 id="credits">Credits</H2>
		<Paragraph>
			Inspired from <Link
				href="https://magicui.design"
				target="_blank"
				rel="noreferrer"
				class="rounded-sm bg-pink-500/10 px-1 py-0.5 text-pink-500 no-underline hover:text-pink-400"
				>Magic UI</Link
			>
			by <Link href="https://x.com/dillionverma" target="_blank" rel="noreferrer"
				>Dillon Verma</Link
			>.
		</Paragraph>
		<Paragraph>
			This project adapts the original ideas for the Svelte ecosystem while keeping the source
			credit visible in the docs.
		</Paragraph>
	</section>

	<Divider class="my-0" />

	<section class="space-y-3">
		<H2 id="sponsor">Sponsor</H2>
		<Paragraph>
			If you find this project helpful, please consider supporting the project:
		</Paragraph>

		<UnorderedList class="mt-0">
			<ListItem>
				<Link
					href="https://github.com/sponsors/SikandarJODD"
					target="_blank"
					rel="noreferrer"
				>
					Sponsor Svelte Animations on GitHub
				</Link>
			</ListItem>
			<ListItem>
				<Link href="https://github.com/sponsors/hanielu" target="_blank" rel="noreferrer">
					Sponsor Motion SV on GitHub
				</Link>
				- Motion SV is built by
				<Link href="https://github.com/hanielu" target="_blank" rel="noreferrer">
					@hanielu
				</Link>
				and powers all the animations in this project
			</ListItem>
			<ListItem>
				<Link
					href="https://twitter.com/intent/tweet?text=Check%20out%20Svelte%20Animations%20%E2%80%93%20a%20collection%20of%2050%2B%20beautiful%20animated%20components%20for%20Svelte!%20https://sv-animations.vercel.app%20by%20@Sikandar_Bhide"
					target="_blank"
					rel="noreferrer"
				>
					Share it on Twitter
				</Link>
			</ListItem>
		</UnorderedList>
	</section>
</div>
