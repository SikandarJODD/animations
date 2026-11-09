<script lang="ts">
	import { getContext } from "svelte";
	import { cn } from "#lib/utils.ts";
	import { motion, AnimatePresence } from "motion-sv";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	interface FolderProps extends HTMLAttributes<HTMLDivElement> {
		/**
		 * Folder name/label
		 */
		element: string;
		/**
		 * Unique value for this folder
		 */
		value: string;
		/**
		 * Whether the folder is selectable
		 */
		isSelectable?: boolean;
		/**
		 * Whether the folder is selected
		 */
		isSelect?: boolean;
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
		element,
		value,
		isSelectable = true,
		isSelect,
		children,
		class: className,
		...props
	}: FolderProps = $props();

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

	const isExpanded = $derived(context.expandedItems().includes(value));
	const isSelected = $derived(isSelect ?? context.selectedId() === value);

	// Default folder icons (SVG)
	const defaultOpenIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><path d="M2 10h20"/></svg>`;
	const defaultCloseIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>`;
</script>

<div class="relative h-full overflow-hidden" {...props}>
	<button
		type="button"
		class={cn("flex w-full items-center gap-1 rounded-md text-left text-sm", className, {
			"bg-muted rounded-md": isSelected && isSelectable,
			"cursor-pointer": isSelectable,
			"cursor-not-allowed opacity-50": !isSelectable,
		})}
		disabled={!isSelectable}
		onclick={() => context.handleExpand(value)}
	>
		<span class="size-4">
			{#if context.openIcon && isExpanded}
				{@render context.openIcon()}
			{:else if context.closeIcon && !isExpanded}
				{@render context.closeIcon()}
			{:else}
				{@html isExpanded ? defaultOpenIcon : defaultCloseIcon}
			{/if}
		</span>
		<span>{element}</span>
	</button>

	<AnimatePresence mode="popLayout">
		{#if isExpanded}
			<motion.div
				initial={{ height: 0, opacity: 0 }}
				animate={{ height: "auto", opacity: 1 }}
				exit={{ height: 0, opacity: 0 }}
				transition={{ duration: 0.2, ease: "easeInOut" }}
				class="relative overflow-hidden text-sm"
			>
				{#if element && context.indicator}
					<div
						dir={context.direction}
						class="bg-muted absolute left-1.5 h-full w-px rounded-md py-3 duration-300 ease-in-out hover:bg-slate-300 rtl:right-1.5"
						aria-hidden="true"
					></div>
				{/if}
				<div class="ml-5 flex flex-col gap-1 py-1 rtl:mr-5" dir={context.direction}>
					{@render children()}
				</div>
			</motion.div>
		{/if}
	</AnimatePresence>
</div>
