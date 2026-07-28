<script lang="ts">
	import { cn } from "$lib/utils.js";
	import { onMount, untrack, type Snippet } from "svelte";
	import { watch } from "runed";
	import Connectors from "./connectors.svelte";
	import { createDescendantsState, setDescendantsContext, useDescendantsContext } from "./descendants.svelte";
	import { useDiagramContext } from "./diagram-context.svelte";
	import type { Connector, NodeData, ParallelAlign, RectLike } from "./types";

	type LinksResult = {
		connectors: Connector[];
		junctions: {
			start?: { x: number; y: number };
			end?: { x: number; y: number };
		};
		containerRect: DOMRect;
	};

	interface FlowParallelProps {
		align?: ParallelAlign;
		class?: string;
		children?: Snippet;
	}

	const FLAT_THRESHOLD = 2;

	let { align = "start", class: className, children }: FlowParallelProps = $props();

	const registrationId = $props.id();
	const diagram = useDiagramContext();
	const parentDescendants = useDescendantsContext<NodeData>();
	const descendants = setDescendantsContext(createDescendantsState<NodeData>());

	let containerRef = $state<HTMLDivElement | null>(null);
	let contentRef = $state<HTMLUListElement | null>(null);
	let measurements = $state<DOMRect | null>(null);
	let links = $state<LinksResult | null>(null);

	let orientation = $derived(diagram.orientation());
	let diagramAlign = $derived(diagram.align());
	let junctionMarker = $derived(diagram.junctionMarker());
	let useSquareJunctions = $derived(junctionMarker === "square");
	let firstBranch = $derived(descendants.descendants[0]);
	let startAnchor = $derived<RectLike | null>(firstBranch?.props.start ?? measurements);
	let endAnchor = $derived<RectLike | null>(firstBranch?.props.end ?? measurements);
	let nodeData = $derived<NodeData>({
		element: containerRef,
		parallel: true,
		start: startAnchor,
		end: endAnchor,
	});
	let index = $derived(parentDescendants.getIndex(registrationId));
	let previousNode = $derived(parentDescendants.getPrevious(registrationId));
	let nextNode = $derived(parentDescendants.getNext(registrationId));
	let previousIsParallel = $derived(previousNode?.props.parallel === true);

	function getStartAndEndPoints({
		container,
		previous,
		next,
		orientation,
	}: {
		container: RectLike;
		previous: RectLike | null;
		next: RectLike | null;
		orientation: "horizontal" | "vertical";
	}) {
		if (orientation === "vertical") {
			const startX = previous
				? previous.left - container.left + previous.width / 2
				: container.width / 2;
			const endX = next ? next.left - container.left + next.width / 2 : container.width / 2;

			return {
				start: {
					x: startX,
					y: 0,
				},
				end: {
					x: endX,
					y: container.height,
				},
			};
		}

		let start = {
			x: 0,
			y: container.height / 2,
		};
		let end = {
			x: container.width,
			y: container.height / 2,
		};

		if (previous) {
			start.y = previous.top - container.top + previous.height / 2;
		}

		if (next) {
			end.y = next.top - container.top + next.height / 2;
		}

		return { start, end };
	}

	function remeasure() {
		if (!contentRef) return;

		const rect = contentRef.getBoundingClientRect();
		const current = measurements;

		if (
			current &&
			current.x === rect.x &&
			current.y === rect.y &&
			current.top === rect.top &&
			current.left === rect.left &&
			current.right === rect.right &&
			current.bottom === rect.bottom &&
			current.width === rect.width &&
			current.height === rect.height
		) {
			return;
		}

		measurements = rect;
	}

	function computeLinks() {
		if (!containerRef) {
			links = null;
			return;
		}

		const containerRect = containerRef.getBoundingClientRect();
		const previousNodeRect = previousNode?.props.start ?? null;
		const nextNodeRect = nextNode?.props.end ?? null;
		const { start, end } = getStartAndEndPoints({
			container: containerRect,
			previous: previousNodeRect,
			next: nextNodeRect,
			orientation,
		});

		const incomingBranchPoints: Array<{ y: number }> = [];
		const outgoingBranchPoints: Array<{ y: number }> = [];

		for (const descendant of descendants.descendants) {
			const endAnchorRect = descendant.props.end;
			const startAnchorRect = descendant.props.start;

			if (previousNodeRect && endAnchorRect) {
				const anchorCenter =
					orientation === "horizontal"
						? endAnchorRect.top - containerRect.top + endAnchorRect.height / 2
						: endAnchorRect.left - containerRect.left + endAnchorRect.width / 2;

				incomingBranchPoints.push({ y: anchorCenter });
			}

			if (nextNodeRect && startAnchorRect) {
				const anchorCenter =
					orientation === "horizontal"
						? startAnchorRect.top - containerRect.top + startAnchorRect.height / 2
						: startAnchorRect.left - containerRect.left + startAnchorRect.width / 2;

				outgoingBranchPoints.push({ y: anchorCenter });
			}
		}

		const hasIncomingJunction = (() => {
			if (incomingBranchPoints.length <= 1) return false;

			const hasAbove = incomingBranchPoints.some((point) => point.y < start.y - FLAT_THRESHOLD);
			const hasBelow = incomingBranchPoints.some((point) => point.y > start.y + FLAT_THRESHOLD);
			const hasInline = incomingBranchPoints.some(
				(point) => Math.abs(point.y - start.y) <= FLAT_THRESHOLD
			);

			return [hasAbove, hasBelow, hasInline].filter(Boolean).length > 1;
		})();

		const hasOutgoingJunction = (() => {
			if (outgoingBranchPoints.length <= 1) return false;

			const hasAbove = outgoingBranchPoints.some((point) => point.y < end.y - FLAT_THRESHOLD);
			const hasBelow = outgoingBranchPoints.some((point) => point.y > end.y + FLAT_THRESHOLD);
			const hasInline = outgoingBranchPoints.some(
				(point) => Math.abs(point.y - end.y) <= FLAT_THRESHOLD
			);

			return [hasAbove, hasBelow, hasInline].filter(Boolean).length > 1;
		})();

		const branchConnectors = descendants.descendants.flatMap((descendant) => {
			const connectors: Connector[] = [];
			const endAnchorRect = descendant.props.end;
			const startAnchorRect = descendant.props.start;
			const isDescendantDisabled = descendant.props.disabled;

			if (previousNodeRect && endAnchorRect) {
				let branchStart: { x: number; y: number };

				if (orientation === "vertical") {
					const anchorCenter =
						endAnchorRect.left - containerRect.left + endAnchorRect.width / 2;

					branchStart = {
						x: anchorCenter,
						y: endAnchorRect.top - containerRect.top,
					};
				} else {
					const anchorCenter =
						endAnchorRect.top - containerRect.top + endAnchorRect.height / 2;

					branchStart = {
						x: endAnchorRect.left - containerRect.left,
						y: anchorCenter,
					};
				}

				connectors.push({
					x1: start.x,
					y1: start.y,
					x2: branchStart.x,
					y2: branchStart.y,
					isBottom: false,
					disabled: previousNode?.props.disabled || isDescendantDisabled,
					single: useSquareJunctions ? !hasIncomingJunction : true,
					fromId: previousNode?.id,
					toId: descendant.id,
				});
			}

			if (nextNodeRect && startAnchorRect) {
				let branchEnd: { x: number; y: number };

				if (orientation === "vertical") {
					const anchorCenter =
						startAnchorRect.left - containerRect.left + startAnchorRect.width / 2;

					branchEnd = {
						x: anchorCenter,
						y: startAnchorRect.bottom - containerRect.top,
					};
				} else {
					const anchorCenter =
						startAnchorRect.top - containerRect.top + startAnchorRect.height / 2;

					branchEnd = {
						x: startAnchorRect.right - containerRect.left,
						y: anchorCenter,
					};
				}

				connectors.push({
					x1: branchEnd.x,
					y1: branchEnd.y,
					x2: end.x,
					y2: end.y,
					isBottom: true,
					disabled: isDescendantDisabled || nextNode?.props.disabled,
					single: useSquareJunctions ? !hasOutgoingJunction : true,
					fromId: descendant.id,
					toId: nextNode?.id,
				});
			}

			return connectors;
		});

		links = {
			connectors: branchConnectors,
			junctions: {
				start:
					useSquareJunctions && previousNodeRect && hasIncomingJunction
						? {
								x: orientation === "vertical" ? start.x : start.x + 32,
								y: orientation === "vertical" ? start.y + 32 : start.y,
							}
						: undefined,
				end:
					useSquareJunctions && nextNodeRect && hasOutgoingJunction
						? {
								x: orientation === "vertical" ? end.x : end.x - 32,
								y: orientation === "vertical" ? end.y - 32 : end.y,
							}
						: undefined,
			},
			containerRect,
		};
	}

	onMount(() => {
		const unregister = parentDescendants.mount(
			untrack(() => registrationId),
			untrack(() => nodeData)
		);
		return () => unregister();
	});

	watch([() => registrationId, () => nodeData], ([nextId, nextNodeData], previous) => {
		const previousId = previous?.[0];

		if (previousId && previousId !== nextId) {
			parentDescendants.unmount(previousId);
			parentDescendants.mount(nextId, nextNodeData);
			return;
		}

		parentDescendants.update(nextId, nextNodeData);
	});

	$effect(() => {
		if (!contentRef) return;

		const onResize = () => {
			remeasure();
			parentDescendants.notifySizeChange();
		};

		const observer = new ResizeObserver(onResize);
		observer.observe(contentRef);

		return () => observer.disconnect();
	});

	watch(() => parentDescendants.measurementEpoch, () => {
		untrack(() => remeasure());
	});

	$effect(() => {
		const onLayoutShift = () => {
			remeasure();
			parentDescendants.notifySizeChange();
		};

		window.addEventListener("scroll", onLayoutShift, {
			capture: true,
			passive: true,
		});
		window.addEventListener("resize", onLayoutShift, { passive: true });

		return () => {
			window.removeEventListener("scroll", onLayoutShift, { capture: true });
			window.removeEventListener("resize", onLayoutShift);
		};
	});

	watch(
		[
			() => descendants.measurementEpoch,
			() => descendants.descendants,
			() => parentDescendants.measurementEpoch,
			() => previousNode,
			() => nextNode,
			() => diagramAlign,
		],
		() => {
			untrack(() => computeLinks());
		}
	);

	$effect(() => {
		const onLayoutShift = () => computeLinks();

		window.addEventListener("scroll", onLayoutShift, {
			capture: true,
			passive: true,
		});
		window.addEventListener("resize", onLayoutShift, { passive: true });

		return () => {
			window.removeEventListener("scroll", onLayoutShift, { capture: true });
			window.removeEventListener("resize", onLayoutShift);
		};
	});
