<script lang="ts">
	import { page } from "$app/state";
	import { H1, H2, Paragraph, H3 } from "#lib/components/docs/markdown/index.js";

	import { PreviewComponent } from "#lib/components/ui/preview-component/index.js";
	import InstallComponent from "#lib/components/docs/base/install-component.svelte";
	import APITable from "#lib/components/docs/base/api-table.svelte";
	import { CopyPageDropdown } from "#lib/components/docs/copy-page-dropdown/index.js";
	import { data } from "./data";
	import SEO from "#lib/seo/seo.svelte";

	let PreviewComp = $derived(data.preview);
	let installUrl = $derived(`${page.url.origin}/r/${data.id}.json`);

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
		<PreviewComponent code={data.previewCode}>
			{#if PreviewComp}
				<PreviewComp />
			{/if}
		</PreviewComponent>
	</div>

	<H2 id="installation">Installation</H2>
	<InstallComponent
		{installUrl}
		tailwindConfig={{ code: data.installBlock?.tailwind }}
		codeBlocks={data.installBlock?.installCode}
		packages={data.installBlock?.packages}
		folderStructure={data.installBlock?.folderStructure}
		class="my-4"
	/>

	<!-- Examples Section -->
	{#if data.examples && data.examples.length > 0}
		<H2 id="examples">Examples</H2>
		{#each data.examples as example}
			<div class="my-6">
				<H3 id={example.name.toLowerCase().replace(/\s+/g, "-")}>{example.name}</H3>
				<PreviewComponent code={example.code}>
					<example.preview />
				</PreviewComponent>
			</div>
		{/each}
	{/if}

	<!-- Props Section -->
	{#if data.props && data.props.length > 0}
		<H2 id="props">Props</H2>
		{#each data.props as prop}
			<APITable data={prop} />
		{/each}
	{/if}

	<H2 id="animation-styles">Animation Styles</H2>
	<Paragraph>The animationStyle prop accepts the following values:</Paragraph>
	<ul class="list-disc space-y-2 pl-6">
		<li>
			<strong>"from-bottom"</strong>: Dialog enters from the bottom and exits to the bottom
		</li>
		<li>
			<strong>"from-center"</strong>: Dialog scales up from the center and scales down to the
			center
		</li>
		<li><strong>"from-top"</strong>: Dialog enters from the top and exits to the top</li>
		<li><strong>"from-left"</strong>: Dialog enters from the left and exits to the left</li>
		<li><strong>"from-right"</strong>: Dialog enters from the right and exits to the right</li>
		<li><strong>"fade"</strong>: Dialog fades in and out</li>
		<li>
			<strong>"top-in-bottom-out"</strong>: Dialog enters from the top and exits to the bottom
		</li>
		<li>
			<strong>"left-in-right-out"</strong>: Dialog enters from the left and exits to the right
		</li>
	</ul>

	<H2 id="note">Note</H2>
	<Paragraph
		>If using a YouTube video, make sure to use the embed version of the video URL.</Paragraph
	>
</div>
