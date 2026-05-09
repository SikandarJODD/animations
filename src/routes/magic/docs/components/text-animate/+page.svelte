<script lang="ts">
	import { page } from "$app/state";
	import { H1, H2, Paragraph, H3 } from "$lib/components/docs/markdown/index";
	import TextAnimateRaw from "$lib/components/magic/text-animate/text-animate.svelte?raw";
	import type { CodeBlock } from "$lib/components/ui/code";

	import { PreviewComponent } from "$lib/components/ui/preview-component";
	import InstallComponent from "$lib/components/docs/base/InstallComponent.svelte";
	import APITable from "$lib/components/docs/base/APITable.svelte";
	import { CopyPageDropdown } from "$lib/components/docs/copy-page-dropdown";
	import { data } from "./data";
	import SEO from "$lib/seo/SEO.svelte";

	const code: CodeBlock = {
		filename: "TextAnimate.svelte",
		filecode: TextAnimateRaw,
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
		codeBlocks={[code]}
		folderStructure={data.folderStructure}
		packages={data.installBlock?.packages}
		class="my-4"
	/>

	<H2 id="examples">Examples</H2>
	{#each data.examples as example}
		{@const ExampleComp = example.preview}
		<div class="my-8">
			<H3 id={example.name.toLowerCase().replace(/\s+/g, "-")}>
				{example.name}
			</H3>
			{#if example.description}
				<Paragraph>{example.description}</Paragraph>
			{/if}
			<div class="my-4">
				<PreviewComponent code={example.code}>
					<ExampleComp />
				</PreviewComponent>
			</div>
		</div>
	{/each}

	{#if data.props && data.props.length > 0}
		<H2 id="props">Props</H2>
		{#each data.props as prop}
			<APITable data={prop} />
		{/each}
	{/if}

	<H2 id="animation-presets">Animation Presets</H2>
	<Paragraph>The component comes with the following animation presets:</Paragraph>
	<div class="my-4 grid gap-2">
		<ul class="text-muted-foreground list-inside list-disc space-y-2">
			<li>
				<span class="text-primary font-mono">fadeIn</span> - Simple fade in animation
			</li>
			<li>
				<span class="text-primary font-mono">blurIn</span> - Blur from blurred to clear
			</li>
			<li>
				<span class="text-primary font-mono">blurInUp</span> - Blur in with upward motion
			</li>
			<li>
				<span class="text-primary font-mono">blurInDown</span> - Blur in with downward motion
			</li>
			<li>
				<span class="text-primary font-mono">slideUp</span> - Slide in from bottom
			</li>
			<li>
				<span class="text-primary font-mono">slideDown</span> - Slide in from top
			</li>
			<li>
				<span class="text-primary font-mono">slideLeft</span> - Slide in from right
			</li>
			<li>
				<span class="text-primary font-mono">slideRight</span> - Slide in from left
			</li>
			<li>
				<span class="text-primary font-mono">scaleUp</span> - Scale from small to normal with
				spring
			</li>
			<li>
				<span class="text-primary font-mono">scaleDown</span> - Scale from large to normal with
				spring
			</li>
		</ul>
	</div>

	<H2 id="segmentation">Text Segmentation</H2>
	<Paragraph>
		Control how the text is split for animation using the <code>by</code> prop:
	</Paragraph>
	<div class="my-4 grid gap-2">
		<ul class="text-muted-foreground list-inside list-disc space-y-2">
			<li>
				<span class="text-primary font-mono">text</span> - Animate the entire text as one unit
			</li>
			<li>
				<span class="text-primary font-mono">word</span> - Animate each word separately (default)
			</li>
			<li>
				<span class="text-primary font-mono">character</span> - Animate each character separately
			</li>
			<li>
				<span class="text-primary font-mono">line</span> - Animate each line separately (split
				by \n)
			</li>
		</ul>
	</div>
</div>
