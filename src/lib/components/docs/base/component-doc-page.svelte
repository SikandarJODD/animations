<script lang="ts" module>
	import type { Component } from "svelte";
	import type { SEO } from "#lib/types/seo.js";
	import type { Example } from "#lib/types/examples.js";
	import type { PropsTable, UsageCode } from "#lib/types/structure.js";
	import type { CodeBlock } from "#lib/components/ui/code/index.js";

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
		usage?: UsageCode;
		examples?: Example[];
		additionalExamples?: Example[];
		propsTables?: PropsTable[];
		originalDocsUrl?: string;
		descriptionClass?: string;
		showRetry?: boolean;
	};
</script>

<script lang="ts">
	import { page } from "$app/state";
	import { seo_config } from "#lib/config/seo.js";
	import { H1, H2, Paragraph, H3 } from "#lib/components/docs/markdown/index.js";
	import { PreviewComponent } from "#lib/components/ui/preview-component/index.js";
	import InstallComponent from "#lib/components/docs/base/install-component.svelte";
	import PackageBadges from "#lib/components/docs/base/package-badges.svelte";
	import APITable from "#lib/components/docs/base/api-table.svelte";
	import * as Code from "#lib/components/ui/code/index.js";
	import { CopyPageDropdown } from "#lib/components/docs/copy-page-dropdown/index.js";
	import SEOComponent from "#lib/seo/seo.svelte";
	import ExternalLink from "@lucide/svelte/icons/external-link";
	import {
		buildSpellKeywords,
		SPELL_SOCIAL_IMAGE,
		SPELL_TITLE_TEMPLATE,
	} from "#lib/seo/spell.js";
	import * as Item from "#lib/components/ui/item/index.js";
	import { Button } from "#lib/components/ui/button/index.js";

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
		usage,
		examples = [],
		additionalExamples = [],
		propsTables = [],
		originalDocsUrl,
		descriptionClass = "",
		showRetry = true,
	}: ComponentDocPageProps = $props();

	let PreviewComp = $derived(preview);
	let isSpellRoute = $derived(page.url.pathname.split("/").includes("spell"));
	let installUrl = $derived(
		`${seo_config.url}/${installPathPrefix ?? (isSpellRoute ? "s" : "r")}/${id}.json`
	);
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
	let resolvedImages = $derived(seo.images ?? (isSpellRoute ? [SPELL_SOCIAL_IMAGE] : undefined));

	let getURLPath = (url: string) => {
		// clean url by removing query params and hash
		let cleanUrl = url.split("?")[0].split("#")[0];
		return cleanUrl;
	};

	let llmsTxtUrl = $derived(
		new URL(`${getURLPath(page.url.pathname)}/llms.txt`, seo_config.url).href
	);
</script>

<SEOComponent
	title={seo.title}
	titleTemplate={resolvedTitleTemplate}
	description={seo.description}
	keywords={resolvedKeywords}
	canonicalPath={seo.canonicalPath}
	robots={seo.robots}
	socialTitle={seo.socialTitle}
	openGraphType={seo.openGraphType ?? "article"}
	siteName={seo.siteName ?? (isSpellRoute ? "Svelte Spell UI" : "Svelte Animations")}
	images={resolvedImages}
	author={seo.author}
	pageType={seo.pageType ?? "component"}
	breadcrumbs={seo.breadcrumbs}
	structuredData={seo.structuredData}
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
		<PreviewComponent code={previewCode} class={previewClass} {showRetry}>
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
		{#if originalDocsUrl}
			<Item.Root variant="muted" class="mt-4">
				<Item.Content>
					<Item.Title id="visit-original-docs">Visit Original Docs</Item.Title>
					<Item.Description>
						For deeper guidance, visit the Fancy Components documentation.
					</Item.Description>
				</Item.Content>
				<Item.Actions>
					<Button
						variant="outline"
						size="sm"
						target="_blank"
						rel="noreferrer"
						href={originalDocsUrl}
					>
						Docs
						<ExternalLink class="size-4" />
					</Button>
				</Item.Actions>
			</Item.Root>
		{/if}
	</section>

	{#if usage?.code}
		<section>
			<H2 id="usage">Usage</H2>
			<div class="mt-4 space-y-4">
				{#if Array.isArray(usage.code)}
					{#each usage.code as codeBlock}
						<Code.Snippet code={codeBlock} />
					{/each}
				{:else}
					<Code.Snippet code={usage.code} />
				{/if}
			</div>
		</section>
	{/if}

	{#if examples.length > 0}
		<section>
			<H2 id="examples">Examples</H2>
			<div class="mt-4 space-y-8">
				{#each examples as example (example.name)}
					<div class="space-y-0">
						<H3 id={example.name.toLowerCase().replace(/\s+/g, "-")} class="mt-0">
							{example.name}
						</H3>
						{#if example.description}
							<Paragraph>
								{example.description}
							</Paragraph>
						{/if}
						<PreviewComponent
							code={example.code}
							class={example.previewClass}
							showRetry={example.showRetry}
						>
							<example.preview />
						</PreviewComponent>
					</div>
				{/each}
			</div>
		</section>
	{/if}

	{#if additionalExamples.length > 0}
		<section>
			<H2 id="additional-examples">Additional Examples</H2>
			<div class="mt-4 space-y-8">
				{#each additionalExamples as example (example.name)}
					<div class="space-y-0">
						<H3 id={example.name.toLowerCase().replace(/\s+/g, "-")} class="mt-0">
							{example.name}
						</H3>
						{#if example.description}
							<Paragraph>
								{example.description}
							</Paragraph>
						{/if}
						<PreviewComponent
							code={example.code}
							class={example.previewClass}
							showRetry={example.showRetry}
						>
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
