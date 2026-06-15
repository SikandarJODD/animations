<script lang="ts">
	import { motion } from "motion-sv";
	import { untrack } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	interface ScrambleInProps extends HTMLAttributes<HTMLSpanElement> {
		text: string;
		scrambleDelay?: number;
		scrambleSpeed?: number;
		scrambledLetterCount?: number;
		characters?: string;
		class?: string;
		scrambledClass?: string;
		autoStart?: boolean;
		onStart?: () => void;
		onComplete?: () => void;
	}

	const DEFAULT_CHARACTERS = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";

	let {
		text,
		scrambleDelay = 0,
		scrambleSpeed = 50,
		scrambledLetterCount = 2,
		characters = DEFAULT_CHARACTERS,
		class: className,
		scrambledClass,
		autoStart = true,
		onStart,
		onComplete,
		...props
	}: ScrambleInProps = $props();

	function splitIntoGraphemes(value: string) {
		if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
			const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
			return Array.from(segmenter.segment(value), ({ segment }) => segment);
		}

		return Array.from(value);
	}

	function joinSegments(segments: string[]) {
		return segments.join("");
	}

	function getRandomSegment(pool: string[]) {
		if (pool.length === 0) {
			return "";
		}

		return pool[Math.floor(Math.random() * pool.length)] ?? "";
	}

	function createScrambledPart(pool: string[], count: number) {
		return Array.from({ length: count }, () => getRandomSegment(pool)).join("");
	}

	let displayText = $state("");
	let isAnimating = $state(false);
	let visibleLetterCount = $state(0);
	let scrambleOffset = $state(0);

	let sourceSegments = $derived.by(() => splitIntoGraphemes(text));
	let displaySegments = $derived.by(() => splitIntoGraphemes(displayText));
	let scrambleSegments = $derived.by(() => splitIntoGraphemes(characters));
	let revealedText = $derived.by(() =>
		joinSegments(displaySegments.slice(0, visibleLetterCount))
	);
	let scrambledText = $derived.by(() => joinSegments(displaySegments.slice(visibleLetterCount)));

	let previousAutoStart = false;
	let startTimeout: ReturnType<typeof setTimeout> | null = null;

	function clearStartTimeout() {
		if (startTimeout !== null) {
			clearTimeout(startTimeout);
			startTimeout = null;
		}
	}

	export function start() {
		clearStartTimeout();
		displayText = "";
		visibleLetterCount = 0;
		scrambleOffset = 0;
		isAnimating = false;

		const delay = Math.max(0, scrambleDelay);

		if (delay === 0) {
			isAnimating = true;
			onStart?.();
			return;
		}

		startTimeout = setTimeout(() => {
			startTimeout = null;
			isAnimating = true;
			onStart?.();
		}, delay);
	}

	export function reset() {
		clearStartTimeout();
		displayText = "";
		visibleLetterCount = 0;
		scrambleOffset = 0;
		isAnimating = false;
	}

	$effect(() => {
		if (autoStart && !previousAutoStart) {
			queueMicrotask(() => untrack(() => start()));
		}

		previousAutoStart = autoStart;
	});

	$effect(() => clearStartTimeout);

	$effect(() => {
		if (!isAnimating) {
			return;
		}

		const intervalDelay = Math.max(0, scrambleSpeed);
		const totalSegments = sourceSegments.length;
		const maxScrambledLetters = Math.max(0, Math.trunc(scrambledLetterCount));
		const randomPool = scrambleSegments;

		const intervalId = setInterval(() => {
			const currentVisibleLetterCount = visibleLetterCount;
			const currentScrambleOffset = scrambleOffset;

			if (currentVisibleLetterCount < totalSegments) {
				visibleLetterCount = currentVisibleLetterCount + 1;
			} else if (currentScrambleOffset < maxScrambledLetters) {
				scrambleOffset = currentScrambleOffset + 1;
			} else {
				isAnimating = false;
				onComplete?.();
				return;
			}

			const remainingSpace = Math.max(0, totalSegments - currentVisibleLetterCount);
			const currentScrambleCount = Math.min(remainingSpace, maxScrambledLetters);
			const scrambledPart = createScrambledPart(randomPool, currentScrambleCount);

			displayText =
				joinSegments(sourceSegments.slice(0, currentVisibleLetterCount)) + scrambledPart;
		}, intervalDelay);

		return () => clearInterval(intervalId);
	});
</script>

<span {...props}>
	<span class="sr-only">{text}</span>

	<motion.span class="inline-block whitespace-pre-wrap" aria-hidden="true">
		<span class={className}>{revealedText}</span>
		<span class={scrambledClass}>{scrambledText}</span>
	</motion.span>
</span>
