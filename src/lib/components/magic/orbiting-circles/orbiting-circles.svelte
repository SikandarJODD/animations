<script lang="ts">
	import { cn } from "#lib/utils.ts";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	interface OrbitingCirclesProps extends HTMLAttributes<HTMLDivElement> {
		children: Snippet;
		class?: string;
		reverse?: boolean;
		duration?: number;
		radius?: number;
		path?: boolean;
		iconSize?: number;
		speed?: number;
		angle?: number;
		delay?: number;
	}

	let {
		children,
		class: className,
		reverse = false,
		duration = 20,
		radius = 160,
		path = false,
		iconSize = 30,
		speed = 1,
		angle = 0,
		delay = 0,
		...props
	}: OrbitingCirclesProps = $props();

	let calculatedDuration = $derived(duration / speed);
</script>

{#if path}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		version="1.1"
		class="pointer-events-none absolute inset-0 size-full"
	>
		<circle
			class="stroke-1 dark:stroke-white/20"
			cx="50%"
			cy="50%"
			r={radius}
			fill="none"
			stroke-dasharray="4 4"
		/>
	</svg>
{/if}

<div
	style:--duration={calculatedDuration}
	style:--radius={radius}
	style:--angle={angle}
	style:--delay={delay}
	style:--icon-size="{iconSize}px"
	class={cn(
		"animate-orbit absolute flex size-(--icon-size) transform-gpu items-center justify-center rounded-full [animation-delay:calc(var(--delay)*1000ms)]",
		{ "direction-[reverse]": reverse },
		className
	)}
	{...props}
>
	{@render children()}
</div>
