<script lang="ts">
	import { page } from "$app/state";
	import { seo_config } from "#lib/config/seo.js";
	import { H1, H2, Paragraph, H3 } from "#lib/components/docs/markdown/index.js";
	import { PreviewComponent } from "#lib/components/ui/preview-component/index.js";
	import { Button } from "#lib/components/ui/button/index.js";
	import * as Item from "#lib/components/ui/item/index.js";
	import InstallComponent from "#lib/components/docs/base/install-component.svelte";
	import PackageBadges from "#lib/components/docs/base/package-badges.svelte";
	import APITable from "#lib/components/docs/base/api-table.svelte";
	import { CopyPageDropdown } from "#lib/components/docs/copy-page-dropdown/index.js";
	import SEOComponent from "#lib/seo/seo.svelte";
	import {
		buildSpellKeywords,
		SPELL_SOCIAL_IMAGE,
		SPELL_TITLE_TEMPLATE,
	} from "#lib/seo/spell.js";
	import { data, textureDownloadUrl } from "./data";

	let PreviewComp = $derived(data.preview);
	let isSpellRoute = $derived(page.url.pathname.split("/").includes("spell"));
	let installUrl = $derived(`${seo_config.url}/${isSpellRoute ? "s" : "r"}/${data.id}.json`);

	let getURLPath = (url: string) => {
		// clean url by removing query params and hash
		let cleanUrl = url.split("?")[0].split("#")[0];
		return cleanUrl;
	};

	let llmsTxtUrl = $derived(
		new URL(`${getURLPath(page.url.pathname)}/llms.txt`, seo_config.url).href
	);
	const keywords = buildSpellKeywords(data.seo.keywords, [
		data.title,
		"3D book component",
		"book mockup Svelte",
		"hover perspective component",
	]);
	const socialTitle = `${data.seo.title} | Svelte Spell UI`;
	// $inspect("Spell", isSpellRoute);
	// $inspect("Install URL", isSpellRoute);
</script>

<SEOComponent
	title={data.seo.title}
	titleTemplate={SPELL_TITLE_TEMPLATE}
	description={data.seo.description}
	{keywords}
	{socialTitle}
	openGraphType="article"
	siteName="Svelte Spell UI"
	images={[SPELL_SOCIAL_IMAGE]}
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
				<Item.Title>Download textured cover image</Item.Title>
				<Item.Description>
					Use this texture for the optional textured book finish and save it in your app's
					`static/` folder.
				</Item.Description>
			</Item.Content>
			<Item.Actions>
				<Button
					variant="outline"
					size="sm"
					href={textureDownloadUrl}
					download="perspective-book-textured.avif"
				>
					Download texture
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
