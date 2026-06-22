<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card/index.js";
	import { fly } from "svelte/transition";

	let isHovered = $state(false);
</script>

<!-- {#if isHovered} -->
<a href="https://bhide.dev?utm_source=animations&utm_medium=referral&utm_campaign=sponsor" target="_blank" in:fly={{ y: 20, duration: 280 }} out:fly={{ duration: 200, y: 20 }} class="left-0 w-full">
	<div
		class="mx-auto flex h-7 w-[80%] items-center justify-center gap-1.5 rounded-t-lg border-x border-t border-emerald-600/80 bg-emerald-50 px-4 text-xs font-medium text-white dark:bg-emerald-800/20"
	>
		<span
			><img
				src="https://github.com/SikandarJODD.png"
				class="size-4 rounded-full"
				alt="Bhide Svelte"
			/></span
		>
		<span class="text-emerald-600 dark:text-white">Built by Bhide Svelte</span>
	</div>
</a>
<!-- {/if} -->

<Card.Root
	onmouseenter={() => (isHovered = true)}
	onmouseleave={() => (isHovered = false)}
	class="dark:bg-card relative z-50 gap-2 border border-emerald-500 py-4 ring-0 dark:border-emerald-700/60"
>
	<Card.Header class="z-50 px-4">
		<Card.Title class="text-sm font-mono">
			Sponsor My Work
		</Card.Title>
		<Card.Description class="text-xs">
			It would help me build and maintain open-source projects for the community.
		</Card.Description>
	</Card.Header>
	<Card.Content class="mt-2 border-none px-4!">
		<Button
			class="hover:bg-green-450! font-mono w-full bg-green-400! text-green-950 hover:text-green-950/90"
			target="_blank"
			variant="outline"
			data-s-event="sponsor_click"
			href="https://github.com/sponsors/SikandarJODD"
		>
			Sponsor Me 😁
		</Button>
	</Card.Content>
</Card.Root>
