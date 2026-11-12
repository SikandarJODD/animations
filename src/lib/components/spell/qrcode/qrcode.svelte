<script lang="ts">
	import { cn } from "#lib/utils.js";
	import type { ClassValue, SVGAttributes } from "svelte/elements";
	// @ts-expect-error The qrcode package used here does not ship bundled TypeScript declarations.
	import QRCodePackage from "qrcode";

	type ErrorCorrectionLevel = "L" | "M" | "Q" | "H";

	interface QRModules {
		size: number;
		get(row: number, col: number): boolean;
	}

	interface QRData {
		modules: QRModules;
	}

	interface CirclePoint {
		cx: number;
		cy: number;
	}

	interface Props extends SVGAttributes<SVGSVGElement> {
		value: string;
		size?: number;
		fgColor?: string;
		bgColor?: string;
		errorCorrectionLevel?: ErrorCorrectionLevel;
		class?: ClassValue;
	}

	const QRCodeLib = QRCodePackage as {
		create(value: string, options: { errorCorrectionLevel: ErrorCorrectionLevel }): QRData;
	};

	function isInFinderPattern(row: number, col: number, size: number): boolean {
		return (row < 7 && col < 7) || (row < 7 && col >= size - 7) || (row >= size - 7 && col < 7);
	}

	let {
		value,
		size = 268,
		fgColor = "var(--foreground)",
		bgColor = "var(--background)",
		errorCorrectionLevel = "M",
		class: className,
		...restProps
	}: Props = $props();

	let qrData = $derived.by(() => {
		try {
			return QRCodeLib.create(value, { errorCorrectionLevel });
		} catch {
			return null;
		}
	});

	let moduleCount = $derived(qrData?.modules.size ?? 0);
	let moduleSize = $derived(moduleCount ? size / moduleCount : 0);
	let totalSize = $derived(size);
	let circleRadius = $derived(moduleSize / 3);

	let finderPositions = $derived([
		[0, 0],
		[0, moduleCount - 7],
		[moduleCount - 7, 0],
	] as [number, number][]);

	let finderSize = $derived(7 * moduleSize);
	let innerPadding = $derived(moduleSize);
	let innerWhiteSize = $derived(5 * moduleSize);
	let innerBlackSize = $derived(3 * moduleSize);

	let circles = $derived.by(() => {
		if (!qrData) {
			return [] as CirclePoint[];
		}

		const nextCircles: CirclePoint[] = [];

		for (let row = 0; row < moduleCount; row++) {
			for (let col = 0; col < moduleCount; col++) {
				if (qrData.modules.get(row, col) && !isInFinderPattern(row, col, moduleCount)) {
					nextCircles.push({
						cx: (col + 0.5) * moduleSize,
						cy: (row + 0.5) * moduleSize,
					});
				}
			}
		}

		return nextCircles;
	});
</script>

{#if qrData}
	<svg
		width={totalSize}
		height={totalSize}
		viewBox={`0 0 ${totalSize} ${totalSize}`}
		xmlns="http://www.w3.org/2000/svg"
		aria-label={`QR code for ${value}`}
		class={cn("block", className)}
		{...restProps}
	>
		<rect width={totalSize} height={totalSize} fill={bgColor} rx="12" ry="12" />

		{#each finderPositions as [row, col] (`${row}-${col}`)}
			{@const x = col * moduleSize}
			{@const y = row * moduleSize}

			<g>
				<rect
					{x}
					{y}
					width={finderSize}
					height={finderSize}
					fill={fgColor}
					rx="12"
					ry="12"
				/>
				<rect
					x={x + innerPadding}
					y={y + innerPadding}
					width={innerWhiteSize}
					height={innerWhiteSize}
					fill={bgColor}
					rx="8"
					ry="8"
				/>
				<rect
					x={x + innerPadding * 2}
					y={y + innerPadding * 2}
					width={innerBlackSize}
					height={innerBlackSize}
					fill={fgColor}
					rx="3"
					ry="3"
				/>
			</g>
		{/each}

		{#each circles as { cx, cy }, index (`${cx}-${cy}-${index}`)}
			<circle {cx} {cy} r={circleRadius} fill={fgColor} />
		{/each}
	</svg>
{/if}
