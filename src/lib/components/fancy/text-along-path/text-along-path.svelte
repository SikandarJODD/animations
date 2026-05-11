<script lang="ts">
	import { useScroll, type UseScrollOptions } from "motion-sv";
	import type { SVGAttributes } from "svelte/elements";

	type PreserveAspectRatioAlign =
		| "none"
		| "xMinYMin"
		| "xMidYMin"
		| "xMaxYMin"
		| "xMinYMid"
		| "xMidYMid"
		| "xMaxYMid"
		| "xMinYMax"
		| "xMidYMax"
		| "xMaxYMax";

	type PreserveAspectRatioMeetOrSlice = "meet" | "slice";
	type PreserveAspectRatio =
		| PreserveAspectRatioAlign
		| `${Exclude<PreserveAspectRatioAlign, "none">} ${PreserveAspectRatioMeetOrSlice}`;

	interface TextAlongPathProps extends SVGAttributes<SVGSVGElement> {
		path: string;
		pathId?: string;
		pathClass?: string;
		preserveAspectRatio?: PreserveAspectRatio;
		showPath?: boolean;
		width?: string | number;
		height?: string | number;
		viewBox?: string;
		svgClass?: string;
		text: string;
		textClass?: string;
		textAnchor?: "start" | "middle" | "end";
		animationType?: "auto" | "scroll";
		duration?: number;
		repeatCount?: number | "indefinite";
		easingFunction?: {
			calcMode?: string;
			keyTimes?: string;
			keySplines?: string;
		};
		scrollContainer?: HTMLElement | null;
		scrollOffset?: UseScrollOptions["offset"];
		scrollTransformValues?: [number, number];
	}

	const defaultScrollOffset: UseScrollOptions["offset"] = ["start end", "end end"];

	let {
		path,
		pathId,
		pathClass,
		preserveAspectRatio = "xMidYMid meet",
		showPath = false,
		width = "100%",
		height = "100%",
		viewBox = "0 0 100 100",
		svgClass,
		text,
		textClass,
		textAnchor = "start",
		animationType = "auto",
		duration = 4,
		repeatCount = "indefinite",
		easingFunction = {},
		scrollContainer,
		scrollOffset = defaultScrollOffset,
		scrollTransformValues = [0, 100],
		...props
	}: TextAlongPathProps = $props();

	const componentId = $props.id();

	let primaryTextPath = $state<SVGTextPathElement | undefined>();
	let secondaryTextPath = $state<SVGTextPathElement | undefined>();

	let resolvedPathId = $derived(pathId ?? `animated-path-${componentId}`);
	let isAuto = $derived(animationType === "auto");
	let autoDuration = $derived(`${duration}s`);

	// `motion-sv` accepts getter-based scroll options at runtime even though the
	// current Svelte type only exposes the resolved object form.
	let scroll = useScroll((() => ({
		container: scrollContainer,
		offset: scrollOffset,
	})) as unknown as UseScrollOptions);

	function updateStartOffsets(offset: string) {
		primaryTextPath?.setAttribute("startOffset", offset);
		secondaryTextPath?.setAttribute("startOffset", offset);
	}

	$effect(() => {
		if (animationType !== "scroll") {
			return;
		}

		primaryTextPath;
		secondaryTextPath;
		scrollContainer;
		scrollOffset;
		scrollTransformValues;

		const updateFromScroll = () => {
			const progress = Math.min(1, Math.max(0, scroll.scrollYProgress.get()));
			const [start, end] = scrollTransformValues;
			const offset = start + (end - start) * progress;

			updateStartOffsets(`${offset}%`);
		};

		updateFromScroll();

		return scroll.scrollYProgress.on("change", updateFromScroll);
	});
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	class={svgClass}
	{width}
	{height}
	{viewBox}
	{preserveAspectRatio}
	{...props}
>
	<path
		id={resolvedPathId}
		class={pathClass}
		d={path}
		stroke={showPath ? "currentColor" : "none"}
		fill="none"
	/>

	<text text-anchor={textAnchor} fill="currentColor">
		<textPath
			bind:this={primaryTextPath}
			class={textClass}
			href={`#${resolvedPathId}`}
			startOffset="0%"
		>
			{#if isAuto}
				<animate
					attributeName="startOffset"
					from="0%"
					to="100%"
					begin="0s"
					dur={autoDuration}
					repeatCount={repeatCount}
					calcMode={easingFunction.calcMode}
					keyTimes={easingFunction.keyTimes}
					keySplines={easingFunction.keySplines}
				/>
			{/if}
			{text}
		</textPath>
	</text>

	{#if isAuto}
		<text text-anchor={textAnchor} fill="currentColor">
			<textPath
				bind:this={secondaryTextPath}
				class={textClass}
				href={`#${resolvedPathId}`}
				startOffset="-100%"
			>
				<animate
					attributeName="startOffset"
					from="-100%"
					to="0%"
					begin="0s"
					dur={autoDuration}
					repeatCount={repeatCount}
					calcMode={easingFunction.calcMode}
					keyTimes={easingFunction.keyTimes}
					keySplines={easingFunction.keySplines}
				/>
				{text}
			</textPath>
		</text>
	{/if}
</svg>
