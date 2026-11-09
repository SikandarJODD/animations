<script lang="ts" generics="T">
	import { browser } from "$app/env";
	import { cn, type WithElementRef, type WithoutChildren } from "#lib/utils.ts";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	type HorizontalDirection = "left" | "center" | "right";
	type VerticalDirection = "top" | "center" | "bottom";

	interface DirectionConfig {
		horizontal?: HorizontalDirection;
		vertical?: VerticalDirection;
	}

	interface ScaleConfig {
		value?: number;
		randomize?: boolean;
		randomVariation?: number;
	}

	interface RotationConfig {
		value?: number;
		animate?: boolean;
	}

	interface Particle {
		id: number;
		x: number;
		y: number;
		scale: number;
		rotate: number;
		opacity: number;
		vx: number;
		vy: number;
		gravity: number;
		birthTime: number;
		lifeMs: number;
		contentIdx: number;
		scaleStart: number;
		scaleEnd: number;
		rotateStart: number;
		rotateEnd: number;
	}

	type Props = WithElementRef<
		WithoutChildren<HTMLAttributes<HTMLDivElement>> & {
			items?: T[];
			children?: Snippet<[T, number]>;
			count?: number;
			direction?: DirectionConfig;
			gravity?: number;
			duration?: number;
			scale?: ScaleConfig;
			rotation?: RotationConfig;
			target?: HTMLInputElement | null;
		},
		HTMLDivElement
	>;

	const DEFAULT_DIRECTION: Required<DirectionConfig> = { horizontal: "center", vertical: "top" };
	const DEFAULT_SCALE: Required<ScaleConfig> = { value: 1, randomize: false, randomVariation: 0 };
	const DEFAULT_ROTATION: Required<RotationConfig> = { value: 0, animate: false };

	let {
		ref = $bindable(null),
		items = [],
		children,
		count = 1,
		direction = DEFAULT_DIRECTION,
		gravity = 0.7,
		duration = 3,
		scale = DEFAULT_SCALE,
		rotation = DEFAULT_ROTATION,
		target = null,
		class: className,
		style: styleAttribute,
		...restProps
	}: Props = $props();

	let particles = $state<Particle[]>([]);

	let particleIdCounter = 0;
	let rand: () => number = Math.random;
	let rafId: number | null = null;
	const particleTimeouts = new Map<number, number>();

	let rootStyle = $derived.by(() => {
		const styles = [
			styleAttribute ? String(styleAttribute) : "",
			"position: fixed",
			"inset: 0",
			"overflow: hidden",
			"background-color: transparent",
			"pointer-events: none",
		];

		return styles.filter(Boolean).join("; ");
	});

	function clamp(value: number, min: number, max: number): number {
		return Math.min(max, Math.max(min, value));
	}

	function mapLinear(
		value: number,
		inMin: number,
		inMax: number,
		outMin: number,
		outMax: number
	): number {
		if (inMax === inMin) return outMin;
		const t = (value - inMin) / (inMax - inMin);
		return outMin + t * (outMax - outMin);
	}

	function createPRNG(seed: number): () => number {
		let s = seed;

		return () => {
			s |= 0;
			s = (s + 1831565813) | 0;
			let t = Math.imul(s ^ (s >>> 15), 1 | s);
			t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
			return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
		};
	}

	function randBetween(min: number, max: number): number {
		return min + rand() * (max - min);
	}

	function toFiniteNumber(value: number, fallback: number): number {
		return Number.isFinite(value) ? value : fallback;
	}

	function resolveTargetInput(): HTMLInputElement | null {
		if (target instanceof HTMLInputElement) {
			return target;
		}

		const root = ref;
		if (!root) return null;

		const label = root.closest("label");
		return label?.querySelector("input") ?? null;
	}

	function getTextWidth(text: string, input: HTMLInputElement): number {
		const canvas = document.createElement("canvas");
		const context = canvas.getContext("2d");
		if (!context) return 0;

		const computedStyle = window.getComputedStyle(input);
		context.font =
			computedStyle.font ||
			`${computedStyle.fontStyle} ${computedStyle.fontVariant} ${computedStyle.fontWeight} ${computedStyle.fontSize} / ${computedStyle.lineHeight} ${computedStyle.fontFamily}`;

		return context.measureText(text).width;
	}

	function getInputSpawnPosition(input: HTMLInputElement): { x: number; y: number } | null {
		const inputRect = input.getBoundingClientRect();
		const computedStyle = window.getComputedStyle(input);
		const paddingLeft = Number.parseFloat(computedStyle.paddingLeft) || 0;
		const paddingRight = Number.parseFloat(computedStyle.paddingRight) || 0;
		const selectionEnd = input.selectionStart ?? input.value.length;
		const visibleValue = input.value.slice(0, selectionEnd);
		const inputStartX = inputRect.left;

		let x = inputStartX + paddingLeft;
		if (visibleValue.length > 0) {
			const textWidth = getTextWidth(visibleValue, input);
			const maxX = inputStartX + inputRect.width - paddingRight;
			x = Math.min(inputStartX + paddingLeft + textWidth, maxX);
		}

		return {
			x,
			y: inputRect.top + inputRect.height / 2,
		};
	}

	function removeParticle(id: number) {
		const timeoutId = particleTimeouts.get(id);
		if (timeoutId !== undefined) {
			window.clearTimeout(timeoutId);
			particleTimeouts.delete(id);
		}

		particles = particles.filter((particle) => particle.id !== id);
	}

	function spawnParticle(x: number, y: number) {
		const normalizedDirection = {
			...DEFAULT_DIRECTION,
			...direction,
		};
		const normalizedScale = {
			...DEFAULT_SCALE,
			...scale,
		};
		const normalizedRotation = {
			...DEFAULT_ROTATION,
			...rotation,
		};
		const safeDuration = Math.max(0.01, toFiniteNumber(duration, 3));
		const safeGravity = clamp(toFiniteNumber(gravity, 0.7), -1, 1);

		const horizontalValue =
			normalizedDirection.horizontal === "left"
				? -0.4
				: normalizedDirection.horizontal === "right"
					? 0.4
					: 0;
		const verticalValue =
			normalizedDirection.vertical === "top"
				? -0.7
				: normalizedDirection.vertical === "bottom"
					? 0.7
					: 0;

		const baseScale = normalizedScale.value;
		const variation = (normalizedScale.randomVariation / 100) * baseScale;

		const particleScale =
			normalizedScale.randomize && normalizedScale.randomVariation > 0
				? randBetween(baseScale - variation, baseScale + variation)
				: baseScale;
		const safeScale = clamp(particleScale, 0.1, 4);

		let initialRotate = normalizedRotation.value;
		let endRotate = normalizedRotation.value;

		if (normalizedRotation.animate) {
			initialRotate = randBetween(-180, 180);
			endRotate = initialRotate + randBetween(-360, 360);
		}

		particleIdCounter += 1;

		const particle: Particle = {
			id: particleIdCounter,
			x,
			y,
			scale: safeScale,
			rotate: initialRotate,
			opacity: 1,
			vx: mapLinear(horizontalValue, -1, 1, -800, 800) + (rand() * 2 - 1) * 300,
			vy: mapLinear(verticalValue, -1, 1, -800, 800) + (rand() * 2 - 1) * 300,
			gravity: mapLinear(safeGravity, -1, 1, -2000, 2000),
			birthTime: performance.now(),
			lifeMs: safeDuration * 1000,
			contentIdx: items.length > 0 ? (particleIdCounter - 1) % items.length : -1,
			scaleStart: safeScale,
			scaleEnd: safeScale,
			rotateStart: initialRotate,
			rotateEnd: endRotate,
		};

		particles = [...particles, particle];

		const timeoutId = window.setTimeout(() => {
			removeParticle(particle.id);
		}, particle.lifeMs);

		particleTimeouts.set(particle.id, timeoutId);
	}

	function createParticlesAtPosition(x: number, y: number) {
		const particleCount = clamp(Math.round(toFiniteNumber(count, 1)), 1, 5);
		for (let index = 0; index < particleCount; index += 1) {
			spawnParticle(x, y);
		}
	}

	$effect(() => {
		if (!browser) return;

		const input = resolveTargetInput();
		if (!input) return;

		const handleInput = () => {
			const position = getInputSpawnPosition(input);
			if (position) {
				createParticlesAtPosition(position.x, position.y);
			}
		};

		input.addEventListener("input", handleInput);

		return () => {
			input.removeEventListener("input", handleInput);
		};
	});

	$effect(() => {
		if (!browser) return;

		const timeBits = (Date.now() & 4294967295) >>> 0;
		const extra = Math.floor(Math.random() * 4294967295) >>> 0;
		rand = createPRNG((timeBits ^ extra) >>> 0);

		let lastTime = performance.now();

		const updateParticles = (currentTime: number) => {
			const dt = Math.min(32, currentTime - lastTime) / 1000;
			lastTime = currentTime;
			const now = performance.now();

			particles = particles
				.map((particle) => {
					const age = now - particle.birthTime;
					if (age >= particle.lifeMs) {
						return null;
					}

					const progress = age / particle.lifeMs;
					const nextVy = particle.vy + particle.gravity * dt;
					const nextX = particle.x + particle.vx * dt;
					const nextY = particle.y + nextVy * dt;
					const nextScale = clamp(
						mapLinear(progress, 0, 1, particle.scaleStart, particle.scaleEnd),
						0.1,
						3
					);
					const nextRotate = mapLinear(
						progress,
						0,
						1,
						particle.rotateStart,
						particle.rotateEnd
					);
					const nextOpacity = progress > 0.7 ? mapLinear(progress, 0.7, 1, 1, 0) : 1;

					if (
						Number.isNaN(nextX) ||
						Number.isNaN(nextY) ||
						Number.isNaN(nextScale) ||
						Number.isNaN(nextRotate)
					) {
						return null;
					}

					return {
						...particle,
						x: nextX,
						y: nextY,
						vy: nextVy,
						scale: nextScale,
						rotate: nextRotate,
						opacity: nextOpacity,
					};
				})
				.filter((particle): particle is Particle => particle !== null);

			rafId = window.requestAnimationFrame(updateParticles);
		};

		rafId = window.requestAnimationFrame(updateParticles);

		return () => {
			if (rafId !== null) {
				window.cancelAnimationFrame(rafId);
				rafId = null;
			}

			for (const timeoutId of particleTimeouts.values()) {
				window.clearTimeout(timeoutId);
			}

			particleTimeouts.clear();
			particles = [];
		};
	});
</script>

<div
	bind:this={ref}
	data-slot="exploding-input"
	class={cn("spell-exploding-input", className)}
	style={rootStyle}
	aria-hidden="true"
	{...restProps}
>
	{#each particles as particle (particle.id)}
		<div
			data-slot="exploding-input-particle"
			class="pointer-events-none absolute top-0 left-0 flex items-center justify-center will-change-transform"
			style={`transform: translate(${particle.x}px, ${particle.y}px) translate(-50%, -50%) scale(${particle.scale}) rotate(${particle.rotate}deg); opacity: ${particle.opacity}; transform-origin: 50% 50%;`}
		>
			{#if items.length > 0}
				{@const item = items[particle.contentIdx]}
				{#if item !== undefined}
					{#if children}
						{@render children(item, particle.contentIdx)}
					{:else}
						<span>{String(item)}</span>
					{/if}
				{:else}
					<div class="h-4 w-4 rounded-[6px] bg-[#6366f1]"></div>
				{/if}
			{:else}
				<div class="h-4 w-4 rounded-[6px] bg-[#6366f1]"></div>
			{/if}
		</div>
	{/each}
</div>
