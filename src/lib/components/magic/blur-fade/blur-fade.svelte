<script lang="ts">
	import type { ClassValue } from "svelte/elements";
	import { motion, AnimatePresence, useInView, type Variants } from "motion-sv";
	import { cn } from "#lib/utils.js";
	import type { Snippet } from "svelte";

	type MarginType = string;

	interface BlurFadeProps {
		children: Snippet;
		class?: ClassValue;
		variant?: Variants;
		exit?: boolean;
		duration?: number;
		delay?: number;
		offset?: number;
		direction?: "up" | "down" | "left" | "right";
		triggerOnView?: boolean;
		inViewMargin?: MarginType;
		blur?: string;
		once?: boolean;
	}

	let {
		children,
		class: className,
		variant,
		exit = false,
		duration = 0.4,
		delay = 0,
		offset = 6,
		direction = "down",
		triggerOnView = true,
		inViewMargin = "-50px",
		blur = "6px",
		once = true,
	}: BlurFadeProps = $props();

	let containerRef: HTMLDivElement | null = $state(null);
	let view = useInView(
		() => containerRef!,
		() =>
			({
				once,
				amount: 0.1,
				margin: inViewMargin,
			}) as any
	);

	const defaultVariants = $derived.by(() => {
		return {
			hidden: {
				[direction === "left" || direction === "right" ? "x" : "y"]:
					direction === "right" || direction === "down" ? -offset : offset,
				opacity: 0,
				filter: `blur(${blur})`,
			},
			visible: {
				[direction === "left" || direction === "right" ? "x" : "y"]: 0,
				opacity: 1,
				filter: `blur(0px)`,
			},
		} as Variants;
	});

	const combinedVariants = $derived(variant || defaultVariants);
	const shouldAnimate = $derived(!triggerOnView || view.current);
</script>

<div bind:this={containerRef}>
	<AnimatePresence>
		<motion.div
			initial="hidden"
			animate={shouldAnimate ? "visible" : "hidden"}
			exit={exit ? "hidden" : undefined}
			variants={combinedVariants}
			transition={{
				delay: 0.04 + delay,
				duration,
				ease: "easeOut",
			}}
			class={cn(className)}
		>
			{@render children()}
		</motion.div>
	</AnimatePresence>
</div>
