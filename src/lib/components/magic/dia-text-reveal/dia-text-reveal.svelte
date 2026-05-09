<script lang="ts">
	import { cn } from "$lib/utils";
	import {
		animate,
		motion,
		useInView,
		useMotionValue,
		useReducedMotion,
		useTransform,
		type AnimationPlaybackControls,
		type MotionHTMLAttributes,
		type MotionProps,
	} from "motion-sv";
	import { untrack } from "svelte";

	const DEFAULT_COLORS = ["#c679c4", "#fa3d1d", "#ffb005", "#e1e1fe", "#0358f7"];
	const BAND_HALF = 17;
	const SWEEP_START = -BAND_HALF;
	const SWEEP_END = 100 + BAND_HALF;

	type DiaTextRevealProps = Omit<
		MotionProps<"span"> & MotionHTMLAttributes<"span">,
		"children" | "style" | "animate" | "transition" | "color"
	> & {
		text: string | string[];
		colors?: string[];
		textColor?: string;
		duration?: number;
		delay?: number;
		repeat?: boolean;
		repeatDelay?: number;
		triggerOnView?: boolean;
		once?: boolean;
		class?: string;
		fixedWidth?: boolean;
	};

	const sweepEase = (t: number) => (t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2);

	function buildGradient(pos: number, colors: string[], textColor: string) {
		const bandStart = pos - BAND_HALF;
		const bandEnd = pos + BAND_HALF;

		if (bandStart >= 100) {
			return `linear-gradient(90deg, ${textColor}, ${textColor})`;
		}

		const count = colors.length;
		const parts: string[] = [];

		if (bandStart > 0) {
			parts.push(`${textColor} 0%`, `${textColor} ${bandStart.toFixed(2)}%`);
		}

		colors.forEach((color, index) => {
			const pct = count === 1 ? pos : bandStart + (index / (count - 1)) * BAND_HALF * 2;
			parts.push(`${color} ${pct.toFixed(2)}%`);
		});

		if (bandEnd < 100) {
			parts.push(`transparent ${bandEnd.toFixed(2)}%`, "transparent 100%");
		}

		return `linear-gradient(90deg, ${parts.join(", ")})`;
	}

	function measureWidths(element: HTMLElement, texts: string[]) {
		const ghost = element.cloneNode() as HTMLElement;

		Object.assign(ghost.style, {
			position: "absolute",
			visibility: "hidden",
			pointerEvents: "none",
			width: "auto",
			whiteSpace: "nowrap",
		});

		element.parentElement?.appendChild(ghost);

		const widths = texts.map((text) => {
			ghost.textContent = text;
			return ghost.getBoundingClientRect().width;
		});

		ghost.remove();
		return widths;
	}

	let {
		text,
		colors = DEFAULT_COLORS,
		textColor = "var(--foreground)",
		duration = 1.5,
		delay = 0,
		repeat = false,
		repeatDelay = 0.5,
		triggerOnView = true,
		once = true,
		class: className,
		fixedWidth = false,
		...props
	}: DiaTextRevealProps = $props();

	let spanRef = $state<HTMLSpanElement | null>(null);
	let activeIndex = $state(0);
	let measuredWidths = $state<number[]>([]);

	let indexRef = 0;
	let hasPlayed = false;
	let timerRef: ReturnType<typeof setTimeout> | undefined;
	let controls: AnimationPlaybackControls | undefined;
	let previousTextKey = "";

	const sweepPos = useMotionValue(SWEEP_START);
	const prefersReducedMotion = useReducedMotion();
	const view = useInView(
		() => (triggerOnView ? spanRef : null)!,
		() => ({ once, amount: 0.1 }) as any
	);

	const texts = $derived(Array.isArray(text) ? text : [text]);
	const textKey = $derived(texts.join("\0"));
	const isMulti = $derived(texts.length > 1);
	const isInView = $derived(triggerOnView ? view.current : true);

	const backgroundImage = useTransform(sweepPos, (pos) => buildGradient(pos, colors, textColor));

	const fixedW = $derived(
		isMulti && fixedWidth && measuredWidths.length > 0 ? Math.max(...measuredWidths) : undefined
	);

	const animatedW = $derived(
		isMulti && !fixedWidth && measuredWidths[activeIndex] != null
			? measuredWidths[activeIndex]
			: undefined
	);

	const rootStyle = $derived.by(() => ({
		transform: "translateY(-2px)",
		color: "transparent",
		backgroundClip: "text",
		WebkitBackgroundClip: "text",
		backgroundSize: "100% 100%",
		backgroundImage,
		...(isMulti && {
			display: "inline-block",
			overflow: "hidden",
			whiteSpace: "nowrap",
			verticalAlign: "text-center",
			...(fixedW != null && { width: fixedW }),
		}),
	}));

	function clearCycle() {
		controls?.stop();
		controls = undefined;
		clearTimeout(timerRef);
		timerRef = undefined;
	}

	function play() {
		clearCycle();
		sweepPos.set(SWEEP_START);

		controls = animate(sweepPos, SWEEP_END, {
			duration,
			delay,
			ease: sweepEase,
			onComplete() {
				if (!repeat || texts.length === 0) {
					return;
				}

				timerRef = setTimeout(() => {
					const next = (indexRef + 1) % texts.length;
					indexRef = next;
					activeIndex = next;
					play();
				}, repeatDelay * 1000);
			},
		});
	}

	$effect(() => {
		if (textKey === previousTextKey) {
			return;
		}

		untrack(() => {
			previousTextKey = textKey;
			indexRef = 0;
			activeIndex = 0;
			hasPlayed = false;
			clearCycle();
			sweepPos.set(SWEEP_START);
		});
	});

	$effect(() => {
		const element = spanRef;
		const shouldMeasure = isMulti;
		textKey;

		if (!element || !shouldMeasure) {
			untrack(() => {
				measuredWidths = [];
			});
			return;
		}

		untrack(() => {
			measuredWidths = measureWidths(element, texts);
		});
	});

	$effect(() => {
		const reducedMotion = prefersReducedMotion.current;
		const visible = isInView;
		const playOnce = once;

		if (reducedMotion) {
			untrack(() => {
				clearCycle();
				sweepPos.set(SWEEP_END);
			});
			return;
		}

		if (!visible) {
			untrack(() => {
				if (!playOnce) {
					hasPlayed = false;
				}
			});
			return;
		}

		const alreadyPlayed = untrack(() => hasPlayed);

		if (playOnce && alreadyPlayed) {
			return;
		}

		untrack(() => {
			hasPlayed = true;
			play();
		});

		return clearCycle;
	});
</script>

<motion.span
	bind:ref={spanRef}
	class={cn("align-bottom leading-[100%] text-inherit", className)}
	style={rootStyle}
	animate={animatedW != null ? { width: animatedW } : undefined}
	transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
	{...props}
>
	{texts[activeIndex]}
</motion.span>
