<script lang="ts" module>
	export type TreeViewElement = {
		id: string;
		name: string;
		isSelectable?: boolean;
		children?: TreeViewElement[];
	};
</script>

<script lang="ts">
	import { setContext, getContext, untrack } from "svelte";
	import { cn } from "$lib/utils";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	interface TreeProps extends HTMLAttributes<HTMLDivElement> {
		/**
		 * Initial selected item ID
		 */
		initialSelectedId?: string;
		/**
		 * Initial expanded items
		 */
		initialExpandedItems?: string[];
		/**
		 * Tree elements data
		 */
		elements?: TreeViewElement[];
		/**
		 * Show indicator line
		 */
		indicator?: boolean;
		/**
		 * Open folder icon
		 */
		openIcon?: Snippet;
		/**
		 * Close folder icon
		 */
		closeIcon?: Snippet;
		/**
		 * Text direction
		 */
		dir?: "rtl" | "ltr";
		/**
		 * Children content
		 */
		children: Snippet;
		/**
		 * Additional CSS classes
		 */
		class?: string;
	}

	let {
		initialSelectedId,
		initialExpandedItems = [],
		elements,
		indicator = true,
		openIcon,
		closeIcon,
		dir = "ltr",
		children,
		class: className,
		...props
	}: TreeProps = $props();

	let selectedId = $state(untrack(() => initialSelectedId));
	let expandedItems = $state<string[]>(untrack(() => initialExpandedItems));

	const selectItem = (id: string) => {
		selectedId = id;
	};

	const handleExpand = (id: string) => {
		if (expandedItems.includes(id)) {
			expandedItems = expandedItems.filter((item) => item !== id);
		} else {
			expandedItems = [...expandedItems, id];
		}
	};

	const setExpandedItems = (items: string[]) => {
		expandedItems = items;
	};

	const direction = $derived(dir === "rtl" ? "rtl" : "ltr");

	setContext("tree", {
		selectedId: () => selectedId,
		expandedItems: () => expandedItems,
		handleExpand,
		selectItem,
		setExpandedItems,
		get indicator() { return indicator; },
		get openIcon() { return openIcon; },
		get closeIcon() { return closeIcon; },
		get direction() { return direction; },
	});
</script>

<div class={cn("size-full", className)} {...props}>
	<div class="relative h-full overflow-auto px-2" dir={direction}>
		<div class="flex flex-col gap-1">
			{@render children()}
		</div>
	</div>
</div>
