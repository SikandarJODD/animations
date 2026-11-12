<script lang="ts">
	import type { ClassValue } from "svelte/elements";
	import { motion } from "motion-sv";
	import { cn } from "#lib/utils.js";

	interface LightRay {
		id: string;
		left: number;
		rotate: number;
		width: number;
		swing: number;
		delay: number;
		duration: number;
		intensity: number;
	}

	interface LightRaysProps {
		class?: ClassValue;
		count?: number;
		color?: string;
		blur?: number;
		speed?: number;
		length?: string;
		style?: string;
	}

	let {
		class: className,
		count = 7,
		color = "rgba(160, 210, 255, 0.2)",
		blur = 36,
		speed = 14,
		length = "70vh",
		style,
		...props
	}: LightRaysProps = $props();

	let rays = $state<LightRay[]>([]);
	let cycleDuration = $derived(Math.max(speed, 0.1));

	let createRays = (count: number, cycle: number): LightRay[] => {
		if (count <= 0) return [];

		return Array.from({ length: count }, (_, index) => {
			const left = 8 + Math.random() * 84;
			const rotate = -28 + Math.random() * 56;
			const width = 160 + Math.random() * 160;
			const swing = 0.8 + Math.random() * 1.8;
			const delay = Math.random() * cycle;
			const duration = cycle * (0.75 + Math.random() * 0.5);
			const intensity = 0.6 + Math.random() * 0.5;

			return {
				id: `${index}-${Math.round(left * 10)}`,
				left,
				rotate,
				width,
				swing,
				delay,
				duration,
				intensity,
			};
		});
	};

	// onMount(() => {
	// 	rays = createRays(count, cycleDuration);
	// });

	$effect(() => {
		rays = createRays(count, cycleDuration);
	});
</script>

<div
	class={cn(
		"pointer-events-none absolute inset-0 isolate overflow-hidden rounded-[inherit]",
		className
	)}
	style="--light-rays-color: {color}; --light-rays-blur: {blur}px; --light-rays-length: {length}; {style ||
		''}"
	{...props}
>
	<div class="absolute inset-0 overflow-hidden">
		<div
			aria-hidden="true"
			class="absolute inset-0 opacity-60"
			style="background: radial-gradient(circle at 20% 15%, color-mix(in srgb, var(--light-rays-color) 45%, transparent), transparent 70%)"
		></div>
		<div
			aria-hidden="true"
			class="absolute inset-0 opacity-60"
			style="background: radial-gradient(circle at 80% 10%, color-mix(in srgb, var(--light-rays-color) 35%, transparent), transparent 75%)"
		></div>
		{#each rays as ray (ray.id)}
			<motion.div
				class="pointer-events-none absolute -top-[12%] h-(--light-rays-length) origin-top -translate-x-1/2 rounded-full bg-linear-to-b from-[color-mix(in_srgb,var(--light-rays-color)_70%,transparent)] to-transparent opacity-0 mix-blend-screen blur-(--light-rays-blur)"
				style={{ left: `${ray.left}%`, width: `${ray.width}px` }}
				initial={{ rotate: ray.rotate }}
				animate={{
					opacity: [0, ray.intensity, 0],
					rotate: [
						ray.rotate - ray.swing,
						ray.rotate + ray.swing,
						ray.rotate - ray.swing,
					],
				}}
				transition={{
					duration: ray.duration,
					repeat: Infinity,
					ease: "easeInOut",
					delay: ray.delay,
					repeatDelay: ray.duration * 0.1,
				}}
			/>
		{/each}
	</div>
</div>
