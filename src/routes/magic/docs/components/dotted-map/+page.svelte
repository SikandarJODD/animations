<script lang="ts">
	import { page } from "$app/state";
	import { H1, H2, Paragraph, H3 } from "#lib/components/docs/markdown/index.js";

	import { PreviewComponent } from "#lib/components/ui/preview-component/index.js";
	import * as Code from "#lib/components/ui/code/index.js";
	import InstallComponent from "#lib/components/docs/base/install-component.svelte";
	import APITable from "#lib/components/docs/base/api-table.svelte";
	import { CopyPageDropdown } from "#lib/components/docs/copy-page-dropdown/index.js";
	import { data } from "./data";
	import SEO from "#lib/seo/seo.svelte";

	let PreviewComp = $derived(data.preview);
	let installUrl = $derived(`/r/${data.id}.json`);

	let getURLPath = (url: string) => {
		// clean url by removing query params and hash
		let cleanUrl = url.split("?")[0].split("#")[0];
		return cleanUrl;
	};
	let llmsTxtUrl = $derived(`${getURLPath(page.url.pathname)}/llms.txt`);
</script>

<SEO title={data.seo.title} description={data.seo.description} keywords={data.seo.keywords} />

<div>
	<div class="flex flex-col justify-between gap-4 md:flex-row md:items-center">
		<H1 id="introduction">{data.title}</H1>
		<CopyPageDropdown componentName={data.title} {llmsTxtUrl} />
	</div>
	<Paragraph>
		{data.description}
	</Paragraph>

	<!-- Preview Component -->
	<div class="my-6">
		<PreviewComponent code={data.previewCode} isCentered={false}>
			<PreviewComp />
		</PreviewComponent>
	</div>

	<H2 id="installation">Installation</H2>
	<InstallComponent
		{installUrl}
		codeBlocks={data.installBlock?.installCode}
		folderStructure={data.installBlock?.folderStructure}
		packages={data.installBlock?.packages}
		class="mt-4 md:mb-10"
	/>

	{#if data.usage?.code}
		<H2 id="usage">Usage</H2>
		<div class="mt-4 space-y-4">
			{#if Array.isArray(data.usage.code)}
				{#each data.usage.code as codeBlock}
					<Code.Snippet code={codeBlock} />
				{/each}
			{:else}
				<Code.Snippet code={data.usage.code} />
			{/if}
		</div>
	{/if}

	{#if data.examples && data.examples.length > 0}
		<H2 id="examples">Examples</H2>
		{#each data.examples as example}
			{@const ExampleComp = example.preview}
			<div class="my-4">
				<H3 id={example.name.toLowerCase().replace(/\s+/g, "-")}>
					{example.name}
				</H3>
				{#if example.description}
					<Paragraph class="mt-1">{example.description}</Paragraph>
				{/if}
				<div class="my-4">
					<PreviewComponent code={example.code} isCentered={true}>
						<ExampleComp />
					</PreviewComponent>
				</div>
			</div>
		{/each}
	{/if}

	{#if data.props && data.props.length > 0}
		<H2 id="props">Props</H2>
		{#each data.props as prop}
			<APITable data={prop} />
		{/each}
	{/if}
</div>
