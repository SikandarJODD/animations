<script lang="ts">
	import { createMap } from "piri";
	import { cn } from "$lib/utils.js";

	interface Marker {
		lat: number;
		lng: number;
		size?: number;
		[key: string]: unknown;
	}

	interface Props {
		width?: number;
		height?: number;
		mapSamples?: number;
		markers?: Marker[];
		dotColor?: string;
		markerColor?: string;
		dotRadius?: number;
		stagger?: boolean;
		class?: string;
		style?: string;
	}

	let {
		width = 150,
		height = 75,
		mapSamples = 5000,
		markers = [],
		markerColor = "#FF6900",
		dotColor = "currentColor",
		dotRadius = 0.2,
		stagger = true,
		class: className,
		style,
	}: Props = $props();

	let { points, addMarkers } = $derived(
		createMap({
			width,
			height,
			mapSamples,
		})
	);

	let processedMarkers = $derived(addMarkers(markers));

	let staggerHelpers = $derived.by(() => {
		const sorted = [...points].sort((a, b) => a.y - b.y || a.x - b.x);
		const rowMap = new Map<number, number>();
		let step = 0;
		let prevY = Number.NaN;
		let prevXInRow = Number.NaN;

		for (const p of sorted) {
			if (p.y !== prevY) {
				// new row
				prevY = p.y;
				prevXInRow = Number.NaN;
				if (!rowMap.has(p.y)) rowMap.set(p.y, rowMap.size);
			}
			if (!Number.isNaN(prevXInRow)) {
				const delta = p.x - prevXInRow;
				if (delta > 0) step = step === 0 ? delta : Math.min(step, delta);
			}
			prevXInRow = p.x;
		}

		return { xStep: step || 1, yToRowIndex: rowMap };
	});
</script>

<svg
	viewBox="0 0 {width} {height}"
	class={cn("text-gray-500 dark:text-gray-500", className)}
	style="width: 100%; height: 100%; {style || ''}"
>
	{#each points as point, index}
		{@const rowIndex = staggerHelpers.yToRowIndex.get(point.y) ?? 0}
		{@const offsetX = stagger && rowIndex % 2 === 1 ? staggerHelpers.xStep / 2 : 0}
		<circle cx={point.x + offsetX} cy={point.y} r={dotRadius} fill={dotColor} />
	{/each}
	{#each processedMarkers as marker, index}
		{@const rowIndex = staggerHelpers.yToRowIndex.get(marker.y) ?? 0}
		{@const offsetX = stagger && rowIndex % 2 === 1 ? staggerHelpers.xStep / 2 : 0}
		<circle
			cx={marker.x + offsetX}
			cy={marker.y}
			r={(marker.size as number | undefined) ?? dotRadius}
			fill={markerColor}
		/>
	{/each}
</svg>
