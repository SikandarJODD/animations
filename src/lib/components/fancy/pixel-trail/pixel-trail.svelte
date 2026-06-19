<script lang="ts">
	import type { ClassValue } from "clsx";

	import { useDimensions } from "$lib/hooks/use-dimension.svelte";
	import { cn } from "$lib/utils";

	import PixelDot from "./pixel-dot.svelte";

	interface PixelTrailProps {
		pixelSize?: number;
		fadeDuration?: number;
		delay?: number;
		class?: ClassValue;
		pixelClass?: ClassValue;
	}

	type PixelDotHandle = {
		flash: () => Promise<unknown>;
	};

	let {
		pixelSize = 20,
		fadeDuration = 500,
		delay = 0,
		class: className,
		pixelClass,
	}: PixelTrailProps = $props();

	let containerRef = $state<HTMLDivElement | null>(null);
	let pixelDots = $state<(PixelDotHandle | null)[]>([]);

	const dimensions = useDimensions(() => containerRef);

	let columns = $derived(Math.ceil(dimensions.width / pixelSize));
	let rows = $derived(Math.ceil(dimensions.height / pixelSize));
	let rowIndices = $derived(Array.from({ length: rows }, (_, index) => index));
	let columnIndices = $derived(Array.from({ length: columns }, (_, index) => index));
	let totalPixels = $derived(rows * columns);

	$effect(() => {
		pixelDots.length = totalPixels;
	});

	function getPixelIndex(columnIndex: number, rowIndex: number) {
		return rowIndex * columns + columnIndex;
	}

	function handleMouseMove(event: MouseEvent) {
		if (!containerRef) {
			return;
		}

		const rect = containerRef.getBoundingClientRect();
		const columnIndex = Math.floor((event.clientX - rect.left) / pixelSize);
		const rowIndex = Math.floor((event.clientY - rect.top) / pixelSize);

		if (columnIndex < 0 || columnIndex >= columns || rowIndex < 0 || rowIndex >= rows) {
			return;
		}

		pixelDots[getPixelIndex(columnIndex, rowIndex)]?.flash();
	}
</script>

<div
	bind:this={containerRef}
	role="presentation"
	class={cn("pointer-events-auto absolute inset-0 h-full w-full", className)}
	onmousemove={handleMouseMove}
>
	{#each rowIndices as rowIndex (`row-${rowIndex}`)}
		<div class="flex">
			{#each columnIndices as columnIndex (`pixel-${columnIndex}-${rowIndex}`)}
				<PixelDot
					bind:this={pixelDots[getPixelIndex(columnIndex, rowIndex)]}
					size={pixelSize}
					{fadeDuration}
					{delay}
					class={pixelClass}
				/>
			{/each}
		</div>
	{/each}
</div>
