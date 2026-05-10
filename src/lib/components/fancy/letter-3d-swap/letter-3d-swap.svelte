<script lang="ts">
	import { useAnimate, type AnimationOptions } from 'motion-sv';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes, SvelteHTMLElements } from 'svelte/elements';
	import { cn } from '$lib/utils';
	import CharBox, { type RotateDirection } from './charbox.svelte';

	type ElementType = keyof SvelteHTMLElements;
	type StaggerFrom = 'first' | 'last' | 'center' | number | 'random';

	interface WordSegment {
		characters: string[];
		startIndex: number;
	}

	interface SpaceSegment {
		value: string;
	}

	type TextSegment =
		| {
				type: 'word';
				data: WordSegment;
		  }
		| {
				type: 'space';
				data: SpaceSegment;
		  };

	interface Letter3DSwapProps extends HTMLAttributes<HTMLElement> {
		children?: Snippet;
		as?: ElementType;
		mainClass?: string;
		frontFaceClass?: string;
		secondFaceClass?: string;
		staggerDuration?: number;
		staggerFrom?: StaggerFrom;
		transition?: AnimationOptions;
		rotateDirection?: RotateDirection;
		class?: string;
	}

	const defaultTransition: AnimationOptions = {
		type: 'spring',
		damping: 30,
		stiffness: 300
	};

	let {
		children,
		as = 'p',
		mainClass,
		frontFaceClass,
		secondFaceClass,
		staggerDuration = 0.05,
		staggerFrom = 'first',
		transition = defaultTransition,
		rotateDirection = 'right',
		class: className,
		onclick,
		...props
	}: Letter3DSwapProps = $props();

	let [scope, animate] = useAnimate();
	let isAnimating = $state(false);
	let isHovering = $state(false);
	let contentProbe = $state<HTMLSpanElement | null>(null);
	let text = $state('');

	function splitIntoCharacters(value: string) {
		if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
			const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
			return Array.from(segmenter.segment(value), ({ segment }) => segment);
		}

		return Array.from(value);
	}

	let rotationTransform = $derived.by(() => {
		switch (rotateDirection) {
			case 'top':
				return 'rotateX(90deg)';
			case 'right':
				return 'rotateY(90deg)';
			case 'bottom':
				return 'rotateX(-90deg)';
			case 'left':
				return 'rotateY(90deg)';
			default:
				return 'rotateY(-90deg)';
		}
	});

	let restTransform = $derived.by(() => {
		if (rotateDirection === 'top' || rotateDirection === 'bottom') {
			return 'translateZ(-0.5lh)';
		}

		return 'rotateY(90deg) translateX(50%) rotateY(-90deg)';
	});

	let segments = $derived.by<TextSegment[]>(() => {
		const entries = text.split(/(\s+)/).filter(Boolean);
		let cursor = 0;

		return entries.map((entry) => {
			if (/^\s+$/.test(entry)) {
				return {
					type: 'space',
					data: {
						value: entry
					}
				} satisfies TextSegment;
			}

			const characters = splitIntoCharacters(entry);
			const startIndex = cursor;
			cursor += characters.length;

			return {
				type: 'word',
				data: {
					characters,
					startIndex
				}
			} satisfies TextSegment;
		});
	});

	let totalChars = $derived(
		segments.reduce((sum, segment) => {
			if (segment.type === 'space') return sum;
			return sum + segment.data.characters.length;
		}, 0)
	);

	function getStaggerDelay(index: number, totalCharacters: number) {
		if (staggerFrom === 'first') return index * staggerDuration;
		if (staggerFrom === 'last') return (totalCharacters - 1 - index) * staggerDuration;

		if (staggerFrom === 'center') {
			const center = Math.floor(totalCharacters / 2);
			return Math.abs(center - index) * staggerDuration;
		}

		if (staggerFrom === 'random') {
			const randomIndex = Math.floor(Math.random() * totalCharacters);
			return Math.abs(randomIndex - index) * staggerDuration;
		}

		return Math.abs(staggerFrom - index) * staggerDuration;
	}

	let handleHoverStart = async () => {
		if (isAnimating || isHovering || totalChars === 0) return;

		isHovering = true;
		isAnimating = true;

		const delays = Array.from({ length: totalChars }, (_, index) => getStaggerDelay(index, totalChars));

		await animate(
			'.letter-3d-swap-char-box-item',
			{ transform: rotationTransform },
			{
				...transition,
				delay: (index: number) => delays[index]
			} as any
		);

		await animate(
			'.letter-3d-swap-char-box-item',
			{ transform: restTransform },
			{ duration: 0 }
		);

		isAnimating = false;
	};

	let handleHoverEnd = () => {
		isHovering = false;
	};

	$effect(() => {
		if (!contentProbe) {
			text = '';
			return;
		}

		const probe = contentProbe;

		const syncText = () => {
			text = probe.textContent?.replace(/\s+/g, ' ').trim() ?? '';
		};

		syncText();

		const observer = new MutationObserver(() => syncText());
		observer.observe(probe, { childList: true, characterData: true, subtree: true });

		return () => observer.disconnect();
	});
</script>

<svelte:element
	this={as}
	bind:this={scope.current}
	class={cn('relative flex flex-wrap', mainClass, className)}
	onmouseenter={handleHoverStart}
	onmouseleave={handleHoverEnd}
	{onclick}
	{...props}
>
	<span class="sr-only">{text}</span>

	<span
		bind:this={contentProbe}
		aria-hidden="true"
		class="pointer-events-none absolute opacity-0 whitespace-pre"
	>
		{@render children?.()}
	</span>

	{#each segments as segment, segmentIndex (`segment-${segmentIndex}`)}
		{#if segment.type === 'word'}
			<span class="inline-flex">
				{#each segment.data.characters as char, charIndex (`char-${segment.data.startIndex + charIndex}`)}
					<CharBox
						{char}
						{frontFaceClass}
						{secondFaceClass}
						{rotateDirection}
					/>
				{/each}
			</span>
		{:else}
			<span class="whitespace-pre">{segment.data.value}</span>
		{/if}
	{/each}
</svelte:element>
