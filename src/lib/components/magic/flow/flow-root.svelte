<script lang="ts">
	import { motion, useMotionTemplate, useMotionValue, useTransform, type PanInfo } from "motion-sv";
	import type { Snippet } from "svelte";
	import { cn } from "$lib/utils.js";
	import FlowNodeList from "./flow-node-list.svelte";
	import { setDiagramContext } from "./diagram-context.svelte";
	import type { Align, JunctionMarker, Orientation } from "./types";

	const DEFAULT_PADDING = {
		x: 16,
		y: 64,
	};

	interface FlowRootProps {
		orientation?: Orientation;
		align?: Align;
		junctionMarker?: JunctionMarker;
		canvas?: boolean;
		padding?: { x?: number; y?: number };
		onOverflowChange?: (overflow: { x: boolean; y: boolean }) => void;
		class?: string;
		children?: Snippet;
	}

	type Bounds = {
		x: number;
		y: number;
	};

	type Dimensions = {
		viewportWidth: number;
		viewportHeight: number;
		contentWidth: number;
		contentHeight: number;
	};

	const MIN_SCROLLBAR_THUMB_SIZE = 10;

	let {
		orientation = "horizontal",
		align = "start",
		junctionMarker = "square",
		canvas = true,
		padding,
		onOverflowChange,
		class: className,
		children,
	}: FlowRootProps = $props();

	let wrapperRef = $state<HTMLDivElement | null>(null);
	let contentRef = $state<HTMLDivElement | null>(null);
	let bounds = $state<Bounds | null>(null);
	let dimensions = $state<Dimensions | null>(null);
	let isPanning = $state(false);
	let canPan = $state(false);

	let x = useMotionValue(0);
	let y = useMotionValue(0);

	let paddingX = $derived(padding?.x ?? DEFAULT_PADDING.x);
	let paddingY = $derived(padding?.y ?? DEFAULT_PADDING.y);
	let canScrollX = $derived(Boolean(bounds && bounds.x < 0));
	let canScrollY = $derived(Boolean(bounds && bounds.y < 0));
	let scrollThumbWidth = $derived(
		dimensions && dimensions.contentWidth > 0 && dimensions.viewportWidth > 0
			? Math.max(
					MIN_SCROLLBAR_THUMB_SIZE,
					(dimensions.viewportWidth / dimensions.contentWidth) * 100
				)
			: 0
	);
	let scrollThumbHeight = $derived(
		dimensions && dimensions.contentHeight > 0 && dimensions.viewportHeight > 0
			? Math.max(
					MIN_SCROLLBAR_THUMB_SIZE,
					(dimensions.viewportHeight / dimensions.contentHeight) * 100
				)
			: 0
	);

	setDiagramContext({
		orientation: () => orientation,
		align: () => align,
		junctionMarker: () => junctionMarker,
		x,
		y,
		wrapper: () => wrapperRef,
	});

	function isEventFromNode(target: EventTarget | null) {
		return target instanceof Element && target.closest("[data-node-id]") !== null;
	}

	function clamp(value: number, min: number, max: number) {
		return Math.max(min, Math.min(max, value));
	}

	function measureBounds() {
		if (!wrapperRef || !contentRef) return;

		const wrapper = wrapperRef.getBoundingClientRect();
		const content = contentRef.getBoundingClientRect();
		const availableWidth = wrapper.width - paddingX * 2;
		const availableHeight = wrapper.height - paddingY * 2;

		bounds = {
			x: Math.min(0, availableWidth - content.width),
			y: Math.min(0, availableHeight - content.height),
		};

		dimensions = {
			viewportWidth: availableWidth,
			viewportHeight: availableHeight,
			contentWidth: content.width,
			contentHeight: content.height,
		};

		const hasXOverflow = content.width > availableWidth;
		const hasYOverflow = content.height > availableHeight;

		canPan = hasXOverflow || hasYOverflow;
		onOverflowChange?.({ x: hasXOverflow, y: hasYOverflow });
	}

	function handlePanStart(event: PointerEvent) {
		if (!canvas || isEventFromNode(event.target)) return;
		isPanning = true;
		document.body.style.cursor = "grabbing";
		document.body.style.userSelect = "none";
	}

	function handlePan(_event: PointerEvent, info: PanInfo) {
		if (!canvas || !bounds || !isPanning) return;
		x.set(clamp(x.get() + info.delta.x, bounds.x, 0));
		y.set(clamp(y.get() + info.delta.y, bounds.y, 0));
	}

	function handlePanEnd() {
		if (!canvas || !isPanning) return;
		isPanning = false;
		document.body.style.cursor = "";
		document.body.style.userSelect = "";
	}

	let scrollbarXPercent = useTransform(() => {
		const maxOffset = bounds?.x ?? 0;
		if (!maxOffset) return 0;
		const maxThumbTravel = 100 - scrollThumbWidth;
		return clamp((-x.get() / Math.abs(maxOffset)) * maxThumbTravel, 0, maxThumbTravel);
	});

	const scrollbarYPercent = useTransform(() => {
		const maxOffset = bounds?.y ?? 0;
		if (!maxOffset) return 0;
		const maxThumbTravel = 100 - scrollThumbHeight;
		return clamp((-y.get() / Math.abs(maxOffset)) * maxThumbTravel, 0, maxThumbTravel);
	});

	let scrollLeft = useMotionTemplate`${scrollbarXPercent}%`;
	let scrollTop = useMotionTemplate`${scrollbarYPercent}%`;

	$effect(() => {
		if (!canvas || !wrapperRef || !contentRef) return;

		measureBounds();

		const resizeObserver = new ResizeObserver(() => measureBounds());
		resizeObserver.observe(wrapperRef);
		resizeObserver.observe(contentRef);

		return () => resizeObserver.disconnect();
	});

	$effect(() => {
		if (!canvas || !bounds) return;

		if (x.get() < bounds.x) x.set(bounds.x);
		if (y.get() < bounds.y) y.set(bounds.y);
	});

	$effect(() => {
		if (!canvas) return;

		return () => {
			document.body.style.cursor = "";
			document.body.style.userSelect = "";
		};
	});

	$effect(() => {
		if (!canvas || !wrapperRef) return;

		const handleWheel = (event: WheelEvent) => {
			if (!bounds) return;

			const allowX = bounds.x < 0;
			const allowY = bounds.y < 0;

			if (!allowX && !allowY) return;

			event.preventDefault();

			if (allowY) {
				y.set(clamp(y.get() - event.deltaY, bounds.y, 0));
			}

			if (allowX) {
				x.set(clamp(x.get() - event.deltaX, bounds.x, 0));
			}
		};

		wrapperRef.addEventListener("wheel", handleWheel, { passive: false });

		return () => wrapperRef?.removeEventListener("wheel", handleWheel);
	});
