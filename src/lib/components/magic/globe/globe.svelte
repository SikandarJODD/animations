<script lang="ts">
	import type { COBEOptions, Globe } from "cobe";
	import { Spring } from "svelte/motion";
	import { onDestroy, onMount } from "svelte";
	import { cn } from "$lib/utils";

	interface Props {
		class?: string;
		config?: Partial<COBEOptions>;
	}

	let { class: className, config = {} }: Props = $props();

	let size = $derived(config.width ?? 300);

	const baseTheta = 0.2;
	const thetaOffsetMin = -0.4;
	const thetaOffsetMax = 0.4;

	let canvas: HTMLCanvasElement | null = null;
	let globe: Globe | null = null;
	let observer: IntersectionObserver | null = null;
	let createGlobePromise: Promise<typeof import("cobe").default> | null = null;
	let isVisible = false;
	let isDragging = $state(false);

	let frame = 0;
	let autoPhi = 0;
	let dragStart: { x: number; y: number; phi: number; theta: number } | null = null;
	let lastPointer: { x: number; y: number; t: number } | null = null;
	let releaseVelocity = { phi: 0, theta: 0 };

	const initialPhi = $derived(config.phi ?? 0);
	const initialTheta = $derived(config.theta ?? baseTheta);

	const phiOffset = new Spring(0, {
		stiffness: 0.12,
		damping: 0.7,
		precision: 0.0001,
	});

	const thetaOffset = new Spring(0, {
		stiffness: 0.12,
		damping: 0.7,
		precision: 0.0001,
	});

	function clamp(value: number, min: number, max: number) {
		return Math.min(max, Math.max(min, value));
	}

	function handlePointerDown(event: PointerEvent) {
		dragStart = {
			x: event.clientX,
			y: event.clientY,
			phi: phiOffset.target,
			theta: thetaOffset.target,
		};
		lastPointer = { x: event.clientX, y: event.clientY, t: performance.now() };
		releaseVelocity = { phi: 0, theta: 0 };
		isDragging = true;
		canvas?.setPointerCapture?.(event.pointerId);
	}

	function handlePointerMove(event: PointerEvent) {
		if (!dragStart) return;

		const nextPhi = dragStart.phi + (event.clientX - dragStart.x) / 300;
		const nextTheta = clamp(
			dragStart.theta + (event.clientY - dragStart.y) / 1000,
			thetaOffsetMin,
			thetaOffsetMax
		);

		void phiOffset.set(nextPhi, { instant: true });
		void thetaOffset.set(nextTheta, { instant: true });

		const now = performance.now();
		if (lastPointer) {
			const dt = Math.max(now - lastPointer.t, 1);
			const maxVelocity = 0.15;

			releaseVelocity = {
				phi: clamp(((event.clientX - lastPointer.x) / dt) * 0.3, -maxVelocity, maxVelocity),
				theta: clamp(
					((event.clientY - lastPointer.y) / dt) * 0.08,
					-maxVelocity,
					maxVelocity
				),
			};
		}

		lastPointer = { x: event.clientX, y: event.clientY, t: now };
	}

	function handlePointerUp(event?: PointerEvent) {
		if (!dragStart) return;

		isDragging = false;
		dragStart = null;
		lastPointer = null;

		if (event && canvas?.hasPointerCapture(event.pointerId)) {
			canvas.releasePointerCapture(event.pointerId);
		}

		void phiOffset.set(phiOffset.target + releaseVelocity.phi * 18);
		void thetaOffset.set(
			clamp(thetaOffset.target + releaseVelocity.theta * 12, thetaOffsetMin, thetaOffsetMax)
		);

		releaseVelocity = { phi: 0, theta: 0 };
	}

	function stopAnimation() {
		if (!frame) return;
		cancelAnimationFrame(frame);
		frame = 0;
	}

	function destroyGlobe() {
		stopAnimation();
		globe?.destroy();
		globe = null;
	}

	async function getCreateGlobe() {
		createGlobePromise ??= import("cobe").then((module) => module.default);
		return createGlobePromise;
	}

	async function startGlobe() {
		if (!canvas) return;

		if (globe) {
			if (!frame) animate();
			return;
		}

		const createGlobe = await getCreateGlobe();

		if (!canvas || globe || !isVisible) return;

		globe = createGlobe(canvas, {
			devicePixelRatio: Math.min(window.devicePixelRatio, 2),
			width: size,
			height: size,
			phi: 0,
			theta: baseTheta,
			dark: 0,
			diffuse: 1.7,
			mapSamples: 13000,
			mapBrightness: 6,
			baseColor: [1, 1, 1],
			markerColor: [0.9, 0.4, 0.1],
			glowColor: [1, 1, 1],
			markers: [
				{ location: [37.78, -122.44], size: 0.026, id: "sf" },
				{ location: [40.71, -74.01], size: 0.026, id: "nyc" },
			],
			markerElevation: 0,
			...config,
		} satisfies COBEOptions);

		animate();
	}

	let onWindowPointerMove: ((event: PointerEvent) => void) | null = null;
	let onWindowPointerUp: ((event: PointerEvent) => void) | null = null;

	function animate() {
		if (!globe) {
			frame = 0;
			return;
		}

		if (!isDragging) {
			autoPhi += 0.005;
		}

		globe.update({
			phi: initialPhi + autoPhi + phiOffset.current,
			theta: initialTheta + thetaOffset.current,
		});

		frame = requestAnimationFrame(animate);
	}

	onMount(() => {
		if (!canvas) return;

		onWindowPointerMove = (event: PointerEvent) => handlePointerMove(event);
		onWindowPointerUp = (event: PointerEvent) => handlePointerUp(event);

		window.addEventListener("pointermove", onWindowPointerMove, { passive: true });
		window.addEventListener("pointerup", onWindowPointerUp, { passive: true });
		window.addEventListener("pointercancel", onWindowPointerUp, { passive: true });

		observer = new IntersectionObserver(
			([entry]) => {
				if (!entry) return;
				isVisible = entry.isIntersecting;
				if (isVisible) {
					void startGlobe();
					return;
				}

				stopAnimation();
			},
			{ threshold: 0.1 }
		);

		observer.observe(canvas);
	});

	onDestroy(() => {
		observer?.disconnect();
		observer = null;
		isVisible = false;

		if (onWindowPointerMove) {
			window.removeEventListener("pointermove", onWindowPointerMove);
			onWindowPointerMove = null;
		}

		if (onWindowPointerUp) {
			window.removeEventListener("pointerup", onWindowPointerUp);
			window.removeEventListener("pointercancel", onWindowPointerUp);
			onWindowPointerUp = null;
		}

		handlePointerUp();
		destroyGlobe();
		canvas = null;
	});
</script>

<div
	class={cn("globe-container absolute inset-0 mx-auto aspect-square w-full max-w-150", className)}
>
	<canvas
		bind:this={canvas}
		class={cn(
			"block size-full cursor-grab touch-none contain-[layout_paint_size] select-none",
			isDragging && "cursor-grabbing"
		)}
		onpointerdown={handlePointerDown}
	></canvas>
</div>
