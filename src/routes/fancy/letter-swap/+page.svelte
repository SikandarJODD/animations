<script lang="ts">
	import { data } from "./data";
	import * as Item from "$lib/components/ui/item/index.js";
	import { letterSwapInstallation, letterSwapPingPongInstallation } from "./data";
	import { page } from "$app/state";
	import { H1, H2, Paragraph, H3 } from "$lib/components/docs/markdown/index";
	import { PreviewComponent } from "$lib/components/ui/preview-component";
	import InstallComponent from "$lib/components/docs/base/InstallComponent.svelte";
	import PackageBadges from "$lib/components/docs/base/PackageBadges.svelte";
	import APITable from "$lib/components/docs/base/APITable.svelte";
	import { CopyPageDropdown } from "$lib/components/docs/copy-page-dropdown";
	import SEOComponent from "$lib/seo/SEO.svelte";
	import { Button } from "$lib/components/ui/button";

	let PreviewComp = $derived(data.preview);
	let installLetterSwap = $derived(`${page.url.origin}/f/letter-swap.json`);
	let installLetterSwapPingPong = $derived(`${page.url.origin}/f/letter-swap-ping-pong.json`);

	let getURLPath = (url: string) => {
		// clean url by removing query params and hash
		let cleanUrl = url.split("?")[0].split("#")[0];
		return cleanUrl;
	};

	let llmsTxtUrl = $derived(`${getURLPath(page.url.href)}/llms.txt`);
</script>

<SEOComponent
	title={data.seo.title}
	description={data.seo.description}
	titleTemplate={data.seo.titleTemplate}
	keywords={data.seo.keywords}
	images={data.seo.images}
/>
<div class="space-y-6 md:space-y-8">
	<section>
		<div class="flex flex-col justify-between gap-3 md:flex-row md:items-center md:gap-4">
			<H1 id="introduction">{data.title}</H1>
			<CopyPageDropdown componentName={data.title} {llmsTxtUrl} />
		</div>

		<div class="mt-3 max-w-2xl">
			<Paragraph>
				{data.description}
			</Paragraph>
			<PackageBadges packages={["motion-sv"]} />
		</div>
	</section>

	<section>
		<PreviewComponent code={data.previewCode} class={data.previewClass}>
			{#if PreviewComp}
				<PreviewComp />
			{/if}
		</PreviewComponent>
	</section>

	<section>
		<div class="my-10 text-lg">
			<p class="font-figtree mb-6">
				There are two types of animations available for this component:
			</p>
			<ol class="mt-2 ml-4 list-decimal space-y-4">
				<li class="font-figtree">
					Forward animation — plays the animation timeline once forward, when you hover
					over the text.
				</li>
				<li class="font-figtree">
					Ping Pong animation — plays the animation timeline in a ping pong fashion. It
					plays once forward when you hover over the text, and once in the opposite
					direction when you hover away from the text.
				</li>
			</ol>
		</div>
		<H2 id="installation">Installation</H2>
		<div class="bg-secondary/30 mt-4 rounded-xl border p-2">
			<H3 class="mt-0 pl-px" id="forward-animation">Forward Animation</H3>
			<InstallComponent
				installUrl={installLetterSwap}
				codeBlocks={letterSwapInstallation.installCode}
				packages={letterSwapInstallation.packages}
				folderStructure={letterSwapInstallation.folderStructure}
				class="mt-2"
			/>
		</div>
		<div class="bg-secondary/30 relative mt-4 rounded-xl border p-2">
			<div
				class="absolute -top-px right-20 h-px w-1/2 bg-linear-to-l from-transparent via-white/20 via-10% to-transparent"
			></div>
			<H3 class="mt-0 pl-px" id="ping-pong-animation">Ping Pong Animation</H3>
			<InstallComponent
				installUrl={installLetterSwapPingPong}
				codeBlocks={letterSwapPingPongInstallation.installCode}
				packages={letterSwapPingPongInstallation.packages}
				folderStructure={letterSwapPingPongInstallation.folderStructure}
				class="mt-2"
			/>
		</div>
		<!-- Visit Original Docs - This is best way to learn and understand component  -->
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
					href="https://www.fancycomponents.dev/docs/components/text/letter-swap#understanding-the-component"
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

	{#if data?.examples && data.examples.length > 0}
		<section>
			<H2 id="examples">Examples</H2>
			<div class="mt-4 space-y-8">
				{#each data.examples as example (example.name)}
					<div class="space-y-0">
						<div>
							<H3 id={example.name.toLowerCase().replace(/\s+/g, "-")} class="mt-0">
								{example.name}
							</H3>
							{#if example.description}
								<Paragraph class="mt-1">
									{example.description}
								</Paragraph>
							{/if}
						</div>
						<PreviewComponent code={example.code} class={example.previewClass}>
							<example.preview />
						</PreviewComponent>
					</div>
				{/each}
			</div>
		</section>
	{/if}

	{#if data?.props && data.props.length > 0}
		<section>
			<H2 id="props">Props</H2>
			<div class="mt-3 space-y-6">
				<div>
					{#each data.props as prop, index (prop.name ?? index)}
						<APITable data={prop} />
					{/each}
				</div>
			</div>
		</section>
	{/if}
</div>
