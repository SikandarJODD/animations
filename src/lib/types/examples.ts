import type { CodeBlock } from "$lib/components/ui/code";
import type { Component } from "svelte";

/**
 * Represents a usage example for component documentation
 */
export type Example = {
	name: string;
	description?: string;
	preview: Component;
	code: CodeBlock | CodeBlock[];
	previewClass?: string;
};
