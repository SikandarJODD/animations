import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { Structure } from "$lib/types/structure";
import CustomSpeed from "./examples/custom-speed.svelte";
import CustomSpeedRaw from "./examples/custom-speed.svelte?raw";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

let examples: Example[] = [
    {
        name: "Custom Speed",
        preview_component: CustomSpeed,
        source_code: {
            filename: "custom-speed.svelte",
            filecode: CustomSpeedRaw,
            lang: "svelte",
        }
    }
]

let seo: SEO = {
    title: "Animated Gradient Text - SV5 Animations",
    description: "Learn how to create animated gradient text effects in Svelte using the SV5 Animations library.",
    keywords: ["Svelte", "Animated Gradient Text", "SV5 Animations", "CSS Effects", "Web Design"]
}

export let data: Structure = {
    title: "Animated Gradient Text",
    description: "An animated gradient background which transitions between colors for text.",
    installation_url: "animated-gradient-text.json",
    preview_component: Preview,
    preview_code: {
        filename: "animated-gradient-text.svelte",
        filecode: PreviewCode,
        lang: "svelte",
    },
    examples: examples,
    seo: seo
}

// shadcn-svelte@latest add http://localhost:5173/r/animated-gradient-text.json


