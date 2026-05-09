<script lang="ts">
	import { cn } from "$lib/utils";

	const VIEWBOX_W = 640;
	const VIEWBOX_H = 220;
	const PAD_X = 0;
	const PAD_Y_TOP = 24;
	const PAD_Y_BOTTOM = 12;
	const LINE_WIDTH = 2;
	const CORNER_RADIUS = 2.5;
	const TRANSITION = "200ms cubic-bezier(0.16, 1, 0.3, 1)";

	interface ChartProps {
		data: number[];
		labels?: string[];
		name?: string;
		color?: string;
		width?: number;
		formatValue?: (value: number, index: number) => string;
		defaultIndex?: number;
		showXAxis?: boolean;
		tickCount?: number;
		reveal?: boolean;
		showFill?: boolean;
		showDot?: boolean;
		animated?: boolean;
		class?: string;
	}

	let {
		data,
		labels,
		name,
		color = "#0090FD",
		width = 640,
		formatValue = (v) => v.toLocaleString(),
		defaultIndex,
		showXAxis = true,
		tickCount = 6,
		reveal = false,
		showFill = true,
		showDot = true,
		animated = true,
		class: className,
	}: ChartProps = $props();

	const uid = Math.random().toString(36).slice(2, 8);
	const grayFillId = `spell-chart-gf-${uid}`;
	const clipId = `spell-chart-clip-${uid}`;

	let root = $state<HTMLDivElement | null>(null);
	let activeIndex = $state<number>(defaultIndex ?? Math.max(0, data.length - 1));

	const transition = $derived(animated ? TRANSITION : "0ms");

	function buildRoundedPath(pts: { x: number; y: number }[], radius: number): string {
		if (pts.length === 0) return "";
		const f = (n: number) => n.toFixed(3);
		if (pts.length === 1) return `M${f(pts[0].x)} ${f(pts[0].y)}`;
		let d = `M${f(pts[0].x)} ${f(pts[0].y)}`;
		for (let i = 1; i < pts.length - 1; i++) {
			const prev = pts[i - 1];
			const curr = pts[i];
			const next = pts[i + 1];
			const inDx = curr.x - prev.x;
			const inDy = curr.y - prev.y;
			const inLen = Math.hypot(inDx, inDy) || 1;
			const outDx = next.x - curr.x;
			const outDy = next.y - curr.y;
			const outLen = Math.hypot(outDx, outDy) || 1;
			const r = Math.min(radius, inLen / 2, outLen / 2);
			const bx = curr.x - (inDx / inLen) * r;
			const by = curr.y - (inDy / inLen) * r;
			const ax = curr.x + (outDx / outLen) * r;
			const ay = curr.y + (outDy / outLen) * r;
			d += ` L${f(bx)} ${f(by)} Q${f(curr.x)} ${f(curr.y)} ${f(ax)} ${f(ay)}`;
		}
		const last = pts[pts.length - 1];
		d += ` L${f(last.x)} ${f(last.y)}`;
		return d;
	}

	const points = $derived.by(() => {
		const n = data.length;
		if (n === 0) return [];
		const minV = Math.min(...data);
		const maxV = Math.max(...data);
		const range = maxV - minV || 1;
		const innerW = VIEWBOX_W - 2 * PAD_X;
		const innerH = VIEWBOX_H - PAD_Y_TOP - PAD_Y_BOTTOM;
		return data.map((value, i) => ({
			value,
			index: i,
			x: PAD_X + (n === 1 ? innerW / 2 : (i / (n - 1)) * innerW),
			y: PAD_Y_TOP + (1 - (value - minV) / range) * innerH,
		}));
	});

	const paths = $derived.by(() => {
		if (points.length === 0) return { stroke: "", fill: "" };
		const stroke = buildRoundedPath(points, CORNER_RADIUS);
		const last = points[points.length - 1];
		const first = points[0];
		const baseY = VIEWBOX_H - PAD_Y_BOTTOM;
		const fill = `${stroke} L${last.x.toFixed(3)} ${baseY} L${first.x.toFixed(3)} ${baseY} Z`;
		return { stroke, fill };
	});

	const active = $derived(points[Math.min(activeIndex, points.length - 1)] ?? points[0]);
	const activeXPct = $derived(active ? active.x / VIEWBOX_W : 0);
	const activeYPct = $derived(active ? active.y / VIEWBOX_H : 0);

	const axisVisible = $derived(showXAxis && !!labels && labels.length > 0);

	const tickIndices = $derived.by(() => {
		if (!axisVisible) return [];
		const n = points.length;
		const count = Math.min(tickCount, n);
		if (count <= 1) return [0];
		return Array.from({ length: count }, (_, i) => Math.round((i * (n - 1)) / (count - 1)));
	});

	function onMove(e: MouseEvent) {
		if (!root || points.length === 0) return;
		const rect = root.getBoundingClientRect();
		const rel = (e.clientX - rect.left) / rect.width;
		const innerLeft = PAD_X / VIEWBOX_W;
		const innerRight = (VIEWBOX_W - PAD_X) / VIEWBOX_W;
		const t = (rel - innerLeft) / (innerRight - innerLeft);
		const idx = Math.round(t * (points.length - 1));
		activeIndex = Math.max(0, Math.min(points.length - 1, idx));
	}
