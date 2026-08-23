<script lang="ts">
	import { cn } from "$lib/utils";
	import { ChevronLeftIcon, ChevronRightIcon } from "@lucide/svelte";

	type ComponentProps = {
		label: string;
		title: string;
		href: string;
		align?: "left" | "right";
		forceSecondColumn?: boolean;
	};

	const {
		label,
		title,
		href,
		align = "left",
		forceSecondColumn = false,
		...rest
	}: ComponentProps = $props();
</script>

<a
	{href}
	{...rest}
	class={cn(
		"group border-border bg-background hover:bg-muted/50 relative flex flex-col rounded-lg border px-4 py-3 transition-[background-color] duration-150 ease-out",
		forceSecondColumn && "col-start-2"
	)}
>
	<div class={cn("flex items-start gap-1", align === "right" && "justify-end")}>
		{#if align === "left"}
			<span>
				<ChevronLeftIcon
					class="text-foreground/50 group-hover:text-foreground mt-0.5 h-4 w-4 transition-colors duration-150 ease-out"
				/>
			</span>
		{/if}
		<div class={cn("flex flex-col", align === "right" && "text-right")}>
			<span class="text-foreground my-0 py-0 text-sm">
				{title}
			</span>
			<span
				class={["text-foreground/45 mt-1 line-clamp-1 text-sm", align === "left" && "pr-2"]}
			>
				{label}
			</span>
		</div>
		{#if align === "right"}
			<span>
				<ChevronRightIcon
					class="text-foreground/50 group-hover:text-foreground mt-0.5 h-4 w-4 transition-colors duration-150 ease-out"
				/>
			</span>
		{/if}
	</div>
</a>