</script>

<div
	bind:this={containerRef}
	class={cn(
		"relative isolate",
		orientation === "horizontal" ? "px-16 -mr-16" : "py-16 -mb-16",
		orientation === "horizontal"
			? previousIsParallel
				? "-ml-3"
				: "-ml-16"
			: previousIsParallel
				? "-mt-3"
				: "-mt-16",
		className
	)}
	data-node-index={index}
>
	<div class="pointer-events-none absolute inset-0 z-1">
		{#if links}
			<Connectors connectors={links.connectors} {orientation}>
				{#if junctionMarker === "square" && links.junctions.start}
					<g transform={`translate(${links.junctions.start.x} ${links.junctions.start.y})`}>
						<rect x="-3" y="-3" width="6" height="6" fill="currentColor" rx="1" />
					</g>
				{/if}

				{#if junctionMarker === "square" && links.junctions.end}
					<g transform={`translate(${links.junctions.end.x} ${links.junctions.end.y})`}>
						<rect x="-3" y="-3" width="6" height="6" fill="currentColor" rx="1" />
					</g>
				{/if}
			</Connectors>
		{/if}
	</div>

	<ul
		bind:this={contentRef}
		class={cn(
			"flex list-none gap-5",
			align === "start" ? "items-start" : "items-end",
			orientation === "horizontal"
				? "ml-0 flex-col"
				: diagramAlign === "center"
					? "mx-auto w-fit gap-5"
					: "mr-auto w-fit gap-5"
		)}
	>
		{@render children?.()}
	</ul>
</div>
