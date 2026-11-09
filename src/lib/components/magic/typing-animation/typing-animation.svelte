<script lang="ts">
	import { motion, type MotionProps, inView } from "motion-sv";
	import { cn } from "#lib/utils.js";
	import { watch } from "runed";

	interface TypingAnimationProps extends MotionProps {
		content?: string; // Single text string to type
		words?: string[]; // Array of words to cycle through
		class?: string;
		duration?: number;
		typeSpeed?: number;
		deleteSpeed?: number;
		delay?: number;
		pauseDelay?: number;
		loop?: boolean;
		startOnView?: boolean;
		showCursor?: boolean;
		blinkCursor?: boolean;
		cursorStyle?: "line" | "block" | "underscore";
	}

	let {
		content,
		words,
		class: className,
		duration = 100,
		typeSpeed,
		deleteSpeed,
		delay = 0,
		pauseDelay = 1000,
		loop = false,
		startOnView = true,
		showCursor = true,
		blinkCursor = true,
		cursorStyle = "line",
		...props
	}: TypingAnimationProps = $props();

	let displayedText = $state("");
	let currentWordIndex = $state(0);
	let currentCharIndex = $state(0);
	let phase = $state<"typing" | "pause" | "deleting">("typing");

	let elementRef: HTMLElement | null = $state(null);

	let wordsToAnimate = $derived(words || (content ? [content] : []));
	let hasMultipleWords = $derived(wordsToAnimate.length > 1);
	let typingSpeed = $derived(typeSpeed || duration);
	let deletingSpeed = $derived(deleteSpeed || typingSpeed / 2);

	// State: Track if element is in view
	let isInView = $state(false);

	// Watch elementRef to setup inView detection
	watch(
		() => elementRef,
		() => {
			if (!startOnView) {
				isInView = true;
				return;
			}

			if (!elementRef) return;

			// Use motion-sv's inView for detection
			const cleanup = inView(
				elementRef,
				() => {
					isInView = true;
				},
				{ amount: 0.3 }
			);

			return cleanup;
		}
	);

	// Derived: Should animation start
	let shouldStart = $derived(startOnView ? isInView : true);

	// Animation loop using watch - only watches shouldStart
	let timeoutId: ReturnType<typeof setTimeout> | undefined;

	let runAnimation = () => {
		if (!shouldStart || wordsToAnimate.length === 0) return;

		const currentWord = wordsToAnimate[currentWordIndex] || "";
		const graphemes = Array.from(currentWord);

		// Calculate delay based on current phase and initial delay
		const timeoutDelay =
			delay > 0 && displayedText === ""
				? delay
				: phase === "typing"
					? typingSpeed
					: phase === "deleting"
						? deletingSpeed
						: pauseDelay;

		timeoutId = setTimeout(() => {
			switch (phase) {
				case "typing":
					// Type next character
					if (currentCharIndex < graphemes.length) {
						displayedText = graphemes.slice(0, currentCharIndex + 1).join("");
						currentCharIndex = currentCharIndex + 1;
						runAnimation(); // Continue animation
					} else {
						// Finished typing current word
						if (hasMultipleWords || loop) {
							const isLastWord = currentWordIndex === wordsToAnimate.length - 1;
							if (!isLastWord || loop) {
								phase = "pause";
								runAnimation(); // Continue animation
							}
						}
					}
					break;

				case "pause":
					// Move to deleting phase after pause
					phase = "deleting";
					runAnimation(); // Continue animation
					break;

				case "deleting":
					// Delete previous character
					if (currentCharIndex > 0) {
						displayedText = graphemes.slice(0, currentCharIndex - 1).join("");
						currentCharIndex = currentCharIndex - 1;
						runAnimation(); // Continue animation
					} else {
						// Finished deleting, move to next word
						const nextIndex = (currentWordIndex + 1) % wordsToAnimate.length;
						currentWordIndex = nextIndex;
						phase = "typing";
						runAnimation(); // Continue animation
					}
					break;
			}
		}, timeoutDelay);
	};

	// Watch only shouldStart - animation state changes won't retrigger
	watch(
		() => shouldStart,
		() => {
			// Clear any existing timeout
			if (timeoutId) clearTimeout(timeoutId);

			// Reset state
			displayedText = "";
			currentWordIndex = 0;
			currentCharIndex = 0;
			phase = "typing";

			// Start animation if shouldStart is true
			if (shouldStart && wordsToAnimate.length > 0) {
				runAnimation();
			}
		}
	);

	// Derived: Current word as array of graphemes
	let currentWordGraphemes = $derived(Array.from(wordsToAnimate[currentWordIndex] || ""));

	// Derived: Animation is complete (not looping and finished last word)
	let isComplete = $derived(
		!loop &&
			currentWordIndex === wordsToAnimate.length - 1 &&
			currentCharIndex >= currentWordGraphemes.length &&
			phase !== "deleting"
	);

	// Derived: Should show cursor
	let shouldShowCursor = $derived(
		showCursor &&
			!isComplete &&
			(hasMultipleWords || loop || currentCharIndex < currentWordGraphemes.length)
	);

	// Helper: Get cursor character based on style
	function getCursorChar() {
		switch (cursorStyle) {
			case "block":
				return "▌";
			case "underscore":
				return "_";
			case "line":
			default:
				return "|";
		}
	}
</script>

<!-- Render motion component as span -->
<motion.span
	bind:ref={elementRef}
	class={cn("leading-20 tracking-[-0.02em]", className)}
	{...props}
>
	{displayedText}
	{#if shouldShowCursor}
		<span class={cn("inline-block", blinkCursor && "animate-blink-cursor")}>
			{getCursorChar()}
		</span>
	{/if}
</motion.span>
