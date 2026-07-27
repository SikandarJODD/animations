<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { onMount, untrack, type Snippet } from 'svelte';
	import { watch } from 'runed';
	import { useDescendantsContext } from './descendants.svelte';
	import { setFlowNodeAnchorContext } from './node-context.svelte';
	import { withElementAttachment } from './render-props';
	import { rectEquals, type NodeData, type RectLike } from './types';

	interface FlowNodeProps {
		id?: string;
		disabled?: boolean;
		class?: string;
		children?: Snippet;
		render?: Snippet<[{ props: Record<string, unknown> }]>;
	}

	let { id, disabled = false, class: className, children, render }: FlowNodeProps = $props();

	const descendants = useDescendantsContext<NodeData>();
	const generatedId = $props.id();
	let nodeId = $derived(id ?? generatedId);

	let nodeRef = $state<HTMLElement | null>(null);
	let startAnchorRef = $state<HTMLElement | null>(null);
	let endAnchorRef = $state<HTMLElement | null>(null);
	let measurements = $state<{
		start: RectLike | null;
		end: RectLike | null;
	}>({
		start: null,
		end: null
	});

	let index = $derived(descendants.getIndex(nodeId));
	let nodeData = $derived<NodeData>({
		element: nodeRef,
		parallel: false,
		disabled,
		start: measurements.start,
		end: measurements.end
	});

	setFlowNodeAnchorContext({
		registerStartAnchor: (anchor) => {
			startAnchorRef = anchor;
			remeasure();
		},
		registerEndAnchor: (anchor) => {
			endAnchorRef = anchor;
			remeasure();
		}
	});

	function remeasure() {
		if (!nodeRef) return;

		const nodeRect = nodeRef.getBoundingClientRect();
		const startRect = startAnchorRef?.getBoundingClientRect() ?? nodeRect;
		const endRect = endAnchorRef?.getBoundingClientRect() ?? nodeRect;

		if (rectEquals(measurements.start, startRect) && rectEquals(measurements.end, endRect)) {
			return;
		}

		measurements = {
			start: startRect,
			end: endRect
		};
	}

	let renderProps = $derived(
		withElementAttachment(
			{
				class: className,
				style: 'cursor: default;',
				'data-node-index': index,
				'data-node-id': nodeId,
				'data-testid': nodeId
			},
			(element: HTMLElement | null) => {
				nodeRef = element;
			}
		)
	);

	onMount(() => {
		const unregister = descendants.mount(
			untrack(() => nodeId),
			untrack(() => nodeData)
		);
		return () => unregister();
	});

	watch([() => nodeId, () => nodeData], ([nextId, nextData], previous) => {
		const previousId = previous?.[0];

		if (previousId && previousId !== nextId) {
			descendants.unmount(previousId);
			descendants.mount(nextId, nextData);
			return;
		}

		descendants.update(nextId, nextData);
	});

	$effect(() => {
		if (!nodeRef) return;

		const onResize = () => {
			remeasure();
			descendants.notifySizeChange();
		};

		const observer = new ResizeObserver(onResize);
		observer.observe(nodeRef);

		return () => observer.disconnect();
	});

	watch(
		() => descendants.measurementEpoch,
		() => {
			untrack(() => remeasure());
		}
	);

	$effect(() => {
		const onLayoutShift = () => {
			remeasure();
			descendants.notifySizeChange();
		};

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

{#if render}
	{@render render({ props: renderProps })}
{:else}
	<li
		bind:this={nodeRef}
		class={cn('bg-kumo-base ring-kumo-line rounded-md px-3 py-2 shadow ring', className)}
		style="cursor: default;"
		data-node-index={index}
		data-node-id={nodeId}
		data-testid={nodeId}
	>
		{@render children?.()}
	</li>
{/if}
