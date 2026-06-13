<script lang="ts">
	import type { SVGAttributes } from "svelte/elements";
	import { cn } from "$lib/utils";

	interface NoiseTextureProps extends SVGAttributes<SVGSVGElement> {
		class?: string;
		/**
		 * `baseFrequency` for `feTurbulence`; higher values yield finer-grained noise.
		 * @default 0.4
		 */
		frequency?: number;
		/**
		 * `numOctaves` for `feTurbulence`; more octaves add detail at smaller scales.
		 * @default 6
		 */
		octaves?: number;
		/**
		 * Linear slope on each channel after desaturation; adjusts contrast of the noise.
		 * @default 0.15
		 */
		slope?: number;
		/**
		 * Opacity of the filled noise layer (`rect`).
		 * @default 0.6
		 */
		noiseOpacity?: number;
	}

	let {
		class: className,
		frequency = 0.4,
		octaves = 6,
		slope = 0.15,
		noiseOpacity = 0.6,
        ...props
	}: NoiseTextureProps = $props();

    let filterId = $props.id();
</script>

<svg
	class={cn(
		"pointer-events-none absolute inset-0 z-0 size-full opacity-50 select-none dark:opacity-[0.75]",
		className
	)}
	xmlns="http://www.w3.org/2000/svg"
	{...props}
>
	<filter id={filterId}>
		<feTurbulence
			type="fractalNoise"
			baseFrequency={frequency}
			numOctaves={octaves}
			stitchTiles="stitch"
		/>
		<feColorMatrix type="saturate" values="0" />
		<feComponentTransfer>
			<feFuncR type="linear" {slope} />
			<feFuncG type="linear" {slope} />
			<feFuncB type="linear" {slope} />
		</feComponentTransfer>
	</filter>
	<rect width="100%" height="100%" filter={`url(#${filterId})`} opacity={noiseOpacity} />
</svg>
