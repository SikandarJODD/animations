<script lang="ts">
	import { page } from "$app/state";
	import { H1, H2, Paragraph, H3 } from "$lib/components/docs/markdown/index";
	import { PreviewComponent } from "$lib/components/ui/preview-component";
	import { Button } from "$lib/components/ui/button";
	import * as Item from "$lib/components/ui/item";
	import InstallComponent from "$lib/components/docs/base/InstallComponent.svelte";
	import PackageBadges from "$lib/components/docs/base/PackageBadges.svelte";
	import APITable from "$lib/components/docs/base/APITable.svelte";
	import { CopyPageDropdown } from "$lib/components/docs/copy-page-dropdown";
	import { MetaTags } from "svelte-meta-tags";
	import {
		buildSpellKeywords,
		SPELL_SOCIAL_IMAGE,
		SPELL_TITLE_TEMPLATE,
	} from "$lib/seo/spell";
	import { data } from "./data";
	import { Download } from "@lucide/svelte";

	let PreviewComp = $derived(data.preview);
	let installUrl = $derived(`${page.url.origin}/s/${data.id}.json`);

	let getURLPath = (url: string) => {
		// clean url by removing query params and hash
		let cleanUrl = url.split("?")[0].split("#")[0];
		return cleanUrl;
	};

	let llmsTxtUrl = $derived(`${getURLPath(page.url.pathname)}/llms.txt`);
	let canonical = $derived(page.url.href.split("?")[0].split("#")[0]);
	const keywords = buildSpellKeywords(data.seo.keywords, [
		data.title,
		"animated signature component",
		"handwriting effect Svelte",
		"signature SVG animation",
	]);
	const socialTitle = `${data.seo.title} | Svelte Spell UI`;
</script>

<MetaTags
	title={data.seo.title}
	titleTemplate={SPELL_TITLE_TEMPLATE}
	description={data.seo.description}
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
		title: socialTitle,
		description: data.seo.description,
		type: "article",
		siteName: "Svelte Spell UI",
		images: [SPELL_SOCIAL_IMAGE],
	}}
	twitter={{
		cardType: "summary_large_image",
		title: socialTitle,
		description: data.seo.description,
		image: SPELL_SOCIAL_IMAGE.url,
		imageAlt: SPELL_SOCIAL_IMAGE.alt,
		site: "@Sikandar_Bhide",
		creator: "@Sikandar_Bhide",
	}}
/>

<div class="space-y-8 md:space-y-8">
	<section>
		<div class="flex flex-col justify-between gap-3 md:flex-row md:items-center md:gap-4">
			<H1 id="introduction">{data.title}</H1>
			<CopyPageDropdown componentName={data.title} {llmsTxtUrl} />
		</div>

		<div class="mt-3 max-w-2xl">
			<Paragraph>
				{data.description}
			</Paragraph>
			<PackageBadges packages={data.installBlock?.packages} />
		</div>
	</section>

	<section>
		<PreviewComponent code={data.previewCode}>
			{#if PreviewComp}
				<PreviewComp />
			{/if}
		</PreviewComponent>
	</section>

	<section>
		<H2 id="installation">Installation</H2>
		<InstallComponent
			{installUrl}
			tailwindConfig={data.installBlock?.tailwind
				? { code: data.installBlock.tailwind }
				: undefined}
			codeBlocks={data.installBlock?.installCode}
			packages={data.installBlock?.packages}
			folderStructure={data.installBlock?.folderStructure}
			class="mt-4"
		/>

		<Item.Root variant="outline" class="mt-4 justify-between gap-3">
			<Item.Content>
				<Item.Title>Download LastoriaBoldRegular.otf Font</Item.Title>
				<Item.Description>
					Place the font file inside your <code class="bg-secondary rounded-xs px-0.5"
						>static</code
					> folder
				</Item.Description>
			</Item.Content>
			<Item.Actions>
				<Button
					variant="default"
					size="sm"
					download="LastoriaBoldRegular.otf"
					href="/LastoriaBoldRegular.otf"
				>
					<Download /> Download Font
				</Button>
			</Item.Actions>
		</Item.Root>
	</section>

	{#if data.examples && data.examples.length > 0}
		<section>
			<H2 id="examples">Examples</H2>
			<div class="mt-4 space-y-8">
				{#each data.examples as example (example.name)}
					<div class="space-y-3">
						<H3 id={example.name.toLowerCase().replace(/\s+/g, "-")} class="mt-0">
							{example.name}
						</H3>
						<PreviewComponent code={example.code}>
							<example.preview />
						</PreviewComponent>
					</div>
				{/each}
			</div>
		</section>
	{/if}

	{#if data.props && data.props.length > 0}
		<section>
			<H2 id="props">Props</H2>
			<div class="mt-3 space-y-6">
				<div>
					{#each data.props as prop (prop.name)}
						<APITable data={prop} />
					{/each}
				</div>
			</div>
		</section>
	{/if}
</div>
