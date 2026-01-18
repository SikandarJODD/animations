import type { Component } from "svelte";
import type { Example } from "./examples";
import type { SEO } from "./seo";
import type { CodeBlock } from "$lib/components/ui/code";

/**
 * Badge types for component status
 */
export type ComponentBadge = "new" | "beta" | "updated" | "deprecated";

/**
 * Minimal component info for navigation (sidebar, prev/next)
 */
export type ComponentMeta = {
  /** Unique identifier, used for URL path and registry (e.g., "animated-gradient-text") */
  id: string;
  /** Display title (e.g., "Animated Gradient Text") */
  title: string;
  /** Short description for tooltips/previews */
  description: string;
  /** Category for grouping in sidebar (e.g., "text", "buttons", "backgrounds") */
  category?: string;
  /** Badge to show (e.g., "new", "beta", "updated") */
  badge?: ComponentBadge;
};

/**
 * Represents a component prop for documentation
 */
export type PropDef = {
  /** Prop name */
  name: string;
  /** TypeScript type */
  type: string;
  /** Default value */
  default?: string;
  /** Whether the prop is required */
  required?: boolean;
  /** Description shown in info popover */
  description?: string;
};

/**
 * Complete documentation structure for a component
 */
export type ComponentDoc = ComponentMeta & {
  /** Preview component to render */
  preview?: Component;
  /** Code block(s) for preview */
  previewCode?: CodeBlock | CodeBlock[];
  /** Usage examples */
  examples: Example[];
  /** SEO metadata */
  seo: SEO;
  /** Tailwind CSS configuration if needed */
  tailwind?: CodeBlock;
  /** Component props */
  props?: PropDef[];
};

/** @deprecated Use ComponentDoc instead */
export type Structure = ComponentDoc;
/** @deprecated Use PropDef instead */
export type PropRow = PropDef;