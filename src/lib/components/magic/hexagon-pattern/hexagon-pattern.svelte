<script lang="ts">
	import { cn } from "$lib/utils";
	import type { SVGAttributes } from "svelte/elements";

	type Direction = "horizontal" | "vertical";
	type HexPoint = readonly [number, number];

	interface HexagonPatternProps extends SVGAttributes<SVGSVGElement> {
		radius?: number;
		gap?: number;
		x?: number;
		y?: number;
		direction?: Direction;
		strokeDasharray?: string;
		hexagons?: Array<[col: number, row: number]>;
		class?: string;
	}

	function hexVertexList(cx: number, cy: number, r: number, direction: Direction): HexPoint[] {
		const startAngle = direction === "horizontal" ? 0 : 30;
		return Array.from({ length: 6 }, (_, i) => {
			const angle = ((startAngle + i * 60) * Math.PI) / 180;
			return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)] as const;
		});
	}

	function hexPoints(cx: number, cy: number, r: number, direction: Direction): string {
		return hexVertexList(cx, cy, r, direction)
			.map(([px, py]) => `${px},${py}`)
			.join(" ");
	}

	function edgeLexKey(a: HexPoint, b: HexPoint): string {
		const [p, q] = a[0] < b[0] || (a[0] === b[0] && a[1] <= b[1]) ? [a, b] : [b, a];
		return `${p[0].toFixed(6)},${p[1].toFixed(6)}|${q[0].toFixed(6)},${q[1].toFixed(6)}`;
	}

	function collectUniqueHexEdges(
		centers: [number, number][],
		r: number,
		direction: Direction
	): [HexPoint, HexPoint][] {
		const seen = new Set<string>();
		const edges: [HexPoint, HexPoint][] = [];

		for (const [cx, cy] of centers) {
			const verts = hexVertexList(cx, cy, r, direction);
			for (let i = 0; i < 6; i++) {
				const a = verts[i];
				const b = verts[(i + 1) % 6];
				const key = edgeLexKey(a, b);
				if (!seen.has(key)) {
					seen.add(key);
					edges.push([a, b]);
				}
			}
		}

		return edges;
	}

	function isSolidStrokeDasharray(strokeDasharray: string): boolean {
		const t = strokeDasharray.trim();
		return t === "" || t === "none" || t === "0";
	}

	function getHexSpacing(
		r: number,
		direction: Direction,
		gap: number
	): {
		colStep: number;
		rowStep: number;
		tileW: number;
		tileH: number;
	} {
		const sqrt3 = Math.sqrt(3);

		if (direction === "horizontal") {
			const colStep = (3 * r) / 2 + (sqrt3 * gap) / 2;
			const rowStep = sqrt3 * r + gap;

			return {
				colStep,
				rowStep,
				tileW: colStep * 2,
				tileH: rowStep,
			};
		}

		const colStep = sqrt3 * r + gap;
		const rowStep = (3 * r) / 2 + (sqrt3 * gap) / 2;

		return {
			colStep,
			rowStep,
			tileW: colStep,
			tileH: rowStep * 2,
		};
	}

	function getTileGeometry(
		r: number,
		direction: Direction,
		gap: number
	): {
		tileW: number;
		tileH: number;
		centers: [number, number][];
	} {
		if (direction === "horizontal") {
			const { colStep, rowStep, tileW, tileH } = getHexSpacing(r, direction, gap);
			const canonical: [number, number][] = [
				[colStep / 2, rowStep / 2],
				[(colStep * 3) / 2, rowStep],
			];

			const centers: [number, number][] = [];
			for (const [cx, cy] of canonical) {
				centers.push([cx, cy]);
				if (cy - r < 0) centers.push([cx, cy + tileH]);
				if (cy + r > tileH) centers.push([cx, cy - tileH]);
				if (cx - r < 0) centers.push([cx + tileW, cy]);
				if (cx + r > tileW) centers.push([cx - tileW, cy]);
				if (cy - r < 0 && cx - r < 0) centers.push([cx + tileW, cy + tileH]);
				if (cy - r < 0 && cx + r > tileW) centers.push([cx - tileW, cy + tileH]);
				if (cy + r > tileH && cx - r < 0) centers.push([cx + tileW, cy - tileH]);
				if (cy + r > tileH && cx + r > tileW) centers.push([cx - tileW, cy - tileH]);
			}

			return { tileW, tileH, centers };
		}

		const { colStep, rowStep, tileW, tileH } = getHexSpacing(r, direction, gap);
		const canonical: [number, number][] = [
			[colStep / 2, rowStep / 2],
			[colStep, (rowStep * 3) / 2],
		];

		const centers: [number, number][] = [];
		for (const [cx, cy] of canonical) {
			centers.push([cx, cy]);
			if (cy - r < 0) centers.push([cx, cy + tileH]);
			if (cy + r > tileH) centers.push([cx, cy - tileH]);
			if (cx - r < 0) centers.push([cx + tileW, cy]);
			if (cx + r > tileW) centers.push([cx - tileW, cy]);
			if (cy - r < 0 && cx - r < 0) centers.push([cx + tileW, cy + tileH]);
			if (cy - r < 0 && cx + r > tileW) centers.push([cx - tileW, cy + tileH]);
			if (cy + r > tileH && cx - r < 0) centers.push([cx + tileW, cy - tileH]);
			if (cy + r > tileH && cx + r > tileW) centers.push([cx - tileW, cy - tileH]);
		}

		return { tileW, tileH, centers };
	}

	function hexCenter(
		col: number,
		row: number,
		r: number,
		direction: Direction,
		gap: number
	): [number, number] {
		if (direction === "horizontal") {
			const { colStep, rowStep } = getHexSpacing(r, direction, gap);
			const x = col * colStep + colStep / 2;
			const y = row * rowStep + rowStep / 2 + (col % 2 !== 0 ? rowStep / 2 : 0);
			return [x, y];
		}

		const { colStep, rowStep } = getHexSpacing(r, direction, gap);
		const x = col * colStep + colStep / 2 + (row % 2 !== 0 ? colStep / 2 : 0);
		const y = row * rowStep + rowStep / 2;
		return [x, y];
	}

	let {
		radius = 40,
		gap = 0,
		x = -1,
		y = -1,
		strokeDasharray = "0",
		direction = "horizontal",
		hexagons,
		class: className,
		...props
	}: HexagonPatternProps = $props();

	const id = $props.id();
	const tileGeometry = $derived(getTileGeometry(radius, direction, gap));
	const solidStroke = $derived(isSolidStrokeDasharray(strokeDasharray));
	const dashedEdges = $derived(
		solidStroke ? null : collectUniqueHexEdges(tileGeometry.centers, radius, direction)
	);
