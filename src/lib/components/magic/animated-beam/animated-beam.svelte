<script lang="ts">
	import { motion } from "motion-sv";
	import { cn } from "#lib/utils.js";
	import type { AnimatedBeamProps } from "./types";
	import { usePathCalculator } from "./use-path-calculator.svelte";
	import { useGradientCoordinates } from "./use-gradient-coordinates.svelte";
	import { useResizeObserver } from "./use-resize-observer.svelte";

	let {
		class: className,
		containerRef,
		fromRef,
		toRef,
		curvature = 0,
		reverse = false,
		duration = Math.random() * 3 + 4,
		delay = 0,
		pathColor = "gray",
		pathWidth = 2,
		pathOpacity = 0.2,
		gradientStartColor = "#ffaa40",
		gradientStopColor = "#9c40ff",
		startXOffset = 0,
		startYOffset = 0,
		endXOffset = 0,
		endYOffset = 0,
	}: AnimatedBeamProps = $props();

	// Generate unique ID for gradient
	// let id = $state(`gradient-${Math.random().toString(36).substring(2, 11)}`);
	let id = $props.id();

	// Use path calculator
	const pathCalculator = usePathCalculator();

	// Calculate gradient coordinates based on reverse prop
	const gradientCoordinates = $derived(useGradientCoordinates(reverse));

	// Update path function
	const updatePath = () => {
		pathCalculator.calculatePath(
			containerRef,
			fromRef,
			toRef,
			curvature,
			startXOffset,
			startYOffset,
			endXOffset,
			endYOffset
		);
	};

	// Setup resize observer
	useResizeObserver(() => containerRef, updatePath);

	// Watch for changes in refs and offsets
	$effect(() => {
		updatePath();
	});
</script>

<svg
	fill="none"
	width={pathCalculator.svgDimensions.width}
	height={pathCalculator.svgDimensions.height}
	xmlns="http://www.w3.org/2000/svg"
	class={cn("pointer-events-none absolute top-0 left-0 transform-gpu stroke-2", className)}
	viewBox={`0 0 ${pathCalculator.svgDimensions.width} ${pathCalculator.svgDimensions.height}`}
>
	<path
		d={pathCalculator.pathD}
		stroke={pathColor}
		stroke-width={pathWidth}
		stroke-opacity={pathOpacity}
		stroke-linecap="round"
	/>
	<path
		d={pathCalculator.pathD}
		stroke-width={pathWidth}
		stroke={`url(#${id})`}
		stroke-opacity="1"
		stroke-linecap="round"
	/>
	<defs>
		<motion.linearGradient
			class="transform-gpu"
			{id}
			gradientUnits="userSpaceOnUse"
			initial={{
				x1: "0%",
				x2: "0%",
				y1: "0%",
				y2: "0%",
			}}
			animate={{
				x1: gradientCoordinates.x1,
				x2: gradientCoordinates.x2,
				y1: gradientCoordinates.y1,
				y2: gradientCoordinates.y2,
			}}
			transition={{
				delay,
				duration,
				ease: [0.16, 1, 0.3, 1],
				repeat: Infinity,
				repeatDelay: 0,
			}}
		>
			<stop stop-color={gradientStartColor} stop-opacity="0"></stop>
			<stop stop-color={gradientStartColor}></stop>
			<stop offset="32.5%" stop-color={gradientStopColor}></stop>
			<stop offset="100%" stop-color={gradientStopColor} stop-opacity="0"></stop>
		</motion.linearGradient>
	</defs>
</svg>
