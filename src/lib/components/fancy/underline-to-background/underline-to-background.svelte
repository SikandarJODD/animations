<script lang="ts">
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { motion, type Transition, type Variants } from 'motion-sv';

	import { cn } from '$lib/utils';

	type ElementType = keyof SvelteHTMLElements;

	interface UnderlineToBackgroundProps {
		children?: Snippet;
		as?: ElementType;
		class?: string;
		transition?: Transition;
		targetTextColor?: string;
		underlineHeightRatio?: number;
		underlinePaddingRatio?: number;
		[key: string]: any;
	}

	const defaultTransition: Transition = {
		type: 'spring',
		damping: 30,
		stiffness: 300
	};

	let {
		children,
		as = 'span',
		class: className,
		transition = defaultTransition,
		targetTextColor = '#fef',
		underlineHeightRatio = 0.1,
		underlinePaddingRatio = 0.01,
		...props
	}: UnderlineToBackgroundProps = $props();

	let element = $state<HTMLElement | null>(null);

	let MotionComponent = $derived(motion[as]);

	function updateUnderlineStyles() {
		if (!element) {
			return;
		}

		const fontSize = parseFloat(getComputedStyle(element).fontSize);

		if (Number.isNaN(fontSize)) {
			return;
		}

		element.style.setProperty('--underline-height', `${fontSize * underlineHeightRatio}px`);
		element.style.setProperty('--underline-padding', `${fontSize * underlinePaddingRatio}px`);
	}

	onMount(() => {
		if (!element) {
			return;
		}

		const resizeObserver = new ResizeObserver(() => {
			updateUnderlineStyles();
		});

		resizeObserver.observe(element);
		updateUnderlineStyles();

		return () => {
			resizeObserver.disconnect();
		};
	});

	$effect(() => {
		element;
		underlineHeightRatio;
		underlinePaddingRatio;

		updateUnderlineStyles();
	});

	let underlineVariants = $derived.by(
		() =>
			({
				initial: {
					height: 'var(--underline-height, 0px)'
				},
				target: {
					height: '100%',
					transition
				}
			}) satisfies Variants
	);

	let textVariants = $derived.by(
		() =>
			({
				initial: {
					color: 'currentColor'
				},
				target: {
					color: targetTextColor,
					transition
				}
			}) satisfies Variants
	);
</script>

<MotionComponent
	bind:ref={element}
	class={cn('relative inline-block cursor-pointer', className)}
	initial="initial"
	whileHover="target"
	{...props}
>
	<motion.div
		class="absolute w-full bg-current"
		style={{
			height: 'var(--underline-height, 0px)',
			bottom: 'calc(-1 * var(--underline-padding, 0px))'
		}}
		variants={underlineVariants}
		aria-hidden="true"
	/>

	<motion.span variants={textVariants} class="relative text-current">
		{@render children?.()}
	</motion.span>
</MotionComponent>
