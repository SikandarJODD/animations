<script lang="ts">
	import { onMount, getContext } from "svelte";
	import { motion } from "motion-sv";
	import { cn } from "#lib/utils.ts";

	type ElementType = "div" | "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

	interface TypingAnimationProps {
		text: string;
		class?: string;
		duration?: number;
		delay?: number;
		as?: ElementType;
		startOnView?: boolean;
		itemIndex?: number;
	}

	let {
		text,
		class: className,
		duration = 60,
		delay = 0,
		as = "span",
		startOnView = true,
		itemIndex,
	}: TypingAnimationProps = $props();

	let MotionComponent = $derived(motion[as]);

	let displayedText = $state("");
	let started = $state(false);
	let containerRef: HTMLElement | null = $state(null);
	let isInView = $state(false);

	// Get sequence context if available
	const sequence = getContext<{
		activeIndex: number;
		sequenceStarted: boolean;
		completeItem: (index: number) => void;
	} | null>("terminal-sequence");

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
			const startTimeout = setTimeout(() => (started = true), delay);
			return () => clearTimeout(startTimeout);
		}
	});

	// Watch for sequence or view changes to start animation
	$effect(() => {
		if (sequence && itemIndex !== undefined) {
			if (!sequence.sequenceStarted) return;
			if (started) return;
			if (sequence.activeIndex === itemIndex) {
				started = true;
			}
			return;
		}

		if (!startOnView) return;
		if (!isInView) return;
		if (started) return;

		const startTimeout = setTimeout(() => (started = true), delay);
		return () => clearTimeout(startTimeout);
	});

	// Typing effect
	$effect(() => {
		if (!started) return;

		let i = 0;
		const textToType = text; // Capture the value
		const typingEffect = setInterval(() => {
			if (i < textToType.length) {
				displayedText = textToType.substring(0, i + 1);
				i++;
			} else {
				clearInterval(typingEffect);
				if (sequence && itemIndex !== undefined) {
					sequence.completeItem(itemIndex);
				}
			}
		}, duration);

		return () => {
			clearInterval(typingEffect);
		};
	});
</script>

<div bind:this={containerRef}>
	<MotionComponent class={cn("text-sm font-normal tracking-tight", className)}>
		{displayedText}
	</MotionComponent>
</div>