</script>

{#if canvas}
	<motion.div
		bind:ref={wrapperRef}
		class={cn("relative isolate grow overflow-hidden group", className)}
		style={{
			paddingTop: `${paddingY}px`,
			paddingBottom: `${paddingY}px`,
			paddingLeft: `${paddingX}px`,
			paddingRight: `${paddingX}px`,
			cursor: canPan && !isPanning ? "grab" : undefined,
		}}
		onPanStart={handlePanStart}
		onPan={handlePan}
		onPanEnd={handlePanEnd}
	>
		<motion.div
			bind:ref={contentRef}
			data-testid="flow-contents"
			class="mx-auto w-max"
			style={{ x, y }}
		>
			<FlowNodeList>
				{@render children?.()}
			</FlowNodeList>
		</motion.div>

		{#if canScrollY}
			<div class="absolute top-1 right-1 bottom-1 w-1.5 rounded-full bg-kumo-hairline/50 opacity-0 group-hover:opacity-100">
				<motion.div
					class="absolute w-full rounded-full bg-kumo-fill"
					style={{
						height: `${scrollThumbHeight}%`,
						top: scrollTop,
					}}
				/>
			</div>
		{/if}

		{#if canScrollX}
			<div class="absolute right-1 bottom-1 left-1 h-1.5 rounded-full bg-kumo-hairline/50 opacity-0 group-hover:opacity-100">
				<motion.div
					class="absolute h-full rounded-full bg-kumo-fill"
					style={{
						width: `${scrollThumbWidth}%`,
						left: scrollLeft,
					}}
				/>
			</div>
		{/if}
	</motion.div>
{:else}
	<div bind:this={wrapperRef} class={className}>
		<div bind:this={contentRef}>
			<FlowNodeList>
				{@render children?.()}
			</FlowNodeList>
		</div>
	</div>
{/if}
