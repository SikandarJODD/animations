import { getContext, setContext } from "svelte";

export type FlowNodeAnchorContextValue = {
	registerStartAnchor: (ref: HTMLElement | null) => void;
	registerEndAnchor: (ref: HTMLElement | null) => void;
};

const FLOW_NODE_CONTEXT_KEY = Symbol("flow-node-anchor");

export function setFlowNodeAnchorContext(value: FlowNodeAnchorContextValue) {
	setContext(FLOW_NODE_CONTEXT_KEY, value);
	return value;
}

export function useFlowNodeAnchorContext() {
	const context = getContext<FlowNodeAnchorContextValue | undefined>(FLOW_NODE_CONTEXT_KEY);

	if (!context) {
		throw new Error("Flow.Anchor must be used within Flow.Node");
	}

	return context;
}
