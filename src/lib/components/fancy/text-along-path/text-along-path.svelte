<script lang="ts">
	import { motion, useScroll, useTransform, type Transition, type UseScrollOptions } from 'motion-sv';
	import type { SVGAttributes } from 'svelte/elements';

	interface TextAlongPathProps extends Omit<SVGAttributes<SVGSVGElement>, 'transition'> {
		path: string;
		text: string;
		pathId?: string;
		pathClass?: string;
		textClass?: string;
		showPath?: boolean;
		textAnchor?: 'start' | 'middle' | 'end';
		animationType?: 'auto' | 'scroll';
		scrollContainer?: HTMLElement | null;
		scrollOffset?: UseScrollOptions['offset'];
		scrollTransformValues?: [number, number];
		transition?: Transition;
	}

	const defaultAutoTransition: Transition = {
		duration: 4,
		ease: 'linear',
		repeat: Infinity,
		repeatType: 'loop'
	};

	const defaultScrollOffset: UseScrollOptions['offset'] = ['start end', 'end end'];

	const componentId = $props.id();

	let {
		path,
		text,
		pathId,
		pathClass,
		textClass,
		showPath = false,
		textAnchor = 'start',
		animationType = 'auto',
		scrollContainer = null,
		scrollOffset = defaultScrollOffset,
		scrollTransformValues = [0, 100],
		transition,
		width = '100%',
		height = '100%',
		viewBox = '0 0 100 100',
		preserveAspectRatio = 'xMidYMid meet',
		class: className,
		...props
	}: TextAlongPathProps = $props();

	let resolvedPathId = $derived(pathId ?? `${componentId}-path`);
	let isAuto = $derived(animationType === 'auto');
	let autoTransition = $derived({
		...defaultAutoTransition,
		...(transition ?? {})
	});

	// motion-sv supports getter-based scroll options at runtime, but its current
	// Svelte type only accepts the resolved options object.
	let scroll = useScroll(
		(() => ({
			container: scrollContainer,
			offset: scrollOffset
		})) as unknown as UseScrollOptions
	);

	let scrollStartOffset = useTransform(() => {
		if (animationType !== 'scroll') {
			return '0%';
		}

		const progress = Math.min(1, Math.max(0, scroll.scrollYProgress.get()));
		const [start, end] = scrollTransformValues;
		const offset = start + (end - start) * progress;

		return `${offset}%`;
	});
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	class={className}
	{width}
	{height}
	{viewBox}
	{preserveAspectRatio}
	{...props}
>
	<path
		id={resolvedPathId}
		class={pathClass}
		d={path}
		stroke={showPath ? 'currentColor' : 'none'}
		fill="none"
	/>

	<text text-anchor={textAnchor} fill="currentColor">
		{#if isAuto}
			<motion.textPath
				class={textClass}
				href={`#${resolvedPathId}`}
				startOffset="0%"
				initial={{ startOffset: '0%' }}
				animate={{ startOffset: '100%' }}
				transition={autoTransition}
			>
				{text}
			</motion.textPath>
		{:else}
			<motion.textPath class={textClass} href={`#${resolvedPathId}`} startOffset={scrollStartOffset}>
				{text}
			</motion.textPath>
		{/if}
	</text>

	{#if isAuto}
		<text text-anchor={textAnchor} fill="currentColor">
			<motion.textPath
				class={textClass}
				href={`#${resolvedPathId}`}
				startOffset="-100%"
				initial={{ startOffset: '-100%' }}
				animate={{ startOffset: '0%' }}
				transition={autoTransition}
			>
				{text}
			</motion.textPath>
		</text>
	{/if}
</svg>
