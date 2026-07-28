import type { MotionValue } from "motion-sv";
import { getContext, setContext } from "svelte";
import type { Align, JunctionMarker, Orientation } from "./types";

export type DiagramContextValue = {
	orientation: () => Orientation;
	align: () => Align;
	junctionMarker: () => JunctionMarker;
	x: MotionValue<number>;
	y: MotionValue<number>;
	wrapper: () => HTMLDivElement | null;
};

const DIAGRAM_CONTEXT_KEY = Symbol("flow-diagram");

export function setDiagramContext(value: DiagramContextValue) {
	setContext(DIAGRAM_CONTEXT_KEY, value);
	return value;
}

export function useDiagramContext() {
	const context = getContext<DiagramContextValue | undefined>(DIAGRAM_CONTEXT_KEY);

	if (!context) {
		throw new Error("Flow diagram context is missing");
	}

	return context;
}
