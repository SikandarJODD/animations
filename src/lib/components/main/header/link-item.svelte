<script lang="ts">
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";
	import type { LinkItemType } from "./types";
	import type { Component } from "svelte";
	import type { LucideIcon } from "@lucide/svelte";
	import { Badge } from "$lib/components/spell/badge";

	type Props = LinkItemType & HTMLAttributes<HTMLAnchorElement>;
	let {
		name,
		description,
		icon,
		badge,
		badgeVariant,
		href,
		class: className,
		...props
	}: Props = $props();

	// i have added Svelte Component, Lucide Icon so you can have custom-icon.svelte and lucide icon both
	let IconComponent: Component | LucideIcon | null = $derived(icon || null);
</script>

<a class={cn("flex items-center gap-x-2", className)} {href} {...props}>
	{#if IconComponent}
		<div
			class={cn(
				"bg-card outline-border/60 [&_svg]:text-foreground flex aspect-square size-9 items-center justify-center rounded-lg border shadow-xs outline outline-offset-2 [&_svg]:size-4"
			)}
		>
			<IconComponent />
		</div>
	{/if}
	<div class="flex flex-col items-start justify-center">
		<div class="flex items-center gap-2">
			<span class="font-medium">{name}</span>
			<!-- {#if badge}
				<Badge variant={badgeVariant} class="text-[10px]">{badge}</Badge>
			{/if} -->
		</div>
		<span class="text-muted-foreground line-clamp-2 text-xs">
			{description}
		</span>
	</div>
</a>
