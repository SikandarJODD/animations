<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { onMount, untrack, type Snippet } from 'svelte';
	import { watch } from 'runed';
	import Connectors from './connectors.svelte';
	import {
		useDescendantsContext,
		useOptionalDescendantsContext,
		createDescendantsState,
		setDescendantsContext
	} from './descendants.svelte';
	import { useDiagramContext } from './diagram-context.svelte';
	import type { Connector, NodeData } from './types';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();

	const registrationId = $props.id();
	const diagram = useDiagramContext();
	const parentDescendants = useOptionalDescendantsContext<NodeData>();
	const descendants = setDescendantsContext(createDescendantsState<NodeData>());

	let containerRef = $state<HTMLDivElement | null>(null);
	let connectors = $state<Connector[]>([]);

	let orientation = $derived(diagram.orientation());
	let align = $derived(diagram.align());
	let firstNode = $derived(descendants.descendants[0]);
	let lastNode = $derived(descendants.descendants[descendants.descendants.length - 1]);
	let startAnchor = $derived(lastNode?.props.start ?? null);
	let endAnchor = $derived(firstNode?.props.end ?? null);
	let nodeData = $derived<NodeData>({
		element: containerRef,
		parallel: false,
		disabled: false,
		start: startAnchor,
		end: endAnchor
	});

	function computeConnectors() {
		if (!containerRef) {
			connectors = [];
			return;
		}

		const nodes = descendants.descendants;
		const containerRect = containerRef.getBoundingClientRect();
		const offsetX = containerRect.left;
		const offsetY = containerRect.top;
		const edges: Connector[] = [];

		for (let i = 0; i < nodes.length - 1; i += 1) {
			const currentNode = nodes[i];
			const nextNode = nodes[i + 1];

			if (currentNode.props.parallel || nextNode.props.parallel) continue;

			const currentRect = currentNode.props.start;
			const nextRect = nextNode.props.end;

			if (!currentRect || !nextRect) continue;

			const connector =
				orientation === 'vertical'
					? {
							x1: currentRect.left - offsetX + currentRect.width / 2,
							y1: currentRect.top - offsetY + currentRect.height,
							x2: nextRect.left - offsetX + nextRect.width / 2,
							y2: nextRect.top - offsetY
						}
					: {
							x1: currentRect.left - offsetX + currentRect.width,
							y1: currentRect.top - offsetY + currentRect.height / 2,
							x2: nextRect.left - offsetX,
							y2: nextRect.top - offsetY + nextRect.height / 2
						};

			edges.push({
				...connector,
				disabled: currentNode.props.disabled || nextNode.props.disabled,
				single: true,
				fromId: currentNode.id,
				toId: nextNode.id
			});
		}

		connectors = edges;
	}

	onMount(() => {
		if (!parentDescendants) return;
		const unregister = parentDescendants.mount(
			untrack(() => registrationId),
			untrack(() => nodeData)
		);
		return () => unregister();
	});

	watch(
		() => nodeData,
		(nextNodeData) => {
			if (!parentDescendants) return;
			parentDescendants.update(registrationId, nextNodeData);
		}
	);

	watch([() => descendants.measurementEpoch, () => descendants.descendants, () => orientation, () => align], () => {
		untrack(() => computeConnectors());
	});

	$effect(() => {
		const onLayoutShift = () => computeConnectors();

		window.addEventListener('scroll', onLayoutShift, {
			capture: true,
			passive: true
		});
		window.addEventListener('resize', onLayoutShift, { passive: true });

		return () => {
			window.removeEventListener('scroll', onLayoutShift, { capture: true });
			window.removeEventListener('resize', onLayoutShift);
		};
	});
</script>

<div class="relative" bind:this={containerRef}>
	<ul
		class={cn(
			'ml-0 list-none',
			orientation === 'vertical' ? 'grid auto-rows-min gap-16' : 'flex gap-16',
			orientation === 'vertical' && (align === 'center' ? 'justify-items-center' : 'justify-items-start'),
			orientation === 'horizontal' && (align === 'center' ? 'items-center' : 'items-start')
		)}
	>
		{@render children?.()}
	</ul>

	<div class="pointer-events-none absolute inset-0">
		<Connectors {connectors} {orientation} />
	</div>
</div>
