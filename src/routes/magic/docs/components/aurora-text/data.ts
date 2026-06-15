import Raw from "$lib/components/magic/aurora-text/aurora-text.svelte?raw";
import IndexTs from "$lib/components/magic/aurora-text/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import DemoExample from "./examples/demo-example.svelte";
import DemoExampleRaw from "./examples/demo-example.svelte?raw";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "aurora-text",
	title: "Aurora Text",
	description: "An animated gradient text component with aurora-like flowing colors.",
	category: "animation",
	badge: "new",
};

const seo: SEO = {
	title: "Aurora Text",
	description:
		"Learn how to create aurora text effects in Svelte using the Svelte 5 Animations library.",
	keywords: [
		"Svelte",
		"Aurora Text",
		"Svelte 5 Animations",
		"Animation",
		"Web Design",
		"Gradient Text",
	],
	titleTemplate: "%s | Svelte Magic UI",
};

let examples: Example[] = [
	{
		name: "Demo",
		preview: DemoExample,
		code: {
			filename: "demo-example.svelte",
			filecode: DemoExampleRaw,
			lang: "svelte",
		},
	},
];

let installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{
			filename: "aurora-text.svelte",
			filecode: Raw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTs,
			lang: "typescript",
		},
		{
			filename: "src/routes/layout.css",
			filecode: `@theme inline {
  --animate-aurora: aurora 8s ease-in-out infinite alternate;

  @keyframes aurora {
    0% {
      background-position: 0% 50%;
      transform: rotate(-5deg) scale(0.9);
    }
    25% {
      background-position: 50% 100%;
      transform: rotate(5deg) scale(1.1);
    }
    50% {
      background-position: 100% 50%;
      transform: rotate(-3deg) scale(0.95);
    }
    75% {
      background-position: 50% 0%;
      transform: rotate(3deg) scale(1.05);
    }
    100% {
      background-position: 0% 50%;
      transform: rotate(-5deg) scale(0.9);
    }
  }
}`,
			lang: "css",
		},
	],
	folderStructure: `src/
  └── lib/
      └── components/
          └── magic/
              └── aurora-text/
                  ├── aurora-text.svelte
                  └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "aurora-text.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "AuroraText",
			desc: "An animated gradient text component with flowing aurora colors.",
			props: [
				{
					name: "children",
					type: "Snippet",
					default: "required",
					description: "The text content to display with aurora effect",
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
				{
					name: "colors",
					type: "string[]",
					default: '["#FF0080", "#7928CA", "#0070F3", "#38bdf8"]',
					description: "Array of hex color values for the gradient animation",
				},
				{
					name: "speed",
					type: "number",
					default: "1",
					description: "Animation speed multiplier (higher = faster)",
				},
			],
		},
	],
	installBlock,
};
