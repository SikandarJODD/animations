<script lang="ts">
	import { Button, type ButtonElementProps } from "$lib/components/ui/button/index.js";
	import { cn } from "$lib/utils.js";
	import PanelLeftIcon from "@lucide/svelte/icons/panel-left";
	import { useSidebar } from "./context.svelte.js";

	let {
		ref = $bindable(null),
		class: className,
		onclick,
		...restProps
	}: ButtonElementProps = $props();

	const sidebar = useSidebar();
</script>

<Button
	data-sidebar="trigger"
	data-slot="sidebar-trigger"
	variant="ghost"
	size="icon"
	class={cn("size-7", className)}
	type="button"
	onclick={(e) => {
		onclick?.(e as MouseEvent & { currentTarget: EventTarget & HTMLButtonElement });
		sidebar.toggle();
	}}
	{...(restProps as Record<string, unknown>)}
>
	<PanelLeftIcon />
	<span class="sr-only">Toggle Sidebar</span>
</Button>
