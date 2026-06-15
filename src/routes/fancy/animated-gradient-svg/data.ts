import AnimatedGradientSvgSvelteRaw from "$lib/components/fancy/animated-gradient-svg/animated-gradient-svg.svelte?raw";
import IndexTsRaw from "$lib/components/fancy/animated-gradient-svg/index.ts?raw";

import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "animated-gradient-svg",
	title: "Animated Gradient Svg",
	description: "An animated multi-color gradient background effect with SVG elements.",
	category: "fancy",
};

const seo: SEO = {
	title: "Animated Gradient Svg",
	description: "An animated multi-color gradient background effect with SVG elements.",
	keywords: ["Svelte", "Animated Gradient Svg", "Svelte Fancy Components"],
};

const installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{
			filename: "animated-gradient-svg.svelte",
			filecode: AnimatedGradientSvgSvelteRaw,
			lang: "svelte",
			isExpand: true,
		},
		{ filename: "index.ts", filecode: IndexTsRaw, lang: "typescript" },
	],
	tailwind: {
		filename: "layout.css",
		filecode: `@theme inline {
  --animate-background-gradient: background-gradient;

  @keyframes background-gradient {
      0%, 100% {
        transform: translate(0, 0);
        animationDelay: var(--background-gradient-delay, 0s);
      }
      20% {
        transform: translate(calc(100% * var(--tx-1, 1)), calc(100% * var(--ty-1, 1)));
      }
      40% {
        transform: translate(calc(100% * var(--tx-2, -1)), calc(100% * var(--ty-2, 1)));
      }
      60% {
        transform: translate(calc(100% * var(--tx-3, 1)), calc(100% * var(--ty-3, -1)));
      }
      80% {
        transform: translate(calc(100% * var(--tx-4, -1)), calc(100% * var(--ty-4, -1)));
      }
    }
}`,
	},
	folderStructure:
		"src/\n`-- lib/\n    `-- components/\n        `-- fancy/\n            `-- animated-gradient-svg/\n                |-- animated-gradient-svg.svelte\n                `-- index.ts",
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "preview.svelte",
		filecode: PreviewCodeRaw,
		lang: "svelte",
		hideLines: true,
	},
	installBlock,
	seo,
	props: [],
};
