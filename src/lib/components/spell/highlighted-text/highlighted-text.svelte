<script lang="ts">
	import { cn } from "#lib/utils.js";
	import { motion, useInView, type AnimationOptions, type Variants } from "motion-sv";
	import type { Snippet } from "svelte";
	import type { ClassValue, HTMLAttributes } from "svelte/elements";

	type From = "left" | "right" | "top" | "bottom";

	interface HighlightedTextProps extends HTMLAttributes<HTMLSpanElement> {
		children?: Snippet;
		class?: ClassValue;
		from?: From;
		delay?: number;
		triggerOnView?: boolean;
		once?: boolean;
	}

	const transition: AnimationOptions = {
		type: "spring",
		damping: 30,
		stiffness: 300,
	};

	const fromVariants: Record<From, Variants> = {
		left: {
			hidden: { x: "-100%" },
			visible: { x: "0%" },
		},
		right: {
			hidden: { x: "100%" },
			visible: { x: "0%" },
		},
		top: {
			hidden: { y: "-100%" },
			visible: { y: "0%" },
		},
		bottom: {
			hidden: { y: "100%" },
			visible: { y: "0%" },
		},
	};

	let {
		children,
		class: className,
		from = "bottom",
		delay = 0,
		triggerOnView = false,
		once = true,
		...props
	}: HighlightedTextProps = $props();

	let element = $state<HTMLSpanElement | null>(null);
	let view = useInView(
		() => (triggerOnView ? element : null)!,
		() => ({ once, amount: 0.2 }) as any
	);

	const variants = $derived(fromVariants[from]);
	const isVisible = $derived(triggerOnView ? view.current : true);
</script>

<span
	bind:this={element}
	class={cn("relative inline-flex overflow-hidden align-baseline", className)}
	{...props}
>
	<motion.span
		class="absolute inset-0 -right-[0.18em] -left-[0.15em] z-0 bg-black dark:bg-white"
		initial="hidden"
		animate={isVisible ? "visible" : "hidden"}
		{variants}
		transition={{ ...transition, delay }}
	/>
	<span class="relative z-10 pr-[0.18em] pl-[0.15em] text-white mix-blend-difference">
		{@render children?.()}
	</span>
</span>
