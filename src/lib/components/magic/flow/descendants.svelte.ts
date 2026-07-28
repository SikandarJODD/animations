import { getContext, setContext } from "svelte";

type DescendantBase = {
	element?: Element | null;
};

export type DescendantInfo<T extends DescendantBase = DescendantBase> = {
	id: string;
	props: T;
	order: number;
};

function compareDocumentOrder(a: Element | null | undefined, b: Element | null | undefined) {
	if (!a || !b || a === b || !a.isConnected || !b.isConnected) return null;

	const position = a.compareDocumentPosition(b);

	if (position & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
	if (position & Node.DOCUMENT_POSITION_PRECEDING) return 1;

	return null;
}

export class DescendantsState<T extends DescendantBase> {
	descendants = $state<DescendantInfo<T>[]>([]);
	measurementEpoch = $state(0);

	#descendants = new Map<string, DescendantInfo<T>>();
	#order = 0;

	mount(id: string, props: T) {
		if (!this.#descendants.has(id)) {
			this.#descendants.set(id, { id, props, order: this.#order++ });
			this.#sync();
			this.measurementEpoch += 1;
		} else {
			this.update(id, props);
		}

		return () => this.unmount(id);
	}

	update(id: string, props: T) {
		const existing = this.#descendants.get(id);

		if (!existing) {
			this.#descendants.set(id, { id, props, order: this.#order++ });
			this.#sync();
			this.measurementEpoch += 1;
			return;
		}

		this.#descendants.set(id, { ...existing, props });
		this.#sync();
	}

	unmount(id: string) {
		if (!this.#descendants.delete(id)) return;

		this.#sync();
		this.measurementEpoch += 1;
	}

	notifySizeChange = () => {
		this.measurementEpoch += 1;
	};

	getIndex(id: string) {
		return this.descendants.findIndex((descendant) => descendant.id === id);
	}

	getPrevious(id: string) {
		const index = this.getIndex(id);
		if (index <= 0) return undefined;
		return this.descendants[index - 1];
	}

	getNext(id: string) {
		const index = this.getIndex(id);
		if (index < 0 || index >= this.descendants.length - 1) return undefined;
		return this.descendants[index + 1];
	}

	#sync() {
		this.descendants = Array.from(this.#descendants.values()).sort((a, b) => {
			const byElement = compareDocumentOrder(a.props.element, b.props.element);
			if (byElement !== null) return byElement;
			return a.order - b.order;
		});
	}
}

const DESCENDANTS_CONTEXT_KEY = Symbol("flow-descendants");

export function createDescendantsState<T extends DescendantBase>() {
	return new DescendantsState<T>();
}

export function setDescendantsContext<T extends DescendantBase>(value: DescendantsState<T>) {
	setContext(DESCENDANTS_CONTEXT_KEY, value);
	return value;
}

export function useDescendantsContext<T extends DescendantBase>() {
	const context = getContext<DescendantsState<T> | undefined>(DESCENDANTS_CONTEXT_KEY);

	if (!context) {
		throw new Error("Flow descendants context is missing");
	}

	return context;
}

export function useOptionalDescendantsContext<T extends DescendantBase>() {
	return getContext<DescendantsState<T> | undefined>(DESCENDANTS_CONTEXT_KEY);
}
