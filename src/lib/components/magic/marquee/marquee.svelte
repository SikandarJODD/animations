<script lang="ts">
	import { cn } from "#lib/utils.js";
	import type { Snippet } from "svelte";

	interface MarqueeProps {
		children: Snippet;
		class?: string;
		reverse?: boolean;
		pauseOnHover?: boolean;
		vertical?: boolean;
		repeat?: number;
		[key: string]: any;
	}

	let {
		children,
		class: className = "",
		reverse = false,
		pauseOnHover = false,
		vertical = false,
		repeat = 4,
		...rest
	}: MarqueeProps = $props();
</script>

<div
	{...rest}
	class={cn(
		"group flex gap-(--gap) overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
		{
			"flex-row": !vertical,
			"flex-col": vertical,
		},
		className
	)}
>
	{#each Array(repeat).fill(0) as _, i (i)}
		<div
			class={cn("flex shrink-0 justify-around gap-(--gap)", {
				"animate-marquee flex-row": !vertical,
				"animate-marquee-vertical flex-col": vertical,
				"group-hover:paused": pauseOnHover,
				"direction-[reverse]": reverse,
			})}
		>
			{@render children?.()}
		</div>
	{/each}
</div>
