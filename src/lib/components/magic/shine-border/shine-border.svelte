<script lang="ts">
	import { cn } from "#lib/utils.js";
	import type { HTMLAttributes } from "svelte/elements";

	interface Props extends HTMLAttributes<HTMLDivElement> {
		borderWidth?: number;
		duration?: number;
		shineColor?: string | string[];
	}

	let {
		borderWidth = 1,
		duration = 14,
		shineColor = "#000000",
		class: className,
		style,
		...restProps
	}: Props = $props();

	let computedStyle = $derived.by(() => {
		const shineColorValue = Array.isArray(shineColor) ? shineColor.join(",") : shineColor;

		const baseStyles = `
			--border-width: ${borderWidth}px;
			--duration: ${duration}s;
			background-image: radial-gradient(transparent,transparent, ${shineColorValue},transparent,transparent);
			background-size: 300% 300%;
			mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
			-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
			-webkit-mask-composite: xor;
			mask-composite: exclude;
			padding: var(--border-width);
		`;

		return style ? `${baseStyles} ${style}` : baseStyles;
	});
</script>

<!-- svelte-ignore element_invalid_self_closing_tag -->
<div
	style={computedStyle}
	class={cn(
		"motion-safe:animate-shine pointer-events-none absolute inset-0 size-full rounded-[inherit] will-change-[background-position]",
		className
	)}
	{...restProps}
/>
