import type { Component } from "svelte";
import type { Example } from "./examples";
import type { SEO } from "./seo";
import type { CodeBlock } from "$lib/components/ui/code";

export type Structure ={
    title: string;
    description: string;
    installation_url: string;
    preview_component? : Component;
    preview_code? : CodeBlock | CodeBlock[];
    examples :  Example[];
    seo : SEO;
}