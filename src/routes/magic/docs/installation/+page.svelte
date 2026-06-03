<script lang="ts">
	import { page } from "$app/state";
	import { CopyPageDropdown } from "$lib/components/docs/copy-page-dropdown";
	import {
		Blockquote,
		H1,
		H2,
		Link,
		Paragraph,
		Step,
		Steps,
	} from "$lib/components/docs/markdown";
	import { PMCommand } from "$lib/components/ui/pm-command";
	import * as Code from "$lib/components/ui/code";
	import { MetaTags } from "svelte-meta-tags";
	import Preview from "../components/morphing-text/examples/preview.svelte";
	import { PreviewComponent } from "$lib/components/ui/preview-component";

	const exampleCode = `<script lang="ts">
	import { MorphingText } from "$lib/components/magic/morphing-text";
	const texts = [
		"Hello",
		"Morphing",
		"Text",
		"Animation",
		"Svelte",
		"Component",
		"Smooth",
		"Transition",
		"Engaging",
	];
\<\/script\>

<MorphingText {texts} />
`;

	const title = "Installation";
	const description = "How to install dependencies and structure your app.";
	const socialTitle = "Installation - Svelte Magic UI";

	let canonical = $derived(page.url.href.split("?")[0].split("#")[0]);
	let llmsTxtUrl = $derived(`${canonical}/llms.txt`);
</script>

<MetaTags
	{title}
	titleTemplate="%s - Svelte Magic UI"
	{description}
	keywords={[
		"Svelte Magic UI",
		"Installation",
		"Setup",
		"Dependencies",
		"Svelte",
		"Tailwind CSS",
		"Shadcn Svelte",
		"Motion SV",
	]}
	{canonical}
	openGraph={{
		title: socialTitle,
		description,
		url: canonical,
		type: "article",
	}}
	twitter={{
		title: socialTitle,
		description,
		cardType: "summary_large_image",
		site: "@Sikandar_Bhide",
		creator: "@Sikandar_Bhide",
	}}
/>

<div class="space-y-8 md:space-y-6">
	<section class="space-y-4">
		<div class="flex flex-col justify-between gap-3 md:flex-row md:items-center md:gap-4">
			<H1 id="installation">Installation</H1>
			<CopyPageDropdown componentName={title} {llmsTxtUrl} />
		</div>

		<div class="max-w-3xl space-y-3">
			<Paragraph>{description}</Paragraph>
		</div>
	</section>

	<section class="space-y-4">
		<H2 id="getting-started">Getting Started</H2>
		<Steps class="mt-0" data-toc-ignore>
			<Step title="Create Project" id="create-project">
				<Paragraph>Create a new Svelte project using the official SvelteKit CLI:</Paragraph>
				<PMCommand command="execute" args={["sv", "create", "my-app"]} class="my-4" />
				<Blockquote class="mt-4">
					Make sure to select <strong>Tailwind CSS</strong> when prompted.
				</Blockquote>
			</Step>

			<Step title="Configure Shadcn Svelte">
				<Paragraph>Initialize Shadcn Svelte in your project:</Paragraph>
				<PMCommand command="execute" args={["shadcn-svelte@latest", "init"]} class="my-4" />
				<Paragraph class="text-sm">
					Use the default configuration or customize to fit your needs.
				</Paragraph>
			</Step>

			<Step title="Install Motion">
				<Paragraph>Install the motion-sv animation library:</Paragraph>
				<PMCommand command="add" args={["motion-sv"]} class="my-4" />
			</Step>

			<Step title="Add Components">
				<Paragraph>
					Install any component using the CLI. Example with <Link
						href="/magic/docs/components/morphing-text">Morphing Text</Link
					>:
				</Paragraph>
				<PMCommand
					command="execute"
					args={[
						"shadcn-svelte@latest",
						"add",
						"https://sv-animations.vercel.app/r/morphing-text.json",
					]}
					class="my-4"
				/>
			</Step>
		</Steps>
	</section>

	<section class="space-y-4">
		<H2 id="usage-example">Usage Example</H2>
		<Paragraph>Here's how to use the Morphing Text component:</Paragraph>
		<Code.Root code={exampleCode} lang="svelte" class="my-2" />

		<div class="pt-2">
			<PreviewComponent
				code={{
					lang: "svelte",
					filecode: exampleCode,
					filename: "example.svelte",
				}}
				showRetry={false}
			>
				<Preview />
			</PreviewComponent>
		</div>
	</section>
</div>
