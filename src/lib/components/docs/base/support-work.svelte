<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card/index.js";
	import { fly } from "svelte/transition";

	let isHovered = $state(false);
</script>

{#if isHovered}
	<div in:fly={{ y: 20, duration: 280 }} out:fly={{ duration: 200, y: 20 }} class="w-full left-0">
		<div
			class="h-7 flex items-center w-[80%] mx-auto gap-1.5 rounded-t-md border-t border-x border-sky-600/80 bg-sky-50 dark:bg-sky-800/20 px-4 text-white text-xs font-medium"
		>
			<span
				><img
					src="https://github.com/SikandarJODD.png"
					class="size-4 rounded-full"
					alt="Bhide Svelte"
				/></span
			>
			<span class="text-sky-600 dark:text-white">Thankyouuuu soo much 😍</span>
		</div>
	</div>
{/if}

<Card.Root
	onmouseenter={() => (isHovered = true)}
	onmouseleave={() => (isHovered = false)}
	class="relative gap-2 py-4 ring-0 dark:bg-card z-50 border border-sky-500 dark:border-sky-700/60"
>
	<Card.Header class="px-4 z-50">
		<Card.Title class="text-sm">
			<span>Sponsor My Work</span>
		</Card.Title>
		<Card.Description class="text-xs">
			It would help me build and maintain open-source projects for the community.
		</Card.Description>
	</Card.Header>
	<Card.Content class="mt-2 border-none px-4!">
		<Button
			class="w-full"
			target="_blank"
			data-s-event="sponsor_click"
			href="https://github.com/sponsors/SikandarJODD"
		>
			Sponsor Bhide Svelte
		</Button>
	</Card.Content>
</Card.Root>