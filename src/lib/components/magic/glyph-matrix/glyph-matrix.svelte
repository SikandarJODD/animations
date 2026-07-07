<script lang="ts">
	import { cn } from "$lib/utils";
	import { watch } from "runed";
	import type { HTMLAttributes } from "svelte/elements";

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
		class?: string;
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
		style,
		...props
	}: GlyphMatrixProps = $props();

	let canvas: HTMLCanvasElement | null = $state(null);
	let rgba = DEFAULT_RGBA;
	let alphaBoost = 1;

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
		[() => color, () => boost],
		([nextColor, nextBoost]) => {
			alphaBoost = getAlphaBoost(nextBoost);
			rgba = resolveColor(nextColor, nextBoost);
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
		],
		([
			currentCanvas,
			currentGlyphs,
			currentCellSize,
			currentMutationRate,
			currentInterval,
			currentFadeBottom,
		]) => {
			if (!currentCanvas) return;

			const context = currentCanvas.getContext("2d");
			if (!context) return;

			const glyphPool = currentGlyphs.length > 0 ? currentGlyphs : DEFAULT_GLYPHS;

			let cols = 0;
			let rows = 0;
			let cells: string[] = [];
			let alphas: number[] = [];
			let frame = 0;
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
			};

			// Draw the current glyph state using the latest resolved color.
			const draw = () => {
				const { clientWidth: width, clientHeight: height } = currentCanvas;
				context.clearRect(0, 0, width, height);
				context.font = `${Math.max(1, currentCellSize - 2)}px ui-monospace, SFMono-Regular, Menlo, monospace`;
				context.textBaseline = "top";

				const { r, g, b, a: colorAlpha } = rgba;
				for (let y = 0; y < rows; y++) {
					const fade = currentFadeBottom > 0 ? 1 - (y / rows) * currentFadeBottom : 1;

					for (let x = 0; x < cols; x++) {
						const index = y * cols + x;
						const alpha = Math.min(1, alphas[index] * fade * colorAlpha * alphaBoost);

						context.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
						context.fillText(cells[index] ?? " ", x * currentCellSize, y * currentCellSize);
					}
				}
			};

			// Mutate a few cells on each animation tick.
			const tick = (time: number) => {
				if (time - lastTick >= currentInterval) {
					lastTick = time;

					const total = cols * rows;
					if (total > 0) {
						const mutations = Math.max(1, Math.floor(total * currentMutationRate));

						for (let count = 0; count < mutations; count++) {
							const index = Math.floor(Math.random() * total);
							cells[index] = randomGlyph(glyphPool);
							alphas[index] = randomAlpha(0.45);
						}
					}

					draw();
				}

				frame = requestAnimationFrame(tick);
			};

			resize();
			draw();
			frame = requestAnimationFrame(tick);

			const observer = new ResizeObserver(() => {
				resize();
				draw();
			});

			observer.observe(currentCanvas);

			return () => {
				cancelAnimationFrame(frame);
				observer.disconnect();
			};
		}
	);
</script>

<canvas
	bind:this={canvas}
	class={cn("pointer-events-none", className)}
	style={`width: 100%; height: 100%; display: block; ${style ?? ""}`}
	aria-hidden="true"
	{...props}
></canvas>
