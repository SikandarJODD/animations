<script lang="ts" module>
	import type { WithElementRef } from "$lib/utils.js";
	import type { HTMLAttributes } from "svelte/elements";

	export type AnimatedBackgroundItemProps = WithElementRef<
		Omit<HTMLAttributes<HTMLDivElement>, "data-id"> & {
			"data-id": string;
		},
		HTMLDivElement
	>;
</script>

<script lang="ts">
	import { cn } from "$lib/utils.js";
	import { getAnimatedBackgroundContext } from "./animated-background-context.svelte.js";

	let {
		ref = $bindable(null),
		"data-id": dataId,
		class: className,
		onclick,
		onmouseenter,
		onmouseleave,
		children,
		...restProps
	}: AnimatedBackgroundItemProps = $props();

	const background = getAnimatedBackgroundContext();
	const layout = background.layout;
	const active = $derived(background.activeId === dataId);
</script>

<div
	bind:this={ref}
	{...restProps}
	data-id={dataId}
	data-checked={active ? "true" : "false"}
	data-animated-background-id={background.layoutId}
	class={cn("relative inline-flex", className)}
	onclick={(event) => {
		if (!background.enableHover) {
			background.setActiveId(dataId);
		}
		onclick?.(event);
	}}
	onmouseenter={(event) => {
		if (background.enableHover) {
			background.setActiveId(dataId);
		}
		onmouseenter?.(event);
	}}
	onmouseleave={(event) => {
		const relatedItem =
			event.relatedTarget instanceof Element
				? event.relatedTarget.closest("[data-animated-background-id]")
				: null;
		const isMovingWithinBackground =
			relatedItem?.getAttribute("data-animated-background-id") ===
			background.layoutId;

		if (background.enableHover && !isMovingWithinBackground) {
			background.setActiveId(null);
		}
		onmouseleave?.(event);
	}}
>
	{#if active}
		<layout.div
			layoutId={background.layoutId}
			class={cn("absolute inset-0", background.backgroundClass)}
			transition={background.transition}
		></layout.div>
	{/if}
	<div class="z-10">
		{@render children?.()}
	</div>
</div>
