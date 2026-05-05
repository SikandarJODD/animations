<script lang="ts">
	import { motion, useAnimate, stagger, type AnimationOptions } from 'motion-sv';
	import { Debounced } from 'runed';
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	interface LetterSwapPingPongProps extends HTMLAttributes<HTMLSpanElement> {
		label: string;
		reverse?: boolean;
		transition?: AnimationOptions;
		staggerDuration?: number;
		from?: 'first' | 'last' | 'center' | number;
		class?: string;
	}

	let {
		label,
		reverse = true,
		transition = {
			type: 'spring',
			duration: 0.7
		},
		staggerDuration = 0.03,
		from = 'first',
		class: className,
		onclick,
		...props
	}: LetterSwapPingPongProps = $props();

	let [scope, animate] = useAnimate();
	let hovered = $state(false);
	let letters = $derived(label.split(''));

	let hoverStartTick = $state(0);
	let hoverEndTick = $state(0);

	const hoverStartDebounced = new Debounced(() => hoverStartTick, 100);
	const hoverEndDebounced = new Debounced(() => hoverEndTick, 100);

	let mergeTransition = (baseTransition: AnimationOptions) => ({
		...baseTransition,
		delay: stagger(staggerDuration, {
			from
		})
	});

	let animatePrimary = (nextHovered: boolean) =>
		animate(
			'.letter',
			{
				y: nextHovered ? (reverse ? '100%' : '-100%') : 0
			},
			mergeTransition(transition) as any
		);

	let animateSecondary = (nextHovered: boolean) =>
		animate(
			'.letter-secondary',
			{
				top: nextHovered ? '0%' : reverse ? '-100%' : '100%'
			},
			mergeTransition(transition) as any
		);

	let hoverStart = () => {
		if (hovered || hoverStartDebounced.pending) return;

		hovered = true;
		hoverStartTick += 1;

		animatePrimary(true);
		animateSecondary(true);
	};

	let hoverEnd = () => {
		if (!hovered || hoverEndDebounced.pending) return;

		hovered = false;
		hoverEndTick += 1;

		animatePrimary(false);
		animateSecondary(false);
	};
</script>

<span
	bind:this={scope.current}
	class={cn('relative flex items-center justify-center overflow-hidden', className)}
	onmouseenter={hoverStart}
	onmouseleave={hoverEnd}
	{onclick}
	{...props}
>
	<span class="sr-only">{label}</span>

	{#each letters as letter, index (`${letter}-${index}`)}
		<span class="relative flex whitespace-pre" aria-hidden="true">
			<motion.span class="letter relative" style={{ top: 0 }}>
				{letter}
			</motion.span>
			<motion.span class="letter-secondary absolute" style={{ top: reverse ? '-100%' : '100%' }}>
				{letter}
			</motion.span>
		</span>
	{/each}
</span>
