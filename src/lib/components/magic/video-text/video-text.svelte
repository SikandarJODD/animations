<script lang="ts">
	import type { ClassValue } from "svelte/elements";
	import { onMount } from "svelte";
	import { cn } from "#lib/utils.js";
	import { watch } from "runed";

	interface VideoTextProps {
		src: string;
		content: string;
		class?: ClassValue;
		autoPlay?: boolean;
		muted?: boolean;
		loop?: boolean;
		preload?: "auto" | "metadata" | "none";
		fontSize?: string | number;
		fontWeight?: string | number;
		textAnchor?: string;
		dominantBaseline?: string;
		fontFamily?: string;
	}

	let {
		src,
		content,
		class: className = "",
		autoPlay = true,
		muted = true,
		loop = true,
		preload = "auto",
		fontSize = 20,
		fontWeight = "bold",
		textAnchor = "middle",
		dominantBaseline = "middle",
		fontFamily = "sans-serif",
	}: VideoTextProps = $props();

	let svgMask = $state("");

	let updateSvgMask = () => {
		const responsiveFontSize = typeof fontSize === "number" ? `${fontSize}vw` : fontSize;
		const newSvgMask = `<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><text x='50%' y='50%' font-size='${responsiveFontSize}' font-weight='${fontWeight}' text-anchor='${textAnchor}' dominant-baseline='${dominantBaseline}' font-family='${fontFamily}'>${content}</text></svg>`;
		svgMask = newSvgMask;
	};
	// Handle window resize
	onMount(() => {
		window.addEventListener("resize", updateSvgMask);
		// return () => window.removeEventListener("resize", updateSvgMask);
	});

	let dataUrlMask = $derived(`url("data:image/svg+xml,${encodeURIComponent(svgMask)}")`);

	// Update SVG mask when content or settings change
	watch(
		[
			() => content,
			() => fontSize,
			() => fontWeight,
			() => textAnchor,
			() => dominantBaseline,
			() => fontFamily,
		],
		() => {
			updateSvgMask();
		}
	);
</script>

<div class={cn("relative size-full", className)}>
	<!-- Create a container that masks the video to only show within text -->
	<div
		class="absolute inset-0 flex items-center justify-center"
		style="
      mask-image: {dataUrlMask};
      -webkit-mask-image: {dataUrlMask};
      mask-size: contain;
      -webkit-mask-size: contain;
      mask-repeat: no-repeat;
      -webkit-mask-repeat: no-repeat;
      mask-position: center;
      -webkit-mask-position: center;
    "
	>
		<video
			class="h-full w-full object-cover"
			autoplay={autoPlay}
			{muted}
			{loop}
			{preload}
			playsinline
		>
			<source {src} />
			Your browser does not support the video tag.
		</video>
	</div>

	<!-- Add a backup text element for SEO/accessibility -->
	<span class="sr-only">{content}</span>
</div>
