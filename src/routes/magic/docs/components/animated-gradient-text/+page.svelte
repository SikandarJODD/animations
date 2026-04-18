<script lang="ts">
	import { page } from "$app/state";
	import { H1, H2, Paragraph, H3 } from "$lib/components/docs/markdown/index";
	import AnimatedGradientTextRaw from "$lib/components/magic/animated-gradient-text/animated-gradient-text.svelte?raw";
	import type { CodeBlock } from "$lib/components/ui/code";

	import { PreviewComponent } from "$lib/components/ui/preview-component";
	import InstallComponent from "$lib/components/docs/base/InstallComponent.svelte";
	import APITable from "$lib/components/docs/base/APITable.svelte";
	import { CopyPageDropdown } from "$lib/components/docs/copy-page-dropdown";
	import { data } from "./data";
	import SEO from "$lib/seo/SEO.svelte";

	const code: CodeBlock = {
		filename: "AnimatedGradientText.svelte",
		filecode: AnimatedGradientTextRaw,
		lang: "svelte",
		isExpand: true,
	};

	const PreviewComp = $derived(data.preview);
	const installUrl = $derived(`${page.url.origin}/r/${data.id}.json`);

	let getURLPath = (url: string) => {
		// clean url by removing query params and hash
		let cleanUrl = url.split("?")[0].split("#")[0];
		return cleanUrl;
	};
	const llmsTxtUrl = $derived(`${getURLPath(page.url.pathname)}/llms.txt`);
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
	<div class="mt-6 mb-8">
		<PreviewComponent code={data.previewCode}>
			{#if PreviewComp}
				<PreviewComp />
			{/if}
		</PreviewComponent>
	</div>

	<H2 id="installation">Installation</H2>
	<InstallComponent
		{installUrl}
		tailwindConfig={data.installBlock?.tailwind ? { code: data.installBlock.tailwind } : undefined}
		codeBlocks={[code]}
		folderStructure={data.folderStructure}
		class="my-4"
	/>

	<H2 id="examples" class="mt-10">Examples</H2>
	{#each data.examples as example}
		{@const ExampleComp = example.preview}
		<div class="mt-0 mb-6">
			<H3 class="mt-4" id={example.name.toLowerCase().replace(/\s+/g, "-")}>
				{example.name}
			</H3>
			{#if example.description}
				<Paragraph>{example.description}</Paragraph>
			{/if}
			<div class="mt-2 mb-2">
				<PreviewComponent code={example.code}>
					<ExampleComp />
				</PreviewComponent>
			</div>
		</div>
	{/each}

	{#if data.props && data.props.length > 0}
		<H2 id="props" class="mt-6">Props</H2>
		{#each data.props as prop}
			<APITable data={prop} />
		{/each}
	{/if}
</div>
