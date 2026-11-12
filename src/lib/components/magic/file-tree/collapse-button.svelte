<script lang="ts">
	import { getContext, onMount } from "svelte";
	import { cn } from "#lib/utils.js";
	import type { Snippet } from "svelte";
	import type { ClassValue, HTMLButtonAttributes } from "svelte/elements";
	import type { TreeViewElement } from "./file-tree.svelte";

	interface CollapseButtonProps extends HTMLButtonAttributes {
		/**
		 * Tree elements to expand/collapse
		 */
		elements: TreeViewElement[];
		/**
		 * Whether to expand all on mount
		 */
		expandAll?: boolean;
		/**
		 * Children content
		 */
		children: Snippet;
		/**
		 * Additional CSS classes
		 */
		class?: ClassValue;
	}

	let {
		elements,
		expandAll = false,
		children,
		class: className,
		...props
	}: CollapseButtonProps = $props();

	const context = getContext<{
		selectedId: () => string | undefined;
		expandedItems: () => string[];
		handleExpand: (id: string) => void;
		selectItem: (id: string) => void;
		setExpandedItems: (items: string[]) => void;
		indicator: boolean;
		openIcon?: Snippet;
		closeIcon?: Snippet;
		direction: "rtl" | "ltr";
	}>("tree");

	const expendAllTree = (elements: TreeViewElement[]) => {
		const expandTree = (element: TreeViewElement) => {
			const isSelectable = element.isSelectable ?? true;
			if (isSelectable && element.children && element.children.length > 0) {
				const currentExpanded = context.expandedItems();
				if (!currentExpanded.includes(element.id)) {
					context.setExpandedItems([...currentExpanded, element.id]);
				}
				element.children.forEach(expandTree);
			}
		};

		elements.forEach(expandTree);
	};

	const closeAll = () => {
		context.setExpandedItems([]);
	};

	onMount(() => {
		if (expandAll) {
			expendAllTree(elements);
		}
	});

	const handleClick = () => {
		const currentExpanded = context.expandedItems();
		if (currentExpanded && currentExpanded.length > 0) {
			closeAll();
		} else {
			expendAllTree(elements);
		}
	};
</script>

<button
	type="button"
	class={cn("hover:bg-muted absolute right-2 bottom-1 h-8 w-fit rounded-md p-1", className)}
	onclick={handleClick}
	{...props}
>
	{@render children()}
	<span class="sr-only">Toggle</span>
</button>
