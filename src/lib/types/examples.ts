import type { CodeBlock } from "$lib/components/ui/code";
import type { Component } from "svelte";
export type Example = {
    name: string;
    description?: string;
    preview_component: Component;
    source_code: CodeBlock | CodeBlock[]; // Single or Multiple code blocks
}