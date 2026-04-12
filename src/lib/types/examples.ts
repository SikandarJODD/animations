import type { CodeBlock } from "$lib/components/ui/code";
import type { Component } from "svelte";

/**
 * Represents a usage example for component documentation
 */
export type Example = {
	/** Display name of the example */
	name: string;
	/** Optional description */
	description?: string;
	/** Preview component to render */
	preview: Component;
	/** Source code block(s) */
	code: CodeBlock | CodeBlock[];
	/** Extra classes forwarded to the PreviewComponent wrapper (e.g. "!p-0" for full-bleed backgrounds) */
	previewClass?: string;
};