</script>

<svg
	aria-hidden="true"
	class={cn(
		"pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
		className
	)}
	{...props}
>
	<defs>
		<pattern
			{id}
			width={tileGeometry.tileW}
			height={tileGeometry.tileH}
			patternUnits="userSpaceOnUse"
			{x}
			{y}
		>
			{#if solidStroke}
				{#each tileGeometry.centers as [cx, cy], i (`${cx}-${cy}-${i}`)}
					<polygon
						class="fill-none"
						points={hexPoints(cx, cy, radius, direction)}
						stroke-dasharray={strokeDasharray}
					/>
				{/each}
			{:else}
				{#each dashedEdges ?? [] as [a, b] (edgeLexKey(a, b))}
					<line
						class="fill-none"
						x1={a[0]}
						x2={b[0]}
						y1={a[1]}
						y2={b[1]}
						stroke-dasharray={strokeDasharray}
					/>
				{/each}
			{/if}
		</pattern>
	</defs>

	<rect width="100%" height="100%" fill={`url(#${id})`} stroke="none" />

	{#if hexagons && hexagons.length > 0}
		<svg aria-hidden="true" class="overflow-visible" {x} {y}>
			{#each hexagons as [col, row], i (`${col}-${row}-${i}`)}
				{@const [cx, cy] = hexCenter(col, row, radius, direction, gap)}
				<polygon points={hexPoints(cx, cy, radius - 1, direction)} stroke-width="0" />
			{/each}
		</svg>
	{/if}
</svg>
