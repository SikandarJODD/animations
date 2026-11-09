<script lang="ts">
	import { cn } from "#lib/utils.js";
	import { useInView } from "motion-sv";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	type Align = "left" | "center" | "right";

	const defaultColors = ["#8d6869", "#5a8ea6", "#b9c96e", "#c7c571", "#cb706f", "#7e5e5f"];

	interface Props extends HTMLAttributes<HTMLDivElement> {
		children?: Snippet;
		align?: Align;
		class?: string;
		speed?: number;
		paused?: boolean;
		delay?: number;
		repeat?: boolean;
		triggerOnView?: boolean;
		once?: boolean;
		radial?: boolean;
		bottomOffset?: number;
		bandGap?: number;
		bandCount?: number;
		customColors?: string[];
		ariaLabel?: string;
		style?: string;
		role?: string;
	}

	let {
		children,
		align = "center",
		class: className,
		speed = 1,
		paused = false,
		delay = 0,
		repeat = false,
		triggerOnView = false,
		once = true,
		radial = true,
		bottomOffset = 20,
		bandGap = 4,
		bandCount = 8,
		customColors,
		ariaLabel,
		style,
		role,
		...props
	}: Props = $props();

	let element = $state<HTMLDivElement | null>(null);
	let view = useInView(
		() => (triggerOnView ? element : null)!,
		() => ({ once, amount: 0.1 }) as any
	);

	let rafId = 0;
	let gradientIndex = -25;
	let cyclesDone = 0;
	let finished = false;
	let started = false;
	let startAt = 0;

	const cycles = $derived(repeat ? 0 : 1);
	const resolvedColors = $derived(customColors?.length ? customColors : defaultColors);
	const isInView = $derived(triggerOnView ? view.current : true);
	const justifyContent = $derived(
		align === "left" ? "flex-start" : align === "right" ? "flex-end" : "center"
	);

	const stops = $derived.by(() => {
		const parts: string[] = [];
		const baseColor = "var(--gradient-wave-base, rgb(29,29,31))";

		parts.push(`${baseColor} calc((var(--gi) + 0) * 1%)`);

		for (let index = 0; index < bandCount && index < resolvedColors.length * 2; index += 1) {
			const color = resolvedColors[index % resolvedColors.length];
			const offset = (index + 2) * bandGap;
			parts.push(`${color} calc((var(--gi) + ${offset}) * 1%)`);
		}

		const endOffset = (bandCount + 2) * bandGap;
		parts.push(`${baseColor} calc((var(--gi) + ${endOffset}) * 1%)`);

		return parts.join(", ");
	});

	const gradient = $derived(
		radial
			? `radial-gradient(circle at 50% bottom, ${stops})`
			: `linear-gradient(0deg, ${stops})`
	);

	const rootStyle = $derived(
		[`justify-content: ${justifyContent}`, "--gi: -25", style].filter(Boolean).join("; ")
	);

	const textStyle = $derived(
		[
			`text-align: ${align}`,
			`background-image: ${gradient}`,
			"-webkit-background-clip: text",
			"background-clip: text",
			"-webkit-text-fill-color: transparent",
			"color: transparent",
			"white-space: pre-wrap",
			"word-break: break-word",
			"display: inline-block",
			"-webkit-font-smoothing: antialiased",
			"-moz-osx-font-smoothing: grayscale",
			"-webkit-backface-visibility: hidden",
			"backface-visibility: hidden",
			"transform: translateZ(0)",
			`padding-bottom: ${bottomOffset}%`,
			`margin-bottom: -${bottomOffset}%`,
			"padding-inline: 2px",
		].join("; ")
	);

	function setGradientIndex(value: number) {
		gradientIndex = value;
		element?.style.setProperty("--gi", String(value));
	}

	$effect(() => {
		if (!element) {
			return;
		}

		setGradientIndex(-25);
	});

	$effect(() => {
		if (!element || !isInView) {
			return;
		}

		gradientIndex = -25;
		cyclesDone = 0;
		finished = false;
		started = false;
		startAt = performance.now() + Math.max(0, delay * 1000);
		setGradientIndex(-25);
	});

	$effect(() => {
		if (!element || !isInView) {
			return;
		}

		const node = element;
		const range = 200;
		let last = performance.now();

		const tick = (now: number) => {
			if (finished || node !== element) {
				return;
			}

			if (!started) {
				if (now >= startAt) {
					started = true;
					last = now;
				} else {
					rafId = requestAnimationFrame(tick);
					return;
				}
			}

			const delta = Math.min(64, now - last);
			last = now;

			if (!paused) {
				const increment = (delta * speed) / 16.6667;
				let next = gradientIndex + increment;

				if (cycles === 0) {
					if (next >= range) {
						next %= range;
					}

					setGradientIndex(next);
				} else {
					while (next >= range && cyclesDone < cycles) {
						next -= range;
						cyclesDone += 1;
					}

					if (cyclesDone >= cycles) {
						setGradientIndex(range);
						finished = true;
						return;
					}

					setGradientIndex(next);
				}
			}

			rafId = requestAnimationFrame(tick);
		};

		rafId = requestAnimationFrame(tick);

		return () => cancelAnimationFrame(rafId);
	});
</script>

<div
	bind:this={element}
	class={cn(
		"flex h-full w-full items-center [--gradient-wave-base:rgb(29,29,31)] dark:[--gradient-wave-base:rgb(255,255,255)]",
		className
	)}
	style={rootStyle}
	aria-label={ariaLabel}
	role={role ?? (ariaLabel ? "img" : undefined)}
	{...props}
>
	<span style={textStyle}>
		{@render children?.()}
	</span>
</div>
