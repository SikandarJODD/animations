<script lang="ts">
	import { createMap } from "piri";
	import { cn } from "$lib/utils.js";

	interface Marker extends Record<string, unknown> {
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

	let map = $derived(
		createMap({
			width,
			height,
			mapSamples,
			radius: dotRadius,
			grid: stagger ? "diagonal" : "vertical",
		})
	);

	let points = $derived(map.points);
	let processedMarkers = $derived(
		map.addMarkers(markers) as Array<{ x: number; y: number; size?: number }>
	);
</script>

<svg
	viewBox="0 0 {width} {height}"
	class={cn("text-gray-500 dark:text-gray-500", className)}
	style="width: 100%; height: 100%; {style || ''}"
>
	{#each points as point}
		<circle cx={point.x} cy={point.y} r={dotRadius} fill={dotColor} />
	{/each}
	{#each processedMarkers as marker}
		<circle cx={marker.x} cy={marker.y} r={marker.size ?? dotRadius} fill={markerColor} />
	{/each}
</svg>
