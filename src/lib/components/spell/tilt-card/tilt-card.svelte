<script lang="ts">
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";
	import type { Snippet } from "svelte";

	interface Props extends HTMLAttributes<HTMLDivElement> {
		/** Maximum tilt angle in degrees */
		tiltLimit?: number;
		/** Scale factor on hover */
		scale?: number;
		/** Perspective distance in pixels */
		perspective?: number;
		/** Tilt direction: "gravitate" follows cursor, "evade" tilts away */
		effect?: "gravitate" | "evade";
		/** Show a spotlight that follows the cursor on hover */
		spotlight?: boolean;
		children?: Snippet;
		class?: string;
	}

	let {
		tiltLimit = 15,
		scale = 1.05,
		perspective = 1200,
		effect = "evade",
		spotlight = true,
		children,
		class: className,
		style,
		...restProps
	}: Props = $props();

	let cardEl: HTMLDivElement;
	let hoveredTransform = $state<string | null>(null);
	const transform = $derived(
		hoveredTransform ?? `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
	);
	let spotlightPos = $state({ x: 50, y: 50 });
	let isHovered = $state(false);

	const dir = $derived(effect === "evade" ? -1 : 1);

	function handlePointerMove(e: PointerEvent) {
		if (!cardEl) return;
		const rect = cardEl.getBoundingClientRect();
		const px = (e.clientX - rect.left) / rect.width;
		const py = (e.clientY - rect.top) / rect.height;
		const xRot = (py - 0.5) * (tiltLimit * 2) * dir;
		const yRot = (px - 0.5) * -(tiltLimit * 2) * dir;
		hoveredTransform = `perspective(${perspective}px) rotateX(${xRot}deg) rotateY(${yRot}deg) scale3d(${scale}, ${scale}, ${scale})`;
		if (spotlight) {
			spotlightPos = { x: px * 100, y: py * 100 };
		}
	}

	function handlePointerEnter() {
		isHovered = true;
	}

	function handlePointerLeave() {
		hoveredTransform = null;
		isHovered = false;
	}
</script>

<div
	bind:this={cardEl}
	onpointerenter={handlePointerEnter}
	onpointermove={handlePointerMove}
	onpointerleave={handlePointerLeave}
	class={cn("relative overflow-hidden will-change-transform", className)}
	style="transform: {transform}; transition: transform 0.2s ease-out; transform-style: preserve-3d; {style ?? ''}"
	{...restProps}
>
	{@render children?.()}
	{#if spotlight}
		<div
			class="pointer-events-none absolute inset-0 z-10 overflow-hidden"
			style="opacity: {isHovered ? 1 : 0}; transition: opacity 0.3s;"
		>
			<div
				class="absolute h-[200%] w-[200%] rounded-full opacity-100 dark:opacity-60"
				style="left: {spotlightPos.x}%; top: {spotlightPos.y}%; transform: translate(-50%, -50%); transition: left 0.2s ease-out, top 0.2s ease-out; background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 40%);"
			></div>
		</div>
	{/if}
</div>
