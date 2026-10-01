<script lang="ts" module>
	import type { WithElementRef } from "$lib/utils.js";
	import type { HTMLAttributes } from "svelte/elements";

	export type AnnotationDirection =
		"n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "nw";
	export type AnnotationColor =
		"amber" | "blue" | "green" | "red" | "purple" | "rainbow";

	export type AnnotationProps = WithElementRef<
		HTMLAttributes<HTMLSpanElement>,
		HTMLSpanElement
	> & {
		note?: string;
		direction?: AnnotationDirection;
		color?: AnnotationColor;
		customColor?: string;
		mark?: string;
		font?: string;
		targetGap?: string;
		labelGap?: string;
		lowerLabelGap?: string;
		labelMaxWidth?: string;
		arrowX?: string;
		arrowY?: string;
		textX?: string;
		textY?: string;
		rotate?: string;
		noMark?: boolean;
	};
</script>

<script lang="ts">
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		note,
		direction = "n",
		color,
		customColor,
		mark,
		font,
		targetGap,
		labelGap,
		lowerLabelGap,
		labelMaxWidth,
		arrowX,
		arrowY,
		textX,
		textY,
		rotate,
		noMark = false,
		class: className,
		children,
		...restProps
	}: AnnotationProps = $props();
</script>

<span
	bind:this={ref}
	data-slot="annotation"
	data-note={note}
	class={cn(
		"ann",
		note && `ann-${direction}`,
		color && `ann-${color}`,
		noMark && "ann-no-mark",
		className
	)}
	style:--ann-color={customColor}
	style:--ann-mark={noMark ? "transparent" : mark}
	style:--ann-font={font}
	style:--ann-target-gap={targetGap}
	style:--ann-label-gap={labelGap}
	style:--ann-lower-label-gap={lowerLabelGap}
	style:--ann-label-max-width={labelMaxWidth}
	style:--ann-arrow-x={arrowX}
	style:--ann-arrow-y={arrowY}
	style:--ann-text-x={textX}
	style:--ann-text-y={textY}
	style:--ann-rotate={rotate}
	{...restProps}
>
	{@render children?.()}
</span>
