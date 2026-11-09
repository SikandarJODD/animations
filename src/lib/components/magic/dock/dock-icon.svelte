<script lang="ts" module>
	export interface DockIconProps {
		class?: string;
		children: Snippet;
	}
</script>

<script lang="ts">
	import { motion, useMotionValue, useTransform, useSpring } from "motion-sv";
	import { cn } from "#lib/utils.ts";
	import type { Snippet } from "svelte";
	import { getContext } from "svelte";
	import type { DockContext } from "./dock.svelte";

	let { class: className, children }: DockIconProps = $props();

	const DEFAULT_SIZE = 40;
	const DEFAULT_MAGNIFICATION = 60;
	const DEFAULT_DISTANCE = 140;

	// Get context from parent Dock component
	const dockContext = getContext<DockContext>("dock");

	let ref: HTMLDivElement | null = $state(null);

	// Fallback motion value if no context
	const defaultMouseX = useMotionValue(Infinity);
	const mouseX = dockContext?.mouseX ?? defaultMouseX;

	const size = $derived(dockContext?.iconSize ?? DEFAULT_SIZE);
	const magnification = $derived(dockContext?.iconMagnification ?? DEFAULT_MAGNIFICATION);
	const disableMagnification = $derived(dockContext?.disableMagnification ?? false);
	const distance = $derived(dockContext?.iconDistance ?? DEFAULT_DISTANCE);
	const padding = $derived(Math.max(6, size * 0.2));

	// Transform mouseX to distance from this icon's center
	const distanceCalc = useTransform(mouseX, (val: number) => {
		const bounds = ref?.getBoundingClientRect() ?? { x: 0, width: 0 };
		return val - bounds.x - bounds.width / 2;
	});

	// Transform distance to size - magnify when mouse is close
	const sizeTransform = useTransform(distanceCalc, (dist: number) => {
		const targetSize = disableMagnification ? size : magnification;
		// Clamp distance to range and interpolate
		if (Math.abs(dist) >= distance) return size;
		// Linear interpolation based on distance
		const progress = 1 - Math.abs(dist) / distance;
		return size + (targetSize - size) * progress;
	});

	// Apply spring physics for smooth animation
	const scaleSize = useSpring(sizeTransform, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});
</script>

<motion.div
	bind:ref
	style={{ width: scaleSize, height: scaleSize, padding: `${padding}px` }}
	class={cn(
		"flex aspect-square cursor-pointer items-center justify-center rounded-full",
		disableMagnification && "hover:bg-muted-foreground transition-colors",
		className
	)}
>
	<div>
		{@render children()}
	</div>
</motion.div>
