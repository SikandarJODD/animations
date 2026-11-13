<script lang="ts">
	import { cn } from "#lib/utils.js";
	import { watch } from "runed";
	import { MediaQuery } from "svelte/reactivity";
	import type { ClassValue, HTMLAttributes } from "svelte/elements";

	interface GlyphMatrixProps extends HTMLAttributes<HTMLCanvasElement> {
		/** Characters to randomly pick from */
		glyphs?: string;
		/** Cell size in px (also font size) */
		cellSize?: number;
		/** Probability (0-1) a cell mutates each tick */
		mutationRate?: number;
		/** Tick interval in ms */
		interval?: number;
		/** Fade out toward bottom (0 = no fade) */
		fadeBottom?: number;
		/** Glyph color (any CSS color). Use a lighter color for a brighter matrix look. */
		color?: string;
		/** Brightness multiplier. 1 = original, 1.15-1.25 = subtle, 1.4-1.6 = strong, 1.8+ = very bright. */
		boost?: number;
		pattern?: "random" | "wave" | "flame";
		hover?: boolean;
		hoverColor?: string;
		hoverRadius?: number;
		hoverGlyphs?: string;
		class?: ClassValue;
	}

	type RGBA = {
		r: number;
		g: number;
		b: number;
		a: number;
	};

	const DEFAULT_GLYPHS = "01\u00B7\u2022+*/\\<>=";
	const DEFAULT_COLOR = "#6B7280";
	const DEFAULT_RGBA: RGBA = { r: 107, g: 114, b: 128, a: 1 };

	let {
		glyphs = DEFAULT_GLYPHS,
		cellSize = 14,
		mutationRate = 0.04,
		interval = 90,
		class: className = "",
		fadeBottom = 0.6,
		color = DEFAULT_COLOR,
		boost = 1.2,
		pattern = "random",
		hover = false,
		hoverColor = "oklch(0.85 0.12 160)",
		hoverRadius = 70,
		hoverGlyphs,
		onpointermove,
		onpointerleave,
		style,
		...props
	}: GlyphMatrixProps = $props();

	let canvas: HTMLCanvasElement | null = $state(null);
	let rgba = DEFAULT_RGBA;
	let alphaBoost = 1;
	let hoverRgba = DEFAULT_RGBA;
	const reducedMotion = new MediaQuery("(prefers-reduced-motion: reduce)");
	let pointer: { x: number; y: number } | null = null;
	let drawFrame: (() => void) | undefined;

	function handlePointerMove(event: PointerEvent & { currentTarget: HTMLCanvasElement }) {
		if (hover) {
			const target = event.currentTarget;
			const rect = target.getBoundingClientRect();
			pointer = {
				x: ((event.clientX - rect.left) / rect.width) * target.clientWidth,
				y: ((event.clientY - rect.top) / rect.height) * target.clientHeight,
			};
			if (reducedMotion.current) drawFrame?.();
		}
		onpointermove?.(event);
	}

	function handlePointerLeave(event: PointerEvent & { currentTarget: HTMLCanvasElement }) {
		pointer = null;
		if (reducedMotion.current) drawFrame?.();
		onpointerleave?.(event);
	}

	function randomGlyph(pool: string) {
		return pool[Math.floor(Math.random() * pool.length)] ?? " ";
	}

	function randomAlpha(range: number) {
		return 0.05 + Math.random() * range;
	}

	function normalizeBoost(amount: number) {
		return Math.max(0, amount);
	}

	function boostChannel(value: number, amount: number) {
		const normalized = normalizeBoost(amount);
		const mix = Math.max(0, normalized - 1);
		return Math.min(255, Math.round(value + (255 - value) * mix));
	}

	function getAlphaBoost(amount: number) {
		const normalized = normalizeBoost(amount);
		return normalized <= 1 ? normalized : 1 + (normalized - 1) * 1.75;
	}

	// Resolve CSS colors once so the draw loop can stay cheap.
	// `boost` brightens the glyph color and also makes the glyphs read more clearly.
	function resolveColor(value: string, amount: number): RGBA {
		if (typeof document === "undefined") return DEFAULT_RGBA;

		const probe = document.createElement("canvas");
		const context = probe.getContext("2d");

		if (!context) return DEFAULT_RGBA;

		context.fillStyle = DEFAULT_COLOR;
		context.fillStyle = value;
		context.fillRect(0, 0, 1, 1);

		const [r, g, b, a] = context.getImageData(0, 0, 1, 1).data;
		return {
			r: boostChannel(r, amount),
			g: boostChannel(g, amount),
			b: boostChannel(b, amount),
			a: a / 255,
		};
	}

	watch(
		[() => color, () => boost, () => hoverColor],
		([nextColor, nextBoost, nextHoverColor]) => {
			alphaBoost = getAlphaBoost(nextBoost);
			rgba = resolveColor(nextColor, nextBoost);
			hoverRgba = resolveColor(nextHoverColor, 1);
			drawFrame?.();
		}
	);

	watch(
		[
			() => canvas,
			() => glyphs,
			() => cellSize,
			() => mutationRate,
			() => interval,
			() => fadeBottom,
			() => hover,
			() => hoverGlyphs,
			() => pattern,
			() => reducedMotion.current,
		],
		([
			currentCanvas,
			currentGlyphs,
			currentCellSize,
			currentMutationRate,
			currentInterval,
			currentFadeBottom,
			currentHover,
			currentHoverGlyphs,
			currentPattern,
			reduceMotion,
		]) => {
			if (!currentCanvas) return;

			const context = currentCanvas.getContext("2d");
			if (!context) return;

			const glyphPool = currentGlyphs.length > 0 ? currentGlyphs : DEFAULT_GLYPHS;

			let cols = 0;
			let rows = 0;
			let cells: string[] = [];
			let alphas: number[] = [];
			let hoverLevels = new Float32Array(0);
			let frame = 0;
			let lastFrame = 0;
			let lastTick = 0;

			// Rebuild the matrix when the canvas size changes.
			const resize = () => {
				const dpr = window.devicePixelRatio || 1;
				const { clientWidth: width, clientHeight: height } = currentCanvas;

				currentCanvas.width = width * dpr;
				currentCanvas.height = height * dpr;
				context.setTransform(dpr, 0, 0, dpr, 0, 0);

				cols = Math.ceil(width / currentCellSize);
				rows = Math.ceil(height / currentCellSize);

				const total = cols * rows;
				cells = Array.from({ length: total }, () => randomGlyph(glyphPool));
				alphas = Array.from({ length: total }, () => randomAlpha(0.35));
				hoverLevels = new Float32Array(total);
			};

			function patternOpacity(x: number, y: number, time: number) {
				if (currentPattern === "wave") {
					const crest = 0.5 + Math.sin(x * 0.12 - time * 0.0008) * 0.2;
					const distance = y / rows - crest;
					return 0.03 + Math.exp(-(distance * distance) / 0.008) * 0.97;
				}
				if (currentPattern === "flame") {
					const height = y / rows;
					const center = 0.5 + Math.sin(y * 0.16 + time * 0.0012) * 0.08 * (1 - height);
					const width = 0.04 + height * 0.32;
					const edge = Math.max(0, 1 - Math.abs(x / cols - center) / width);
					return (
						0.02 + Math.pow(edge, 1.5) * (0.8 + Math.sin(y * 0.5 + time * 0.003) * 0.2)
					);
				}
				return 1;
			}

			const draw = (time: number, elapsed: number) => {
				const { clientWidth: width, clientHeight: height } = currentCanvas;
				const fontSize = Math.max(1, currentCellSize - 2);
				context.clearRect(0, 0, width, height);
				context.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, monospace`;
				context.textBaseline = "middle";
				context.textAlign = "center";

				const { r, g, b, a: colorAlpha } = rgba;
				for (let y = 0; y < rows; y++) {
					const fade = currentFadeBottom > 0 ? 1 - (y / rows) * currentFadeBottom : 1;
					for (let x = 0; x < cols; x++) {
						const index = y * cols + x;
						const centerX = (x + 0.5) * currentCellSize;
						const centerY = (y + 0.5) * currentCellSize;
						const intensity =
							currentPattern === "random"
								? alphas[index]
								: 0.65 + alphas[index] * 0.6;
						const alpha = Math.min(
							1,
							intensity * patternOpacity(x, y, time) * fade * colorAlpha * alphaBoost
						);
						let target = 0;
						if (
							currentHover &&
							pointer &&
							(!currentHoverGlyphs || currentHoverGlyphs.includes(cells[index]))
						) {
							const distance = Math.hypot(pointer.x - centerX, pointer.y - centerY);
							const proximity = Math.max(0, 1 - distance / Math.max(1, hoverRadius));
							target = proximity * proximity * (3 - 2 * proximity);
						}
						const previous = hoverLevels[index];
						const blend = reduceMotion
							? 1
							: 1 - Math.exp(-elapsed / (target > previous ? 65 : 260));
						const level = previous + (target - previous) * blend;
						hoverLevels[index] = level < 0.001 ? 0 : level;

						const red = Math.round(r + (hoverRgba.r - r) * level);
						const green = Math.round(g + (hoverRgba.g - g) * level);
						const blue = Math.round(b + (hoverRgba.b - b) * level);
						const opacity = alpha + (hoverRgba.a - alpha) * level;
						context.fillStyle = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
						context.fillText(cells[index] ?? " ", centerX, centerY);
					}
				}
			};

			const tick = (time: number) => {
				const elapsed = lastFrame === 0 ? 16 : Math.min(time - lastFrame, 64);
				lastFrame = time;
				const mutate = time - lastTick >= currentInterval;
				if (mutate) {
					lastTick = time;
					const total = cols * rows;
					const mutations = Math.floor(total * currentMutationRate);
					for (let count = 0; count < mutations; count++) {
						const index = Math.floor(Math.random() * total);
						if (hoverLevels[index] > 0.05) continue;
						cells[index] = randomGlyph(glyphPool);
						alphas[index] = randomAlpha(0.45);
					}
				}
				if (mutate || currentHover || currentPattern !== "random") draw(time, elapsed);
				frame = requestAnimationFrame(tick);
			};

			drawFrame = () => draw(0, 0);
			resize();
			draw(0, 0);
			if (!reduceMotion) frame = requestAnimationFrame(tick);

			const observer = new ResizeObserver(() => {
				resize();
				draw(0, 0);
			});

			observer.observe(currentCanvas);

			return () => {
				drawFrame = undefined;
				cancelAnimationFrame(frame);
				observer.disconnect();
			};
		}
	);
</script>

<canvas
	bind:this={canvas}
	class={cn(!hover && "pointer-events-none", className)}
	style={`width: 100%; height: 100%; display: block; ${style ?? ""}`}
	onpointermove={handlePointerMove}
	onpointerleave={handlePointerLeave}
	aria-hidden="true"
	{...props}
></canvas>
