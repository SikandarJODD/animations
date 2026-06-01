<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	import { useDimensions } from '$lib/hooks/use-dimension.svelte';
	import { cn } from '$lib/utils';

	type BlurStrength = 'light' | 'medium' | 'heavy';

	interface AnimatedGradientSvgProps extends HTMLAttributes<HTMLDivElement> {
		colors: string[];
		speed?: number;
		blur?: BlurStrength;
		class?: string;
	}

	interface BlobConfig {
		color: string;
		widthFactor: number;
		heightFactor: number;
		top: string;
		left: string;
		tx1: number;
		ty1: number;
		tx2: number;
		ty2: number;
		tx3: number;
		ty3: number;
		tx4: number;
		ty4: number;
	}

	let {
		colors,
		speed = 5,
		blur = 'light',
		class: className,
		...props
	}: AnimatedGradientSvgProps = $props();

	let containerRef = $state<HTMLDivElement | null>(null);

	const dimensions = useDimensions(() => containerRef);

	const circleSize = $derived(Math.max(dimensions.width, dimensions.height));
	const blurClass = $derived(
		blur === 'light' ? 'blur-2xl' : blur === 'medium' ? 'blur-3xl' : 'blur-[100px]'
	);

	function hashString(value: string) {
		let hash = 2166136261;

		for (let index = 0; index < value.length; index += 1) {
			hash ^= value.charCodeAt(index);
			hash = Math.imul(hash, 16777619);
		}

		return hash >>> 0;
	}

	function createSeededRandom(seed: number) {
		return () => {
			seed += 0x6d2b79f5;

			let t = seed;
			t = Math.imul(t ^ (t >>> 15), t | 1);
			t ^= t + Math.imul(t ^ (t >>> 7), t | 61);

			return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
		};
	}

	function randomBetween(random: () => number, min: number, max: number) {
		return min + (max - min) * random();
	}

	const blobConfigs = $derived.by<BlobConfig[]>(() =>
		colors.map((color, index) => {
			const random = createSeededRandom(hashString(`${color}-${index}`));

			return {
				color,
				widthFactor: randomBetween(random, 0.5, 1.5),
				heightFactor: randomBetween(random, 0.5, 1.5),
				top: `${randomBetween(random, 0, 50)}%`,
				left: `${randomBetween(random, 0, 50)}%`,
				tx1: randomBetween(random, -0.5, 0.5),
				ty1: randomBetween(random, -0.5, 0.5),
				tx2: randomBetween(random, -0.5, 0.5),
				ty2: randomBetween(random, -0.5, 0.5),
				tx3: randomBetween(random, -0.5, 0.5),
				ty3: randomBetween(random, -0.5, 0.5),
				tx4: randomBetween(random, -0.5, 0.5),
				ty4: randomBetween(random, -0.5, 0.5)
			};
		})
	);
</script>

<div bind:this={containerRef} class={cn('absolute inset-0 overflow-hidden', className)} {...props}>
	<div class={cn('absolute inset-0', blurClass)}>
		{#each blobConfigs as blob, index (`${blob.color}-${index}`)}
			<svg
				class="absolute"
				width={circleSize * blob.widthFactor}
				height={circleSize * blob.heightFactor}
				viewBox="0 0 100 100"
				style:top={blob.top}
				style:left={blob.left}
				style:animation={`background-gradient ${speed}s infinite ease-in-out`}
				style:--tx-1={blob.tx1}
				style:--ty-1={blob.ty1}
				style:--tx-2={blob.tx2}
				style:--ty-2={blob.ty2}
				style:--tx-3={blob.tx3}
				style:--ty-3={blob.ty3}
				style:--tx-4={blob.tx4}
				style:--ty-4={blob.ty4}
				aria-hidden="true"
			>
				<circle cx="50" cy="50" r="50" fill={blob.color} />
			</svg>
		{/each}
	</div>
</div>
