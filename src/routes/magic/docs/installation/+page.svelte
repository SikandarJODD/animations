<script lang="ts">
	import {
		H1,
		H2,
		Paragraph,
		Steps,
		Step,
		Link,
		Blockquote,
	} from "$lib/components/docs/markdown";
	import { PMCommand } from "$lib/components/ui/pm-command";
	import * as Code from "$lib/components/ui/code";
	import * as Alert from "$lib/components/ui/alert/index.js";
	import { MetaTags } from "svelte-meta-tags";
	import MessageCircleIcon from "@lucide/svelte/icons/message-circle";
	import Preview from "../components/morphing-text/examples/preview.svelte";
	import { PreviewComponent } from "$lib/components/ui/preview-component";

	const exampleCode = `<script lang="ts">
	import { MorphingText } from "$lib/components/magic/morphing-text";

	const texts = ["Hello", "World", "Morphing", "Text"];
<\/script>

<MorphingText {texts} />`;
</script>

<MetaTags
	title="Installation - Svelte Magic UI"
	description="How to install dependencies and structure your app."
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
	openGraph={{
		title: "Installation - Svelte Magic UI",
		description: "How to install dependencies and structure your app.",
		url: "https://sv-animations.vercel.app/magic/docs/installation",
		type: "website",
	}}
	twitter={{
		title: "Installation - Svelte Magic UI",
		description: "How to install dependencies and structure your app.",
		cardType: "summary_large_image",
		site: "@Sikandar_Bhide",
		creator: "@Sikandar_Bhide",
	}}
></MetaTags>

<div class="flex w-full max-w-4xl items-start gap-x-8 px-4 py-6 sm:px-6 lg:pr-4 lg:pl-8">
	<div class="w-full">
		<H1>Installation</H1>
		<Paragraph>How to install dependencies and structure your app.</Paragraph>

		<Steps class="mt-8">
			<Step title="Create Project">
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

		<H2 class="mt-12">Usage Example</H2>
		<Paragraph>Here's how to use the Morphing Text component:</Paragraph>
		<Code.Root code={exampleCode} lang="svelte" class="my-6" />

		<div class="my-8">
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
	</div>
</div>
