<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils";

	type Color = `#${string}`;
	type RGBA = `rgba(${number},${number},${number},${number})`;

	interface GlareHoverProps extends HTMLAttributes<HTMLDivElement> {
		children?: Snippet;
		width?: string;
		height?: string;
		background?: string;
		color?: Color;
		opacity?: number;
		angle?: number;
		size?: number;
		duration?: number;
		playOnce?: boolean;
	}

	function parseHEX(color: Color, opacity: number): RGBA | Color {
		const hex = color.replace("#", "");
		const parse = (h: string) => Number.parseInt(h, 16);

		if (/^[0-9A-Fa-f]{6}$/.test(hex)) {
			return `rgba(${parse(hex.slice(0, 2))},${parse(hex.slice(2, 4))},${parse(hex.slice(4, 6))},${opacity})`;
		}

		if (/^[0-9A-Fa-f]{3}$/.test(hex)) {
			return `rgba(${parse(hex[0] + hex[0])},${parse(hex[1] + hex[1])},${parse(hex[2] + hex[2])},${opacity})`;
		}

		return color;
	}

	let {
		children,
		width,
		height,
		background = "#000",
		color = "#ffffff",
		opacity = 0.5,
		angle = -45,
		size = 250,
		duration = 650,
		playOnce = false,
		class: className,
		style: styleProp,
		...restProps
	}: GlareHoverProps = $props();

	const rgba = $derived(parseHEX(color, opacity));
	const rootStyle = $derived(
		[
			`--gh-angle: ${angle}deg`,
			`--gh-duration: ${duration}ms`,
			`--gh-size: ${size}%`,
			`--gh-rgba: ${rgba}`,
			`background: ${background}`,
			styleProp,
			width !== undefined ? `width: ${width}` : undefined,
			height !== undefined ? `height: ${height}` : undefined,
		]
			.filter(
				(value): value is string => value !== undefined && value !== null && value !== ""
			)
			.join("; ")
	);
</script>

<div
	class={cn(
		"relative grid size-fit cursor-pointer place-items-center overflow-hidden bg-transparent",
		"before:pointer-events-none before:absolute before:inset-0 before:z-10 before:bg-no-repeat before:content-['']",
		"before:bg-[linear-gradient(var(--gh-angle),transparent_60%,var(--gh-rgba)_70%,transparent,transparent_100%)]",
		"before:bg-size-[var(--gh-size)_var(--gh-size),100%_100%]",
		"before:bg-position-[-100%_-100%,0_0]",
		!playOnce &&
			"before:transition-[background-position] before:duration-(--gh-duration) before:ease-in-out",
		playOnce &&
			"before:transition-none hover:before:transition-[background-position] hover:before:duration-(--gh-duration)",
		"hover:before:bg-position-[100%_100%,0_0]",
		className
	)}
	style={rootStyle}
	{...restProps}
>
	{@render children?.()}
</div>
