<script lang="ts">
	import type { ClassValue } from "svelte/elements";
	import { onMount } from "svelte";
	import { motion, AnimatePresence, createLayoutMotion } from "motion-sv";
	import { cn } from "#lib/utils.js";
	import type { Snippet } from "svelte";

	interface AnimatedListProps<T> {
		items: T[];
		class?: ClassValue;
		delay?: number;
		children: Snippet<[T, number]>;
	}

	type AnimatedListPropsGeneric = AnimatedListProps<any>;

	let { items, class: className, delay = 1000, children }: AnimatedListPropsGeneric = $props();

	// Create layout motion for smooth layout animations
	const layout = createLayoutMotion(motion);
	const update = layout.update;

	// Use a mutable state array instead of derived
	let itemsToShow = $state<any[]>([]);

	onMount(() => {
		// Initialize with first item
		update.with(() => {
			itemsToShow = [items[0]];
		})();

		let currentIndex = 0;

		const interval = setInterval(() => {
			if (currentIndex < items.length - 1) {
				currentIndex++;
				// Use update.with to track layout changes
				update.with(() => {
					// Add new item at the beginning (top)
					itemsToShow = [items[currentIndex], ...itemsToShow];
				})();
			}
		}, delay);

		return () => clearInterval(interval);
	});
</script>

<div class={cn("flex flex-col items-center gap-4", className)}>
	<AnimatePresence mode="popLayout">
		{#each itemsToShow as item, i (item.id)}
			<layout.div
				initial={{ scale: 0, opacity: 0, y: -8 }}
				animate={{
					scale: 1,
					opacity: 1,
					y: 0,
					transition: { type: "spring", stiffness: 500, damping: 30 },
				}}
				exit={{
					scale: 0,
					opacity: 0,
					y: 8,
					transition: { duration: 0.18 },
				}}
				layout
				layoutDependency={itemsToShow.length}
				class="mx-auto w-full"
			>
				{@render children(item, i)}
			</layout.div>
		{/each}
	</AnimatePresence>
</div>
