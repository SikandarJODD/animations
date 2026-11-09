<script lang="ts">
	import { motion, AnimatePresence } from "motion-sv";
	import { cn } from "#lib/utils.js";
	import type { Snippet } from "svelte";

	interface Position {
		/** The x coordinate of the lens */
		x: number;
		/** The y coordinate of the lens */
		y: number;
	}

	interface LensProps {
		children: Snippet;
		/** The zoom factor of the lens */
		zoomFactor?: number;
		/** The size of the lens */
		lensSize?: number;
		/** The position of the lens */
		position?: Position;
		/** The default position of the lens */
		defaultPosition?: Position;
		/** Whether the lens is static */
		isStatic?: boolean;
		/** The duration of the animation */
		duration?: number;
		/** The color of the lens */
		lensColor?: string;
		/** The aria label of the lens */
		ariaLabel?: string;
		class?: string;
	}

	let {
		children,
		zoomFactor = 1.3,
		lensSize = 170,
		isStatic = false,
		position = { x: 0, y: 0 },
		defaultPosition,
		duration = 0.1,
		lensColor = "black",
		ariaLabel = "Zoom Area",
		class: className,
	}: LensProps = $props();

	// Validation
	$effect(() => {
		if (zoomFactor < 1) {
			throw new Error("zoomFactor must be greater than 1");
		}
		if (lensSize < 0) {
			throw new Error("lensSize must be greater than 0");
		}
	});

	let isHovering = $state(false);
	let mousePosition: Position = $derived(position);
	let containerRef: HTMLDivElement | null = $state(null);

	const currentPosition = $derived.by(() => {
		if (isStatic) return position;
		if (defaultPosition && !isHovering) return defaultPosition;
		return mousePosition;
	});

	const handleMouseMove = (e: MouseEvent) => {
		if (!containerRef) return;
		const rect = containerRef.getBoundingClientRect();
		mousePosition = {
			x: e.clientX - rect.left,
			y: e.clientY - rect.top,
		};
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === "Escape") isHovering = false;
	};

	const maskImage = $derived(
		`radial-gradient(circle ${lensSize / 2}px at ${currentPosition.x}px ${currentPosition.y}px, ${lensColor} 100%, transparent 100%)`
	);

	const transformOrigin = $derived(`${currentPosition.x}px ${currentPosition.y}px`);

	const lensStyle = $derived({
		maskImage,
		WebkitMaskImage: maskImage,
		transformOrigin,
		zIndex: 50,
	});

	const zoomStyleString = $derived(
		`transform: scale(${zoomFactor}); transform-origin: ${transformOrigin};`
	);
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<div
	bind:this={containerRef}
	class={cn("relative z-20 overflow-hidden rounded-xl", className)}
	onmouseenter={() => (isHovering = true)}
	onmouseleave={() => (isHovering = false)}
	onmousemove={handleMouseMove}
	onkeydown={handleKeyDown}
	role="region"
	aria-label={ariaLabel}
	tabindex="0"
>
	{@render children()}
	{#if isStatic || defaultPosition}
		<motion.div
			initial={{ opacity: 0, scale: 0.58 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.8 }}
			transition={{ duration }}
			class="absolute inset-0 overflow-hidden"
			style={lensStyle}
		>
			<div class="absolute inset-0" style={zoomStyleString}>
				{@render children()}
			</div>
		</motion.div>
	{:else}
		<AnimatePresence mode="popLayout">
			{#if isHovering}
				<motion.div
					initial={{ opacity: 0, scale: 0.58 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.8 }}
					transition={{ duration }}
					class="absolute inset-0 overflow-hidden"
					style={lensStyle}
				>
					<div class="absolute inset-0" style={zoomStyleString}>
						{@render children()}
					</div>
				</motion.div>
			{/if}
		</AnimatePresence>
	{/if}
</div>
