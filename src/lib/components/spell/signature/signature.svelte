<script lang="ts">
	import { browser } from "$app/environment";
	import { cn } from "$lib/utils";
	import { motion, type AnimationOptions, type Transition } from "motion-sv";
	import opentype from "opentype.js";
	import type { SVGAttributes } from "svelte/elements";

	type GlyphLike = {
		advanceWidth?: number;
		getPath: (
			x: number,
			y: number,
			fontSize: number
		) => {
			toPathData: (decimalPlaces?: number) => string;
		};
	};

	type FontLike = {
		unitsPerEm: number;
		forEachGlyph: (
			text: string,
			x: number,
			y: number,
			fontSize: number,
			options: {
				kerning?: boolean;
				features?: {
					liga?: boolean;
					rlig?: boolean;
				};
			},
			callback: (
				glyph: GlyphLike,
				glyphX: number,
				glyphY: number,
				glyphFontSize: number
			) => void
		) => void;
		getAdvanceWidth: (
			text: string,
			fontSize: number,
			options: {
				kerning?: boolean;
				features?: {
					liga?: boolean;
					rlig?: boolean;
				};
			}
		) => number;
	};

	type SignaturePath = {
		id: string;
		d: string;
		delay: number;
	};

	interface SignatureProps extends SVGAttributes<SVGSVGElement> {
		text?: string;
		color?: string;
		fontSize?: number;
		duration?: number;
		delay?: number;
		class?: string;
		inView?: boolean;
		once?: boolean;
	}

	let height = 100;
	let strokeTransition: AnimationOptions = {
		type: "tween",
		ease: "easeInOut",
	};

	let {
		text = "Signature",
		color = "#000",
		fontSize = 14,
		duration = 1.5,
		delay = 0,
		class: className,
		inView = false,
		once = true,
	}: SignatureProps = $props();

	let paths = $state<SignaturePath[]>([]);
	let width = $state(300);

	let horizontalPadding = $derived(fontSize * 0.1);
	let topMargin = $derived(Math.max(5, (height - fontSize) / 2));
	let baseline = $derived(Math.min(height - 5, topMargin + fontSize));
	let pathVariants = $derived({
		hidden: { pathLength: 0, opacity: 1, fillOpacity: 0 },
		visible: { pathLength: 1, opacity: 1, fillOpacity: 1 },
	});

	let requestId = 0;

	async function buildPaths() {
		if (!browser) {
			return;
		}

		let currentRequest = ++requestId;

		try {
			let response = await fetch("/LastoriaBoldRegular.otf");

			if (!response.ok) {
				throw new Error(`Failed to load font: ${response.status}`);
			}

			let font = opentype.parse(await response.arrayBuffer()) as FontLike;
			let nextPaths: SignaturePath[] = [];
			let fontOptions = {
				kerning: true,
				features: {
					liga: true,
					rlig: true,
				},
			};

			font.forEachGlyph(
				text,
				horizontalPadding,
				baseline,
				fontSize,
				fontOptions,
				(glyph, glyphX, glyphY, glyphFontSize) => {
					let pathData = glyph
						.getPath(glyphX, glyphY, glyphFontSize)
						.toPathData(3)
						.trim();

					if (pathData) {
						nextPaths.push({
							id: `path-${nextPaths.length}`,
							d: pathData,
							delay: delay + nextPaths.length * 0.2,
						});
					}
				}
			);

			if (currentRequest !== requestId) {
				return;
			}

			paths = nextPaths;
			width = Math.max(
				font.getAdvanceWidth(text, fontSize, fontOptions) + horizontalPadding * 2,
				fontSize
			);
		} catch {
			if (currentRequest !== requestId) {
				return;
			}

			paths = [];
			width = Math.max(text.length * fontSize * 0.6, fontSize * 2);
		}
	}

	$effect(() => {
		text;
		fontSize;
		baseline;
		horizontalPadding;
		delay;

		buildPaths();
	});

	function getTransition(pathDelay: number): Transition {
		return {
			pathLength: {
				...strokeTransition,
				delay: pathDelay,
				duration,
			},
			opacity: {
				type: "tween",
				delay: pathDelay,
				duration: 0.01,
			},
			fillOpacity: {
				type: "tween",
				delay: pathDelay + duration * 0.65,
				duration: Math.min(0.25, duration * 0.35),
			},
		};
	}
</script>

<div class="pointer-events-none">
	<motion.svg
		{width}
		{height}
		viewBox={`0 0 ${width} ${height}`}
		fill="none"
		class={cn("overflow-visible", className)}
		initial="hidden"
		whileInView={inView ? "visible" : undefined}
		animate={inView ? undefined : "visible"}
		inViewOptions={{ once, amount: 0.35 }}
	>
		{#each paths as path (path.id)}
			<motion.path
				d={path.d}
				stroke={color}
				stroke-width={2}
				fill={color}
				variants={pathVariants}
				transition={getTransition(path.delay)}
				vector-effect="non-scaling-stroke"
				stroke-linecap="butt"
				stroke-linejoin="round"
			/>
		{/each}
	</motion.svg>
</div>
