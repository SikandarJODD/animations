<script lang="ts">
	import { motion, type MotionHTMLAttributes, type MotionProps } from 'motion-sv';
	import { SvelteSet } from 'svelte/reactivity';

	import { cn } from '$lib/utils';

	type RevealDirection = 'start' | 'end' | 'center';
	type MotionSpanProps = Omit<MotionProps<'span'>, 'as' | 'asChild'> & MotionHTMLAttributes<'span'>;
	type MouseEnterEvent = Parameters<NonNullable<MotionSpanProps['onmouseenter']>>[0];
	type MouseLeaveEvent = Parameters<NonNullable<MotionSpanProps['onmouseleave']>>[0];

	interface ScrambleHoverProps extends MotionSpanProps {
		text: string;
		scrambleSpeed?: number;
		maxIterations?: number;
		sequential?: boolean;
		revealDirection?: RevealDirection;
		useOriginalCharsOnly?: boolean;
		characters?: string;
		class?: string;
		scrambledClass?: string;
	}

	const DEFAULT_CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+';

	let {
		text,
		scrambleSpeed = 50,
		maxIterations = 10,
		sequential = false,
		revealDirection = 'start',
		useOriginalCharsOnly = false,
		characters = DEFAULT_CHARACTERS,
		class: className,
		scrambledClass,
		onmouseenter,
		onmouseleave,
		...props
	}: ScrambleHoverProps = $props();

	function splitGraphemes(value: string) {
		if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
			const segmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' });
			return Array.from(segmenter.segment(value), ({ segment }) => segment);
		}

		return Array.from(value);
	}

	function isWhitespaceSegment(segment: string) {
		return /^\s+$/.test(segment);
	}

	function shuffleArray<T>(items: T[]) {
		for (let index = items.length - 1; index > 0; index -= 1) {
			const randomIndex = Math.floor(Math.random() * (index + 1));
			[items[index], items[randomIndex]] = [items[randomIndex], items[index]];
		}

		return items;
	}

	let sourceSegments = $derived.by(() => splitGraphemes(text));
	let availableCharacters = $derived.by(() => {
		if (useOriginalCharsOnly) {
			return Array.from(new Set(sourceSegments.filter((segment) => !isWhitespaceSegment(segment))));
		}

		const providedCharacters = splitGraphemes(characters).filter(
			(segment) => !isWhitespaceSegment(segment)
		);

		if (providedCharacters.length > 0) {
			return providedCharacters;
		}

		return Array.from(new Set(sourceSegments.filter((segment) => !isWhitespaceSegment(segment))));
	});

	let displaySegments = $state<string[]>([]);
	let isHovering = $state(false);
	let isScrambling = $state(false);
	let revealedIndices = new SvelteSet<number>();
	let renderedSegments = $derived(isScrambling ? displaySegments : sourceSegments);

	let intervalId: ReturnType<typeof setInterval> | null = null;

	function clearAnimationInterval() {
		if (intervalId === null) {
			return;
		}

		clearInterval(intervalId);
		intervalId = null;
	}

	function resetAnimation(segments: string[]) {
		clearAnimationInterval();
		revealedIndices.clear();
		isScrambling = false;
		displaySegments = [...segments];
	}

	function pickRandomSegment(pool: string[], fallback: string) {
		if (pool.length === 0) {
			return fallback;
		}

		return pool[Math.floor(Math.random() * pool.length)] ?? fallback;
	}

	function getNextRevealIndex(length: number, direction: RevealDirection) {
		switch (direction) {
			case 'start':
				return revealedIndices.size;
			case 'end':
				return length - 1 - revealedIndices.size;
			case 'center': {
				const middle = Math.floor(length / 2);
				const offset = Math.floor(revealedIndices.size / 2);
				const nextIndex =
					revealedIndices.size % 2 === 0 ? middle + offset : middle - offset - 1;

				if (nextIndex >= 0 && nextIndex < length && !revealedIndices.has(nextIndex)) {
					return nextIndex;
				}

				for (let index = 0; index < length; index += 1) {
					if (!revealedIndices.has(index)) {
						return index;
					}
				}

				return 0;
			}
		}
	}

	function scrambleTextSegments(segments: string[], randomPool: string[], originalOnly: boolean) {
		if (originalOnly) {
			const positions = segments.map((segment, index) => ({
				segment,
				index,
				isWhitespace: isWhitespaceSegment(segment),
				isRevealed: revealedIndices.has(index)
			}));

			const scrambledCharacters = shuffleArray(
				positions
					.filter((position) => !position.isWhitespace && !position.isRevealed)
					.map((position) => position.segment)
			);

			let nextCharacterIndex = 0;

			return positions.map((position) => {
				if (position.isWhitespace) {
					return position.segment;
				}

				if (position.isRevealed) {
					return segments[position.index];
				}

				const nextCharacter = scrambledCharacters[nextCharacterIndex];
				nextCharacterIndex += 1;

				return nextCharacter ?? position.segment;
			});
		}

		return segments.map((segment, index) => {
			if (isWhitespaceSegment(segment)) {
				return segment;
			}

			if (revealedIndices.has(index)) {
				return segments[index];
			}

			return pickRandomSegment(randomPool, segment);
		});
	}

	function isCharacterScrambled(index: number) {
		const segment = sourceSegments[index];

		if (!segment || isWhitespaceSegment(segment)) {
			return false;
		}

		return isHovering && isScrambling && !revealedIndices.has(index);
	}

	function handleMouseEnter(event: MouseEnterEvent) {
		isHovering = true;
		onmouseenter?.(event);
	}

	function handleMouseLeave(event: MouseLeaveEvent) {
		isHovering = false;
		resetAnimation(sourceSegments);
		onmouseleave?.(event);
	}

	$effect(() => {
		const segments = sourceSegments;
		const randomPool = availableCharacters;
		const activeSequential = sequential;
		const activeRevealDirection = revealDirection;
		const activeUseOriginalCharsOnly = useOriginalCharsOnly;
		const activeMaxIterations = maxIterations;
		const activeScrambleSpeed = scrambleSpeed;

		if (segments.length === 0) {
			resetAnimation(segments);
			return;
		}

		if (!isHovering) {
			resetAnimation(segments);
			return;
		}

		revealedIndices.clear();
		displaySegments = [...segments];
		isScrambling = true;

		if (!activeSequential && activeMaxIterations <= 0) {
			isScrambling = false;
			return;
		}

		let currentIteration = 0;
		intervalId = setInterval(() => {
			if (activeSequential) {
				if (revealedIndices.size < segments.length) {
					const nextIndex = getNextRevealIndex(segments.length, activeRevealDirection);
					revealedIndices.add(nextIndex);
					displaySegments = scrambleTextSegments(
						segments,
						randomPool,
						activeUseOriginalCharsOnly
					);

					if (revealedIndices.size >= segments.length) {
						clearAnimationInterval();
						isScrambling = false;
					}

					return;
				}

				clearAnimationInterval();
				isScrambling = false;
				displaySegments = [...segments];
				return;
			}

			displaySegments = scrambleTextSegments(segments, randomPool, activeUseOriginalCharsOnly);
			currentIteration += 1;

			if (currentIteration >= activeMaxIterations) {
				clearAnimationInterval();
				isScrambling = false;
				displaySegments = [...segments];
			}
		}, activeScrambleSpeed);

		return () => {
			clearAnimationInterval();
		};
	});
</script>

<motion.span
	class={cn('inline-block whitespace-pre-wrap', className)}
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
>
	<!--  {...props} -->
	<span class="sr-only">{text}</span>

	<span aria-hidden="true">
		{#each renderedSegments as segment, index (index)}
			<span class={isCharacterScrambled(index) ? scrambledClass : undefined}>{segment}</span>
		{/each}
	</span>
</motion.span>
