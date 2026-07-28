export type Orientation = "horizontal" | "vertical";

export type Align = "start" | "center";

export type ParallelAlign = "start" | "end";

export type JunctionMarker = "none" | "square";

export type RectLike = {
	x: number;
	y: number;
	top: number;
	left: number;
	right: number;
	bottom: number;
	width: number;
	height: number;
};

export type NodeData = {
	element?: Element | null;
	parallel?: boolean;
	disabled?: boolean;
	start?: RectLike | null;
	end?: RectLike | null;
};

export type Connector = {
	x1: number;
	y1: number;
	x2: number;
	y2: number;
	isBottom?: boolean;
	disabled?: boolean;
	single?: boolean;
	fromId?: string;
	toId?: string;
};

export function rectEquals(a: RectLike | null | undefined, b: RectLike | null | undefined): boolean {
	if (a === b) return true;
	if (!a || !b) return false;

	return (
		a.x === b.x &&
		a.y === b.y &&
		a.top === b.top &&
		a.left === b.left &&
		a.right === b.right &&
		a.bottom === b.bottom &&
		a.width === b.width &&
		a.height === b.height
	);
}
