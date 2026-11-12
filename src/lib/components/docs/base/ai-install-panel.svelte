<script lang="ts">
	import { onDestroy } from "svelte";
	import Check from "@lucide/svelte/icons/check";
	import Copy from "@lucide/svelte/icons/copy";
	import { Button } from "#lib/components/ui/button/index.js";
	import * as Code from "#lib/components/ui/code/index.js";
	import { ChatGPT, Claude, Codex } from "#lib/components/icons/index.js";
	import { providers } from "#lib/components/ui/open-in-chat/index.js";

	let { prompt, openPrompt }: { prompt: string; openPrompt: string } = $props();

	let copied = $state(false);
	let timeout: ReturnType<typeof setTimeout> | undefined;

	let codexUrl = $derived(`codex://threads/new?prompt=${encodeURIComponent(openPrompt)}`);
	let claudeUrl = $derived(providers.claude.createUrl(openPrompt));
	let chatgptUrl = $derived(providers.chatgpt.createUrl(openPrompt));

	function copyPrompt() {
		navigator.clipboard
			.writeText(prompt)
			.then(() => {
				copied = true;
				clearTimeout(timeout);
				timeout = setTimeout(() => (copied = false), 2000);
			})
			.catch(() => {});
	}

	onDestroy(() => clearTimeout(timeout));
</script>

<div class="space-y-4">
	<div class="flex flex-wrap gap-2">
		<Button class="rounded-full px-3.5 shadow-none" variant="outline" onclick={copyPrompt}>
			{#if copied}
				<Check />
				Copied
			{:else}
				<Copy />
				Copy Prompt
			{/if}
		</Button>

		<Button class="rounded-full shadow-none" variant="outline" href={codexUrl}>
			<Codex class="size-4" />
			Open in Codex
		</Button>

		<Button
			class="rounded-full shadow-none"
			variant="outline"
			href={claudeUrl}
			target="_blank"
			rel="noopener"
		>
			<Claude class="size-4" />
			Open in Claude
		</Button>

		<Button
			class="gap-0.5 rounded-full shadow-none"
			variant="outline"
			href={chatgptUrl}
			target="_blank"
			rel="noopener"
		>
			<ChatGPT class="size-5" />
			Open in ChatGPT
		</Button>
	</div>

	<Code.Snippet
		code={{
			filename: "AI prompt",
			filecode: prompt,
			lang: "markdown",
			hideLines: true,
		}}
	/>
</div>
