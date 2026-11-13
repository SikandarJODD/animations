<script lang="ts">
	import type { ClassValue } from "svelte/elements";
	import { motion, type Transition } from "motion-sv";
	import { cn } from "#lib/utils.js";

	interface BorderBeamProps {
		size?: number;
		duration?: number;
		delay?: number;
		colorFrom?: string;
		colorTo?: string;
		transition?: Transition;
		class?: ClassValue;
		style?: string;
		reverse?: boolean;
		initialOffset?: number;
		borderWidth?: number;
	}

	let {
		class: className,
		size = 50,
		delay = 0,
		duration = 6,
		colorFrom = "#ffaa40",
		colorTo = "#9c40ff",
		transition,
		reverse = false,
		initialOffset = 0,
		borderWidth = 1,
	}: BorderBeamProps = $props();

	const containerStyle = $derived(`--border-beam-width: ${borderWidth}px;`);

	const beamStyle = $derived({
		width: size,
		offsetPath: `rect(0 auto auto 0 round ${size}px)`,
		"--color-from": colorFrom,
		"--color-to": colorTo,
	} as any);

	const animateConfig = $derived({
		offsetDistance: reverse
			? [`${100 - initialOffset}%`, `${-initialOffset}%`]
			: [`${initialOffset}%`, `${100 + initialOffset}%`],
	});

	const transitionConfig = $derived({
		repeat: Infinity,
		ease: "linear" as const,
		duration,
		delay: -delay,
		...transition,
	} as any);
</script>

<div
	class="pointer-events-none absolute inset-0 rounded-[inherit] border-(length:--border-beam-width) border-transparent mask-[linear-gradient(transparent,transparent),linear-gradient(#000,#000)] mask-intersect [mask-clip:padding-box,border-box]"
	style={containerStyle}
>
	<motion.div
		class={cn(
			"absolute aspect-square",
			"bg-linear-to-l from-(--color-from) via-(--color-to) to-transparent",
			className
		)}
		style={beamStyle}
		initial={{ offsetDistance: `${initialOffset}%` }}
		animate={animateConfig}
		transition={transitionConfig}
	/>
</div>
