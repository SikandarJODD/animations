import { getContext, setContext } from "svelte";

export interface ProviderConfig {
	title: string;
	createUrl: (query: string) => string;
	icon: any;
}

export interface OpenInContextType {
	query: string;
}

class OpenInContextClass {
	private _query = $state("");

	constructor(query: string) {
		this._query = query;
	}

	get query(): string {
		return this._query;
	}

	set query(value: string) {
		this._query = value;
	}
}

const OPEN_IN_CONTEXT_KEY = Symbol("open-in-context");

export function createOpenInContext(query: string): OpenInContextClass {
	const context = new OpenInContextClass(query);
	setContext(OPEN_IN_CONTEXT_KEY, context);
	return context;
}

export function getOpenInContext(): OpenInContextClass {
	const context = getContext<OpenInContextClass>(OPEN_IN_CONTEXT_KEY);
	if (!context) {
		throw new Error("OpenIn components must be used within an OpenIn provider");
	}
	return context;
}

export const providers = {
	github: {
		title: "Open in GitHub",
		createUrl: (url: string) => url,
	},
	scira: {
		title: "Open in Scira",
		createUrl: (q: string) =>
			`https://scira.ai/?${new URLSearchParams({
				q,
			})}`,
	},
	chatgpt: {
		title: "Open in ChatGPT",
		createUrl: (q: string) =>
			`https://chatgpt.com/?${new URLSearchParams({
				hints: "search",
				q,
			})}`,
	},
	claude: {
		title: "Open in Claude",
		createUrl: (q: string) =>
			`https://claude.ai/new?${new URLSearchParams({
				q,
			})}`,
	},
	t3: {
		title: "Open in T3 Chat",
		createUrl: (q: string) =>
			`https://t3.chat/new?${new URLSearchParams({
				q,
			})}`,
	},
	v0: {
		title: "Open in v0",
		createUrl: (q: string) =>
			`https://v0.app?${new URLSearchParams({
				q,
			})}`,
	},
} as const;
