import type { Component } from "svelte";
import type { Example } from "./examples";
import type { SEO } from "./seo";
import type { CodeBlock } from "$lib/components/ui/code";

export type ComponentBadge = "new" | "beta" | "updated" | "deprecated";

export type ComponentMeta = {
	id: string;
	title: string;
	description: string;
	category?: string;
	badge?: ComponentBadge;
};

export type PropDef = {
	name: string;
	type: string;
	default?: string;
	required?: boolean;
	description?: string;
};

export type PropsTable = {
	name?: string;
	desc?: string;
	props: PropDef[];
};

export type InstallComponentDocs = {
	installCode?: CodeBlock | CodeBlock[];
	tailwind?: CodeBlock;
	folderStructure?: string;
	packages?: string[];
};

export type View = {
	component: Component;
	code: CodeBlock | CodeBlock[];
	class: string;
	showRetry: boolean;
};

export type UsageCode = {
	code: CodeBlock | CodeBlock[];
};

export type ComponentDoc = ComponentMeta & {
	preview?: Component;
	previewCode?: CodeBlock | CodeBlock[];
	previewClass?: string;
	view?: View;
	usage?: UsageCode;
	installBlock?: InstallComponentDocs;
	examples?: Example[];
	additionalExamples?: Example[];
	seo: SEO;
	props?: PropsTable[];
	folderStructure?: string;
};
