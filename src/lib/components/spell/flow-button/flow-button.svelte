<script lang="ts">
	import type { HTMLButtonAttributes } from "svelte/elements";
	import type { Snippet } from "svelte";
	import { cn } from "$lib/utils";

	type SizeVariant = "sm" | "default" | "lg";

	const sizeMap: Record<SizeVariant, string> = {
		sm: "h-8 rounded-full gap-1.5 px-3 text-sm",
		default: "h-9 px-4 py-2 text-sm rounded-full",
		lg: "h-10 rounded-full px-6 text-sm",
	};

	const borderRadiusMap: Record<SizeVariant, number> = {
		sm: 16,
		default: 18,
		lg: 20,
	};

	let {
		children,
		size = "default",
		borderColor = "var(--rotating-border-color)",
		class: className,
		el = $bindable(null),
		...restProps
	}: HTMLButtonAttributes & {
		children?: Snippet;
		size?: SizeVariant;
		borderColor?: string;
		el?: HTMLButtonElement | null;
	} = $props();

	let buttonEl: HTMLButtonElement | null = $state(null);
	let width = $state(0);
	let height = $state(0);

	$effect(() => {
		el = buttonEl;
	});

	$effect(() => {
		if (!buttonEl) return;

		const measure = () => {
			width = buttonEl!.offsetWidth;
			height = buttonEl!.offsetHeight;
		};

		measure();

		const observer = new ResizeObserver(measure);
		observer.observe(buttonEl);

		return () => observer.disconnect();
	});

	function createRoundedRectPath(w: number, h: number, r: number): string {
		return `M${r},0.5 H${w - r} A${r},${r} 0 0 1 ${w - 0.5},${r} V${h - r} A${r},${r} 0 0 1 ${w - r},${h - 0.5} H${r} A${r},${r} 0 0 1 0.5,${h - r} V${r} A${r},${r} 0 0 1 ${r},0.5 Z`;
	}

	const buttonSize = $derived(sizeMap[size]);
	const radius = $derived(borderRadiusMap[size]);
	const pathD = $derived(width && height ? createRoundedRectPath(width, height, radius) : "");
</script>

<div class="group pointer-events-none relative inline-block">
	<div
		class="pointer-events-none absolute inset-[2px] z-10 opacity-0 transition-all duration-200 ease-out group-hover:inset-0 group-hover:opacity-100"
		style:border-radius="{radius}px"
	>
		{#if width && height}
			<svg
				{width}
				{height}
				viewBox="0 0 {width} {height}"
				aria-hidden="true"
				preserveAspectRatio="none"
				class="pointer-events-none absolute left-0 top-0 h-full w-full"
			>
				<path
					d={pathD}
					fill="none"
					stroke={borderColor}
					stroke-width="1"
					stroke-dasharray="6,4"
					stroke-dashoffset="0"
					class="group-hover:animate-dash-flow"
				/>
			</svg>
		{/if}
	</div>
	<button
		bind:this={buttonEl}
		class={cn(
			"pointer-events-auto relative z-0 inline-flex cursor-pointer shrink-0 items-center justify-center gap-2 whitespace-nowrap font-[550] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-neutral-100 dark:bg-muted/50 text-primary hover:bg-transparent dark:hover:bg-transparent [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
			buttonSize,
			className,
		)}
		{...restProps}
	>
		{@render children?.()}
	</button>
</div>
