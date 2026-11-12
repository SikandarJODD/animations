<script lang="ts">
	import type { ClassValue } from "svelte/elements";
	import { onMount } from "svelte";
	import { motion, AnimatePresence } from "motion-sv";
	import { cn } from "#lib/utils.js";

	type CharacterSet = string[] | readonly string[];

	type ElementType = "div" | "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

	interface HyperTextProps {
		text: string;
		class?: ClassValue;
		duration?: number;
		delay?: number;
		as?: ElementType;
		startOnView?: boolean;
		animateOnHover?: boolean;
		characterSet?: CharacterSet;
	}

	let {
		text,
		class: className,
		duration = 800,
		delay = 0,
		as = "div",
		startOnView = false,
		animateOnHover = true,
		characterSet = Object.freeze("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")) as readonly string[],
	}: HyperTextProps = $props();

	let MotionComponent = $derived(motion[as]);

	let displayText = $state<string[]>([]);
	let isAnimating = $state(false);
	let iterationCount = $state(0);
	let elementRef: any = $state(null);

	// Initialize displayText when text changes
	$effect(() => {
		displayText = text.split("");
	});

	const getRandomInt = (max: number): number => Math.floor(Math.random() * max);

	const handleAnimationTrigger = () => {
		if (animateOnHover && !isAnimating) {
			iterationCount = 0;
			isAnimating = true;
		}
	};

	// Handle animation start based on view or delay
	onMount(() => {
		if (!startOnView) {
			const startTimeout = setTimeout(() => {
				isAnimating = true;
			}, delay);
			return () => clearTimeout(startTimeout);
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						isAnimating = true;
					}, delay);
					observer.disconnect();
				}
			},
			{ threshold: 0.1, rootMargin: "-30% 0px -30% 0px" }
		);

		if (elementRef) {
			observer.observe(elementRef);
		}

		return () => observer.disconnect();
	});

	// Handle scramble animation
	$effect(() => {
		if (!isAnimating) return;

		const maxIterations = text.length;
		const startTime = performance.now();
		let animationFrameId: number;

		const animate = (currentTime: number) => {
			const elapsed = currentTime - startTime;
			const progress = Math.min(elapsed / duration, 1);

			iterationCount = progress * maxIterations;

			displayText = displayText.map((letter, index) =>
				letter === " "
					? letter
					: index <= iterationCount
						? text[index]
						: characterSet[getRandomInt(characterSet.length)]
			);

			if (progress < 1) {
				animationFrameId = requestAnimationFrame(animate);
			} else {
				isAnimating = false;
			}
		};

		animationFrameId = requestAnimationFrame(animate);

		return () => cancelAnimationFrame(animationFrameId);
	});
</script>

<MotionComponent
	bind:this={elementRef}
	class={cn("overflow-hidden py-2 text-4xl font-medium", className)}
	onmouseenter={handleAnimationTrigger}
>
	<AnimatePresence>
		{#each displayText as letter, index (index)}
			<motion.span class={cn("font-mono", letter === " " ? "w-3" : "")}>
				{letter.toUpperCase()}
			</motion.span>
		{/each}
	</AnimatePresence>
</MotionComponent>
