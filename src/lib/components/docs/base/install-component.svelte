<script lang="ts" module>
	import type { CodeBlock } from "#lib/components/ui/code/index.js";

	export type DependencyItem = {
		label: string;
		url: string;
	};

	export type TailwindConfig = {
		code: CodeBlock | undefined;
	};

	export type InstallComponentProps = {
		installUrl: string;
		dependencies?: DependencyItem[];
		tailwindConfig?: TailwindConfig;
		codeBlocks?: CodeBlock[] | CodeBlock;
		class?: string;
		folderStructure?: string;
		packages?: string[];
	};
</script>

<script lang="ts">
	import { page } from "$app/state";
	import { cn } from "#lib/utils.js";
	import { seo_config } from "#lib/config/seo.js";
	import * as Tabs from "#lib/components/ui/tabs/index.js";
	import { PMCommand } from "#lib/components/ui/pm-command/index.js";
	import Steps from "#lib/components/docs/markdown/steps.svelte";
	import Step from "#lib/components/docs/markdown/step.svelte";
	import * as Code from "#lib/components/ui/code/index.js";
	import Sparkles from "@lucide/svelte/icons/sparkles";
	import AIInstallPanel from "./ai-install-panel.svelte";

	let {
		installUrl,
		dependencies = [],
		tailwindConfig,
		codeBlocks = [],
		class: className,
		folderStructure = "",
		packages = [],
	}: InstallComponentProps = $props();

	const tabTriggerClass =
		"hover:bg-muted dark:data-active:bg-muted h-8 flex-none cursor-pointer rounded-full border-none bg-transparent px-3 text-sm shadow-none! transition-none data-active:bg-neutral-200/60";

	let activeTab = $state("cli");
	let docsUrl = $derived(
		new URL(`${page.url.pathname.replace(/\/$/, "")}/llms.txt`, seo_config.url).href
	);
	let componentUrl = $derived(new URL(page.url.pathname, seo_config.url).href);
	let aiPrompt = $derived(`Install and integrate the Svelte component documented below.
${docsUrl}

Follow the guide's installation and usage instructions.
Match the project's existing structure, imports, and styles.
Keep changes scoped to the component and verify it works.
Reply with a short bullet list of completed changes.`);
	let aiOpenPrompt = $derived(`Review this Svelte component:
${componentUrl}

Read its documentation:
${docsUrl}

Summarize its features, installation, and basic usage.`);
</script>

<div class={cn("w-full", className)}>
	<Tabs.Root bind:value={activeTab}>
		<Tabs.List class="h-auto gap-1 bg-transparent p-0">
			<Tabs.Trigger value="cli" class={cn(tabTriggerClass, "px-4")}>CLI</Tabs.Trigger>
			<Tabs.Trigger value="manual" class={cn(tabTriggerClass, "px-4")}>Manual</Tabs.Trigger>
			<Tabs.Trigger value="ai" class={cn(tabTriggerClass, "group px-3.5")}>
				<Sparkles class={cn("size-3.5")} />
				<span
					class={cn(
						activeTab !== "ai" &&
							"shimmer dark:shimmer-color-sky-400 shimmer-color-orange-400 group-hover:shimmer-none"
					)}>AI Prompt</span
				>
			</Tabs.Trigger>
		</Tabs.List>

		<Tabs.Content value="cli" class="mt-0">
			<PMCommand command="execute" args={["shadcn-svelte@latest", "add", installUrl]} />
		</Tabs.Content>

		<Tabs.Content value="manual" class="mt-2" data-toc-ignore="true">
			<Steps class="mb-2">
				{#if packages.length > 0}
					<Step title="Install dependencies">
						<p class="mb-4">Install the required packages for this component:</p>
						<PMCommand command="add" args={packages} />
					</Step>
				{/if}

				{#if dependencies.length > 0}
					<Step title="Install Dependencies">
						<p class="mb-4">Install the following dependencies:</p>
						<ul class="mb-4 list-inside list-disc space-y-1">
							{#each dependencies as dep}
								<li>
									<a
										href={dep.url}
										target="_blank"
										rel="noopener noreferrer"
										class="text-primary hover:underline"
									>
										{dep.label}
									</a>
								</li>
							{/each}
						</ul>
					</Step>
				{/if}

				{#if codeBlocks}
					<Step title="Copy the Source Code" titleBaseClass="mb-0">
						<p class="mb-4 text-sm">
							Copy and paste the following code into your project:
						</p>
						<div class="space-y-4">
							{#if Array.isArray(codeBlocks)}
								{#each codeBlocks as codeBlock}
									<Code.File code={codeBlock} />
								{/each}
							{:else}
								<Code.File code={codeBlocks} />
							{/if}
						</div>
					</Step>
				{/if}

				<!-- Tailwind CSS Configuration -->
				{#if tailwindConfig?.code}
					<Step title="Add Tailwind CSS">
						<p class="mb-4">
							Add the following to your <code
								class="bg-muted rounded px-1.5 py-0.5 text-sm"
								>routes/layout.css</code
							> file:
						</p>
						<Code.File code={tailwindConfig.code} />
					</Step>
				{/if}

				<!-- Folder Structure -->

				{#if folderStructure}
					<!-- <H3 id="folder-structure">Folder Structure</H3> -->
					<Step title="Folder Structure">
						<Code.File
							code={{
								filename: "Folder Structure",
								filecode: folderStructure,
								lang: "bash",
								hideLines: true,
							}}
						/>
					</Step>
				{/if}
			</Steps>
		</Tabs.Content>

		<Tabs.Content value="ai" class="mt-4" data-toc-ignore="true">
			<AIInstallPanel prompt={aiPrompt} openPrompt={aiOpenPrompt} />
		</Tabs.Content>
	</Tabs.Root>
</div>
