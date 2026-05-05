<script lang="ts">
	import { cn } from '$lib/utils';
	import { motion, useInView, type Transition } from 'motion-sv';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes, SvelteHTMLElements } from 'svelte/elements';

	type ElementType = keyof SvelteHTMLElements;
	type HighlightDirection = 'ltr' | 'rtl' | 'ttb' | 'btt';
	type TriggerType = 'hover' | 'ref' | 'inView' | 'auto';
	type ViewAmount = 'some' | 'all' | number;
	type MouseEnterEvent = Parameters<NonNullable<HTMLAttributes<HTMLElement>['onmouseenter']>>[0];
	type MouseLeaveEvent = Parameters<NonNullable<HTMLAttributes<HTMLElement>['onmouseleave']>>[0];

	type ViewOptions = {
		once?: boolean;
		amount?: ViewAmount;
		margin?: string;
		root?: HTMLElement | Document;
	};

	interface TextHighlighterProps extends HTMLAttributes<HTMLElement> {
		children?: Snippet;
		as?: ElementType;
		triggerType?: TriggerType;
		transition?: Transition;
		useInViewOptions?: ViewOptions;
		highlightColor?: string;
		direction?: HighlightDirection;
		class?: string;
	}

	const defaultTransition: Transition = {
		type: 'spring',
		duration: 1,
		delay: 0,
		bounce: 0
	};

	const defaultUseInViewOptions: ViewOptions = {
		once: true,
		amount: 0.1
	};

	let {
		children,
		as = 'span',
		triggerType = 'inView',
		transition = defaultTransition,
		useInViewOptions = defaultUseInViewOptions,
		highlightColor = 'hsl(25, 90%, 80%)',
		direction = 'ltr',
		class: className,
		onmouseenter,
		onmouseleave,
		...props
	}: TextHighlighterProps = $props();

	let componentRef = $state<HTMLElement | null>(null);
	let isAnimating = $state(false);
	let isHovered = $state(false);
	let currentDirection = $derived(direction);

	function getBackgroundSize(animated: boolean, activeDirection: HighlightDirection) {
		switch (activeDirection) {
			case 'ltr':
			case 'rtl':
				return animated ? '100% 100%' : '0% 100%';
			case 'ttb':
			case 'btt':
				return animated ? '100% 100%' : '100% 0%';
			default:
				return animated ? '100% 100%' : '0% 100%';
		}
	}

	function getBackgroundPosition(activeDirection: HighlightDirection) {
		switch (activeDirection) {
			case 'ltr':
			case 'ttb':
				return '0% 0%';
			case 'rtl':
				return '100% 0%';
			case 'btt':
				return '0% 100%';
			default:
				return '0% 0%';
		}
	}

	let inViewState = useInView(
		() => (triggerType === 'inView' ? (componentRef as HTMLElement) : (null as never)),
		() => ({
			once: useInViewOptions.once ?? true,
			amount: useInViewOptions.amount ?? 0.1,
			margin: useInViewOptions.margin,
			root: useInViewOptions.root
		})
	);

	let isInView = $derived(triggerType === 'inView' ? inViewState.current : false);

	let shouldAnimate = $derived.by(() => {
		if (triggerType === 'hover') {
			return isHovered;
		}

		if (triggerType === 'inView') {
			return isInView;
		}

		if (triggerType === 'ref') {
			return isAnimating;
		}

		if (triggerType === 'auto') {
			return true;
		}

		return false;
	});

	let initialBackgroundSize = $derived(getBackgroundSize(false, currentDirection));
	let backgroundSize = $derived(getBackgroundSize(shouldAnimate, currentDirection));
	let backgroundPosition = $derived(getBackgroundPosition(currentDirection));

	let highlightStyle = $derived.by(() => ({
		backgroundImage: `linear-gradient(${highlightColor}, ${highlightColor})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition,
		backgroundSize: initialBackgroundSize,
		boxDecorationBreak: 'clone',
		WebkitBoxDecorationBreak: 'clone'
	}));

	function handleMouseEnter(event: MouseEnterEvent) {
		if (triggerType === 'hover') {
			isHovered = true;
		}

		onmouseenter?.(event);
	}

	function handleMouseLeave(event: MouseLeaveEvent) {
		if (triggerType === 'hover') {
			isHovered = false;
		}

		onmouseleave?.(event);
	}

	export function animate(animationDirection?: HighlightDirection) {
		if (animationDirection) {
			currentDirection = animationDirection;
		}

		isAnimating = true;
	}

	export function reset() {
		isAnimating = false;
	}
</script>

<svelte:element
	this={as}
	bind:this={componentRef}
	class={cn(className)}
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
	{...props}
>
	<motion.span
		class={cn('inline', className)}
		style={highlightStyle}
		initial={{ backgroundSize: initialBackgroundSize }}
		animate={{ backgroundSize }}
		transition={transition}
	>
		{@render children?.()}
	</motion.span>
</svelte:element>
