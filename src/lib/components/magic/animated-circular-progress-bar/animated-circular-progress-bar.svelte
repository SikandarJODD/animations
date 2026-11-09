<script lang="ts">
	import { cn } from "#lib/utils.js";

	interface AnimatedCircularProgressBarProps {
		max?: number;
		min?: number;
		value: number;
		gaugePrimaryColor: string;
		gaugeSecondaryColor: string;
		class?: string;
	}

	let {
		max = 100,
		min = 0,
		value = 0,
		gaugePrimaryColor,
		gaugeSecondaryColor,
		class: className,
	}: AnimatedCircularProgressBarProps = $props();

	const circumference = 2 * Math.PI * 45;
	const percentPx = circumference / 100;

	const currentPercent = $derived(Math.round(((value - min) / (max - min)) * 100));
</script>

<div
	class={cn("relative size-40 text-2xl font-semibold", className)}
	style="
    --circle-size: 100px;
    --circumference: {circumference};
    --percent-to-px: {percentPx}px;
    --gap-percent: 5;
    --offset-factor: 0;
    --transition-length: 1s;
    --transition-step: 200ms;
    --delay: 0s;
    --percent-to-deg: 3.6deg;
    transform: translateZ(0);
  "
>
	<svg fill="none" class="size-full" stroke-width="2" viewBox="0 0 100 100">
		{#if currentPercent <= 90 && currentPercent >= 0}
			<circle
				cx="50"
				cy="50"
				r="45"
				stroke-width="10"
				stroke-dashoffset="0"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="opacity-100"
				style="
          stroke: {gaugeSecondaryColor};
          --stroke-percent: {90 - currentPercent};
          --offset-factor-secondary: calc(1 - var(--offset-factor));
          stroke-dasharray: calc(var(--stroke-percent) * var(--percent-to-px)) var(--circumference);
          transform: rotate(calc(1turn - 90deg - (var(--gap-percent) * var(--percent-to-deg) * var(--offset-factor-secondary)))) scaleY(-1);
          transition: all var(--transition-length) ease var(--delay);
          transform-origin: calc(var(--circle-size) / 2) calc(var(--circle-size) / 2);
        "
			/>
		{/if}
		<circle
			cx="50"
			cy="50"
			r="45"
			stroke-width="10"
			stroke-dashoffset="0"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="opacity-100"
			style="
        stroke: {gaugePrimaryColor};
        --stroke-percent: {currentPercent};
        stroke-dasharray: calc(var(--stroke-percent) * var(--percent-to-px)) var(--circumference);
        transition: var(--transition-length) ease var(--delay), stroke var(--transition-length) ease var(--delay);
        transition-property: stroke-dasharray, transform;
        transform: rotate(calc(-90deg + var(--gap-percent) * var(--offset-factor) * var(--percent-to-deg)));
        transform-origin: calc(var(--circle-size) / 2) calc(var(--circle-size) / 2);
      "
		/>
	</svg>
	<span
		data-current-value={currentPercent}
		class="animate-in fade-in absolute inset-0 m-auto size-fit delay-(--delay) duration-(--transition-length) ease-linear"
	>
		{currentPercent}
	</span>
</div>
