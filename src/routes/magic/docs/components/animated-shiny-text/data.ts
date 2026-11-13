import AnimatedShinyTextOrange from "./examples/animated-shiny-text-orange.svelte";
import AnimatedShinyTextOrangeRaw from "./examples/animated-shiny-text-orange.svelte?raw";
import Raw from "#lib/components/magic/animated-shiny-text/animated-shiny-text.svelte?raw";
import IndexTs from "#lib/components/magic/animated-shiny-text/index.ts?raw";

import type { CodeBlock } from "#lib/components/ui/code/index.js";
import type { Example } from "#lib/types/examples.js";
import type { SEO } from "#lib/types/seo.js";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "#lib/types/structure.js";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

import AnimatedShinyTextLink from "./examples/animated-shiny-text-link.svelte";
import AnimatedShinyTextLinkRaw from "./examples/animated-shiny-text-link.svelte?raw";
import AnimatedShinyTextHeading from "./examples/animated-shiny-text-heading.svelte";
import AnimatedShinyTextHeadingRaw from "./examples/animated-shiny-text-heading.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "animated-shiny-text",
	title: "Animated Shiny Text",
	description:
		"A light glare effect which pans across text making it appear as if it is shimmering.",
	category: "text",
	badge: "new",
};

const examples: Example[] = [
	{
		name: "documentation link",
		description:
			"A real documentation link with a narrow shimmer and a visible keyboard focus state.",
		preview: AnimatedShinyTextLink,
		code: {
			filename: "animated-shiny-text-link.svelte",
			filecode: AnimatedShinyTextLinkRaw,
			lang: "svelte",
		},
	},
	{
		name: "display text",
		description:
			"A wider highlight across a short heading with enough contrast to see the sweep.",
		preview: AnimatedShinyTextHeading,
		code: {
			filename: "animated-shiny-text-heading.svelte",
			filecode: AnimatedShinyTextHeadingRaw,
			lang: "svelte",
		},
	},
	{
		name: "orange accent",
		description:
			"Apply a narrow shimmer to an inline link without adding a badge or container.",
		preview: AnimatedShinyTextOrange,
		code: {
			filename: "animated-shiny-text-orange.svelte",
			filecode: AnimatedShinyTextOrangeRaw,
			lang: "svelte",
		},
	},
];

const seo: SEO = {
	title: "Animated Shiny Text",
	description:
		"Learn how to create shimmering text effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Animated Shiny Text", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

const tailwind: CodeBlock = {
	filecode: `@theme inline {
  --animate-shiny-text: shiny-text var(--duration, 8s) infinite;

  @keyframes shiny-text {
    0%,
    90%,
    100% {
      background-position: calc(-100% - var(--shiny-width)) 0, 0 0;
    }
    30%,
    60% {
      background-position: calc(100% + var(--shiny-width)) 0, 0 0;
    }
  }
}`,
	filename: "routes/layout.css",
	lang: "css",
	highlight: [2, [4, 14]],
};

let installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{
			filename: "animated-shiny-text.svelte",
			filecode: Raw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTs,
			lang: "typescript",
		},
	],
	tailwind,
	folderStructure: `src/
└── lib/
    └── components/
        └── magic/
            └── animated-shiny-text/
                ├── animated-shiny-text.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "animated-shiny-text.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	usage: {
		code: {
			filename: "usage.svelte",
			filecode: `<script lang="ts">
	import { AnimatedShinyText } from "#lib/components/magic/animated-shiny-text/index.js";
</script>

<AnimatedShinyText>Shiny text</AnimatedShinyText>`,
			lang: "svelte",
		},
	},
	examples,
	seo,
	props: [
		{
			name: "Animated Shiny Text",
			desc: "A text component with a light glare shimmer effect.",
			props: [
				{
					name: "shimmerWidth",
					type: "number",
					default: "100",
					description: "The width of the shimmer effect in pixels",
				},
				{
					name: "class",
					type: "ClassValue",
					default: '""',
					description: "Additional CSS classes to apply",
				},
				{
					name: "duration",
					type: "number",
					default: "8",
					description: "The duration of the shimmer animation in seconds",
				},
				{
					name: "children",
					type: "string | Svelte snippet",
					default: "",
					description: "The text content to display with the shimmer effect",
				},
			],
		},
	],
	installBlock,
};
