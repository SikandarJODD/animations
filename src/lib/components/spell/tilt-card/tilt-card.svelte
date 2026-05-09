<script lang="ts">
	import { cn } from "$lib/utils";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	type TiltEffect = "gravitate" | "evade";

	interface Props extends HTMLAttributes<HTMLDivElement> {
		tiltLimit?: number;
		scale?: number;
		perspective?: number;
		effect?: TiltEffect;
		spotlight?: boolean;
		children?: Snippet;
		class?: string;
		style?: string;
	}

	let {
		tiltLimit = 15,
		scale = 1.05,
		perspective = 1200,
		effect: tiltEffect = "evade",
		spotlight = true,
		children,
		class: className,
		style,
		...restProps
	}: Props = $props();

	let isHovered = $state(false);
	let pointerX = $state(0.5);
	let pointerY = $state(0.5);

	function buildTransform(rotateX: number, rotateY: number, scaleValue: number) {
		return `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scaleValue}, ${scaleValue}, ${scaleValue})`;
	}

	function clamp(value: number, min: number, max: number) {
		return Math.min(Math.max(value, min), max);
	}

	function handlePointerMove(event: PointerEvent) {
		const element = event.currentTarget as HTMLDivElement | null;

		if (!element) return;

		const rect = element.getBoundingClientRect();
		if (rect.width === 0 || rect.height === 0) return;

		pointerX = clamp((event.clientX - rect.left) / rect.width, 0, 1);
		pointerY = clamp((event.clientY - rect.top) / rect.height, 0, 1);
	}

	function handlePointerEnter() {
		isHovered = true;
	}

	function handlePointerLeave() {
		isHovered = false;
	}

	let transform = $derived.by(() => {
		if (!isHovered) {
			return buildTransform(0, 0, 1);
		}

		const direction = tiltEffect === "evade" ? -1 : 1;
		const rotateX = (pointerY - 0.5) * (tiltLimit * 2) * direction;
		const rotateY = (pointerX - 0.5) * -(tiltLimit * 2) * direction;

		return buildTransform(rotateX, rotateY, scale);
	});

	let rootStyle = $derived(
		`transform: ${transform}; transition: transform 0.2s ease-out; transform-style: preserve-3d; ${style ?? ""}`
	);
	let spotlightLeft = $derived(`${pointerX * 100}%`);
	let spotlightTop = $derived(`${pointerY * 100}%`);
</script>

<div
	class={cn("relative overflow-hidden will-change-transform", className)}
	style={rootStyle}
	onpointerenter={handlePointerEnter}
	onpointermove={handlePointerMove}
	onpointerleave={handlePointerLeave}
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
				style="left: {spotlightLeft}; top: {spotlightTop}; transform: translate(-50%, -50%); transition: left 0.2s ease-out, top 0.2s ease-out; background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 40%);"
			></div>
		</div>
	{/if}
</div>
