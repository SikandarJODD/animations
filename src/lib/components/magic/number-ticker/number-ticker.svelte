<script lang="ts">
	import { onMount } from "svelte";
	import { useInView } from "motion-sv";
	import { cn } from "$lib/utils";

	interface NumberTickerProps {
		value: number;
		startValue?: number;
		direction?: "up" | "down";
		delay?: number;
		decimalPlaces?: number;
		class?: string;
		prefix?: string;
		suffix?: string;
		once?: boolean;
	}

	let {
		value,
		startValue = 0,
		direction = "up",
		delay = 0,
		decimalPlaces = 0,
		class: className,
		prefix = "",
		suffix = "",
		once = true,
	}: NumberTickerProps = $props();

	let spanRef: HTMLSpanElement | null = $state(null);

	// Spring configuration
	const damping = 60;
	const stiffness = 100;

	// Spring physics simulation
	function animateValue(from: number, to: number) {
		const startTime = performance.now();
		const duration = 2000; // Duration in ms

		let velocity = 0;
		let position = from;
		const target = to;

		function step(currentTime: number) {
			const elapsed = currentTime - startTime;
			const dt = 16.67 / 1000; // ~60fps in seconds

			// Spring physics
			const springForce = -stiffness * (position - target);
			const dampingForce = -damping * velocity;
			const acceleration = springForce + dampingForce;

			velocity += acceleration * dt;
			position += velocity * dt;

			// Update display
			if (spanRef) {
				spanRef.textContent = `${prefix}${Intl.NumberFormat("en-US", {
					minimumFractionDigits: decimalPlaces,
					maximumFractionDigits: decimalPlaces,
				}).format(Number(position.toFixed(decimalPlaces)))}${suffix}`;
			}

			// Continue animation if not settled
			const isSettled = Math.abs(velocity) < 0.01 && Math.abs(position - target) < 0.01;
			if (!isSettled && elapsed < duration * 2) {
				requestAnimationFrame(step);
			} else if (spanRef) {
				// Ensure final value is exact
				spanRef.textContent = `${prefix}${Intl.NumberFormat("en-US", {
					minimumFractionDigits: decimalPlaces,
					maximumFractionDigits: decimalPlaces,
				}).format(Number(target.toFixed(decimalPlaces)))}${suffix}`;
			}
		}

		requestAnimationFrame(step);
	}

	const view = useInView(
		() => spanRef!,
		() =>
			({
				once: once,
				margin: "0px",
			}) as any
	);
	$effect(() => {
		let timer: ReturnType<typeof setTimeout> | null = null;
		if (view.current) {
			timer = setTimeout(() => {
				animateValue(
					direction === "down" ? value : startValue,
					direction === "down" ? startValue : value
				);
			}, delay);
		}
		return () => {
			if (timer !== null) {
				clearTimeout(timer);
			}
		};
	});
</script>

<span
	bind:this={spanRef}
	class={cn("inline-block tracking-wider text-black tabular-nums dark:text-white", className)}
>
	{prefix}
	{Intl.NumberFormat("en-US", {
		minimumFractionDigits: decimalPlaces,
		maximumFractionDigits: decimalPlaces,
	}).format(Number((direction === "down" ? value : startValue).toFixed(decimalPlaces)))}
	{suffix}
</span>
