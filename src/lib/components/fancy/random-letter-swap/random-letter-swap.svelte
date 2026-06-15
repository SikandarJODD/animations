<script lang="ts">
	import { motion, useAnimate, type AnimationOptions } from "motion-sv";
	import { Debounced } from "runed";
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";

	interface RandomLetterSwapProps extends HTMLAttributes<HTMLSpanElement> {
		label: string;
		reverse?: boolean;
		transition?: AnimationOptions;
		staggerDuration?: number;
		class?: string;
	}

	let {
		label,
		reverse = true,
		transition = {
			type: "spring",
			duration: 0.8,
		},
		staggerDuration = 0.02,
		class: className,
		onclick,
		...props
	}: RandomLetterSwapProps = $props();

	let [scope, animate] = useAnimate();
	let blocked = $state(false);
	let letters = $derived(label.split(""));

	let hoverStartTick = $state(0);
	const hoverStartDebounced = new Debounced(() => hoverStartTick, 100);

	let mergeTransition = (baseTransition: AnimationOptions, index: number) => ({
		...baseTransition,
		delay: index * staggerDuration,
	});

	let getShuffledIndices = () =>
		Array.from({ length: letters.length }, (_, index) => index).sort(() => Math.random() - 0.5);

	let hoverStart = () => {
		if (blocked || hoverStartDebounced.pending || letters.length === 0) return;

		blocked = true;
		hoverStartTick += 1;

		const shuffledIndices = getShuffledIndices();

		for (let orderIndex = 0; orderIndex < shuffledIndices.length; orderIndex += 1) {
			const randomIndex = shuffledIndices[orderIndex];

			animate(
				`.letter-${randomIndex}`,
				{
					y: reverse ? "100%" : "-100%",
				},
				mergeTransition(transition, orderIndex) as any
			).then(() => {
				animate(
					`.letter-${randomIndex}`,
					{
						y: 0,
					},
					{
						duration: 0,
					}
				);
			});

			animate(
				`.letter-secondary-${randomIndex}`,
				{
					top: "0%",
				},
				mergeTransition(transition, orderIndex) as any
			)
				.then(() => {
					return animate(
						`.letter-secondary-${randomIndex}`,
						{
							top: reverse ? "-100%" : "100%",
						},
						{
							duration: 0,
						}
					);
				})
				.then(() => {
					if (orderIndex === shuffledIndices.length - 1) {
						blocked = false;
					}
				});
		}
	};
</script>

<span
	bind:this={scope.current}
	class={cn("relative flex items-center justify-center overflow-hidden", className)}
	onmouseenter={hoverStart}
	{onclick}
	{...props}
>
	<span class="sr-only">{label}</span>

	{#each letters as letter, index (`${letter}-${index}`)}
		<span class="relative flex whitespace-pre" aria-hidden="true">
			<motion.span class={`letter-${index} relative pb-2`} style={{ top: 0 }}>
				{letter}
			</motion.span>
			<motion.span
				class={`letter-secondary-${index} absolute`}
				style={{ top: reverse ? "-100%" : "100%" }}
			>
				{letter}
			</motion.span>
		</span>
	{/each}
</span>
