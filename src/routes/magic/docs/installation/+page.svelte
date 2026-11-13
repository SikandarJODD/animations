<script lang="ts">
	import { CopyPageDropdown } from "#lib/components/docs/copy-page-dropdown/index.js";
	import { seo_config } from "#lib/config/seo.js";
	import {
		Blockquote,
		H1,
		H2,
		Link,
		Paragraph,
		Step,
		Steps,
	} from "#lib/components/docs/markdown/index.js";
	import { PMCommand } from "#lib/components/ui/pm-command/index.js";
	import * as Code from "#lib/components/ui/code/index.js";
	import SEOComponent from "#lib/seo/seo.svelte";
	import Preview from "../components/morphing-text/examples/preview.svelte";
	import { PreviewComponent } from "#lib/components/ui/preview-component/index.js";

	const exampleCode = `<script lang="ts">
	import { MorphingText } from "#lib/components/magic/morphing-text/index.js";
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
	const description =
		"Install Svelte Magic UI components with the Shadcn Svelte CLI and configure Svelte 5, Tailwind CSS, and Motion SV dependencies.";
	const socialTitle = "Installation - Svelte Magic UI";

	const llmsTxtUrl = `${seo_config.url}/magic/docs/installation/llms.txt`;
</script>

<SEOComponent
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
	{socialTitle}
	openGraphType="article"
	siteName="Svelte Magic UI"
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
		<Code.Snippet
			code={{ filename: "example.svelte", filecode: exampleCode, lang: "svelte" }}
		/>

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
