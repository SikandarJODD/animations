<script lang="ts">
	import { motion, useAnimate, stagger, type AnimationOptions } from 'motion-sv';
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	interface LetterSwapProps extends HTMLAttributes<HTMLSpanElement> {
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
	}: LetterSwapProps = $props();

	let [scope, animate] = useAnimate();
	let blocked = $state(false);
	let letters = $derived(label.split(''));

	let hoverStart = () => {
		if (blocked) return;
		blocked = true;

		// Function to merge user transition with stagger and delay
		let mergeTransition = (baseTransition: AnimationOptions) => ({
			...baseTransition,
			delay: stagger(staggerDuration, {
				from: from
			})
		});

		animate('.letter', { y: reverse ? '100%' : '-100%' }, mergeTransition(transition) as any).then(
			() => {
				animate(
					'.letter',
					{
						y: 0
					},
					{
						duration: 0
					}
				).then(() => {
					blocked = false;
				});
			}
		);

		animate(
			'.letter-secondary',
			{
				top: '0%'
			},
			mergeTransition(transition) as any
		).then(() => {
			animate(
				'.letter-secondary',
				{
					top: reverse ? '-100%' : '100%'
				},
				{
					duration: 0
				}
			);
		});
	};
</script>

<span
	bind:this={scope.current}
	class={cn('relative flex items-center justify-center overflow-hidden', className)}
	onmouseenter={hoverStart}
	{onclick}
	{...props}
>
	<span class="sr-only">{label}</span>

	{#each letters as letter}
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
