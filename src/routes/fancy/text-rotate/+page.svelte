<script lang="ts">
	import { page } from "$app/state";
	import * as Item from "$lib/components/ui/item/index.js";
	import { Button } from "$lib/components/ui/button";
	import CompactPropsTable from "$lib/components/docs/base/CompactPropsTable.svelte";
	import InstallComponent from "$lib/components/docs/base/InstallComponent.svelte";
	import PackageBadges from "$lib/components/docs/base/PackageBadges.svelte";
	import { CopyPageDropdown } from "$lib/components/docs/copy-page-dropdown";
	import { H1, H2, H3, Paragraph } from "$lib/components/docs/markdown/index";
	import { PreviewComponent } from "$lib/components/ui/preview-component";
	import SEOComponent from "$lib/seo/SEO.svelte";
	import { data } from "./data";

	let PreviewComp = $derived(data.preview);
	let installUrl = $derived(`${page.url.origin}/f/${data.id}.json`);
	let llmsTxtUrl = $derived(`${page.url.href.split("?")[0].split("#")[0]}/llms.txt`);
</script>

<SEOComponent
	title={data.seo.title}
	description={data.seo.description}
	titleTemplate={data.seo.titleTemplate}
	keywords={data.seo.keywords}
	images={data.seo.images}
/>

<div class="">
	<section>
		<div class="flex flex-col justify-between gap-3 md:flex-row md:items-center md:gap-4">
			<H1 id="introduction" class="font-figtree">{data.title}</H1>
			<CopyPageDropdown componentName={data.title} {llmsTxtUrl} />
		</div>

		<div class="mt-3 max-w-2xl">
			<Paragraph class="font-figtree">
				{data.description}
			</Paragraph>
			<PackageBadges packages={data.installBlock?.packages ?? []} />
		</div>
	</section>

	<section class="mt-6">
		<PreviewComponent code={data.previewCode} class={data.previewClass}>
			{#if PreviewComp}
				<PreviewComp />
			{/if}
		</PreviewComponent>
	</section>

	<section class="mt-6">
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
		<Item.Root variant="muted" class="mt-4">
			<Item.Content>
				<Item.Title id="visit-original-docs">Visit Original Docs</Item.Title>
				<Item.Description>
					For more deeper understaing visit fancy components documentation.
				</Item.Description>
			</Item.Content>
			<Item.Actions>
				<Button
					variant="outline"
					size="sm"
					target="_blank"
					href="https://www.fancycomponents.dev/docs/components/text/text-rotate#understanding-the-component"
				>
					Docs
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.4"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-external-link-icon lucide-external-link"
						><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path
							d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
						/></svg
					>
				</Button>
			</Item.Actions>
		</Item.Root>
	</section>

	{#if data.examples && data.examples.length > 0}
		<section class="mt-14">
			<H2 id="examples">Examples</H2>
			<div class="mt-4 space-y-8">
				{#each data.examples as example (example.name)}
					<div class="space-y-0">
						<H3 id={example.name.toLowerCase().replace(/\s+/g, "-")} class="mt-0">
							{example.name}
						</H3>
						<PreviewComponent code={example.code} class={example.previewClass}>
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
				{#each data.props as prop, index (prop.name ?? index)}
					<CompactPropsTable data={prop} />
				{/each}
			</div>
		</section>
	{/if}
</div>
