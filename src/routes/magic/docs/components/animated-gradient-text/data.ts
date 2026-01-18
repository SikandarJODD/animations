import type { CodeBlock } from "$lib/components/ui/code";
import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta } from "$lib/types/structure";
import CustomSpeed from "./examples/custom-speed.svelte";
import CustomSpeedRaw from "./examples/custom-speed.svelte?raw";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
  id: "animated-gradient-text",
  title: "Animated Gradient Text",
  description: "An animated gradient background which transitions between colors for text.",
  category: "text",
  badge: "new",
};

const examples: Example[] = [
  {
    name: "Custom Speed",
    preview: CustomSpeed,
    code: {
      filename: "custom-speed.svelte",
      filecode: CustomSpeedRaw,
      lang: "svelte",
    },
  },
];

const seo: SEO = {
  title: "Animated Gradient Text - SV5 Animations",
  description: "Learn how to create animated gradient text effects in Svelte using the SV5 Animations library.",
  keywords: ["Svelte", "Animated Gradient Text", "SV5 Animations", "CSS Effects", "Web Design"],
};

const tailwind: CodeBlock = {
  filecode: `@theme inline {
  --animate-gradient: gradient 8s linear infinite;

  @keyframes gradient {
    to {
      background-position: var(--bg-size, 300%) 0;
    }
  }
}`,
  filename: "routes/layout.css",
  lang: "css",
  highlight: [2, [4, 8]],
};

export const data: ComponentDoc = {
  ...meta,
  preview: Preview,
  previewCode: {
    filename: "animated-text-badge.svelte",
    filecode: PreviewCode,
    lang: "svelte",
    hideLines: true,
    highlight: [2],
  },
  examples,
  seo,
  tailwind,
  props: [
    { name: "speed", type: "number", default: "1", description: "Animation speed multiplier for the gradient movement" },
    { name: "colorFrom", type: "string", default: "#ffaa40", description: "Starting color of the gradient" },
    { name: "colorTo", type: "string", default: "#9c40ff", description: "Ending color of the gradient" },
    { name: "class", type: "string", default: '""', description: "Additional CSS classes to apply" },
  ],
};

// shadcn-svelte@latest add http://localhost:5173/r/animated-gradient-text.json


