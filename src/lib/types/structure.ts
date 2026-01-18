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
  name: string;
  desc?: string;
  props: PropDef[];
};


export type ComponentDoc = ComponentMeta & {
  preview?: Component;
  previewCode?: CodeBlock | CodeBlock[];
  examples: Example[];
  seo: SEO;
  tailwind?: CodeBlock;
  props?: PropsTable[];
  folderStructure?: string;
};
