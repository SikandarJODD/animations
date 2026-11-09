<script lang="ts">
	import { onMount } from "svelte";
	import { cn } from "#lib/utils.js";
	import type { Snippet } from "svelte";

	interface NeonColorsProps {
		firstColor: string;
		secondColor: string;
	}

	interface NeonGradientCardProps {
		children?: Snippet;
		class?: string;
		borderSize?: number;
		borderRadius?: number;
		neonColors?: NeonColorsProps;
	}

	let {
		class: className,
		children,
		borderSize = 2,
		borderRadius = 20,
		neonColors = {
			firstColor: "#ff00aa",
			secondColor: "#00FFF1",
		},
		...props
	}: NeonGradientCardProps = $props();

	let containerRef: HTMLDivElement | null = $state(null);
	let dimensions = $state({ width: 0, height: 0 });

	const updateDimensions = () => {
		if (containerRef) {
			const { offsetWidth, offsetHeight } = containerRef;
			dimensions = { width: offsetWidth, height: offsetHeight };
		}
	};

	onMount(() => {
		updateDimensions();
		window.addEventListener("resize", updateDimensions);

		return () => {
			window.removeEventListener("resize", updateDimensions);
		};
	});

	$effect(() => {
		if (containerRef) {
			updateDimensions();
		}
	});

	let containerStyle = $derived(`
    --border-size: ${borderSize}px;
    --border-radius: ${borderRadius}px;
    --neon-first-color: ${neonColors.firstColor};
    --neon-second-color: ${neonColors.secondColor};
    --card-width: ${dimensions.width}px;
    --card-height: ${dimensions.height}px;
    --card-content-radius: ${borderRadius - borderSize}px;
    --pseudo-element-background-image: linear-gradient(0deg, ${neonColors.firstColor}, ${neonColors.secondColor});
    --pseudo-element-width: ${dimensions.width + borderSize * 2}px;
    --pseudo-element-height: ${dimensions.height + borderSize * 2}px;
    --after-blur: ${dimensions.width / 3}px;
  `);
</script>

<div
	bind:this={containerRef}
	style={containerStyle}
	class={cn("relative z-10 size-full rounded-(--border-radius)", className)}
	{...props}
>
	<div
		class={cn(
			"relative size-full min-h-[inherit] rounded-(--card-content-radius) bg-gray-100 p-6",
			"before:absolute before:-top-(--border-size) before:-left-(--border-size) before:-z-10 before:block",
			"before:h-(--pseudo-element-height) before:w-(--pseudo-element-width) before:rounded-(--border-radius) before:content-['']",
			"before:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] before:bg-size-[100%_200%]",
			"before:animate-background-position-spin",
			"after:absolute after:-top-(--border-size) after:-left-(--border-size) after:-z-10 after:block",
			"after:h-(--pseudo-element-height) after:w-(--pseudo-element-width) after:rounded-(--border-radius) after:blur-(--after-blur) after:content-['']",
			"after:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] after:bg-size-[100%_200%] after:opacity-80",
			"after:animate-background-position-spin",
			"dark:bg-neutral-900",
			"wrap-break-word"
		)}
	>
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>
