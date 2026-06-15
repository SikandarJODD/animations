<script lang="ts" module>
	import type { Component } from "svelte";
	import type { SEO } from "$lib/types/seo";
	import type { Example } from "$lib/types/examples";
	import type { PropsTable } from "$lib/types/structure";
	import type { CodeBlock } from "$lib/components/ui/code";

	export type ComponentDocPageProps = {
		id: string;
		title: string;
		description: string;
		seo: SEO;
		installPathPrefix?: "r" | "s" | "f";
		preview?: Component;
		previewCode?: CodeBlock | CodeBlock[];
		previewClass?: string;
		installCodeBlocks?: CodeBlock | CodeBlock[];
		installPackages?: string[];
		installFolderStructure?: string;
		installTailwindCode?: CodeBlock;
		examples?: Example[];
		propsTables?: PropsTable[];
		descriptionClass?: string;
	};
</script>

<script lang="ts">
	import { page } from "$app/state";
	import { H1, H2, Paragraph, H3 } from "$lib/components/docs/markdown/index";
	import { PreviewComponent } from "$lib/components/ui/preview-component";
	import InstallComponent from "$lib/components/docs/base/InstallComponent.svelte";
	import PackageBadges from "$lib/components/docs/base/PackageBadges.svelte";
	import APITable from "$lib/components/docs/base/APITable.svelte";
	import { CopyPageDropdown } from "$lib/components/docs/copy-page-dropdown";
	import { MetaTags } from "svelte-meta-tags";
	import { buildSpellKeywords, SPELL_SOCIAL_IMAGE, SPELL_TITLE_TEMPLATE } from "$lib/seo/spell";

	let {
		id,
		title,
		description,
		seo,
		installPathPrefix,
		preview,
		previewCode,
		previewClass,
		installCodeBlocks,
		installPackages = [],
		installFolderStructure,
		installTailwindCode,
		examples = [],
		propsTables = [],
		descriptionClass = "",
	}: ComponentDocPageProps = $props();

	let PreviewComp = $derived(preview);
	let isSpellRoute = $derived(page.url.pathname.split("/").includes("spell"));
	let installUrl = $derived(
		`${page.url.origin}/${installPathPrefix ?? (isSpellRoute ? "s" : "r")}/${id}.json`
	);
	let canonical = $derived(page.url.href.split("?")[0].split("#")[0]);
	let resolvedTitleTemplate = $derived(
		seo.titleTemplate ?? (isSpellRoute ? SPELL_TITLE_TEMPLATE : "%s | Svelte Animations")
	);
	let resolvedKeywords = $derived(
		isSpellRoute
			? buildSpellKeywords(seo.keywords, [
					seo.title,
					`${seo.title} Svelte component`,
					`${seo.title} Spell UI`,
				])
			: seo.keywords
	);
	let resolvedSocialTitle = $derived(isSpellRoute ? `${seo.title} | Svelte Spell UI` : seo.title);
	let resolvedImages = $derived(seo.images ?? (isSpellRoute ? [SPELL_SOCIAL_IMAGE] : undefined));

	let getURLPath = (url: string) => {
		// clean url by removing query params and hash
		let cleanUrl = url.split("?")[0].split("#")[0];
		return cleanUrl;
	};

	let llmsTxtUrl = $derived(`${getURLPath(page.url.href)}/llms.txt`);
</script>

<MetaTags
	title={seo.title}
	titleTemplate={resolvedTitleTemplate}
	description={seo.description}
	keywords={resolvedKeywords}
	{canonical}
	robots="index,follow"
	additionalRobotsProps={{
		maxSnippet: -1,
		maxImagePreview: "large",
		maxVideoPreview: -1,
	}}
	openGraph={{
		url: canonical,
		title: resolvedSocialTitle,
		description: seo.description,
		type: "article",
		siteName: isSpellRoute ? "Svelte Spell UI" : "Svelte Animations",
		images: resolvedImages,
	}}
	twitter={{
		creator: "@Sikandar_Bhide",
		site: "@Sikandar_Bhide",
		cardType: "summary_large_image",
		title: resolvedSocialTitle,
		description: seo.description,
		image: resolvedImages?.[0]?.url,
		imageAlt: resolvedImages?.[0]?.alt,
	}}
/>
<div class="space-y-6 md:space-y-8">
	<section>
		<div class="flex flex-col justify-between gap-3 md:flex-row md:items-center md:gap-4">
			<H1 id="introduction">{title}</H1>
			<CopyPageDropdown componentName={title} {llmsTxtUrl} />
		</div>

		<div class="mt-3 max-w-2xl">
			<Paragraph class={descriptionClass}>
				{description}
			</Paragraph>
			<PackageBadges packages={installPackages} />
		</div>
	</section>

	<section>
		<PreviewComponent code={previewCode} class={previewClass}>
			{#if PreviewComp}
				<PreviewComp />
			{/if}
		</PreviewComponent>
	</section>

	<section>
		<H2 id="installation">Installation</H2>
		<InstallComponent
			{installUrl}
			tailwindConfig={installTailwindCode ? { code: installTailwindCode } : undefined}
			codeBlocks={installCodeBlocks}
			packages={installPackages}
			folderStructure={installFolderStructure}
			class="mt-4"
		/>
	</section>

	{#if examples.length > 0}
		<section>
			<H2 id="examples">Examples</H2>
			<div class="mt-4 space-y-8">
				{#each examples as example (example.name)}
					<div class="space-y-0">
						<H3 id={example.name.toLowerCase().replace(/\s+/g, "-")} class="mt-0">
							{example.name}
						</H3>
						<!-- {#if example.description}
							<Paragraph>
								{example.description}
							</Paragraph>
						{/if} -->
						<PreviewComponent code={example.code} class={example.previewClass}>
							<example.preview />
						</PreviewComponent>
					</div>
				{/each}
			</div>
		</section>
	{/if}

	{#if propsTables.length > 0}
		<section>
			<H2 id="props">Props</H2>
			<div class="mt-3 space-y-6">
				<div>
					{#each propsTables as prop, index (prop.name ?? index)}
						<APITable data={prop} />
					{/each}
				</div>
			</div>
		</section>
	{/if}
</div>
