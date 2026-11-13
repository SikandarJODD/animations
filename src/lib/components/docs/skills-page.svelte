<script lang="ts">
	import { H1, H2, H3, Link, Paragraph } from "#lib/components/docs/markdown/index.js";
	import { PMCommand } from "#lib/components/ui/pm-command/index.js";
	import SEOComponent from "#lib/seo/seo.svelte";
	import PromptSnippet from "./base/prompt-snippet.svelte";

	const promptGroups = [
		{
			title: "Small prompts",
			prompts: [
				"/svelte-animations Find a subtle text entrance for this Svelte page.",
				"/svelte-animations Install Morphing Text in this project.",
				"/svelte-animations Compare up to three cursor effects for this page.",
			],
		},
		{
			title: "Medium prompts",
			prompts: [
				"/svelte-animations Find and install a restrained hero animation that fits this project's existing styles and package manager.",
				"/svelte-animations Compare Magic UI, Spell UI, and Fancy Components for an animated pricing section, then recommend the closest fit without changing files.",
				"/svelte-animations Install a responsive text animation, adapt its imports and tokens to this codebase, and run the relevant checks.",
			],
		},
		{
			title: "Large prompts",
			prompts: [
				"/svelte-animations Inspect this Svelte project, search the component manifest for a low-motion landing page background, compare no more than three candidates, and explain the accessibility and performance tradeoffs before making changes.",
				"/svelte-animations Choose and install the best component for an animated product headline. Preserve the project's aliases, tokens, and component conventions; add reduced-motion behavior where needed; verify responsiveness; and run the existing type and build checks.",
				"/svelte-animations Audit the animation on this page. Replace only the parts that have a clear match in the registry, keep unrelated code unchanged, verify keyboard and reduced-motion behavior, and report the selected components, files changed, dependencies added, and checks run.",
			],
		},
	] as const;
</script>

<SEOComponent
	title="Use Svelte Animations with AI"
	description="Install the Svelte Animations agent skill to help coding agents find, compare, install, adapt, and verify animated Svelte components."
	keywords={[
		"Svelte Animations agent skill",
		"Svelte coding agent",
		"Svelte component installer",
		"Magic UI Svelte",
		"Spell UI Svelte",
		"Fancy Components Svelte",
	]}
	socialTitle="Use Svelte Animations with AI"
	openGraphType="article"
	siteName="Svelte Animations"
/>

<div class="space-y-8 md:space-y-10">
	<section class="max-w-3xl space-y-4">
		<H1 id="use-svelte-animations-with-ai">Use Svelte Animations with AI</H1>
		<Paragraph>
			The Svelte Animations skill helps coding agents find, compare, install, adapt, and
			verify components from the Magic UI, Spell UI, and Fancy Components collections.
		</Paragraph>
	</section>

	<section class="max-w-3xl space-y-4">
		<H2 id="installation">Installation</H2>
		<Paragraph>Run this command from your project:</Paragraph>
		<PMCommand
			command="execute"
			args={["skills", "add", "SikandarJODD/animations", "--skill", "svelte-animations"]}
			variant="secondary"
			title="Install the Svelte Animations skill"
		/>
		<Paragraph>
			The public skill source is available at <Link
				href="https://github.com/SikandarJODD/animations/tree/master/skills/svelte-animations"
				target="_blank"
				rel="noreferrer">skills/svelte-animations</Link
			>.
		</Paragraph>
	</section>

	<section class="max-w-3xl space-y-6">
		<div class="space-y-3">
			<H2 id="usage">Usage</H2>
			<Paragraph>
				In Codex, start your request with <code
					class="bg-muted rounded px-1.5 py-0.5 font-mono text-sm"
					>/svelte-animations</code
				>. Add project constraints when you want the agent to implement a component.
			</Paragraph>
		</div>

		{#each promptGroups as group}
			<div class="space-y-3">
				<H3 id={group.title.toLowerCase().replace(" prompts", "")}>{group.title}</H3>
				{#each group.prompts as prompt}
					<PromptSnippet {prompt} />
				{/each}
			</div>
		{/each}
	</section>
</div>
