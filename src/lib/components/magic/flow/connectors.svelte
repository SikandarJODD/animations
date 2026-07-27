<script lang="ts">
	import type { Snippet } from 'svelte';
	import { createRoundedPath } from './connectors';
	import type { Connector, Orientation } from './types';
	import { cn } from '$lib/utils';

	interface Props {
		connectors: Connector[];
		children?: Snippet;
		cornerRadius?: number;
		midOffset?: number;
		arrowheadOffset?: number;
		orientation?: Orientation;
	}

	let {
		connectors,
		children,
		cornerRadius,
		midOffset,
		arrowheadOffset,
		orientation = 'vertical'
	}: Props = $props();

	const markerId = $props.id();

	let orderedConnectors = $derived(
		[...connectors].sort((a, b) => {
			if (a.disabled && !b.disabled) return -1;
			if (!a.disabled && b.disabled) return 1;
			return 0;
		})
	);
</script>

<svg width="100%" height="100%" aria-hidden="true" class="text-kumo-inactive overflow-visible">
	<defs>
		<marker
			id={markerId}
			markerWidth="8"
			markerHeight="8"
			refX="0"
			refY="4"
			orient="auto"
			markerUnits="userSpaceOnUse"
		>
			<path
				d="M 0,1.5 Q 0,0 1.5,0 Q 3.5,1 5.8,3.2 Q 6.5,4 5.8,4.8 Q 3.5,7 1.5,8 Q 0,8 0,6.5 Z"
				fill="currentColor"
				stroke="none"
			/>
		</marker>
	</defs>

	{#each orderedConnectors as connector, index (`${connector.fromId ?? 'from'}-${connector.toId ?? 'to'}-${index}`)}
		{let path = $state(createRoundedPath(connector, {
			cornerRadius,
			midOffset,
			arrowheadOffset,
			isBottom: connector.isBottom,
			single: connector.single,
			orientation
		}))}
		{let pathId =
			$state(connector.fromId && connector.toId
				? `${connector.fromId}-${connector.toId}`
				: `path-${index}`)}

		<g class={cn(connector.disabled && 'opacity-40')}>
			<path
				d={path}
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				marker-end={`url(#${markerId})`}
				data-index={index}
				data-testid={pathId}
			/>
		</g>
	{/each}

	{@render children?.()}
</svg>
