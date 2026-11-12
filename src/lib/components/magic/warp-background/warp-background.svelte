<script lang="ts">
	import { motion } from "motion-sv";
	import { cn } from "#lib/utils.js";
	import type { Snippet } from "svelte";
	import type { ClassValue, HTMLAttributes } from "svelte/elements";

	interface BeamProps {
		width: string | number;
		x: string | number;
		delay: number;
		duration: number;
	}

	interface WarpBackgroundProps extends HTMLAttributes<HTMLDivElement> {
		children: Snippet;
		class?: ClassValue;
		perspective?: number;
		beamsPerSide?: number;
		beamSize?: number;
		beamDelayMax?: number;
		beamDelayMin?: number;
		beamDuration?: number;
		gridColor?: string;
	}

	let {
		children,
		perspective = 100,
		class: className,
		beamsPerSide = 3,
		beamSize = 5,
		beamDelayMax = 3,
		beamDelayMin = 0,
		beamDuration = 3,
		gridColor = "var(--border)",
		...props
	}: WarpBackgroundProps = $props();

	const generateBeams = () => {
		const beams = [];
		const cellsPerSide = Math.floor(100 / beamSize);
		const step = cellsPerSide / beamsPerSide;

		for (let i = 0; i < beamsPerSide; i++) {
			const x = Math.floor(i * step);
			const delay = Math.random() * (beamDelayMax - beamDelayMin) + beamDelayMin;
			beams.push({ x, delay });
		}
		return beams;
	};

	const topBeams = generateBeams();
	const rightBeams = generateBeams();
	const bottomBeams = generateBeams();
	const leftBeams = generateBeams();

	const containerStyle = $derived(`
    --perspective: ${perspective}px;
    --grid-color: ${gridColor};
    --beam-size: ${beamSize}%;
  `);
</script>

<div class={cn("relative rounded border p-20", className)} {...props}>
	<div
		style={containerStyle}
		class="@container-[size] pointer-events-none absolute top-0 left-0 size-full overflow-hidden [clipPath:inset(0)] perspective-(--perspective) transform-3d"
	>
		<!-- top side -->
		<div
			class="@container absolute z-20 h-[100cqmax] w-[100cqi] origin-[50%_0%] transform-[rotateX(-90deg)] bg-size-[var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] transform-3d"
		>
			{#each topBeams as beam, index}
				{@const hue = Math.floor(Math.random() * 360)}
				{@const ar = Math.floor(Math.random() * 10) + 1}
				<motion.div
					style={{
						"--x": `${beam.x * beamSize}%`,
						"--width": `${beamSize}%`,
						"--aspect-ratio": `${ar}`,
						"--background": `linear-gradient(hsl(${hue} 80% 60%), transparent)`,
					}}
					class="absolute top-0 left-(--x) aspect-[1/var(--aspect-ratio)] w-(--width) [background:var(--background)]"
					initial={{ y: "100cqmax", x: "-50%" }}
					animate={{ y: "-100%", x: "-50%" }}
					transition={{
						duration: beamDuration,
						delay: beam.delay,
						repeat: Infinity,
						ease: "linear",
					}}
				/>
			{/each}
		</div>
		<!-- bottom side -->
		<div
			class="@container absolute top-full h-[100cqmax] w-[100cqi] origin-[50%_0%] transform-[rotateX(-90deg)] bg-size-[var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] transform-3d"
		>
			{#each bottomBeams as beam, index}
				{@const hue = Math.floor(Math.random() * 360)}
				{@const ar = Math.floor(Math.random() * 10) + 1}
				<motion.div
					style={{
						"--x": `${beam.x * beamSize}%`,
						"--width": `${beamSize}%`,
						"--aspect-ratio": `${ar}`,
						"--background": `linear-gradient(hsl(${hue} 80% 60%), transparent)`,
					}}
					class="absolute top-0 left-(--x) aspect-[1/var(--aspect-ratio)] w-(--width) [background:var(--background)]"
					initial={{ y: "100cqmax", x: "-50%" }}
					animate={{ y: "-100%", x: "-50%" }}
					transition={{
						duration: beamDuration,
						delay: beam.delay,
						repeat: Infinity,
						ease: "linear",
					}}
				/>
			{/each}
		</div>
		<!-- left side -->
		<div
			class="@container absolute top-0 left-0 h-[100cqmax] w-[100cqh] origin-[0%_0%] transform-[rotate(90deg)_rotateX(-90deg)] bg-size-[var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] transform-3d"
		>
			{#each leftBeams as beam, index}
				{@const hue = Math.floor(Math.random() * 360)}
				{@const ar = Math.floor(Math.random() * 10) + 1}
				<motion.div
					style={{
						"--x": `${beam.x * beamSize}%`,
						"--width": `${beamSize}%`,
						"--aspect-ratio": `${ar}`,
						"--background": `linear-gradient(hsl(${hue} 80% 60%), transparent)`,
					}}
					class="absolute top-0 left-(--x) aspect-[1/var(--aspect-ratio)] w-(--width) [background:var(--background)]"
					initial={{ y: "100cqmax", x: "-50%" }}
					animate={{ y: "-100%", x: "-50%" }}
					transition={{
						duration: beamDuration,
						delay: beam.delay,
						repeat: Infinity,
						ease: "linear",
					}}
				/>
			{/each}
		</div>
		<!-- right side -->
		<div
			class="@container absolute top-0 right-0 h-[100cqmax] w-[100cqh] origin-[100%_0%] transform-[rotate(-90deg)_rotateX(-90deg)] bg-size-[var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,var(--grid-color)_0_1px,transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] transform-3d"
		>
			{#each rightBeams as beam, index}
				{@const hue = Math.floor(Math.random() * 360)}
				{@const ar = Math.floor(Math.random() * 10) + 1}
				<motion.div
					style={{
						"--x": `${beam.x * beamSize}%`,
						"--width": `${beamSize}%`,
						"--aspect-ratio": `${ar}`,
						"--background": `linear-gradient(hsl(${hue} 80% 60%), transparent)`,
					}}
					class="absolute top-0 left-(--x) aspect-[1/var(--aspect-ratio)] w-(--width) [background:var(--background)]"
					initial={{ y: "100cqmax", x: "-50%" }}
					animate={{ y: "-100%", x: "-50%" }}
					transition={{
						duration: beamDuration,
						delay: beam.delay,
						repeat: Infinity,
						ease: "linear",
					}}
				/>
			{/each}
		</div>
	</div>
	<div class="relative">
		{@render children()}
	</div>
</div>