</script>

{#if points.length > 0 && active}
	<div
		style={`max-width: ${width}px; --spell-color: ${color};`}
		class={cn(
			"w-full select-none",
			"[--spell-line:#c7c7c7] [--spell-badge:#e8e8e8]",
			"dark:[--spell-line:#4f4f4f] dark:[--spell-badge:#2d2d2d]",
			className
		)}
	>
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			bind:this={root}
			onmousemove={onMove}
			class="relative w-full touch-none"
			style="aspect-ratio: 640 / 220;"
			aria-label={name ? `${name} line chart` : "Line chart"}
		>
			<svg
				width="100%"
				height="100%"
				viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
				fill="none"
				preserveAspectRatio="xMidYMid meet"
				style="overflow: visible;"
			>
				<defs>
					<linearGradient
						id={grayFillId}
						x1={VIEWBOX_W / 2}
						y1={PAD_Y_TOP}
						x2={VIEWBOX_W / 2}
						y2={VIEWBOX_H}
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="var(--spell-badge)" />
						<stop offset="1" stop-color="var(--spell-badge)" stop-opacity="0" />
					</linearGradient>
					<clipPath id={clipId} clipPathUnits="userSpaceOnUse">
						<rect
							x={0}
							y={0}
							width={VIEWBOX_W}
							height={VIEWBOX_H}
							style={`transform: scaleX(${activeXPct}); transform-origin: left center; transition: transform ${transition};`}
						/>
					</clipPath>
				</defs>

				{#if showFill}
					<path d={paths.fill} fill={`url(#${grayFillId})`} />
				{/if}

				{#if reveal}
					<path
						d={paths.stroke}
						stroke="var(--spell-line)"
						stroke-width="2.2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<g clip-path={`url(#${clipId})`}>
						<path
							d={paths.stroke}
							stroke="var(--spell-color)"
							stroke-width="2.2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</g>
				{:else}
					<path
						d={paths.stroke}
						stroke="var(--spell-color)"
						stroke-width="2.2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				{/if}
			</svg>

			<!-- Vertical cursor line -->
			<div
				class="pointer-events-none absolute rounded-full bg-[var(--spell-line)]"
				style={`width: ${LINE_WIDTH}px; left: ${activeXPct * 100}%; top: ${(PAD_Y_TOP / VIEWBOX_H) * 100}%; height: ${((VIEWBOX_H - PAD_Y_TOP - PAD_Y_BOTTOM / 2) / VIEWBOX_H) * 100}%; transform: translateX(-${LINE_WIDTH / 2}px); transition: left ${transition};`}
			></div>

			<!-- Active dot -->
			{#if showDot}
				<div
					class="pointer-events-none absolute z-10 h-3 w-3 rounded-full bg-[var(--spell-color)]"
					style={`left: ${activeXPct * 100}%; top: ${activeYPct * 100}%; transform: translate(-50%, -50%); box-shadow: 0 0 0 2px #FFF, 0 0 8px 2px rgba(0,0,0,0.12); transition: left ${transition}, top ${transition};`}
				></div>
			{/if}

			<!-- Tooltip card -->
			<div
				class="pointer-events-none absolute z-20 grid min-w-32 items-start gap-1.5 rounded-lg bg-background px-2.5 py-1.5 text-xs"
				style={`left: ${activeXPct * 100}%; top: ${activeYPct * 100}%; transform: ${activeXPct > 0.65 ? "translate(calc(-100% - 12px), -50%)" : "translate(12px, -50%)"}; transition: left ${transition}, top ${transition}, transform ${transition}; box-shadow: 0 0 0 1px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.04), 0 4px 16px -4px rgba(0,0,0,0.12), 0 12px 32px -8px rgba(0,0,0,0.08);`}
			>
				{#if labels?.[active.index]}
					<div class="font-medium text-foreground">{labels[active.index]}</div>
				{/if}
				<div class="flex w-full items-center gap-2">
					<div class="h-2.5 w-2.5 shrink-0 rounded-[2px]" style={`background: ${color};`}></div>
					<div class="flex flex-1 items-center justify-between gap-3 leading-none">
						{#if name}
							<span class="whitespace-nowrap text-muted-foreground">{name}</span>
						{/if}
						<span class="ml-auto font-mono font-medium tabular-nums text-foreground">
							{formatValue(active.value, active.index)}
						</span>
					</div>
				</div>
			</div>
		</div>

		<!-- X-axis tick labels -->
		{#if axisVisible}
			<div class="relative mt-2 h-5">
				{#each tickIndices as i (i)}
					{@const pt = points[i]}
					{@const xPct = pt.x / VIEWBOX_W}
					<div
						class="absolute top-0 -translate-x-1/2 whitespace-nowrap text-[11px] leading-none tabular-nums text-muted-foreground"
						style={`left: ${xPct * 100}%;`}
					>
						{labels![i]}
					</div>
				{/each}
			</div>
		{/if}
	</div>
{/if}
