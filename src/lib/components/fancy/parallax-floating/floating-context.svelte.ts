import { getContext, setContext } from "svelte";

export interface FloatingContextValue {
	registerElement: (id: string, element: HTMLDivElement, depth: number) => void;
	unregisterElement: (id: string) => void;
}

const FLOATING_CONTEXT_KEY = Symbol("floating-context");

export function setFloatingContext(value: FloatingContextValue): FloatingContextValue {
	setContext(FLOATING_CONTEXT_KEY, value);
	return value;
}

export function useFloatingContext(): FloatingContextValue | undefined {
	return getContext<FloatingContextValue | undefined>(FLOATING_CONTEXT_KEY);
}
