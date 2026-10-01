<script lang="ts">
	import {
		AnimatedBackground,
		AnimatedBackgroundItem,
	} from "$lib/components/magic/animated-background";

	const items = [
		{ title: "Dialog", description: "Enhances modal presentations." },
		{ title: "Popover", description: "For small interactive overlays." },
		{
			title: "Accordion",
			description: "Collapsible sections for more content.",
		},
		{
			title: "Collapsible",
			description: "Collapsible sections for more content.",
		},
		{
			title: "Drag to Reorder",
			description: "Reorder items with drag and drop.",
		},
		{
			title: "Swipe to Delete",
			description: "Delete items with swipe gestures.",
		},
	];
</script>

<div class="grid grid-cols-2 p-10 md:grid-cols-3">
	<AnimatedBackground
		class="rounded-lg bg-zinc-100 dark:bg-zinc-800"
		transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
		enableHover
	>
		{#each items as item, index (item.title)}
			<AnimatedBackgroundItem data-id={`card-${index}`}>
				<div class="flex flex-col space-y-1 p-4 select-none">
					<h3 class="text-base font-medium text-zinc-800 dark:text-zinc-50">
						{item.title}
					</h3>
					<p class="text-base text-zinc-600 dark:text-zinc-400">
						{item.description}
					</p>
				</div>
			</AnimatedBackgroundItem>
		{/each}
	</AnimatedBackground>
</div>
