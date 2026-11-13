import type { SupportedLanguage } from "#lib/highlighter.js";

/**
 * The stable data shape consumed by the documentation code composites.
 * Keep this separate from the primitive component props.
 */
export type CodeBlock = {
	filename: string;
	filecode: string;
	lang?: SupportedLanguage;
	isExpand?: boolean;
	highlight?: (number | [number, number])[];
	hideLines?: boolean;
	variant?: "default" | "secondary";
};
