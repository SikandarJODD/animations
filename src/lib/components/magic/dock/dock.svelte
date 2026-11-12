<script lang="ts" module>
	import type { MotionValue } from "motion-sv";
	import type { ClassValue } from "svelte/elements";

	export interface DockProps {
		class?: ClassValue;
		iconSize?: number;
		iconMagnification?: number;
		disableMagnification?: boolean;
		iconDistance?: number;
		direction?: "top" | "middle" | "bottom";
		children: Snippet;
	}

	export interface DockContext {
		mouseX: MotionValue<number>;
		iconSize: number;
		iconMagnification: number;
		disableMagnification: boolean;
		iconDistance: number;
	}
</script>

<script lang="ts">
	import { motion, useMotionValue } from "motion-sv";
	import { cn } from "#lib/utils.js";
	import type { Snippet } from "svelte";
	import { setContext } from "svelte";

	const DEFAULT_SIZE = 40;
	const DEFAULT_MAGNIFICATION = 60;
	const DEFAULT_DISTANCE = 140;

	let {
		class: className,
		children,
		iconSize = DEFAULT_SIZE,
		iconMagnification = DEFAULT_MAGNIFICATION,
		disableMagnification = false,
		iconDistance = DEFAULT_DISTANCE,
		direction = "middle",
	}: DockProps = $props();

	// Use MotionValue for mouseX - this enables smooth reactive transforms
	const mouseX = useMotionValue(Infinity);

	// Provide context to child DockIcon components
	setContext("dock", {
		mouseX,
		get iconSize() {
			return iconSize;
		},
		get iconMagnification() {
			return iconMagnification;
		},
		get disableMagnification() {
			return disableMagnification;
		},
		get iconDistance() {
			return iconDistance;
		},
	});
</script>

<motion.div
	onmousemove={(e) => mouseX.set(e.pageX)}
	onmouseleave={() => mouseX.set(Infinity)}
	class={cn(
		"mx-auto mt-8 flex h-14 w-max items-center justify-center gap-2 rounded-2xl border p-2 backdrop-blur-md supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10",
		{
			"items-start": direction === "top",
			"items-center": direction === "middle",
			"items-end": direction === "bottom",
		},
		className
	)}
>
	{@render children()}
</motion.div>
