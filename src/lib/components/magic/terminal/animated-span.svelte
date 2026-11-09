<script lang="ts">
	import { onMount, getContext } from "svelte";
	import { motion } from "motion-sv";
	import { cn } from "#lib/utils.ts";

	interface AnimatedSpanProps {
		children: Snippet;
		delay?: number;
		class?: string;
		startOnView?: boolean;
		itemIndex?: number;
	}

	import type { Snippet } from "svelte";

	let {
		children,
		delay = 0,
		class: className,
		startOnView = false,
		itemIndex,
	}: AnimatedSpanProps = $props();

	let containerRef: HTMLDivElement | null = $state(null);
	let isInView = $state(false);
	let hasStarted = $state(false);

	// Get sequence context if available
	let sequence = getContext<{
		activeIndex: number;
		sequenceStarted: boolean;
		completeItem: (index: number) => void;
	} | null>("terminal-sequence");

	let shouldAnimate = $derived(
		sequence && itemIndex !== undefined ? hasStarted : startOnView ? isInView : true
	);

	onMount(() => {
		// Handle IntersectionObserver for startOnView
		if (!sequence && startOnView && containerRef) {
			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						isInView = true;
						observer.disconnect();
					}
				},
				{
					threshold: 0.3,
				}
			);

			observer.observe(containerRef);

			return () => observer.disconnect();
		} else if (!sequence && !startOnView) {
			isInView = true;
		}
	});

	// Watch for sequence changes
	$effect(() => {
		if (!sequence || itemIndex === undefined) return;
		if (!sequence.sequenceStarted) return;
		if (hasStarted) return;
		if (sequence.activeIndex === itemIndex) {
			hasStarted = true;
		}
	});

	function handleAnimationComplete() {
		if (!sequence || itemIndex === undefined) return;
		sequence.completeItem(itemIndex);
	}
</script>

<div bind:this={containerRef}>
	<motion.div
		initial={{ opacity: 0, y: -5 }}
		animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: -5 }}
		transition={{ duration: 0.3, delay: sequence ? 0 : delay / 1000 }}
		class={cn("grid text-sm font-normal tracking-tight", className)}
		onanimationend={handleAnimationComplete}
	>
		{@render children()}
	</motion.div>
</div>
