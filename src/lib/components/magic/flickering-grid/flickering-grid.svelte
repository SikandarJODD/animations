<script lang="ts">
	import type { ClassValue } from "svelte/elements";
	import { onMount } from "svelte";
	import { cn } from "#lib/utils.js";

	interface FlickeringGridProps {
		squareSize?: number;
		gridGap?: number;
		flickerChance?: number;
		color?: string;
		width?: number;
		height?: number;
		class?: ClassValue;
		maxOpacity?: number;
	}

	let {
		squareSize = 4,
		gridGap = 6,
		flickerChance = 0.3,
		color = "rgb(0, 0, 0)",
		width,
		height,
		class: className,
		maxOpacity = 0.3,
		...props
	}: FlickeringGridProps = $props();

	let canvasRef: HTMLCanvasElement | null = $state(null);
	let containerRef: HTMLDivElement | null = $state(null);
	let isInView = $state(false);
	let canvasSize = $state({ width: 0, height: 0 });

	const memoizedColor = $derived.by(() => {
		const toRGBA = (color: string) => {
			if (typeof window === "undefined") {
				return `rgba(0, 0, 0,`;
			}
			const canvas = document.createElement("canvas");
			canvas.width = canvas.height = 1;
			const ctx = canvas.getContext("2d");
			if (!ctx) return "rgba(255, 0, 0,";
			ctx.fillStyle = color;
			ctx.fillRect(0, 0, 1, 1);
			const [r, g, b] = Array.from(ctx.getImageData(0, 0, 1, 1).data);
			return `rgba(${r}, ${g}, ${b},`;
		};
		return toRGBA(color);
	});

	const setupCanvas = (canvas: HTMLCanvasElement, width: number, height: number) => {
		const dpr = window.devicePixelRatio || 1;
		canvas.width = width * dpr;
		canvas.height = height * dpr;
		canvas.style.width = `${width}px`;
		canvas.style.height = `${height}px`;
		const cols = Math.floor(width / (squareSize + gridGap));
		const rows = Math.floor(height / (squareSize + gridGap));

		const squares = new Float32Array(cols * rows);
		for (let i = 0; i < squares.length; i++) {
			squares[i] = Math.random() * maxOpacity;
		}

		return { cols, rows, squares, dpr };
	};

	const updateSquares = (squares: Float32Array, deltaTime: number) => {
		for (let i = 0; i < squares.length; i++) {
			if (Math.random() < flickerChance * deltaTime) {
				squares[i] = Math.random() * maxOpacity;
			}
		}
	};

	const drawGrid = (
		ctx: CanvasRenderingContext2D,
		width: number,
		height: number,
		cols: number,
		rows: number,
		squares: Float32Array,
		dpr: number
	) => {
		ctx.clearRect(0, 0, width, height);
		ctx.fillStyle = "transparent";
		ctx.fillRect(0, 0, width, height);

		for (let i = 0; i < cols; i++) {
			for (let j = 0; j < rows; j++) {
				const opacity = squares[i * rows + j];
				ctx.fillStyle = `${memoizedColor}${opacity})`;
				ctx.fillRect(
					i * (squareSize + gridGap) * dpr,
					j * (squareSize + gridGap) * dpr,
					squareSize * dpr,
					squareSize * dpr
				);
			}
		}
	};

	onMount(() => {
		const canvas = canvasRef;
		const container = containerRef;
		if (!canvas || !container) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let animationFrameId: number;
		let gridParams: ReturnType<typeof setupCanvas>;

		const updateCanvasSize = () => {
			const newWidth = width || container.clientWidth;
			const newHeight = height || container.clientHeight;
			canvasSize = { width: newWidth, height: newHeight };
			gridParams = setupCanvas(canvas, newWidth, newHeight);
		};

		updateCanvasSize();

		let lastTime = 0;
		const animate = (time: number) => {
			if (!isInView) return;

			const deltaTime = (time - lastTime) / 1000;
			lastTime = time;

			updateSquares(gridParams.squares, deltaTime);
			drawGrid(
				ctx,
				canvas.width,
				canvas.height,
				gridParams.cols,
				gridParams.rows,
				gridParams.squares,
				gridParams.dpr
			);
			animationFrameId = requestAnimationFrame(animate);
		};

		const resizeObserver = new ResizeObserver(() => {
			updateCanvasSize();
		});

		resizeObserver.observe(container);

		const intersectionObserver = new IntersectionObserver(
			([entry]) => {
				isInView = entry.isIntersecting;
			},
			{ threshold: 0 }
		);

		intersectionObserver.observe(canvas);

		$effect(() => {
			if (isInView) {
				animationFrameId = requestAnimationFrame(animate);
			}
		});

		return () => {
			cancelAnimationFrame(animationFrameId);
			resizeObserver.disconnect();
			intersectionObserver.disconnect();
		};
	});
</script>

<div bind:this={containerRef} class={cn("h-full w-full", className)} {...props}>
	<canvas
		bind:this={canvasRef}
		class="pointer-events-none"
		style:width="{canvasSize.width}px"
		style:height="{canvasSize.height}px"
	></canvas>
</div>
