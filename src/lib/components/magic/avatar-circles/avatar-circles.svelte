<script lang="ts">
	import { cn } from "$lib/utils.js";

	interface Avatar {
		imageUrl: string;
		profileUrl: string;
	}

	interface Props {
		class?: string;
		numPeople?: number;
		avatarUrls: Avatar[];
	}

	let { class: className, numPeople, avatarUrls }: Props = $props();
</script>

<div class={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
	{#each avatarUrls as url, index}
		<a href={url.profileUrl} target="_blank" rel="noopener noreferrer">
			<img
				class="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
				src={url.imageUrl}
				width="40"
				height="40"
				alt="Avatar {index + 1}"
			/>
		</a>
	{/each}
	{#if (numPeople ?? 0) > 0}
		<span
			class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black"
		>
			+{numPeople}
		</span>
	{/if}
</div>
