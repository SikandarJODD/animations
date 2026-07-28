import type { Connector, Orientation } from "./types";

type PathProps = Partial<{
	cornerRadius: number;
	midOffset: number;
	arrowheadOffset: number;
	isBottom: boolean;
	single: boolean;
	orientation: Orientation;
}>;

const FLAT_THRESHOLD = 2;

export function createRoundedPath(
	{ x1, y1, x2, y2 }: Connector,
	{
		cornerRadius: maxCornerRadius = 8,
		midOffset = 32,
		arrowheadOffset = 8,
		isBottom = false,
		single = false,
		orientation = "vertical",
	}: PathProps = {}
) {
	const cornerRadius = Math.min(
		maxCornerRadius,
		Math.abs(orientation === "horizontal" ? (y2 - y1) / 2 : (x2 - x1) / 2)
	);

	if (orientation === "horizontal") {
		if (Math.abs(y2 - y1) <= FLAT_THRESHOLD) {
			return `M ${x1} ${y1} L ${x2 - arrowheadOffset} ${y2}`;
		}

		const verticalX = single || isBottom ? x2 - midOffset : x1 + midOffset;
		const isGoingRight = x2 > x1;
		const horizontalSign = isGoingRight ? 1 : -1;
		const isGoingDown = y2 > y1;
		const verticalSign = isGoingDown ? 1 : -1;

		const firstHorizontalEnd = verticalX - horizontalSign * cornerRadius;
		const verticalStart = y1 + verticalSign * cornerRadius;
		const verticalEnd = y2 - verticalSign * cornerRadius;
		const secondHorizontalStart = verticalX + horizontalSign * cornerRadius;
		const pathEndX = x2 - horizontalSign * arrowheadOffset;

		const bottomCurveCommands = [
			`L ${firstHorizontalEnd} ${y1}`,
			`Q ${verticalX} ${y1} ${verticalX} ${verticalStart}`,
			single
				? `L ${verticalX} ${verticalEnd} Q ${verticalX} ${y2} ${secondHorizontalStart} ${y2}`
				: `L ${verticalX} ${y2}`,
		];

		const topCurveCommands = [
			single
				? `L ${firstHorizontalEnd} ${y1} Q ${verticalX} ${y1} ${verticalX} ${verticalStart}`
				: `L ${verticalX} ${y1}`,
			`L ${verticalX} ${verticalEnd}`,
			`Q ${verticalX} ${y2} ${secondHorizontalStart} ${y2}`,
		];

		return [
			`M ${x1} ${y1}`,
			...(isBottom ? bottomCurveCommands : topCurveCommands),
			`L ${pathEndX} ${y2}`,
		].join(" ");
	}

	if (Math.abs(x2 - x1) <= FLAT_THRESHOLD) {
		return `M ${x1} ${y1} L ${x2} ${y2 - arrowheadOffset}`;
	}

	const horizontalY = single || isBottom ? y2 - midOffset : y1 + midOffset;
	const isGoingRight = x2 > x1;
	const horizontalSign = isGoingRight ? 1 : -1;
	const isGoingDown = y2 > y1;
	const verticalSign = isGoingDown ? 1 : -1;

	const firstVerticalEnd = horizontalY - cornerRadius;
	const horizontalStart = x1 + horizontalSign * cornerRadius;
	const horizontalEnd = x2 - horizontalSign * cornerRadius;
	const secondVerticalStart = horizontalY + cornerRadius;
	const pathEndY = y2 - verticalSign * arrowheadOffset;

	const bottomCurveCommands = [
		`L ${x1} ${firstVerticalEnd}`,
		`Q ${x1} ${horizontalY} ${horizontalStart} ${horizontalY}`,
		single
			? `L ${horizontalEnd} ${horizontalY} Q ${x2} ${horizontalY} ${x2} ${secondVerticalStart}`
			: `L ${x2} ${horizontalY}`,
	];

	const topCurveCommands = [
		single
			? `L ${x1} ${firstVerticalEnd} Q ${x1} ${horizontalY} ${horizontalStart} ${horizontalY}`
			: `L ${x1} ${horizontalY}`,
		`L ${horizontalEnd} ${horizontalY}`,
		`Q ${x2} ${horizontalY} ${x2} ${secondVerticalStart}`,
	];

	return [
		`M ${x1} ${y1}`,
		...(isBottom ? bottomCurveCommands : topCurveCommands),
		`L ${x2} ${pathEndY}`,
	].join(" ");
}
