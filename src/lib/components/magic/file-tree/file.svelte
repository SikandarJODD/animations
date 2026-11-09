<script lang="ts">
	import { getContext } from "svelte";
	import { cn } from "#lib/utils.js";
	import type { Snippet } from "svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";

	interface FileProps extends HTMLButtonAttributes {
		value: string;
		isSelectable?: boolean;
		isSelect?: boolean;
		fileIcon?: Snippet;
		children: Snippet;
		class?: string;
	}

	let {
		value,
		isSelectable = true,
		isSelect,
		fileIcon,
		children,
		class: className,
		...props
	}: FileProps = $props();

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

	const isSelected = $derived(isSelect ?? context.selectedId() === value);

	// Default file icon (SVG)
	const defaultFileIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>`;
</script>

<button
	type="button"
	disabled={!isSelectable}
	class={cn(
		"flex w-fit items-center gap-1 rounded-md pr-1 text-sm duration-200 ease-in-out rtl:pr-0 rtl:pl-1",
		{
			"bg-muted": isSelected && isSelectable,
		},
		isSelectable ? "cursor-pointer" : "cursor-not-allowed opacity-50",
		context.direction === "rtl" ? "rtl" : "ltr",
		className
	)}
	onclick={() => context.selectItem(value)}
	{...props}
>
	<span class="size-4">
		{#if fileIcon}
			{@render fileIcon()}
		{:else}
			{@html defaultFileIcon}
		{/if}
	</span>
	{@render children()}
</button>
